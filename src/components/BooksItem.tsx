import React from 'react'
import { Link } from 'react-router-dom'

interface BooksProps {
  id: string,
  img?: string, 
  title?: string, 
  authors?: string[], 
  category?: string
}

const BooksItem: React.FC<BooksProps> = ({ id, img = '', title = '', authors = [], category = '' }) => {
  
  return (
    <Link 
      to={`/book/${id}`} 
      className="card"
    >
      <img src={img} alt="" />
      <p>{authors.join(', ')}</p>
      <h3>{title}</h3>
      <span>{category}</span>
    </Link>
  )
}

export default BooksItem
