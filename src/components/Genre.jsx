import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Genre = ({genre, type}) => {

  const navigate = useNavigate()


  return (
    <Link to={`/discover/${type}/${genre.id}`} className='transition-all duration-500 text-xl font-medium text-white/20 hover:text-white/50'>{genre.name}</Link>
  )
}

export default Genre