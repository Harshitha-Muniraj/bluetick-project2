import React, { useEffect, useRef, useState } from 'react'
import './PatchAnalysis.css'
import Footer from '../Footer/Footer';
import RightExecution from '../RightTitle/RightExecution';
const PatchAnalysis = () => {
 

  const [executionFinished, setExecutionFinished] = useState(false);
 

  var texts = `**log Building Kernel Binary (image)
  **wait 2 
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
            <p> Test Patch 1</p>
          </div>
          <div></div>
          </div>
          <div className='execution-top'>
          <RightExecution texts={texts} setExecutionFinished={setExecutionFinished}/>
          {/* <div   style={{    marginBottom: '20px'}} >
            <div className='execution'>
            <p>Execution Logs</p>
           
            <p>Command Line Interference</p>
            </div>
            <div className='cmd-box'>
           
            <div className='line-delay' dangerouslySetInnerHTML={{ __html: log }} ref={logRef}></div>
          
              <div className='line-delay-cli' dangerouslySetInnerHTML={{ __html: cli }} ref={cliRef}>

              </div>
            </div>
            
            

          </div> */}
          <div className='output'>
          {executionFinished && (<>
            <div>
              <p className='execution'>Output - Binary Partitions</p>
            </div>
            <div className='exe-btm'>
               <table>
               <tr>
               <td className='err-div'><p  className='error' >Boot Partition <ion-icon name="download-outline"></ion-icon></p></td>
                <td className='err-div'><p  className='error' >Application Partition <ion-icon name="download-outline"></ion-icon></p></td>
               </tr>
                <tr>
                <td className='err-div'><p  className='error' >Kernel Partition <ion-icon name="download-outline"></ion-icon></p></td>
                <td className='err-div'><p  className='error' >HAL Partition <ion-icon name="download-outline"></ion-icon></p></td>
                </tr>
                
                
               </table>
               <div className='video-btn'>
               
                <button>Play Log Video</button>
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

export default PatchAnalysis