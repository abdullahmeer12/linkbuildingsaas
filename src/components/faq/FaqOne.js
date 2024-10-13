import React from "react";
import Accordion from "react-bootstrap/Accordion";

const FaqOne = () => {
  return (
    <>
      {/* faq start */}
      <div className="faq-one pt-0 pb-140">
        <div className="container">
          <div className="row">
            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-12">
              <div className="faq-one-img">
                <img src="/assets/img/faq.jpg" alt="Faq Page Image" />
              </div>
            </div>
            <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-12">
              <div className="faq-one__content">
                <h2 class="section-title__one-title mb-20">
                  Frequently Asked Questions  
                </h2>
                <div className="faq-one__faq">
                  <Accordion defaultActiveKey="1">
                    <Accordion.Item eventKey="0">
                      <Accordion.Header>
                        What is a link-building service?
                      </Accordion.Header>
                      <Accordion.Body>
                        Link building service is the process of building quality
                        backlinks using ethical white hat link building
                        techniques. We know links exist everywhere across the
                        internet and play a key role in connecting web pages to
                        others that contextually relate. Links help users to
                        navigate across easily and learn more about specific
                        topics or go in-depth on research.
                        <br />
                        Beyond these objectives, there is much that links do.
                        From search engine algorithms’ perspective, links are
                        used to determine the websites and web pages that
                        deserve to rank higher for users' search queries.
                        <br />
                        Webmasters want to increase their search rankings and go
                        the extra mile by earning, placing, and managing their
                        links. This is known as the link-building “Quality
                        first” approach, which is fundamental to a strong search
                        engine optimization (SEO) strategy. At the same time, it
                        is an effective marketing tactic too.
                      </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="1">
                      <Accordion.Header>
                      What are the types of Link Building?
                      </Accordion.Header>
                      <Accordion.Body>
                      Going further, link building is the practice of intentionally earning inbound links that point to the pages of your site. Links (short form for “hyperlinks”) refer to the bits of text that exist with an “href” attribute in HTML.
                      <br />
                      Though links often point to web pages, they may point to PDFs, images, and diverse types of files. Typically, internal links are meant to simplify the user navigation of your site. However, “link building” is all about building links on other domains that point back to your pages.
                      <br />
                      Essentially, backlink building methods are divided into two categories: <br />
                     <strong> Earned Links:</strong> To earn links, you need to create high-quality content on your site so that others will naturally want to include a link for their own users in this content.
                     <br />
                     <strong> Manual Link-Building: </strong>With manual link building, you can use a variety of tactics, ranging from spamming links on forum comments to having your articles featured on top-rated publications (along with links that point back to your website).
                      </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="2">
                      <Accordion.Header>
                      How much does link-building service costs?
                      </Accordion.Header>
                      <Accordion.Body>
                      This version conveys the essence of SEO in a concise
                        manner, emphasizing the importance of balancing all
                        three aspects to achieve successful search engine
                        optimization. It uses straightforward language that is
                        easy to understand and targets both search engines and
                        users as its audience.
                        <br/>
                        You will notice a considerable pricing difference among the link-building service options in the market. Selecting the exemplary service depends on a complete assessment of your requirements and budget while competing for the desired keywords.
                      </Accordion.Body>
                    </Accordion.Item>


                    <Accordion.Item eventKey="3">
                      <Accordion.Header>
                      What are the benefits of a link-building service?
                      </Accordion.Header>
                      <Accordion.Body>
                      Link building offers a range of benefits, most significantly for promoting the rankings of your web pages in search engines. There are other aspects of link-building that you should be aware of.
                      <br/>
                      <strong> SEO Relevance:</strong> Primarily, search engines consider two main concepts while determining search rankings: relevance and authority. As the name suggests, relevance is all about matching your content with the user’s intent. Keyword optimization strategies are used to ensure relevance. Authority, on the other hand, measures the trustworthiness of your site. This trustworthiness is calculated mathematically in a system called PageRank in Google searches (while other search engines use similar systems).
                      <br/>
                      Simply put, the number of links pointing to a web page and the authority of those connections are used to determine the credibility of that web page. Indeed, the links on high-authority sources pass more authority than those on low-authority sources.
                      <br/>
                      <strong>  Referral Traffic:</strong> The basic purpose of links is to enable the user to navigate from one page to another. Building more links provides more opportunities for the users to see and click them, which brings referral traffic to the site. If you build valuable links on high-profile sources, you could get a massive number of direct visits per month to your website with these links.
                      </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="4">
                      <Accordion.Header>
                        How do Link Building Saas differ from its competitor SEO service providers?
                      </Accordion.Header>
                      <Accordion.Body>
                      Over the years in the link-building realm, we have worked on all kinds of projects, collaborating with businesses with smaller local link-building budgets of just a few hundred dollars a month to enterprise-grade budgets up to thousands of dollars, and everything in between as well.
                        <br></br>
                        Whatever your domain or campaign objectives are, our team offers scalable and adaptive services to fulfill your long-term SEO goals. We cater the best quality content for securing the industry’s best backlinks for your website. Fill out the form below to contact us today, and we will provide a free assessment and proposal, including the costs and pricing for your project.
                      </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="5">
                      <Accordion.Header>
                       Will Link Building Saas give me the reporting & analysis? 
                      </Accordion.Header>
                      <Accordion.Body>
                      We at Link Building Saas, in addition to the conventional link-building services, also provide feedback, measurement, reporting, and analysis. We carefully consider the sources, the target web pages, and the strategy to reinforce the reputation.
                      <br/>
                      We thoroughly monitor the growth of your website in search engine rankings as well as the referral traffic it gets. If you want to know more about how our expert link-building service can boost the traffic to your site, or if you want to take your existing link-building campaign to the next level, contact us right now. We will share a free analysis report and a link-building strategy for your website.
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
    </>
  );
};

export default FaqOne;
