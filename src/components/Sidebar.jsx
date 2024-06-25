import classNames from 'classnames'
import React, { useContext } from 'react'
import { BsGooglePlay } from "react-icons/bs";
import { Context } from '../context'

const Sidebar = () => {

    const { open } = useContext(Context)

  return (
    <aside className={classNames('bg-slate-950 transition-all duration-1000 overflow-x-hidden absolute sm:static top-16 z-20 -left-full w-64 calc-h-screen-16 overflow-y-auto border-t border-slate-800', {'!left-0': open})}>
        <div className='py-5 pl-5'>
            <h1 className='text-2xl text-white font-bold'>Genre</h1>

            <ul className='mt-3'>
                <li className='transition-all duration-500 text-xl font-medium text-white/20 hover:text-white/50'>Action</li>
                <li className='transition-all duration-500 text-xl font-medium text-white/20 hover:text-white/50'>Action</li>
                <li className='transition-all duration-500 text-xl font-medium text-white/20 hover:text-white/50'>Action</li>
                <li className='transition-all duration-500 text-xl font-medium text-white/20 hover:text-white/50'>Action</li>
                <li className='transition-all duration-500 text-xl font-medium text-white/20 hover:text-white/50'>Action</li>
                <li className='transition-all duration-500 text-xl font-medium text-white/20 hover:text-white/50'>Action</li>
                <li className='transition-all duration-500 text-xl font-medium text-white/20 hover:text-white/50'>Action</li>
                <li className='transition-all duration-500 text-xl font-medium text-white/20 hover:text-white/50'>Action</li>
                <li className='transition-all duration-500 text-xl font-medium text-white/20 hover:text-white/50'>Action</li>
                <li className='transition-all duration-500 text-xl font-medium text-white/20 hover:text-white/50'>Action</li>
                <li className='transition-all duration-500 text-xl font-medium text-white/20 hover:text-white/50'>Action</li>
                <li className='transition-all duration-500 text-xl font-medium text-white/20 hover:text-white/50'>Action</li>
                <li className='transition-all duration-500 text-xl font-medium text-white/20 hover:text-white/50'>Action</li>
                <li className='transition-all duration-500 text-xl font-medium text-white/20 hover:text-white/50'>Action</li>
                <li className='transition-all duration-500 text-xl font-medium text-white/20 hover:text-white/50'>Action</li>
                <li className='transition-all duration-500 text-xl font-medium text-white/20 hover:text-white/50'>Action</li>
                <li className='transition-all duration-500 text-xl font-medium text-white/20 hover:text-white/50'>Action</li>
            </ul>

            <div className='border-t border-slate-800 pt-3 mt-3'>
                <span className='min-[381px]:text-xl text-white cursor-pointer font-medium whitespace-nowrap overflow-hidden text-ellipsis' title="❤">Made With By Samir</span>
                <button className='flex font-medium mt-3 gap-2 capitalize min-[381px]:text-lg h-11 w-[90%] rounded-md items-center justify-center bg-indigo-600 hover:bg-indigo-700 transition-all duration-500 text-white whitespace-nowrap overflow-hidden text-ellipsis'>
                    <span><BsGooglePlay/></span>
                    install the app
                </button>
            </div>
        </div>
    </aside>
  )
}

export default Sidebar