import React from 'react'
import SearchBar from './SearchBar'
import {Link} from 'react-router-dom'

function NavBar() {
  return (
    <div className='navbar'>
        <div className='links'>
            <Link to='/'>Shop</Link>
            <Link to='/cart'></Link>
            <SearchBar />
        </div>
    </div>
  )
}

export default NavBar
