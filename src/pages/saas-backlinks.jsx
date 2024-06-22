import FooterOne from "@/common/footer/FooterOne";
import HeaderOne from "@/common/header/HeaderOne";
import SEO from "@/common/seo/Seo";
import AboutOne from "@/components/about/AboutOne";
import AboutTwo from "@/components/about/AboutTwo";
import BrandOne from "@/components/brand/BrandOne";
import IntegrationsOne from "@/components/integrations/IntegrationsOne";
import PortfolioOne from "@/components/portfolio/PortfolioOne";
import PricingOne from "@/components/pricing/PricingOne";
import QuoteFormTwo from "@/components/quote-form/QuoteFormTwo";
import TestimonialTwo from "@/components/testimonial/TestimonialTwo";
import Link from "next/link";
import React from "react";
import Accordion from "react-bootstrap/Accordion";

const SaasBacklinks = () => {
  return (
    <div>
      <SEO pageTitle={"Saas Backlinks"} />
      <HeaderOne />
      <div className="about-two pt-80 pb-80 bg-grey">  
        <div className="about-two__wrapper position-relative">
          <div className="about-two-img-animation2">
            <img src="/assets/img/shape/2.svg" alt="shape" />
          </div>
          <div className="about-two-img-animation3">
            <img src="/assets/img/shape/1.svg" alt="shape" />
          </div>
          <div className="about-two-img-animation4">
            <img src="/assets/img/shape/3.svg" alt="shape" />
          </div>
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xxl-6 col-xl-6 col-lg-6">
                <div className="about-two__content wow fadeInUp">
                  <div className="mb-30">
                    <h2 className="about-two__title mb-10">
                    Stay On Top With Our SaaS Link Building Service
                    </h2>
                    <p>
                    Get high quality SaaS backlinks to stay ahead of your competitors in the SaaS industry with our link building service. Make your business stand out in a highly competitive SaaS market and claim top search positions for highly competitive SaaS keywords.
                    </p>
                  </div>
                  <div className="about-two__info-list  ">
                    {/* <ul>
                      <li>High Quality Links</li>
                      <li>Top Blogs in Your Niche </li>
                      <li>Specialized team of experts </li>
                    </ul> */}
                    <Link
                      href={"/contact"}
                      className="cta-one__btn wow fadeInUp"
                    >
                    Get SaaS Links
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-xxl-6 col-xl-6 col-lg-6">
                <div
                  className="about-two__img text-end wow fadeInUp"
                  data-wow-delay=".3s"
                >
                  <div className="about-two__img-animation1">
                    <img src="/assets/img/shape/star.svg" alt="star shape" />
                  </div>
                  <img
                    src="/assets/img/banner-new.png"
                    alt="about img"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <BrandOne />

      <TestimonialTwo />

      <IntegrationsOne />

     
      
      <div className="pricing-page-header pt-50 pb-40">
        {/* <div className="pricing-page-header__bg"></div> */}
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="page-header__wrapper">
                <div className="page-header__content text-center">
                  <h2>
                  SaaS Backlinks Pricing</h2>
                  <p className="heading-p">
                  No Retainer, Cancel Anytime
                  </p>
                  <div className="pricing-navigation mt-35">
                    <div className="tab-one__tabs tabs-box">
                      {/* Start Tab */}
                      <div className="tab active-tab" id="monthly">
                        <div className="row clearfix row-gap-4 justify-content-center">
                          <div className="col-xxl-4 col-xl-4 col-xl-4 col-md-12 col-sm-12">
                            <div className="pricing-plan-one__single mb-30 text-start">
                              {/* <div className="pricing-badge">Most Popular</div> */}
                              <div className="pricing-header">
                                <span>Lite</span>
                                <h2>
                                  $2299<span>/ Monthly</span>
                                </h2>
                              </div>
                              <div className="pricing-feature-list">
                                <ul>
                                  <li>
                                    <i className="fa-sharp fa-solid fa-circle-check"></i>
                                    4 Links Per Month
                                  </li>
                                  <li>
                                    <i className="fa-sharp fa-solid fa-circle-check"></i>
                                    DR 60-69: 2 Links
                                  </li>
                                  <li>
                                    <i className="fa-sharp fa-solid fa-circle-check"></i>
                                    DR 70-79: 2 Links
                                  </li>
                                  <li>
                                    <i className="fa-sharp fa-solid fa-circle-check"></i>
                                    SERP Tracking

                                  </li>
                                  <li>
                                    <i className="fa-sharp fa-solid fa-circle-check"></i>
                                    Backlink Analysis
                                  </li>
                                  <li>
                                    <i className="fa-sharp fa-solid fa-circle-check"></i>
                                    2 to 4 Weeks TAT
                                  </li>
                                  
                                </ul>
                               
                              </div>
                              <div className="pricing-btn">
                                <Link href="/contact" className="rr-bounce-up">
                                    Order Now!	
                                  <i className="fa-regular fa-arrow-right"></i>
                                </Link>
                              </div>
                            </div>
                          </div>

                          <div className="col-xxl-4 col-xl-4 col-xl-4 col-md-12 col-sm-12">
                            <div className="pricing-plan-one__single mb-30 text-start">
                              {/* <div className="pricing-badge">Most Popular</div> */}
                              <div className="pricing-header">
                                <span>Intermediate</span>
                                <h2>
                                  $3699<span>/ Monthly</span>
                                </h2>
                              </div>
                              <div className="pricing-feature-list">
                                <ul>
                                  <li>
                                    <i className="fa-sharp fa-solid fa-circle-check"></i>
                                    6 Links Per Month
                                  </li>
                                  <li>
                                    <i className="fa-sharp fa-solid fa-circle-check"></i>
                                    DR 60-69: 3 Links
                                  </li>
                                  <li>
                                    <i className="fa-sharp fa-solid fa-circle-check"></i>
                                    DR 70-79: 3 Links
                                  </li>
                                  <li>
                                    <i className="fa-sharp fa-solid fa-circle-check"></i>
                                    SERP Tracking

                                  </li>
                                  <li>
                                    <i className="fa-sharp fa-solid fa-circle-check"></i>
                                    Backlink Analysis
                                  </li>
                                  <li>
                                    <i className="fa-sharp fa-solid fa-circle-check"></i>
                                    2 to 4 Weeks TAT
                                  </li>
                                  
                                </ul>
                               
                              </div>
                              <div className="pricing-btn">
                                <Link href="/contact" className="rr-bounce-up">
                                    Order Now!	
                                  <i className="fa-regular fa-arrow-right"></i>
                                </Link>
                              </div>
                            </div>
                          </div>


                          <div className="col-xxl-4 col-xl-4 col-xl-4 col-md-12 col-sm-12">
                            <div className="pricing-plan-one__single mb-30 text-start">
                              <div className="pricing-badge">Most Popular</div>
                              <div className="pricing-header">
                                <span>Advanced</span>
                                <h2>
                                  $4999<span>/ Monthly</span>
                                </h2>
                              </div>
                              <div className="pricing-feature-list">
                                <ul>
                                  <li>
                                    <i className="fa-sharp fa-solid fa-circle-check"></i>
                                    8 Links Per Month
                                  </li>
                                  <li>
                                    <i className="fa-sharp fa-solid fa-circle-check"></i>
                                    DR 60-69: 4 Links
                                  </li>
                                  <li>
                                    <i className="fa-sharp fa-solid fa-circle-check"></i>
                                    DR 70-79: 3 Links
                                  </li>
                                  <li>
                                    <i className="fa-sharp fa-solid fa-circle-check"></i>
                                    DR 80-84: 1 Link

                                  </li>
                                  <li>
                                    <i className="fa-sharp fa-solid fa-circle-check"></i>
                                    SERP Tracking
                                  </li>
                                  <li>
                                    <i className="fa-sharp fa-solid fa-circle-check"></i>
                                    Backlink Analysis
                                  </li>
                                  <li>
                                    <i className="fa-sharp fa-solid fa-circle-check"></i>
                                    2 to 4 Weeks TAT
                                  </li>
                                  
                                </ul>
                               
                              </div>
                              <div className="pricing-btn">
                                <Link href="/contact" className="rr-bounce-up">
                                    Order Now!	
                                  <i className="fa-regular fa-arrow-right"></i>
                                </Link>
                              </div>
                            </div>
                          </div>


                          <div className="col-xxl-4 col-xl-4 col-xl-4 col-md-12 col-sm-12">
                            <div className="pricing-plan-one__single mb-30 text-start">
                              {/* <div className="pricing-badge">Most Popular</div> */}
                              <div className="pricing-header">
                                <span>Expert
                                </span>
                                <h2>
                                  $6999<span>/ Monthly</span>
                                </h2>
                              </div>
                              <div className="pricing-feature-list">
                                <ul>
                                  <li>
                                    <i className="fa-sharp fa-solid fa-circle-check"></i>
                                    10 Links Per Month
                                  </li>
                                  <li>
                                    <i className="fa-sharp fa-solid fa-circle-check"></i>
                                    DR 60-69: 5 Links
                                  </li>
                                  <li>
                                    <i className="fa-sharp fa-solid fa-circle-check"></i>
                                    DR 70-79: 3 Links
                                  </li>
                                  <li>
                                    <i className="fa-sharp fa-solid fa-circle-check"></i>
                                    DR 80-89: 2 Link

                                  </li>
                                  <li>
                                    <i className="fa-sharp fa-solid fa-circle-check"></i>
                                    SERP Tracking
                                  </li>
                                  <li>
                                    <i className="fa-sharp fa-solid fa-circle-check"></i>
                                    Backlink Analysis
                                  </li>
                                  <li>
                                    <i className="fa-sharp fa-solid fa-circle-check"></i>
                                    3 to 5 Weeks TAT

                                  </li>
                                  
                                </ul>
                               
                              </div>
                              <div className="pricing-btn">
                                <Link href="/contact" className="rr-bounce-up">
                                    Order Now!	
                                  <i className="fa-regular fa-arrow-right"></i>
                                </Link>
                              </div>
                            </div>
                          </div>


                          <div className="col-xxl-4 col-xl-4 col-xl-4 col-md-12 col-sm-12">
                            <div className="pricing-plan-one__single mb-30 text-start">
                              {/* <div className="pricing-badge">Most Popular</div> */}
                              <div className="pricing-header">
                                <span>Dominate
                                </span>
                                <h2>
                                  $9999<span>/ Monthly</span>
                                </h2>
                              </div>
                              <div className="pricing-feature-list">
                                <ul>
                                  <li>
                                    <i className="fa-sharp fa-solid fa-circle-check"></i>
                                    14 links Per Month
                                  </li>
                                  <li>
                                    <i className="fa-sharp fa-solid fa-circle-check"></i>
                                    DR 60-69: 6 Links
                                  </li>
                                  <li>
                                    <i className="fa-sharp fa-solid fa-circle-check"></i>
                                    DR 70-79: 5 Links
                                  </li>
                                  <li>
                                    <i className="fa-sharp fa-solid fa-circle-check"></i>
                                    DR 80-84: 2 Links

                                  </li>
                                  <li>
                                    <i className="fa-sharp fa-solid fa-circle-check"></i>
                                    DR 85-95: 1 Links

                                  </li>
                                  <li>
                                    <i className="fa-sharp fa-solid fa-circle-check"></i>
                                    SERP Tracking
                                  </li>
                                  <li>
                                    <i className="fa-sharp fa-solid fa-circle-check"></i>
                                    Backlink Analysis

                                  </li>
                                  <li>
                                    <i className="fa-sharp fa-solid fa-circle-check"></i>
                                    2 to 5 Weeks TAT
                                  </li>
                                  
                                </ul>
                               
                              </div>
                              <div className="pricing-btn">
                                <Link href="/contact" className="rr-bounce-up">
                                    Order Now!	
                                  <i className="fa-regular fa-arrow-right"></i>
                                </Link>
                              </div>
                            </div>
                          </div>


                          
                        </div>
                      </div>
                      {/* End Tab */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>



      
      <div className="about-two pt-0 pb-80">
        <div className="about-two__wrapper position-relative">
          <div className="about-two-img-animation2">
            <img src="/assets/img/shape/2.svg" alt="shape" />
          </div>
          <div className="about-two-img-animation3">
            <img src="/assets/img/shape/1.svg" alt="shape" />
          </div>
          <div className="about-two-img-animation4">
            <img src="/assets/img/shape/3.svg" alt="shape" />
          </div>
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xxl-6 col-xl-6 col-lg-6">
                <div className="about-two__content wow fadeInUp">
                  <div className="mb-30">
                    <h2 className="about-two__title mb-10">
                    Advantages of Using Our SaaS Link Building Service
                    </h2>
                    <p>
                    We prioritize the use of white hat link-building practices as a key component of our digital marketing services. Rather than focusing on sheer quantity, we put the quality of the backlinks we acquire first in order to drive effective and successful results. 
                    </p>
                    <p>To achieve this, we employ an ethical approach to link-building through outreach and content creation, ensuring that your website is featured on high-quality, relevant websites within your industry. As a result, your website's search ranking and traffic will grow tremendously, allowing you to outrank your competitors at a faster pace</p>
                  </div>
                  {/* <div className="about-two__info-list  ">
                    <ul>
                      <li> Client requirements</li>
                      <li> Content presentation </li>
                      <li> Quality and quantity of links </li>
                      <li> Post publication analysis </li>
                    </ul>
                    <Link
                      href={"/contact"}
                      className="cta-one__btn wow fadeInUp"
                    >
                      Get Links Today
                    </Link>
                  </div> */}
                </div>
              </div>
              <div className="col-xxl-6 col-xl-6 col-lg-6">
                <div
                  className="about-two__img text-end wow fadeInUp"
                  data-wow-delay=".3s"
                >
                  <div className="about-two__img-animation1">
                    <img src="/assets/img/shape/star.svg" alt="star shape" />
                  </div>
                  <img
                    src="/assets/img/lin-instert-3.webp"
                    alt="about img"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="service-two pt-50 pb-0">
                <div className="container">
                    <div className="row">
                        <div className="d__column-two mb-60 wow fadeInUp justify-content-center text-center" data-wow-delay=".3s">
                            <div className="section-title__one">
                                <h2 className="section-title__one-title">What We Can Do For You? </h2>
                            </div>
                            {/* <div className="section-title__three-right">
                                <p className="section-title__three-tagline">Let our highly experienced link building professionals <br/> handle link building for you  so you don’t have to worry <br/> about anything.</p>
                            </div> */}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay=".3s">
                            <div className="service-two__single mb-30 bg-1">
                                {/* <div className="icon-box">
                                    <img src="/assets/img/services/link-building.png" alt="icon" />
                                </div> */}
                                <h3 className="service-two__single-title">High Domain Authority Backlinks</h3>
                                <p>Our extensive network of partnerships and relationships with top SaaS businesses make us your perfect companion for acquiring high authority SaaS backlinks.</p>
                                {/* <Link href="/service-details">Learn More <i className="fa-solid fa-arrow-right"></i></Link> */}
                            </div>
                        </div>
                        <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay=".5s">
                            <div className="service-two__single mb-30 bg-2">
                                {/* <div className="icon-box">
                                    <img src="/assets/img/services/service-two-2.svg" alt="icon" />
                                </div> */}
                                <h3 className="service-two__single-title">	Take Your SaaS Business To The Next Level</h3>
                                <p>By targeting intent focused keywords, we help your SaaS brands scale new heights. Increase brand exposure and generate more organic traffic and conversions</p>
                                {/* <Link href="/service-details">Learn More <i className="fa-solid fa-arrow-right"></i></Link> */}
                            </div>
                        </div>
                        <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay=".7s">
                            <div className="service-two__single mb-30 bg-3">
                                {/* <div className="icon-box">
                                    <img src="/assets/img/services/service-two-3.svg" alt="icon" />
                                </div> */}
                                <h3 className="service-two__single-title">Get Ahead of Your Competitors</h3>
                                <p>Outrank your competitors with highly authoritative SaaS backlinks from big names in the industry and increase your brand credibility</p>
                                {/* <Link href="/service-details">Learn More <i className="fa-solid fa-arrow-right"></i></Link> */}
                            </div>
                        </div>

                    </div>
                </div>
        </div>

        <div className="about-two pt-80 pb-80">
        <div className="about-two__wrapper position-relative">
          <div className="about-two-img-animation2">
            <img src="/assets/img/shape/2.svg" alt="shape" />
          </div>
          <div className="about-two-img-animation3">
            <img src="/assets/img/shape/1.svg" alt="shape" />
          </div>
          <div className="about-two-img-animation4">
            <img src="/assets/img/shape/3.svg" alt="shape" />
          </div>
          <div className="container">
            <div className="row align-items-center">
            <div className="col-xxl-6 col-xl-6 col-lg-6">
                <div
                  className="about-two__img text-end wow fadeInUp"
                  data-wow-delay=".3s"
                >
                  <div className="about-two__img-animation1">
                    <img src="/assets/img/shape/star.svg" alt="star shape" />
                  </div>
                  <img
                    src="/assets/img/lin-instert-2.webp"
                    alt="about img"
                  />
                </div>
              </div>

              <div className="col-xxl-6 col-xl-6 col-lg-6">
                <div className="about-two__content wow fadeInUp">
                  <div className="mb-30">
                    <h2 className="about-two__title mb-10">
                    Let’s Make Your Business The SaaS Industry Leader
                    </h2>
                    <p>
                    We follow the tried and tested approaches to link building which allows us to position your SaaS business as a dominant force in your industry.
                    </p> 
                  </div>
                  <div className="about-two__info-list  ">
                    {/* <ul>
                      <li> Client requirements</li>
                      <li> Content presentation </li>
                      <li> Quality and quantity of links </li>
                      <li> Post publication analysis </li>
                    </ul> */}
                    <Link
                      href={"/contact"}
                      className="cta-one__btn wow fadeInUp"
                    >
                      Get SaaS Links
                    </Link>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </div>                         


    <QuoteFormTwo/>
      <FooterOne />
    </div>
  );
};

export default SaasBacklinks;
