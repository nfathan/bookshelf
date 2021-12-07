import React, { 
  createContext, 
  // useCallback, 
  useContext, 
  useEffect, 
  useState } from "react";

const AppContext = createContext()

const AppProvider = ({ children }) => {
  // setting state
  const [book, setBook] = useState({})
  const [currentBook, setCurrentBook] = useState({})
  const [checked, setChecked] = useState(false)
  const [books, setBooks] = useState(() => { // books data 
    return JSON.parse(localStorage.getItem("books_data")) !== null ? 
    JSON.parse(localStorage.getItem("books_data")) 
    :
    []
  })

  // const booksData = JSON.parse(localStorage.getItem("books_data"))
  // const [loading, setLoading] = useState(true)
  // const [search, setSearch] = useState('a')

  // const searchBook = useCallback( async () => {
  //   setLoading(true)
  //   try {
  //     const data = await booksData.filter(book => book.title.toUpperCase().includes(search.toUpperCase()))
  //     console.log(data)
  //     const { booksList } = data
  //     if(booksList) {
  //       const newBook = booksList.map(item => {
  //         const { 
  //           idBook,
  //           titleBook,
  //           authorBook,
  //           yearBook,
  //           iscomplete 
  //         } = item 

  //         return {
  //           id: idBook,
  //           title: titleBook,
  //           author: authorBook,
  //           year: yearBook,
  //           isComplete: iscomplete
  //         }
  //       })
  //       setBooks(newBook)
  //     } else {
  //       setBooks([])
  //     }
  //     setLoading(false)
  //   } catch(error) {
  //     console.log(error)
  //     setLoading(false)
  //   }
  // },[search])

  useEffect(() => {
    localStorage.setItem('books_data', JSON.stringify(books))
    console.log(books)
    console.log(currentBook)
  }, [books])

  return (
    <AppContext.Provider
      value={{
        book, 
        currentBook,
        books, 
        checked, 
        setBook, 
        setCurrentBook,
        setChecked, 
        setBooks
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}

export {AppContext, AppProvider}