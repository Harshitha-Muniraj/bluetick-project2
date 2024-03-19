import React from 'react'
import './Central.css'
import Footer from '../Footer/Footer'
import { Link } from 'react-router-dom'
const Central = () => {
  return (
    <div className='right-menu'>
       <div className='right-top'>
        <div className='icon-menu'>Central Configeration</div>
        <div className='person-icon'>
            <div></div>
                <div><ion-icon name="person-outline"></ion-icon></div>
                <div>Admin</div>
            
        </div>
       </div>
    <section className='central'>
        {/* <h2>Configuration Manager</h2> */}
        <div className='patch-top'>
          <div className='pt-container' id='pt-container'>
            <p>Add New Configeration</p>
            {/* <p>Sample Test Patch 1</p> */}
          </div>
          </div>
        <form className='cent-bg'>
        <div className='cent-container'>
            <div className='cent-div'>
                <label>Select Security Patch <span className='required'>*</span></label>
                <input type='file' className='outline' accept='.doc ,.html,.pdf ,.csv' />
   
            </div>
            <div className='cent-div'>
                <label>Select Android Version <span className='required'>*</span></label>
                <select name="cars" id="cars" className='outline'>
                <option >Select</option>
  <option value="volvo">Android 9</option>
  <option value="saab">Android 10</option>
  <option value="mercedes">Android 11</option>
  <option value="audi">Android 12</option>
  <option value="audi">Android 13</option>
</select>
            </div>
            <div className='cent-div'>
                <label>Select Test Device <span className='required'>*</span></label>
                <select name="cars" id="cars" className='outline'>
                <option >Select</option>
  <option value="volvo">Google Pixel</option>
  <option value="saab">Samsung</option>
  <option value="mercedes">Android Emulator</option>
  
</select>
            </div>
            <div className='cent-div'>
                <label>Select Integrity Mechanism <span className='required'>*</span></label>
                <select name="cars" id="cars" className='outline'>
                <option >Select</option>
  <option value="volvo">Hash</option>
  <option value="saab">Hash Chain</option>
  <option value="mercedes">Public Key Cryptography</option>
  
</select>
            </div>
            </div>
            <div className='cent-btn-container'>
            <button ><Link to='/patch'>Start Patch Analysis</Link></button>
        </div>
        </form>
        
    </section>
    
    </div>
  )
}

export default Central