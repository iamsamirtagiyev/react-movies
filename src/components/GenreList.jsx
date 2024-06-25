import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Genre from './Genre'

const GenreList = ({genre}) => {

    const [data, setData] = useState(null)

    const gnr = async() => {
        const response = await axios.get(genre.path)
        setData(response.data.genres)
    }

    useEffect(() => {
        gnr()
    }, [])

  return (
    <ul className='mt-3 flex flex-col gap-2.5'>
        <h1 className='text-2xl text-white font-bold capitalize border-b border-slate-800 pb-5'>{genre.title}</h1>
        {
            data && data.map(genre => (
                <Genre key={genre.id} genre={genre} />
            ))
        }
    </ul>
  )
}

export default GenreList