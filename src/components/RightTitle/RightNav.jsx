import React from 'react'

const RightNav = ({title}) => {
  return (
    <div className='right-top'>
       <div className='icon-menu'>{title}</div>
        <div className='person-icon'>
            
                <div><ion-icon name="person-outline"></ion-icon></div>
                <div>Admin</div>
            
        </div>
       </div>
  )
}

export default RightNav