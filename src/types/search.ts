export interface SearchState {
  text: string
  category: string
  sort: string
  limit: number
}

export enum SearchActionTypes {
  SET_SEARCH_TEXT = 'SET_SEARCH_TEXT',
  SET_SEARCH_CATEGORY = 'SET_SEARCH_CATEGORY',
  SET_SEARCH_SORT = 'SET_SEARCH_SORT'
}

interface SetSearchText {
  type: SearchActionTypes.SET_SEARCH_TEXT
  payload: string
}

interface SetSearchCategory {
  type: SearchActionTypes.SET_SEARCH_CATEGORY
  payload: string
}

interface SetSearchSort {
  type: SearchActionTypes.SET_SEARCH_SORT
  payload: string
}

export type SearchAction =
  | SetSearchText
  | SetSearchCategory
  | SetSearchSort