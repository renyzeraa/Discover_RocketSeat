/*
 ### Sistema de gastos familiar

 Crie um objeto que possuira 2 propriedades, ambas do tipo array?
  * receitar: []
  * despesas: []

Agora, crie uma funcao que ira calcular o total de receitas e despesas, e ira mostrar uma mensagem se a familia esta com saldo positivo ou negativo, seguido do valor do saldo

*/

const gastos = {
  receita: [1200, 100, 50, 80],
  despesas: [2000, 100, 50, 80]
}

let i, j

const receita = gastos.receita
const despesas = gastos.despesas

let sum1 = 0
for (let value of receita) {
  sum1 += value
}

let sum2 = 0
for (let value of despesas) {
  sum2 += value
}

let finalValue = (sum1 - sum2).toFixed(2)
const result = finalValue >= 0 ? 'Saldo Positivo' : 'Saldo Negativo'

console.log(`${result} de R$ ${finalValue} reais`)
