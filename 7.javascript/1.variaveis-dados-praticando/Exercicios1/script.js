// 1. declare uma variavel de nome weight
let weight

// 2. que tipo de dado é a variavel acima
console.log(typeof weight)

/* 3. declare uma variavel e atribua valores para cada um dos dados:
  name: sting
  age: Number(integer)
  stars: number (float)
  isSubscribed: Boolean
*/

let name = 'Renan',
  age = 23,
  stars = 2.2,
  isSubscribed = true

// 4. A variavel student abaixo é de que tipo de dados?
//  4.1 Atribua a ela as mesmas propriedades e valores do exercicio 3.
//  4.2 Mostre no console a seguinte mensagem:
//    <name> de idade <age> pesa <weight> kg.
//     atenção, subistitua as variaveis para que seja impresso corretamente.

let student = {
  name: 'Renan',
  age: 23,
  weight: 85,
  isSubscribed: true
}
// object

console.log(
  `${student.name} de idade ${student.age}, pesa ${student.weight} kg.`
)

/* 5. Declare uma variavel do tipo Array, 
de nome students e atribua a ela nenhum valor, 
ou seja, somente o Array vazio.
*/

let students = []

/* 6. Reatribua valor para a avariavel acima, 
colocando dentro dela o bjeto student da questão 4, 
usar o objeto criado e inserir na array.
*/

students = [student]

/* 
  7. Coloque no console o valor da 
  posição zero do array acima
*/
console.log(students[0])

/*
  8. Crie um novo student e coloque na 
  posição 1 do Array students
*/

const pedro = { name: 'Pedro', age: 20, weight: 75, isSubscribed: false }

students[1] = pedro

/*
  9. Sem rodar o código responda qual é
  a resposta do código abaixo e por que?
  Apos sua resposta, rode o codigo e veja 
  se voce acertou

  console.log(a)
  var a = 1

  resposta = undefined
*/
