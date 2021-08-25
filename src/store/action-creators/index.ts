import * as BooksActionCreators from './booksAction'
import * as DetailsActionCreators from './detailsAction'
import * as SearchActionCreators from './searchAction'

const ActionCreators = {
  ...BooksActionCreators,
  ...DetailsActionCreators,
  ...SearchActionCreators
}

export default ActionCreators