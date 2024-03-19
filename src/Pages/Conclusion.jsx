import React from 'react'
import Summary from '../components/Screens/Summary'
import TopHead from '../components/TopHead/TopHead'
import LeftMenu from '../components/main/leftMenu/LeftMenu'

const Conclusion = () => {
  return (
    <>
    <TopHead/>
    <div className='flex'>
    <LeftMenu/>
    <Summary/>
    </div>
    
    </>
  )
}

export default Conclusion