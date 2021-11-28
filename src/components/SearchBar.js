function SearchBar() {
  return (
    <div className="SearchBar">
      <input 
        type="search" 
        id="inputSearch"
        placeholder="Cari Buku.."
        // onKeyUp="btnSearchClicked()"
      />
    </div> 
  )
}

export default SearchBar