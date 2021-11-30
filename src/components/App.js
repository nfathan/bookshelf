import { useEffect, useState } from 'react'
import { 
  // BrowserRouter,
  // HashRouter, 
  Routes, 
  Route,
  useNavigate } from "react-router-dom";
import '../App.scss';
import AddBook from './AddBook';
import AppHeader from './AppHeader';
import BookShelf from './BookShelf';
import EditBook from './EditBook';
import Footer from './Footer';
import NotFound from './NotFound';

function App() {
  // Setting state (shared state)
  const [books, setBooks] = useState(() => { // books data 
    return JSON.parse(localStorage.getItem("books_data")) !== null ? 
    JSON.parse(localStorage.getItem("books_data")) 
    :
    []
  })
  const [checked, setChecked] = useState(false)
  const [currentBook, setCurrentBook] = useState({})

  let navigate = useNavigate()

  // CRUD operations
  const addBook = (book) => {
    book.id = books.length + 1
    book.isComplete = checked
    setBooks([...books, book])
  }

  const deleteBook = (id) => {
    setBooks(books.filter(book => book.id !== id))
  }

  const editBook = (book) => {
    navigate('editbook')
    setCurrentBook({
      id: book.id, 
      title: book.title, 
      author: book.author, 
      year: book.year, 
      isComplete: book.isComplete
    })
  }

  const updateBook = (id, updateBook) => {
    setBooks(books.map(book => (book.id === id ? updateBook : book)))
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

  useEffect(() => {
    localStorage.setItem("books_data", JSON.stringify(books))
    console.log(books)
  }, [books])

  return (
    // <HashRouter>
      <div className="App">
        <header>
          <AppHeader />
        </header>
        <main>
          <Routes>
            <Route path="/" element={
              <BookShelf 
                books={books} 
                toggleIsComplete={toggleIsComplete}
                deleteBook={deleteBook}
                editBook={editBook}
              />} 
            />
            <Route path="addbook" element={
              <AddBook 
                books={books}
                checked={checked}
                setChecked={setChecked}
                addBook={addBook}
              />} 
            />
            <Route path="editbook" element={
              <EditBook 
                currentBook={currentBook}
                updateBook={updateBook}
              />}
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    // </HashRouter>
  );
}

export default App;
