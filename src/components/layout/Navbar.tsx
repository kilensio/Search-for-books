import React from 'react'
import { Link } from 'react-router-dom'
import SearchGroup from '../SearchGroup'

const Navbar: React.FC = () => {
  return (
    <header>
      <Link to={'/'}>
        <h1><i className="fas fa-book"></i> Search for books</h1>    
      </Link>
      <SearchGroup />      
    </header> 
  )
}

export default Navbar
