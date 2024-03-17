
import React, { useState,useEffect } from 'react'
import './RightMenu.css'
import Data from './drdodataa.csv'
import Papa from 'papaparse'
import Modal from "react-modal";
Modal.setAppElement("#root");
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '0%',
    transform: 'translate(-50%, -50%)',
    width:"40%",
    borderRadius:"5px",
    boxShadow:'0 2px 9px grey',
    
  },
};

const Excel = () => {
    const [data,setData]=useState([])
    const [modalIsOpen, setModalIsOpen] = useState(false);

useEffect(()=>{
 const fetchData=async()=>{
    const response= await fetch(Data);
    const reader=response.body.getReader();
    const result=await reader.read();
    const decoder=new TextDecoder("utf-8");
    const csvData=decoder.decode(result.value);
    const parsedData=Papa.parse(csvData,{
      header:true,
      skipEmptyLines:true
    }).data;
    setData(parsedData)
 }
 fetchData()
},[])
  return (
    <div className='right-menu'>
       <div className='right-top'>
        <div className='icon-menu'><ion-icon name="menu"></ion-icon></div>
        <div className='person-icon'>
            
                <div><ion-icon name="person-outline"></ion-icon></div>
                <div>Harshitha</div>
            
        </div>
       </div>
    <div className='table-box'>
        <div className='btn-section'>
            <button onClick={()=>setModalIsOpen(true)} className='cursor'>Add New Patch</button>
            <button className='cursor' >Export To Excel</button>
        </div>
        <div className='field'>
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
        <div className='form-cancel-btn'>
        <button onClick={()=>setModalIsOpen(false)} className="modal-close cursor"><ion-icon name="close"></ion-icon></button>
        </div>
          
          <form>
         <div className='form-top'>
         <div>
          <label>CVE ID</label>
          <input type='text'/>
         </div>
         <div>
          <label>Date Of Record</label>
          <input type='text'/>
         </div>
         </div>
         <div>
          <label>Reference</label>
          <input type='text'/>
         </div>
         <div>
          <label>Severity</label>
          <input type='text'/>
         </div>
         
         <div>
         <label>CWE</label>
          <textarea></textarea>
         </div>
         <div>
         <label>Description</label>
          <textarea></textarea>
         </div>
        <div className='form-sub-btn'>
          <button>Add Patch</button>
        </div>
          
        </form>
        </div>
      </Modal>
       </div> 
       </div>
  )
}

export default Excel