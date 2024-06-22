import React, { useEffect } from 'react';

const TestimonialTwo = () => {

    useEffect(() => {

        // Testimonial Two
        if ($(".testimonial-two__active").length) {
            $(".testimonial-two__active").owlCarousel({
                items: 1,
                loop: true,
                nav: false,
                margin: 10,
                dotsData: true,
                animateOut: 'fadeOutDown',
                animateIn: 'fadeInDown',
            });
        }
          
    }, []);

    return (
        <>
            {/* testimonial two start */}
            <div className="testimonial-two pt-80">
                <div className="container">
                    <div className="row">
                        <div className="mb-70">
                            <h2 className="section-title__two-title text-center wow fadeInUp" data-wow-delay=".3s">What Clients Say About <br /> Our SEO Services.</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-12 wow fadeInUp" data-wow-delay=".5s">
                            <div className="testimonial-two__wrapper">
                                <div className="testimonial-two__img">
                                    <img src="/assets/img/testimonial/quote-icon.svg" alt="quote icon" />
                                </div>
                                <div className="testimonial-two__active owl-carousel">
                                    <div data-dot="<img src='assets/img/test-img-4.webp' />" className="testimonial-two__single">
                                        <p>“Working as the sole SEO within our brand, link building has been a significant challenge due to time constraints. However, Shireen and her team at Link Building SaaS have been exceptional. They not only communicate and understand my objectives clearly but also secure fantastic link placements in well-written articles on highly relevant sites. The results have been immediate! I am very pleased that I entrusted them with this work.”</p>
                                        <h4>Joes Road</h4>
                                        <span>Director, Client Experience</span>
                                    </div>
                                    <div data-dot="<img src='assets/img/test-img-2.webp' />" className="testimonial-two__single">
                                        <p>“Link Building SaaS has been tremendous to work with. They overdeliver and complete my orders promptly. The links are genuine and more relevant than I had expected. I appreciate their month-to-month packages, but as it turns out, I can't imagine not using them indefinitely. Thanks, team!”</p>
                                        <h4>Johnathan C. Charles</h4>
                                        <span>CEO, Client Experience</span>
                                    </div>
                                    <div data-dot="<img src='assets/img/test-img-3.webp' />" className="testimonial-two__single">
                                        <p>“We are thrilled with the outcomes of the custom outreach campaign for the Survival/Preparedness niche. The placements are not only highly relevant to our business but also impressive in terms of authority and organic search traffic.”</p>
                                        <h4>Jose L. Moon</h4>
                                        <span>Director, Client Experience</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* testimonial two end */}
        </>
    )
}

export default TestimonialTwo;