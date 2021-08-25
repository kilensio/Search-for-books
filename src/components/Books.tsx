import React, { useEffect } from 'react'
import { useReducer } from 'react'
import { IBooksItem } from '../types/books'
import BooksItem from './BooksItem'

interface IBooksProps {
  books: IBooksItem[]
}

type BooksImgs =
  | { type: 'INCREASE_LOADED' }
  | { type: 'CLEAR_ALL' }
  | { type: 'CLEAR_LOADED' }

function reducer(state: {
  loadedImgs: number
  prevCount: number
}, action: BooksImgs) {
  switch (action.type) {
    case 'CLEAR_LOADED':
      return {...state, prevCount: state.prevCount + state.loadedImgs, loadedImgs: 0 }
    case 'CLEAR_ALL':
      return {...state, prevCount: 0, loadedImgs: 0 }
    case 'INCREASE_LOADED':
      return {...state, loadedImgs: state.loadedImgs + 1 }
    default:
      return state
  }
}

const Books = ({ books }: IBooksProps) => {
  const [state, dispatch] = useReducer(reducer, {
    loadedImgs: 0,
    prevCount: 0
  })

  const { loadedImgs, prevCount } = state

  useEffect(() => {
    
    books.length === 0 ?
    dispatch({type: 'CLEAR_ALL'}) :      
    dispatch({type: 'CLEAR_LOADED'})
  }, [books])
  
  const handlerImgLoading = () => {
    dispatch({type: 'INCREASE_LOADED'})
  }

  return (
    <ul className="card-list">
      {books.length !== 0 && books.map((book, i) =>
        <li key={book.etag} className={"card-list__item"}>
          <BooksItem 
            allLoaded={loadedImgs === books.length - prevCount} 
            onImgLoaded={handlerImgLoading} 
            book={book}
          />
        </li>
      )}
    </ul>
  )
}

export default Books
