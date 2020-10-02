import React, { useEffect } from 'react';

import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import project from './Data/data';

import NavBarTop from './Components/NavBarTop';
import SectionUn from './Components/SectionUn';
import SectionDeux from './Components/SectionDeux';
import SectionTrois from './Components/SectionTrois';


const App = () => {

  useEffect(() => {
    const changeBackground = () => {
        const bodyElt = document.querySelector("body");
        bodyElt.style.backgroundColor = '#18BC9C';
    }
    changeBackground()
  }, []);

  const reactProjects = project.react;
  const nodeProjects = project.nodejs;
  const mernStackProjects = project.mernStack;
  const othersProjects = project.others;

  return (
    <div className="App container-fluid p-0 m-0">
      <Router>
        <NavBarTop />
        <main>
          <Switch>
            <Route exact path='/' component={SectionUn} />
            <Route path='/projects/:technos' component={SectionDeux} 
              reactProjects={reactProjects} 
              nodeProjects={nodeProjects} 
              mernStackProjects={mernStackProjects}
              othersProjects={othersProjects}
            />

            <Route path="/a-propos" component={SectionTrois} />
          </Switch>
            
        </main>


      </Router>
    </div>
  );
}

export default App;
