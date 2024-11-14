import React from "react";
import { Link } from "react-router-dom";
import image from './interior-design-hero.webp';
import './interior.css'
import callsuport from './call-support.png';
import chatesuport from './chat-support.png';
import videosuport from './video-call-suport.png';
import chat from '../../components/plane-our-jurney.webp'
import aboutinterior from './about-enterior.webp';
import mobilehero from './mobile-enterior-hero.webp'
import howwework from './our-work-process.webp'


const TalkToInterior = () => {
    return (
        <>
            <div className="container-fluid new_banner text-center">
                <div className="col-md-12 d-none d-sm-block">
                    <img className="img-fluid" style={{ width: "90%", border: "0px solid #fff", borderRadius: "5px" }} src={image} alt="Banner" />
                </div>
                <div className="col-md-12 mobile-view">
        <img className="img-fluid" style={{ width: "90%", border: "0px solid #fff", borderRadius: "5px" }} src={mobilehero} alt="Mobile Banner" />
      </div>
                <div style={{ width: "90%" }} className="mx-auto my-4">
                    <div className="row">

                        <div className="col-md-4 col-6 px-2 mb-3">
                            <Link to="#" className="text-decoration-none">
                                <div className="card bg-light border-light hover-effect">
                                    <div className="card-body forHeight text-center">
                                        <img src={callsuport} className="img-fluid icon_chat mb-2" alt="Chat Icon" />
                                        <h5 className="card-title fs-6 text-dark" style={{ fontWeight: '600' }}>Call with Architect</h5>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className="col-md-4 col-6 px-2 mb-3">
                            <Link to="#" className="text-decoration-none">
                                <div className="card bg-light border-light hover-effect w-100">
                                    <div className="card-body forHeight text-center">
                                        <img src={chatesuport} className="img-fluid icon_chat mb-2" alt="Chat Icon" />
                                        <h5 className="card-title fs-6 text-dark" style={{ fontWeight: '600' }}>Chat with Architect</h5>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className="col-md-4 col-sm-12 px-2 mb-3">
                            <Link to="#" className="text-decoration-none">
                                <div className="card bg-light border-light hover-effect">
                                    <div className="card-body forHeight text-center">
                                        <img src={videosuport} className="img-fluid icon_chat mb-2" alt="Chat Icon" />
                                        <h5 className="card-title fs-6 text-dark" style={{ fontWeight: '600' }}>Video Call with Architect</h5>
                                    </div>
                                </div>
                            </Link>
                        </div>

                    </div>
                </div>
            </div>

            {/* plan your juouirney */}

            <div className='' style={{ width: "90%", margin: "0 auto" }}>
                <div className=" service-35 wrap-service35-box">
                    <div className="row no-gutters">
                        <div className="col-lg-6 col-md-12 align-self-center">
                            {/* <span className="badge badge-success rounded-pill px-3 py-1 font-weight-light">Expert Services</span> */}
                            <h3 className="my-2 main-heading">Plan Your Journey Step by Step</h3>
                            <p className="fw-bold text-dark">Follow these steps to achieve your goals with ease and confidence:</p>

                            <div class="row">
                                <div className='col-lg-6 col-md-6'>
                                    <div className='info-box bg-white px-4 py-4 my-3'>
                                        <div className='info-title'><h4 className=' sub-heading'>Chat with an Expert</h4></div>
                                        <p class="para">Get personalized advice from experienced professionals to kick-start your project with clarity.</p>
                                    </div>
                                </div>
                                <div className='col-lg-6 col-md-6'>
                                    <div className='info-box bg-white px-4 py-4 my-3'>
                                        <div className='info-title'><h4 className=' sub-heading'>Plan Your Idea</h4></div>
                                        <p class="para"> We help you brainstorm and refine your concept to make it actionable and impactful.</p>
                                    </div>
                                </div>
                                <div className='col-lg-6 col-md-6'>
                                    <div className='info-box bg-white px-4 py-4 my-3'>
                                        <div className='info-title'><h4 className=' sub-heading'>Set Your Budget</h4></div>
                                        <p class="para">Allocate your resources effectively with a well-structured budget to maximize your outcomes.</p>
                                    </div>
                                </div>
                                <div className='col-lg-6 col-md-6'>
                                    <div className='info-box bg-white px-4 py-4 my-3'>
                                        <div className='info-title'><h4 className=' sub-heading'>Execute</h4></div>
                                        <p class="para">Turn your plan into reality with a step-by-step execution process guided by our expert support.</p>
                                    </div>
                                </div>
                            </div>


                        </div>
                        <div className="col-lg-6 col-md-12">
                            <div class="mt-5">
                                <a href="#">
                                    <img src={chat} alt="Chat with Expert" className='object-cover rounded' />

                                </a>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            {/* About interior designer */}

            <div className='' style={{ width: "90%", margin: "0 auto" }}>
                <div className=" service-35 wrap-service35-box">
                    <div className="row no-gutters">
                        <div className="col-lg-6 col-md-12">
                            <div class="mt-5 text-center">
                                <a href="#">
                                    <img src={aboutinterior} alt="Chat with Expert" className='object-cover rounded' />

                                </a>
                            </div>

                        </div>
                        <div className="col-lg-6 col-md-12 align-self-center">
                            <h3 className="my-2 main-heading">Interior Designers</h3>
                            <p className="fw-bold text-dark">Elevating Spaces with Premier Interior Design Solutions</p>

                            <p className="para1">Help U Build offers expert interior design services tailored to transform spaces into beautifully functional environments. Our team of skilled interior designers combines creativity with practical expertise to create designs that reflect your personal style and meet your functional needs. Whether you’re renovating a single room or planning a complete home or office overhaul, we prioritize your vision and seamlessly bring it to life.</p>
                            <p className="para1">From concept development to material selection, color palettes, and furniture arrangement, our designers handle every detail with precision and flair. We work with high-quality materials and trusted suppliers to ensure durability and aesthetic appeal, all within your budget. At Help U Build, we believe in collaboration and transparency, providing design solutions that not only elevate your space but also add value to it. Trust us to make your dream interior a reality, creating spaces that inspire comfort, productivity, and joy.</p>

                            <a class="as_btn mt-4 fw-bold" href="">Consult with Expert</a>

                        </div>

                    </div>
                </div>
            </div>

            {/* why choose us */}

            <div>
                <section class="as_whychoose_wrapper">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-lg-12 col-md-12 text-center">
                                <h1 class="as_heading">Why Choose <span className='about_color'>Help U Build</span></h1>
                                <p class="as_font14 as_padderBottom50 mx-auto why-sub-para">Choose Help U Build for expert architecture, interior design, and Vastu solutions, blending modern innovation with traditional wisdom.</p>
                            </div>
                            <div class="col-lg-12">
                                <div class="row mx-auto">
                                    <div class="col-lg-3 text-center col-md-3 col-sm-12 mb-4">
                                        <div class="as_whychoose_box d-flex flex-column align-content-center jus  text-center">
                                            <span class="as_number">
                                                <img src="https://cdn-icons-png.flaticon.com/512/1828/1828652.png" alt="" />
                                            </span>
                                            <h4 className=''>Verified Professionals</h4>
                                        </div>
                                    </div>
                                    <div class="col-lg-3 col-md-3 col-sm-12 mb-4">
                                        <div class="as_whychoose_box text-center">
                                            <span class="as_number">
                                                <img src="https://cdn-icons-png.flaticon.com/512/9023/9023721.png" alt="" />
                                            </span>
                                            <h4 className=''>Transparent Pricing</h4>
                                        </div>
                                    </div>
                                    <div class="col-lg-3 col-md-3 col-sm-12 mb-4">
                                        <div class="as_whychoose_box text-center">
                                            <span class="as_number">
                                                <img src="https://cdn-icons-png.flaticon.com/512/18188/18188344.png" alt="" />
                                            </span>
                                            <h4 className=''>Expertise and Experience</h4>
                                        </div>
                                    </div>
                                    <div class="col-lg-3 col-md-3 col-sm-12 mb-4">
                                        <div class="as_whychoose_box text-center">
                                            <span class="as_number">
                                                <img src="https://cdn-icons-png.flaticon.com/512/1076/1076119.png" alt="" />
                                            </span>
                                            <h4 className=''>Customized Solutions</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>
            </div>

            {/* how we work section */}

            <div className="mx-5 extra-mobile mb-5">
                <div className='my-4'>
                    <div className='row mb-5'>
                        <div className='col-lg-7 col-md-12 col-sm-12'>
                            <h2 className='fs-2 main-heading text-capitalize fw-bolder mt-lg-5 mt-sm-1'>How We Work Smoothly for Your Experience and Problems</h2>
                            {/* <h2 className='fs-1 fw-bolder'></h2> */}
                            <p>When it comes to designing interiors that perfectly fit your vision and lifestyle, our approach is meticulously crafted to ensure a seamless experience. Here’s how we achieve smoothness in every phase:</p>

                            <div className='row pt-3 ml-0'>
                                {[
                                    {
                                        step: 1,
                                        text: "Our journey begins by sitting down with you to understand your needs, taste, and lifestyle. We delve into your vision to tailor the design experience, ensuring we capture your unique style while addressing any existing problems in your space."
                                    },
                                    {
                                        step: 2,
                                        text: "We assess the space thoroughly, noting dimensions, layout challenges, and structural details that are vital to crafting a functional and aesthetically pleasing environment. Our goal is to ensure no detail is overlooked, making future stages more efficient."
                                    },
                                    {
                                        step: 3,
                                        text: "A smooth experience includes financial transparency. After understanding your needs, we provide a comprehensive budget estimate. We work within your financial comfort while maximizing value and delivering exceptional quality."
                                    },
                                    {
                                        step: 4,
                                        text: "We create initial design concepts, including mood boards, color schemes, and layout plans. This stage gives you a preview of the possibilities, allowing you to share feedback early in the process to align the project with your expectations."

                                    }
                                ].map((item, index) => (
                                    <div className="col-lg-6 mt-4" key={index}>
                                        <div className="position-relative step-bg">
                                            <div className="position-absolute top-0 start-0 w-100 bg-light-dark bg-opacity-50"></div>
                                            <div className="pe-3 d-inline-flex align-items-center justify-content-start">
                                                <div className="d-inline-flex px-3 bg-white rounded-pill">
                                                    <div className="d-flex align-items-center justify-content-center fs-5 fw-bold rounded-pill" style={{ width: "54px", height: "54px", background: '#0E294C' }}>
                                                        <span className='text-white'>{item.step}</span> {/* Dynamic step number */}
                                                    </div>
                                                </div>
                                                <p className=" ms-3" style={{ fontSize: '16px' }}>
                                                    {item.text}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                        </div>
                        <div className='col-lg-5 col-md-12 col-sm-12 p-5'>
                            <img className='img-fluid object-cover howwework-imge' src={howwework} alt="" />
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default TalkToInterior;