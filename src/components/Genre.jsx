import React from 'react'

const Genre = ({genre}) => {
  return (
    <span className='transition-all duration-500 text-xl font-medium text-white/20 hover:text-white/50'>{genre.name}</span>
  )
}

export default Genre