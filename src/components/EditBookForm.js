import { useNavigate } from 'react-router-dom'
// import { useState } from 'react'
import { useGlobalContext } from '../context'
import LinkTo from './LinkTo'
import SubmitButton from './SubmitButton'

function EditBookForm(props) {
  const {
    currentBook,
    books, 
    setCurrentBook,
    setBooks,
  } = useGlobalContext() 
  // const [book, setBook] = useState(currentBook)
  let navigate = useNavigate()
  
  const handleInputChange = (event) => {
    const {name, value} = event.target

    setCurrentBook({...currentBook, [name]: value})
  }
  
  const handleSubmit = (event) => {
    event.preventDefault()

    updateBook(currentBook.id, currentBook)
    navigate("/")
  }

  // CRUD operations (update book)
  const updateBook = (id, updateBook) => {
    setBooks(books.map(book => (book.id === id ? updateBook : book)))
  }
  
  return (
    <form className="AddBookForm" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="inputForJudulBuku">Judul Buku</label>
        <input 
          type="text"
          id="titleBook"
          name="title"
          value={currentBook.title}
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
          value={currentBook.author}
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
          value={currentBook.year}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor="selesaiDibaca">Selesai dibaca</label>
        <input 
          type="checkbox" 
          id="completeCheckbox" 
          name="isComplete"
          checked={currentBook.isComplete}
          onChange={handleInputChange}
        />
      </div>
      <div className="flex jcc">
        <SubmitButton 
          value="Update Buku" 
          className="m-10"
        />
        <LinkTo 
          to="/" 
          innerText="Kembali" 
          className="cancel m-10"
        />
      </div>
    </form>
  )
}

export default EditBookForm