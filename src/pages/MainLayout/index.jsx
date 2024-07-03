import React, { useContext } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../../components/Navbar'
import Sidebar from '../../components/Sidebar'
import Search from '../../components/Search'
import { Context } from '../../context'

const MainLayout = () => {
  const {search} = useContext(Context)
  return (
    <div className=''>
        <Navbar/>
        <div className='flex'>
            <Sidebar/>
            <Outlet/>
            {search && <Search/>}
        </div>
    </div>
  )
}

export default MainLayout