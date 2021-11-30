import {TiPlusOutline} from 'react-icons/ti'
import BookListCompleted from './BookListCompleted'
import BookListUncompleted from './BookListUncompleted'
import LinkTo from './LinkTo'
import SearchBar from './SearchBar'

function BookShelf(props) {
  return (
    <div className="BookShelf card shadow-dark container">
      <h2 className="heading mb-20">RAK BUKU</h2>
      <div className="flex jcsb">
        <SearchBar />
        <LinkTo 
          to="addbook" 
          className="add" 
          // icon={TiPlusOutline}
          innerText="Tambah Buku"
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