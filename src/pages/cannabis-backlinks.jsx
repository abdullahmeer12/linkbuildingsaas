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

const CannabisBacklinks = () => {
  return (
    <div>
      <SEO pageTitle={"Cannabis Backlinks"} />
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
                      Enhance Your Cannabis & CBD Website with High-Quality
                      Backlinks
                    </h2>
                    <p>
                      Attract targeted traffic and achieve high search engine
                      rankings with our specialized link-building services for
                      the cannabis and CBD industry.
                    </p>
                  </div>
                  <div className="about-two__info-list  ">
                    <Link
                      href={"/contact"}
                      className="cta-one__btn wow fadeInUp"
                    >
                      Get Cannabis Backlinks
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
                    <img src="/assets/img/shape/star.svg" alt="star shape" />
                  </div> */}
                  <img src="/assets/img/canabi-1.webp" alt="about img" />
                </div>
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
                  {/* <div className="about-two__img-animation1">
                    <img src="/assets/img/shape/star.svg" alt="star shape" />
                  </div> */}
                  <img src="/assets/img/canabi-2.webp" alt="about img" />
                </div>
              </div>

              <div className="col-xxl-6 col-xl-6 col-lg-6">
                <div className="about-two__content wow fadeInUp">
                  <div className="mb-30">
                    <h2 className="about-two__title mb-10">
                      Partner with Experienced Cannabis SEO Link Building
                      Professionals
                    </h2>
                    <p>
                      According to the Global CBD Market 2021-2025 report, the
                      cannabis and CBD market is predicted to reach $33.6
                      billion by 2025.
                    </p>
                    <p>
                      The cannabis industry has seen significant growth in
                      recent years due to increasing legalization, while the CBD
                      industry is a newer, rapidly expanding market. This can
                      make it challenging to get your business noticed.
                    </p>
                    <p>
                      At LBS, we help your business achieve organic growth
                      through targeted link-building strategies. Our experienced
                      team understands the unique needs of your cannabis and CBD
                      business to attract ready-to-buy consumers searching
                      online.
                    </p>
                  </div>
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
                Why Choose Our "Cannabis Link Building" <br /> Services Over
                Traditional "Link Building" Services?
              </h2>
            </div>
          </div>
          <div className="row row-stretch">
            <div
              className="col-xxl-3 col-xl-3 col-lg-3 col-md-12 col-sm-12 wow fadeInUp"
              data-wow-delay={0.3}
            >
              <div className="service-three__single mb-30">
                {/* <h3>Identify The Right Prospect</h3> */}
                <p>Team of outreach experts specializing in the CBD niche</p>
                <span>01.</span>
              </div>
            </div>

            <div
              className="col-xxl-3 col-xl-3 col-lg-3 col-md-12 col-sm-12 wow fadeInUp"
              data-wow-delay={0.3}
            >
              <div className="service-three__single mb-30">
                <p>Large inventory of CBD-specific links, constantly growing</p>
                <span>02.</span>
              </div>
            </div>

            <div
              className="col-xxl-3 col-xl-3 col-lg-3 col-md-12 col-sm-12 wow fadeInUp"
              data-wow-delay={0.3}
            >
              <div className="service-three__single mb-30">
                <p>
                  Content writing team skilled in creating content for the CBD
                  industry
                </p>
                <span>03.</span>
              </div>
            </div>

            <div
              className="col-xxl-3 col-xl-3 col-lg-3 col-md-12 col-sm-12 wow fadeInUp"
              data-wow-delay={0.3}
            >
              <div className="service-three__single mb-30">
                <p>Experience creating campaigns for CBD-relevant audiences</p>
                <span>04.</span>
              </div>
            </div>
          </div>

          <div className="mt-50 text-center">
            <a
              className="cta-one__btn wow fadeInUp"
              data-wow-delay="0.8"
              href="/contact"
            >
              Get Cannabis Backlinks
            </a>
          </div>
        </div>
      </div>

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
                      How We Can Help Your CBD Business Grow?
                    </h2>
                  </div>
                  <div className="about-two__info-list  ">
                    <ul>
                      <li>Identifying the best link placements</li>
                      <li>Focused, metric-driven growth campaigns </li>
                      <li>Results-oriented and hassle-free approach </li>
                      <li>Results-oriented and hassle-free approach </li>
                      <li>Valuable content for readers </li>
                    </ul>
                    <Link
                      href={"/contact"}
                      className="cta-one__btn wow fadeInUp"
                    >
                      Get Cannabis Backlinks
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-xxl-6 col-xl-6 col-lg-6">
                <div
                  className="about-two__img text-end wow fadeInUp"
                  data-wow-delay=".3s"
                >
                  <img src="/assets/img/canabi-3.webp" alt="about img" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="pricing-page-header pt-100 pb-40">
        {/* <div className="pricing-page-header__bg"></div> */}
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="page-header__wrapper">
                <div className="page-header__content text-center">
                  <h2>Cannabis Backlinks Pricing</h2>
                  <p className="heading-p">
                    We offer Cannabis Backlinks categorized as per Ahrefs DR.
                  </p>
                  <div className="pricing-navigation mt-35">
                    <div className="tab-one__tabs tabs-box">
                      {/* Start Tab */}
                      <div className="tab active-tab" id="monthly">
                        <div className="row clearfix row-gap-4">
                          <div className="col-xxl-4 col-xl-4 col-xl-4 col-md-12 col-sm-12">
                            <div className="pricing-plan-one__single mb-30 text-start">
                              <div className="pricing-header">
                                <span>DR 20+</span>
                                <h2>$119</h2>
                              </div>
                              <div className="pricing-feature-list">
                                <ul>
                                  <li>
                                    <i className="fa-sharp fa-solid fa-circle-check"></i>
                                    Ahrefs DR 20+
                                  </li>
                                  <li>
                                    <i className="fa-sharp fa-solid fa-circle-check"></i>
                                    750+ Words Content
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
                                    2 Weeks Turnaround
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
                                <span>DR 30+</span>
                                <h2>$179</h2>
                              </div>
                              <div className="pricing-feature-list">
                                <ul>
                                  <li>
                                    <i className="fa-sharp fa-solid fa-circle-check"></i>
                                    Ahrefs DR 30+
                                  </li>
                                  <li>
                                    <i className="fa-sharp fa-solid fa-circle-check"></i>
                                    750+ Words Content
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
                                    2 Weeks Turnaround
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
                                <span>DR 40+</span>
                                <h2>$249</h2>
                              </div>
                              <div className="pricing-feature-list">
                                <ul>
                                  <li>
                                    <i className="fa-sharp fa-solid fa-circle-check"></i>
                                    Ahrefs DR 40+
                                  </li>
                                  <li>
                                    <i className="fa-sharp fa-solid fa-circle-check"></i>
                                    750+ Words Content
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
                                    2 Weeks Turnaround
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
                                <span>DR 50+</span>
                                <h2>$329</h2>
                              </div>
                              <div className="pricing-feature-list">
                                <ul>
                                  <li>
                                    <i className="fa-sharp fa-solid fa-circle-check"></i>
                                    Ahrefs DR 50+
                                  </li>
                                  <li>
                                    <i className="fa-sharp fa-solid fa-circle-check"></i>
                                    750+ Words Content
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
                                    2 Weeks Turnaround
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
                                <span>DR 60+</span>
                                <h2>$399</h2>
                              </div>
                              <div className="pricing-feature-list">
                                <ul>
                                  <li>
                                    <i className="fa-sharp fa-solid fa-circle-check"></i>
                                    Ahrefs DR 60+
                                  </li>
                                  <li>
                                    <i className="fa-sharp fa-solid fa-circle-check"></i>
                                    750+ Words Content
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
                                    2 Weeks Turnaround
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

      <div className="about-two pt-30 pb-80">
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
                  <img src="/assets/img/canabi-4.webp" alt="about img" />
                </div>
              </div>

              <div className="col-xxl-6 col-xl-6 col-lg-6">
                <div className="about-two__content wow fadeInUp">
                  <div className="mb-30">
                    <h2 className="about-two__title mb-10">
                    Why Is Link Building Important for Cannabis Businesses?
                    </h2> 
                    <p>
                      Link building is a crucial aspect of SEO strategy that can
                      drive revenue growth. At LBS, we conduct fresh outreach to
                      other relevant websites based on our clients' sites.
                    </p>
                    <p>
                      Link building is a proven way to increase online
                      visibility and bring in more potential customers to your
                      website. We understand the value of obtaining customers
                      through organic searches and referral sites to reach top
                      positions in search engine results pages (SERPs).
                    </p>
                    <p>
                      We recognize that every customer is different and has
                      distinct needs, so we tailor a fully customized backlink
                      strategy to deliver the best results for your business.
                      With in-depth knowledge of the CBD market, we know how to
                      create an effective link-building strategy that works for
                      your business.
                    </p>
                    <p>By using our services, you can gain 100% organic traffic and legally and authentically increase your brand awareness among potential clients and improve your search engine rankings.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="about-two pt-50 pb-80 ">
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
                    Maximize the return on investment for your CBD business with our targeted Organic Growth Plan!
                    </h2>
                    <p>Our specialized cannabis and CBD SEO solutions and tactics will elevate your site's organic traffic, backlinks, and keyword search competitiveness. With years of experience in the cannabis industry, our expert team knows how to develop SEO strategies and build a strong online presence for your business.</p>
                    <p>Organic growth is a top priority for every business, and there is no one-size-fits-all approach. That's why we thoroughly analyze your business needs and target audience before implementing any strategy to avoid any setbacks.</p>
                    <p>The power of content should not be underestimated in the cannabis industry. Our in-house writers produce high-quality, relevant content that readers enjoy. This helps to secure backlinks and increase your brand visibility.</p>
                  </div>
               
                </div>
              </div>
              <div className="col-xxl-6 col-xl-6 col-lg-6">
                <div
                  className="about-two__img text-end wow fadeInUp"
                  data-wow-delay=".3s"
                >
                  <img src="/assets/img/canabi-5.webp" alt="about img" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


     

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
                    Want to know more about our cannabis backlinks services? Your
                    questions, our answers!
                  </p>
                </div>
                <div className="faq-one__faq">
                  <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                      <Accordion.Header>
                      How to get ranked on Google for the CBD website?
                      </Accordion.Header>
                      <Accordion.Body>
                      At Outreach Monks, we work in compliance with Google’s rules and regulations to bring more positive results for you. We assure you 100% unique content and contextual link placements based on your DA preference on Cannabis and CBD websites. And that will help your website rank higher for Google search results. 
                      </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="1">
                      <Accordion.Header>
                      Why is SEO important to sell CBD online?
                      </Accordion.Header>
                      <Accordion.Body>
                      SEO plays an essential role in online business marketing. Be it selling CBD products or selling any other stuff online. The CBD market is very challenging, and you have to offer something useful to your target audience, keeping their interest in mind. And SEO helps you by selecting the most relevant keywords people are searching for, crafting targeted CBD content strategy, and more. SEO lets your high-quality content get found on Google and other search engines. 
                      </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="2">
                      <Accordion.Header>
                      How your CBD site authority can be increased?
                      </Accordion.Header>
                      <Accordion.Body>
                      To increase your website’s domain authority, we will populate your website with high-quality, suitable content related to CBD and CBD items. The content on your site will be aligned to answer the CBD questions your target audience is looking for. Search engines reward sites with high-level domain authority and search engine rankings if users spend more time on your website. If people read your content, share it, and return to your website to consume new content, it signals to Google that you are providing something useful to users, and your site authority does get a kick to the top.  
                      </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="3">
                      <Accordion.Header>Is link-building required for the Cannabis business? </Accordion.Header>
                      <Accordion.Body>
                      Absolutely yes! Link-building is required and important for any business you are running. And Cannabis business is no different. Link-building will improve the ranking of your website. A good link-building profile is an indication for Google that you provide users with useful and reliable information or services.
                      </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="4">
                      <Accordion.Header>
                      How do Outreach Monks acquire backlinks?
                      </Accordion.Header>
                      <Accordion.Body>
                      At Outreach Monks, we have a team of highly professional and experienced members who research for sites with high domain authority to contact. We get in touch with the owners of every website to request backlinks and create content that adheres to both Google’s standards and their expectations. Increasing your company’s online reputation and sales is the ultimate goal of every blog article we create.
                      </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="5">
                      <Accordion.Header>
                      How Outreach Monks is different from its competitors?
                      </Accordion.Header>
                      <Accordion.Body>
                      We proudly announce that no other company can match the top-quality backlinks that Outreach Monks can provide you in a short time span. We offer you a reasonable pricing structure with an effective and efficient set of features. You will have brilliant unique content, excellent backlinks, quick response time, and a team of experts to foster your online needs in this competitive market.
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

export default CannabisBacklinks;
