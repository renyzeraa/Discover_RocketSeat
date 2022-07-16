// função anonima, quando nao tem um nome declarado

const phrase = () => {
  console.log('Runs anonymous function')
}

phrase()

//  mais exemplos
//           () = parameters
const sum = (x, y) => {
  console.log(x + y)
}

sum(5, 2) // ( here ) arguments

const sum2 = (x, y) => {
  let total = x + y // definir sempre um resultado com let
  return total // function sempre retorna algo
}

let x = 10
let y = 20

console.log(sum2(x, y))
