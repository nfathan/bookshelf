// import { useNavigate } from 'react-router-dom'
import {
  MdOutlineEdit,
  MdDeleteForever,
  MdDoneAll,
  MdRemoveDone } from 'react-icons/md'
import cleanCode from '../images/clean-code.jpg'

function Book(props) {
  // let navigate = useNavigate()
  
  // const navigateToEditBook = () => {
  //   navigate("editbook")
  // }

  return (
    <li className="Book shadow">
      <div className="Book-img">
        
        <img src={cleanCode} alt="clean-code" />
      </div>
      <div className="Book-header">
        <h3>{props.bookTitle}</h3>
        {/* <button onClick={() => navigate("/EditBook")}>Edit</button> */}
        
      </div>
      <div className="Book-info">
        <p>Penulis : {props.bookAuthor}</p>
        <p>Tahun : {props.bookYear}</p>
      </div>
      <div className="Book-button center mt-10">
        {props.isComplete ? 
          <button 
            className="complete-button" 
            onClick={() => props.toggleIsComplete(props.id, props.isComplete)}>
              <MdRemoveDone /> Belum Selesai
          </button>
          : 
          <button 
            className="complete-button" 
            onClick={() => props.toggleIsComplete(props.id, props.isComplete)}>
              <MdDoneAll />Selesai
          </button> 
        }
        <button 
          className="edit-button"
          onClick={() => props.editBook(props.book)}>
            <MdOutlineEdit />
        </button>
        <button 
          className="delete-button"
          onClick={() => props.deleteBook(props.id)}>
            <MdDeleteForever />
        </button>
      </div>
    </li>
  )
}

export default Book 