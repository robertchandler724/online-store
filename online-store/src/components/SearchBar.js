import React from 'react'

function SearchBar() {
  return (
    <div>
      <input type='text' className='searchbar' placeholder='Search for Products...'></input>
      <button className='searchbutton'>Submit</button>
    </div>
  )
}

export default SearchBar
