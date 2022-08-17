/*
 ### Celsius em fahrenheit

 Crie uma funcao que receba uma string em celsius ou fahrenheit e faca a transformação de uma unidade para outra

 C = ( F - 32) * 5/9

 F = C * 9/5 + 32

 */

function transformDegree(deg) {
  const celsiusExists = deg.toUpperCase().includes('C')
  const fahrenheitExists = deg.toUpperCase().includes('F')

  //fluxo de erro
  if (!fahrenheitExists && !celsiusExists) {
    throw new Error('Invalid degree: ' + deg)
  }

  //fluxo ideal F -> C
  let updatedDegree = Number(deg.toUpperCase().replace('F', ''))
  let formula = fahrenheit => (fahrenheit - 32) * (5 / 9)
  let degreeSign = 'C'

  //fluxo alternativo
  if (celsiusExists) {
    updatedDegree = Number(deg.toUpperCase().replace('C', ''))
    formula = celsius => celsius * (9 / 5) + 32
    degreeSign = 'F'
  }

  return formula(updatedDegree) + degreeSign
}

try {
  console.log(transformDegree('50f'))
  console.log(transformDegree('10C'))
  transformDegree('10z')
} catch (e) {
  console.log(e.message)
}
