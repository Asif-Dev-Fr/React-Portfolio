import React from 'react'; 


const SectionDeux = ({reactProjects}) => {
    return(
        <section id="section-2">
            <div class="section-2">
                <h2> Portfolio </h2>
                <span class="ligne"></span>

                <div class="row center">
                {
                    reactProjects.map(project =>(
                        <div class="card col-lg-4">
                        <img src={"img/" + project.thumbnail}  class="card-img-top" alt={project.alt} />
                        <div class="card-body">
                            <h5 class="card-title">{project.title}</h5>
                            <p class="card-text">{project.description}</p>
                            <a href={project.link} class="btn button-projet" target="_blank">Accèdez au site</a>
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