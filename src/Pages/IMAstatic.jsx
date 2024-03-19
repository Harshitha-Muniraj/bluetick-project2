import React from 'react'
import Screen6 from '../components/Screens/Screen6'
import TopHead from '../components/TopHead/TopHead'
import LeftMenu from '../components/main/leftMenu/LeftMenu'

const IMAstatic = () => {
  return (
    <>
    <TopHead/>
    <div className='flex'>
    <LeftMenu/>
    <Screen6/>
    </div>
    
    </>
  )
}

export default IMAstatic