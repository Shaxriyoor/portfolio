import React from 'react'
import { Link } from 'react-router-dom'

function HomeOutdoorContent({ category }) {

  console.log(category);

  return (
    <div className="homeOutdoor-content">
      <div className="homeOutdoor-content__image">
        <img src={category.image} alt="content image" />
      </div>
      <h4 className='homeOutdoor-content__title'>{category.title}</h4>
      <Link to={`/category/${category.slug}-${category.id}`}>
        <button className='homeOutdoor-content__button'>Источник сейчас</button>
      </Link>

    </div>
  )
}

export default HomeOutdoorContent