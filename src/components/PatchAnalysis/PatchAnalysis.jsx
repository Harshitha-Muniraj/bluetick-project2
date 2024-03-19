import React, { useEffect, useState } from 'react'
import './PatchAnalysis.css'
import Footer from '../Footer/Footer';
const PatchAnalysis = () => {
 
  const [log, setLog] = useState("");
  const [cli,setCli]=useState("");
  const [executionFinished, setExecutionFinished] = useState(false);
  var logContent = `**log Building Kernel Binary (image)
  **log Download Android kernel source code
  **cli $ mkdir android-kernel && cd android-kernel
  **cli $ repo init -u https://android.googlesource.com/kernel/manifest
  **cli $ repo sync
  **log 
  **cli $ tools/bazel build //common-modules/virtual-device:virtual_device_x86_64_dist
  **log Installing bazel
  **log Setting up path with bazel
  **cli $ source build/envsetup.sh
  **log **** Bulding Kernel image Image.lz4-dtb ***
  **log Redirecting log to log file
  **log Loading
  **wait 2 
  **log build complete
  **log Building Android
  **cli $ source build/envsetup.sh
  **cli $ lunch aosp_cf_x86_64_phone-trunk_staging-userdebug
  **cli $ echo $TARGET_PRODUCT-$TARGET_BUILD_VARIANT
  **cli $ m
  **log ============================================
  **log PLATFORM_VERSION_CODENAME=VanillaIceCream
  **log PLATFORM_VERSION=VanillaIceCream
  **log PRODUCT_INCLUDE_TAGS=com.android.mainline
  **log TARGET_PRODUCT=aosp_arm
  **log TARGET_BUILD_VARIANT=eng
  **log TARGET_ARCH=arm
  **log TARGET_ARCH_VARIANT=armv7-a-neon
  **log TARGET_CPU_VARIANT=generic
  **log HOST_OS=linux
  **log HOST_OS_EXTRA=Linux-6.5.13-1rodete2-amd64-x86_64-Debian-GNU/Linux-rodete
  **log HOST_CROSS_OS=windows
  **log BUILD_ID=AOSP.MAIN
  **log OUT_DIR=out
  **log ============================================`;

//   useEffect(() => {
//     function splitAndPrintLog(logContent) {
//         // Split the log content into lines
//         const lines = logContent.split('\n');

//         lines.forEach((line, index) => {
//             setTimeout(() => {
//                 // Check if line contains **cli
//                 if (line.includes('**cli')) {
//                     setCli(prevCli => prevCli + line.replace('**cli', '') + '\n');
//                 }
//                 // Check if line contains **log
//                 else if (line.includes('**log')) {
//                     setLog(prevLog => prevLog + line.replace('**log', '') + '\n');
//                 }
//                 // Check if line contains **wait
//                 else if (line.includes('**wait')) {
//                     setLog(prevLog => prevLog + '\n');
//                     setCli(prevCli => prevCli + '\n');
//                 }
//             }, index * 2000); // Delay printing by 2 seconds for each line
//         });
//     }

//     splitAndPrintLog(logContent);
// }, []);

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
    <div className='right-menu'>
       <div className='right-top'>
       <div className='icon-menu'>Android Platform Integrity</div>
        <div className='person-icon'>
            
                <div><ion-icon name="person-outline"></ion-icon></div>
                <div>Admin</div>
            
        </div>
       </div>
    <section className='patch'>
          
          <div className='patch-container'>
          <div className='patch-top'>
          <div className='pt-container'>
            <p>Patch Name</p>
            <p>Sample Test Patch 1</p>
          </div>
          <div></div>
          </div>
          <div className='execution-top'>
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
          <div className='output'>
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
          </div>
          </div>
          </div>
          
    </section>
    </div>
  )
}

export default PatchAnalysis