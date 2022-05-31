import React from "react";
import "./package.css";

const Package = () => {
  return (
    <div>
      <div className="tab-content" id="myTabContent">
        <div
          className="tab-pane active"
          id="profile"
          role="tabpanel"
          aria-labelledby="profile-tab"
        >
              <h1 className="packageHead">Packages</h1>
        <p className="packagePara">At about this time of year, some months after
          New Year’s resolutions have been made and kept, or made and neglected.</p>
          <div className="tab-content" id="pills-tabContent">
            <div
              className="tab-pane show active"
              id="pills-home"
              role="tabpanel"
              aria-labelledby="pills-home-tab1"
            >
                
              <div className="row">
                <div className="col-md-4 col-sm-4 col-xs-12">
                  <div className="PriceBox" data-aos="fade-down">
                    <span>Basic Web</span>
                    <p></p>
                    <small>$299</small>
                    <h3>
                      <del>$747.5</del> 60% off!
                    </h3>
                    <ul data-aos="fade-down">
                      <li> 3 Pages Website</li>
                    
                      <li> Contact/Query Form</li>
                      <li> Complete W3C Certified HTML</li>
                      <li> Complete Deployment</li>
                      <li> Mobile Responsive Will Be Additional $150</li>
                      <li> 100% Satisfaction Guarantee</li>
                      <li> 100% Unique Design Guarantee</li>
                      <li> 100% Money Back Guarantee *</li>
                    </ul>
                    <div className="getstarted">
                      <a
                        href="javascript:;"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                        className="mybtn1"
                      >
                        {" "}
                        Get Started
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-sm-4 col-xs-12">
                  <div className="PriceBox" data-aos="fade-down">
                    <span>Beginner Web</span>
                    <p></p>
                    <small>$349</small>
                    <h3>
                      <del>$872.5</del> 60% off !
                    </h3>
                    <ul data-aos="fade-down">
                      <li>5 Pages Website</li>
                      <li>5 Stock Photos</li>
                      <li>3 Banner Design</li>
                      <li>FREE Google Friendly Sitemap</li>
                      <li>Complete W3C Certified HTML</li>
                      <li>Mobile Responsive Will Be Additional $150</li>
                      <li>100% Satisfaction Guarantee</li>
                      <li>100% Unique Design Guarantee</li>
                      <li>100% Money Back Guarantee *</li>
                    </ul>
                    <div className="getstarted">
                      <a
                        href="javascript:;"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                        className="mybtn1"
                      >
                        Get Started
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-sm-4 col-xs-12">
                  <div className="PriceBox" data-aos="fade-down">
                    <span>Expert Web</span>
                    <p></p>
                    <small>$549</small>
                    <h3>
                      <del>$1,372.5</del> 60% off !
                    </h3>
                    <ul data-aos="fade-down">
                      <li> 10 Unique Pages Website</li>
                      <li> CMS / Admin Panel Support</li>
                    
                      <li> FREE Google Friendly Sitemap</li>
                      <li> Mobile Responsive Will Be Additional $150</li>
                      <li> Complete Deployment</li>
                      <li> 100% Satisfaction Guarantee</li>
                      <li> 100% Unique Design Guarantee</li>
                      <li> 100% Money Back Guarantee *</li>
                    </ul>
                    <div className="getstarted">
                      <a
                        href="javascript:;"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                        className="mybtn1"
                      >
                        Get Started
                      </a>
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

export default Package;
