import React, { useContext } from 'react'
import { Context } from '../context'

const Cast = ({data}) => {

    const { imgBaseUrl } = useContext(Context)

  return (
    <div className='flex-col aspect-[3/4] w-[120px] bg-slate-900 rounded-md flex items-center justify-center py-3'>
        <img className='w-11 h-11 rounded-full object-cover' src={imgBaseUrl + data.profile_path} alt="cast" />
        <span className='text-gray-500 text-center'>({data.name})</span>
        <span className='text-gray-100 text-center'>{data.character}</span>
    </div>
  )
}

export default Cast