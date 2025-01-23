import React from "react";

const Contact = () => {
  return (
    <div id="contact-us">
      <div className="container-fluid">
        <div>
          <div className="row g-0">
            {/* Contact Header */}
            <div className="col-lg-3">
              <div className="contact-header h-100 bg-secondary pt-6 pe-6 pb-6">
                <div className="text-start d-flex flex-column justify-content-center wow fadeInUp" data-wow-delay="0.1s">
                  <p className="text-white sub-title">Contact Us</p>
                  <h1 className="display-6 text-white mb-0 t">Let’s Start A New Project</h1>
                </div>
              </div>
            </div>
            {/* Contact Content */}
            <div className="col-lg-9">
              <div className="contact-content h-100 pt-6 ps-6 pb-6">
                <div className="bg-light p-4">
                  <div className="row g-5">
                    {/* Contact Information */}
                    <div className="col-xl-5 wow fadeInUp" data-wow-delay="0.1s">
                      <p className="mb-4">Reach Us</p>
                      <div className="d-flex mb-4">
                        <div className="btn-xl-square bg-primary text-white me-3">
                          <i className="fas fa-map-marker-alt"></i>
                        </div>
                        <div>
                          <h4>Address</h4>
                          <p className="mb-0">Thika Kiambu Kenya</p>
                        </div>
                      </div>
                      <div className="d-flex mb-4">
                        <div className="btn-xl-square bg-primary text-white me-3">
                          <i className="fas fa-envelope"></i>
                        </div>
                        <div>
                          <h4>Mail Us</h4>
                          <p className="mb-0">
                            <a href="mailto:ochumafrancis@gmail.com">ochumafrancis@gmail.com</a>
                          </p>
                        </div>
                      </div>
                      <div className="d-flex">
                        <div className="btn-xl-square bg-primary text-white me-3">
                          <i className="fas fa-phone-alt"></i>
                        </div>
                        <div>
                          <h4>Telephone</h4>
                          <p className="mb-0">(+254) 758340259</p>
                        </div>
                      </div>
                    </div>
                    {/* Contact Form */}
                    <div className="col-xl-7 wow fadeInUp" data-wow-delay="0.3s">
                      <form action="https://formspree.io/f/xjkvkadw" method="POST">
                        <div className="row g-3">
                          {[
                            { name: "name", label: "Your Name", type: "text" },
                            { name: "email", label: "Your Email", type: "email" },
                            { name: "phone", label: "Your Phone", type: "phone" },
                            { name: "project", label: "Your Project", type: "text" },
                            { name: "subject", label: "Subject", type: "text" },
                          ].map((field, index) => (
                            <div className={`col-lg-12 col-xl-${field.name === "subject" ? "12" : "6"}`} key={index}>
                              <div className="form-floating">
                                <input
                                  name={field.name}
                                  type={field.type}
                                  className="form-control border-0"
                                  id={field.name}
                                  placeholder={field.label}
                                />
                                <label htmlFor={field.name}>{field.label}</label>
                              </div>
                            </div>
                          ))}
                          <div className="col-12">
                            <div className="form-floating">
                              <textarea
                                name="message"
                                className="form-control border-0"
                                placeholder="Leave a message here"
                                id="message"
                                style={{ height: "120px" }}
                              ></textarea>
                              <label htmlFor="message">Message</label>
                            </div>
                          </div>
                          <div className="col-12">
                            <button className="btn btn-primary w-100 py-3" type="submit">
                              Send Message
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
