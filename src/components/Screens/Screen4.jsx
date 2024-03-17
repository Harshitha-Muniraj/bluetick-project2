import React from 'react'

import RightNav from '../RightTitle/RightNav'
import RightTitle from '../RightTitle/RightTitle'
import RightExecution from '../RightTitle/RightExecution'

const Screen4 = () => {
    const texts=""
  return (
    <div className='right-menu'>
       <RightNav/>
    <section className='patch'>
        <div className='patch-container'>
          <RightTitle/>
        <div className='execution-top'>
        <RightExecution texts={texts}/>
          <div className='output'>
            <div>
              <p className='execution'>Output - Binary Partitions</p>
            </div>
            <div className='exe-btm'>
               <table >
               <tr>
               <td >Scan for OWASP top 10</td>
                <td className='green s4'>No Issue</td>
               </tr>
                <tr>
                <td >Scan for CWE</td>
                <td  className='green s4'>No Issue</td>
                </tr>
                <tr>
                <td >Compilance with Coding Standards</td>
                <td  className='red s4'>3 Issues</td>
                </tr>
                <tr>
                <td >Scan for hardcoded Sensitive Information</td>
                <td  className='green s4'>No Issue</td>
                </tr>
               </table>
               
            </div>
          
          </div>
          </div>
          </div>
          
    </section>
    </div>
  )
}

export default Screen4