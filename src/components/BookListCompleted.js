import Book from './Book'

function BookListCompleted(props) {
  const bgColor = {
    backgroundColor: "#FFEFA1"
  }

  return (
    <div className="BookList-container card" style={bgColor}>
      <h3>Selesai Dibaca</h3> 
      <ul id="completed" className="BookList">
        {props.books.map(book => {
          return (
            book.isComplete &&
              <Book 
                book={book}
                key={book.id}
                id={book.id}
                bookTitle={book.title} 
                bookAuthor={book.author}
                bookYear={book.year}
                isComplete={book.isComplete}
                toggleIsComplete={props.toggleIsComplete}
                deleteBook={props.deleteBook}
                editBook={props.editBook}
              />
            )
          })
        }
      </ul>
    </div>
  )
}

export default BookListCompleted