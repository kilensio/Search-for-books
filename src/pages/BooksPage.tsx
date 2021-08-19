import React, { useEffect } from 'react'
import { useActions } from '../hooks/useActions'
import { useTypedSelector } from '../hooks/useTypedSelector'
import StartPage from './StartPage'
import ErrorPage from './ErrorPage'
import NoBooksPage from './NoBooksPage'
import Books from '../components/Books'
import Spinner from '../components/Spinner'

const BooksPage: React.FC = () => {
  const { books, total, page, loading, error, allLoaded} = useTypedSelector(state => state.books)
  const { text, category, sort } = useTypedSelector(state => state.search)
  const { fetchBooks, clearBooks } = useActions()

  useEffect(() => {
    if (text) {
      clearBooks()
      fetchBooks(text, category, sort, 0)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text, category, sort])

  if (error)
    return <ErrorPage error={error} />

  if (!text)
    return <StartPage />
  
  if (!loading && books.length === 0)
    return <NoBooksPage text={text} category={category} />
  
  return (
    <div className="cards">
      {books.length !== 0 && !loading &&
        <div className="results">
          <p>Results: {total}</p>
        </div>
      }
      <Books books={books} />      
      
      {loading ? <Spinner /> : 
        !allLoaded && <button 
          onClick={() => fetchBooks(text, category, sort, page)} 
          className="more">
            Load more
        </button>
      }
    </div>
  )
}

export default BooksPage
