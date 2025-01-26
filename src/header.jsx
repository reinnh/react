import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return(
        <>
            <section>

            </section>
            <section className="tnav  " id="home">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container-fluid d-lg-flex justify-content-between ">
                        <a href="#" className="navbar-brand">
                            <span className="text-warning t fw-bold fs-4 m-3">
                                FRANCISCO 
                            </span>
                                <span className="text-primary t fs-4">
                                     IteriorDesign
                                 </span>
                        </a>
                        <button 
                            type="button" 
                            className="navbar-toggler rem-decorarion  sm-none" 
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarNav"
                            aria-controls="navbarNav"
                            aria-expanded="false"
                            arial-label="Toggle navigation"
                         >
                            <span 
                                className=" navbar-toggler-icon"    
                            ></span>
                        </button>
                        <div className="collapse navbar-collapse d-lg-flex " id="navbarNav">
                            <ul className="d-lg-flex t w-100 justify-content-end gap-4 fw-bold text-primary ">
                                <div>
                                    <Link className="nav-link" to="/react"><div className="nav-item">Home</div></Link>
                                </div>
                                <div>
                                    <Link className="nav-link" to="/team"><div className="nav-item">Team</div></Link>
                                </div>
                                <div>
                                    <a className="nav-link" href="#services"><div className="nav-item">Services</div></a>
                                </div>
                                <div>
                                    <a className="nav-link" href="#projects"><div className="nav-item">Projects</div></a>
                                </div>
                                <div>
                                    <Link className="nav-link" to="/blog"><div className="nav-item">Blog</div></Link>
                                </div>
                                
                                <div>
                                    <a className="nav-link" href="#contact-us"><div className="nav-item">Contact us</div></a>
                                </div>
                               

                            </ul>
                        </div>
                    </div>
                </nav>
                
            </section>
            <div className="container-fluid nav-section border-0 sm-display">
            <nav className="navbar navbar-light">
                <div className="navbar-nav flex-column">
                    <Link to="/react" className="nav-item nav-link active"><span className="fas fa-home"></span> Home</Link>
                    <a href="#services" className="nav-item nav-link"><span className="fab fa-servicestack"></span> Service</a>
                    <a href="#project" className="nav-item nav-link"><span className="fas fa-tasks"></span> Projects</a>
                    <a href="#contact-us" className="nav-item nav-link"><span className="fas fa-address-book"></span> Contact</a>
                    <Link to="/blog" className="nav-item nav-link"><span className="fas fa-blog"></span> Blog</Link>
                </div>
            </nav>
          </div>
        </>
    )
}

export default Header;