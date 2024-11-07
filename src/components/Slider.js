import React from "react";
import { Link } from "react-router-dom";
import image from './hero-banner.webp';
import './slider.css'
import chat from './chat.png';
import arc from './arc.png';
import vastu from './vastu.png';
import int from './int.webp';
import engineer from './engineer.png'
import interior from './interior-design.png'
import support from './support.png'
import mobilehero from './mobile-hero.webp'


const Slider = () => {
  return (
    <div className="container-fluid new_banner text-center">
      <div className="col-md-12 d-none d-sm-block">
        <img className="img-fluid" style={{ width: "90%", border: "0px solid #fff", borderRadius: "5px" }} src={image} alt="Banner" />
      </div>
      <div className="col-md-12 mobile-view">
        <img className="img-fluid" style={{ width: "90%", border: "0px solid #fff", borderRadius: "5px" }} src={mobilehero} alt="Mobile Banner" />
      </div>
      <div style={{ width: "90%" }} className="mx-auto my-4">
        <div className="row">
          {/* Navigation Cards */}
          <div className="col-md-3 col-6 px-2 mb-3">
            <Link to="/about" className="text-decoration-none">
              <div className="card bg-light border-light hover-effect">
                <div className="card-body forHeight text-center">
                  <img src={engineer} className="img-fluid icon_chat mb-2" alt="Chat Icon" />
                  <h5 className="card-title fs-6 text-dark" style={{ fontWeight: '600' }}>Chat with Architect</h5>
                  {/* <p className="card-text d-none d-md-block text-muted">Learn more about our mission and values.</p> */}
                </div>
              </div>
            </Link>
          </div>
          <div className="col-md-3 col-6 px-2 mb-3">
            <Link to="/services" className="text-decoration-none">
              <div className="card bg-light border-light hover-effect w-100">
                <div className="card-body forHeight text-center">
                  <img src={interior} className="img-fluid icon_chat mb-2" alt="Chat Icon" />
                  <h5 className="card-title fs-6 text-dark" style={{ fontWeight: '600' }}>Chat with Interior Designer</h5>
                  {/* <p className="card-text d-none d-md-block text-muted">Explore the services we offer to our clients.</p> */}
                </div>
              </div>
            </Link>
          </div>
          <div className="col-md-3 col-6 px-2 mb-3">
            <Link to="/contact" className="text-decoration-none">
              <div className="card bg-light border-light hover-effect">
                <div className="card-body forHeight text-center">
                  <img src={vastu} className="img-fluid icon_chat mb-2" alt="Chat Icon" />
                  <h5 className="card-title fs-6 text-dark" style={{ fontWeight: '600' }}>Chat with Vastu Expert</h5>
                  {/* <p className="card-text d-none d-md-block  text-muted">Get in touch with us for any inquiries.</p> */}
                </div>
              </div>
            </Link>
          </div>
          <div className="col-md-3 col-6 px-2 mb-3">
            <Link to="/contact" className="text-decoration-none">
              <div className="card bg-light border-light hover-effect">
                <div className="card-body forHeight text-center">
                  <img src={support} className="img-fluid icon_chat mb-2" alt="Chat Icon" />
                  <h5 className="card-title fs-6 text-dark" style={{ fontWeight: '600' }}>Support</h5>
                  {/* <p className="card-text d-none d-md-block  text-muted">Get in touch with us for any inquiries.</p> */}
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
