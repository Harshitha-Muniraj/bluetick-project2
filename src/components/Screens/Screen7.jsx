import React, { useEffect, useState } from 'react'

import RightNav from '../RightTitle/RightNav'
import RightTitle from '../RightTitle/RightTitle'
import RightExecution from '../RightTitle/RightExecution'
import Footer from '../Footer/Footer'

const Screen7 = () => {
    var text = "Dynamic Impact Analysis ,1. Scan for System calls,2.Inter Process Communication scan,3"
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
       <RightNav title={'Integrated Impact Analysis-Dynamic Analysis'}/>
    <section className='patch'>
        <div className='patch-container'>
          <RightTitle />
        <div className='execution-top'>
        <RightExecution texts={texts}/>
          {/* <div className='output'>
            <div>
              <p className='execution'>Output - Binary Partitions</p>
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
               
            </div>
          
          </div> */}
          </div>
          </div>
          
    </section>
  
    </div>
  )
}

export default Screen7