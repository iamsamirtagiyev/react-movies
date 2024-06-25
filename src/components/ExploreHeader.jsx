import React, { useContext, useEffect, useState } from 'react'
import { Context } from '../context'
import { TbStarFilled } from "react-icons/tb";
import axios from 'axios';

const ExploreHeader = ({data, type}) => {

    const { imgBaseUrl } = useContext(Context)
    const [credits, setCredits] = useState(null)
    const gnrs = []

    const creditData = async() => {
        const response = await axios.get(`/${type}/${data.id}/credits`)
        setCredits(response.data)
    }

    useEffect(() => {
        creditData()
    }, [])

    console.log(data);
    console.log(credits);
    data.genres.map( genre => gnrs.push(genre.name))

  return (
    <div className='calc-w-screen-64  flex gap-10 calc-h-screen-16 !bg-cover !bg-no-repeat !bg-center pt-10 pl-10' style={{background: `linear-gradient(to top, rgba(2, 6, 23, 1), rgba(2, 6, 23, .95)), url(${imgBaseUrl}${data.backdrop_path})`}}>
        <div className='w-72 min-w-72 h-[450px] rounded-lg'>
            <img className='w-full h-full rounded-lg object-cover' src={imgBaseUrl + data.poster_path} alt="poster" />
        </div>
        <div className='flex flex-col gap-3'>
            <h1 className='text-white font-bold text-5xl'>{ data.name || data.title }</h1>
            <div className='flex gap-2 items-center'>
                <div className='flex items-center gap-1.5 text-gray-500 text-xl font-medium '>
                    <span className='text-yellow-500 text-2xl'><TbStarFilled/></span>
                    <span className=''>{ Number(data.vote_average).toFixed(1) }</span>
                </div>
                <span className="w-1.5 h-1.5 rounded-full bg-gray-500"></span>
                <span className='text-gray-500 text-xl font-medium'>{ data?.release_date?.split('-')[0] || data?.first_air_date?.split('-')[0] }</span>

            </div>

                <span className='flex gap-1 text-xl text-gray-500 font-medium'>
                    { gnrs.join(', ') }
                </span>
                <p className='text-lg font-medium text-gray-100'>{ data.overview }</p>
                {
                    credits && <div className='flex gap-2 items-center flex-wrap'>
                    {credits.cast.map((cast, index) => (
                        <>
                            { (index < 4) && <div key={cast.id} className='flex flex-col gap-0.5 items-center'>
                            <img className='w-11 min-w-11 h-11 object-cover rounded-full' src={imgBaseUrl + cast.profile_path} alt="cast" />
                            <span className='text-gray-500'>({cast.name})</span>
                            <span className='text-white'>{cast.character}</span>
                        </div>}
                        </>
                    ))}
                </div>
                }
        </div>
    </div>
  )
}

export default ExploreHeader