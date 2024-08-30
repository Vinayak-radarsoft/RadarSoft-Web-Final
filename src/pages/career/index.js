import Image from "next/image";
import careerBanner from "../../../public/assets/img/career-banner.png";

const Career = () => {
  return (
    <>
      {/* Career title section */}
      <section className="career-banner">
        <div className="container">
          <div className="career-banner-title">
            <div className="commom-heading">
              <h2>Join us if you want to grow in professional life</h2>
              <p>
                Sed et orci volutpat, pharetra nunc eu, ultrices urna. Etiam sed
                sapien vitae ipsum Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat. Duis aute irure dolor in reprehenderit in voluptate
                velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
                sint occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Career banner section */}
      <section className="py-4">
        <div className="w-100 h-100 career_img">
          <Image
            className="w-100 d-lg-block"
            src={careerBanner}
            alt="Career Banner"
          />
        </div>
      </section>

      {/* Careers section */}
      <section className="career-job-area col-md-12">
        <div className="container">
          <div className="row">
            <div className="commom-heading">
              <h2>Search jobs at RadarSoft Technologies </h2>
            </div>
            <div className="input-group career-job-input mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Search jobs according to your expertise"
                aria-label="Search Jobs"
                aria-describedby="button-addon2"
              />
              <button
                className="btn btn-outline-secondary"
                type="button"
                id="button-addon2"
              >
                Search
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Careers job list section */}
      <section className="career-job-list-area col-md-12">
        <div className="container">
          <div className="row">
            <p className="career-job-list-title">10 jobs found</p>
            <div className="container">
              <div className="row row-cols-1 row-cols-sm-1 row-cols-lg-3 g-5 g-lg-3">
                {[...Array(6)].map((_, index) => (
                  <div
                    className="col"
                    key={index}
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  >
                    <div className="card-body">
                      <p className="text-uppercase loc mb-2">Pune, India</p>
                      <h4 className="card-title mb-4">Web developer</h4>
                      <p className="mb-3">
                        <strong>Skills Required -</strong> HTML, CSS, JS,
                        Collaborate with design teams to translate wireframes
                        and mockups into functional web pages.
                      </p>
                      <p className="mb-4">
                        <strong>Experience Required -</strong> 2+ years, can
                        include freelance work.
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Job details modal */}
              <div
                className="modal fade"
                id="exampleModal"
                tabIndex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h1 className="modal-title fs-5" id="exampleModalLabel">
                        <span className="me-2">
                          <a href="#">
                            <i className="fa-solid fa-arrow-left"></i>
                          </a>
                        </span>
                        Web developer
                      </h1>
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div className="modal-body">
                      <div className="row row-cols-2 row-cols-lg-3 g-lg-5">
                        <div className="col set-text">
                          <p>
                            <i className="fas fa-map-marker-alt"></i> Pune,
                            India
                          </p>
                        </div>
                        <div className="col set-text">
                          <p>
                            <i className="fas fa-clock"></i> 10AM - 7PM
                          </p>
                        </div>
                        <div className="col set-text">
                          <p>
                            <i className="fas fa-briefcase"></i> Full-Time
                          </p>
                        </div>
                      </div>
                      <div className="job-body commom-heading">
                        <h2>
                          <strong>Job Description</strong>
                        </h2>
                        <div className="job-details">
                          <p>
                            <strong>Skill required:</strong> Trust & Safety -
                            Anti-Money Laundering (AML)
                          </p>
                          <p>
                            <strong>Designation:</strong> Business Advisory New
                            Associate
                          </p>
                          <p>
                            <strong>Qualifications:</strong> Any Graduation
                          </p>
                          <p>
                            <strong>Years of Experience:</strong> 0 to 1 years
                          </p>
                        </div>
                        <p>
                          We are seeking a skilled and experienced Web developer
                          proficient in WordPress and Shopify to join our team.
                          As a Web developer, you will be responsible for
                          developing, customizing, and maintaining websites on
                          both platforms to meet our clients' needs and
                          specifications. The ideal candidate will have a strong
                          background in front-end and back-end development, with
                          expertise in WordPress and Shopify development.
                        </p>
                        <div>
                          <div className="mb-1">
                            <h2>
                              <strong>Qualifications</strong>
                            </h2>
                          </div>
                          <div className="accordion" id="accordionExample">
                            <div className="accordion-item">
                              <h2 className="accordion-header" id="headingOne">
                                <button
                                  className="accordion-button"
                                  type="button"
                                  data-bs-toggle="collapse"
                                  data-bs-target="#collapseOne"
                                  aria-expanded="true"
                                  aria-controls="collapseOne"
                                >
                                  <strong>Qualification Details</strong>
                                </button>
                              </h2>
                              <div
                                id="collapseOne"
                                className="accordion-collapse collapse show"
                                aria-labelledby="headingOne"
                                data-bs-parent="#accordionExample"
                              >
                                <div className="accordion-body">
                                  <p>
                                    <strong>Technical Skills</strong>
                                  </p>
                                  <ul className="list-style">
                                    <li>
                                      Experience with e-commerce integrations
                                      and payment gateways.
                                    </li>
                                    <li>Knowledge of SEO best practices.</li>
                                    <li>
                                      Familiarity with graphic design tools like
                                      Adobe Photoshop or Illustrator.
                                    </li>
                                    <li>
                                      Experience with RESTful APIs and AJAX.
                                    </li>
                                    <li>
                                      Understanding of cross-browser
                                      compatibility issues and solutions.
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="modal-footer">
                      <button
                        type="button"
                        className="co-button"
                        data-bs-dismiss="modal"
                      >
                        Apply now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="modal fade"
              id="exampleModal"
              tabindex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h1 className="modal-title fs-5" id="exampleModalLabel">
                      <span className="me-2">
                        <a href="">
                          <i className="fa-solid fa-arrow-left"></i>
                        </a>
                      </span>
                      Web developer
                    </h1>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div className="modal-body">
                    <div className="contact-form">
                      <form action="#" method="post">
                        <div className="form-group">
                          <label for="name">Name</label>
                          <input
                            type="text"
                            className="form-control"
                            id="name"
                            name="name"
                            placeholder="Name*"
                            required
                          />
                        </div>
                        <div className="form-group">
                          <label for="email">Email address</label>
                          <input
                            type="email"
                            className="form-control"
                            id="email"
                            name="email"
                            placeholder="Email address*"
                            required
                          />
                        </div>
                        <div className="form-group">
                          <label for="phone">Phone number</label>
                          <input
                            type="text"
                            className="form-control"
                            id="phone"
                            name="phone"
                            placeholder="Phone*"
                            required
                          />
                        </div>
                        <div className="form-group">
                          <label for="phone">Current ctc</label>
                          <input
                            type="text"
                            className="form-control"
                            id="phone"
                            name="phone"
                            placeholder="current ctc*"
                            required
                          />
                        </div>
                        <div className="form-group">
                          <label for="phone">Expected ctc</label>
                          <input
                            type="text"
                            className="form-control"
                            id="phone"
                            name="phone"
                            placeholder="Expected ctc*"
                            required
                          />
                        </div>
                        <div className="form-group">
                          <label for="phone">Upload resume</label>
                          <br />
                          <div
                            className="upload-area"
                            onclick="document.getElementById('resumeUpload').click();"
                          >
                            <i className="fa-solid fa-cloud-arrow-up"></i>
                            <p>
                              Drag your file(s) or <span>browse</span>
                            </p>
                            <p>Max 5MB file allowed</p>
                            <input
                              type="file"
                              id="resumeUpload"
                              name="resumeUpload"
                            />
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="co-button"
                      data-bs-dismiss="modal"
                    >
                      Apply now
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="career-btn">
              <a href="#">
                NEXT&nbsp;&nbsp;
                <span>
                  <i className="fa-solid fa-arrow-right-long"></i>
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Career;
