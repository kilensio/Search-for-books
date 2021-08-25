import React, { useState } from 'react'
import { useActions } from '../hooks/useActions'

interface SearchProps {
  onSubmit: (text: string, handler: (text: string) => void) => void
}

const Search: React.FC<SearchProps> = ({ onSubmit }) => {
  const { setSearchText } = useActions()

  const [text, setText] = useState<string>('')

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => 
    setText(e.target.value)

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    onSubmit(text, setSearchText)
  }

  return (
    <form onSubmit={submitHandler} className="search">
      <input 
        type="text" 
        className="search__input" 
        placeholder="Search" 
        value={text}
        onChange={onChange}
        autoFocus
      />
      <button className="btn btn-secondary" type="submit">
        <i className="fa fa-search"></i>
      </button>
    </form>
  )
}

export default Search
