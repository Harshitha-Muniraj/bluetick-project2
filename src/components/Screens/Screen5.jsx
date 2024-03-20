import React, { useState } from 'react'

import RightNav from '../RightTitle/RightNav'
import RightTitle from '../RightTitle/RightTitle'
import RightExecution from '../RightTitle/RightExecution'
import Footer from '../Footer/Footer'

const Screen5 = () => {
  const [executionFinished, setExecutionFinished] = useState(false);
    const texts=`**log Performing Dynamic analysis 
    **log Building fastboot and adb
    **cli $ make fastboot adb
    **wait 2
    **cli make fastboot adb
    **log Unzipping the image file
    **cli $ adb reboot bootloader
    **log Device in fastboot mode
    **cli fastboot flashall -w
    **log Flasing image
    **log Flasing image
    **wait 2
    **log Flasing complete
    **log **** Testing system behaviour ****
    **log Installing Android UIConductor
    **cli $ git clone https://github.com/google/android-uiconductor.git
    **cli $ sh package.sh
    **log Running UIConductor test cases
    **wait 2
    **log Running Test Cases
    **wait 2
    **log Test Cases Executed.
    **log Saving Logs and Reports
    **log **** CPU BenchMarking ****
    **cli cd android/platform/system/extras/main/./simpleperf
    **cli $ simpleperf stat -e cpu-cycles --per-core -p 1057 --duration 3
    **log # cpu        count  event_name   # count / runtime
    **log   0      1,667,660  cpu-cycles   # 1.571565 GHz
    **log   1      3,850,440  cpu-cycles   # 1.736958 GHz
    **log   2      2,463,792  cpu-cycles   # 1.701367 GHz
    **log   3      2,350,528  cpu-cycles   # 1.700841 GHz
    **log   5      7,919,520  cpu-cycles   # 2.377081 GHz
    **log   6    105,622,673  cpu-cycles   # 2.381331 GHz
    **log 
    **log  Total test time: 3.002703 seconds.
    **cli $ su 0 simpleperf stat -e cpu-cycles,instructions -a --duration 1 --per-core`
  return (
    <div className='right-menu'>
       <RightNav  title={'Patch Security Analysis-Dynamic Analysis'}/>
    <section className='patch'>
        <div className='patch-container'>
          <RightTitle/>
        <div className='execution-top'>
        <RightExecution texts={texts} setExecutionFinished={setExecutionFinished}/>
          <div className='output'>
          {executionFinished && (<>
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

export default Screen5