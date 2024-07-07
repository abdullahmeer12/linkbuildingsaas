import React from 'react';
import Link from 'next/link';
import Accordion from 'react-bootstrap/Accordion';

const FaqThree = () => {

    return (
        <>
            {/* faq three start */}
            <div className="faq-three pt-160 pb-100">
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
                            <h2 className='mb-30'>Ready To Secure The Top Spot on SERPs?</h2>   
                                <Accordion defaultActiveKey="0">
                                    <Accordion.Item eventKey="0" data-wow-delay=".3s">
                                        <Accordion.Header>1.Analysis and Planning</Accordion.Header>
                                        <Accordion.Body>
                                            <div className="accrodion-content">
                                                <div className="text">
                                                <p className='color-white'>Our team conducts a thorough SEO analysis to help you put the right foot forward with search engine optimization. We outline a roadmap to guide your website on the patch of organic growth with a custom made link building strategy for your business.</p>
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
                                        <Accordion.Header>2.Personalized Outreach</Accordion.Header>
                                        <Accordion.Body>
                                            <div className="accrodion-content">
                                                <div className="text">
                                                <p className='color-white'>Our outreach efforts revolve around your specific niche. We target highly relevant and high authority websites in your niche that targets the same target audience as yours without linkbuilder outreach.</p>
                                                </div>
                                            </div>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="2">
                                        <Accordion.Header>3.Quality Backlinks</Accordion.Header>
                                        <Accordion.Body>
                                            <div className="accrodion-content">
                                                <div className="text">
                                                    <p className='color-white'>Our link building agency helps you build a link profile that will propel your business above your competitors in search rankings. By using white hat techniques, we help you secure high quality backlinks that can accelerate your rise to the top of search results.</p>
                                                </div>
                                            </div>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="3">
                                        <Accordion.Header>4.Higher Rankings</Accordion.Header>
                                        <Accordion.Body>
                                            <div className="accrodion-content">
                                                <div className="text">
                                                    <p className='color-white'>Our mantra of quality over quantity helps you build quality backlinks that have a much higher impact on your search rankings instead of many low quality backlinks that barely move the needle on search rankings.</p>
                                                </div>
                                            </div>
                                        </Accordion.Body>
                                    </Accordion.Item>

                                </Accordion>
                                                  
                            </div>
                        </div>
                        <div className="col-xxl-6 col-xl-6">
                            <div className="faq-three__content wow fadeInRight" data-wow-delay=".5s">
                                <h2 className="section-title__two-title mb-10">Our Link Building Process</h2>
                                <p>We put quality, relevancy and authority over everything else when it comes to link building.</p>
                                <img src="/assets/img/faq/faq-3-1.png" alt="faq img" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* faq three end */}
        </>
    )
}

export default FaqThree;