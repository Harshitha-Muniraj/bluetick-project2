
import './App.css';
import TopHead from './components/TopHead/TopHead';
import RightMenu from './components/main/rightMenu/RightMenu';
import LeftMenu from './components/main/leftMenu/LeftMenu';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Excel from './components/ExcelSheet/Excel';
import Central from './components/Central Manager/Central';
import PatchAnalysis from './components/PatchAnalysis/PatchAnalysis';
import Screen4 from './components/Screens/Screen4';
import Screen5 from './components/Screens/Screen5';
import Screen6 from './components/Screens/Screen6';
import Screen7 from './components/Screens/Screen7';
import Summary from './components/Screens/Summary';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
    <BrowserRouter>
    <TopHead/>
    <div className='flex'>
    <LeftMenu/>
    
      <Routes>
        <Route path='/' exact element={<Excel/>}/>
        <Route path='/central' exact element={<Central/>}/>
        <Route path='/patch' exact element={<PatchAnalysis/>}/>
        <Route path='/screen4' element={<Screen4/>}/>
        <Route path='/screen5' element={<Screen5/>}/>
        <Route path='/screen6' element={<Screen6/>}/>
        <Route path='/screen7' element={<Screen7/>}/>
        <Route path='/summary' element={<Summary/>}/>
      </Routes>
    
    
    
    </div>
    <Footer/>
    </BrowserRouter>
    </>
  );
}

export default App;
