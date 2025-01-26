
import fbicon from './assets/image/fb1.jpg';

function Footer(){
    return(
        <>
            <section id="contac" className=" hey  text-light bg-secondary">
            <div className="container  text-light">
                <div  className=" info-company">
                    <p className="t fs-3">Company</p>
                </div>
                <div className="footer-body">
                    Francisco Interior design specializes in timeless spaces through providing bespoke
                    interior solutions
                </div>
                <div className="t fs-4 support">
                        Support
                </div>
                <div className="contact">
                    <a href="tel:+254758340259"  className="blue-lins">Phone: +254 758340259</a>
                    <a href="mailto:ochumafrancis@gmail.com" className="blue-lins">Email: ochumafrancis@gmail.com </a>
                </div>
                <div className="location">
                    <p className="t fs-4">Lacation</p>
                    Thika Town
                </div>
            </div>
            <div className="  container copyright">
                <div className="d-flex-col text-center  justify-content-center">
                    <div className="preimage-cont justify-content-center d-flex">
                        <div className="img-container justify-content-center d-flex ">
                           <a href="https://www.facebook.com/francis.ochuma">
                             <img src={fbicon} alt="facebook"/>
                             </a>
                        </div>
                    </div>
                   <p> &copy; Coppyright 2025</p>
                   <div className="d-flex justify-content-center"><p>Designed by : </p><a className='re-link' href="https://reinnh.github.io/myreactrepo/"> reigen</a></div>
                </div>
            </div>
          </section>
        </>
    )
}

export default Footer;