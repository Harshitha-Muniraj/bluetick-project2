import React, { useEffect, useState } from 'react'

import RightNav from '../RightTitle/RightNav'
import RightTitle from '../RightTitle/RightTitle'
import RightExecution from '../RightTitle/RightExecution'

const Screen6= () => {
  var text = "Integrity check - Kernel Partition ,1. **Scanning for Unauthorized modifications,2.**Scanning for Vulnerabilities ,3"
  const delayText=text.split(".");
  const [texts, setTexts] = useState([]);

  useEffect(() => {
    const timeoutIds = [];

    delayText.forEach((text, i) => {
      const timeoutId = setTimeout(() => {
        setTexts((prev) => [...prev, text]);
      }, 2000 * i);

      timeoutIds.push(timeoutId);
    });

    return () => {
      timeoutIds.forEach((id) => clearTimeout(id));
    };
  }, []);

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
               <td >Kernel Partition Integrity</td>
                <td className='green s4'>No Issue</td>
               </tr>
                <tr>
                <td >Boot Partition Integrity</td>
                <td  className='green s4'>No Issue</td>
                </tr>
                <tr>
                <td >Framework/HAL Integrity</td>
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

export default Screen6