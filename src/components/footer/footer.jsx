import { Fragment } from "react";
import "./footer.scss";
import Logo from "../../static/logo-png.png";
import { Link, useLocation } from "react-router-dom";

const Footer = () => {
  const location = useLocation();
  return (
    <Fragment>
      <div className="footer-full">
        <div className="container-fluid footer-main">
          <div className="container-lg">
            <div className="row justify-content-between pt-5 pb-5 pr-5">
              <div className="col-5">
                <div className="left-column">
                  <img src={Logo} alt="logo" style={{ width: "25%" }} />
                  <div
                    style={{
                      marginTop: "20px",
                      color: "white",
                    }}
                  >
                    {/* <div className="company-name"> Opal Trading DMCC</div>
                    <div className="name">Sabi Aggarwal</div> */}
                    {/* <div className="designation">Operations Manager</div> */}
                    509, Preatoni Tower (Dubai Star) Cluster L, <br />
                    Jumeirah Lake Towers, Dubai, UAE. <br /> <br />
                    T. +971 4 4538831
                    <br />
                    info@opaltradingmcc.com
                  </div>
                </div>
              </div>
              <div className="col-5">
                {/* <div
                  style={{
                    color: "white",
                    fontSize: "18px",
                    fontWeight: "bold",
                    marginBottom: "15px",
                  }}
                >
                  Site Map
                </div> */}
                <div>
                  <ul className="nav justify-content-end">
                    <div className="footer-navbar-item">
                      <Link
                        className={
                          location.pathname === "/"
                            ? "nav-link-footer active-footer"
                            : "nav-link-footer"
                        }
                        to="/"
                      >
                        Home
                      </Link>
                    </div>
                    <div className="footer-navbar-item">
                      <Link
                        className={
                          location.pathname === "/contact-us"
                            ? "nav-link-footer active-footer"
                            : "nav-link-footer"
                        }
                        to="/contact-us"
                      >
                        Contact Us
                      </Link>
                    </div>
                    <div className="footer-navbar-item">
                      <Link
                        className={
                          location.pathname === "/about-us"
                            ? "nav-link-footer active-footer"
                            : "nav-link-footer"
                        }
                        to="/about-us"
                      >
                        About Us
                      </Link>
                    </div>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid footer-second">
          <div className="container-lg bottom-text">
            Copyright © 2023 Opal Trading DMCC. All rights reserved.
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Footer;
