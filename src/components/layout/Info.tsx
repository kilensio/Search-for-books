import React from 'react'

type Props = {
  title: string
}

const Info: React.FC<Props> = ({ title, children }) => {
  return (
    <div className="info">
      <i className="fas fa-book"></i>
      <h2>{title}</h2>
      { children }
    </div>
  )
}

export default Info

