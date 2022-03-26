import React, { useEffect } from "react";
import { Route } from "react-router-dom";
import ProjectCard from "./ProjectCard";

const SectionDeux = ({
  reactProjects,
  nodeProjects,
  mernStackProjects,
  othersProjects,
}) => {
  const changeBackground = () => {
    const bodyElt = document.querySelector("body");
    bodyElt.style.backgroundColor = "#FFFFFF";
  };

  useEffect(() => {
    changeBackground();
  }, []);

  return (
    <section id="section-2">
      <div className="section-2">
        <h2> Portfolio </h2>
        <span className="ligne"></span>
        <Route
          path="/projects/react"
          render={() => <ProjectCard data={reactProjects} title="React" />}
        />
        <Route
          path="/projects/nodejs"
          render={() => <ProjectCard data={nodeProjects} title="Node.js" />}
        />

        <Route
          path="/projects/mern"
          render={() => (
            <ProjectCard data={mernStackProjects} title="MERN Stack" />
          )}
        />

        <Route
          path="/projects/others"
          render={() => (
            <ProjectCard data={othersProjects} title="Autres technos" />
          )}
        />
      </div>
    </section>
  );
};

export default SectionDeux;
