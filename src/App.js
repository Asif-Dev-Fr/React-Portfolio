import React from 'react';

import './App.css';

import project from './Data/data';

import NavBarTop from './Components/NavBarTop';
import SectionUn from './Components/SectionUn';
import SectionDeux from './Components/SectionDeux';
import SectionTrois from './Components/SectionTrois';


const App = () => {

  const reactProjects = project.react;
  const nodeProjects = project.nodejs;
  const mernStackProjects = project.mernStack;
  const othersProjects = project.others;

  return (
    <div className="App container-fluid p-0 m-0">
      <NavBarTop />
      <main>
        <SectionUn />
        <SectionDeux 
          reactProjects={reactProjects} 
          nodeProjects={nodeProjects} 
          mernStackProjects={mernStackProjects}
          othersProjects={othersProjects}
        />

        <SectionTrois />
          
      </main>


      
    </div>
  );
}

export default App;
