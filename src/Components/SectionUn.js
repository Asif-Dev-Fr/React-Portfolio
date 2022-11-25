import React, { useEffect } from "react";

const SectionUn = () => {
  const changeBackground = () => {
    const bodyElt = document.querySelector("body");
    bodyElt.style.backgroundColor = "#18BC9C";
  };

  useEffect(() => {
    changeBackground();
  }, []);

  return (
    <section className="expand-lg" id="section-1">
      <div className="section-1">
        <img
          src="https://i.ibb.co/F0wMQTN/face-co.png"
          alt="avatar"
          id="avatar"
        />
        <h1> KASSAMALI Asif </h1>
        <span className="ligne"></span>
        <h2> Développeur Web </h2>
      </div>
    </section>
  );
};

export default SectionUn;
