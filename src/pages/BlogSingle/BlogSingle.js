import React from "react";
import BreadCrumbs from "../../components/BreadCrumbs";

const BlogSingle = () => {
  const location = new URLSearchParams(window.location.href);
  const title = location.get("blogTitle");
  const id = location.get("id");

  if(id === 2){

  }
  if(id === 3){

  }
  return (
    <div>
      <BreadCrumbs path={"Blog-Details"} title={title} />

      <section class="as_blog_wrapper as_padderBottom90 as_padderTop80">
        <div class="container">
          <div class="row">
            <div class="col-lg-9 col-md-10 col-sm-12 col-xs-12">
              <div class="as_blog_box">
                <div class="as_blog_img">
                  <a href="#!">
                    <img
                      src="assets/images/blog_single1.jpg"
                      alt=""
                      class="img-responsive"
                    />
                  </a>
                  <span class="as_btn">July 29, 2022</span>
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
                    {" "}
                    Rahu Enters Cancer and Ketu Enters Capricorn.
                  </h4>
                  <p class="as_font14 as_margin0 as_padderBottom10">
                    Interior design is much more than arranging furniture and
                    selecting color schemes; it’s a vital component of creating
                    a home that is not only aesthetically pleasing but also
                    functional and reflective of personal style. The importance
                    of interior design in homes extends far beyond mere
                    decoration; it encompasses the thoughtful arrangement of
                    space, the selection of materials, and the integration of
                    functionality to enhance the overall living experience.
                  </p>
                  <p class="as_font14 as_padderBottom20">
                    One of the primary roles of interior design is to make a
                    home functional and efficient. A well-designed space
                    considers the practical aspects of daily living, such as
                    traffic flow, storage needs, and ergonomics. For instance,
                    an interior designer will assess how a family uses their
                    space and design accordingly, ensuring that furniture
                    placement and room layout facilitate ease of movement and
                    convenience. In smaller homes or apartments, effective
                    design can maximize the use of space, making it feel larger
                    and more open.
                  </p>

         

                  <p class="as_padderTop30 as_padderBottom20">
                    Interior design transforms a house into a home by imbuing it
                    with character and style. The aesthetic choices made in
                    interior design, including color schemes, furniture styles,
                    and décor elements, reflect the personality and tastes of
                    the occupants. A well-designed interior creates a cohesive
                    look that ties together various elements of a space,
                    creating a harmonious environment that feels inviting and
                    comfortable. Whether opting for a modern minimalist approach
                    or a cozy traditional look, interior design helps in
                    expressing personal style and making a home truly unique.
                  </p>

                  <div class="as_bloquote text-center">
                    <p>
                      The impact of interior design on quality of life cannot be
                      overstated. The right design choices can significantly
                      affect mood, comfort, and overall well-being. For example,
                      proper lighting can influence sleep patterns and
                      productivity, while the use of calming colors and textures
                      can create a serene environment that reduces stress.
                      Interior design also plays a crucial role in creating
                      spaces that cater to the needs of all family members,
                      including those with disabilities or special needs,
                      ensuring that the home is accessible and accommodating.
                    </p>
                    <h3 class="as_margin0 as_padderTop10">
                      David Lee <span>- Businessman</span>
                    </h3>
                  </div>

                  <p>
                    Investing in interior design can also enhance the value of a
                    property. Homes with thoughtfully designed interiors often
                    appeal more to potential buyers, as they showcase the full
                    potential of the space and demonstrate a level of care and
                    attention. High-quality interior design can make a property
                    stand out in the real estate market, leading to a higher
                    return on investment.
                  </p>
                  <p>
                    In essence, interior design is a crucial element in creating
                    a functional, beautiful, and personalized home. Its impact
                    on daily life, comfort, and property value highlights the
                    importance of investing in professional design services. By
                    considering the practical, aesthetic, and emotional aspects
                    of living spaces, interior design helps in crafting homes
                    that are not only visually appealing but also enhance the
                    overall quality of life.
                  </p>
                  <div class="as_tag_wrapper as_padderBottom50">
                    <ul>
                      <li>
                        <img src="assets/images/svg/tag.svg" alt="" />
                        Tag :{" "}
                      </li>
                      <li>
                        <a href="javascript:;" class="as_btn">
                          Gemstone
                        </a>
                      </li>
                      <li>
                        <a href="javascript:;" class="as_btn">
                          Face Reading
                        </a>
                      </li>
                      <li>
                        <a href="javascript:;" class="as_btn">
                          Planet
                        </a>
                      </li>
                      <li>
                        <a href="javascript:;" class="as_btn">
                          Tarot Cards
                        </a>
                      </li>
                    </ul>
                  </div>
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
    </div>
  );
};

export default BlogSingle;
