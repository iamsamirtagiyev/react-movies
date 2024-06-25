import React, { useContext, useEffect, useRef, useState } from 'react'
import Card from './Card'
import { Context } from '../context'
import axios from 'axios'
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Categories = ({ category }) => {

    const [ data, setData ] = useState(null)
    const { imgBaseUrl, open } = useContext(Context)
    const scrollRef = useRef()

  const trendingData = async () => {
    const response = await axios.get(category.path)
    setData(response.data.results)
  }

  useEffect(() => {
    trendingData()
  }, [])

  const next = () => { scrollRef.current.scrollLeft += 200 }

  const prev = () => { scrollRef.current.scrollLeft -= 200 }

  return (
    <div className='px-2 relative'>
        <h1 className='text-4xl mt-10 font-bold capitalize whitespace-nowrap overflow-hidden text-ellipsis'>{category.title}</h1>
        {
          data && 
            <div ref={scrollRef} className='scroll-smooth calc-w-screen-[256px] scroll overflow-x-auto transition-all duration-500 flex items-center gap-3 mt-5 snap-mandatory snap-x'>
              {
                  data.map((result, index) => (
                      <Card key={index} data={result}/>
                  ))
              }
            </div>
        }
        <div className='hidden sm:inline-block'>
            <button onClick={prev} className='absolute top-1/2 -translate-y-1/2 text-5xl transition-all duration-500 text-white/50 hover:text-white left-3'><FaChevronLeft/></button>
            <button onClick={next} className='absolute top-1/2 -translate-y-1/2 text-5xl transition-all duration-500 text-white/50 hover:text-white z-10 right-3'><FaChevronRight/></button>
        </div>
    </div>
  )
}

export default Categories