import React, { useContext } from 'react'
import { Context } from '../context'

const Cast = ({data}) => {

    const { imgBaseUrl } = useContext(Context)

  return (
    <div className='bg-slate-900 flex items-center justify-center p-3 rounded-full gap-2 pr-5'>
        <img className='w-11 h-11 rounded-full object-cover' src={imgBaseUrl + data.profile_path} alt="cast" />
        <div className='flex-col flex'>
          <span className='text-gray-500'>({data.name})</span>
          <span className='text-gray-100'>{data.character}</span>
        </div>
    </div>
  )
}

export default Cast