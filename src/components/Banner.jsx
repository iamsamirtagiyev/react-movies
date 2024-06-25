import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { Context } from '../context'
import { FaRegCirclePlay } from "react-icons/fa6";
import classNames from 'classnames';
import { useNavigate } from 'react-router-dom';

const Banner = () => {

  const [ data, setData ] = useState(null)
  const { imgBaseUrl, open } = useContext(Context)
  const navigate = useNavigate()

  const trendingData = async () => {
    const response = await axios.get('/trending/all/week')
    setData(response.data.results[Math.floor(Math.random() * 20)])
  }

  useEffect(() => {
    trendingData()
  }, [])

  const details = () => {
    if(data.name){
      navigate(`/tv/${data.id}`)
    }
    else{
      navigate(`/movie/${data.id}`)
    }
  }


  return (
    <div className='w-full h-full bg-no-repeat bg-center bg-slate-800 rounded-md' style={{backgroundImage: 'url(/images/video-bg-icon.png)'}}>
      {data && <header className='!bg-center !bg-cover rounded-md h-full p-5 pt-10 pl-10 flex flex-col gap-5 leading-3' style={{background:`linear-gradient(to right, rgba(2, 6, 23, 1), rgba(2, 6, 23, .5)), url(${imgBaseUrl}${data?.backdrop_path})`}}>
        <div className={classNames('flex flex-col gap-5')}>
          <h1 className={classNames('text-5xl sm:text-6xl font-bold')}>{ data.name || data.title }</h1>
          <div className='flex items-center gap-2'>
            <span className='text-2xl font-medium text-gray-500'>{ data?.release_date?.split('-')[0] || data?.first_air_date?.split('-')[0] }</span>
            <span className='text-lg font-medium bg-white/20 rounded-md px-2 py-0.5'>{ Number(data.vote_average).toFixed(1) }</span>
          </div>
          <p className='text-xl font-medium text-gray-500 w-[60%] text-ellipsis line-clamp-4 overflow-hidden'>{ data.overview }</p>
          <button onClick={details} className='transition-all duration-500 rounded-md bg-indigo-600 hover:bg-indigo-700 active:scale-95 flex items-center justify-center text-xl font-medium gap-2 h-11 w-44'>
            <span><FaRegCirclePlay/></span>
            Watch Now
          </button>
        </div>
      </header>}
    </div>
  )
}

export default Banner