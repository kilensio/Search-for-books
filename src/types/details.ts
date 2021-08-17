export interface IDetailsResponse {
  id: string
  volumeInfo: {
    title: string
    authors?: string[]
    description: string
    categories?: string[]
    imageLinks?: {
      thumbnail: string
    }
  }
}

export interface DetailsState {
  loading: boolean
  error: null | string
  id: string
  title: string
  authors: string[]
  imgUrl: string
  categories: string[]
  description: string
}

export enum DetailsActionTypes {
  FETCH_BOOK = 'FETCH_BOOK',
  FETCH_BOOK_SUCCESS = 'FETCH_BOOK_SUCCESS',
  FETCH_BOOK_ERROR = 'FETCH_BOOK_ERROR',
}

interface FetchBookAction {
  type: DetailsActionTypes.FETCH_BOOK
}

interface FetchBookSuccessAction {
  type: DetailsActionTypes.FETCH_BOOK_SUCCESS
  payload: IDetailsResponse
}

interface FetchBookErrorAction {
  type: DetailsActionTypes.FETCH_BOOK_ERROR
  payload: string
}

export type DetailsAction =
  | FetchBookAction
  | FetchBookSuccessAction
  | FetchBookErrorAction