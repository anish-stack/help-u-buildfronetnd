import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import BreadCrumbs from "./BreadCrumbs";

const data = [
  {
    id: 1,
    image: "https://i.ibb.co/dc4rvxF/interior-designer-1285513030.webp",
    date: "July 29, 2024",
    author: "Admin",
    comments: 0,
    href: "/Interior",
    title: "Interior design is all about how we experience spaces",
    summary:
      "Interior design is the art and science of enhancing the interior of a building to achieve...F.",
  },
  {
    id: 2,
    image: "https://i.ibb.co/MPkm4fK/cmp.jpg",
    date: "August 10, 2024",
    author: "Admin",
    comments: 2,
    href: "/Construction-mall",
    title: "It's fastest growing marketplace for Construction sector",
    summary:
      "Construction Marketplace is a building materials management and procurement platform.",
  },
  {
    id: 3,
    image: "https://i.ibb.co/875Y52m/arct.jpg",
    date: "August 20, 2024",
    author: "Admin",
    comments: 5,
    href: "/Architecture",
    title: "Architecture is the art and technique of designing",
    summary:
      "A general term to describe buildings and other physical structures",
  },
];

const Blog = () => {
  const [show, setShow] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/blog") {
      setShow(true);
    }
  }, [location]);

  return (
    <div>
      {show && <BreadCrumbs path={"Blog"} title={"Latest Articles"} />}

      <section className="as_blog_wrapper as_padderTop80 as_padderBottom80">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 text-center">
              <h1 className="as_heading">Latest Articles</h1>
              <p className="as_font14 as_padderBottom10">
                Stay updated with our latest insights and tips on architecture,
                interior design, and Vastu.
              </p>

              <div className="v3_blog_wrapper">
                <div className="row text-left" data-aos="fade-up" data-aos-offset="300" data-aos-easing="ease-in-sine">
                  {data.map((post) => (
                    <div
                      key={post.id}
                      className="col-lg-4 col-md-6 col-sm-6 col-12"
                    >
                      <div className="as_blog_box">
                        <div className="as_blog_img">
                          <a href={`${post.href}`}>
                            <img
                              src={post.image}
                              alt={post.title}
                              className="img-responsive"
                            />
                          </a>
                          <span className="as_btn">{post.date}</span>
                        </div>
                        <div className="as_blog_detail">
                          <ul>
                            <li>
                              <a>
                                <img src="assets/images/svg/user2.svg" alt="" />
                                By - {post.author}
                              </a>
                            </li>
                            <li>
                              <a>
                                <img
                                  src="assets/images/svg/comment1.svg"
                                  alt=""
                                />
                                {post.comments} comments
                              </a>
                            </li>
                          </ul>
                          <h4 className="as_subheading">
                            <a href={`${post.href}`}>
                              {post.title}
                            </a>
                          </h4>
                          <p className="as_font14 as_margin0">{post.summary}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="text-center as_padderTop60">
                <a href="/blog" className="as_btn">
                  View More
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
