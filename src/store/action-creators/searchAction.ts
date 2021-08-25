import { SearchAction, SearchActionTypes } from "../../types/search";

export const setSearchText = (text: string): SearchAction => {
  return { type: SearchActionTypes.SET_SEARCH_TEXT, payload: text }
}

export const setSearchCategory = (text: string): SearchAction => {
  return { type: SearchActionTypes.SET_SEARCH_CATEGORY, payload: text }
}

export const setSearchSort = (text: string): SearchAction => {
  return { type: SearchActionTypes.SET_SEARCH_SORT, payload: text }
}