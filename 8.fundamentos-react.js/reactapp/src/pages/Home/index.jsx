import { Container } from './styles'
import { Card } from '../../components/Card'
import { useState } from 'react'

export function Home() {
  const [studentName, setStudentName] = useState('')

  return (
    <Container>
      <h1>Lista de presença: {studentName}</h1>
      <input
        type="text"
        placeholder="Digite seu nome"
        onChange={e => setStudentName(e.target.value)}
      />
      <br />
      <button type="button">Adicionar</button>
      <Card name="Renan Leandro da Silva" time="11.11.11" />
    </Container>
  )
}
