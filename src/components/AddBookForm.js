// import { useState, useEffect } from 'react'
import { useGlobalContext } from '../context'
import LinkTo from './LinkTo'
import SubmitButton from './SubmitButton'

function AddBookForm(props) {
  // Setting state
  // const [book, setBook] = useState({})
  const {
    book,
    books, 
    checked,
    setBook,
    setChecked,
    setBooks 
  } = useGlobalContext()    

  // handle inputs change
  const handleInputChange = (event) => {
    const name = event.target.name
    const value = event.target.value
    const checked = event.target.checked

    setBook({...book, [name]: value})
    setChecked(checked)
  }

  // handle submit 
  const handleSubmit = (event) => {
    event.preventDefault()

    addBook(book)
  }

  // CRUD operations (add book)
  const addBook = (book) => {
    book.id = books.length + 1
    book.isComplete = checked
    setBooks([...books, book])
  }

  // useEffect(() => {
  //   localStorage.setItem("books_data", JSON.stringify(props.books))
  //   console.log(props.books)
  // }, [props.books])

  return (
    <form className="AddBookForm" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="inputForJudulBuku">Judul Buku</label>
        <input 
          type="text"
          id="titleBook"
          name="title"
          value={book.title || ""}
          onChange={handleInputChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="inputForPenulis">Penulis</label>
        <input 
          type="text"
          id="author"
          name="author"
          value={book.author || ""}
          onChange={handleInputChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="inputForTahun">Tahun</label>
        <input 
          type="number"
          id="year"
          name="year"
          value={book.year || ""}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor="selesaiDibaca">Selesai dibaca</label>
        <input 
          type="checkbox" 
          id="completeCheckbox" 
          name="isComplete"
          checked={checked}
          onChange={handleInputChange}
        />
      </div>
      <div className="flex jcc">
        <SubmitButton 
          value="Tambah Buku Baru" 
          className="m-10"
        />
        <LinkTo 
          to="/" 
          innerText="Home" 
          className="cancel m-10"
        />
      </div>
    </form>
  )
}

export default AddBookForm