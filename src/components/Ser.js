import React from 'react';
import './ser.css'; // Your CSS
import { Swiper, SwiperSlide } from 'swiper/react';
import chat from './plane-our-jurney.webp'
import plan from './plan.jpg'
import budegt from './budget.jpg'
import exceute from './exceute.jpg'


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



// import required modules
import { Pagination, Autoplay } from 'swiper/modules';

const Ser = () => {
    return (
        <div className='' style={{ width: "90%", margin: "0 auto" }}>
            <div className=" service-35 wrap-service35-box">
                <div className="row no-gutters">
                    <div className="col-lg-6 col-md-6 align-self-center" data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine">
                        {/* <span className="badge badge-success rounded-pill px-3 py-1 font-weight-light">Expert Services</span> */}
                        <h3 className="my-2 main-heading">Plan Your Journey Step by Step</h3>
                        <p className="fw-bold text-dark">Follow these steps to achieve your goals with ease and confidence:</p>

                        <div class="row">
                            <div className='col-md-6'>
                                <div className='info-box bg-white px-4 py-4 my-3' >
                                    <div className='info-title'><h4 className=' sub-heading'>Chat with an Expert</h4></div>
                                    <p class="para">Get personalized advice from experienced professionals to kick-start your project with clarity.</p>
                                </div>
                            </div>
                            <div className='col-md-6'>
                            <div className='info-box bg-white px-4 py-4 my-3'>
                                    <div className='info-title'><h4 className=' sub-heading'>Plan Your Idea</h4></div>
                                    <p class="para"> We help you brainstorm and refine your concept to make it actionable and impactful.</p>
                                </div>
                            </div>
                            <div className='col-md-6'>
                            <div className='info-box bg-white px-4 py-4 my-3'>
                                    <div className='info-title'><h4 className=' sub-heading'>Set Your Budget</h4></div>
                                    <p class="para">Allocate your resources effectively with a well-structured budget to maximize your outcomes.</p>
                                </div>
                            </div>
                            <div className='col-md-6'>
                            <div className='info-box bg-white px-4 py-4 my-3'>
                                    <div className='info-title'><h4 className=' sub-heading'>Execute</h4></div>
                                    <p class="para">Turn your plan into reality with a step-by-step execution process guided by our expert support.</p>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="col-lg-6 col-md-6">
                        <div class="mt-5" data-aos="fade-left" data-aos-offset="300" data-aos-easing="ease-in-sine">
                            <a href="#">
                                <img src={chat} alt="Chat with Expert" className='object-cover rounded' />

                            </a>
                        </div>
                     </div>
                </div>
            </div>
        </div>
    );
};

export default Ser;
