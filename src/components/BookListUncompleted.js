// import { useEffect, useState } from "react"
import Book from './Book'

function BookListUncompleted(props) {
  const bgColor = {
    backgroundColor: "#FFCB91"
  }
  
  return (
    <div className="BookList-container card" style={bgColor}>
      <h3>Belum Selesai Dibaca</h3> 
      <ul id="uncompleted" className="BookList">
        {props.books.map(book => {
          return (
            !book.isComplete &&
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

export default BookListUncompleted