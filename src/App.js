import Login from './Components/Login';
import React from 'react'
import Register from './Components/Register';
import Page from './Components/Page';
import { useMediaQuery } from 'react-responsive';
import { useState } from 'react';

const App = () => {
  const isDesktop = useMediaQuery({
    query: "(min-device-width: 1200px)",
  });
  const [show,setShow]=useState('register');
  console.log(show);

  return (
    <div>
  
      {show==='register' && <Register callbackset={setShow}/>}
      {show==="login" && <Login callbackset={setShow}/>}
      {show==='page' && <Page callbackset={setShow}/>}

    </div>
  )
}

export default App;