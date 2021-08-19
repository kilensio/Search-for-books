import { SearchAction, SearchActionTypes, SearchState } from "../../types/search"

const initialState: SearchState = {
  text: '',
  category: '',
  sort: '',
  limit: 30
}

export const searchReducer = (state = initialState, action: SearchAction): SearchState => {
  switch (action.type) {
    case SearchActionTypes.SET_SEARCH_TEXT:
      return {...state, text: action.payload}
    case SearchActionTypes.SET_SEARCH_CATEGORY:
      return {...state, category: action.payload}
    case SearchActionTypes.SET_SEARCH_SORT:
      return {...state, sort: action.payload}
    default:
      return state
  }
}