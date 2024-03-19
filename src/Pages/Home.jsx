import React from 'react'
import Excel from '../components/ExcelSheet/Excel'
import TopHead from '../components/TopHead/TopHead'
import LeftMenu from '../components/main/leftMenu/LeftMenu'

const Home = () => {
  return (
    <>
    <TopHead/>
    <div className='flex'>
    <LeftMenu/>
    <Excel/>
    </div>
    
    </>
  )
}

export default Home