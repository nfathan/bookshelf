import AddBookForm from "./AddBookForm"

function AddBook(props) {
  return (
      <div className="form-container card shadow-dark container">
        <h1 className="heading">TAMBAH BUKU</h1>
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