import React from 'react'; 


const SectionDeux = ({reactProjects, nodeProjects, mernStackProjects, othersProjects}) => {
    return(
        <section id="section-2">
            <div className="section-2">
                <h2> Portfolio </h2>
                <span className="ligne"></span>

                <div id="react">
                    <h4>React</h4>
                    <div className="row center">
                    {
                        reactProjects.map(project =>(
                            <div className="card col-lg-4" key={project.id}>
                            <img src={
                                project.thumbnail.includes('https://') ? project.thumbnail
                                : process.env.PUBLIC_URL + '/img/' + project.thumbnail
                                }  className="card-img-top" alt={project.alt} />
                            <div className="card-body">
                                <h5 className="card-title">{project.title}</h5>
                                <p className="card-text">{project.description}</p>
                                <a href={project.link} className="btn button-projet" target="_blank" rel="noopener noreferrer">
                                    {
                                        project.thumbnail.includes('https://') ?
                                        'Accèder au code' :
                                        'Accèder au site'
                                    }
                                </a>
                            </div>
                        </div>
                        ))
                    }
                    </div>
                </div>
                <h4 id="nodejs">Node.js</h4>
                <div className="row center">
                {
                    nodeProjects.map(project =>(
                        <div className="card col-lg-4" key={project.id}>
                            <img src={
                                project.thumbnail.includes('https://') ? project.thumbnail
                                : process.env.PUBLIC_URL + '/img/' + project.thumbnail
                                }  className="card-img-top" alt={project.alt} />
                            <div className="card-body">
                                <h5 className="card-title">{project.title}</h5>
                                <p className="card-text">{project.description}</p>
                                <a href={project.link} className="btn button-projet" target="_blank" rel="noopener noreferrer">
                                    {
                                        project.thumbnail.includes('https://') ?
                                        'Accèder au code' :
                                        'Accèder au site'
                                    }
                                </a>
                            </div>
                        </div>
                    ))
                }
                </div>
                <h4 id="mern">MERN Stack</h4>
                <div className="row center">
                {
                    mernStackProjects.map(project =>(
                        <div className="card col-lg-4" key={project.id}>
                            <img src={
                                project.thumbnail.includes('https://') ? project.thumbnail
                                : process.env.PUBLIC_URL + '/img/' + project.thumbnail
                                }  className="card-img-top" alt={project.alt} />
                            <div className="card-body">
                                <h5 className="card-title">{project.title}</h5>
                                <p className="card-text">{project.description}</p>
                                <a href={project.link} className="btn button-projet" target="_blank" rel="noopener noreferrer">
                                    {
                                        project.thumbnail.includes('https://') ?
                                        'Accèder au code' :
                                        'Accèder au site'
                                    }
                                </a>
                            </div>
                        </div>
                    ))
                }
                </div>
                <h4 id="others">Autres technos</h4>
                <div className="row center">
                {
                    othersProjects.map(project =>(
                        <div className="card col-lg-4" key={project.id}>
                            <img src={
                                project.thumbnail.includes('https://') ? project.thumbnail
                                : process.env.PUBLIC_URL + '/img/' + project.thumbnail
                                }  className="card-img-top" alt={project.alt} />
                            <div className="card-body">
                                <h5 className="card-title">{project.title}</h5>
                                <p className="card-text">{project.description}</p>
                                <a href={project.link} className="btn button-projet" target="_blank" rel="noopener noreferrer">
                                    {
                                        project.thumbnail.includes('https://') ?
                                        'Accèder au code' :
                                        'Accèder au site'
                                    }
                                </a>
                            </div>
                        </div>
                    ))
                }
                </div>
                
                    
                
            </div>
        </section>
    )
                
}

export default SectionDeux