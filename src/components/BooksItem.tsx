import React from 'react'

interface BooksProps {
  img?: string, 
  title?: string, 
  author?: string, 
  category?: string
}

const BooksItem: React.FC<BooksProps> = ({ img = '', title = '', author = '', category = '' }) => {
  return (
    <div className="card">
      <img src={img} alt="" />
      <p>{author}</p>
      <h3>{title}</h3>
      <span>{category}</span>
    </div>
  )
}

export default BooksItem
