import React from "react";
import BreadCrumbs from "../../components/BreadCrumbs";

const ConstructionMall = () => {
  const data = [
    {
      id: 1,
      Name: "Steel",
      product_img:
        "https://www.ultratechcement.com/content/ultratechcement/in/en/home/for-homebuilders/home-building-explained-single/descriptive-articles/building-materials-used-in-construction/_jcr_content/root/container/container_1646056284/teaser_copy.coreimg.jpeg/1702026227155/building-materials-1.jpeg",
    },
    {
      id: 1,
      Name: "Cement",
      product_img:
        "https://www.ultratechcement.com/content/ultratechcement/in/en/home/for-homebuilders/home-building-explained-single/descriptive-articles/building-materials-used-in-construction/_jcr_content/root/container/container_1646056284/teaser_copy_458761119.coreimg.jpeg/1702026237101/building-materials-2.jpeg",
    },
    {
      id: 1,
      Name: "Ready Mix Concrete",
      product_img:
        "https://www.ultratechcement.com/content/ultratechcement/in/en/home/for-homebuilders/home-building-explained-single/descriptive-articles/building-materials-used-in-construction/_jcr_content/root/container/container_1646056284/teaser_copy_540244692.coreimg.jpeg/1702026257674/building-materials-4.jpeg",
    },
    {
      id: 1,
      Name: " Binding Wire",
      product_img:
        "https://www.ultratechcement.com/content/ultratechcement/in/en/home/for-homebuilders/home-building-explained-single/descriptive-articles/building-materials-used-in-construction/_jcr_content/root/container/container_1646056284/teaser_copy_440078514.coreimg.jpeg/1702026267364/building-materials-5.jpeg",
    },
    {
      id: 1,
      Name: "POP White Cement",
      product_img: "https://i.ibb.co/4MGB66s/download-10.jpg",
    },
    {
      id: 1,
      Name: "Bricks",
      product_img:
        "https://plus.unsplash.com/premium_photo-1675103339078-88b54e155e71?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8QnJpY2tzfGVufDB8fDB8fHww",
    },
    {
      id: 1,
      Name: "Tiles",
      product_img:
        "https://images.unsplash.com/photo-1541471943749-e5976783f6c3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8VGlsZXN8ZW58MHx8MHx8fDA%3D",
    },
  ];
  const categories = [
    { id: 1, name: "Steel", image: "https://example.com/images/steel.jpg" },
    { id: 2, name: "Cement", image: "https://example.com/images/cement.jpg" },
    {
      id: 3,
      name: "Concrete",
      image: "https://example.com/images/concrete.jpg",
    },
    { id: 4, name: "Bricks", image: "https://example.com/images/bricks.jpg" },
    { id: 5, name: "Tiles", image: "https://example.com/images/tiles.jpg" },
    { id: 6, name: "Wood", image: "https://example.com/images/wood.jpg" },
    { id: 7, name: "Paint", image: "https://example.com/images/paint.jpg" },
    {
      id: 8,
      name: "Insulation",
      image: "https://example.com/images/insulation.jpg",
    },
    {
      id: 9,
      name: "Plumbing",
      image: "https://example.com/images/plumbing.jpg",
    },
    {
      id: 10,
      name: "Electrical",
      image: "https://example.com/images/electrical.jpg",
    },
    {
      id: 11,
      name: "Roofing",
      image: "https://example.com/images/roofing.jpg",
    },
    { id: 12, name: "Tools", image: "https://example.com/images/tools.jpg" },
  ];

  return (
    <div>
      <BreadCrumbs path={"Construction-Mall"} title={"Construction-mall"} />
      {/* <section class="as_shop_wrapper as_padderBottom90 as_padderTop80">
        <div class="container">
          <div class="row">
            <div class="col-lg-3 col-md-4 col-sm-12 col-xs-12">
              <div class="as_shop_sidebar">
                <div class="as_widget as_search_widget">
                  <input
                    type="text"
                    name=""
                    class="form-control"
                    id=""
                    placeholder="Product Search"
                  />
                  <span>
                    <img src="assets/images/svg/search.svg" alt="" />
                  </span>
                </div>
                <div class="as_widget as_category_widget">
                  <h3 class="as_widget_title">Top Categories</h3>

                  <ul>
                    {categories.map((item, index) => (
                      <li key={index}>
                        <a href="javascript:;">{item.name}</a>
                      </li>
                    ))}
                  </ul>
                </div>

                <div class="as_widget as_product_widget">
                  <h3 class="as_widget_title">New Products</h3>

                  <ul>
                    {data.slice(0, 2).map((item, index) => (
                      <li class="as_product">
                        <a href="#!">
                          <span class="as_productimg">
                            <img
                              src={item.product_img}
                              className="w-75"
                              alt=""
                            />
                          </span>
                          <span class="as_product_detail">
                            <img src="assets/images/rating.png" alt="" />
                            <span class="as_title">{item.Name}</span>
                            <span>
                              $50.00 <del>$80.00</del>
                            </span>
                          </span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                <div class="as_widget as_share_widget as_share_box">
                  <h3 class="as_widget_title">Social Share</h3>

                  <ul>
                    <li>
                      <a href="javascript:;">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                          width="10px"
                          height="19px"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M6.491,19.000 L6.491,10.333 L9.439,10.333 L9.881,6.956 L6.491,6.956 L6.491,4.799 C6.491,3.821 6.765,3.155 8.188,3.155 L10.000,3.154 L10.000,0.132 C9.687,0.092 8.611,-0.000 7.359,-0.000 C4.746,-0.000 2.956,1.574 2.956,4.464 L2.956,6.956 L-0.000,6.956 L-0.000,10.333 L2.956,10.333 L2.956,19.000 L6.491,19.000 Z"
                          ></path>
                        </svg>
                      </a>
                    </li>
                    <li>
                      <a href="javascript:;">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                          width="20px"
                          height="16px"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M20.000,1.892 C19.257,2.213 18.464,2.426 17.637,2.530 C18.487,2.030 19.137,1.244 19.442,0.298 C18.649,0.764 17.774,1.092 16.842,1.276 C16.089,0.487 15.017,-0.002 13.847,-0.002 C11.576,-0.002 9.748,1.812 9.748,4.037 C9.748,4.357 9.776,4.664 9.843,4.957 C6.435,4.794 3.418,3.184 1.392,0.734 C1.038,1.338 0.831,2.030 0.831,2.775 C0.831,4.173 1.562,5.413 2.652,6.130 C1.993,6.118 1.347,5.930 0.800,5.633 C0.800,5.645 0.800,5.661 0.800,5.677 C0.800,7.639 2.221,9.269 4.085,9.644 C3.751,9.734 3.387,9.777 3.010,9.777 C2.747,9.777 2.482,9.763 2.233,9.708 C2.765,11.307 4.272,12.483 6.065,12.521 C4.670,13.595 2.898,14.243 0.981,14.243 C0.645,14.243 0.322,14.228 -0.000,14.187 C1.816,15.341 3.968,15.999 6.290,15.999 C13.835,15.999 17.960,9.845 17.960,4.510 C17.960,4.332 17.954,4.160 17.945,3.989 C18.759,3.420 19.442,2.709 20.000,1.892 Z"
                          ></path>
                        </svg>
                      </a>
                    </li>
                    <li>
                      <a href="javascript:;">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                          width="17px"
                          height="17px"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M16.995,16.998 L16.995,16.999 L13.477,16.999 L13.477,11.474 C13.477,10.157 13.450,8.469 11.645,8.469 C9.813,8.469 9.532,9.899 9.532,11.379 L9.532,16.998 L6.013,16.998 L6.013,5.650 L9.393,5.650 L9.393,7.197 L9.442,7.197 C9.912,6.306 11.062,5.365 12.777,5.365 C16.342,5.365 16.998,7.714 16.998,10.764 L16.998,16.998 L16.995,16.998 ZM2.041,4.102 C0.914,4.102 -0.000,3.169 -0.000,2.042 C-0.000,0.915 0.914,0.001 2.041,0.001 C3.167,0.001 4.082,0.915 4.082,2.042 C4.082,3.169 3.168,4.102 2.041,4.102 ZM3.804,16.999 L0.280,16.999 L0.280,5.650 L3.804,5.650 L3.804,16.999 Z"
                          ></path>
                        </svg>
                      </a>
                    </li>
                    <li>
                      <a href="javascript:;">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                          width="21px"
                          height="14px"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M20.107,1.349 C19.538,0.366 18.920,0.186 17.661,0.117 C16.404,0.034 13.242,-0.000 10.503,-0.000 C7.758,-0.000 4.595,0.034 3.339,0.116 C2.083,0.186 1.463,0.365 0.889,1.349 C0.302,2.330 -0.000,4.020 -0.000,6.996 C-0.000,6.999 -0.000,7.000 -0.000,7.000 C-0.000,7.003 -0.000,7.004 -0.000,7.004 L-0.000,7.006 C-0.000,9.969 0.302,11.672 0.889,12.643 C1.463,13.626 2.082,13.804 3.338,13.887 C4.595,13.958 7.758,14.000 10.503,14.000 C13.242,14.000 16.404,13.958 17.662,13.888 C18.921,13.805 19.539,13.627 20.109,12.645 C20.701,11.673 21.000,9.970 21.000,7.007 C21.000,7.007 21.000,7.004 21.000,7.001 C21.000,7.001 21.000,6.999 21.000,6.997 C21.000,4.020 20.701,2.330 20.107,1.349 ZM7.875,10.818 L7.875,3.182 L14.437,7.000 L7.875,10.818 Z"
                          ></path>
                          <path
                            fill="url(#PSgrad_0)"
                            d="M20.107,1.349 C19.538,0.366 18.920,0.186 17.661,0.117 C16.404,0.034 13.242,-0.000 10.503,-0.000 C7.758,-0.000 4.595,0.034 3.339,0.116 C2.083,0.186 1.463,0.365 0.889,1.349 C0.302,2.330 -0.000,4.020 -0.000,6.996 C-0.000,6.999 -0.000,7.000 -0.000,7.000 C-0.000,7.003 -0.000,7.004 -0.000,7.004 L-0.000,7.006 C-0.000,9.969 0.302,11.672 0.889,12.643 C1.463,13.626 2.082,13.804 3.338,13.887 C4.595,13.958 7.758,14.000 10.503,14.000 C13.242,14.000 16.404,13.958 17.662,13.888 C18.921,13.805 19.539,13.627 20.109,12.645 C20.701,11.673 21.000,9.970 21.000,7.007 C21.000,7.007 21.000,7.004 21.000,7.001 C21.000,7.001 21.000,6.999 21.000,6.997 C21.000,4.020 20.701,2.330 20.107,1.349 ZM7.875,10.818 L7.875,3.182 L14.437,7.000 L7.875,10.818 Z"
                          ></path>
                        </svg>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col-lg-9 col-md-8 col-sm-12 col-xs-12">
              <div class="as_shop_topbar">
                <span class="as_result_text">Showing 1–9 of 15 results</span>
                <div class="as_select_box">
                  <select
                    class="form-control"
                    data-placeholder="Default Shorting"
                  >
                    <option value="male">By Name</option>
                    <option value="female">By Price</option>
                  </select>
                </div>
              </div>
              <div class="row">
                {data.map((item, index) => (
                  <div key={index} class="col-lg-4 col-md-6 col-sm-12">
                    <div class="as_product_box">
                      <div class="as_product_img">
                        <img
                          src={item.product_img}
                          alt=""
                          class="img-responsive img-fix"
                        />

                        <ul>
                          <li>
                            <a href="#!">
                              <img src="assets/images/svg/cart.svg" alt="" />
                              <span>Add To Card</span>
                            </a>
                          </li>
                          <li>
                            <a href="#!">
                              <img src="assets/images/svg/view.svg" alt="" />
                            </a>
                          </li>
                          <li>
                            <a href="#!">
                              <img
                                src="assets/images/svg/wishlist.svg"
                                alt=""
                              />
                            </a>
                          </li>
                          <li>
                            <a href="#!">
                              <img src="assets/images/svg/compare.svg" alt="" />
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div class="as_product_detail">
                        <span>
                          <img src="assets/images/rating.png" alt="" />
                        </span>
                        <h4 className=" fs-2 fw-bold as_subheading">{item.Name}</h4>
                        <span class="as_price">
                          $20.00 <del>$80.00</del>{" "}
                          <span class="as_orange"></span>
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div class="as_pagination as_padderTop50">
                <ul class="text-right">
                  <li class="as_prev">
                    <span>prev</span>
                  </li>
                  <li class="as_active">
                    <a href="javascript:;">1</a>
                  </li>
                  <li>
                    <a href="javascript:;">2</a>
                  </li>
                  <li>
                    <a href="javascript:;">3</a>
                  </li>
                  <li class="as_next">
                    <a href="javascript:;">next</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      <section
        style={{ paddingTop: "0" }}
        class="as_blog_wrapper mt-0 as_padderBottom90 as_padderTop80"
      >
        <div class="container-fluid custom-container">
          <div class="row">
            <div class="col-md-10 mx-auto">
              <div class="as_blog_box">
                <div className="row">
                  <div className="col-md-6">
                    <div class="as_blog_img">
                      <a href="#!">
                        <img
                          src="https://i.ibb.co/10HGhRk/image.png"
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
                          src="https://i.ibb.co/1dvmRV1/image.png"
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
                    The Rise of Online Construction Material Marketplaces in India
                  </h4>
                  <p class="as_font14 as_margin0 as_padderBottom10">
                    In recent years, the construction industry in India has witnessed a significant transformation with the rapid growth of online construction material marketplaces. This shift is not merely a trend but a reflection of the evolving dynamics in how construction materials are sourced, purchased, and delivered. As India continues to urbanize and infrastructure projects accelerate, the demand for efficient, transparent, and accessible solutions has driven the expansion of online platforms. Here’s an in-depth look at how this burgeoning sector is reshaping the construction landscape in India.                      </p>
                    <p className="mt-2 as_padderBottom5">
                    <strong>1. The Surge in Online Marketplaces</strong>
                  </p>
                  <p class="mt-0">
                    The online construction material marketplace sector in India has experienced unprecedented growth, driven by the need for convenience, cost-effectiveness, and accessibility. Major players in the market, such as BuildSupply, B2BHint, and Materialtree, are expanding their reach and offerings to cater to the diverse needs of builders, contractors, and homeowners. These platforms provide a comprehensive range of materials, including cement, bricks, tiles, sanitary ware, and more, all accessible from the comfort of a computer or smartphone.
                  </p>

                    <p className="mt-2 as_padderBottom5">
                    <strong>2. Convenience and Accessibility</strong>
                  </p>
                  <p class="mt-0">
                    One of the primary advantages of online construction material marketplaces is the convenience they offer. Traditionally, sourcing construction materials involved visiting multiple suppliers, comparing prices, and dealing with logistical challenges. Online marketplaces streamline this process by allowing users to browse, compare, and order materials from a single platform. This not only saves time but also reduces the complexity of procurement, making it easier for both small-scale and large-scale projects to manage their material needs efficiently.
                  </p>

                    <p className="mt-2 as_padderBottom5">
                    <strong>3. Enhanced Transparency and Price Comparison</strong>
                  </p>
                  <p class="mt-0">
                    Online platforms provide a level of transparency that was previously hard to achieve in traditional procurement methods. Users can easily compare prices, view detailed product specifications, and read reviews from other buyers. This transparency helps in making informed decisions and ensures that customers get the best value for their money. Moreover, many online marketplaces offer price comparisons across different suppliers, allowing users to find competitive rates and negotiate better deals.
                  </p>

                    <p className="mt-2 as_padderBottom5">
                    <strong>4. Streamlined Logistics and Delivery</strong>
                  </p>
                  <p class="mt-0">
                    Efficient logistics is crucial in the construction industry, where timely delivery of materials can significantly impact project timelines. Online marketplaces often come with integrated logistics solutions that ensure smooth and timely delivery of materials to construction sites. Features like real-time tracking and flexible delivery options enhance the overall efficiency of the supply chain, minimizing delays and reducing the burden on contractors and builders.
                  </p>

                    <p className="mt-2 as_padderBottom5">
                    <strong>5. Access to a Wide Range of Products</strong>
                  </p>
                  <p class="mt-0">
                    Online construction material marketplaces provide access to a vast array of products from various manufacturers and suppliers. This diversity is particularly beneficial for projects that require specific materials or those looking for niche products. Users can explore an extensive catalog of options, from standard building materials to specialized and high-end products, all in one place. This wide range of choices facilitates better decision-making and helps meet the unique requirements of different construction projects.
                  </p>

                    <p className="mt-2 as_padderBottom5">
                    <strong>6. Digital Transformation and Technology Integration</strong>
                  </p>
                  <p class="mt-0">
                    The growth of online marketplaces is a testament to the broader digital transformation in the Indian construction industry. These platforms leverage advanced technologies such as artificial intelligence, machine learning, and big data analytics to enhance user experience and optimize supply chain operations. Features like personalized recommendations, predictive analytics, and automated inventory management contribute to more efficient and intelligent procurement processes.
                  </p>

                    <p className="mt-2 as_padderBottom5">
                    <strong>7. Increased Market Reach and Competition</strong>
                  </p>
                  <p class="mt-0">
                    For suppliers and manufacturers, online marketplaces offer an opportunity to reach a larger audience beyond traditional geographic boundaries. This expanded market reach fosters competition, driving innovation and improvements in product quality and customer service. Suppliers can showcase their products to a broader customer base, while buyers benefit from a competitive marketplace with diverse options.
                  </p>

                    <p className="mt-2 as_padderBottom5">
                    <strong>8. Support for Small and Medium Enterprises (SMEs)</strong>
                  </p>
                  <p class="mt-0">
                    Online construction material marketplaces provide significant advantages for small and medium enterprises (SMEs) in the construction sector. These platforms offer SMEs access to a larger market without the need for extensive physical infrastructure. Additionally, SMEs can leverage the online platforms to establish their presence, compete with larger players, and streamline their supply chain operations.
                  </p>

                    <p className="mt-2 as_padderBottom5">
                    <strong>9. Integration with Smart Technologies</strong>
                  </p>
                  <p class="mt-0">
                    The integration of smart technologies is a growing trend in the online construction material marketplace sector. Innovations such as Internet of Things (IoT) sensors, automated inventory systems, and smart ordering processes are enhancing the efficiency and effectiveness of these platforms. Such technologies contribute to better inventory management, accurate demand forecasting, and improved customer satisfaction.
                  </p>

                    <p className="mt-2 as_padderBottom5">
                    <strong>10. Future Prospects and Growth</strong>
                  </p>
                  <p class="mt-0">
                    The future of online construction material marketplaces in India looks promising, with continued growth anticipated in the coming years. As technology advances and the construction industry evolves, these platforms are likely to become increasingly sophisticated, offering more features and improved user experiences. The adoption of digital solutions in construction is expected to drive further innovation and expansion in the marketplace sector.
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
    </div>
  );
};

export default ConstructionMall;
