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

let a = 10
let b = 20

console.log(sum2(a, b))

// function scope

let subject = 'Ser ou não ser'

function createThink(subject) {
  subject = 'Study'
  return subject
}

console.log(subject)
console.log(createThink(subject))

// function hoisting

sayMyName()

function sayMyName() {
  console.log('Renan')
}
