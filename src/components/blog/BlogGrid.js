import React from "react";
import Link from "next/link";
import dayjs from "dayjs";

export default function BlogGrid({ posts, categories }) {
   
  return (
    <>
      <div className="blog-one pb-140">
        <div className="tabs-one">
          <div className="blog-category-tabs pb-100">
            <div className="container">
              <div className="row">
                <div className="col-xxl-12 text-center">
                  <ul
                    className="nav nav-pills mb-100 justify-content-center"
                    id="pills-tab"
                    role="tablist"
                  >
                    {categories?.map((value, index) => {
                      return (
                        <>
                        {value.enableOrDisable.enableOrDisable && 
                        <li className="nav-item" role="presentation">
                          <button
                            className={`nav-link ${
                              index === 0 ? "active" : ""
                            }`}
                            id={`id-tabbtn-${index}`}
                            data-bs-toggle="pill"
                            data-bs-target={`#id-target-${index}`}
                            type="button"
                            role="tab"
                            aria-controls="pills-search"
                            aria-selected="true"
                          >
                            <img
                              src={
                                value?.categoryImage?.categoryImage != null
                                  ? value?.categoryImage?.categoryImage?.node
                                      .mediaItemUrl
                                  : "assets/img/icon/globe.svg"
                              }
                              alt="category image"
                            />
                            <span>{value.name}</span>
                          </button>
                        </li>}</>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xxl-12">
              <div className="tab-content" id="pills-tabContent">
                {categories?.map((value, index) => {
                  return (
                    <div
                      className={`tab-pane fadeInUp ${
                        index === 0 ? "show active" : ""
                      }`}
                      id={`id-target-${index}`}
                      role="tabpanel"
                      aria-labelledby="pills-search-tab"
                      tabindex="0"
                    >
                      <div className="container">
                        <div className="row">
                          {value?.posts?.nodes?.map((blog, index) => {
                            return (
                              <div
                                className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12"
                                key={index}
                              >
                                <div className="blog-grid__single mb-30">
                                  <div className="blog-grid__single-img">
                                    <Link href={`/blog-detail/${blog.slug}`}>
                                      <img
                                        src={
                                          blog?.featuredImage != null
                                            ? blog?.featuredImage?.node
                                                ?.mediaItemUrl
                                            : "assets/img/placeholder.jpg"
                                        }
                                        alt="BlogImg"
                                      />
                                    </Link>
                                  </div>
                                  <div className="blog-grid__single-content">
                                    <div className="postbox__meta gap-2 d-flex">
                                      <span>
                                        <i className="fa-light fa-calendar-lines"></i>
                                        {dayjs(`${blog.date}`).format(
                                          "MMMM-DD-YYYY"
                                        )}
                                      </span>
                                      <span>
                                        <i class="fa-regular fa-user"></i>
                                        {blog.author.node.name}
                                      </span>
                                    </div>
                                    <h2>
                                      <Link href={`/blog-detail/${blog.slug}`}>
                                        {blog.title}
                                      </Link>
                                    </h2>
                                    <div className="btn-box postbox__read-more">
                                      <Link
                                        href={`/blog-detail/${blog.slug}`}
                                        className="tp-btn postbox__more-btn"
                                      >
                                        Read More{" "}
                                        <i className="fa-solid fa-arrow-right"></i>
                                      </Link>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          {/* <div className="row">
                        <div className="col-xxl-12">
                            <div className="basic-pagination text-center mt-40">
                                <nav>
                                    <ul>
                                        <li><Link href="/" className="prev"><i className="fa-regular fa-arrow-left"></i><span>Prew</span></Link></li>
                                        <li><span className="current">1</span></li>
                                        <li><Link href="/"><span>2</span></Link></li>
                                        <li><Link href="/"><span>3</span></Link></li>
                                        <li><Link href="/" className="next"><span>Next</span><i className="fa-regular fa-arrow-right"></i></Link></li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div> */}
        </div>
      </div>
    </>
  );
}
