import React, { useEffect } from 'react'; 
import { Route } from "react-router-dom";

const SectionDeux = ({reactProjects, nodeProjects, mernStackProjects, othersProjects}) => {

    useEffect(() => {
        const changeBackground = () => {
            const bodyElt = document.querySelector("body");
            bodyElt.style.backgroundColor = '#FFFFFF';
        }
        changeBackground()
    }, []);

    return(
        <section id="section-2">
            <div className="section-2">
                <h2> Portfolio </h2>
                <span className="ligne"></span>
                <Route path='/projects/react' render = {() => 
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
                }/>
                <Route path='/projects/nodejs' render = {() => 
                <div id="nodejs">
                    <h4>Node.js</h4>
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
                </div>
                }/>

                <Route path='/projects/mern' render = {() => 
                <div  id="mern">
                    <h4>MERN Stack</h4>
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
                </div>
                }/>

                <Route path='/projects/others' render = {() => 
                <div id="others">
                    <h4>Autres technos</h4>
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
                }/>              
                
            </div>
        </section>
    )
                
}

export default SectionDeux