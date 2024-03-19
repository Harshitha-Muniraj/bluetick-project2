import React, { useState } from 'react'
import './LeftMenu.css'
import { Link, NavLink } from 'react-router-dom'
const LeftMenu = () => {
  const [display1,setDisplay1]=useState(false)
  const [display2,setDisplay2]=useState(false)
  return (
    <div className='left-menu'>
        <div className='lm-top'>Menu</div>
        <div className='lm-btm'>
        <div><NavLink to='/' >Patch Database <ion-icon name="chevron-forward" id='icon'></ion-icon></NavLink> </div>
        <div><NavLink to='/central' >Central Manager <ion-icon name="chevron-forward" id='icon'></ion-icon></NavLink></div>
        <div><NavLink to='/patch' >Android Platform Integrity <ion-icon name="chevron-forward" id='icon'></ion-icon></NavLink></div>
        <div onClick={()=>setDisplay1(!display1)} className='cursor' >Patch Security Analysis <ion-icon name="chevron-forward" id='icon'></ion-icon></div>
        {display1 && <div className='subsection'>
          <p ><NavLink to='/screen4' >- Static Analysis</NavLink></p>
          <p><NavLink to='/screen5' >- Dynamic Analysis</NavLink></p>
        </div>}
        <div onClick={()=>setDisplay2(!display2)} className='cursor'>Integrated Impact Analysis<ion-icon name="chevron-forward" id='icon'></ion-icon></div>
        {display2 && <div className='subsection'>
          <p ><NavLink to='/screen6' >- Static Analysis</NavLink></p>
          <p><NavLink to='/screen7' >- Dynamic Analysis</NavLink></p>
        </div>}
        <div><NavLink to='/summary' >Summary <ion-icon name="chevron-forward" id='icon'></ion-icon></NavLink> </div>
        </div>
    </div>
  )
}

export default LeftMenu