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

const BloggerOutreach = () => {
  return (
    <div>
      <SEO pageTitle={"Blogger Outreach"} />
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
                      Blogger Outreach Made Simple
                    </h2>
                    <p>
                      Take the hassle out of the blogger outreach process with
                      our blogger outreach service.
                    </p>
                  </div>
                  <div className="about-two__info-list  ">
                    <ul>
                      <li>High Quality Links</li>
                      <li>Top Blogs in Your Niche </li>
                      <li>Specialized team of experts </li>
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
                      Reach Out To Top Bloggers In Your Niche
                    </h2>
                    <p>
                      Want to get backlinks from top websites and bloggers in
                      your industry to amplify your brand exposure and reach?
                      Our blogger outreach service has you covered. Our experts
                      take the pain out of the blogger outreach process so you
                      don't have to worry about anything.
                    </p>
                  </div>
                  <div className="about-two__info-list  ">
                    <ul>
                      <li>Relevant Content</li>
                      <li>Impactful Links </li>
                      <li>Secure Placement </li>
                    </ul>
                    {/* <Link href={"/contact"} className='cta-one__btn wow fadeInUp'>Get Links Today</Link> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <TestimonialTwo />
      <div className="pricing-page-header pt-80 pb-40">
        {/* <div className="pricing-page-header__bg"></div> */}
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="page-header__wrapper">
                <div className="page-header__content text-center">
                  <h2>Blogger Outreach Pricing</h2>
                  <p className="heading-p">
                    We offer blogger outreach links categorised as per DA, DR,
                    or organic traffic. Below is the pricing for All 3 models.
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
                                <span>Domain Rating </span>
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

      <section className="looking-sec-cstm">
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

      <section className="portfolio-sec-cstm pt-80 pb-80">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <h2 className="page-header__content">
                Examples of Blogs <br></br> We Outreach To
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

      <div className="service-three pt-50 pb-120">
        <div className="container">
          <div className="row">
            <div
              className="col-xl-12 text-center mb-50 wow fadeInUp"
              data-wow-delay=".3s"
            >
              <h2 className="section-title__two-title">
                How Does Our <br /> Blogger Outreach Service Work?
              </h2>
            </div>
          </div>
          <div className="row row-stretch">
            <div
              className="col-xxl-4 col-xl-4 col-lg-4 col-md-12 col-sm-12 wow fadeInUp"
              data-wow-delay={0.3}
            >
              <div className="service-three__single mb-30">
                <h3>Identify The Right Prospect</h3>
                <p>
                  Our team found the right prospect for your business to
                  kickstart the blogger outreach process.
                </p>
                <span>01.</span>
              </div>
            </div>

            <div
              className="col-xxl-4 col-xl-4 col-lg-4 col-md-12 col-sm-12 wow fadeInUp"
              data-wow-delay={0.3}
            >
              <div className="service-three__single mb-30">
                <h3>Reach Out to Them</h3>
                <p>
                  Next, we reach out to them with the focus of building long
                  term relationships with them, not just for link placements.
                </p>
                <span>02.</span>
              </div>
            </div>

            <div
              className="col-xxl-4 col-xl-4 col-lg-4 col-md-12 col-sm-12 wow fadeInUp"
              data-wow-delay={0.3}
            >
              <div className="service-three__single mb-30">
                <h3>Ideate and Create a Pitch</h3>
                <p>
                  Before creating and sending a pitch, we carefully find unique
                  content ideas and select the best one. Once the idea is
                  finalized, content pitch is created and sent.
                </p>
                <span>03.</span>
              </div>
            </div>

            <div
              className="col-xxl-4 col-xl-4 col-lg-4 col-md-12 col-sm-12 wow fadeInUp"
              data-wow-delay={0.3}
            >
              <div className="service-three__single mb-30">
                <h3>Content Creation and Publication</h3>
                <p>
                  Now, our specialized writers get to work to create exceptional
                  content which is worthy of being published on top sites in
                  your industry.
                </p>
                <span>04.</span>
              </div>
            </div>

            <div
              className="col-xxl-4 col-xl-4 col-lg-4 col-md-12 col-sm-12 wow fadeInUp"
              data-wow-delay={0.3}
            >
              <div className="service-three__single mb-30">
                <h3>White Label Reportingm</h3>
                <p>
                  Instead of taking credit, we submit white label reports to our
                  clients so they can present with transparency.
                </p>
                <span>05.</span>
              </div>
            </div>

            <div
              className="col-xxl-4 col-xl-4 col-lg-4 col-md-12 col-sm-12 wow fadeInUp"
              data-wow-delay={0.3}
            >
              <div className="service-three__single mb-30">
                <h3>Personalized Outreach Campaigns</h3>
                <p>
                  Our custom outreach campaigns cater to the industry specific
                  requirements of businesses.
                </p>
                <span>06.</span>
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
                    Want to know more about our blogger outreach services? Your
                    questions, our answers!
                  </p>
                </div>
                <div className="faq-one__faq">
                  <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                      <Accordion.Header>
                      What is Blogger Outreach Service?
                      </Accordion.Header>
                      <Accordion.Body>
                      Blogger outreach service involves publishing content on relevant blogs for natural brand mentions. The process for blogger outreach starts with manual outreaching followed by content creation strategy idea pitching and publishing. The agencies offering blogger outreach service handle the content strategy, creation, outreach pitch and publishing.
                      </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="1">
                      <Accordion.Header>
                      Is Blogger Outreach a Safe Strategy?
                      </Accordion.Header>
                      <Accordion.Body>
                      Our blogger outreach strategy is completely safe. Moreover, it fetches effective SERP results by securing natural white hat links manually from genuine authority sites. We, as an expert blogger outreach agency, ensure that our blog outreach posts are written in a natural way and also provide value to the readers.
                      </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="2">
                      <Accordion.Header>
                      Which Additional Backlink Services Does Link Building Saas Offer?
                      </Accordion.Header>
                      <Accordion.Body>
                      Link Building Saas provides an array of backlink services, such as white label link building, guest posting,  link insertions, SaaS backlinks, broken link building, cannabis backlinks, and managed link building services.
                      </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="3">
                      <Accordion.Header>
                      What Does DA Mean?
                      </Accordion.Header>
                      <Accordion.Body>
                      Domain Authority or DA is a key metric calculated by Moz.com for the websites on the internet. We use this metric for the assessment of the quality of blogs where we plan to publish the content. The blogger outreach or guest posting service at Link Building Saas guarantees content posts on to be published blogs with DA range from 10+ to 50+. For posting content on a blog which has DA 10 or higher, a DA 10+ post is required. Likewise, a DA 30+ post can be posted on a site which has DA of 30 or higher, and so forth.
                      </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="4">
                      <Accordion.Header>
                      Where Are The Links Placed?
                      </Accordion.Header>
                      <Accordion.Body>
                      We ensure that the links are placed in the content body and no place else. Each of the links is an in- content link and is not placed in the author box.
                      </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="5">
                      <Accordion.Header>
                      Can I Place a Single Large Order With Multiple Clients' Domains?
                      </Accordion.Header>
                      <Accordion.Body>
                      Yes, you can do so. You can select any quantity that you want while you place the order. Furthermore, you can mix your word count as well as DA requirements. All you need to do is to just enter the target URL’s and anchor text and you are ready to go.
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


                    <Accordion.Item eventKey="7">
                      <Accordion.Header>
                      Who Writes The Content For Blog or Guest Post?
                      </Accordion.Header>
                      <Accordion.Body>
                      Our team comprises of US and UK-based writers who deliver content that is of high-quality and is in a professional tone. We post content only on high-quality blogs with stringent editorial guidelines with respect to the approval of the content they publish. So one thing that you can rest assured about is that your brand with be associated only with top-quality content.
                      <br></br>
                      Additionally, our team expertly incorporates your exact match anchor text. They ensure it fits naturally into the content. This approach maintains the article's high quality. It also meets SEO needs without making the content look unnatural.
                      </Accordion.Body>
                    </Accordion.Item>


                    <Accordion.Item eventKey="8">
                      <Accordion.Header>
                      Can I Write My Own Content?
                      </Accordion.Header>
                      <Accordion.Body>
                      Yes, you can write your own content and provide it to us if you wish to do so. However, our outreach team will review it thoroughly to make certain that it matches the quality standards which our partners require to be met for publishing it on their blogs. In case you do want to write your content, please ensure that it is ready before you place an order to prevent any delays in the process.
                      </Accordion.Body>
                    </Accordion.Item>


                    <Accordion.Item eventKey="9">
                      <Accordion.Header>
                      Can I Review The Content Before It Gets Posted?
                      </Accordion.Header>
                      <Accordion.Body>
                      Unfortunately, we do not take the requests for reviewing the content before we post it. We adhere to this rule to keep our processes streamlined, maintain a quick turnaround times, control our costs and pass the cost savings onto the clients.
                      </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="10">
                      <Accordion.Header>
                      How Long Will The Placements Lasts?
                      </Accordion.Header>
                      <Accordion.Body>
                      The placements usually last for an indefinite period of time. However, we assure that the placements will last for at least a 90-day period. The majority will remain there for years to come and all are likely to be there as long as the blog owner runs the blog. But you need to understand experiencing some loss over time is inevitable, which is primarily due to the nature of link building as some bloggers may opt not to keep running their sites any longer or may simply change their niche.
                      </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="11">
                      <Accordion.Header>
                      Do You Take Orders For Adult or Gambling Sites?
                      </Accordion.Header>
                      <Accordion.Body>
                      We may do so, but our past experience tells us that these are challenging niches for fostering real relationships. If you have such requirements, you can connect with us and share them. We will discuss about personalized plans and pricing for your needs.
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

    <section className="simple-text-sec pb-80">
        <div className="container">
            <div className="row">
                <div className="col-md-10 cnterCol">
                    <h2  >How To Use Diversified Anchor Text?</h2>
                    <p>It is important to vary the anchor text used in your content in order to avoid overusing exact match anchor text, which search engines may view as manipulative and penalize your website for. A balanced mix of different types of anchor text can help strengthen your link profile. </p>
                    <ul>
                        <li><p><strong>Exact match anchor text </strong>is simply the targeted keyword, and should be used sparingly, making up only 5% of external backlinks. </p></li>
                        <li><p><strong>Branded anchor text </strong>combines the brand name with a relevant phrase, can be used for up to 25% of backlinks and is effective in encouraging users to click and engage with the brand. </p></li>
                        <li><p><strong>Phrase match anchor text </strong>includes the targeted keyword in a related phrase, should make up about 20% of backlinks and allows for a natural placement of the keyword in the content. </p></li>
                        <li><p><strong>Keyword branded anchor text </strong>combines the brand and keyword, but should be used in a natural way, making up about 15% of backlinks. </p></li>
                        <li><p><strong>Brand name anchor text </strong>which uses the brand's name as the anchor, can improve the reputation of the brand and provide SEO benefits, and should be used for about 10% of backlinks. </p></li>
                        <li><p><strong>Other terms anchor text </strong>uses keywords or terms other than the targeted keyword or brand name, should make up about 15% of backlinks. </p></li>
                        <li><p><strong>Root domain, subdomain/subdirectory, or page URL </strong>can also be used as anchor text, making up around 10% of incoming links.</p></li>
                         
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
