import image1 from './assets/image/IMG-20241017-WA0015.jpg';
import image2 from './assets/image/IMG-20241017-WA0014.jpg';
import image3 from './assets/image/IMG-20241017-WA0021.jpg';

function Heroes(){
    return(
        <>
             <section>
                <div className="carousel slide"
                        data-bs-ride="carousel"
                        id="carouselExample">
                    <div className="carousel-inner height-css">
                        <div className="carousel-item active">
                            <span className=" text-light vi d-flex flex-column gap-3 ">
                                <span className="t h1 t">End - to - End </span>
                                <span className="PP text-light h2">ELEVATE YOUR LIVING LIVING</span>
                                <span className="t ">
                                    <div className="container bg-light text-dark h3 p-2  text-center">MODERN UNIQUE LIVING</div>
                                </span>
                            </span>
                            
                            <img src={image1} alt="image" className=" scroll flex-shrink-0"/>
                        </div>
                        <div className="carousel-item">
                            <span className=" text-light vi d-flex flex-column gap-3 ">
                                <span className="t h1 t">Outstanding Designs </span>
                                <span className="PP text-light h2">AFFORDABLE ,BEATIFUL ,CUSTOM</span>
                                <span className="t ">
                                    <div className="container bg-light text-dark h3 p-2  text-center">INTERIORS FOR YOU</div>
                                </span>
                            </span>
                            <img src={image2}  alt="" className="scroll flex-shrink-0"/>
                        </div>
                        <div className="carousel-item">
                            <span className=" text-light vi d-flex flex-column gap-3 ">
                                <span className="t h1 T">CUSTOM DESIGNS </span>
                                <span className="PP text-light h2">AFFORDABLE ,BEATIFUL ,CUSTOM</span>
                                <span className="t ">
                                    <div className="container bg-light text-dark h3 p-2  text-center">STYLISH CUSTOM INTERIORS</div>
                                </span>
                            </span>
                            <img src={image3}  alt="" className="scroll flex-shrink-0"/>
                        </div>
                        <button type="button" className="carousel-control-prev"
                            data-bs-target="#carouselExample"
                            // eslint-disable-next-line react/no-unknown-property
                            dsta-bs-slide="next">
                            <span className="carousel-control-prev-icon" 
                                aria-hidden="true">
                            </span>
                            <span className="visually-hidden">next</span>
                        </button>
                    </div>
                   
                </div>
            </section>
        </>
    )
}

export default Heroes;