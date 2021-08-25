import axios, { AxiosResponse } from "axios";
import { Dispatch } from "react";
import { BooksAction, BooksActionTypes, IBooksItem, IBooksResponse, IBooksResponseItem } from "../../types/books";
import { SearchState } from "../../types/search";

const googleBooksAPI = 'https://www.googleapis.com/books/v1/volumes'
const googleBooksAPIKey = process.env.REACT_APP_GOOGLE_APIKEY

const fetch = async ({ text, category, sort }: SearchState, startNumber: number, maxResults: number): Promise<AxiosResponse<any>> => {
  const searchParams: string = category === 'All' ? text.toLowerCase() :
  `${text.toLowerCase()} subject:${category.toLowerCase()}`

  const response = await axios.get(googleBooksAPI, {
    params: {
      q: searchParams, 
      orderBy: sort.toLowerCase(),
      startIndex: startNumber, 
      maxResults: maxResults,
      key: googleBooksAPIKey
    }
  })

  return response
}

const percentOf = (current: number, total: number): number => {
  return Math.floor(current * 100 / total)
}

function removeEqualId(this: IBooksResponseItem[], currentLoadedBooks: IBooksResponseItem[], prevLoadedBooks: IBooksItem[]): IBooksResponseItem[] {
  return this.filter((book, i, arr) => 
      arr.findIndex(b => b.id === book.id) === i)
    .filter(book => currentLoadedBooks.findIndex(b => b.id === book.id) === -1)
    .filter(book => prevLoadedBooks.findIndex(b => b.id === book.id) === -1)
}

const getMinFetch = (min: number, max: number): number => {
  return Math.trunc(max / Math.trunc(max / min))
}

/**
 * Разбить запрос на части (макрозадачи) по (минимум) 10 элементов в запросе.
 * Убрать из результата элементы с одинаковыми id (такие попадаются в api).
 * В каждоый итерации возвращать полученные значения
 * Оставшиеся (если осталось найти меньше 10) искать все равно по 10, 
 * лишние убрать из результата
 */
async function* generateMacroFetch(searchSettings: SearchState, page: number, prevBooks: IBooksItem[]): AsyncGenerator<IBooksResponse> {
  const minApiFetch: number = 10
  let startIndex: number = page * searchSettings.limit
  let partFetch: number = getMinFetch(minApiFetch, searchSettings.limit)
  let remainder: number = searchSettings.limit
  let filteredBooks: IBooksResponseItem[] = []

  do {
    const response: AxiosResponse<any> = await fetch(searchSettings, startIndex, partFetch)
    
    if (response.data.hasOwnProperty('items')) {
      let currentFiltered = removeEqualId.call(response.data.items, filteredBooks, prevBooks)
      filteredBooks.push(...currentFiltered)

      if (filteredBooks.length > searchSettings.limit) 
        filteredBooks.splice(searchSettings.limit)

      startIndex += response.data.items.length      
      remainder = searchSettings.limit - filteredBooks.length
      
      if (remainder < minApiFetch * 2) 
        partFetch = (remainder > minApiFetch) ? remainder : minApiFetch
      else if (currentFiltered.length < partFetch) {
        partFetch = getMinFetch(minApiFetch, remainder)
      }
      
      yield {
        totalItems: response.data.totalItems,
        items: filteredBooks
      }
    } else {
      return 0
    }
  } while (remainder)
}

export const fetchBooks = (searchSettings: SearchState, page: number = 0, prevBooks: IBooksItem[]) => async (dispatch: Dispatch<BooksAction>) => {
  if (page === 0) dispatch({ type: BooksActionTypes.CLEAR_BOOKS })
  try {
    dispatch({ type: BooksActionTypes.FETCH_BOOKS })
    
    let books: IBooksResponse = {
      totalItems: 0,
      items: [] as IBooksResponseItem[]
    }

    let macroGenerator = generateMacroFetch(searchSettings, page, prevBooks)
    
    for await (let data of macroGenerator) {
      books.totalItems = data.totalItems
      books.items = data.items

      const booksRemainder = books.totalItems - page * searchSettings.limit
      const percent = percentOf(books.items.length, searchSettings.limit < booksRemainder ? searchSettings.limit : booksRemainder)
      
      dispatch({ type: BooksActionTypes.FETCH_BOOKS_LOADED, payload: percent })
    }

    if (books.items.length > 0)
      dispatch({ type: BooksActionTypes.FETCH_BOOKS_SUCCESS, payload: books })
    if (books.items.length < searchSettings.limit)
      dispatch({ type: BooksActionTypes.FETCH_BOOKS_ALL_LOADED })

  } catch (error) {
    dispatch({
      type: BooksActionTypes.FETCH_BOOKS_ERROR,
      payload: 'An error occurred during the search'
    })
  }
}

export const setLoaded = (): BooksAction => {
  return {type: BooksActionTypes.FETCH_BOOKS_ALL_LOADED}
}

export const clearBooks = (): BooksAction => {
  return { type: BooksActionTypes.CLEAR_BOOKS }
}