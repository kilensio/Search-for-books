import React, { useEffect, useState } from 'react'
import { Fragment } from 'react'
import { useActions } from '../hooks/useActions'
import Search from './Search'
import Select from './Select'

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
  // const [category, setCategory] = useState<string>(categoriesOpt[0].value)
  // const [sort, setSort] = useState<string>(sortsOpt[0].value)

  // const SearchDecoratorHandler = (text: string) => {

  // }
  const { setSearchCategory, setSearchSort } = useActions()

  useEffect(() => {
    setSearchCategory(categoriesOpt[0].value)
    setSearchSort(sortsOpt[0].value)
  }, [])


  return (
    <Fragment>
      <Search />

      <div className="select-group">
        <div className="select">
          <label>Category</label>
          <Select
            values={categoriesOpt}
            onChange={setSearchCategory}
          />
        </div>

        <div className="select">
          <label>Sorting by</label>
          <Select 
            values={sortsOpt}
            onChange={setSearchSort}
          />
        </div>
      </div>
    </Fragment>
  )
}

export default SearchGroup
