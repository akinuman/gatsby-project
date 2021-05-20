import React from "react"


export default function LinkPDF({ linkPdfText }) {
    const marginLeft =  "8vw" 
  return (
    <div className="resume-wrapper">
      <div className="like-info">
        <div className="content">
          <div className="like-info-overflow">
            <div className="like-info-line">
              <a
                className="link-pdf"
                aria-label="Curriculum Vitae"
                rel="noreferrer"
                href="/resume.pdf"
                download="resume.pdf"
                
              >
                {linkPdfText[0]}
              </a>
            </div>
          </div>
          <div className="like-info-overflow">
            <div className="like-info-line" style={{ marginLeft }}>
              {linkPdfText[1]}
            </div>
          </div>
          <div className="like-info-overflow">
            <div className="like-info-line">
              {linkPdfText[2]}
              <span role="img" aria-label="computer" className="emoji-icon">
                📋
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
