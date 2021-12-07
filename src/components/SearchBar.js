import { useEffect, useRef } from "react"
import { useGlobalContext } from "../context"

function SearchBar() {
  const { setSearch } = useGlobalContext()
  const searchValue = useRef('')

  useEffect(() => {
    searchValue.current.focus()
  }, [])

  const searchBook = () => {
    setSearch(searchValue.current.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="SearchBar">
        <input 
          type="search" 
          id="inputSearch"
          placeholder="Cari Buku.."
          ref={searchValue}
          onChange={searchBook}
        />
    </div>
    </form> 
  )
}

export default SearchBar