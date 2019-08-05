import React from 'react';
// import Container from './components/Container';
import Navbar from './components/Navbar';
// import Formfield from './components/Formfield';
// import CoolButton from './components/CoolButton';
import Signup from './components/Signup';
import Message from './components/Message';

import './App.css';

function App() {
  return (
    <div className="App container is-fluid">
      <Navbar/>
      
      <Signup/>
      {/* <CoolButton class="button is-rounded my-class is-danger is-small" name="Button 2"/> */}
      <Message/>
     
    </div>
  );
}

export default App;
