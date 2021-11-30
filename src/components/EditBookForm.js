import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import LinkTo from './LinkTo'
import SubmitButton from './SubmitButton'

function EditBookForm(props) {
  let navigate = useNavigate()
  
  const [book, setBook] = useState(props.currentBook)

  const handleInputChange = (event) => {
    const {name, value} = event.target

    setBook({...book, [name]: value})
  }
  
  const handleSubmit = (event) => {
    event.preventDefault()

    props.updateBook(book.id, book)
    navigate("/")
  }

  return (
    <form className="AddBookForm" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="inputForJudulBuku">Judul Buku</label>
        <input 
          type="text"
          id="titleBook"
          name="title"
          value={book.title}
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
          value={book.author}
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
          value={book.year}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor="selesaiDibaca">Selesai dibaca</label>
        <input 
          type="checkbox" 
          id="completeCheckbox" 
          name="isComplete"
          checked={book.isComplete}
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