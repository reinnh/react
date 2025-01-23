

import LprojectRender from './lprojects';

function Projects(){
    return(
        <>
        
          <section id="project" className="container mt-4 t text-secondary mb-3">
            <div className="container fs-4">Latest Projects</div>
                <div className="image-container-projects  row row-cols-sm-4 row-cols-2 mt-2 g-4  js-lproject">
                   <LprojectRender/> 
                </div>
          </section>
        </>
    )
}

export default Projects;