import classNames from 'classnames'
import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../context'
import { RiSearchLine } from "react-icons/ri";
import { IoIosClose } from "react-icons/io";

const Navbar = () => {

    const { open, setOpen } = useContext(Context)
    const [show, setShow] = useState(false)

  return (
    <div className='relative'>
        <nav className='w-full bg-slate-950 h-16 flex items-center px-5 justify-between'>
            <div className='flex items-center gap-3' >
                <button onClick={() => setOpen(!open)} className={classNames('w-11 min-w-11 h-11 bg-slate-800 rounded-md flex items-center justify-center sm:hidden')}>
                    <span className={classNames('relative w-7 block rounded-full h-[3px] after:block after:rounded-full after:h-[3px] bg-white after:bg-white transition-all duration-500 after:transition-all after:duration-500 before:transition-all before:duration-500 before:block before:rounded-full before:h-[3px] before:bg-white after:absolute before:absolute after:left-0 before:left-0 after:w-full before:w-full before:-top-2 after:top-2', { 'after:!w-4 before:!w-4 before:-rotate-45 before:translate-y-[3px] before:-translate-x-1 after:rotate-45 after:-translate-y-[3px] after:-translate-x-1' : open })}></span>
                </button>

                <Link to='/' className='flex items-center gap-2'>
                    <img className='w-11 h-11 object-cover' src="/images/logo-white.png" alt="logo" />
                    <span className='text-white text-3xl tracking-wider font-bold'>Movies</span>
                </Link>
            </div>

            <div className='w-full flex justify-end items-center gap-2'>
                <button onClick={() => setShow(true)} className="w-11 h-11 rounded-md bg-slate-800 flex items-center justify-center text-2xl text-white/30 sm:hidden">
                    <RiSearchLine/> 
                </button>

                <div className={classNames('flex gap-2 items-center text-white sm:relative sm:w-96 absolute left-0 top-0 w-full bg-slate-950 h-full px-2', { 'hidden sm:flex': !show })}>
                    <input className='peer w-full outline-none bg-slate-800 rounded-md text-lg font-medium capitalize px-3 py-1.5 pl-10 transition-all duration-500 border-2 border-transparent hover:border-white/20 focus:border-white/50 focus:pl-3' type="text" placeholder='Serach Any movies...' />
                    <span className='absolute  text-2xl left-4 text-white/30 peer-focus:opacity-0 peer-focus:pointer-events-none transition-all duration-500'>
                        <RiSearchLine/> 
                    </span>
                    <button onClick={() => setShow(false)} className='w-11 h-11 rounded-md bg-slate-800 flex items-center justify-center text-5xl text-white/30 sm:hidden'>
                        <IoIosClose/>
                    </button>
                </div>
            </div>
        </nav>
    </div>
  )
}

export default Navbar