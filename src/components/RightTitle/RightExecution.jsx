// // import React, { useEffect, useState, useRef } from 'react';

// import { useEffect, useState } from "react";

// // const RightExecution = ({ texts, setExecutionFinished }) => {
// //   const [log, setLog] = useState("");
// //   const [cli, setCli] = useState("");
// //   const [running, setRunning] = useState(false); // Changed to boolean
// //   const logRef = useRef(null);
// //   const cliRef = useRef(null);
// //   const logContent = texts;

// //   useEffect(() => {
// //     function splitAndPrintLog(logContent) {
// //       const lines = logContent.split('\n');
// //       let delay = 0;

// //       lines.forEach((line, index) => {
// //         setTimeout(() => {
// //           if (!running && line.includes('**cli')) {
// //             setCli(prevCli => prevCli + line.replace('**cli', '') + '<br>');
// //           } else if (!running && line.includes('**log')) {
// //             setLog(prevLog => prevLog + line.replace('**log', '') + '<br>');
// //           } else if (line.includes('**loader')) {
// //             setLog(prevLog => prevLog + '<div class="progress-bar"></div>');
// //             setRunning(true); // Set running to true when loader is shown
// //             setTimeout(() => {
// //               setLog(prevLog => prevLog.replace('<div class="progress-bar"></div>', ''));
// //               setRunning(false); // Set running to false after 4 seconds
// //             }, 5000);
// //           }

// //           if (index === lines.length - 1) {
// //             setTimeout(() => {
// //               setExecutionFinished(true);
// //               logRef.current && logRef.current.scrollIntoView({ behavior: 'smooth', block: 'end' });
// //               cliRef.current && cliRef.current.scrollIntoView({ behavior: 'smooth', block: 'end' });
// //             }, 200);
// //           }
// //         }, delay);

// //         delay += 2000;
// //       });
// //     }

// //     splitAndPrintLog(logContent);
// //   }, []);

// //   useEffect(() => {
// //     const logContainer = logRef.current;
// //     const cliContainer = cliRef.current;

// //     if (logContainer) {
// //       logContainer.scrollTop = logContainer.scrollHeight;
// //     }

// //     if (cliContainer) {
// //       cliContainer.scrollTop = cliContainer.scrollHeight;
// //     }
// //   }, [cli, log]);

// //   return (
// //     <div className='execution-top'>
// //       <div style={{ marginBottom: '20px' }}>
// //         <div className='execution'>
// //           <p>Execution Logs</p>
// //           <p>Command Line Interference</p>
// //         </div>
// //         <div className='cmd-box'>
// //           <div className='line-delay' ref={logRef} dangerouslySetInnerHTML={{ __html: log }}></div>
// //           <div className='line-delay-cli' ref={cliRef} dangerouslySetInnerHTML={{ __html: cli }}></div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// // export default RightExecution;



// const RightExecution = ({ texts, setExecutionFinished }) => {
//   const [log, setLog] = useState("");
//   const [cli, setCli] = useState("");
//   const [isLoading, setIsLoading] = useState(false);

//   useEffect(() => {
//     function splitAndPrintLog(logContent) {
//       const lines = logContent.split('\n');
//       let delay = 0;
//       let loaderEncountered = false;

//       lines.forEach((line, index) => {
//         setTimeout(() => {
//           if (line.includes('**cli')) {
//             setCli(prevCli => prevCli + line.replace('**cli', '') + '<br>');
//           } else if (line.includes('**log')) {
//             setLog(prevLog => prevLog + line.replace('**log', '') + '<br>');
//           } else if (line.includes('**loader') ) {
//             setIsLoading(true);
//             loaderEncountered = true;
//             setTimeout(() => {
//               setIsLoading(false);
//               setTimeout(() => {
                
//               }, 4000); // Gap of 4 seconds before moving to the next line
//             }, 4000); // Progress bar duration
//           }

//           if (index === lines.length - 1) {
//             setTimeout(() => {
//               setExecutionFinished(true);
//             }, 200);
//           }
//         }, delay);

//         delay += 2000;
//       });
//     }

//     splitAndPrintLog(texts);
//   }, []);

//   return (
//     <div className='execution-top'>
//       <div style={{ marginBottom: '20px' }}>
//         <div className='execution'>
//           <p>Execution Logs</p>
//           <p>Command Line Interference</p>
//         </div>
//         <div className='cmd-box'>
//           <div className='line-delay'>
//             {log && <div dangerouslySetInnerHTML={{ __html: log }} />}
//             {isLoading && <div className='progress-bar'></div>}
//           </div>
//           <div className='line-delay-cli' dangerouslySetInnerHTML={{ __html: cli }}></div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default RightExecution;


import React, { useEffect, useRef, useState } from 'react';

const RightExecution = ({ texts, setExecutionFinished }) => {
  const [log, setLog] = useState("");
  const [cli, setCli] = useState("");
  const [waiting,setWaiting]=useState(false)
  const [isLoading, setIsLoading] = useState(false);
  const [loaderEncountered, setLoaderEncountered] = useState(false);
  const logRef = useRef(null);
  const cliRef = useRef(null);

  useEffect(() => {
    function  splitAndPrintLog(logContent) {
      const lines = logContent.split('\n');
      let delay = 0;

      lines.forEach((line, index) => {
        setTimeout(() => {
          if (!waiting && isLoading==false && loaderEncountered==false && line.includes('**cli')) {
            setCli(prevCli => prevCli + line.replace('**cli', '') + '<br>');
          } else if (!waiting && isLoading==false && loaderEncountered==false&& line.includes('**log')) {
            setLog(prevLog => prevLog + line.replace('**log', '') + '<br>');
          }else if(!waiting && isLoading==false && loaderEncountered==false && line.includes('**wait')){
               setWaiting(true);
               setTimeout(() => {
                setWaiting(false)
               }, 5000);
          }else if (!waiting && loaderEncountered==false&& isLoading==false && line.includes('**loader')) {
         
              setIsLoading(true);
              setLoaderEncountered(true);
              
             
                setLog(prevLog => prevLog + `<div class="progress-bar" ></div>`);
              
              setTimeout(()=>{
                setLog(prevLog => prevLog.replace(`<div class="progress-bar" ></div>`, ''))
              },2000);
              setTimeout(() => {
                setIsLoading(true);
                setLoaderEncountered(true);
              }, 10000);
          
           
            
           
            // setLog(prevLog => prevLog + `<div >hello</div>`);
            // setIsLoading(true);
            // setLoaderEncountered(true);

            //  setTimeout(() => {
              
              
            //   setLog(prevLog => prevLog.replace(`<div >hello</div>`, ''));
            //   setIsLoading(false);
            //   setLoaderEncountered(false);
            //   setTimeout(() => {
            // }, 4000);
         
            // }, 4000); 
          }

          if (index === lines.length - 1) {
            setTimeout(() => {
              setExecutionFinished(true);
            }, 200);
          }
        },  delay);
delay+=2000
      });
    }

    splitAndPrintLog(texts);
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
      <div style={{ marginBottom: '20px' }}>
        <div className='execution'>
          <p>Execution Logs</p>
          <p>Command Line Interference</p>
        </div>
        <div className='cmd-box'>
          <div className='line-delay' ref={logRef} dangerouslySetInnerHTML={{ __html: log }}></div>
          <div className='line-delay-cli' ref={cliRef} dangerouslySetInnerHTML={{ __html : cli }}></div>
        </div>
      </div>
    </div>
  );
}

export default RightExecution;