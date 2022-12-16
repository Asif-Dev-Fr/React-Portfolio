import React, { useEffect } from "react";

const SectionTrois = () => {
  useEffect(() => {
    const changeBackground = () => {
      const bodyElt = document.querySelector("body");
      bodyElt.style.backgroundColor = "#18BC9C";
    };
    changeBackground();
  }, []);

  return (
    <section id="section-3">
      <div className="section-3">
        <h2> About me </h2>
        <span className="ligne"></span>
        <div className="text-section-3">
          <p>
            After studying languages and international trade, I worked in France
            and then went to Japan on a Working Holiday visa.
          </p>
          <p>
            After my working holiday, I did a professional retraining. I learned
            HTML, CSS and Javascript on my own, then went through a training
            center to learn PHP and Symfony.
          </p>
          <p>
            In 2019, during my internship, I also taught HTML, CSS and
            Javascript at Konexio so I chose to focus on the JS ecosystem.
          </p>
          <p>
            In 2020, I learned React and Node.js and coded several projects in
            these languages.
          </p>
          <p>
            Thanks to the different projects, I joined Fiters in January 2021 as
            a fullstack developer.
          </p>
          <p>
            Since April 2022, I have been working as a Front-end developer at
            Prioritis.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SectionTrois;
