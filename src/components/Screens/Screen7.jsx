import React, { useEffect, useState } from 'react'

import RightNav from '../RightTitle/RightNav'
import RightTitle from '../RightTitle/RightTitle'
import RightExecution from '../RightTitle/RightExecution'
import Footer from '../Footer/Footer'

const Screen7 = () => {
  const [executionFinished, setExecutionFinished] = useState(false);
    var texts = `**log **********************************
    **log Post Patch Dynamic Impact Analysis
    **log **********************************
    **log ***** Using Strace  to log system calls ****
    **cli $ mmma -j6 external/strace
    **cli $ adb shell strace -f -p  100342
    **cli $ adb root
    **cli $ adb shell setenforce 0
    **cli $ adb shell start
    **cli $ adb shell mkdir -m 777 /data/local/tmp/strace
    **cli $ adb shell setprop wrap.com.android.calendar '"logwrapper strace -f -o /data/local/tmp/strace/strace.com.android.calendar.txt"'
    **log Logs Captured
    `
  

  return (
    <div className='right-menu'>
       <RightNav title={'Integrated Impact Analysis-Dynamic Analysis'}/>
    <section className='patch'>
        <div className='patch-container'>
          <RightTitle />
        <div className='execution-top'>
        <RightExecution texts={texts} setExecutionFinished={setExecutionFinished}/>
          <div className='output'>
          {executionFinished && (<>
            <div>
              <p className='execution justify'>Output - Binary Partitions</p>
            </div>
            <div className='exe-btm'>
               <table >
               <tr>
               <td >Application & Libraries Scan</td>
                <td className='green s4'>No Issue</td>
               </tr>
                <tr>
                <td >System Calls Scan</td>
                <td  className='green s4'>No Issue</td>
                </tr>
                
                <tr>
                <td >Inter Process Communication Scan</td>
                <td  className='green s4'>No Issue</td>
                </tr>
               </table>
               <div className='video-btn'>
               
                <button>Play Log Video</button>
               </div>
               </div>
            </> )}
               
            </div>
          
          </div>
          </div>
          
          
    </section>
  
    </div>
  )
}

export default Screen7