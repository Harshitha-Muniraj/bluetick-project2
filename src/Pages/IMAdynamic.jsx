import React from 'react'
import Screen7 from '../components/Screens/Screen7'
import TopHead from '../components/TopHead/TopHead'
import LeftMenu from '../components/main/leftMenu/LeftMenu'

const IMAdynamic = () => {
  return (
    <>
    <TopHead/>
    <div className='flex'>
    <LeftMenu/>
    <Screen7/>
    </div>
    
    </>
  )
}

export default IMAdynamic