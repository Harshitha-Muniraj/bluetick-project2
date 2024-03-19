import React from 'react'

import RightNav from '../RightTitle/RightNav'
import RightTitle from '../RightTitle/RightTitle'
import RightExecution from '../RightTitle/RightExecution'
import Footer from '../Footer/Footer'

const Screen5 = () => {
    const texts=""
  return (
    <div className='right-menu'>
       <RightNav  title={'Patch Security Analysis-Dynamic Analysis'}/>
    <section className='patch'>
        <div className='patch-container'>
          <RightTitle/>
        <div className='execution-top'>
        <RightExecution texts={texts}/>
          {/* <div className='output'>
            <div>
              <p className='execution'>Output - Binary Partitions</p>
            </div>
            <div className='exe-btm'>
               <table >
               <tr>
               <td >System Behavior - opening file system,applications</td>
                <td className='green s4'>No Issue</td>
               </tr>
                <tr>
                <td >CPU Benchmarking</td>
                <td  className='red s4'>Moderately High</td>
                </tr>
                <tr>
                <td >Memory Profiling</td>
                <td  className='green s4'>No Issue</td>
                </tr>
                <tr>
                <td >Disk Usage</td>
                <td  className='green s4'>No Issue</td>
                </tr>
               </table>
               
            </div>
          
          </div> */}
          </div>
          </div>
          
    </section>
    
    </div>
  )
}

export default Screen5