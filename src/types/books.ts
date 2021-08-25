export interface IBooksItem {
  id: string
  etag: string
  title: string
  authors?: string[]
  imgUrl?: string
  category?: string
}

export interface IBooksResponseItem {
  id: string
  etag: string
  volumeInfo: {
    title: string
    authors?: string[]
    categories?: string[]
    imageLinks: {
      thumbnail?: string 
    }
  }
}

export interface IBooksResponse {
  totalItems: number
  // loaded: number
  items: IBooksResponseItem[]
}

export interface BooksState {
  books: IBooksItem[]
  total: number
  loading: boolean
  loaded: number
  error: null | string
  page: number
  allLoaded: boolean
}

export enum BooksActionTypes {
  /** Сигнал о начале загрузки */
  FETCH_BOOKS = 'FETCH_BOOKS',
  /** Процент загруженных элементов */
  FETCH_BOOKS_LOADED = 'FETCH_BOOKS_LOADED',
  /** Элементы загружены, переадать в редьюсер */
  FETCH_BOOKS_SUCCESS = 'FETCH_BOOKS_SUCCESS',  
  /** Загружены все доступные книги по данному запросу */
  FETCH_BOOKS_ALL_LOADED = 'FETCH_BOOKS_ALL_LOADED',
  FETCH_BOOKS_ERROR = 'FETCH_BOOKS_ERROR',
  /** Очистить все данные о последнем запросе */
  CLEAR_BOOKS = 'CLEAR_BOOKS'
}

interface FetchBooksAction {
  type: BooksActionTypes.FETCH_BOOKS
}

interface FetchBooksLoadedAction {
  type: BooksActionTypes.FETCH_BOOKS_LOADED
  payload: number
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

export type BooksAction =
  | FetchBooksAction
  | FetchBooksLoadedAction
  | FetchBooksSuccessAction
  | FetchBooksAllLoadedAction
  | FetchBooksErrorAction
  | ClearBooksAction
