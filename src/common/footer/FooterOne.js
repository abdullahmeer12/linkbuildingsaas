import React from 'react';
import Link from 'next/link';

const FooterOne = () => {
    return (
        <>
            {/* footer start */}
            <footer>
                <div className="footer-style-1">
                    <div className="footer-style-1__animation1">
                        <img src="/assets/img/footer/dot-line.svg" alt="shape" />
                    </div>
                    <div className="footer-style-1__animation2">
                        <img src="/assets/img/footer/angle.svg" alt="shape" />
                    </div>
                    {/* <div className="footer-style-1__animation3">
                        <img src="/assets/img/footer/squre.svg" alt="shape" />
                    </div> */}
                    <div className="footer-style-1__animation4">
                        <img src="/assets/img/footer/star.svg" alt="shape" />
                    </div>
                    <div className="footer-style-1__animation5">
                        <img src="/assets/img/footer/dot-line-2.svg" alt="shape" />
                    </div>
                    <div className="container">
                        <div className="footer-top pt-120 pb-55">
                            <div className="row">
                                <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-7">
                                    <div className="footer__widget footer-col-1 mb-30">
                                        <div className="footer-widget__column footer-widget__about">
                                            <div className="footer-widget__about-logo">
                                                <Link href="/"><img src="/assets/img/logo/logo.png" alt="Logo" /></Link>
                                            </div>
                                            <p className="footer-widget__about-text">As a full-service partner, we offer complete transparency and accountability to our agency clients. Rather than attempting to be a jack-of-all-trades, we focus exclusively on link building, allowing us to excel in this area.</p>
                                            <div className="social-hvr">
                                                <a href="#"><i className="fa-brands fa-twitter"></i></a>
                                                <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
                                                <a href="#"><i className="fa-brands fa-linkedin-in"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-5">
                                    <div className="footer__widget foot-col-2 mb-30">
                                        <h3 className="footer-widget__title">Services</h3>
                                        <ul>
                                            <li><Link href="/blogger-outreach">Blogger Outreach</Link></li>
                                            <li><Link href="/cannabis-backlinks">Cannabis Backlinks</Link></li>
                                            <li><Link href="/casino-backlinks">Casino Backlinks</Link></li> 
                                            <li><Link href="/country-specific">Country Specific </Link></li>
                                            <li><Link href="/guest-posting">Guest Posts </Link></li>
                                            <li><Link href="/link-insertion">Link Insertions </Link></li>
                                            <li><Link href="/saas-backlinks">SaaS Backlinks </Link></li>
                                            <li><Link href="/link-building">Link Building Service  </Link></li>
                                            <li><Link href="/white-label-services">White Label Link Building </Link></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-5">
                                    <div className="footer__widget mb-30">
                                        <h3 className="footer-widget__title">Quick Links</h3>
                                        <ul>
                                            <li><Link href="/">Home</Link></li>
                                            <li><Link href="/about">About Us</Link></li>
                                            <li><Link href="/blog">Blogs</Link></li>
                                            <li><Link href="/contact">Contact Us</Link></li>

                                           
                                        </ul>
                                    </div>
                                </div>

                                {/* <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-6 col-sm-5">
                                    <div className="footer__widget mb-30">
                                        <h3 className="footer-widget__title">Community</h3>
                                        <ul>
                                            <li><Link href="/">Our Product</Link></li>
                                            <li><Link href="/">Documentation</Link></li>
                                            <li><Link href="/">Our Services</Link></li>
                                            <li><Link href="/">Company</Link></li>
                                            <li><Link href="/">What We Do?</Link></li>
                                        </ul>
                                    </div>
                                </div> */}
                                {/* <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-7">
                                    <div className="footer__widget footer-col-4 mb-30">
                                        <h3 className="footer-widget__title">Subscribe Newsletter</h3>
                                        <div className="footer-subscriber-form">
                                            <form action="#">
                                                <input type="text" placeholder="Enter your email" />
                                                <button className=""><i className="fa-light fa-arrow-right"></i></button>
                                            </form>
                                        </div>
                                        <div className="subscriber-agreement">
                                            <input type="checkbox" name="agree" id="agree" />
                                            <p>I agree to the <Link href="/">Privacy Policy</Link>.</p>
                                        </div>
                                    </div>
                                </div> */}
                            </div>
                        </div>
                        <div className="footer-bottom">
                            <div className="row">
                                {/* <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12"> */}
                                <div className="col-12">
                                    <div className="copyright text-center">
                                        <p>© 2024 Link Building SaaS All Rights Reserved.</p>
                                    </div>
                                </div>
                                {/* <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                    <div className="footer-bottom-menu">
                                        <ul>
                                            <li><Link href="/">Privacy Policy</Link></li>
                                            <li><Link href="/">Term of Service</Link></li>
                                        </ul>
                                    </div>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            {/* footer end */}
        </>
    )
}

export default FooterOne;