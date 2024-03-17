import TopHead from './components/TopHead/TopHead';
import RightMenu from './components/main/rightMenu/RightMenu';
import LeftMenu from './components/main/leftMenu/LeftMenu';
import { Outlet } from 'react-router-dom';

function Home() {
  return (
    <>
    <TopHead/>
    <div className='flex'>
    <LeftMenu/>
    <RightMenu/>
    </div>
    
    </>
  );
}

export default Home;