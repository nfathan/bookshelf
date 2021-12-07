// import {TiPlusOutline} from 'react-icons/ti'
import { useNavigate } from 'react-router'
import { useGlobalContext } from '../context'
import BookListCompleted from '../components/BookListCompleted'
import BookListUncompleted from '../components/BookListUncompleted'
import LinkTo from '../components/LinkTo'
import Loading from '../components/Loading'
import SearchBar from '../components/SearchBar'

function BookShelf(props) {
  const {
    books,
    loading,
    setCurrentBook,
    setBooks
  } = useGlobalContext()

  let navigate = useNavigate()

  if(loading) {
    return <Loading />
  }
  if(books.length < 1) {
    return (
      <h2>Tidak ada buku yang cocok dengan kriteria pencarianmu</h2>
    )
  }

  // Update isComplete property value, when uncompleted/complete button clicked
  const toggleIsComplete = (id, isComplete) => {
    // setBooks([{isComplete: !isComplete}])
    setBooks(books => {
      return books.map(book => book.id === id ? 
        {
          ...book, // copy obj  
          isComplete: !isComplete, // update  isComplete property
        } 
        : 
        book
      )
    })
  }

  // CRUD operations (delete book, edit book)
  const deleteBook = (id) => {
    setBooks(books.filter(book => book.id !== id))
  }

  const editBook = (book) => {
    navigate(`editbook/${book.id}`)
    setCurrentBook({
      id: book.id, 
      title: book.title, 
      author: book.author, 
      year: book.year, 
      isComplete: book.isComplete
    })
  }

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
        books={books} 
        toggleIsComplete={toggleIsComplete}
        deleteBook={deleteBook}
        editBook={editBook}
      />
      <BookListCompleted 
        books={books} 
        toggleIsComplete={toggleIsComplete}
        deleteBook={deleteBook}
        editBook={editBook}
      />
    </div>
  )
}

export default BookShelf