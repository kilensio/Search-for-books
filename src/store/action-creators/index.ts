import * as BooksActionCreators from './books'
import * as DetailsActionCreators from './details'

const ActionCreators = {
  ...BooksActionCreators,
  ...DetailsActionCreators
}

export default ActionCreators