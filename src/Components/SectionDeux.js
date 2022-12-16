import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import ProjectCard from "./ProjectCard";

const SectionDeux = ({
  reactProjects,
  nodeProjects,
  mernStackProjects,
  othersProjects,
  vanillaJs,
}) => {
  const [langageChoosen, setLangageChoosen] = useState("");
  let location = useLocation();

  const changeBackground = () => {
    const bodyElt = document.querySelector("body");
    bodyElt.style.backgroundColor = "#FFFFFF";
  };

  const setContent = () => {
    let split = location.pathname.split("/");
    setLangageChoosen(split[2]);
  };

  useEffect(() => {
    changeBackground();
    setContent();
  });

  const displayContent = () => {
    if (!!langageChoosen) {
      if (langageChoosen === "react") {
        return <ProjectCard data={reactProjects} title="React" />;
      } else if (langageChoosen === "vanillaJS") {
        return <ProjectCard data={vanillaJs} title="Vanilla Javascript" />;
      } else if (langageChoosen === "nodejs") {
        return <ProjectCard data={nodeProjects} title="Node.js" />;
      } else if (langageChoosen === "mern") {
        return <ProjectCard data={mernStackProjects} title="MERN Stack" />;
      } else if (langageChoosen === "others") {
        return <ProjectCard data={othersProjects} title="Autres technos" />;
      }
    }
  };

  return (
    !!langageChoosen && (
      <section id="section-2">
        <div className="section-2">
          <h2> Portfolio </h2>
          <span className="ligne"></span>
          {displayContent()}
        </div>
      </section>
    )
  );
};

export default SectionDeux;
