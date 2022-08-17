/*
 ### Trasnformar notas escolares

 Crie um algoritmo que transforme as notas do sistema númerico para sistema de notas em caracteres do tipo A B C 

  * de 90 para cima - A
  * entre 80 - 89   - B
  * entre 70 - 79   - C
  * entre 60 - 69   - D
  * menor que 60    - F

*/

function letterToNumber(score) {
  if (score >= 1 && score < 60) {
    score = 'F'
  } else if (score >= 60 && score <= 69) {
    score = 'D'
  } else if (score >= 70 && score <= 79) {
    score = 'C'
  } else if (score >= 80 && score <= 89) {
    score = 'B'
  } else if (score >= 90 && score <= 100) {
    score = 'A'
  } else {
    score = 'invalid score'
  }
  return console.log(score)
}

let score = letterToNumber(0)
