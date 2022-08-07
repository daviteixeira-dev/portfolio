import React from 'react';

import './App.css';
import  'bootstrap/dist/css/bootstrap.min.css' ;

import Menu from './components/Menu/Menu';
import MainSection from './components/MainSection/MainSection';

function App() {
  return (
    <div className="App">
      <Menu />
      <MainSection />
    </div>
  );
}

export default App;
