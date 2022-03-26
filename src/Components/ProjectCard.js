import { useEffect, useState } from "react";

const ProjectCard = ({data, title}) => {
  const [card, setCard] = useState([]);
  useEffect(() => {
      setCard(data)
  }, [data])
  return (
    <div>
      <h4>{title}</h4>
      <div className="row center">
        {card.map((project) => (
          <div className="card col-lg-4" key={project.id}>
            <img
              src={
                project.thumbnail.includes("https://")
                  ? project.thumbnail
                  : process.env.PUBLIC_URL + "/img/" + project.thumbnail
              }
              className="card-img-top"
              alt={project.alt}
            />
            <div className="card-body">
              <h5 className="card-title">{project.title}</h5>
              <p className="card-text">{project.description}</p>
              <a
                href={project.link}
                className="btn button-projet"
                target="_blank"
                rel="noopener noreferrer"
              >
                {project.thumbnail.includes("https://")
                  ? "Accèder au code"
                  : "Accèder au site"}
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;
