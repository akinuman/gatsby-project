export const linearFunction = (unknown, Fx, Y) => {
    return (unknown - Fx[0]) * ((Y[1] - Y[0]) / (Fx[1] - Fx[0])) + Y[0]
}
  