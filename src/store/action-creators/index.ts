import * as BooksActionCreators from './books'
import * as DetailsActionCreators from './details'
import * as SearchActionCreators from './search'

const ActionCreators = {
  ...BooksActionCreators,
  ...DetailsActionCreators,
  ...SearchActionCreators
}

export default ActionCreators