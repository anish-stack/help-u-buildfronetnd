import React from 'react'
import BreadCrumbs from '../../components/BreadCrumbs'

const Contact = () => {
    return (
        <div>
            <BreadCrumbs path={"Contact"} title={"Contact Us"} />


            <section class="as_contact_wrapper as_padderBottom40 as_padderTop50">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12 text-center">
                            <h1 class="as_heading as_heading_center">get in touch with us!</h1>

                            <p class="as_font14 as_padderBottom50 as_padderTop20">We'd love to hear from you! Whether you have questions, need assistance, our team is here to help.</p>
                        </div>
                        <div class="col-lg-6 col-md-6 col-sm-12">
                            <div class="as_contact_detail">
                                <ul>
                                    <li class="as_info_box">
                                        <span class="as_icon">
                                            <img src="assets/images/svg/pin.svg" alt="" />
                                        </span>
                                        <p>368, Harbala ki Dhani, Village Sikohpur, Sector 78, Gurugram-122004</p>
                                    </li>
                                    <li class="as_info_box">
                                        <span class="as_icon">
                                            <img src="assets/images/svg/contact.svg" alt="" />
                                        </span>
                                        <p>+91 8826465693</p>
                                    </li>
                                    <li class="as_info_box">
                                        <span class="as_icon">
                                            <img src="assets/images/svg/message.svg" alt="" />
                                        </span>
                                        <p><a href="javascript:;">info@helpubuild.co.in  </a></p>
                                    </li>
                                </ul>
                                <div class="as_map">
                                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3510.36179487597!2d76.96618347527914!3d28.37813852580473!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d3d06f3106879%3A0x8ab0d9d5ee82d8e7!2sHarbala%20Dhani%20Shikohpur%2C%20Sector%2078%2C%20Gurugram%2C%20Haryana%20122004!5e0!3m2!1sen!2sin!4v1724315351033!5m2!1sen!2sin" width="100%" height="318" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6 col-md-6">
                            <form class="as_appointment_form">
                                <div class="form-group">
                                    <input type="text" name="" value="" placeholder="Name" class="form-control" />
                                </div>
                                <div class="form-group">
                                    <input type="text" name="" value="" placeholder="Last Name" class="form-control" />
                                </div>
                                <div class="form-group">
                                    <input type="text" name="" value="" placeholder="Email Address" class="form-control" />
                                </div>
                                <div class="form-group">
                                    <input type="text" placeholder="Subject" class="form-control" />
                                </div>
                                <div class="form-group as_padderBottom10">
                                    <textarea name="" class="form-control" placeholder="Message" id=""></textarea>
                                </div>
                                <button class="as_btn">Send Message</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Contact
