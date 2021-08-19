import axios from "axios";
import { Dispatch } from "react";
import { BooksAction, BooksActionTypes } from "../../types/books";

const googleBooksAPI = 'https://www.googleapis.com/books/v1/volumes'
const googleBooksAPIKey = process.env.REACT_APP_GOOGLE_APIKEY

export const fetchBooks = (text: string, category: string, sort: string, page: number = 0, limit: number = 30) => async (dispatch: Dispatch<BooksAction>) => {
  try {
    dispatch({ type: BooksActionTypes.FETCH_BOOKS })
    
    const searchParams = category === 'All' ? text.toLowerCase() :
      `${text.toLowerCase()} subject:${category.toLowerCase()}`

    const response = await axios.get(googleBooksAPI, {
      params: {
        q: searchParams, 
        orderBy: sort.toLowerCase(),
        startIndex: page * limit, 
        maxResults: limit,
        key: googleBooksAPIKey  
      }
    })
    
    if (response.data.hasOwnProperty('items'))
      dispatch({ type: BooksActionTypes.FETCH_BOOKS_SUCCESS, payload: response.data })
    
      if (response.data.totalItems < (page + 1) * limit) {      
      dispatch({ type: BooksActionTypes.FETCH_BOOKS_ALL_LOADED})
    }
  } catch (error) {
    dispatch({
      type: BooksActionTypes.FETCH_BOOKS_ERROR,
      payload: 'An error occurred during the search'
    })
  }
}

export const clearBooks = (): BooksAction => {
  return { type: BooksActionTypes.CLEAR_BOOKS }
}