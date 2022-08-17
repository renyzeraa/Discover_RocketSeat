/*

 ### Buscando e contando dados em Arrays

 Baseado no Array de Livros pro Categoria abaixo, faça os seguitnes desafios

 - Contar o número de categorias e o número de livros em cada categoria
 - Contar o número de autores
 - Mostrar livros do autor Augusto Cury
 - Transformar a função acima em uma função que ira receber o nome do autor e devolver os livros desse autor.

 */

const booksByCategory = [
  {
    category: 'Riqueza',
    books: [
      {
        title: 'Os segredos da mente milionária',
        author: 'T. Harv Eker'
      },
      {
        title: 'O homem mais rico da Babilônia',
        author: 'George S. Clason'
      },
      {
        title: 'Pai rico, pai pobre',
        author: 'Robert T. Kiyosaki e Sharon L. Lechter'
      }
    ]
  },
  {
    category: 'Inteligência Emocional',
    books: [
      {
        title: 'Você é Insubstituível',
        author: 'Augusto Cury'
      },
      {
        title: 'Ansiedade – Como enfrentar o mal do século',
        author: 'Augusto Cury'
      },
      {
        title: 'Os 7 hábitos das pessoas altamente eficazes',
        author: 'Stephen R. Covey'
      }
    ]
  }
]

for (let category of booksByCategory) {
  console.log('Total de livro da categoria: ' + category.category)
  console.log(category.books.length)
}

function countAuthors() {
  let authors = []

  for (let category of booksByCategory) {
    for (let book of category.books) {
      if (authors.indexOf(book.author) == -1) {
        authors.push(book.author)
      }
    }
  }

  console.log('Total de autores: ' + authors.length)
}

countAuthors()

function booksCury() {
  let books = []

  for (let category of booksByCategory) {
    for (let book of category.books) {
      if (book.author === 'Augusto Cury') {
        books.push(book.title)
      }
    }
  }

  console.log('Total de livros de Cury: ' + books.join(', '))
}

booksCury()

function booksOfAuthor(author) {
  let books = []

  for (let category of booksByCategory) {
    for (let book of category.books) {
      if (book.author === author) {
        books.push(book.title)
      }
    }
  }

  console.log(`Os livros de ${author}: ${books.join(', ')}`)
}

booksOfAuthor('T. Harv Eker')
