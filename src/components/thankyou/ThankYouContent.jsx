import React, { useEffect } from 'react';
import Link from 'next/link';

const ThankYouContent = () => {
	useEffect(() => {

        // Data Background Js
        $("[data-background]").each(function() {
            $(this).css(
                "background-image",
                "url( " + $(this).attr("data-background") + "  )"
            );
        });
            
    }, []);
    return (
        <>
			<div className="error-page pt-80 pb-0">
				<div className="error-page__animation1">
					<img src="/assets/img/shape/1.svg" alt="shape img" />
				</div>
				<div className="error-page__animation2">
					<img src="/assets/img/shape/2.svg" alt="shape img" />
				</div>
				<div className="error-page__animation3">
					<img src="/assets/img/shape/3.svg" alt="shape img" />
				</div>
				<div className="error-page__animation4">
					<img src="/assets/img/shape/4.svg" alt="shape img" />
				</div>
				{/* <div className="error-page__img1">
					<img src="/assets/img/404/shape_01.png" alt="error img" />
				</div>
				<div className="error-page__img2">
					<img src="/assets/img/404/shape_02.png" alt="error img" />
				</div> */}
				<div className="page-header__bg" data-background="/assets/img/backgrounds/breadcrumb.jpg"></div>
				<div className="container">
					<div className="row">
						<div className="col-xl-12">
							<div className="error-page__content text-center wow fadeInUp" data-wow-delay=".3s">
								
								<h2>Thank You <br /> For Contacting Us</h2>
								<p>Thank you for your trust in our services! We are committed to delivering exceptional results and are grateful for the opportunity to work with you. If you have any questions or need further assistance, please don't hesitate to reach out. We're here to help and look forward to continuing our successful partnership.</p>
								<Link href="/" className="rr-btn-style-1"><i className="fa-regular fa-arrow-left"></i>Go Back to Home</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
        </>
    )
}

export default ThankYouContent;