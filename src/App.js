import React, { useEffect, useState } from "react";

import "./App.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import project from "./Data/data";

import NavBarTop from "./Components/NavBarTop";
import SectionUn from "./Components/SectionUn";
import SectionDeux from "./Components/SectionDeux";
import SectionTrois from "./Components/SectionTrois";
import SectionQuatre from "./Components/SectionQuatre";
import Footer from "./Components/Footer";

const App = () => {
  const [reactProjects, setReactProjects] = useState([]);
  const [nodeProjects, setNodeProjects] = useState([]);
  const [mernStackProjects, setMernStackProjects] = useState([]);
  const [othersProjects, setOthersProjects] = useState([]);

  useEffect(() => {
    // Données depuis le fichier data :
    setReactProjects(project.react);
    setNodeProjects(project.nodejs);
    setMernStackProjects(project.mernStack);
    setOthersProjects(project.others);
  }, []);

  return (
    <div className="App container-fluid p-0 m-0">
      <Router>
        <NavBarTop />
        <main>
          <Switch>
            <Route exact path="/" component={SectionUn} />
            <Route
              path="/projects/"
              render={() => (
                <SectionDeux
                  reactProjects={reactProjects}
                  nodeProjects={nodeProjects}
                  mernStackProjects={mernStackProjects}
                  othersProjects={othersProjects}
                />
              )}
            />

            <Route path="/a-propos" component={SectionTrois} />

            <Route path="/contact" component={SectionQuatre} />
          </Switch>
        </main>

        <footer>
          <Footer />
        </footer>
      </Router>
    </div>
  );
};

export default App;
