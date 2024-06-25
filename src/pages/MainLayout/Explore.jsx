import React, { useEffect, useState } from 'react'
import ExploreHeader from '../../components/ExploreHeader'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Trailer from '../../components/Trailer'

const Explore = () => {
    const [data, setData] = useState(null)
    const { option, id } = useParams()

    const exploreData = async() => {
        const response = await axios.get(`/${option}/${id}`)
        setData(response.data)
    }

    useEffect(() => {
        exploreData()
    }, [])

    if(data) document.title = data.name || data.title

  return (
    <div className='calc-h-screen-16 overflow-y-auto overflow-x-hidden w-full sm:calc-w-screen-64'>
        { data && <div>
            <ExploreHeader data={data} type={option}/>
            <Trailer data={data} type={option}/>
          </div>}
    </div>
  )
}

export default Explore