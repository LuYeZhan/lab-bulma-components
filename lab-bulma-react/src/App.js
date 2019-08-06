import React from 'react';


// import Formfield from './components/Formfield';
// import CoolButton from './components/CoolButton';
import Signup from './components/Signup';
import Message from './components/Message';
import Navbar from './components/Navbar';

import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Signup/>
      <Message/>
    </div>
  );
}

export default App;
