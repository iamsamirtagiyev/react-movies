import React from 'react'
import Banner from '../../components/Banner'
import Categories from '../../components/Categories'

const Home = () => {

  const categories = [
    {
      title: 'trending',
      path: '/trending/all/week'
    },
    {
      title: 'upcoming movies',
      path: '/movie/upcoming'
    },
    {
      title: 'top rated movies',
      path: '/movie/top_rated'
    },
    {
      title: 'airing today TV series',
      path: '/tv/airing_today'
    },
    {
      title: 'top rated TV series',
      path: '/tv/top_rated'
    },
  ]

  return (
    <div className='bg-slate-950 text-white w-full sm:calc-w-screen-64 calc-h-screen-16 p-2 overflow-y-auto'>
      <Banner/>
      {
        categories.map((category, index) => (
          <Categories key={index} category={category}/>
        ))
      }
    </div>
  )
}

export default Home