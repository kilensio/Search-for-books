import React, { useEffect } from 'react'
import { Fragment } from 'react'
import { useActions } from '../hooks/useActions'
import Search from './Search'
import Select from './layout/Select'

const categoriesOpt = [
  "All", "Art", "Biography", "Computers", "History", "Medical", "Poetry"
].map(cat => {
  return {
    label: cat,
    value: cat
  }
})
const sortsOpt = ["Relevance", "Newest"].map(sort => {
  return {
    label: sort,
    value: sort
  }
})

const SearchGroup: React.FC = () => {
  const { setSearchCategory, setSearchSort, clearBooks } = useActions()

  useEffect(() => {
    setSearchCategory(categoriesOpt[0].value)
    setSearchSort(sortsOpt[0].value)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const changeHandler = (text: string, handler: ((text: string) => void)) => {
    handler(text)
    clearBooks()
  }

  return (
    <Fragment>
      <Search onSubmit={changeHandler} />

      <div className="select-group">
        <div className="select">
          <label>Category</label>
          <Select
            values={categoriesOpt}
            onChange={text => changeHandler(text, setSearchCategory)}
          />
        </div>

        <div className="select">
          <label>Sorting by</label>
          <Select 
            values={sortsOpt}
            onChange={text => changeHandler(text, setSearchSort)}
          />
        </div>
      </div>
    </Fragment>
  )
}

export default SearchGroup
