import React, { useEffect } from 'react'
import { useActions } from '../hooks/useActions'
import { useTypedSelector } from '../hooks/useTypedSelector'
import BooksItem from './BooksItem'
import Info from './Info'
import Spinner from './Spinner'


const Books: React.FC = () => {
  const { books, total, page, loading, error, allLoaded, settings } = useTypedSelector(state => state.books)
  const { fetchBooks } = useActions()

  useEffect(() => {
    if (settings.text) {
      if (!loading)
        fetchBooks(settings, 0)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [settings])

  if (error)
    return (
      <Info title="Error!">
        <p>{error}</p>
      </Info>
    )

  if (settings.text === '')
    return (
      <Info title="Welcome to Search for books!">
        <p>This app using Google API for books searching.</p>
        <p>Enter the search query on Search field.</p>
      </Info>
    )
  
  if (!loading && books.length === 0)
    return (
      <Info title="Books not found">
        <p>Books for "{settings.text}" in "{settings.category}" category are not found</p>
      </Info>
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
            <BooksItem id={book.id} img={book.imgUrl} title={book.title} authors={book.authors} category={book.category}/>
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
