import React, { useEffect, useState,useRef } from 'react'

const RightExecution = ({texts,setExecutionFinished}) => {
  const [log, setLog] = useState("");
  const [cli,setCli]=useState("");
  
  const logRef = useRef(null);
  const cliRef = useRef(null);
  var logContent = texts
  useEffect(() => {
    function splitAndPrintLog(logContent) {
      const lines = logContent.split('\n');
      let delay = 0; 
  
      lines.forEach((line, index) => {
        setTimeout(() => {
          if (line.includes('**cli')) {
            setCli(prevCli => prevCli + line.replace('**cli', '') + '<br>');
          } else if (line.includes('**log')) {
            setLog(prevLog => prevLog + line.replace('**log', '') + '<br>');
          } else if (line.includes('**wait')) {
            setLog(prevLog => prevLog + '\n');
            setCli(prevCli => prevCli + '\n');
          }
  
          if (index === lines.length - 1) {
            setTimeout(() => {
              setExecutionFinished(true);
              logRef.current && logRef.current.scrollIntoView({ behavior: 'smooth', block: 'end' });
              cliRef.current && cliRef.current.scrollIntoView({ behavior: 'smooth', block: 'end' });
            }, 200); // A small delay to ensure all new content is rendered before scrolling
          }
        }, delay);
  
        delay += 2000;
      });
    }
  
    splitAndPrintLog(logContent);
  }, []);
  useEffect(() => {
    const logContainer = logRef.current;
    const cliContainer = cliRef.current;
  
    if (logContainer) {
      logContainer.scrollTop = logContainer.scrollHeight;
    }
  
    if (cliContainer) {
      cliContainer.scrollTop = cliContainer.scrollHeight;
    }
  }, [cli, log]);

  return (
    <div className='execution-top'>
          <div   style={{    marginBottom: '20px'}} >
            <div className='execution'>
            <p>Execution Logs</p>
            <p></p>
            <p>Command Line Interference</p>
            </div>
            <div className='cmd-box'>
             {/* <div className='line-delay' > */}
             <div className='line-delay' dangerouslySetInnerHTML={{ __html: log }} ref={logRef}></div>
          {/* {log} */}
              {/* </div> */}
              <div className='line-delay-cli' dangerouslySetInnerHTML={{ __html: cli }} ref={cliRef}>

              {/* {cli} */}
              </div>
            </div>
            
            

          </div>
          {/* <div className='output'>
          {executionFinished && (<>
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
            </> )}
          </div> */}
          </div>
  )
}

export default RightExecution