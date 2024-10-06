import React from 'react';
import Link from 'next/link';
import BlogSearch from '../widgets/BlogSearch';
import BlogCategory from '../widgets/BlogCategory';
import BlogLatestPost from '../widgets/BlogLatestPost';
import BlogTags from '../widgets/BlogTags';
import dayjs from 'dayjs';
// import parse from 'html-react-parser'; 


const BlogDetails = ({post ,categories ,allpost}) => {
    return (
        <>
            <div className="blog-details pt-120 pb-60">
                <div className="container">
                    <div className="row">
                        <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-12 col-sm-12">
                            <div className="blog-details__left">
                                <div className="blog-details__img mb-25">
                                    <img src={post?.featuredImage ?? "/assets/img/blog/blog-details.jpg"}  alt="Blog Details" />
                                </div>
                                <div className="blog-details__content">
                                    <div className="blog-details__meta mb-20">
                                        <ul>
                                            <li><i className="fa-light fa-calendar-lines"></i><span>{dayjs(post?.date).format("MMMM-DD-YYYY")} </span></li>
                                            <li><i className="fa-light fa-user-large"></i>By {post?.author}</li>
                                            {/* <li><i className="fa-sharp fa-light fa-comment-dots"></i><Link href="/">3 Comment</Link></li> */}
                                        </ul>
                                    </div>
                                    <h2 className="postbox__title">{post?.title?? "Post Title"}</h2>
                                    <div className="my-custom-content">
                                         
                                    <div dangerouslySetInnerHTML={{ __html: post?.content }} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-12 col-sm-12">
                            {/* sidebar start */}
                            <div className="sidebar">
                                {/* <BlogSearch /> */}
                                <BlogLatestPost allpost={allpost} />
                                <BlogCategory categories={categories}  />
                                {/* <BlogTags /> */}
                            </div>
                            {/* sidebar end */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BlogDetails;