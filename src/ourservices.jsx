import React from 'react';
import icon from './assets/image/14035684.png';
import ricon from './assets/image/5151994.png';
import gicon from './assets/image/gypsum.png';
import picon from './assets/image/3426740.png';

const projects = [
    {
        image: icon,
        title: 'Our Services',
        description: 'An interior design corporation in Kenya that specializes in creating timeless spaces through bespoke solutions'
    },
    {
        image: ricon,
        title: 'Residential Interior Design',
        description: 'We design highly functional and beautiful interior spaces that represent and match your company goals to boost brand image'
    },
    {
        image: gicon,
        title: 'Gypsum Ceilings',
        description: 'Gypsum ceiling design creates exquisite homes, fire-resistant and sound-isolated homes due to their easy to fit, decorate, and enhance aesthetic and artistic homes'
    },
    {
        image: picon,
        title: 'Painting & Special Effects',
        description: 'There are many ways to finish a wall; however, there are many paint effects that can be used depending on the project and techniques'
    }
];

const OurServices = () => {
    return (
        <>
            {projects.map((project, index) => (
                <div key={index} className="commercial-interior-design text-light">
                    <div className="image-text d-flex gap-2">
                        <div className="img-container">
                            <img src={project.image} alt="" />
                        </div>
                        <p className="fs-4 t">{project.title}</p>
                    </div>
                    <p>{project.description}</p>
                </div>
            ))}
        </>
    );
};

export default OurServices;
