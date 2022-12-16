import React, { useEffect, useState } from "react";

import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

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
  const [vanillaJs, setVanillaJs] = useState([]);

  useEffect(() => {
    // Données depuis le fichier data :
    setReactProjects(project.react);
    setNodeProjects(project.nodejs);
    setMernStackProjects(project.mernStack);
    setOthersProjects(project.others);
    setVanillaJs(project.vanillaJS);
  }, []);

  return (
    <div className="App container-fluid p-0 m-0">
      <Router>
        <NavBarTop />
        <main>
          <Routes>
            <Route exact path="/" element={<SectionUn />} />
            <Route
              path="/projects/:langage"
              element={
                <SectionDeux
                  reactProjects={reactProjects}
                  nodeProjects={nodeProjects}
                  mernStackProjects={mernStackProjects}
                  othersProjects={othersProjects}
                  vanillaJs={vanillaJs}
                />
              }
            />

            <Route path="/a-propos" element={<SectionTrois />} />

            <Route path="/contact" element={<SectionQuatre />} />
          </Routes>
        </main>

        <footer>
          <Footer />
        </footer>
      </Router>
    </div>
  );
};

export default App;
