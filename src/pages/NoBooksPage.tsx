import React from 'react'
import Info from '../components/layout/Info'

interface INoBook {
  text: string, 
  category: string
}

const NoBooksPage = ({ text, category }: INoBook) => {
  return (
    <Info title="Books not found">
      <p>Books for "{text}" in "{category}" category are not found</p>
    </Info>
  )
}

export default NoBooksPage
