import React, { useEffect, useRef } from "react"
//Helpers
import { linearFunction } from "./../../helper/mathHelper"
//Styled Componentes
import { BlobWrapper } from "./../../styles/aboutStyles"

const color = "#ffd700"
// const limit = 200
// const pow = 4
// const force = 0.01

const Blobs = () => {
  const canvasblob = useRef(null)
  const context = useRef(null)
  const blob = useRef(null)
  const raf = useRef(null)
  let mouse = { x: 0, y: 0 }

  const Cloud = function (args) {
    this.sides = args.sides
    this.radius = args.radius
    this.deface = args.deface
    this.lineWidth = 1
    this.limit = args.limit
    this.pow = args.pow
    this.force = args.force
    this.x = args.x
    this.y = args.y

    this.vertex = []
    this.setup = () => {
      this.vertex = []
      this.dps = (Math.PI * 2) / this.sides
      for (let i = 0; i < this.sides; i++) {
        const angle = this.dps * i
        const x =
          Math.sin(angle) * (this.radius + Math.random() * this.deface) + this.x
        const y =
          Math.cos(angle) * (this.radius + Math.random() * this.deface) + this.y
        const vtx = new Vertex(x, y, this.limit, this.pow, this.force)
        this.vertex.push(vtx)
      }
    }
    this.render = ctx => {
      ctx.beginPath()
      ctx.fillStyle = color
      let actual = this.vertex[this.vertex.length - 1]
      const first = this.vertex[0]
      let next = this.vertex[0]
      const start = actual.curveTo(next)
      ctx.moveTo(start.x, start.y)
      for (let i = 1; i < this.vertex.length; i++) {
        actual = this.vertex[i]
        next.draw(ctx, actual)
        next = actual
      }
      next.draw(ctx, first)
      ctx.lineWidth = this.lineWidth
      ctx.closePath()
      ctx.fill()
    }
    this.setup()
    return this
  }

  const Vertex = function (x, y, limit, pow, force) {
    this.x0 = this.x = x
    this.y0 = this.y = y
    this.repulse = () => {
      const dx = mouse.x - this.x
      const dy = mouse.y - this.y
      const angle = Math.atan2(dx, dy)
      const dist = Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2))
      const displacement = limit / dist
      this.x -= Math.sin(angle) * displacement * pow
      this.y -= Math.cos(angle) * displacement * pow
      this.x += (this.x0 - this.x) * force
      this.y += (this.y0 - this.y) * force
    }
    this.draw = (ctx, to) => {
      this.repulse()
      const ep = this.curveTo(to)
      ctx.quadraticCurveTo(this.x, this.y, ep.x, ep.y)
    }
    this.curveTo = to => {
      return {
        x: (this.x + to.x) / 2,
        y: (this.y + to.y) / 2,
      }
    }
    return this
  }

  const onResizeBlob = _ => {
    canvasblob.current.style.width = `${window.innerWidth}px`
    canvasblob.current.style.height = `${window.innerHeight}px`
    canvasblob.current.width = window.innerWidth * window.devicePixelRatio
    canvasblob.current.height = window.innerHeight * window.devicePixelRatio
    if (window.innerWidth > 650) {
      init()
    } else {
      init("up")
    }
  }

  const actCoor = e => {
    mouse.x = e.clientX
    mouse.y = e.clientY
  }

  const render = _ => {
    context.current.save()
    context.current.clearRect(
      0,
      0,
      canvasblob.current.width,
      canvasblob.current.height
    )
    blob.current.render(context.current)
    context.current.restore()
  }

  const init = pos => {
    const left = pos === "up" ? 0.5 : 0.35
    const top = pos === "up" ? 0.6 : 0.45
    blob.current = new Cloud({
      sides: 6,
      radius: linearFunction(window.innerWidth, [0, 1200], [1, 100]),
      deface: linearFunction(window.innerWidth, [0, 1200], [1, 10]),
      limit: linearFunction(window.innerWidth, [0, 1200], [1, 250]),
      pow: linearFunction(window.innerWidth, [0, 1200], [1, 8]),
      force: 0.05,
      x: window.innerWidth - window.innerWidth * left,
      y: window.innerHeight - window.innerHeight * top,
    })
  }

  const animate = _ => {
    raf.current = requestAnimationFrame(animate)
    render()
  }

  useEffect(() => {
    context.current = canvasblob.current.getContext("2d")
    onResizeBlob()
    animate()
    window.addEventListener("pointermove", actCoor)
    window.addEventListener("resize", onResizeBlob)

    return () => {
      cancelAnimationFrame(raf.current)
      window.removeEventListener("pointermove", actCoor)
      window.removeEventListener("resize", onResizeBlob)
    }
    //eslint-disable-next-line
  }, [])
  return (
    <BlobWrapper className="blob-wrapper">
      <canvas className="blob" aria-label="Blobs Yellow" ref={canvasblob} />
    </BlobWrapper>
  )
}

export default Blobs
