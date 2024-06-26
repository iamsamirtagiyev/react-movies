import React, { useEffect, useRef, useState } from 'react'
import ExploreHeader from '../../components/ExploreHeader'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Trailer from '../../components/Trailer'
import Categories from '../../components/Categories'

const Explore = () => {
    const [data, setData] = useState(null)
    const { option, id } = useParams()
    const scrollRef = useRef()

    const categories = [
      {
        title: `Similiar ${option}'s`,
        path: `/${option}/${id}/similar`
      },
      {
        title: 'recommendations',
        path: `/${option}/${id}/recommendations`
      },
    ]

    const exploreData = async() => {
        const response = await axios.get(`/${option}/${id}`)
        setData(response.data)
    }

    useEffect(() => {
        exploreData()
    }, [])

    if(data) document.title = data.name || data.title

  return (
    <div ref={scrollRef} className='calc-h-screen-16 overflow-y-auto bg-slate-950 text-white overflow-x-hidden w-full sm:calc-w-screen-64'>
        { data && <div>
            <ExploreHeader data={data} type={option}/>
            <Trailer data={data} type={option}/>
            <div>
              {
                categories.map((category, index) => (
                  <Categories key={index} category={category}/>
                ))
              }
            </div>
          </div>}
    </div>
  )
}

export default Explore