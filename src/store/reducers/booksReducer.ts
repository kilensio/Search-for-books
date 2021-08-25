import { BooksAction, BooksActionTypes, BooksState } from "../../types/books"

const initialState: BooksState = {
  books: [],
  total: 0,
  loading: false,
  loaded: 0,
  error: null,
  page: 0,
  allLoaded: false
}

export const booksReducer = (state = initialState, action: BooksAction): BooksState => {
  switch (action.type) {
    case BooksActionTypes.FETCH_BOOKS:
      return {...state, loading: true, loaded: 0, error: null}
    case BooksActionTypes.FETCH_BOOKS_LOADED:
      return {...state, loaded: action.payload}
    case BooksActionTypes.FETCH_BOOKS_SUCCESS:
      return {
        ...state, 
        loading: false,
        loaded: 100,
        total: action.payload.totalItems,
        page: action.payload.hasOwnProperty('items') ? state.page + 1 : state.page,
        books: [...state.books, ...(action.payload.hasOwnProperty('items') ? action.payload.items
          .map((item: any) => {            
            const vi = item.volumeInfo
            return {
              id: item.id,
              etag: item.etag,
              imgUrl: vi.imageLinks?.thumbnail || '',
              title: vi.title,
              authors: vi.authors ? vi.authors : [],
              category: vi.categories ? vi.categories[0] : 'Not specified'
        }}): [])]}
    case BooksActionTypes.FETCH_BOOKS_ALL_LOADED:
      return {...state, loading: false, loaded: 100, allLoaded: true}
    case BooksActionTypes.FETCH_BOOKS_ERROR:
      return {...state, loading: false, loaded: 0, error: action.payload, allLoaded: false}
    case BooksActionTypes.CLEAR_BOOKS:
      return {...state, ...initialState, books: []}
    default:
      return state
  }
}