import React from "react";
import CardGenerator from './cardgenerator';




 function Portfoilio(){
    return(
        <>
            <section id="projects" className="container mb-4">
            <div className="container t text-secondary fs-3 mb-2 ">Projects</div>
            <div className="row  g-4  js-card-project">
                <CardGenerator/>
            </div>
          </section>
        </>
    )
 }

 export default Portfoilio;