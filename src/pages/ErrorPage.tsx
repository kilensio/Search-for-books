import React from 'react'
import Info from '../components/layout/Info'

const ErrorPage = ({ error } : { error: string }) => {
  return (
    <Info title="Error!">
      <p>{error}</p>
    </Info>
  )
}

export default ErrorPage
