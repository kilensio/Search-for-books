import React, { useEffect } from 'react'
import { useActions } from '../hooks/useActions'
import { useTypedSelector } from '../hooks/useTypedSelector'
import BooksItem from './BooksItem'
import Spinner from './Spinner'


const Books: React.FC = () => {
  const { books, total, page, loading, error, allLoaded, settings } = useTypedSelector(state => state.book)
  const { fetchBooks, setSearchText } = useActions()

  useEffect(() => {
    if (settings.text) {
      if (!loading)
        fetchBooks(settings, 0)
      // console.log('books length:', books.length);      
    }
  }, [settings])

  if (settings.text === '')
  return (
    <div className="info">
      <i className="fas fa-book"></i>
      <h2>Welcome to Search for books!</h2>
      <p>This app using Google API for books searching.</p>
      <p>Enter the search query on Search field.</p>
    </div>
  )
  return (
    <div className="cards">
      {books.length !== 0 && !loading &&
        <div className="results">
          <p>Results: {total}</p>
        </div>
      }
      <ul className="card-list">
        {books.length !== 0 && books.map(book =>
          <li key={book.etag} className="card-list__item">
            <BooksItem img={book.imgUrl} title={book.title} author={book.author} category={book.category}/>
          </li>
        )}
      </ul>
      {
        loading ? <Spinner /> : 
          !allLoaded && <button 
            onClick={() => fetchBooks(settings, page)} 
            className="more">
              Load more
          </button>
      }
    </div>
  )
}

export default Books
