import React, { useEffect, useRef, useState } from 'react'

import RightNav from '../RightTitle/RightNav'
import RightTitle from '../RightTitle/RightTitle'
import RightExecution from '../RightTitle/RightExecution'
import Footer from '../Footer/Footer'

const Screen4 = () => {
  const [executionFinished, setExecutionFinished] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const playVideo = () => {
    setIsPlaying(true);
  };

  const texts=`**logs Starting Static Analysis
    **logs Scanning for OWASP Vulnarablities
    **cli $ git clone https://github.com/Cyber-Buddy/APKHunt.git
    **cli cd APKHunt
    **cli go run apkhunt.go
    **cli APKHunt.go -m /
    **logs Starting Scan
    **wait 2
    **log scan complete`
  
    
  return (
    <div className='right-menu'>
       <RightNav title={'Patch Security Analysis-Static Analysis'}/>
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
                <td >Scan for hardcoded Sensitive Information </td>
                <td  className='green s4'>No Issue</td>
                </tr>
               </table>
               {/* <div className='video-btn'>
               
                <button>Play Log Video</button>
                
                  <video width="320" height="240" controls src='./assets/static analysis.mp4'>
                    
                  </video>
                
               </div> */}
               <div className="video-btn">
   
        <div className="play-button" >
          <button onClick={playVideo}>PLAY</button>
        </div>
    
      {isPlaying && (
        <video id="myVideo" controls autoPlay preload="metadata" width={200} height={200}>
          <source src="./assets/staticanalysis.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}
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

export default Screen4