import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useActions } from '../hooks/useActions'
import { useTypedSelector } from '../hooks/useTypedSelector'
import Info from './Info'
import Spinner from './Spinner'

interface DetailsParams {
  id: string
}

const Details: React.FC = () => {
  const { title, authors, categories, imgUrl, description, loading, error } = useTypedSelector(state => state.details)
  const { fetchBookDetails } = useActions()
  const params = useParams<DetailsParams>()

  useEffect(() => {
    fetchBookDetails(params.id)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (loading)
    return <Spinner />

  if (error)
    return (
      <Info title="Error!">
         <p>{error}</p>
      </Info>
    )

  return (
    <div className="book">
      <div className="book__info">
        <div className="book__img">
          {imgUrl !== '' && <img src={imgUrl} alt="" />}
        </div>
        <span>{categories.join(', ')}</span>
        <div className="book__title">
          <h2>{title}</h2>
          <p className="book__author">{authors.join(', ')}</p>
        </div>
      </div>
      <p className="book__descr">{description}</p>
    </div>
  )
}

export default Details
