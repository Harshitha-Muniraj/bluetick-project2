
import './App.css';

import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Excel from './components/ExcelSheet/Excel';
import PatchForm from './Pages/PatchForm';


import Conclusion from './Pages/Conclusion';
import Footer from './components/Footer/Footer';
import Home from './Pages/Home';
import PSAstatic from './Pages/PSAstatic';
import PSAdynamic from './Pages/PSAdynamic';
import IMAstatic from './Pages/IMAstatic';
import IMAdynamic from './Pages/IMAdynamic';
import Android from './Pages/Android';


function App() {
  return (
    <>
    <BrowserRouter>
    
      <Routes>
        <Route path='/' exact element={<Home/>}/>
        <Route path='/central' exact element={<PatchForm/>}/>
        <Route path='/patch' exact element={<Android/>}/>
        <Route path='/screen4' exact element={<PSAstatic/>}/>
        <Route path='/screen5' exact element={<PSAdynamic/>}/>
        <Route path='/screen6' element={<IMAstatic/>}/>
        <Route path='/screen7' exact element={<IMAdynamic/>}/>
        <Route path='/summary' exact element={<Conclusion/>}/>
      </Routes>
    
    
    
    <Footer/>
    </BrowserRouter>
    
    </>
  );
}

export default App;
