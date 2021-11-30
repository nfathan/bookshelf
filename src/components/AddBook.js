import AddBookForm from './AddBookForm'

function AddBook(props) {
  return (
      <div className="form-container card shadow-dark container">
        <h2 className="heading">TAMBAH BUKU</h2>
        <AddBookForm 
          books={props.books}
          checked={props.checked}
          setChecked={props.setChecked}
          addBook={props.addBook}
        />
      </div>
  )
}

export default AddBook