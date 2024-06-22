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
      <SEO pageTitle={"Link Insertion Service"} />
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
                    Result Oriented Link Insertion Service
                    </h2>
                    <p>
                    Place your links naturally on highly authoritative websites and increase your website authority.
                    </p>
                  </div>
                  <div className="about-two__info-list  ">
                    <ul>
                      <li> 	No PBNs</li>
                      <li> 	Editorial Links </li> 
                    </ul>
                    <Link
                      href={"/contact"}
                      className="cta-one__btn wow fadeInUp"
                    >
                      Insert Links
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
                    src="/assets/img/lin-instert-01.webp"
                    alt="about img"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="service-three pt-80 pb-0">
        <div className="container">
          <div className="row">
            <div
              className="col-xl-12 text-center mb-50 wow fadeInUp"
              data-wow-delay=".3s"
            >
              <h2 className="section-title__two-title">
                Why Link Insertion Is Important?
              </h2>
            </div>
          </div>
          <div className="row row-stretch">
            <div
              className="col-xxl-4 col-xl-4 col-lg-4 col-md-12 col-sm-12 wow fadeInUp"
              data-wow-delay={0.3}
            >
              <div className="service-three__single mb-30">
                <h3> 	Relevant Links</h3>
                <p>
                We place contextual links that don’t disrupt the flow of the content or impact readability of content.
                </p>
                <span>01.</span>
              </div>
            </div>

            <div
              className="col-xxl-4 col-xl-4 col-lg-4 col-md-12 col-sm-12 wow fadeInUp"
              data-wow-delay={0.3}
            >
              <div className="service-three__single mb-30">
                <h3> 	High Domain Rating</h3>
                <p>
                Get link juice from some of the most credible sources in your industry by placing links on high domain rating websites.
                </p>
                <span>02.</span>
              </div>
            </div>

            <div
              className="col-xxl-4 col-xl-4 col-lg-4 col-md-12 col-sm-12 wow fadeInUp"
              data-wow-delay={0.3}
            >
              <div className="service-three__single mb-30">
                <h3> 	Real Outreach</h3>
                <p>
                Thanks to genuine outreach, you can also perform niche edits as well.
                </p>
                <span>03.</span>
              </div>
            </div>

            <div
              className="col-xxl-4 col-xl-4 col-lg-4 col-md-12 col-sm-12 wow fadeInUp"
              data-wow-delay={0.3}
            >
              <div className="service-three__single mb-30">
                <h3> 	No Duplication</h3>
                <p>
                100% unique link placement guaranteed, no duplication and redundancy
                </p>
                <span>04.</span>
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
                  <h2>Niche Edits Pricing</h2>
                  <p className="heading-p">
                  We offer niche edits categorised as per Ahrefs DR.
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
                                <span>DR 20+                                </span> 
                                <h2>
                                  $79<span>/ Per Placement</span>
                                </h2>
                              </div>
                              <div className="pricing-feature-list">
                                <ul>
                                  <li>
                                    <i className="fa-sharp fa-solid fa-circle-check"></i>
                                    Niche Relevant
                                  </li>
                                  <li>
                                    <i className="fa-sharp fa-solid fa-circle-check"></i>
                                    Ahrefs DR20+
                                  </li>
                                  <li>
                                    <i className="fa-sharp fa-solid fa-circle-check"></i>
                                    Manually Outreached
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
                              {/* <div className="pricing-badge">Most Popular</div> */}
                              <div className="pricing-header">
                                <span>DR 30+                             </span> 
                                <h2>
                                  $99<span>/ Per Placement</span>
                                </h2>
                              </div>
                              <div className="pricing-feature-list">
                                <ul>
                                  <li>
                                    <i className="fa-sharp fa-solid fa-circle-check"></i>
                                    Niche Relevant
                                  </li>
                                  <li>
                                    <i className="fa-sharp fa-solid fa-circle-check"></i>
                                    Ahrefs DR30+
                                  </li>
                                  <li>
                                    <i className="fa-sharp fa-solid fa-circle-check"></i>
                                    Manually Outreached
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
                                <span>DR 40+                             </span> 
                                <h2>
                                  $179<span>/ Per Placement</span>
                                </h2>
                              </div>
                              <div className="pricing-feature-list">
                                <ul>
                                  <li>
                                    <i className="fa-sharp fa-solid fa-circle-check"></i>
                                    Niche Relevant
                                  </li>
                                  <li>
                                    <i className="fa-sharp fa-solid fa-circle-check"></i>
                                    Ahrefs DR40+
                                  </li>
                                  <li>
                                    <i className="fa-sharp fa-solid fa-circle-check"></i>
                                    Manually Outreached
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
                                <span>DR 50+                             </span> 
                                <h2>
                                  $239<span>/ Per Placement</span>
                                </h2>
                              </div>
                              <div className="pricing-feature-list">
                                <ul>
                                  <li>
                                    <i className="fa-sharp fa-solid fa-circle-check"></i>
                                    Niche Relevant
                                  </li>
                                  <li>
                                    <i className="fa-sharp fa-solid fa-circle-check"></i>
                                    Ahrefs DR50+
                                  </li>
                                  <li>
                                    <i className="fa-sharp fa-solid fa-circle-check"></i>
                                    Manually Outreached
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
                                <span>DR 60+                             </span> 
                                <h2>
                                  $319<span>/ Per Placement</span>
                                </h2>
                              </div>
                              <div className="pricing-feature-list">
                                <ul>
                                  <li>
                                    <i className="fa-sharp fa-solid fa-circle-check"></i>
                                    Niche Relevant
                                  </li>
                                  <li>
                                    <i className="fa-sharp fa-solid fa-circle-check"></i>
                                    Ahrefs DR60+
                                  </li>
                                  <li>
                                    <i className="fa-sharp fa-solid fa-circle-check"></i>
                                    Manually Outreached
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

      <div className="service-two pt-0 pb-0">
                <div className="container">
                    <div className="row">
                        <div className="d__column-two mb-60 wow fadeInUp justify-content-center text-center" data-wow-delay=".3s">
                            <div className="section-title__one">
                                <h2 className="section-title__one-title">How Our Link <br></br> Insertion Service Works?  </h2>
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
                                <h3 className="service-two__single-title"> 	Genuine Outreach</h3>
                                <p>All you have to do is select the target URL and anchor text and leave the rest to our outreach team. They will not only help you find the right websites but will also reach out to them for link placements.</p>
                                {/* <Link href="/service-details">Learn More <i className="fa-solid fa-arrow-right"></i></Link> */}
                            </div>
                        </div>
                        <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay=".5s">
                            <div className="service-two__single mb-30 bg-2">
                                {/* <div className="icon-box">
                                    <img src="/assets/img/services/service-two-2.svg" alt="icon" />
                                </div> */}
                                <h3 className="service-two__single-title">	 	Valuable Content</h3>
                                <p>Our versatile team of content writers weave their magic and create content that delivers immense value to the target website target audience. As a result, the chances of content being published by the site owner increases manifolds.</p>
                                {/* <Link href="/service-details">Learn More <i className="fa-solid fa-arrow-right"></i></Link> */}
                            </div>
                        </div>
                        <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay=".7s">
                            <div className="service-two__single mb-30 bg-3">
                                {/* <div className="icon-box">
                                    <img src="/assets/img/services/service-two-3.svg" alt="icon" />
                                </div> */}
                                <h3 className="service-two__single-title"> 	Insightful Reporting</h3>
                                <p>We not only let you track progress in real time through an interactive dashboard. Our white label reporting let you export the key metric analysis in CSV format to present it easily in front of the clients.</p>
                                {/* <Link href="/service-details">Learn More <i className="fa-solid fa-arrow-right"></i></Link> */}
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            


      {/* faq start */}
      <div className="faq-one pt-80 pb-80">
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
                      What is a niche edits service?
                      </Accordion.Header>
                      <Accordion.Body>
                      Niche edit services involve adding links to existing blog posts that already have their own backlinks. This method offers several advantages, such as enhancing your link profile, boosting domain authority, and positively impacting your SEO efforts. Search engines see these added links as signs of credibility, leading to better search rankings. We secure these links for you as editorial links, seamlessly integrated with new content that adds value to the original post. Also, this way, the chances of appearing in the search results get higher.
                      </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="1">
                      <Accordion.Header>
                      Can I choose the DA of the blogs?
                      </Accordion.Header>
                      <Accordion.Body>
                      Yes, you have the option to select the Domain Authority (DA) for each link placement. Because DA updates daily, our system allows you to check current metrics at the time of placement. However, if the DA drops after placement, we cannot offer refunds or exchange blogs. Similarly, there's no extra charge if the DA increases after your link is placed.
                      </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="2">
                      <Accordion.Header>
                      How relevant will the content be?
                      </Accordion.Header>
                      <Accordion.Body>
                      Our outreach team is dedicated to finding the most suitable opportunities for your link, ensuring it fits naturally within the content and meets your order's requirements. Finding relevant content is straightforward for popular topics, but the challenge lies in integrating your link in a way that feels natural. Rest assured, our copywriting team is committed to achieving this seamlessly for you, creating content as needed to align with your objectives.
                      </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="3">
                      <Accordion.Header>
                      Can we approve content or sites before you place the links?
                      </Accordion.Header>
                      <Accordion.Body>
                      While you won't be able to pre-approve blog post placements, our dashboard allows you to track placements in real-time as they're secured. We're committed to producing high-quality, relevant, and non-promotional content for these placements. We aim to replicate the natural editorial process a blogger would use to include your link in their posts, ensuring it blends seamlessly and authentically.
                      </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="4">
                      <Accordion.Header>
                      What countries do you secure placements in?
                      </Accordion.Header>
                      <Accordion.Body>
                      Our placements primarily occur on blogs based in the US and UK, but as our client base expands, we've also begun securing spots on Australian blogs. All blogs we partner with for niche links are English-language sites, and we work with a variety of top-level domains (TLDs), including .com, .co.uk, .org, and .net.
                      </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="5">
                      <Accordion.Header>
                      Do you take orders for gambling, adult or pharmaceutical clients?
                      </Accordion.Header>
                      <Accordion.Body>
                      We understand from our industry experience that building link relationships in certain tough niches can be challenging. However, we're willing to explore custom plans and pricing for clients facing these issues.
                      </Accordion.Body>
                    </Accordion.Item>


                    <Accordion.Item eventKey="6">
                      <Accordion.Header>
                      Is niche edits better than broken link building?
                      </Accordion.Header>
                      <Accordion.Body>
                      Yes, you can write your own Essentially, both the processes are quite very similar and their final outcomes are identical as well. With niche edits, we look for relevant blog posts so that the link mention we incorporate into it fits quite naturally, with very little additional content. However, things can be challenging with a broken link building service as the link may not always be relevant to the content because of the fewer opportunities.
                      </Accordion.Body>
                    </Accordion.Item>


                    <Accordion.Item eventKey="7">
                      <Accordion.Header>
                      Can I review content for blogs?
                      </Accordion.Header>
                      <Accordion.Body>
                      We do not accept requests to review content before posting. This policy helps us streamline our processes, ensure fast turnaround times, keep our costs in check, and pass those savings on to our clients.
                      </Accordion.Body>
                    </Accordion.Item>


                    <Accordion.Item eventKey="8">
                      <Accordion.Header>
                      Who writes the additional content for blogs?
                      </Accordion.Header>
                      <Accordion.Body>
                      Unfortunately, we do not take the requests for reviewing the content before we post it. We adhere to this rule to keep our processes streamlined, maintain a quick turnaround times, control our costs and pass the cost savings onto the clients.
                      </Accordion.Body>
                    </Accordion.Item>


                    <Accordion.Item eventKey="9">
                      <Accordion.Header>
                      How long will the placements lasts?
                      </Accordion.Header>
                      <Accordion.Body>
                      We have an in-house team of seasoned Native English writers to handle this part of the job. They are responsible for creating quality content that enhances the value of the existing post. At the same time, they make sure that the link appears fully natural and the blog owner likes it too.
                      </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="10">
                      <Accordion.Header>
                      Can I place one large order with multiple clients domains?
                      </Accordion.Header>
                      <Accordion.Body>
                      You have the flexibility to choose any quantity of links when placing your order, and you can vary the Domain Authority (DA) metrics and word counts as needed. Simply input your desired anchor text and target URLs for each order.
                      </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="11">
                      <Accordion.Header>
                      Where are the links placed?
                      </Accordion.Header>
                      <Accordion.Body>
                      We prioritize making each link and mention feel like a natural part of the content. Even though we add links after the fact, we craft the content in such a way that it seems as if the link has always been part of the post.
                      </Accordion.Body>
                    </Accordion.Item>



                    <Accordion.Item eventKey="12">
                      <Accordion.Header>
                      How long will these placements last?
                      </Accordion.Header>
                      <Accordion.Body>
                      You can expect the placements to last indefinitely, with a guarantee from us for at least 120 days. Most will remain for many years as long as the blog itself is active. Some loss over time is natural due to the evolving nature of websites and blogging. Blog owners might shift their focus or decide to stop running their sites.
                      </Accordion.Body>
                    </Accordion.Item>




                    <Accordion.Item eventKey="13">
                      <Accordion.Header>
                      What if you can’t find any relevant websites?
                      </Accordion.Header>
                      <Accordion.Body>
                      If we encounter any difficulties with finding suitable websites within your niche, we'll notify you after reviewing your order and offer a full refund. Till date, we have successfully fulfilled every order. Challenges may arise in highly specialized sectors, making link-building more complex.
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

export default BloggerOutreach;
