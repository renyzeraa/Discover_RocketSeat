import { Container } from './styles'
import { Card } from '../../components/Card'
import React, { useState, useEffect } from 'react'

export function Home() {
  const [studentName, setStudentName] = useState('')
  const [students, setStudents] = useState([])
  const [user, setUser] = useState({ name: '', avatar: '' })

  function randomAddStudent() {
    const newStudent = {
      name: studentName,
      time: new Date().toLocaleTimeString('pt-br', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      })
    }

    if (studentName === '') {
      throw new Error(`Student ${studentName} already exists`)
    }

    setStudents(prev => [...prev, newStudent])
  }

  useEffect(() => {
    fetch('https://api.github.com/users/renyzeraa')
      .then(response => response.json())
      .then(data => {
        setUser({
          name: data.name,
          avatar: data.avatar_url
        })
      })
  }, [])

  return (
    <Container>
      <header>
        <h1>Lista de presença</h1>
        <div>
          <strong>{user.name}</strong>
          <img src={user.avatar} alt="User image" />
        </div>
      </header>
      <input
        type="text"
        placeholder="Digite seu nome"
        onChange={e => setStudentName(e.target.value)}
      />
      <br />
      <button type="button" onClick={randomAddStudent}>
        Adicionar
      </button>
      {students.map(student => (
        <Card key={student.time} name={student.name} time={student.time} />
      ))}
    </Container>
  )
}
