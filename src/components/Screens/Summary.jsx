import React from 'react'
import RightNav from '../RightTitle/RightNav'
import RightTitle from '../RightTitle/RightTitle'
import Footer from '../Footer/Footer'

const Summary = () => {
  return (
    <div className='right-menu'>
       <RightNav title={"Result"}/>
    <section className='patch'>
        <div className='patch-container'>
          <RightTitle/>
        <div className='execution-top'>
         <p className='sum-head'>Summary</p>
         <table className='sum-table'>
            <tr  >
                <th>Patch Security Analysis</th>
                <th>Integrity Impact Analysis</th>
            </tr>
            <tr >
            <td>Static Analysis - Low Security Risk</td>
            <td>Static Impact Analysis - Low Impact</td>
            
            </tr>
            <tr >
            <td>Dynamic Analysis -Low Security Risk</td>
            <td>Dynamic Impact Analysis -Low Impact</td>
            </tr>
         </table>
         <p className='sum-head'>Result</p>
         <div className='sum-btm'>
            <div className='zoom-in-zoom-out'>
               <p>Cummulative Score - 8.5</p>
               <p>Result- Low Security Risk</p>
            </div>
            <table>
              <tr style={{backgroundColor:"#fc08088f"}}>
                <td>-5 to 0</td>
                <td>High Security Risk</td>
              </tr>
              <tr style={{backgroundColor:"#fdb306a6"}}>
                <td>0 to 5</td>
                <td>Medium Security Risk</td>
              </tr>
              <tr style={{backgroundColor:"#6ee76e"}}>
                <td>5 to 10</td>
                <td>Low Security Risk</td>
              </tr>
            </table>
         </div>
        </div>
        </div>
        </section>
        
        </div>
  )
}

export default Summary