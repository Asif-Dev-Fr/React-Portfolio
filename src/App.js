import React from 'react';

import './App.css';

import project from './Data/data';

import NavBarTop from './Components/NavBarTop';
import SectionUn from './Components/SectionUn';
import SectionDeux from './Components/SectionDeux';


const App = () => {

  const reactProjects = project.react;

  return (
    <div className="App container-fluid p-0 m-0">
      <NavBarTop />
      <main>
        <SectionUn />
        <SectionDeux reactProjects={reactProjects} />
          
      </main>


      
    </div>
  );
}

export default App;
