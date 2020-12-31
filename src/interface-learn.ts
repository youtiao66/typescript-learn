interface SquareConfig {
  color?: string
  width?: number
}

function createSquare(squareConfig: SquareConfig) : { color: string, area: number } {
  let newSquare = { color: 'white', area: 100 }
  if (squareConfig.color) {
    newSquare.color = squareConfig.color
  }
  if (squareConfig.width) {
    newSquare.area = squareConfig.width * squareConfig.width
  }
  return newSquare
}


let mySquare = createSquare({ color: 'black' })
