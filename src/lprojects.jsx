import React from 'react';
import Limage1 from './assets/image/IMG-20241017-WA0018.jpg';
import Limage2 from './assets/image/IMG-20241017-WA0025.jpg';
import Limage3 from './assets/image/IMG-20241017-WA0023.jpg';
import Limage4 from './assets/image/IMG-20241017-WA0033.jpg';
import Limage5 from './assets/image/IMG-20241017-WA0022.jpg';
import Limage6 from './assets/image/IMG-20241017-WA0014.jpg';

const Lprojects = [
    {
        image: Limage1,
        imText: 'Gypsum Ceiling',
        id: 'lprojects1'
    },
    {
        image: Limage2,
        imText: 'External Wall Finish',
        id: 'lprojects2'
    },
    {
        image: Limage3,
        imText: 'Living Room',
        id: 'lprojects3'
    },
    {
        image: Limage4,
        imText: 'Kitchen',
        id: 'lprojects4'
    },
    {
        image: Limage5,
        imText: 'Dining',
        id: 'lprojects5'
    },
    {
        image: Limage6,
        imText: 'Gypsum & S-Effects',
        id: 'lprojects6'
    }
];

const LprojectRender = () => {
    return (
        <>
            {Lprojects.map((Litem, index) => (
                <div key={index} className="container mb-3  col-sm-6 col-md-4 col-lg-2">
                    <div className="item" id={Litem.id}>
                        <div className="card bg-body-secondary">
                            <img className="col-sm-12" src={Litem.image} alt="" />
                            <div className="h5">{Litem.imText}</div>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
};

export default LprojectRender;
