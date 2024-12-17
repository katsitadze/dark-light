import React, { useEffect } from 'react'
import './App.css';
import useLocalStorage from './hooks/useLocalStorage';

import useDeviceType from './hooks/useDeviceType';

function App() {

  
 const [theme, setTheme] =  useLocalStorage ('theme', 'light')

 const deviceType = useDeviceType()

 useEffect(() => {
  if (deviceType !== 'desktop') {
    setTheme('light'); 
  }
}, [deviceType, setTheme]);


const toggleTheme = () => {
  if (deviceType === 'desktop') {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light')); 
  }
};

return (
  <div className={`app ${theme}`}>
    <button onClick={toggleTheme} disabled={deviceType !== 'desktop'}>
      Toggle Theme
    </button>
    <h1>Current Theme: {theme}</h1>
  </div>
);
};

export default App;