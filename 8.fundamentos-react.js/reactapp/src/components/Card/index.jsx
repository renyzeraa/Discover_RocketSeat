import { Container } from './styles'

export function Card({ name, time }) {
  return (
    <Container>
      <strong>{name}</strong>
      <small>{time}</small>
    </Container>
  )
}
