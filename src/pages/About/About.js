import { useEffect, useState } from "react";
import { useLocation, useParams, Link } from "react-router-dom";
import BreadCrumbs from "../../components/BreadCrumbs";
import image from '../../components/what-we-do.webp';
import './about.css'

const About = () => {
    const [show, setShow] = useState(false);
    const location = useLocation();
    useEffect(() => {
        if (location.pathname === "/about") {
            setShow(true);
        }
    }, [location]);
    return (
        <div>
            {show ? (
                <BreadCrumbs path={"About-us"} title={"About-us"} />
            ) : null}
            <section class="as_about_wrapper for-main-padding">
                <div style={{width:"90%",margin:"0 auto"}}>
                    <div class="row">
                        {/* <div class="col-lg-12 col-md-12 text-center">
                            <h1 class="as_heading">Discover <span className="about_color">Help U Build</span></h1>
                            <p class="as_font14 as_padderTop20 as_padderBottom50"></p>
                        </div> */}
                        <div class="col-lg-6 col-md-6">
                            <div class="as_aboutimg text-right ">
                                <img src={image} alt="" class="img-responsive" />
                                {/* <span class="as_play"><img src="assets/images/play.png" alt="" /></span> */}
                            </div>
                        </div>
                        <div class="col-lg-6 col-md-6">
                            <div class="as_about_detail mt-5 pt-4">
                            <h2 class="as_heading">Discover <span className="about_color">Help U Build</span></h2>
                                <h2 class="as_heading">What Do We Do?</h2>
                                <div class="as_paragraph_wrapper">
                                    <p class="as_margin0 as_font14 as_padderBottom10">
                                    HUB is an AI-based integrated online marketplace providing a one-stop solution for the construction sector.
                                    </p>
                                    <p class="as_font14">
                                    We connect consumers with professional Architects, Interior Designers, and Vastu Experts for personalized construction-related services and consultations. Additionally, we facilitate connections between B2B and B2C retailers and distributors in the construction materials sector, including raw materials, hardware, and electrical components.
                                    </p>
                                </div>



                                <Link to="/about?read-more=true" class="as_btn mt-5">read more</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default About
