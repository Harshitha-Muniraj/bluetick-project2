import React from 'react'
import Screen4 from '../components/Screens/Screen4';
import TopHead from '../components/TopHead/TopHead'
import LeftMenu from '../components/main/leftMenu/LeftMenu'

const PSAstatic = () => {
  return (
    <>
    <TopHead/>
    <div className='flex'>
    <LeftMenu/>
    <Screen4/>
    </div>
    
    </>
  )
}

export default PSAstatic