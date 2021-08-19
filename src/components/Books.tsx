import React from 'react'
import { IBooksItem } from '../types/books'
import BooksItem from './BooksItem'

const Books = ({ books }: {books: IBooksItem[] }) => {
  return (
    <ul className="card-list">
      {books.length !== 0 && books.map(book =>
        <li key={book.etag} className="card-list__item">
          <BooksItem id={book.id} img={book.imgUrl} title={book.title} authors={book.authors} category={book.category}/>
        </li>
      )}
    </ul>
  )
}

export default Books
