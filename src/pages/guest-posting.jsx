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

const GuestPosting = () => {
  return (
    <div>
      <SEO pageTitle={"Guest Posting"} />
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
                      High Quality Guest Posting Service
                    </h2>
                    <p>
                      Attract relevant traffic from other websites with our
                      premier guest posting service.
                    </p>
                  </div>
                  <div className="about-two__info-list  ">
                    <ul>
                      <li>Highly relevant links</li>
                      <li>No shady links </li>
                      <li>Team of professionals </li>
                      <li>Special Discount for marketing agences </li>
                    </ul>
                    <Link
                      href={"/contact"}
                      className="cta-one__btn wow fadeInUp"
                    >
                      Get Backlinks
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
                  <img src="/assets/img/guest-2.webp" alt="about img" />
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
                <div
                  className="about-two__img text-end wow fadeInUp"
                  data-wow-delay=".3s"
                >
                  {/* <div className="about-two__img-animation1">
                    <img src="/assets/img/shape/star.svg" alt="star shape" />
                  </div> */}
                  <img src="/assets/img/guest-1.jpg" alt="about img" />
                </div>
              </div>

              <div className="col-xxl-6 col-xl-6 col-lg-6">
                <div className="about-two__content wow fadeInUp">
                  <div className="mb-30">
                    <h2 className="about-two__title mb-10">
                      Publish Guest Posts On Top Sites In Your Niche
                    </h2>
                    <p>
                      Boost the authority of your website and bring highly
                      relevant traffic to your website by publishing guest posts
                      on highly authoritative websites in your industry. We
                      reach out to these top websites to ensure your business
                      placements in the form of powerful backlinks.
                    </p>
                    <p>
                      You can get more eyeballs on your content and get more
                      brand exposure. Our expert content creators will craft
                      excellent guest posts and place your links naturally so it
                      does not disturb the flow of the article. We create a
                      winning guest posting strategy for your business which can
                      bolster your link profile.{" "}
                    </p>
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
      <TestimonialTwo />
      <div className="pricing-page-header pt-100 pb-40">
        {/* <div className="pricing-page-header__bg"></div> */}
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="page-header__wrapper">
                <div className="page-header__content text-center">
                  <h2>Guest Post Pricing</h2>
                  <p className="heading-p">
                    We offer guest post links categorized as per DA, DR, or
                    organic traffic. Below is the pricing for All 3 models.
                  </p>
                  <div className="pricing-navigation mt-35">
                    <div className="tab-one__tabs tabs-box">
                      {/* Start Tab */}
                      <div className="tab active-tab" id="monthly">
                        <div className="row clearfix">
                          <div className="col-xxl-4 col-xl-4 col-xl-4 col-md-12 col-sm-12">
                            <div className="pricing-plan-one__single mb-30 text-start">
                              <div className="pricing-badge">Most Popular</div>
                              <div className="pricing-header">
                                <span>Domain Rating</span>
                                <p>
                                  Guaranteed Ahrefs Domain Rating of the
                                  publisher’s site
                                </p>
                                <h2>
                                  $59<span>/ Per Placement</span>
                                </h2>
                              </div>
                              <div className="pricing-feature-list">
                                <ul>
                                  <li>
                                    <i className="fa-sharp fa-solid fa-circle-check"></i>
                                    DR 10+ $59
                                  </li>
                                  <li>
                                    <i className="fa-sharp fa-solid fa-circle-check"></i>
                                    DR 20+ $79
                                  </li>
                                  <li>
                                    <i className="fa-sharp fa-solid fa-circle-check"></i>
                                    DR 30+ $99
                                  </li>
                                  <li>
                                    <i className="fa-sharp fa-solid fa-circle-check"></i>
                                    DR 40+ $179
                                  </li>
                                  <li>
                                    <i className="fa-sharp fa-solid fa-circle-check"></i>
                                    DR 50+ $249
                                  </li>
                                  <li>
                                    <i className="fa-sharp fa-solid fa-circle-check"></i>
                                    DR 60+ $319
                                  </li>
                                  <li>
                                    <i className="fa-sharp fa-solid fa-circle-check"></i>
                                    DR 70+ $399
                                  </li>
                                </ul>
                                <h5 className="mt-10 mb-10">
                                  All plans include...
                                </h5>
                                <ul>
                                  <li>
                                    <i className="fa-sharp fa-solid fa-circle-check"></i>
                                    Full-service Outreach
                                  </li>
                                  <li>
                                    <i className="fa-sharp fa-solid fa-circle-check"></i>
                                    1 Keyword / Target URL
                                  </li>
                                  <li>
                                    <i className="fa-sharp fa-solid fa-circle-check"></i>
                                    Includes 750 Words Content
                                  </li>
                                  <li>
                                    <i className="fa-sharp fa-solid fa-circle-check"></i>
                                    Content Upgrade Available
                                  </li>
                                  <li>
                                    <i className="fa-sharp fa-solid fa-circle-check"></i>
                                    Manually Outreached
                                  </li>
                                  <li>
                                    <i className="fa-sharp fa-solid fa-circle-check"></i>
                                    2-3 Weeks Turnaround Time
                                  </li>
                                </ul>
                              </div>
                              <div className="pricing-btn">
                                <Link href="/contact" className="rr-bounce-up">
                                  Get Started{" "}
                                  <i className="fa-regular fa-arrow-right"></i>
                                </Link>
                              </div>
                            </div>
                          </div>
                          <div className="col-xxl-4 col-xl-4 col-xl-4 col-md-12 col-sm-12">
                            <div className="pricing-plan-one__single mb-30 text-start">
                              <div className="pricing-header">
                                <span>Publisher Traffic </span>
                                <p>
                                  Guaranteed monthly SEMRUSH organic traffic
                                  level of the publisher’s site
                                </p>
                                <h2>
                                  $89<span>/ Per Placement</span>
                                </h2>
                              </div>
                              <div className="pricing-feature-list">
                                <ul>
                                  <li>
                                    <i className="fa-sharp fa-solid fa-circle-check"></i>
                                    500+ Visits $89
                                  </li>
                                  <li>
                                    <i className="fa-sharp fa-solid fa-circle-check"></i>
                                    1000+ Visits $129
                                  </li>
                                  <li>
                                    <i className="fa-sharp fa-solid fa-circle-check"></i>
                                    2500+ Visits $189
                                  </li>
                                  <li>
                                    <i className="fa-sharp fa-solid fa-circle-check"></i>
                                    5000+ Visits $279
                                  </li>
                                  <li>
                                    <i className="fa-sharp fa-solid fa-circle-check"></i>
                                    20,000 Visits $499
                                  </li>
                                  <li>
                                    <i className="fa-sharp fa-solid fa-circle-check"></i>
                                    10,000 Visits $399
                                  </li>
                                </ul>

                                <h5 className="mt-10 mb-10">
                                  All plans include...
                                </h5>
                                <ul>
                                  <li>
                                    <i className="fa-sharp fa-solid fa-circle-check"></i>
                                    Full-service Outreach
                                  </li>
                                  <li>
                                    <i className="fa-sharp fa-solid fa-circle-check"></i>
                                    1 Keyword / Target URL
                                  </li>
                                  <li>
                                    <i className="fa-sharp fa-solid fa-circle-check"></i>
                                    Includes 750 Words Content
                                  </li>
                                  <li>
                                    <i className="fa-sharp fa-solid fa-circle-check"></i>
                                    Content Upgrade Available
                                  </li>
                                  <li>
                                    <i className="fa-sharp fa-solid fa-circle-check"></i>
                                    Manually Outreached
                                  </li>
                                  <li>
                                    <i className="fa-sharp fa-solid fa-circle-check"></i>
                                    2-3 Weeks Turnaround Time
                                  </li>
                                </ul>
                              </div>
                              <div className="pricing-btn">
                                <Link href="/contact" className="rr-bounce-up">
                                  Get Started{" "}
                                  <i className="fa-regular fa-arrow-right"></i>
                                </Link>
                              </div>
                            </div>
                          </div>

                          <div className="col-xxl-4 col-xl-4 col-xl-4 col-md-12 col-sm-12">
                            <div className="pricing-plan-one__single mb-30 text-start">
                              <div className="pricing-header">
                                <span>Domain Authority</span>
                                <p>
                                  Guaranteed Moz Domain Authority of the
                                  publisher’s website
                                </p>
                                <h2>
                                  $59<span>/ Per Placement</span>
                                </h2>
                              </div>
                              <div className="pricing-feature-list">
                                <ul>
                                  <li>
                                    <i className="fa-sharp fa-solid fa-circle-check"></i>
                                    DA 10+ $59
                                  </li>
                                  <li>
                                    <i className="fa-sharp fa-solid fa-circle-check"></i>
                                    DA 20+ $79
                                  </li>
                                  <li>
                                    <i className="fa-sharp fa-solid fa-circle-check"></i>
                                    DA 30+ $99
                                  </li>
                                  <li>
                                    <i className="fa-sharp fa-solid fa-circle-check"></i>
                                    DA 40+ $199
                                  </li>
                                  <li>
                                    <i className="fa-sharp fa-solid fa-circle-check"></i>
                                    DA 50+ $319
                                  </li>
                                  <li>
                                    <i className="fa-sharp fa-solid fa-circle-check"></i>
                                    DA 60+ $499
                                  </li>
                                </ul>

                                <h5 className="mt-10 mb-10">
                                  All plans include...
                                </h5>
                                <ul>
                                  <li>
                                    <i className="fa-sharp fa-solid fa-circle-check"></i>
                                    Full-service Outreach
                                  </li>
                                  <li>
                                    <i className="fa-sharp fa-solid fa-circle-check"></i>
                                    1 Keyword / Target URL
                                  </li>
                                  <li>
                                    <i className="fa-sharp fa-solid fa-circle-check"></i>
                                    Includes 750 Words Content
                                  </li>
                                  <li>
                                    <i className="fa-sharp fa-solid fa-circle-check"></i>
                                    Content Upgrade Available
                                  </li>
                                  <li>
                                    <i className="fa-sharp fa-solid fa-circle-check"></i>
                                    Manually Outreached
                                  </li>
                                  <li>
                                    <i className="fa-sharp fa-solid fa-circle-check"></i>
                                    2-3 Weeks Turnaround Time
                                  </li>
                                </ul>
                              </div>
                              <div className="pricing-btn">
                                <Link href="/contact" className="rr-bounce-up">
                                  Get Started{" "}
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

      <div className="about-two    ">
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
                      Enjoy Great Savings on Bulk Orders
                    </h2>
                    <p>We can be the agency partner you are looking for</p>
                  </div>
                  <div className="about-two__info-list  ">
                    {/* <ul>
                      <li>Highly relevant links</li>
                      <li>No shady links </li>
                      <li>Team of professionals </li>
                      <li>Special Discount for marketing agences  </li>
                    </ul> */}
                    <Link
                      href={"/contact"}
                      className="cta-one__btn wow fadeInUp"
                    >
                      Join Hands Today
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
                  <img src="/assets/img/guest-3.jpg" alt="about img" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="portfolio-sec-cstm pt-80 pb-80">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <h2 className="page-header__content">
                Examples of Blogs <br></br> We Outreach for Guest Posting?
              </h2>
              <div className="portfolio_imagess">
                <img src="/assets/img/portfolio/port-img-1.webp" alt="alt" />
                <img src="/assets/img/portfolio/port-img-2.webp" alt="alt" />
                <img src="/assets/img/portfolio/port-img-3.webp" alt="alt" />
                <img src="/assets/img/portfolio/port-img-4.webp" alt="alt" />
                <img src="/assets/img/portfolio/port-img-5.webp" alt="alt" />
                <img src="/assets/img/portfolio/port-img-6.webp" alt="alt" />
                <img src="/assets/img/portfolio/port-img-7.webp" alt="alt" />
                <img src="/assets/img/portfolio/port-img-8.webp" alt="alt" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="service-three pt-50 pb-120">
        <div className="container">
          <div className="row">
            <div
              className="col-xl-12 text-center mb-50 wow fadeInUp"
              data-wow-delay=".3s"
            >
              <h2 className="section-title__two-title">
                Who Should Avail <br /> Our Guest Posting Service?
              </h2>
              <p className="heading-p">
                Our guest posting service can fulfill the needs of the specific
                needs of{" "}
              </p>
            </div>
          </div>
          <div className="row row-stretch">
            <div
              className="col-xxl-4 col-xl-4 col-lg-4 col-md-12 col-sm-12 wow fadeInUp"
              data-wow-delay={0.3}
            >
              <div className="service-three__single mb-30">
                <h3> SEO Agencies</h3>
                <p>
                  We are on the same page with SEO agencies as we fully
                  understand the challenges a SEO agency has to face when
                  building links for our clients. Our guest posting service can
                  lend a helping hand.
                </p>
                <span>01.</span>
              </div>
            </div>

            <div
              className="col-xxl-4 col-xl-4 col-lg-4 col-md-12 col-sm-12 wow fadeInUp"
              data-wow-delay={0.3}
            >
              <div className="service-three__single mb-30">
                <h3> Online Businesses</h3>
                <p>
                  Make your business stand out from the crowd and get noticed in
                  an saturated online business space. Gain an upper hand over
                  your competitors by getting featured on
                </p>
                <span>02.</span>
              </div>
            </div>

            <div
              className="col-xxl-4 col-xl-4 col-lg-4 col-md-12 col-sm-12 wow fadeInUp"
              data-wow-delay={0.3}
            >
              <div className="service-three__single mb-30">
                <h3> Affiliate Marketers</h3>
                <p>
                  Generate more sales and earn more commissions with affiliate
                  marketing by outsourcing the outreach and guest posting
                  process to our experts so you can focus on what you do best.
                </p>
                <span>03.</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* faq three start */}
      <div className="faq-three pt-0 pb-80">
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
          <img
            src="/assets/img/shape/arrow-circle-line-3.png"
            alt="shape icon"
          />
        </div>
        <div className="faq-three__animation-5">
          <img
            src="/assets/img/shape/arrow-circle-line-4.png"
            alt="shape icon"
          />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-xxl-6 col-xl-6">
              <div className="faq-three__faq">
                {/* <h2 className='mb-30'>Ready To Secure The Top Spot on SERPs?</h2>    */}
                <Accordion defaultActiveKey="0">
                  <Accordion.Item eventKey="0" data-wow-delay=".3s">
                    <Accordion.Header>Enter Order Details</Accordion.Header>
                    <Accordion.Body>
                      <div className="accrodion-content">
                        <div className="text">
                          <p className="color-white">
                            Just tell us the target URL along with anchor text
                            and any instruction and we will take care of the
                            rest.
                          </p>
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
                      Outreach and Content Creation
                    </Accordion.Header>
                    <Accordion.Body>
                      <div className="accrodion-content">
                        <div className="text">
                          <p className="color-white">
                            After getting the green signal from a guest posting
                            website, our team of writers get to work and produce
                            a high quality piece of content with your desired
                            link placed naturally.
                          </p>
                        </div>
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="2">
                    <Accordion.Header>Reporting and Analytics</Accordion.Header>
                    <Accordion.Body>
                      <div className="accrodion-content">
                        <div className="text">
                          <p className="color-white">
                            Once the content passes our stringent quality checks
                            then it gets published. We report on the performance
                            of the post with real time analytics and a white
                            label report.
                          </p>
                        </div>
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </div>
            </div>
            <div className="col-xxl-6 col-xl-6">
              <div
                className="faq-three__content wow fadeInRight"
                data-wow-delay=".5s"
              >
                <h2 className="section-title__two-title mb-10">
                  How Our Guest Posting Service Works?
                </h2>

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
                        Whether It’s Safe to Buy a Guest Posting Service?
                      </Accordion.Header>
                      <Accordion.Body>
                        There’s nothing better than guest posting service. It’s
                        effective, economic, and brings in results that lasts
                        long. With Outreach Monks’ guest posting services, you
                        can rest assured that nothing goes the wrong way. The
                        content that is published for you is not only
                        promotional but authoritative enough to make sure that
                        the reader finds it beneficial.
                      </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="1">
                      <Accordion.Header>
                        Can I Write My Own Content?
                      </Accordion.Header>
                      <Accordion.Body>
                        Yes, why not! We’ll acknowledge your efforts. Just make
                        sure that you have the content ready with you before you
                        place an order, to avoid any unnecessary delays in
                        publishing. Also, our team will review it before we get
                        it published to make sure that it meets the quality
                        standards of our partners.
                      </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="2">
                      <Accordion.Header>
                        What is DA and DR? How Can It Affect My Purchase?
                      </Accordion.Header>
                      <Accordion.Body>
                        DA (Domain Authority) and DR (Domain Rating) measure a
                        website's strength based on its backlinks (DA also
                        depends on other factors, not just links). DA is from
                        Moz, and DR is from Ahrefs. High DA or DR means a
                        stronger site that can boost your SEO if you get a link
                        from them. When buying links or choosing sites for guest
                        posts, look for high DA and DR for better SEO benefits.
                      </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="3">
                      <Accordion.Header>
                        Are All The Links Do-Follow?
                      </Accordion.Header>
                      <Accordion.Body>
                        Yes, we usually get you do-follow links. But if you want
                        no-follow links, we can do that too.
                      </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="4">
                      <Accordion.Header>
                        Which Additional Backlink Services Does Outreach Monks
                        Offer?
                      </Accordion.Header>
                      <Accordion.Body>
                        Outreach Monks offers a diverse range of backlink
                        services, including white label link building, blogger
                        outreach service, link insertions, SaaS backlinks, buy
                        backlinks, cannabis backlinks, and white hat link
                        building services.
                      </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="5">
                      <Accordion.Header>
                        How Long Will It Take to Reflect the Results?
                      </Accordion.Header>
                      <Accordion.Body>
                        SEO is not an overnight practice. Especially, guest
                        posting strategy requires a lot of patience. There’s no
                        definite time period for results to reflect. All it
                        needs is a consistent approach to keep your website
                        improving with time.
                      </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="6">
                      <Accordion.Header>
                        Are These Placements Permanent?
                      </Accordion.Header>
                      <Accordion.Body>
                        Yes! We make sure that these placements remain
                        permanent, to get you the best results for years to
                        come. Additionally, we keep a close check on the
                        placements for three months. In case a link goes down,
                        we will get you a free replacement. Although we don’t
                        think you’ll need it!
                      </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="7">
                      <Accordion.Header>
                        What Niches Do You Take Orders For?
                      </Accordion.Header>
                      <Accordion.Body>
                        As a matter of fact, we operate in compliance with the
                        Google’s Webmasters’ Guidelines. We take orders for
                        almost all the categories, including adult, gambling or
                        casino, or any pharmaceutical websites.
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
                <div className="about-two__content wow fadeInUp">
                  <div className="mb-30">
                    <h2 className="about-two__title mb-10">
                      Helpful Content + Top Industry Blogs and Websites =
                      Success
                    </h2>
                    <p>
                      Our writing team consists of subject matter experts who
                      know the industry inside and out. This allows them to
                      create thought leadership content that could not only
                      establish your brand as an industry leader but also get
                      your brand in front of a new and highly engaged audience.
                      Our content is carefully crafted with these factors in
                      mind
                    </p>
                  </div>
                  <div className="about-two__info-list  ">
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

      <div className="service-two pt-80 pb-80">
        <div className="container">
          <div className="row ">
            <div
              className="d__column-two mb-60 wow fadeInUp justify-content-center text-center"
              data-wow-delay=".3s"
            >
              <div className="section-title__one">
                <h2 className="section-title__one-title">
                  Our Mission Is <br></br> To Enhance Your{" "}
                </h2>
                <p className="heading-p">
                  “Our monastery is known for digital excellence. With the
                  hardships and rigorous austerity that our monks have gone
                  through, there’s way more than just Guest Posting Service
                  which they commit to you.”
                </p>
              </div>
              {/* <div className="section-title__three-right">
                                <p className="section-title__three-tagline">Let our highly experienced link building professionals <br/> handle link building for you  so you don’t have to worry <br/> about anything.</p>
                            </div> */}
            </div>
          </div>
          <div className="row row-stretch row-gap-4 justify-content-center">
            <div
              className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12 wow fadeInUp"
              data-wow-delay=".3s"
            >
              <div className="service-two__single mb-30 bg-1">
                <div className="icon-box">
                  <img src="/assets/img/guest-icn-1.png" alt="icon" />
                </div>
                <h3 className="service-two__single-title">
                  Dashboard For Personalized Experience
                </h3>
                <p>
                  To enhance your experience with us, we have designed a
                  user-friendly, handy dashboard. You can check your orders,
                  their status, and make changes by simply logging in to your
                  account.
                </p>
                {/* <Link href="/service-details">Learn More <i className="fa-solid fa-arrow-right"></i></Link> */}
              </div>
            </div>
            <div
              className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12 wow fadeInUp"
              data-wow-delay=".5s"
            >
              <div className="service-two__single mb-30 bg-2">
                <div className="icon-box">
                  <img src="/assets/img/guest-icn-2.png" alt="icon" />
                </div>
                <h3 className="service-two__single-title">
                  {" "}
                  Huge Database And It Is Still Expanding
                </h3>
                <p>
                  We have been providing guest post services for years now. This
                  has helped us curate and manage a huge database of influencers
                  and bloggers. You get to choose from our database, plus we
                  reach out more for you
                </p>
                {/* <Link href="/service-details">Learn More <i className="fa-solid fa-arrow-right"></i></Link> */}
              </div>
            </div>
            <div
              className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12 wow fadeInUp"
              data-wow-delay=".7s"
            >
              <div className="service-two__single mb-30 bg-3">
                <div className="icon-box">
                  <img src="/assets/img/guest-icn-3.png" alt="icon" />
                </div>
                <h3 className="service-two__single-title">
                  Dedicated Managers For Each Account
                </h3>
                <p>
                  We know how tedious contacting a representative can be, and we
                  understand that you hate it cause we hate it, too. Unlike
                  others, we have dedicated a manager for each account. So you
                  have a single point of contact for all your needs, be it guest
                  post services or niche editing.
                </p>
                {/* <Link href="/service-details">Learn More <i className="fa-solid fa-arrow-right"></i></Link> */}
              </div>
            </div>

            <div
              className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12 wow fadeInUp"
              data-wow-delay=".7s"
            >
              <div className="service-two__single mb-30 bg-1">
                <div className="icon-box">
                  <img src="/assets/img/guest-icn-4.png" alt="icon" />
                </div>
                <h3 className="service-two__single-title">
                White Label Reporting – Use As You Want
                </h3>
                <p>
                For all your orders and campaigns, we deliver you a white label report in your inbox as well as the dashboard. So you have the flexibility to use it the way you want!
                </p>
                {/* <Link href="/service-details">Learn More <i className="fa-solid fa-arrow-right"></i></Link> */}
              </div>
            </div>

          </div>
        </div>
      </div>

      <section className="looking-sec-cstm mb-80">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <h3>Looking for an Agency partner?</h3>
              <p>We offer discount on bulk orders. Contact us to know more.</p>
              <Link href={"/contact"} className="cta-one__btn wow">
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </section>


      
      <div className="service-three pt-50 pb-120">
        <div className="container">
          <div className="row">
            <div
              className="col-xl-12 text-center mb-50 wow fadeInUp"
              data-wow-delay=".3s"
            >
              <h2 className="section-title__two-title">
              Why Choose Our ? <br /> Guest Posting Service
              </h2>
            
            </div>
          </div>
          <div className="row row-stretch">
            <div
              className="col-xxl-4 col-xl-4 col-lg-4 col-md-12 col-sm-12 wow fadeInUp"
              data-wow-delay={0.3}
            >
              <div className="service-three__single mb-30">
                <h3>  	Top Notch Content</h3>
                <p>
                We never compromises on the quality of content. That is why we go above and beyond to deliver unique and high quality content.
                </p>
                <span>01.</span>
              </div>
            </div>

            <div
              className="col-xxl-4 col-xl-4 col-lg-4 col-md-12 col-sm-12 wow fadeInUp"
              data-wow-delay={0.3}
            >
              <div className="service-three__single mb-30">
                <h3>  	Convenient Process</h3>
                <p>
                Our friend and testing guest posting process takes the pain out of guest posting and makes it more painless.
                </p>
                <span>02.</span>
              </div>
            </div>

            <div
              className="col-xxl-4 col-xl-4 col-lg-4 col-md-12 col-sm-12 wow fadeInUp"
              data-wow-delay={0.3}
            >
              <div className="service-three__single mb-30">
                <h3>  	No PBNs</h3>
                <p>
                Private Blog Networks can contain malicious websites that can hurt your website instead of benefiting it. That is why we tend to stay away from it.
                </p>
                <span>03.</span>
              </div>
            </div>



            <div
              className="col-xxl-4 col-xl-4 col-lg-4 col-md-12 col-sm-12 wow fadeInUp"
              data-wow-delay={0.3}
            >
              <div className="service-three__single mb-30">
                <h3>	Link Placement Within Fresh Content</h3>
                <p>
                We create fresh new content every time the guest post request is received instead of recycling the same content.
                </p>
                <span>04.</span>
              </div>
            </div>



            <div
              className="col-xxl-4 col-xl-4 col-lg-4 col-md-12 col-sm-12 wow fadeInUp"
              data-wow-delay={0.3}
            >
              <div className="service-three__single mb-30">
                <h3>  	 	Authoritative Outbound Links Alongside Your Link</h3>
                <p>
                To make your guest post seem authoritative and trustworthy, we complement your link with other outbound links to support the point.
                </p>
                <span>05.</span>
              </div>
            </div>


            <div
              className="col-xxl-4 col-xl-4 col-lg-4 col-md-12 col-sm-12 wow fadeInUp"
              data-wow-delay={0.3}
            >
              <div className="service-three__single mb-30">
                <h3>  	 	Qualified and Experienced Writers</h3>
                <p>
                With years of experience and creativity, our writers can produce compelling content which is worthy of getting published on highly authoritative websites.
                </p>
                <span>06.</span>
              </div>
            </div>
  


            <div
              className="col-xxl-4 col-xl-4 col-lg-4 col-md-12 col-sm-12 wow fadeInUp"
              data-wow-delay={0.3}
            >
              <div className="service-three__single mb-30">
                <h3>  	Links That Move The Needle</h3>
                <p>
                Instead of opting for quantity, we only place your links in high quality websites. This boosts your authority and search engine rankings.
                </p>
                <span>07.</span>
              </div>
            </div>

            <div
              className="col-xxl-4 col-xl-4 col-lg-4 col-md-12 col-sm-12 wow fadeInUp"
              data-wow-delay={0.3}
            >
              <div className="service-three__single mb-30">
                <h3>  	White Label Reporting</h3>
                <p>
                Even after the guest post goes live, we provide you a white label report and analytics showing you the results it has managed to achieve.
                </p>
                <span>08.</span>
              </div>
            </div>

          </div>
        </div>
      </div>


      <section className="simple-text-sec">
        <div className="container">
          <div className="row">
            <div className="col-md-10 cnterCol">
              <h2>How To Get The Best Out of Our Guest Posting Service?</h2>
              
              <ul>
                <li>
                  <h6>	Anchor Text Variations</h6>
                  <p>
                  Instead of using a single anchor text dozens of times, it is better to use different variations of anchor text so that your content does not feel unnatural.
                  </p>
                </li>


                <li>
                  <h6>	 	Diverse Target Pages for your website</h6>
                  <p>
                  Solely building links to a single page of your website will not lift your website rankings. You will have to build links to all the pages of your website.
                  </p>
                </li>
                <li>
                  <h6> 	High DA Strengthen Your Link Profile	</h6>
                  <p>
                  Give your link profile a much needed boost with high quality backlinks from high domain authority websites.
                  </p>
                </li>
                <li>
                  <h6> 	Well Thought Out Guest Posting Strategy	</h6>
                  <p>
                  Guest posting can only yield great results if done right. Our strategists sit together with your team to create a winning guest posting strategy.
                  </p>
                </li>
               
              </ul>
            </div>
          </div>
        </div>
      </section>

      
      <section className="looking-sec-cstm mt-80 mb-80">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <h3>Interested In Agency Partnership or Bulk Pricing?</h3>
              <p>Get in touch with us by sending a message or drop an email and we will get back to you.</p>
              <Link href={"/contact"} className="cta-one__btn wow">
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </section>

      <QuoteFormTwo />
      <FooterOne />
    </div>
  );
};

export default GuestPosting;
