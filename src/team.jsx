import React from 'react';
import './assets/css/custom.css';
import './assets/css/custome.css';
import './assets/css/font-awesome.min.css';
import francis from './assets/image/fencT.jpg';
import regun from './assets/image/rr2.jpg';
import john from './assets/image/john.jpg';
import reinhard from './assets/image/colme.png';


const TeamSection = () => {
  const teamMembers = [
    {
      name: 'Francis Onyango',
      role: 'Lead Designer, Interior Exteror Enginner',
      image: francis,
      socials: {
        linkedin: 'https://linkedin.com/in/janesmith',
        twitter: 'https://twitter.com/janesmith',
        instagram: 'https://instagram.com/janesmith',
      },
    },
    {
      name: 'Regun Onyango',
      role: 'Chief Consaultant, Interior & Exterior Desiner',
      image: regun,
      socials: {
        linkedin: 'https://linkedin.com/in/johndoe',
        twitter: 'https://twitter.com/johndoe',
        instagram: 'https://instagram.com/johndoe',
      },
    },
    {
      name: 'John Onyango',
      role: 'Project Manager, Interior & Exterior, Electrical Enginner',
      image: john,
      socials: {
        linkedin: 'https://linkedin.com/in/sarahbrown',
        twitter: 'https://twitter.com/sarahbrown',
        instagram: 'https://instagram.com/sarahbrown',
      },
    },
    {
      name: 'Reinhard Bonke',
      role: 'Junior Designers Electrical Enginner, Web Designer',
      image: reinhard,
      socials: {
        linkedin: 'https://linkedin.com/in/sarahbrown',
        twitter: 'https://twitter.com/sarahbrown',
        instagram: 'https://instagram.com/sarahbrown',
      },
    }
  ];

  return(
    <div className="sub_page">

  <section className="team_section ">
    <div className="container-fluid">
      <div className="heading_container heading_center">
        <div className="t">
          Our <span> Team</span>
          <p className='re-arial'>
          Where Innovation Meets Excellence
          </p>
          <p className='re-arial '> With passion, creativity, and professionalism, we’re the team transforming ideas into extraordinary realities.</p>
        </div>
      </div>

      <div className="team_container">
        <div className="row">
          
         {
            teamMembers.map((member,index)=>(

                <div className="col-lg-3 col-sm-6" key={index}>
                    <div className="box ">
                    <div className="img-box">
                        <img src={member.image} className="img1 " alt=""/>
                    </div>
                    <div className="detail-box">
                        <h5 >
                            {member.name}
                        </h5>
                        <p>
                             {member.role}
                        </p>
                    </div>
                    <div className="social_box">
                        <a href="#">
                        <i className="fab fa-facebook" aria-hidden="true"></i>
                        </a>
                        <a href="#">
                        <i className="fab fa-twitter" aria-hidden="true"></i>
                        </a>
                        <a href="#">
                        <i className="fab fa-linkedin" aria-hidden="true"></i>
                        </a>
                        <a href="#">
                        <i className="fab fa-instagram" aria-hidden="true"></i>
                        </a>
                        <a href="#">
                        <i className="fab fa-youtube-play" aria-hidden="true"></i>
                        </a>
                    </div>
                    </div>
              </div>
            ))
         }
         
        
        </div>
      </div>
    </div>
  </section>


  <section className="info_section layout_padding2">
    <div className="container">
      <div className="row">
        <div className="col-md-6 col-lg-3  info_col">
          <div className="info_contact">
            <h4 className='t'>
              Address
            </h4>
            <div className="contact_link_box">
              <a href="">
                <i className="fas fa-map-marker" aria-hidden="true"></i>
                <span>
                  Location
                </span>
              </a>
              <a href="">
                <i className="fas fa-phone" aria-hidden="true"></i>
                <span>
                  Call (+254) 758340259
                </span>
              </a>
              <a href="">
                <i className="fas fa-envelope" aria-hidden="true"></i>
                <span>
                  ochumafrancis@gmail.com
                </span>
              </a>
            </div>
          </div>
          <div className="info_social">
            <a href="">
              <i className="fab fa-facebook" aria-hidden="true"></i>
            </a>
            <a href="">
              <i className="fab fa-twitter" aria-hidden="true"></i>
            </a>
            <a href="">
              <i className="fab fa-linkedin" aria-hidden="true"></i>
            </a>
            <a href="">
              <i className="fab fa-instagram" aria-hidden="true"></i>
            </a>
          </div>
        </div>
        <div className="col-md-6 col-lg- ">
          <div className="info_detail">
            <h4 className='t'>
              Meet Our Team
            </h4>
            <p>
              Fransisco Interior and Exterior Designers, 
              our expert team is dedicated to delivering exceptional results.
               With a diverse range of skills and extensive experience, 
               we bring your vision to life.
              <p className='t mb-0'> Interior Design </p>
                <p>  Our team excels in transforming indoor spaces, ensuring each design reflects the clients personality and lifestyle. </p>

              <p className='t mb-0'>Exterior Design </p>
              <p> Specializing in creating beautiful and functional outdoor environments, our experts enhance the aesthetic appeal and value of properties.</p>

              <p className='t mb-0'>Painting </p>
              <p> Known for precision and commitment to quality, our painting services cover both residential and commercial projects.</p>

              <p className='t mb-0'>Gypsum Installation</p>
               <p>We offer elegant and durable gypsum solutions, showcasing craftsmanship in every detail.</p>

             <p className='t mb-0'> Electrical Installation </p>
              <p> Our skilled technicians provide reliable and safe electrical installations, ensuring all projects meet the highest standards.</p>

             <p className='t mb-0'>Consultation </p>
             <p> Services We offer professional consultation services to guide clients through every step of their project, from concept to completion.</p>

              <p className='t mb-0'> Project Management </p>
              <p> Our dedicated project managers ensure smooth coordination and client satisfaction with exceptional organizational skills.</p>
            </p>
          </div>
        </div>
        <div className="col-md-6 col-lg-3 info_col ">
          <h4>
            Subscribe
          </h4>
          <form action="https://formspree.io/f/xjkvkadw" method="post">
            <input name="subscription" type="text" placeholder="Enter email" />
            <button type="submit">
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>


</div>
  )

};

export default TeamSection;
