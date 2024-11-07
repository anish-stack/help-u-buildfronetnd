import { useLocation, useParams } from "react-router-dom";
import BreadCrumbs from "../../components/BreadCrumbs";
import { useEffect, useState } from "react";
import { CiChat2 } from "react-icons/ci";
import { BiPhoneCall } from "react-icons/bi";
import { GiTalk } from "react-icons/gi";
const Vastu = () => {
  const [show, setShow] = useState(false);
  const location = useLocation();
  useEffect(() => {
    if (location.pathname === "/Vastu") {
      setShow(true);
    }
  }, [location]);
  const demoCards = [
    {
      id: 1,
      name: 'Name1',
      title: 'logical vastu',
      language: ['Hindi', 'English'],
      experience: '',
      Price: " 20/min ",
      Location: '',
    },
    {
      id: 2,
      name: 'Name2',
      title: 'logical vastu',
      language: ['Hindi', 'English'],
      experience: '',
      Price: " 20/min ",
      Location: '',
    }
  ]
  return (
    <div>
      {show ? <BreadCrumbs path={"Vastu"} title={"Vastu"} /> : null}

      <section
        style={{ paddingTop: "0" }}
        class="as_blog_wrapper mt-0 as_padderBottom90 as_padderTop80"
      >

        <div className="container btn-consult">

          <a href={'/profile-details?page=Vastu'} className="buttons as_btn">Consult An Vastu Expert <GiTalk className="ml-2" />  </a>

        </div>
        <div class="container-fluid custom-container">
          <div class="row">
            <div class="col-md-10 mx-auto">
              <div class="as_blog_box">
                <div className="row">
                  <div className="col-md-6">
                    <div class="as_blog_img">
                      <a href="#!">
                        <img
                          src="https://textilevaluechain.in/wp-content/uploads/2023/09/Vastu-Tips-For-Home-vastu-shastra.jpg"
                          alt=""
                          class="img-responsive img-fix2 "
                        />
                      </a>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div class="as_blog_img">
                      <a href="#!">
                        <img
                          src="https://res.cloudinary.com/jerrick/image/upload/v1686043401/647efb09217661001d5db42b.jpg"
                          alt=""
                          class="img-responsive img-fix2 "
                        />
                      </a>
                    </div>
                  </div>
                </div>
                <div class="as_blog_detail">
                  <ul>
                    <li>
                      <a href="javascript:;">
                        <img src="assets/images/svg/user2.svg" alt="" />
                        By - Admin
                      </a>
                    </li>

                  </ul>
                  <h4 className=" fs-2 fw-bold as_subheading">
                    Harnessing Harmony: The Benefits of Vastu Science Consultation
                  </h4>
                  <p class="as_font14 as_margin0 as_padderBottom10">
                    In an age where the quest for balance and well-being is more pronounced than ever, Vastu Science offers a compelling approach to creating harmonious living and working spaces. Rooted in ancient Indian architectural principles, Vastu Shastra is a holistic science that integrates spatial design with the energies of nature to promote prosperity, health, and peace. Engaging in a Vastu Science consultation can profoundly impact how you experience your environment. Here’s a look at the key benefits of seeking professional Vastu guidance:                  </p>
                  <p className="mt-2 as_padderBottom5">
                    <strong>1. Achieving Balance and Harmony</strong>
                  </p>
                  <p class="mt-0">
                    Vastu Science emphasizes the balance of the five elements—earth, water, fire, air, and space—within a space. A Vastu consultant assesses these elements to ensure they are in harmony, which can lead to a more balanced and serene environment. This alignment is believed to reduce stress and enhance the overall well-being of occupants. By addressing imbalances, Vastu consultation helps create spaces that foster peace and positivity.
                  </p>

                  <p className="mt-2 as_padderBottom5">
                    <strong>2. Enhancing Positive Energy Flow</strong>
                  </p>
                  <p class="mt-0">
                    One of the core principles of Vastu Science is the flow of positive energy (or "prana") within a space. Consultants evaluate the layout, orientation, and design elements to optimize energy flow. This can lead to a more uplifting and invigorating environment. Improved energy flow is thought to enhance productivity, creativity, and emotional health, making it particularly beneficial for both residential and commercial spaces.
                  </p>

                  <p className="mt-2 as_padderBottom5">
                    <strong>3. Promoting Health and Well-Being</strong>
                  </p>
                  <p class="mt-0">
                    The Vastu Science approach to design is intricately linked to physical and mental health. By ensuring that the spatial arrangement supports the natural flow of energy, Vastu principles aim to create environments that contribute to better health. Proper placement of rooms, entrances, and elements can lead to improved sleep, reduced stress, and overall well-being. This is especially valuable in spaces where health and wellness are a priority, such as homes and healthcare facilities.
                  </p>

                  <p className="mt-2 as_padderBottom5">
                    <strong>4. Supporting Prosperity and Success</strong>
                  </p>
                  <p class="mt-0">
                    Vastu Science is often associated with attracting prosperity and success. Consultants analyze various aspects of a space, such as its orientation and layout, to align with Vastu principles that are believed to attract financial abundance and professional success. For businesses, this can translate into increased opportunities, better client relationships, and enhanced performance.
                  </p>

                  <p className="mt-2 as_padderBottom5">
                    <strong>5. Improving Relationships and Harmony</strong>
                  </p>
                  <p class="mt-0">
                    The principles of Vastu Science extend to interpersonal relationships as well. By creating environments that support harmonious energy flow, Vastu consultants can help improve the dynamics between occupants. This can lead to better communication, reduced conflicts, and a more supportive and nurturing atmosphere in both family and professional settings.
                  </p>

                  <p className="mt-2 as_padderBottom5">
                    <strong>6. Enhancing Productivity and Focus</strong>
                  </p>
                  <p class="mt-0">
                    In workspaces, Vastu Science aims to enhance productivity and focus by optimizing the arrangement of furniture and work areas. Proper alignment and placement are believed to contribute to greater concentration, creativity, and efficiency. This can be particularly beneficial for businesses, offices, and study areas where high performance is essential.
                  </p>

                  <p className="mt-2 as_padderBottom5">
                    <strong>7. Guiding Design Choices</strong>
                  </p>
                  <p class="mt-0">
                    Navigating design decisions can be overwhelming with the myriad of options available. Vastu consultants provide guidance on selecting materials, colors, and layouts that align with Vastu principles. This expert advice ensures that design choices not only enhance the aesthetic appeal but also support the overall harmony and functionality of the space.
                  </p>

                  <p className="mt-2 as_padderBottom5">
                    <strong>8. Addressing Specific Concerns</strong>
                  </p>
                  <p class="mt-0">
                    Every space has unique challenges and concerns. Vastu consultants offer tailored solutions to address specific issues such as lack of natural light, poor ventilation, or negative energy zones. By identifying and resolving these concerns, Vastu Science helps create a more comfortable and functional environment.
                  </p>

                  <p className="mt-2 as_padderBottom5">
                    <strong>9. Creating a Sustainable and Eco-Friendly Environment</strong>
                  </p>
                  <p class="mt-0">
                    Modern Vastu practices often emphasize sustainability and environmental consciousness. Consultants can guide the incorporation of eco-friendly materials and practices that align with Vastu principles. This not only supports harmony with nature but also contributes to a more sustainable and responsible approach to design.
                  </p>

                  <p className="mt-2 as_padderBottom5">
                    <strong>10. Ensuring Long-Term Benefits</strong>
                  </p>
                  <p class="mt-0">
                    Implementing Vastu principles can lead to long-term benefits for both the occupants and the space itself. The holistic approach to design helps create environments that remain balanced and harmonious over time. By investing in Vastu consultation, you ensure that your space continues to support your well-being and aspirations for years to come.
                  </p>



                </div>
             
                <div class="as_comment_form p-5">
                  <div class="as_padderBottom40">
                    <h1 class="as_heading">Leave a Reply</h1>
                  </div>

                  <div class="row">
                    <form>
                      <div class="col-lg-6 col-md-6">
                        <div class="form-group">
                          <input
                            type="text"
                            name=""
                            class="form-control"
                            id=""
                            placeholder="Name"
                          />
                        </div>
                      </div>
                      <div class="col-lg-6 col-md-6">
                        <div class="form-group">
                          <input
                            type="text"
                            name=""
                            class="form-control"
                            id=""
                            placeholder="Email"
                          />
                        </div>
                      </div>
                      <div class="col-lg-12 col-md-12">
                        <div class="form-group">
                          <textarea
                            name=""
                            id=""
                            class="form-control"
                            placeholder="Your Message"
                          ></textarea>
                        </div>
                      </div>
                      <div class="col-lg-12 col-md-12 as_padderTop10">
                        <a href="javascript:;" class="as_btn">
                          send
                        </a>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </section>

      <div className="container mt-4">
        <div className="row">

        </div>
      </div>
    </div>
  );
};

export default Vastu;
