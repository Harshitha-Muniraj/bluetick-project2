import React, { useEffect, useState } from 'react'

import RightNav from '../RightTitle/RightNav'
import RightTitle from '../RightTitle/RightTitle'
import RightExecution from '../RightTitle/RightExecution'
import Footer from '../Footer/Footer'

const Screen6= () => {
  var texts=`**log **********************************
  **log Post Patch Kernel Impact Analysis
  **log **********************************
  **log ***** Running VTS HAL tests ******
  **log Running Test cases on  VtsHalCameraProviderV2_4TargetTest.cpp.
  **wait 2
  **log Test Complete
  **log ***** Boot Integrity  ******
  **log **** Running Android Verified Boot (AVB)  ***
  **cli $ avbtool make_vbmeta_image                                                                  \
  **log An integrity footer containing the root digest and salt for a hashtree for a partition can be added to an existing image
  **cli $ avbtool add_hashtree_footer --partition_name PARTNAME --partition_size SIZE  --image boot.img --print_required_libavb_version --calc_max_image_size --no_hashtree --use_persistent_digest --check_at_most_once
  **log *** verifying boot image **
  **cli $ avbtool verify_image  --image /path/to/vbmeta.img  --key my_key.pem   --expect_chained_partition foobar:8:foobar_vendor_key.avbpubkey
  **log Verifying image /path/to/vbmeta.img using key at my_key.pem
  **log vbmeta: Successfully verified SHA256_RSA4096 vbmeta struct in /path_to/vbmeta.img
  **log boot: Successfully verified sha256 hash of /path/to/boot.img for image of 10543104 bytes
  **log system: Successfully verified sha1 hashtree of /path/to/system.img for image of 1065213952 bytes
  **log foobar: Successfully verified chain partition descriptor matches expected data`
  const [executionFinished, setExecutionFinished] = useState(false);
  

  return (
    <div className='right-menu'>
       <RightNav  title={'Integrated Impact Analysis-Dynamic Analysis'}/>
    <section className='patch'>
        <div className='patch-container'>
          <RightTitle/>
        <div className='execution-top'>
        <RightExecution texts={texts} setExecutionFinished={setExecutionFinished}/>
          <div className='output'>
          {executionFinished && (<>
            <div>
              <p className='execution justify'>Output - Binary Partitions</p>
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

export default Screen6