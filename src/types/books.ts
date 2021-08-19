export interface IBooksItem {
  id: string
  etag: string
  title: string
  authors?: string[]
  imgUrl?: string
  category?: string
}

export interface IBooksResponse {
  totalItems: number,
  items: {
    id: string
    etag: string
    volumeInfo: {
      title: string
      authors?: string[]
      categories?: string[]
    }
    imageLinks: {
      thumbnail?: string
    }
  }[]
}

export interface BooksState {
  books: IBooksItem[]
  total: number
  loading: boolean
  allLoaded: boolean
  error: null | string
  page: number
}

export enum BooksActionTypes {
  FETCH_BOOKS = 'FETCH_BOOKS',
  FETCH_BOOKS_SUCCESS = 'FETCH_BOOKS_SUCCESS',
  FETCH_BOOKS_ALL_LOADED = 'FETCH_BOOKS_ALL_LOADED',
  FETCH_BOOKS_ERROR = 'FETCH_BOOKS_ERROR',
  CLEAR_BOOKS = 'CLEAR_BOOKS',
  LOAD_MORE = 'LOAD_MORE',
}

interface FetchBooksAction {
  type: BooksActionTypes.FETCH_BOOKS
}

interface FetchBooksSuccessAction {
  type: BooksActionTypes.FETCH_BOOKS_SUCCESS
  payload: IBooksResponse
}

interface FetchBooksAllLoadedAction {
  type: BooksActionTypes.FETCH_BOOKS_ALL_LOADED
}

interface FetchBooksErrorAction {
  type: BooksActionTypes.FETCH_BOOKS_ERROR
  payload: string
}

interface ClearBooksAction {
  type: BooksActionTypes.CLEAR_BOOKS
}

interface LoadMoreAction {
  type: BooksActionTypes.LOAD_MORE
  payload: number
}


export type BooksAction =
  | FetchBooksAction
  | FetchBooksSuccessAction
  | FetchBooksAllLoadedAction
  | FetchBooksErrorAction
  | ClearBooksAction
  | LoadMoreAction
