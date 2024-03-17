import React, { useEffect, useState } from 'react'
import './PatchAnalysis.css'
const PatchAnalysis = () => {
  var text = "enerating Random Text ,1. A computer program can easily produce gibberish ,2. especially if it has been provided with garbage beforehand ,3"
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
       <div className='right-top'>
        <div className='icon-menu'><ion-icon name="menu"></ion-icon></div>
        <div className='person-icon'>
            
                <div><ion-icon name="person-outline"></ion-icon></div>
                <div>Harshitha</div>
            
        </div>
       </div>
    <section className='patch'>
          
          <div className='patch-container'>
          <div className='patch-top'>
          <div className='pt-container'>
            <p>Patch Name</p>
            <p>Sample Test Patch 1</p>
          </div>
          <div className='pt-container'>Patch Analysis-Android Platform Integrity</div>
          </div>
          <div className='execution-top'>
          <div   style={{    marginBottom: '20px'}} >
            <p className='execution'>Execution Logs</p>
            <div className='line-delay' >
          
        {texts.map((text) => {
          const test=text.split(",")
          return(
            <p key={text}> - {test[0]}</p>
          )
        }
          
        
      )}
            </div>
            

          </div>
          <div className='output'>
            <div>
              <p className='execution'>Output - Binary Partitions</p>
            </div>
            <div className='exe-btm'>
               <table>
               <tr>
               <td><p  className='error' >Boot Partition</p></td>
                <td><p  className='error' >Application Partition</p></td>
               </tr>
                <tr>
                <td>Kernel Partition</td>
                </tr>
                <tr>
                <td>HAL Partition</td>
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

export default PatchAnalysis