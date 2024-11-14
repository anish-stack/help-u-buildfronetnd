import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "./helpubuil-web-logo.webp";
import "./header.css";
const Header = () => {
  const [sessionData, setSessionData] = useState({
    isAuthenticated: false
  })
  const [scrollValue, setScrollValue] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => {
    setIsOpen(!isOpen);
  };
  const handleLinkClick = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrollValue(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  useEffect(() => {
    const isAuthenticatedValue = sessionStorage.getItem('islogin')
    // sessionStorage.removeItem('user')


    
    // sessionStorage.clear()

    console.log(isAuthenticatedValue)
    if (!isAuthenticatedValue) {
      setSessionData.isAuthenticated = false
    } else {
      setSessionData.isAuthenticated = true

    }
  }, [])

  const location = useLocation();
  const [active, setActive] = useState(location.pathname);

  useEffect(() => {
    setActive(location.pathname);
  }, [location]);

  return (
    <div>
      <section
        className={`as_header_wrapper ${scrollValue > 200 ? "fixed-header" : ""}`}
      >
        {/* <div className="as_info_detail">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-6">
                <ul>
                  <li>
                    <a href="javascript:;">
                      <div className="as_infobox">+91 8826465693</div>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:;">
                      <div className="as_infobox">
                        info@helpubuild.co.in
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-6">
                <div className="as_right_info">
                  <div className="as_user">
                    <a href="#!">
                      <i class="fa-brands fa-facebook fab"></i>
                    </a>
                  </div>
                  <div className="as_user">
                    <a href="#!">
                      <i class="fa-brands fa-linkedin lin"></i>
                    </a>
                  </div>
                  <div className="as_user">
                    <a href="#!">
                      <i class="fa-brands fa-instagram ins"></i>
                    </a>
                  </div>
                  <div className="as_user">
                    <a href="#!">
                      <i class="fa-brands fa-youtube tub"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
        <div className="container-fluid">
          <div className="row py-2">
            <div className="col-lg-4 col-md-4 col-sm-4 col-xs-6 forlogoresponsive">
              <div className="as_logo d-none d-md-block">
                <Link onClick={handleLinkClick} to={"/"}>
                  <img src={logo} className="img-responsive ws sm-screen-logo" alt="" />
                </Link>
              </div>
            </div>
            <div className="col-lg-8 col-md-8 col-sm-8 col-xs-6">
              <div className="as_right_info">
                <div
                  className={`as_menu_wrapper  ${isOpen ? "menu_open" : ""} `}
                >
                  <div className="showsmall">
                    <div className="as_logo">
                      <Link onClick={handleLinkClick} to={"/"}>
                        <img src={logo} className="img-responsive ws" alt="" />
                      </Link>
                    </div>
                    <div>
                      <span onClick={handleOpen} className="as_toggle">
                        <img src="assets/images/svg/menu.svg" alt="" />
                      </span>
                    </div>
                  </div>

                  <div className="as_menu">
                    <ul>
                      <li>
                        <Link onClick={handleLinkClick} to="/" className={active === "/" ? "active" : ""}>
                          home
                        </Link>
                      </li>
                      <li>
                        <Link onClick={handleLinkClick}
                          to="/Architecture"
                          className={active === "/Architecture" ? "active" : ""}
                        >
                          Talk to Architecture
                        </Link>
                      </li>
                      <li>
                        <Link onClick={handleLinkClick} to="/talk-to-interior" className={active === "/talk-to-interior" ? "active" : ""}>
                          Talk to Interior
                        </Link>
                      </li>
                      <li>
                        <Link onClick={handleLinkClick} to="/Vastu" className={active === "/Vastu" ? "active" : ""}>
                          Talk to  Vastu
                        </Link>
                      </li>
                      {/* <li>
                        <Link onClick={handleLinkClick}
                          to="/Construction-mall"
                          className={active === "/Construction-mall" ? "active" : ""}
                        >
                          Construction Mall
                        </Link>
                      </li> */}
                      <li>
                        <Link onClick={handleLinkClick} to="/blog" className={active === "/blog" ? "active" : ""}>
                          blog
                        </Link>
                      </li>
                      {/* <li>
                        <Link onClick={handleLinkClick} to="/Contact" className={active === "/Contact" ? "active" : ""}>
                          contact
                        </Link>
                      </li> */}
                      <li>
                        {
                          sessionData?.isAuthenticated ? (
                            <Link onClick={handleLinkClick}
                              className={`as_btn ${active === "/Profile" ? "active" : ""}`}
                              to="/Profile"
                            >
                              Profile
                            </Link>
                          ) : (
                            <Link onClick={handleLinkClick}
                              className={`as_btn ${active === "/Login" ? "active" : ""}`}
                              to="/login"
                            >
                              Login
                            </Link>
                          )
                        }

                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Header;
