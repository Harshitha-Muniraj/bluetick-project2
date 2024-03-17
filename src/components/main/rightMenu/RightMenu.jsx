import React, { useState,useEffect } from 'react'
// import './RightMenu.css';

import Modal from "react-modal";
import Central from '../../Central Manager/Central';
import PatchAnalysis from '../../PatchAnalysis/PatchAnalysis';
import { BrowserRouter, Router,Route, Routes } from 'react-router-dom';
import Excel from '../../ExcelSheet/Excel';
Modal.setAppElement("#root");
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '0%',
    transform: 'translate(-50%, -50%)',
    width:"42%",
    borderRadius:"5px"
  },
};
const RightMenu = () => {
//   const [data,setData]=useState([])
//     const [modalIsOpen, setModalIsOpen] = useState(false);

// useEffect(()=>{
//  const fetchData=async()=>{
//     const response= await fetch(Data);
//     const reader=response.body.getReader();
//     const result=await reader.read();
//     const decoder=new TextDecoder("utf-8");
//     const csvData=decoder.decode(result.value);
//     const parsedData=Papa.parse(csvData,{
//       header:true,
//       skipEmptyLines:true
//     }).data;
//     setData(parsedData)
//  }
//  fetchData()
// },[])
  return (
    <div className='right-menu'>
       <div className='right-top'>
        <div className='icon-menu'><ion-icon name="menu"></ion-icon></div>
        <div className='person-icon'>
            
                <div><ion-icon name="person-outline"></ion-icon></div>
                <div>Harshitha</div>
            
        </div>
       </div>
       {/* <BrowserRouter>
        <Routes>
          <Route path='/' exact element={<Excel/>}/>
           <Route path='/central' element={<Central/>}/>
           <Route path='/patch' element={<PatchAnalysis/>}/>
        </Routes>
       </BrowserRouter> */}
       {/* <div className='table-box'>
        <div className='btn-section'>
            <button onClick={()=>setModalIsOpen(true)} className='cursor'>Add New Patch</button>
            <button className='cursor' >Export To Excel</button>
        </div>
        <div className='flied'>
        <table>
                <tr>
                    <th>Sl.No</th>
                    <th>CVE ID</th>
                    <th>Description</th>
                    <th>Date</th>
                    <th>Reference</th>
                    <th>Severity</th>
                    <th>CWE</th>
                </tr>
                {data.map((item,index) => {
                  console.log(item)
                    return (
                        <tr key={index}>
                        <td>{index}</td>
                            <td>{item.CVE}</td>
                            <td  ><p className='desc'>{item.Description}</p></td>
                            <td>{item.Date}</td>
                            <td><a href={item.References}>Link</a></td>
                            <td>{item.Severity}</td>
                            <td ><p className='desc'>{item.CWE}</p></td>
                        </tr>
                    )
                })}
            </table>
        </div>
        <Modal
        isOpen={modalIsOpen}
        style={customStyles}
      >
        <div className="modal-overlay">
          <button onClick={()=>setModalIsOpen(false)} className="modal-close cursor"><ion-icon name="close"></ion-icon></button>
          <form>
        <div className='cnt-form'>
          <div className='inp-box'>
            <label htmlFor='name' className=' g-color bold font-size-form' >CVE</label>
            <input type='text'name="name"  id='name'  className='inp-form'  />
          </div>
          <div className='inp-box'>
            <label htmlFor='number' className=' g-color bold font-size-form'>DATE</label>
            <input type='text' name='phone'  id='number' className='inp-form'  />
          </div>
          <div className='inp-box'>
            <label htmlFor='email' className=' g-color bold font-size-form'>REFERENCE</label>
            <input type="email" name='email'  id='email' className='inp-form' />
          </div>
          <div className='inp-box '>
            <label htmlFor='service' className=' g-color bold font-size-form'>SEVERITY SERVICE</label>
            <input type='text' name='service'  id='service' className='inp-form' />
          </div>
          
        </div>
        <div className='placeholder'>
           <label htmlFor='form-msg ' className=' g-color bold font-size-form'>DESCRIPTION</label>
           <textarea name='message' id='form-msg' cols="30" rows="6" />
        </div>
        <div className='placeholder '>
           <label htmlFor='form-msg ' className=' g-color bold font-size-form'>CWE</label>
           <textarea name='message' id='form-msg' cols="30" rows="6" />
        </div>
          
          <button type='submit' className='cursor bold hov-btn cursor'>Add Patch</button>
        </form>
        </div>
      </Modal>
       </div> */}
       {/* <Central/> */}
      
    </div>
  )
}

export default RightMenu