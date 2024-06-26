import classNames from 'classnames'
import React, { useContext } from 'react'
import { Context } from '../context'
import { TbStarFilled } from "react-icons/tb";
import { useNavigate } from 'react-router-dom';

const Card = ({data}) => {

    const { imgBaseUrl, open } = useContext(Context)
    const navigate = useNavigate()
    // const history = useHistory()

    const explore = () => {
        if(data.title){
            navigate(`/movie/${data.id}`)
        }
        else{
            navigate(`/tv/${data.id}`)
        }
    }

  return (
    <>
        {
            data.poster_path && <div onClick={explore} className={classNames('min-w-44 w-44 cursor-pointer transition-all duration-500 group snap-start')} title={data.name || data.title}>
            <div className='w-44 h-64 rounded-md overflow-hidden bg-center transition-all duration-500 bg-slate-800 bg-no-repeat' style={{backgroundImage: 'url(./images/video-bg-icon.png)'}}>
                <img className='transition-all duration-500 w-full h-64 object-cover object-center group-hover:scale-110' src={imgBaseUrl+data.poster_path} alt="poster" />
            </div>
            <div className='py-0.5 px-1.5 flex flex-col gap-1.5'>
                <h3 className='w-full text-ellipsis overflow-hidden whitespace-nowrap text-xl font-bold'>{ data.title || data.name }</h3>
                <div className='flex items-center justify-between'>
                    <div className='flex items-center gap-1.5 text-base font-medium '>
                        <span className='text-yellow-500 text-lg'><TbStarFilled/></span>
                        <span className=''>{ Number(data.vote_average).toFixed(1) }</span>
                    </div>
                    <span className='px-1.5 py-0.5 bg-white/20 font-medium rounded-md'>{ data?.release_date?.split('-')[0] || data?.first_air_date?.split('-')[0] }</span>
                </div>
            </div>
        </div>
        }
    </>
  )
}

export default Card