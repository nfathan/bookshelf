import EditBookForm from './EditBookForm'

function EditBook(props) {
  return (
      <div className="form-container card shadow-dark container">
        <h2 className="heading">EDIT BUKU</h2>
        <EditBookForm 
          currentBook={props.currentBook}
          updateBook={props.updateBook}
        />
      </div>
  )
}

export default EditBook