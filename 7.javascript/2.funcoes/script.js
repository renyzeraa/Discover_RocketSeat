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

// sayMyName()

// function sayMyName() {
//   console.log('Renan')
// }

//mesma funcao com arrow function
//funcao nao declarada nao funciona o hoisting
let sayMyName = () => {
  console.log('Renan')
}

sayMyName()

// callback um funcao dentro da outra

function sayMyName1(name) {
  console.log('Primeiro passo, antes da callback')

  name()

  console.log('Terceiro passo, depois da callback')
}

sayMyName1(() => {
  console.log('Callback')
})

// constructor functions

function Person(name) {
  this.name = name
  this.walk = () => {
    return this.name + ' esta andando'
  }
}

let renan = new Person('Renan')
console.log(renan.walk())
