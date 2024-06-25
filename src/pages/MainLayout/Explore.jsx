import React, { useEffect, useState } from 'react'
import ExploreHeader from '../../components/ExploreHeader'
import { useParams } from 'react-router-dom'
import axios from 'axios'

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
    <div>
        { data && <ExploreHeader data={data} type={option}/>}
    </div>
  )
}

export default Explore