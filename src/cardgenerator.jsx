import React from 'react';
import painting from './assets/image/IMG-20241017-WA0031.jpg';
import wallpaint from './assets/image/IMG-20241017-WA0027.jpg';
import painting1 from './assets/image/IMG-20241017-WA0028.jpg';
import exteriorpaint from './assets/image/IMG-20241017-WA0026.jpg';
import wall1 from './assets/image/new-wall1.jpg';
import wall2 from './assets/image/newwall4.jpg';
import wall3 from './assets/image/newwall3.jpg';


const cards = [
    {
        image: painting,
        imText: 'Painting & Interior Finishing'
    },
    {
        image: wallpaint,
        imText: 'Wall Finishing'
    },
    {
        image: painting1,
        imText: 'Painting & Gypsum Fitting'
    },
    {
        image: exteriorpaint,
        imText: 'Exterior Design & Gypsum Ceiling'
    },
    {
        image: wall1,
        imText: 'Exterior Design & Gypsum Ceiling in progress'
    },
    {
        image: wall2,
        imText: 'Exterior Finishing using Rough N Tough'
    },
    {
        image: wall3,
        imText: 'Overall wall Finishing'
    }
];

const CardGenerator = () => {
    return (
        < >
            {cards.map((card, index) => (
                <div key={index} className="col-md-6 col-lg-3">
                    <div className="card bg-light">
                        <div className="text-center">
                            <img src={card.image} className="mb-3" alt="" />
                            <p className="t h5 text-secondary ">{card.imText}</p>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
};

export default CardGenerator;
