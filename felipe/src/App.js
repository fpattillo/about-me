import './App.css';
import { useState } from 'react';
import { Navbar } from './components/navbar';
import { Tab } from './components/tab';

function App() {
  const [tab, setTab] = useState('home');
  return (
    <div className='flex h-screen justify-center items-center'>
      <div className='flex flex-col w-10/12 justify-start items-center h-[calc(100%-80px)]'>
        <Navbar currentTab={tab} tabSetter={setTab} />
        <Tab currentTab={tab} />
      </div>
    </div>
  );
}

export default App;
