import React from 'react';
import TopHead from '../components/TopHead/TopHead'
import LeftMenu from '../components/main/leftMenu/LeftMenu'
import PatchAnalysis from '../components/PatchAnalysis/PatchAnalysis'

const Android = () => {
  return (
    <>
    <TopHead/>
    <div className='flex'>
    <LeftMenu/>
    <PatchAnalysis/>
    </div>
    
    </>
  )
}

export default Android