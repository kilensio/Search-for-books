import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { IBooksItem } from '../types/books'

interface BooksProps {
  allLoaded: boolean
  book: IBooksItem
  onImgLoaded?: (() => void)
}

const BooksItem: React.FC<BooksProps> = React.memo(({ allLoaded, onImgLoaded, book }) => {
  const {id, imgUrl, title, authors, category } = book
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    if (allLoaded)
      setLoaded(true)
  }, [allLoaded, setLoaded])

  return (
    <Link 
      to={`/book/${id}`} 
      className={loaded ? "card" : "card _loading"}
    >
      <div className="card__img">
        <img className={loaded ? "" : "_hide"}
          onLoad={!loaded ? () => {onImgLoaded && onImgLoaded()} : undefined}
          onError={!loaded ? () => {onImgLoaded && onImgLoaded()} : undefined}
          src={imgUrl} alt="" 
        />
      </div>
      <p>{loaded ? authors?.join(', ') : ' '}</p>
      <h3>{loaded ? title : ' '}</h3>
      <span>{loaded ? category : ' '}</span>
    </Link>
  )
})

export default BooksItem
