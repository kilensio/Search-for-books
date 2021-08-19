import { combineReducers } from "redux"
import { booksReducer } from "./booksReducer"
import { detailsReducer } from "./detailsReducer"
import { searchReducer } from "./searchReducer"

export const rootReducer = combineReducers({
  books: booksReducer,
  details: detailsReducer,
  search: searchReducer
})

export type RootState = ReturnType<typeof rootReducer>