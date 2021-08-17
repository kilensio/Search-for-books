import React from 'react'
import SearchGroup from './SearchGroup'

const Navbar: React.FC = () => {
  return (
    <header>
      <h1><i className="fas fa-book"></i> Search for books</h1>    
      <SearchGroup />      
    </header> 
  )
}

export default Navbar
