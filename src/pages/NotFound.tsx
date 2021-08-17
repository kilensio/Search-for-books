import React from 'react'
import Info from '../components/Info'

const NotFound: React.FC = () => {
  return (
    <Info title="Not Found">
      <p className="lead">The page you are looking for does not exist</p>
    </Info>
  )
}

export default NotFound
