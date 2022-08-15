import { Container } from './styles'
import { Card } from '../../components/Card'
export function Home() {
  return (
    <Container>
      <h1>Lista de presença</h1>
      <input type="text" placeholder="Digite seu nome" />
      <br />
      <button type="button">Adicionar</button>
      <Card />
    </Container>
  )
}
