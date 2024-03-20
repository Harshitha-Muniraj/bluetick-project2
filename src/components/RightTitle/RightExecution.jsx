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
            setLog(prevLog => prevLog + '<div class="loader"></div>');
          
          setTimeout(() => {
           
            setLog(prevLog => prevLog.replace('<div class="loader"></div>', ''));
          }, 2000);
          
          }
  
       
          if (index === lines.length - 1) {
            setTimeout(() => {
              setExecutionFinished(true);
              logRef.current && logRef.current.scrollIntoView({ behavior: 'smooth', block: 'end' });
              cliRef.current && cliRef.current.scrollIntoView({ behavior: 'smooth', block: 'end' });
            }, 200); 
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
           
            <p>Command Line Interference</p>
            </div>
            <div className='cmd-box'>
     
             <div className='line-delay' dangerouslySetInnerHTML={{ __html: log }} ref={logRef}></div>
      
              <div className='line-delay-cli' dangerouslySetInnerHTML={{ __html: cli }} ref={cliRef}>

              </div>
            </div>
            
            

          </div>
     
          </div>
  )
}

export default RightExecution