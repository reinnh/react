import React from "react";

import Portfoilio from "./portfolio";
import Footer from "./footer";
import himage from './assets/image/IMG-20241017-WA0015.jpg'

function Blog(){

    return(
        <>
        <div className="heros-section" style={
          {
            backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.6), transparent, rgba(0, 0, 0, 0.6)), url(${himage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '100vh',
          }

          
        }>

      <div
            style={{
              position: 'relative',
              width: '100%',
              height: '100vh',
              backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.6), transparent, rgba(0, 0, 0, 0.6)), url('/path-to-your-image.jpg')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            {/* Caption Text */}
            <div
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                color: 'white',
                textAlign: 'center',
                padding: '20px',
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                borderRadius: '10px',
              }}
            >
              <h1 style={{ fontSize: '2.5rem', marginBottom: '10px' }}>
                Where Vision Meets Craftsmanship
              </h1>
              <p style={{ fontSize: '1.2rem' }}>
                Transforming Spaces, Inspiring Lives
              </p>
            </div>
          </div>
          
        </div>


<section id="procedure-container  " className=" container-fluid">
            <div className="procedures  education-content h-100 pt-6 ps-6 pb-6 ">
            <div className="procedure-4 education-item rounded p-4 h-100 wow fadeInUp" data-wow-delay="0.5s">
                    <div className="d-flex align-items-center gap-2">
                        <p className="fs-3 text-secondary t"></p>
                        <p className="fs-4 text-secondary t">
                          
                        </p>
                    </div>
                    <p>
                    Welcome to our Interior and Exterior Design Portfolio. Here, you will find a 
                    showcase of our commitment to transforming spaces with cutting-edge technologies, modern
                    trends, and an unwavering dedication to customer satisfaction.
                    </p>
                </div>
                <div className="procedure-1 3 mb-3 education-item rounded p-4  h-100 wow fadeInUp" data-wow-delay="0.1s">
                    <div className="d-flex align-items-center gap-2">
                        <p className="fs-3 text-secondary t">01.</p>
                         <p className="fs-5 text-secondary  t">.Painting</p>
                    </div>
                       <p className="">  Breathe new life into your spaces with our expert painting services.
                     </p>
                </div>
                <div className="procedure-2 3 mb-3 education-item rounded p-4 h-100 wow fadeInUp" data-wow-delay="0.5s">
                   <div className="d-flex align-items-center gap-2">
                    <p className="fs-3 text-secondary t">02</p>
                    <p className="fs-4 text-secondary t">Gypsum Installation</p>
                   </div>
                    <p>Achieve sleek and durable designs with our premium gypsum solutions
                    </p>
                </div>
                <div className="procedure-3 mb-3 education-item rounded p-4 h-100 wow fadeInUp" data-wow-delay="0.5s">
                    <div className="d-flex align-items-center gap-2">
                        <p className="fs-3  t text-secondary ">03</p>
                     <p className="fs-4  t text-secondary">Electrical Installation</p>
                    </div>
                    Seamlessly integrate technology into your environment with our precise electrical services plus 
                    Illuminate your environment with innovative and energy-efficient lighting systems.
                </div>
                <div className="procedure-4 education-item rounded p-4 h-100 wow fadeInUp" data-wow-delay="0.5s">
                    <div className="d-flex align-items-center gap-2">
                        <p className="fs-3 text-secondary t">04</p>
                        <p className="fs-4 text-secondary t">Wall Matting</p>
                    </div>
                    <p>
                       Enhance your interiors with modern and stylish wall matting options
                    </p>
                </div>
               </div>
          </section>




          <Portfoilio/>
         <section id="blog" className="container mb-3 ">
            <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingOne">
                    <button className="accordion-button" 
                        type="button" 
                        data-bs-toggle="collapse" 
                        data-bs-target="#collapseOne" 
                        aria-expanded="true" 
                        aria-controls="collapseOne">
                        Design tips
                    </button>
                  </h2>
                  <div id="collapseOne" 
                        className="accordion-collapse collapse show" 
                        aria-labelledby="headingOne" 
                        data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                                <p className="t fs-5 text-secondary">5 Simple Interior Design Tips to Refresh Your Living Space</p>

                                <p className="t fs-5 text-secondary">Introduction:</p>
                               <p>
                                Are you looking to give your living space a quick makeover without 
                                a complete renovation? Here are five easy interior design tips 
                                that can instantly refresh your home, making it more
                                inviting and stylish. Whether you’re a DIY enthusiast or working with a 
                                designer, these ideas can be applied to any room.
                               </p>

                                <p className="t fs-5 text-secondary"> 1. Play with Color</p>
                               <p>
                                    One of the simplest ways to transform a room is through color. Consider
                                    repainting a wall in a bold accent color, or add pops of color
                                    with throw pillows, rugs, or artwork. If you prefer
                                    a more subtle approach, using neutral tones with hints of earthy colors 
                                    can make your space feel calm and cozy.
                               </p>

                               <p className="t fs-5 text-secondary"> 2. Use Mirrors to Create the Illusion of Space</p>
                               <p>
                                    Mirrors are great for making small rooms appear larger. Place a large mirror 
                                    on a wall opposite a window to reflect natural light, brightening up the space. 
                                    You can also use multiple smaller mirrors in decorative frames for a stylish touch.
                               </p>

                                <p className="t fs-5 text-secondary">3. Update Your Lighting</p>
                                <p>
                                    Lighting plays a crucial role in setting the mood of a room. Swap 
                                    out old fixtures for modern ones, or try adding floor lamps and
                                    table lamps to create layers of light. Consider using 
                                    warm-colored bulbs to make the space feel inviting.
                                </p>

                                <p className="t fs-5 text-secondary">4. Incorporate Natural Elements</p>
                                <p>
                                    Bringing the outdoors inside adds life to a room. Incorporate plants, 
                                    wooden furniture, or stone textures for a natural look. If you 
                                    don’t have a green thumb, opt for low-maintenance 
                                   indoor plants like succulents or faux greenery.
    
                                </p>
                               <p className="t fs-5 text-secondary"> 5. Rearrange Your Furniture</p>
                               <p>
                                Sometimes all it takes is a new layout to breathe life into a room. 
                                Experiment with different furniture arrangements to find the most
                                functional and aesthetically pleasing setup. Make 
                                sure there’s a good flow, and avoid cluttering the space.
                               </p>

                               <p className="t fs-5  text-secondary"> Conclusion:</p>
                               <p>
                                Refreshing your home’s interior doesn’t have to be expensive or 
                                time-consuming. With these simple tips, you can easily give your
                                space a fresh look and feel. Want more personalized
                                advice? Contact us for a consultation, and let’s bring your vision to life!

                               </p>
                            </div>
                    </div>
                    </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingTwo">
                    <button className="accordion-button collapsed" 
                        type="button" data-bs-toggle="collapse" 
                        data-bs-target="#collapseTwo" aria-expanded="false" 
                        aria-controls="collapseTwo">
                      What design services do you provide
                    </button>
                  </h2>
                  <div id="collapseTwo" className="accordion-collapse collapse" 
                    aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        We specialize in both interior and exterior design
                        including residential, commercial and landscape projects.
                        Services range from full-scale renovations to simple decor updates
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingThree">
                    <button className="accordion-button collapsed" 
                        type="button" data-bs-toggle="collapse" 
                        data-bs-target="#collapseThree" 
                        aria-expanded="false" 
                        aria-controls="collapseThree">
                        How can I contact you for consaultation
                    </button>
                  </h2>
                  <div id="collapseThree" className="accordion-collapse collapse" 
                    aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        You can reach us through the contact from the website  ,  
                        <a href="mailto:ochumafrancis@gmail.com" className="blue-lins">
                            Email: ochumafrancis@gmail.com </a> 
                            or call us at : <a href="tel:+254758340259"  className="blue-lins">Phone: +254 758340259</a>
                            We are also available in social media platforms like facebook and whatsapp
                    </div>
                  </div>
                </div>
              </div>
          </section>
          <Footer/>
        </>
    )
}

export default Blog;