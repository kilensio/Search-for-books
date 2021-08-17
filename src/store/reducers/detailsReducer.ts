import { DetailsAction, DetailsActionTypes, DetailsState } from "../../types/details"

const initialState: DetailsState = {
  loading: false,
  error: null,
  id: '',
  title: '',
  authors: [],
  imgUrl: '',
  categories: [],
  description: ''
}

export const detailsReducer = (state = initialState, action: DetailsAction): DetailsState => {
  switch (action.type) {
    case DetailsActionTypes.FETCH_BOOK:
      return {...state, loading: true, error: null}
    case DetailsActionTypes.FETCH_BOOK_SUCCESS:
      return {
        ...state, 
        loading: false,
        id: action.payload.id,
        title: action.payload.volumeInfo.title,
        authors: action.payload.volumeInfo.authors || [],
        imgUrl: action.payload.volumeInfo.imageLinks?.thumbnail || '',
        categories: action.payload.volumeInfo.categories || [],
        description: action.payload.volumeInfo.description
      }
    case DetailsActionTypes.FETCH_BOOK_ERROR:
      return {...state, loading: false, error: action.payload}
    default:
      return state
  }
}