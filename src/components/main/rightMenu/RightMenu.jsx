import React, { useState } from 'react'
import './RightMenu.css';
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
    width:"42%",
    borderRadius:"5px"
  },
};
const RightMenu = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const data=[
        {
        id: 1,
        cve:'CVE-2024-26260',
        description:"The functionality for synchronization in HGiga OAKlouds' certain moudules has an OS ",
        date:'0240215',
        reference:"MISC:https://www.twcert.org.tw/tw/cp-132-7673-688b7-1.html",
        severity:"Critical Base score- 9.8",
        cwe:"Improper Neutralization of Special Elements used in an OS Command"
    }
,{
    id: 2,
    cve:'CVE-2024-26260',
    description:"The functionality for synchronization in HGiga OAKlouds' certain moudules has an OS ",
    date:'0240215',
    reference:"MISC:https://www.twcert.org.tw/tw/cp-132-7673-688b7-1.html",
    severity:"Critical Base score- 9.8",
    cwe:"Improper Neutralization of Special Elements used in an OS Command"
}
,{
    id: 3,
    cve:'CVE-2024-26260',
    description:"The functionality for synchronization in HGiga OAKlouds' certain moudules has an OS ",
    date:'0240215',
    reference:"MISC:https://www.twcert.org.tw/tw/cp-132-7673-688b7-1.html",
    severity:"Critical Base score- 9.8",
    cwe:"Improper Neutralization of Special Elements used in an OS Command"
}
,{
    id: 4,
    cve:'CVE-2024-26260',
    description:"The functionality for synchronization in HGiga OAKlouds' certain moudules has an OS ",
    date:'0240215',
    reference:"MISC:https://www.twcert.org.tw/tw/cp-132-7673-688b7-1.html",
    severity:"Critical Base score- 9.8",
    cwe:"Improper Neutralization of Special Elements used in an OS Command"
}
,{
    id: 5,
    cve:'CVE-2024-26260',
    description:"The functionality for synchronization in HGiga OAKlouds' certain moudules has an OS ",
    date:'0240215',
    reference:"MISC:https://www.twcert.org.tw/tw/cp-132-7673-688b7-1.html",
    severity:"Critical Base score- 9.8",
    cwe:"Improper Neutralization of Special Elements used in an OS Command"
}
,{
    id: 6,
    cve:'CVE-2024-26260',
    description:"The functionality for synchronization in HGiga OAKlouds' certain moudules has an OS ",
    date:'0240215',
    reference:"MISC:https://www.twcert.org.tw/tw/cp-132-7673-688b7-1.html",
    severity:"Critical Base score- 9.8",
    cwe:"Improper Neutralization of Special Elements used in an OS Command"
}
,{
    id:7 ,
    cve:'CVE-2024-26260',
    description:"The functionality for synchronization in HGiga OAKlouds' certain moudules has an OS ",
    date:'0240215',
    reference:"MISC:https://www.twcert.org.tw/tw/cp-132-7673-688b7-1.html",
    severity:"Critical Base score- 9.8",
    cwe:"Improper Neutralization of Special Elements used in an OS Command"
}
,{
    id:8 ,
    cve:'CVE-2024-26260',
    description:"The functionality for synchronization in HGiga OAKlouds' certain moudules has an OS ",
    date:'0240215',
    reference:"MISC:https://www.twcert.org.tw/tw/cp-132-7673-688b7-1.html",
    severity:"Critical Base score- 9.8",
    cwe:"Improper Neutralization of Special Elements used in an OS Command"
}
,{
    id:9 ,
    cve:'CVE-2024-26260',
    description:"The functionality for synchronization in HGiga OAKlouds' certain moudules has an OS ",
    date:'0240215',
    reference:"MISC:https://www.twcert.org.tw/tw/cp-132-7673-688b7-1.html",
    severity:"Critical Base score- 9.8",
    cwe:"Improper Neutralization of Special Elements used in an OS Command"
}
,{
    id: 10,
    cve:'CVE-2024-26260',
    description:"The functionality for synchronization in HGiga OAKlouds' certain moudules has an OS ",
    date:'0240215',
    reference:"MISC:https://www.twcert.org.tw/tw/cp-132-7673-688b7-1.html",
    severity:"Critical Base score- 9.8",
    cwe:"Improper Neutralization of Special Elements used in an OS Command"
}
,]
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
        <div className='flied'>
        <table>
                <tr>
                    <th>Sl.No</th>
                    <th>CVE</th>
                    <th>Description</th>
                    <th>Date</th>
                    <th>Reference</th>
                    <th>Severity</th>
                    <th>CWE</th>
                </tr>
                {data.map((item) => {
                    return (
                        <tr key={item.id}>
                        <td>{item.id}</td>
                            <td>{item.cve}</td>
                            <td>{item.description}</td>
                            <td>{item.date}</td>
                            <td><a href={item.reference}>Link</a></td>
                            <td>{item.severity}</td>
                            <td>{item.cwe}</td>
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
            <input type='text'name="name" value="" id='name'  className='inp-form'  />
          </div>
          <div className='inp-box'>
            <label htmlFor='number' className=' g-color bold font-size-form'>DATE</label>
            <input type='text' name='phone' value="" id='number' className='inp-form'  />
          </div>
          <div className='inp-box'>
            <label htmlFor='email' className=' g-color bold font-size-form'>REFERENCE</label>
            <input type="email" name='email' value="" id='email' className='inp-form' />
          </div>
          <div className='inp-box '>
            <label htmlFor='service' className=' g-color bold font-size-form'>SEVERITY SERVICE</label>
            <input type='text' name='service' value="" id='service' className='inp-form' />
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
          
          <button type='submit' className='cursor bold hov-btn cursor'>GET FREE QUOTE</button>
        </form>
        </div>
      </Modal>
       </div>
    </div>
  )
}

export default RightMenu