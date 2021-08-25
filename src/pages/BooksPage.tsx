import React, { useEffect } from 'react'
import { useActions } from '../hooks/useActions'
import { useTypedSelector } from '../hooks/useTypedSelector'
import StartPage from './StartPage'
import ErrorPage from './ErrorPage'
import NoBooksPage from './NoBooksPage'
import Books from '../components/Books'
import Indicator from '../components/layout/Indicator'

const BooksPage: React.FC = () => {
  const { books, total, page, loading, loaded, error, allLoaded} = useTypedSelector(state => state.books)
  const searchSettings = useTypedSelector(state => state.search)
  const {text, category} = searchSettings
  const { fetchBooks } = useActions()

  useEffect(() => {
    window.addEventListener('onSearch', handlerSearch)
    return () => {
      window.removeEventListener('onSearch', handlerSearch)
    }
  })

  const handlerSearch = () => {
    if (searchSettings.text) {
      fetchBooks(searchSettings, 0, books)
    }    
  }

  if (error)
    return <ErrorPage error={error} />

  if (!text)
    return <StartPage />
  
  if (!loading && books.length === 0)
    return <NoBooksPage text={text} category={category} />
  
  return (
    <div className="cards">
      {books.length !== 0 &&
        <div className="results">
          <p>Results: {total}</p>
        </div>
      }
      <Books books={books} />
      {loading && <Indicator percent={loaded} />}
      
      {!loading && !allLoaded && <button 
          onClick={() => fetchBooks(searchSettings, page, books)} 
          className="more">
            Load more
        </button>
      }
    </div>
  )
}

export default BooksPage
