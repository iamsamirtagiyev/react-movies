import React, { useContext, useEffect, useState } from 'react'
import classNames from 'classnames'
import { Context } from '../context'
import axios from 'axios'
import Card from './Card'

const Search = () => {
    const {search} = useContext(Context)
    const [searchMovie, setSearchMovie] = useState(null)
    const [searchTV, setSearchTV] = useState(null)

    const searchData = async() => {
        const responseMovie = await axios.get(`/search/movie?query=${search}&page=1`)
        const responseTv = await axios.get(`/search/tv?query=${search}&page=1`)

        setSearchMovie(responseMovie.data.results)
        setSearchTV(responseTv.data.results)
    }

    useEffect(() => {
        searchData()
    }, [search])

   

  return (
    <div className={classNames('fixed w-full calc-h-screen-16 overflow-auto sm:calc-w-screen-64 bg-slate-950 text-white top-16 left-64 p-5')}>
        <div className='flex flex-col gap-3'>
            <span className='text-indigo-600 font-medium capitalize'>Results for</span>
            <span className='text-5xl font-bold capitalize'>{search}</span>
        </div>
        <div>
            {
                searchMovie && <div>
                <h1 className='bg-white/10 px-3 py-2 font-medium rounded-md w-28 my-3 text-center'>Movie</h1>
                <div className='flex flex-wrap gap-3'>
                    {
                        searchMovie.map(movie => (
                            <Card key={movie.id} data={movie} />
                        ))
                    }
                </div>
            </div>
            }
            { searchTV && <div>
                <h1 className='bg-white/10 px-3 py-2 font-medium rounded-md w-28 my-3 text-center'>TV</h1>
                <div className='flex flex-wrap gap-3'>
                    {
                        searchTV.map(tv => (
                            <Card key={tv.id} data={tv} />
                        ))
                    }
                </div>
            </div>}
        </div>
    </div>
  )
}

export default Search