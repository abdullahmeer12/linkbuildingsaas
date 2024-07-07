import React from 'react';
import Link from 'next/link';

const ServiceTwo = () => {
    return (
        <>
            {/* service two start */}
            <div className="service-two pt-140 pb-0">
                <div className="container">
                    <div className="row">
                        <div className="d__column-two mb-60 wow fadeInUp" data-wow-delay=".3s">
                            <div className="section-title__one">
                                <h2 className="section-title__one-title">Our Services</h2>
                            </div>
                            <div className="section-title__three-right">
                                <p className="section-title__three-tagline">Let our highly experienced link building professionals <br/> handle link building for you  so you don’t have to worry <br/> about anything.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row row-gap-4">
                        <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay=".3s">
                            <div className="service-two__single mb-30 bg-1">
                                <div className="icon-box">
                                    <img src="/assets/img/services/link-building.png" alt="icon" />
                                </div>
                                <h3 className="service-two__single-title">Consistent Link Building</h3>
                                <p>Create a continuous stream of high quality backlinks to not only advance in search rankings and retain the top spot once you get there.</p>
                                {/* <Link href="/service-details">Learn More <i className="fa-solid fa-arrow-right"></i></Link> */}
                            </div>
                        </div>
                        <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay=".5s">
                            <div className="service-two__single mb-30 bg-2">
                                <div className="icon-box">
                                    <img src="/assets/img/services/service-two-2.svg" alt="icon" />
                                </div>
                                <h3 className="service-two__single-title">Transparency With Scale</h3>
                                <p>Take your link building effort to the next level without compromising on the transparency aspect thanks to our premium link building service. </p>
                                {/* <Link href="/service-details">Learn More <i className="fa-solid fa-arrow-right"></i></Link> */}
                            </div>
                        </div>
                        <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay=".7s">
                            <div className="service-two__single mb-30 bg-3">
                                <div className="icon-box">
                                    <img src="/assets/img/services/service-two-3.svg" alt="icon" />
                                </div>
                                <h3 className="service-two__single-title">Insert Links <br/> Naturally</h3>
                                <p>We help you place the right links at the right place to boost the effectiveness of your content and SEO efforts.</p>
                                {/* <Link href="/service-details">Learn More <i className="fa-solid fa-arrow-right"></i></Link> */}
                            </div>
                        </div>

                        <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay=".7s">
                            <div className="service-two__single mb-30 bg-1">
                                <div className="icon-box">
                                    <img src="/assets/img/services/backlink.png" alt="icon" />
                                </div>
                                <h3 className="service-two__single-title">Collect High Value Backlinks</h3>
                                <p>Cement your authority as a credible source and industry leader by getting high quality backlinks from our link building service.</p>
                                {/* <Link href="/service-details">Learn More <i className="fa-solid fa-arrow-right"></i></Link> */}
                            </div>
                        </div>


                        <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay=".7s">
                            <div className="service-two__single mb-30 bg-2">
                                <div className="icon-box">
                                    <img src="/assets/img/services/seo.png" alt="icon" />
                                </div>
                                <h3 className="service-two__single-title">Ace Local <br/>  SEO </h3>
                                <p>Grab location-specific and country-specific links in order to increase your business chances to show up in local searches.</p>
                                {/* <Link href="/service-details">Learn More <i className="fa-solid fa-arrow-right"></i></Link> */}
                            </div>
                        </div>


                        <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay=".7s">
                            <div className="service-two__single mb-30 bg-3">
                                <div className="icon-box">
                                    <img src="/assets/img/services/list.png" alt="icon" />
                                </div>
                                <h3 className="service-two__single-title">Get  Featured</h3>
                                <p>Our comprehensive blogger outreach efforts not only help you steal all the limelight by getting featured on top publications but also attract tons of traffic from it.</p>
                                {/* <Link href="/service-details">Learn More <i className="fa-solid fa-arrow-right"></i></Link> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* service two end */}
        </>
    )
}

export default ServiceTwo;