import BookListCompleted from "./BookListCompleted"
import BookListUncompleted from "./BookListUncompleted"
import LinkTo from "./LinkTo"
import SearchBar from "./SearchBar"

function BookShelf(props) {
  return (
    <div className="BookShelf card shadow-dark container">
      
        <h1 className="heading">RAK BUKU</h1>
      
      <div className="flex jcsb">
        <SearchBar />
        <LinkTo 
          to="/AddBook"
          innerText="Tambah Buku" 
          className="add"
        />
      </div>
      <BookListUncompleted 
        books={props.books} 
        toggleIsComplete={props.toggleIsComplete}
        deleteBook={props.deleteBook}
        editBook={props.editBook}
      />
      <BookListCompleted 
        books={props.books} 
        toggleIsComplete={props.toggleIsComplete}
        deleteBook={props.deleteBook}
        editBook={props.editBook}
      />
    </div>
  )
}

export default BookShelf