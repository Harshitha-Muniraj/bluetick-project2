import React from 'react'
import TopHead from '../components/TopHead/TopHead'
import LeftMenu from '../components/main/leftMenu/LeftMenu'
import Central from '../components/Central/Central'

const PatchForm = () => {
  return (
    <>
    <TopHead title={"Central Configeration"}/>
    <div className='flex'>
    <LeftMenu/>
    <Central/>
    </div>
    
    </>
  )
}

export default PatchForm