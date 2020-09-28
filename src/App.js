import React from 'react';

import './App.css';

import NavBarTop from './Components/NavBarTop';
import SectionUn from './Components/SectionUn';

const App = () => {
  return (
    <div className="App container-fluid p-0 m-0">
      <NavBarTop />
      <main>
        <SectionUn />
          
      </main>


      
    </div>
  );
}

export default App;
