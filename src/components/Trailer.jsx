import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Trailer = ({ data, type }) => {

    const [video, setVideo] = useState(null)

    const videoData = async() => {
        const response = await axios.get(`${type}/${data.id}/videos`)
        setVideo(response.data.results[0])
    }

    useEffect(() => {
        videoData()
    }, [])


  return (
    <div className='bg-slate-950 p-5'>
        <div className='aspect-video bg-slate-800 rounded-md bg-center bg-no-repeat' style={{backgroundImage: 'url(/images/video-bg-icon.png)'}}>
            {video && <iframe  className='w-full h-full rounded-md' src={`https://www.youtube.com/embed/${video.key}?si=Jm2SPpSyYCoS4xhl`} title={`${video.name}`}  frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>}
        </div>
    </div>
  )
}

export default Trailer