import FooterOne from "@/common/footer/FooterOne";
import HeaderOne from "@/common/header/HeaderOne";
import SEO from "@/common/seo/Seo";
import AboutOne from "@/components/about/AboutOne";
import AboutTwo from "@/components/about/AboutTwo";
import PortfolioOne from "@/components/portfolio/PortfolioOne";
import PricingOne from "@/components/pricing/PricingOne";
import QuoteFormTwo from "@/components/quote-form/QuoteFormTwo";
import TestimonialTwo from "@/components/testimonial/TestimonialTwo";
import Link from "next/link";
import React from "react";
import Accordion from "react-bootstrap/Accordion";

const CountrySpecific = () => {
  return (
    <div>
      <SEO pageTitle={"Country Specific"} />
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
                    Country Specific Backlinks At Your Fingertips
                    </h2>
                    <p>
                    Enhance your global online presence and reach a wider audience with customized country-specific link building.
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
                     Get Country Specific Links
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-xxl-6 col-xl-6 col-lg-6">
                <div
                  className="about-two__img text-end wow fadeInUp"
                  data-wow-delay=".3s"
                >
                  {/* <div className="about-two__img-animation1">
                    <img src="/assets/img/specific-1.webp" alt="star shape" />
                  </div> */}
                  <img
                    src="/assets/img/specific-1.webp"
                    alt="about img"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="about-two  pb-80">
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
                  {/* <div className="about-two__img-animation1">
                    <img src="/assets/img/shape/star.svg" alt="star shape" />
                  </div> */}
                  <img
                    src="/assets/img/specific-2.jpg"
                    alt="about img"
                  />
                </div>
              </div>

              <div className="col-xxl-6 col-xl-6 col-lg-6">
                <div className="about-two__content wow fadeInUp">
                  <div className="mb-30">
                    {/* <h2 className="about-two__title mb-10">
                      Reach Out To Top Bloggers In Your Niche
                    </h2> */}
                    <p>
                    Our team of expert outreach specialists creates unique international, multilingual link building campaigns to give your business a competitive edge in the global market.
                    </p>
                    <p>Increasing online revenue for your business relies on increasing traffic to your website. Link building is a crucial aspect of an effective SEO marketing strategy that helps you climb search rankings and attract targeted visitors. However, if your business is global and targets international audiences and markets, simply implementing an SEO strategy may not be sufficient Our team of blogger outreach specialists designs customized international multilingual link building campaigns to give your business a global advantage.</p>
                  </div>
                  <div className="about-two__info-list  ">
                    {/* <ul>
                      <li>Relevant Content</li>
                      <li>Impactful Links </li>
                      <li>Secure Placement </li>
                    </ul> */}
                    {/* <Link href={"/contact"} className='cta-one__btn wow fadeInUp'>Get Links Today</Link> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="service-two pt-0 pb-0">
                <div className="container">
                    <div className="row">
                        <div className="d__column-two mb-60 wow fadeInUp justify-content-center text-center" data-wow-delay=".3s">
                            <div className="section-title__one">
                                <h2 className="section-title__one-title">Why Choose Us For <br></br> Country-Specific Backlinks?</h2>
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
                                <h3 className="service-two__single-title">Reach More Customers</h3>
                                <p>Expand your business reach to new customers around the world through improved search visibility</p>
                                {/* <Link href="/service-details">Learn More <i className="fa-solid fa-arrow-right"></i></Link> */}
                            </div>
                        </div>
                        <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay=".5s">
                            <div className="service-two__single mb-30 bg-2">
                                {/* <div className="icon-box">
                                    <img src="/assets/img/services/service-two-2.svg" alt="icon" />
                                </div> */}
                                <h3 className="service-two__single-title">	Develop Global Presence</h3>
                                <p>Establish your business website in search results for queries from around the globe</p>
                                {/* <Link href="/service-details">Learn More <i className="fa-solid fa-arrow-right"></i></Link> */}
                            </div>
                        </div>
                        <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay=".7s">
                            <div className="service-two__single mb-30 bg-3">
                                {/* <div className="icon-box">
                                    <img src="/assets/img/services/service-two-3.svg" alt="icon" />
                                </div> */}
                                <h3 className="service-two__single-title">Content Creation in Multiple Languages</h3>
                                <p>Publish multilingual content to cater to a diverse group of customers who speak different languages</p>
                                {/* <Link href="/service-details">Learn More <i className="fa-solid fa-arrow-right"></i></Link> */}
                            </div>
                        </div>

                    </div>
                </div>
            </div>


      <div className="pricing-page-header pt-50 pb-40">
        {/* <div className="pricing-page-header__bg"></div> */}
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="page-header__wrapper">
                <div className="page-header__content text-center">
                  <h2>Our Country Specific Outreach Pricing Plans</h2>
                  <div className="pricing-navigation mt-35">
                    <div className="tab-one__tabs tabs-box">
                      {/* Start Tab */}
                      <div className="tab active-tab" id="monthly">
                        <div className="row clearfix row-gap-4 justify-content-center">
                          <div className="col-xxl-4 col-xl-4 col-xl-4 col-md-12 col-sm-12">
                            <div className="pricing-plan-one__single mb-30 text-start"> 
                              <div className="pricing-header">
                                <span>DR 20+
                                </span> 
                                <h2>
                                  $199 
                                </h2>
                              </div>
                              <div className="pricing-feature-list">
                                <ul>
                                  <li>
                                    <i className="fa-sharp fa-solid fa-circle-check"></i>
                                    Ahrefs DR 30+
                                  </li>
                                  <li>
                                    <i className="fa-sharp fa-solid fa-circle-check"></i>
                                    Multilingual Content
                                  </li>
                                  <li>
                                    <i className="fa-sharp fa-solid fa-circle-check"></i>
                                    750+ Words Content
                                  </li>
                                  <li>
                                    <i className="fa-sharp fa-solid fa-circle-check"></i>
                                    1Keyword/Target URL
                                  </li>
                                  <li>
                                    <i className="fa-sharp fa-solid fa-circle-check"></i>
                                    Niche Relevant
                                  </li>
                                  <li>
                                    <i className="fa-sharp fa-solid fa-circle-check"></i>
                                    Manual Outreaching
                                  </li>
                                  <li>
                                    <i className="fa-sharp fa-solid fa-circle-check"></i>
                                    20 days Turnaround Time
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
                                <span>DR 30+
                                </span> 
                                <h2>
                                  $299 
                                </h2>
                              </div>
                              <div className="pricing-feature-list">
                                <ul>
                                  <li>
                                    <i className="fa-sharp fa-solid fa-circle-check"></i>
                                    Ahrefs DR 40+
                                  </li>
                                  <li>
                                    <i className="fa-sharp fa-solid fa-circle-check"></i>
                                    Multilingual Content
                                  </li>
                                  <li>
                                    <i className="fa-sharp fa-solid fa-circle-check"></i>
                                    750+ Words Content
                                  </li>
                                  <li>
                                    <i className="fa-sharp fa-solid fa-circle-check"></i>
                                    1Keyword/Target URL
                                  </li>
                                  <li>
                                    <i className="fa-sharp fa-solid fa-circle-check"></i>
                                    Niche Relevant
                                  </li>
                                  <li>
                                    <i className="fa-sharp fa-solid fa-circle-check"></i>
                                    Manual Outreaching
                                  </li>
                                  <li>
                                    <i className="fa-sharp fa-solid fa-circle-check"></i>
                                    20 days Turnaround Time
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
                              <div className="pricing-header">
                                <span>DR 40+
                                </span> 
                                <h2>
                                  $399 
                                </h2>
                              </div>
                              <div className="pricing-feature-list">
                                <ul>
                                  <li>
                                    <i className="fa-sharp fa-solid fa-circle-check"></i>
                                    Ahrefs DR 50+
                                  </li>
                                  <li>
                                    <i className="fa-sharp fa-solid fa-circle-check"></i>
                                    Multilingual Content
                                  </li>
                                  <li>
                                    <i className="fa-sharp fa-solid fa-circle-check"></i>
                                    750+ Words Content
                                  </li>
                                  <li>
                                    <i className="fa-sharp fa-solid fa-circle-check"></i>
                                    1Keyword/Target URL
                                  </li>
                                  <li>
                                    <i className="fa-sharp fa-solid fa-circle-check"></i>
                                    Niche Relevant
                                  </li>
                                  <li>
                                    <i className="fa-sharp fa-solid fa-circle-check"></i>
                                    Manual Outreaching
                                  </li>
                                  <li>
                                    <i className="fa-sharp fa-solid fa-circle-check"></i>
                                    20 days Turnaround Time
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
                              <div className="pricing-header">
                                <span>DR 50+
                                </span> 
                                <h2>
                                  $499 
                                </h2>
                              </div>
                              <div className="pricing-feature-list">
                                <ul>
                                  <li>
                                    <i className="fa-sharp fa-solid fa-circle-check"></i>
                                    Ahrefs DR 60+
                                  </li>
                                  <li>
                                    <i className="fa-sharp fa-solid fa-circle-check"></i>
                                    Multilingual Content
                                  </li>
                                  <li>
                                    <i className="fa-sharp fa-solid fa-circle-check"></i>
                                    750+ Words Content
                                  </li>
                                  <li>
                                    <i className="fa-sharp fa-solid fa-circle-check"></i>
                                    1Keyword/Target URL
                                  </li>
                                  <li>
                                    <i className="fa-sharp fa-solid fa-circle-check"></i>
                                    Niche Relevant
                                  </li>
                                  <li>
                                    <i className="fa-sharp fa-solid fa-circle-check"></i>
                                    Manual Outreaching
                                  </li>
                                  <li>
                                    <i className="fa-sharp fa-solid fa-circle-check"></i>
                                    20 days Turnaround Time
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
                              <div className="pricing-header">
                                <span>DR 60+
                                </span> 
                                <h2>
                                  $549 
                                </h2>
                              </div>
                              <div className="pricing-feature-list">
                                <ul>
                                  <li>
                                    <i className="fa-sharp fa-solid fa-circle-check"></i>
                                    Ahrefs DR 70+
                                  </li>
                                  <li>
                                    <i className="fa-sharp fa-solid fa-circle-check"></i>
                                    Multilingual Content
                                  </li>
                                  <li>
                                    <i className="fa-sharp fa-solid fa-circle-check"></i>
                                    750+ Words Content
                                  </li>
                                  <li>
                                    <i className="fa-sharp fa-solid fa-circle-check"></i>
                                    1Keyword/Target URL
                                  </li>
                                  <li>
                                    <i className="fa-sharp fa-solid fa-circle-check"></i>
                                    Niche Relevant
                                  </li>
                                  <li>
                                    <i className="fa-sharp fa-solid fa-circle-check"></i>
                                    Manual Outreaching
                                  </li>
                                  <li>
                                    <i className="fa-sharp fa-solid fa-circle-check"></i>
                                    20 days Turnaround Time
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


      <div className="service-three pt-0 pb-120">
        <div className="container">
          <div className="row">
            <div
              className="col-xl-12 text-center mb-50 wow fadeInUp"
              data-wow-delay=".3s"
            >
              <h2 className="section-title__two-title">
                Our Country Specific <br /> Link Building Process 
              </h2>
              <p className="heading-p">We use a tried and tested formula to attract relevant country specific backlinks for your business.</p>
            </div>
          </div>
          <div className="row row-stretch">
            <div
              className="col-xxl-4 col-xl-4 col-lg-4 col-md-12 col-sm-12 wow fadeInUp"
              data-wow-delay={0.3}
            >
              <div className="service-three__single mb-30">
                <h3> 	Research</h3>
                <p>
                We conduct a comprehensive study of your industry, target country, competitors, and keywords to identify placements for outreach.
                </p>
                <span>01.</span>
              </div>
            </div>

            <div
              className="col-xxl-4 col-xl-4 col-lg-4 col-md-12 col-sm-12 wow fadeInUp"
              data-wow-delay={0.3}
            >
              <div className="service-three__single mb-30">
                <h3> 	Outreach</h3>
                <p>
                We build relationships with international influencers and bloggers to secure high-authority guest post placements in the target country with significant monthly organic traffic.
                </p>
                <span>02.</span>
              </div>
            </div>

            <div
              className="col-xxl-4 col-xl-4 col-lg-4 col-md-12 col-sm-12 wow fadeInUp"
              data-wow-delay={0.3}
            >
              <div className="service-three__single mb-30">
                <h3> 	Multilingual Content: </h3>
                <p>
                Our outreach team collaborates with proficient writers to produce compelling, well-written multilingual content for the guest posts.
                </p>
                <span>03.</span>
              </div>
            </div>

            <div
              className="col-xxl-4 col-xl-4 col-lg-4 col-md-12 col-sm-12 wow fadeInUp"
              data-wow-delay={0.3}
            >
              <div className="service-three__single mb-30">
                <h3> 	Publishing & Reporting: </h3>
                <p>
                We strive to achieve long-term, sustainable results through natural backlink profiles for your brand. As part of our process, we also provide detailed reporting that fully transparently illustrates our approach.
                </p>
                <span>04.</span>
              </div>
            </div>

            
          </div>
        </div>
      </div>

       {/* faq three start */}
       <div className="faq-three pt-0 pb-100">
                <div className="faq-three__animation-1">
                    <img src="/assets/img/shape/12.svg" alt="shape icon" />
                </div>
                <div className="faq-three__animation-2">
                    <img src="/assets/img/shape/13.svg" alt="shape icon" />
                </div>
                <div className="faq-three__animation-3">
                    <img src="/assets/img/shape/14.svg" alt="shape icon" />
                </div>
                <div className="faq-three__animation-4">
                    <img src="/assets/img/shape/arrow-circle-line-3.png" alt="shape icon" />
                </div>
                <div className="faq-three__animation-5">
                    <img src="/assets/img/shape/arrow-circle-line-4.png" alt="shape icon" />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-xxl-6 col-xl-6">
                            <div className="faq-three__faq">
                            {/* <h2 className='mb-30'>Ready To Secure The Top Spot on SERPs?</h2>    */}
                                <Accordion defaultActiveKey="0">
                                    <Accordion.Item eventKey="0" data-wow-delay=".3s">
                                        <Accordion.Header>
                                          	Choosing The Right Publisher</Accordion.Header>
                                        <Accordion.Body>
                                            <div className="accrodion-content">
                                                <div className="text">
                                                <p className='color-white'>Careful selection of link placements that align with the products or services being promoted, targeted location, and available budget</p>
                                                    {/* <div className="pricing-list">
                                                        <ul>
                                                            <li><i className="fa-light fa-check"></i>10k row search results</li>
                                                            <li><i className="fa-light fa-check"></i>10k row data exports</li>
                                                            <li><i className="fa-light fa-check"></i>100 domain overview PDF's</li>
                                                            <li><i className="fa-light fa-check"></i>6 months historical data</li>
                                                            <li><i className="fa-light fa-check"></i>250 sales leads & domain contacts</li>
                                                        </ul>
                                                    </div>
                                                    <div className="pricing-footer d__column-two">
                                                        <h5>$39 <span>/ Month</span></h5>
                                                        <Link href="/contact">Free Try <i className="fa-light fa-arrow-right"></i></Link>
                                                    </div> */}
                                                    
                                                </div>
                                            </div>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="1">
                                        <Accordion.Header>
                                          	Reaching Out To Publisher</Accordion.Header>
                                        <Accordion.Body>
                                            <div className="accrodion-content">
                                                <div className="text">
                                                <p className='color-white'>Direct communication and outreach with the target publisher in their local language, without intermediaries</p>
                                                </div>
                                            </div>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="2">
                                        <Accordion.Header>
                                          	Multilingual content production</Accordion.Header>
                                        <Accordion.Body>
                                            <div className="accrodion-content">
                                                <div className="text">
                                                    <p className='color-white'>High-impact, SEO-optimized foreign language content written by native writers</p>
                                                </div>
                                            </div>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="3">
                                        <Accordion.Header>
                                          	Comprehensive reporting: </Accordion.Header>
                                        <Accordion.Body>
                                            <div className="accrodion-content">
                                                <div className="text">
                                                    <p className='color-white'>A report containing complete information about the published links</p>
                                                </div>
                                            </div>
                                        </Accordion.Body>
                                    </Accordion.Item>

                                </Accordion>
                                                  
                            </div>
                        </div>
                        <div className="col-xxl-6 col-xl-6">
                            <div className="faq-three__content wow fadeInRight" data-wow-delay=".5s">
                                <h2 className="section-title__two-title mb-10">What We Can Do For You?</h2>
                                
                                <img src="/assets/img/faq/faq-3-1.png" alt="faq img" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* faq three end */}

     
      {/* faq start */}
      <div className="faq-one pt-0 pb-140">
        <div className="container">
          <div className="row">
            <div className="col-xxl-10 col-xl-10 col-lg-10 col-md-12 centerCol">
              <div className="faq-one__content">
                <div className="mb-50 text-center">
                  <h2 className="section-title__one-title  ">
                    Frequently Asked Questions
                  </h2>
                  <p className="heading-p">
                    Want to know more about our blogger outreach services? Your
                    questions, our answers!
                  </p>
                </div>
                <div className="faq-one__faq">
                  <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                      <Accordion.Header>
                      What is international link building?
                      </Accordion.Header>
                      <Accordion.Body>
                      Without any doubt, English is one of the widely spoken languages across the world. A majority of content on the internet is also in the language. But there is a massive proportion of the audience of people that do not speak or understand English. International link building is all about making your business visible to this part of the audience across international locations.
                      </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="1">
                      <Accordion.Header>
                      How does country-specific outreach works?
                      </Accordion.Header>
                      <Accordion.Body>
                      We have a dedicated team of experts who are capable of creating country targeted link building campaigns that connect you with a target audience in non-English speaking countries. These services essentially include creation of content in diverse languages and finding high-authority, niche-relevant placement sites, which can be effective for growing the size of your audience successfully.
                      </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="2">
                      <Accordion.Header>
                      How can country-specific link building boost your business?
                      </Accordion.Header>
                      <Accordion.Body>
                      Conventionally, businesses that sell internationally, focus only on the UK and US markets. But with international link building, there are much bigger opportunities as the audience size is no longer limited only to English-speaking countries. By having such a campaign into place, you can get ahead of the competitors and also propel the business growth.
                      </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="3">
                      <Accordion.Header>
                      Do you write fresh content or just translate?
                      </Accordion.Header>
                      <Accordion.Body>
                      Google does not impose penalties for creating duplicate content versions in different languages. But we still endeavor on producing fresh content for the international multilingual link building campaigns for our clients. Your content may be ranking well in the US or UK market, but it does not mean that it will do just as well when translated. You need to make sure that the content is optimized for the audience across different locations. This is possible only by producing fresh content, so that’s what we do for our clients.
                      </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="4">
                      <Accordion.Header>
                      Who works on international projects?
                      </Accordion.Header>
                      <Accordion.Body>
                      We have dedicated SEO experts who work with native speakers of the language of your choice. The aim is to create multilingual campaigns that deliver the results you want. Since we focus on building relationships with bloggers from different countries and writing in different languages, you can be certain about getting the benefits of a multilingual campaign quickly.
                      </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="5">
                      <Accordion.Header>
                      Which countries does your blogger outreach team target for multilingual link building services
                      </Accordion.Header>
                      <Accordion.Body>
                      As a part of our international multilingual link building services, our blogger outreach team works with high-DA sites in several countries across the globe. These include France, Spain, Italy, Mexico, Argentina, Germany, Singapore and Australia to name a few . With links from sites in different languages and blogs that originate in different parts of the world, you have the advantages of a wider reach and greater traffic.
                      </Accordion.Body>
                    </Accordion.Item>


                    <Accordion.Item eventKey="6">
                      <Accordion.Header>
                      Do You Guarantee Placements On Unique Sites For Every Order?
                      </Accordion.Header>
                      <Accordion.Body>
                      Yes, we do guarantee this. We ensure that domains are not duplicated for orders. We follow a unique system which enables us to keep track of each placement made for your account and make sure that the same site is never used again. We guarantee unique links every time you place an order.
                      </Accordion.Body>
                    </Accordion.Item>


                  </Accordion>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* faq end */}

    
    <QuoteFormTwo/>
      <FooterOne />
    </div>
  );
};

export default CountrySpecific;
