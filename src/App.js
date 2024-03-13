
import './App.css';
import TopHead from './components/TopHead/TopHead';
import RightMenu from './components/main/rightMenu/RightMenu';
import LeftMenu from './components/main/leftMenu/LeftMenu';

function App() {
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

export default App;
