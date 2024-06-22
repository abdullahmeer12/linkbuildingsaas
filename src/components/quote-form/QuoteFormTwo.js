import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useRouter } from 'next/router';
const QuoteFormTwo = () => {
  const form = useRef();
  const router = useRouter(); 
  const sendEmail = (e) => {
    e.preventDefault();

    // Collect checkbox data
    const checkboxes = form.current.querySelectorAll('input[type=checkbox]:checked');
    let services = [];
    checkboxes.forEach((checkbox) => {
      services.push(checkbox.nextElementSibling.innerText.trim());
    });
    form.current['user_service'].value = services.join(', ');

    // Collect selected budget
    const budget = form.current.querySelector('select[name="user_budget"]').value;
    form.current['user_selected_budget'].value = budget;

    emailjs
      .sendForm('service_agv8j6l', 'template_v0tdbfj', form.current, 'I50uMchWEeX7t7NF1')
      .then(
        () => {
          router.push('/thankyou');
          console.log('SUCCESS!');
        },
        (error) => {
          alert("Some Things Wents Wrong Try Again later")
          // console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <>
      <div className="quote-form-one pt-0">
        <div className="quote-form-one__wrapper">
          <div className="quote-form-one__img1">
            <img src="/assets/img/quote-form/shape1.svg" alt="img" />
          </div>
          <div className="quote-form-one__img2">
            <img src="/assets/img/quote-form/shape2.svg" alt="img" />
          </div>
          <div className="quote-form-one__img3">
            <img src="/assets/img/quote-form/shape3.svg" alt="img" />
          </div>
          <div className="quote-form-one__img4">
            <img src="/assets/img/quote-form/shape4.svg" alt="img" />
          </div>
          <div className="quote-form-one__img5">
            <img src="/assets/img/quote-form/shape5.svg" alt="img" />
          </div>
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xl-6 wow fadeInLeft" data-wow-delay=".3s">
                <div className="quote-form-one__img">
                  <img src="/assets/img/quote-form/bg-2.png" alt="" />
                  <div className="quote-form-one__img-animation1">
                    <img src="/assets/img/quote-form/quote-img-1.png" alt="quote img" />
                  </div>
                  <div className="quote-form-one__img-animation2">
                    <img src="/assets/img/quote-form/quote-img-2.png" alt="quote img" />
                  </div>
                </div>
              </div>
              <div className="col-xl-6 wow fadeInUp" data-wow-delay=".5s">
                <div className="quote-form-one__content">
                  <h2 className="quote-form-one__title">Get a Quote</h2>
                  <p className="mb-20">Chat with us before you miss out on a single potential client.</p>
                  <form ref={form} onSubmit={sendEmail} className="contact-quote-form">
                    <div className="row">
                      <div className="col-xl-6">
                        <input type="text" className="rounded-0" name="user_name" placeholder="Your name" required />
                      </div>
                      <div className="col-xl-6">
                        <input type="email" className="rounded-0" name="user_email" placeholder="Your email" required />
                      </div>
                      <div className="col-xl-6">
                        <input type="tel" className="rounded-0" name="user_phone" placeholder="Your phone" required />
                      </div>
                      <div className="col-xl-6">
                        <input type="text" className="rounded-0" name="user_website_url" placeholder="Website URL" required />
                      </div>
                      <div className="col-xl-12">
                        <div className="form_chk-bx">
                          <h5>What services are you looking for? <span className="color-red">*</span></h5>
                          <ul>
                            <li><input type="checkbox" id="input-chk-1" /><label htmlFor="input-chk-1"> Link building for Your Brand</label></li>
                            <li><input type="checkbox" id="input-chk-2" /><label htmlFor="input-chk-2"> White Label Link Building for Agencies</label></li>
                            <li><input type="checkbox" id="input-chk-3" /><label htmlFor="input-chk-3"> SaaS Link Building</label></li>
                            <li><input type="checkbox" id="input-chk-4" /><label htmlFor="input-chk-4"> Cannabis Link Building</label></li>
                            <li><input type="checkbox" id="input-chk-5" /><label htmlFor="input-chk-5"> Casino Link Building</label></li>
                            <li><input type="checkbox" id="input-chk-6" /><label htmlFor="input-chk-6"> Fully Managed SEO</label></li>
                            <li><input type="checkbox" id="input-chk-7" /><label htmlFor="input-chk-7"> SEO Reseller</label></li>
                          </ul>
                          <input type="hidden" name="user_service" />
                        </div>
                      </div>
                      <div className="col-xl-12">
                        <select name="user_budget" required>
                          <option defaultChecked value="Monthly Budget?">Monthly Budget?</option>
                          <option value="Less than $500">Less than $500</option>
                          <option value="Less than $1000">Less than $1000</option>
                          <option value="Less than $2000">Less than $2000</option>
                          <option value="Less than $5000">Less than $5000</option>
                          <option value="Less than $20,000">Less than $20,000</option>
                        </select>
                        <input type="hidden" name="user_selected_budget" />
                      </div>
                      <div className="col-xl-12">
                        <textarea id="message" name="user_message" className="rounded-0" placeholder="Type your message..."></textarea>
                        <button type="submit" className="contact-btn rr-bounce-up rounded-0">Send Message</button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default QuoteFormTwo;
