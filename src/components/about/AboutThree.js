import Link from 'next/link';
import React from 'react';

const AboutThree = () => {
    return (
        <>
            {/* about one start */}
            <div className="about-one pt-80 pb-80">
                <div className="about-one__animation_text">
                    <h2>About Us</h2>
                </div>
                <div className="about-one_animation1">
                    <img src="/assets/img/shape/1.svg" alt="shape" />
                </div>
                <div className="about-one_animation2">
                    <img src="/assets/img/shape/2.svg" alt="shape" />
                </div>
                <div className="about-one_animation3">
                    <img src="/assets/img/shape/3.svg" alt="shape" />
                </div>
                <div className="about-one_animation4">
                    <img src="/assets/img/shape/4.svg" alt="shape" />
                </div>
                <div className="about-one_circle1"></div>
                <div className="about-one_circle2"></div>
                <div className="about-one_circle3"></div>
                <div className="page-header__bg" data-background="assets/img/about/about-bg-1.png"></div>
                <div className="about-one__animation_3"></div>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-xxl-6 col-xl-6 col-lg-6 wow fadeInLeft" data-wow-delay=".3s">
                            <div className="about-one__img">
                                <img src="/assets/img/about/about-img-1.jpg" alt="about img" />
                                <div className="about-one__img2">
                                    <img src="/assets/img/about/about-img-2.jpg" alt="about img" />
                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-6 col-xl-6 col-lg-6">
                            <div className="about-one__right wow fadeInUp" data-wow-delay=".5s">
                                <div className="about-one__right-content">
                                    {/* <span>About Us</span> */}
                                    <h2 className="section-title__one-title">About Us</h2>
                                    <p>Founded in 2020, LBS is a specialized link-building agency that serves over 2,000 businesses and agencies globally. Our goal is to help our clients improve their search engine rankings and increase traffic through strategic, sustainable solutions.</p>
                                    <p>As a full-service partner, we offer complete transparency and accountability to our agency clients. Rather than attempting to be a jack-of-all-trades, we focus exclusively on link building, allowing us to excel in this area. Our team of marketing strategists and experienced writers work together to create high-quality, searchable content and links that drive results.</p>
                                    <p>We are proud to be a one-stop-shop for all things link building and are committed to delivering exceptional customer service and timely campaign execution. Our reputation for delivering top-notch work and excellent support has made us a trusted name in the industry. Our team of experts, consisting of strategic marketers and experienced writers, specializes in creating valuable content and links that drive results</p>
                                    <p>With a team of more than 45 dedicated professionals, Outreach Monks is known for delivering top-quality work, meeting tight campaign deadlines, and providing exceptional customer support.</p>
                                    <Link href={"tel:23123123"} className=' mt-20 cta-one__btn wow fadeInUp'>Get In Touch</Link>
                                </div>
                                {/* <div className="about-one__counter">
                                    <div className="row">
                                        <div className="col-xxl-5 col-xl-5 col-lg-5 col-md-6 col-sm-6">
                                            <div className="counter-two__single">
                                                <div className="counter-two__single-inner">
                                                    <div className="text-box">
                                                        <h3 className="counter">13</h3>
                                                        <span className="counter-two__letter">+</span>
                                                        <p className="counter-two__text">Year of Experiences</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xxl-5 col-xl-5 col-lg-5 col-md-6 col-sm-6">
                                            <div className="counter-two__single">
                                                <div className="counter-two__single-inner">
                                                    <div className="text-box">
                                                        <h3 className="counter">4</h3>
                                                        <span className="counter-two__letter">K+</span>
                                                        <p className="counter-two__text">Satisfied Customers</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* about one end */}
        </>
    )
}

export default AboutThree;