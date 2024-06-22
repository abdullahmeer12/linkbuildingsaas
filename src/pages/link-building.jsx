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

const BloggerOutreach = () => {
  return (
    <div>
      <SEO pageTitle={"Link Building Service "} />
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
                    Link Building Service You Can Trust
                    </h2>
                    <p>
                    Get ahead of your competitors and retain the top spot with our link building services.
                    </p>
                  </div>
                  <div className="about-two__info-list  ">
                    <ul>
                      <li>Relevancy</li>
                      <li>Focus on Quality </li>
                      <li>No Shady Tactics </li>
                      <li>Link Building Specialists </li>
                    </ul>
                    <Link
                      href={"/contact"}
                      className="cta-one__btn wow fadeInUp"
                    >
                      Get Links Today
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
                    src="/assets/img/about/about-img-3.jpg"
                    alt="about img"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <BrandOne/>

      <TestimonialTwo />
      <IntegrationsOne />
      <div className="about-two pt-80 pb-0">
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
                    Proven Approach That Delivers Organic Results
                    </h2>
                    <p>
                    Link building is one of the most important ranking factors to rank on search engines. Our link building service helps you collect high quality links from top publications in your niche. This not only boosts your brand’s authority but also helps it build a strong link building profile. 
                    </p>
                    <p>Both of which increase your chances of showing up on top of search results. Your website not only gets more traffic thanks to higher keyword rankings. We help your business in cementing your place as an industry leader and get all the limelight your business needs to succeed in today’s digital world.</p>
                  </div>
                  <div className="about-two__info-list  ">
                    {/* <ul>
                      <li>Relevant Content</li>
                      <li>Impactful Links </li>
                      <li>Secure Placement </li>
                    </ul> */}
                    <Link href={"/contact"} className='cta-one__btn wow fadeInUp'>Get Links Today</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="about-two pt-80 pb-0">
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
                    Why Invest In Link Building?
                    </h2>
                    <p>
                    Search engine algorithms change constantly but there are certain things that remain the same. Link building is one of them. Despite the evolution of search engine algorithms, backlinks are still an important ranking factor search engines use to rank websites. The more quality links your website has, the more trustworthy search engines would consider it. There is a strong correlation between the number of backlinks and higher search engine rankings.
                    </p>
                    <p>We focus on quality, authority and relevance to help you get the best out of your link building investments. With fewer high authoritative backlinks built consistently through a proven process, your website will skyrocket to the top of search results.</p>
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

              <div className="col-xxl-6 col-xl-6 col-lg-6">
                <div
                  className="about-two__img text-end wow fadeInUp"
                  data-wow-delay=".3s"
                >
                  {/* <div className="about-two__img-animation1">
                    <img src="/assets/img/shape/star.svg" alt="star shape" />
                  </div> */}
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
        

      <div className="service-three pt-50 pb-120">
        <div className="container">
          <div className="row">
            <div
              className="col-xl-12 text-center mb-50 wow fadeInUp"
              data-wow-delay=".3s"
            >
              <h2 className="section-title__two-title">
              Link Building Services <br />  That Delivers Desired Results  
              </h2>
            </div>
          </div>
          <div className="row row-stretch">
            <div
              className="col-xxl-4 col-xl-4 col-lg-4 col-md-12 col-sm-12 wow fadeInUp"
              data-wow-delay={0.3}
            >
              <div className="service-three__single mb-30">
                <h3>Backlinks From Top Publications In Your Niche</h3>
                <p>
                Get featured on top publications in your industry and get your brand in front of the right audience.
                </p>
                <span>01.</span>
              </div>
            </div>

            <div
              className="col-xxl-4 col-xl-4 col-lg-4 col-md-12 col-sm-12 wow fadeInUp"
              data-wow-delay={0.3}
            >
              <div className="service-three__single mb-30">
                <h3>Harnessing The Power of Content Marketing</h3>
                <p>
                We create an editorial and content marketing strategy to craft content that both humans and search engines love.
                </p>
                <span>02.</span>
              </div>
            </div>

            <div
              className="col-xxl-4 col-xl-4 col-lg-4 col-md-12 col-sm-12 wow fadeInUp"
              data-wow-delay={0.3}
            >
              <div className="service-three__single mb-30">
                <h3>Effective Outreach Process</h3>
                <p>
                Unlike others who use shady tactics for acquiring links, we conduct manual outreach that deliver consistent results.
                </p>
                <span>03.</span>
              </div>
            </div>

            <div
              className="col-xxl-4 col-xl-4 col-lg-4 col-md-12 col-sm-12 wow fadeInUp"
              data-wow-delay={0.3}
            >
              <div className="service-three__single mb-30">
                <h3>Boosting ROI With Highly Targeted Traffic</h3>
                <p>
                We help you attract relevant, high intent traffic to your website which is easier to convert to increase your bottom line.
                </p>
                <span>04.</span>
              </div>
            </div>

            
          </div>
        </div>
      </div>


      <div className="service-two pt-0 pb-80">
                <div className="container">
                    <div className="row">
                        <div className="d__column-two mb-60 wow fadeInUp justify-content-center" data-wow-delay=".3s">
                            <div className="section-title__one">
                                <h2 className="section-title__one-title">How We Build Links?</h2>
                            </div>
                             
                        </div>
                    </div>
                    <div className="row align-items-stretch row-gap-4">
                        <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay=".3s">
                            <div className="service-two__single mb-30 bg-1">
                                {/* <div className="icon-box">
                                    <img src="/assets/img/services/link-building.png" alt="icon" />
                                </div> */}
                                <h3 className="service-two__single-title">Link Prospecting</h3>
                                <p>With a quality over quantity approach, we reach out to authoritative industry specific websites and highly influential industry bloggers to get your brand featured on their websites. </p>
                                {/* <Link href="/service-details">Learn More <i className="fa-solid fa-arrow-right"></i></Link> */}
                            </div>
                        </div>
                        <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay=".5s">
                            <div className="service-two__single mb-30 bg-2">
                                 
                                <h3 className="service-two__single-title">Editorial Calendar</h3>
                                <p>We carefully design an editorial calendar for your website so your users will get a continuous stream of helpful content that will keep your brand on top of their minds.</p>
                                {/* <Link href="/service-details">Learn More <i className="fa-solid fa-arrow-right"></i></Link> */}
                            </div>
                        </div>
                        <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay=".7s">
                            <div className="service-two__single mb-30 bg-3">
                                {/* <div className="icon-box">
                                    <img src="/assets/img/services/service-two-3.svg" alt="icon" />
                                </div> */}
                                <h3 className="service-two__single-title">Content Publication</h3>
                                <p>We submit the content for publication and work together with editors to give it the finishing touches before the content can go live on their website.</p>
                                {/* <Link href="/service-details">Learn More <i className="fa-solid fa-arrow-right"></i></Link> */}
                            </div>
                        </div>

                        <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay=".7s">
                            <div className="service-two__single mb-30 bg-1">
                                <div className="icon-box">
                                    <img src="/assets/img/services/backlink.png" alt="icon" />
                                </div>
                                <h3 className="service-two__single-title">Reporting</h3>
                                <p>Our link building service keeps you updated with the SERP analysis dashboard. We Submit a report showing the progress made after our link building efforts.</p>
                                {/* <Link href="/service-details">Learn More <i className="fa-solid fa-arrow-right"></i></Link> */}
                            </div>
                        </div>
 
                    </div>
                </div>
      </div>

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
                                        Target The Right Audience</Accordion.Header>
                                        <Accordion.Body>
                                            <div className="accrodion-content">
                                                <div className="text">
                                                <p className='color-white'>We focus on helping your business rank for the right keywords so you can attract the right audience for your website.</p>
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
                                        Boost Search Rankings</Accordion.Header>
                                        <Accordion.Body>
                                            <div className="accrodion-content">
                                                <div className="text">
                                                <p className='color-white'>See your organic rankings grow with consistent backlinks from highly authoritative websites in your niche.</p>
                                                </div>
                                            </div>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="2">
                                        <Accordion.Header>
                                        Generate More Revenue</Accordion.Header>
                                        <Accordion.Body>
                                            <div className="accrodion-content">
                                                <div className="text">
                                                    <p className='color-white'>Turn your website into a revenue generation machine by showing up on top of search engine results.</p>
                                                </div>
                                            </div>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="3">
                                        <Accordion.Header>
                                        Personalized Campaigns </Accordion.Header>
                                        <Accordion.Body>
                                            <div className="accrodion-content">
                                                <div className="text">
                                                    <p className='color-white'>We launch custom link building campaigns to help your business gain a competitive advantage.</p>
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


      <div className="service-three pt-50 pb-120">
        <div className="container">
          <div className="row">
            <div
              className="col-xl-12 text-center mb-50 wow fadeInUp"
              data-wow-delay=".3s"
            >
              <h2 className="section-title__two-title">
              What Makes Us Special? 
              </h2>
            </div>
          </div>
          <div className="row row-stretch">
            <div
              className="col-xxl-4 col-xl-4 col-lg-4 col-md-12 col-sm-12 wow fadeInUp"
              data-wow-delay={0.3}
            >
              <div className="service-three__single mb-30">
                <h3>Keyword Analysis</h3>
                <p>
                Our SEO experts help you choose the right keywords in terms of volume but also difficulty so your business can attract more traffic without waiting for years.
                </p>
                <span>01.</span>
              </div>
            </div>

            <div
              className="col-xxl-4 col-xl-4 col-lg-4 col-md-12 col-sm-12 wow fadeInUp"
              data-wow-delay={0.3}
            >
              <div className="service-three__single mb-30">
                <h3>Advanced Tools</h3>
                <p>
                Gain access to sophisticated tools that will help you extract useful insights and launch highly targeted campaigns which drive results.
                </p>
                <span>02.</span>
              </div>
            </div>

            <div
              className="col-xxl-4 col-xl-4 col-lg-4 col-md-12 col-sm-12 wow fadeInUp"
              data-wow-delay={0.3}
            >
              <div className="service-three__single mb-30">
                <h3>Network of Partner</h3>
                <p>
                Our extensive network of partners include top publications, websites and bloggers from a wide range of different industries.
                </p>
                <span>03.</span>
              </div>
            </div>

            <div
              className="col-xxl-4 col-xl-4 col-lg-4 col-md-12 col-sm-12 wow fadeInUp"
              data-wow-delay={0.3}
            >
              <div className="service-three__single mb-30">
                <h3>Tracking Dashboard</h3>
                <p>
                Track the progress of your link building campaigns using the dashboard that let you see everything in real time. 
                </p>
                <span>04.</span>
              </div>
            </div>

            <div
              className="col-xxl-4 col-xl-4 col-lg-4 col-md-12 col-sm-12 wow fadeInUp"
              data-wow-delay={0.3}
            >
              <div className="service-three__single mb-30">
                <h3>Customer Satisfaction</h3>
                <p>
                Our post delivery service goes above and beyond to delight users and satisfy them to the fullest.
                </p>
                <span>05.</span>
              </div>
            </div>

            
          </div>
        </div>
      </div>

      

       


    <section className="simple-text-sec pb-80">
        <div className="container">
            <div className="row">
                <div className="col-md-10 cnterCol">
                    <h2  >Why Should You Choose Us?</h2> 
                    <ul>
                        <li><p><strong>Internal Content Creation </strong>Our team of in house writers crafts reader friendly and value centric content that both search engines and humans will fall in love with. </p></li>

                        <li><p><strong>No Shady Tactics </strong>We only use tried and tested tactics for link building so your business won’t have to worry about your links getting removed or altered.</p></li>

                        <li><p><strong>Prioritize Customers Needs </strong>We go above and beyond when it comes to satisfying customer needs so they are delighted with our link building service.</p></li>

                        <li><p><strong>No Compromise on Quality </strong>Instead of casting a wider net, we only target websites which are relevant and highly influential in your industry for link building outreach.</p></li>

                        <li><p><strong>Secure Top Spot On SERPs </strong>Grab the spot your brand deserves on search engines, maintain and extend your dominance as an industry leader with our result centric link building services.</p></li>

                       
                         
                    </ul>
                </div>
            </div>
        </div>
    </section>
    <QuoteFormTwo/>
      <FooterOne />
    </div>
  );
};

export default BloggerOutreach;
