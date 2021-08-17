import { combineReducers } from "redux"
import { booksReducer } from "./booksReducer"
import { detailsReducer } from "./detailsReducer"

export const rootReducer = combineReducers({
  books: booksReducer,
  details: detailsReducer
})

export type RootState = ReturnType<typeof rootReducer>