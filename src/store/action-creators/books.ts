import axios from "axios";
import { Dispatch } from "react";
import { BooksAction, BooksActionTypes, SearchSettings } from "../../types/books";

const googleBooksAPI = 'https://www.googleapis.com/books/v1/volumes'
const googleBooksAPIKey = process.env.REACT_APP_GOOGLE_APIKEY

export const fetchBooks = (settings: SearchSettings, page: number = 0) => async (dispatch: Dispatch<BooksAction>) => {
  try {
    if (!page) {
      dispatch({ type: BooksActionTypes.CLEAR_BOOKS })
    }
    dispatch({ type: BooksActionTypes.FETCH_BOOKS })
    
    const searchParams = settings.category === 'All' ? settings.text.toLowerCase() :
      `${settings.text.toLowerCase()} subject:${settings.category.toLowerCase()}`

    const response = await axios.get(googleBooksAPI, {
      params: {
        q: searchParams, 
        orderBy: settings.sort.toLowerCase(),
        startIndex: page * settings.limit, 
        maxResults: settings.limit,
        key: googleBooksAPIKey  
      }
    })
    
    if (response.data.hasOwnProperty('items'))
      dispatch({ type: BooksActionTypes.FETCH_BOOKS_SUCCESS, payload: response.data })
    
      if (response.data.totalItems < (page + 1) * settings.limit) {      
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

export const setSearchText = (text: string): BooksAction => {
  return { type: BooksActionTypes.SET_SEARCH_TEXT, payload: text }
}

export const setSearchCategory = (text: string): BooksAction => {
  return { type: BooksActionTypes.SET_SEARCH_CATEGORY, payload: text }
}

export const setSearchSort = (text: string): BooksAction => {
  return { type: BooksActionTypes.SET_SEARCH_SORT, payload: text }
}