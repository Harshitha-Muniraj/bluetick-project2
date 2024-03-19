import React, { useEffect, useState } from 'react'

const RightExecution = ({texts}) => {
  const [log, setLog] = useState("");
  const [cli,setCli]=useState("");
  const [executionFinished, setExecutionFinished] = useState(false);
  var logContent = texts
  useEffect(() => {
    function splitAndPrintLog(logContent) {
        const lines = logContent.split('\n');
        let logParagraph = '';
        let cliParagraph = '';
  
        lines.forEach((line, index) => {
            if (line.includes('**cli')) {
                setTimeout(() => {
                    setCli(prevCli => prevCli + line.replace('**cli', '') + '\n');
                }, index * 2000);
            } else if (line.includes('**log')) {
                setTimeout(() => {
                    setLog(prevLog => prevLog + line.replace('**log', '') + '\n');
                }, index * 2000);
            } else if (line.includes('**wait')) {
                setTimeout(() => {
                    setLog(prevLog => prevLog + '\n');
                    setCli(prevCli => prevCli + '\n');
                }, index * 2000 + 3000);
            }
        });
  
        // Set execution finished after the last line is processed
        setTimeout(() => {
            setExecutionFinished(true);
        }, lines.length * 2000 + 3000);
    }
  
    splitAndPrintLog(logContent);
  }, []);
  return (
    <div   style={{    marginBottom: '20px'}} >
            <div className='execution'>
            <p>Execution Logs</p>
            <p></p>
            <p>Command Line Interference</p>
            </div>
            <div className='cmd-box'>
            <div className='line-delay' >
          
          {log}
              </div>
              <div className='line-delay-cli'>

              {cli}
              </div>
            </div>
            
            

          </div>
  )
}

export default RightExecution