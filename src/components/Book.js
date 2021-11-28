import { useNavigate } from "react-router-dom"

function Book(props) {
  let navigate = useNavigate()
  
  const navigateToEditBook = () => {
    navigate("/EditBook")
  }

  return (
    <li className="Book shadow">
      <div className="Book-header">
        <h4>{props.bookTitle}</h4>
        {/* <button onClick={() => navigate("/EditBook")}>Edit</button> */}
        <button onClick={() => props.editBook(props.book, navigateToEditBook)}>Edit</button>
      </div>
      <div className="Book-info">
        <p>Penulis : {props.bookAuthor}</p>
        <p>Tahun : {props.bookYear}</p>
      </div>
      <div className="Book-button center">
        {props.isComplete ? 
          <button 
            className="complete-button" 
            onClick={() => props.toggleIsComplete(props.id, props.isComplete)}>
              Belum Selesai
          </button>
          : 
          <button 
            className="complete-button" 
            onClick={() => props.toggleIsComplete(props.id, props.isComplete)}>
              Selesai
          </button> 
        }
        <button 
          className="delete-button"
          onClick={() => props.deleteBook(props.id)}>
            Hapus
        </button>
      </div>
    </li>
  )
}

export default Book 