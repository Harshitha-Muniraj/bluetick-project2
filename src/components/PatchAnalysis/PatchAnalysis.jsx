import React, { useEffect, useState } from 'react'
import './PatchAnalysis.css'
import Footer from '../Footer/Footer';
const PatchAnalysis = () => {
 
  const [log, setLog] = useState("");
  const [cli,setCli]=useState("")
var logContent="**log Building Kernel Binary (image)**log Download Android kernel sourcecode**cli $ mkdir android-kernel && cd android-kernel**cli $ repo init -u https://android.googlesource.com/kernel/manifest**cli $ repo sync**log **cli $ tools/bazel build //common-modules/virtual-device:virtual_device_x86_64_dist**log Installing bazel**log Setting up path with bazel**cli $ source build/envsetup.sh**log **** Bulding Kernel image Image.lz4-dtb *****log Redirecting log to log file**log Loading**wait 2 **log build complete**log Building Android**cli $ source build/envsetup.sh**cli $ lunch aosp_cf_x86_64_phone-trunk_staging-userdebug**cli $ echo$TARGET_PRODUCT-$TARGET_BUILD_VARIANT**cli $ m**log ============================================**log PLATFORM_VERSION_CODENAME=VanillaIceCream**log PLATFORM_VERSION=VanillaIceCream**log PRODUCT_INCLUDE_TAGS=com.android.mainline**log TARGET_PRODUCT=aosp_arm**log ============================================"
  useEffect(()=>{
    
    function splitAndPrintLog(logContent) {
      // Split the log content into lines
      const lines = logContent.split('\n');
      let logParagraph = '';
      let cliParagraph = '';

      lines.forEach((line, index) => {
          // Check if line starts with **log
          if (line.startsWith('**log')) {
              logParagraph += line.replace('**log ', '') + '\n';
              setLog(logParagraph);
          }
          // Check if line starts with **cli
          else if (line.startsWith('**cli')) {
              cliParagraph += line.replace('**cli ', '') + '\n';
              setCli(cliParagraph);
          }
          // Check if line starts with **wait
          else if (line.startsWith('**wait')) {
              // Wait for 3 seconds
              setTimeout(() => {
                  console.log('Waiting for 3 seconds...');
                  // Update state after waiting
                  setLog(logParagraph);
                  setCli(cliParagraph);
              }, 3000);
          }
      });
  }

  splitAndPrintLog(logContent)
  },[])

  // useEffect(() => {
  // //   const timeoutIds = [];

  // //   delayText.forEach((text, i) => {
  // //     const timeoutId = setTimeout(() => {
  // //       setTexts((prev) => [...prev, text]);
  // //     }, 2000 * i);

  // //     timeoutIds.push(timeoutId);
  // //   });

  // //   return () => {
  // //     timeoutIds.forEach((id) => clearTimeout(id));
  // //   };
  // // }, []);

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
              <div className='line-delay'>

              {cli}
              </div>
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