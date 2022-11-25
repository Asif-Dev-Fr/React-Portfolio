import React, {useEffect} from 'react';

const SectionQuatre = () => {

    useEffect(() => {
        const changeBackground = () => {
            const bodyElt = document.querySelector("body");
            bodyElt.style.backgroundColor = '#FFFFFF';
        }
        changeBackground()
    }, []);
   

    return(
        <section id="section-4">
            <div className="section-4">
                <h2>Contactez-moi</h2>
                <div className='links'>
                    <div className="linkedin">
                        <i className="fab fa-linkedin"></i> 
                        &nbsp; LinkedIn : 
                        <a href='https://www.linkedin.com/in/asif-kassam-ali/' target="_blank" rel="noopener noreferrer"> Kassam Ali Asif </a>
                    </div>
                    <div className="github">
                        <i className="fab fa-github-square"></i>
                        &nbsp; Github : 
                        <a href='https://github.com/Asif-Dev-Fr' target="_blank" rel="noopener noreferrer"> Asif-Dev-Fr </a>
                    </div>
                    <div className="mail">
                        <i className="fas fa-envelope"></i>
                        &nbsp; Email : 
                        <a href='asif.k.dev@gmail.com' target="_blank" rel="noopener noreferrer"> Envoyez un email </a>
                    </div>
                </div>
            </div> 
        </section>
    )
} 

export default SectionQuatre;