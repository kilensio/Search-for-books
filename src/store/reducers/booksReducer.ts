import { BooksAction, BooksActionTypes, BooksState } from "../../types/books"

const initialState: BooksState = {
  books: [],
  total: 0,
  loading: false,
  allLoaded: false,
  error: null,
  settings: {
    text: '',
    category: '',
    sort: '',
    limit: 30
  },
  page: 0
}

export const booksReducer = (state = initialState, action: BooksAction): BooksState => {
  switch (action.type) {
    case BooksActionTypes.FETCH_BOOKS:
      return {...state, loading: true, error: null}
    case BooksActionTypes.FETCH_BOOKS_SUCCESS:
      return {
        ...state, 
        loading: false,
        total: action.payload.totalItems,
        page: action.payload.hasOwnProperty('items') ? state.page + 1 : state.page,
        books: [...state.books, ...(action.payload.hasOwnProperty('items') ? action.payload.items
          // .filter((item: any) => !state.books.find((el) => el.etag === item.etag))
          .map((item: any) => {
            const vi = item.volumeInfo
            return {
              id: item.id,
              etag: item.etag,
              imgUrl: vi.imageLinks?.thumbnail || '',
              title: vi.title,
              author: vi.authors ? vi.authors[0] : 'Not specified',
              category: vi.categories ? vi.categories[0] : 'Not specified'
        }}): [])]}
    case BooksActionTypes.FETCH_BOOKS_ALL_LOADED:
      return {...state, loading: false, allLoaded: true}
    case BooksActionTypes.FETCH_BOOKS_ERROR:
      return {...state, loading: false, error: action.payload}
    case BooksActionTypes.CLEAR_BOOKS:
      return {...state, page: 0, allLoaded: false, books: []}
    case BooksActionTypes.SET_SEARCH_TEXT:
      return {...state, page: 0, settings: {...state.settings, text: action.payload}}
    case BooksActionTypes.SET_SEARCH_CATEGORY:
      return {...state, page: 0, settings: {...state.settings, category: action.payload}}
    case BooksActionTypes.SET_SEARCH_SORT:
      return {...state, page: 0, settings: {...state.settings, sort: action.payload}}
    default:
      return state
  }
}