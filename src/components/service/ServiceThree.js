import React from 'react';
import Link from 'next/link';
import { ServiceThreeData } from '@/data/service';

const ServiceThree = () => {
    return (
        <>
            {/* service three start */}
            <div className="service-three pt-50 pb-120">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12 text-center mb-50 wow fadeInUp" data-wow-delay=".3s">
                            <h2 className="section-title__two-title">What Makes Us <br/> The Best <mark style={{backgroundColor:"#ffc200"}}> Link Building Agency?</mark></h2>
                            <p className='heading-p'>We specialize in link building and our experience and qualified team enable us to help businesses attract backlinks which was not possible with traditional SEO practices.</p>
                        </div>
                    </div>
                    <div className="row row-stretch">
                        {ServiceThreeData.map((item, i) => (
                            <div key={i} className="col-xxl-3 col-xl-3 col-lg-3 col-md-12 col-sm-12 wow fadeInUp" data-wow-delay={item.delay}>
                                <div className="service-three__single mb-30">
                                    {/* <div className="service-three__single-img">
                                        <img src={item.icon} alt={item.alt} />
                                    </div> */}
                                    <h3><Link href={item.link}>{item.heading}</Link></h3>
                                    <p>{item.description}</p>
                                    <span>{item.service_no}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className='mt-50 text-center'>
                        <Link href={"tel:0231231213"} className='cta-one__btn wow fadeInUp' data-wow-delay={.8}>Call Us Now</Link>
                    </div>
                </div>
            </div>
            {/* service three end */}
        </>
    )
}

export default ServiceThree;