import { Container } from './styles'

export function Home() {
  return (
    <Container>
      <h1>Lista de presença</h1>
      <input type="text" placeholder="Digite seu nome" />
      <input type="button" value="Enviar" />
    </Container>
  )
}
