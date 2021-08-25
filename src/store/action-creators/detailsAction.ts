import axios from "axios";
import { Dispatch } from "react";
import { DetailsAction, DetailsActionTypes, IDetailsResponse } from "../../types/details";

const googleBooksAPI = 'https://www.googleapis.com/books/v1/volumes'
// const googleBooksAPIKey = process.env.REACT_APP_GOOGLE_APIKEY

export const fetchBookDetails = (id: string) => async (dispatch: Dispatch<DetailsAction>) => {
  try {
    dispatch({ type: DetailsActionTypes.FETCH_BOOK })

    const response = await axios.get<IDetailsResponse>(googleBooksAPI + '/' + id, {
      params: {
        // key: googleBooksAPIKey  
      }
    })

    dispatch({ type: DetailsActionTypes.FETCH_BOOK_SUCCESS, payload: response.data })

  } catch (error) {
    dispatch({
      type: DetailsActionTypes.FETCH_BOOK_ERROR,
      payload: 'The book not found'
    })
  }
}