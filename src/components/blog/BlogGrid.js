import React from 'react';
import Link from 'next/link';
import { fetchDataFromApi } from "../../../utils/api";
import { useEffect, useState } from "react";
import dayjs from 'dayjs';

const BlogGrid = () => {
 
    const [data,setData] = useState()
	
	useEffect(()=>{
		fetchDataFromApi('/api/categories?populate[categoryImage]=*&populate[blogs][populate]=postThumbnail').then((response)=> setData(response.data)).catch(error => console.error('Error fetching data:', error));
	},[])

    if (!data) {
        return (
          <div className="loading-screen">
            <div className="loading-spinner"></div>
          </div>
        );
      }
    return (
        <>
            <div className="blog-one pb-140">
                <div className="tabs-one">
                    <div className="blog-category-tabs pb-100">
                        <div className="container">
                            <div className="row">
                                <div className="col-xxl-12 text-center">
                                    <ul className="nav nav-pills mb-100" id="pills-tab" role="tablist">
                                        {data?.map((item,index)=>{
                                            return(
                                                <li className="nav-item" role="presentation" key={index}>
                                                <button className={`nav-link ${index==0 ? "active":"" }`} 
                                                id="pills-search-tab" data-bs-toggle="pill" data-bs-target={`#itemid${index}`}type="button" role="tab" aria-controls="pills-search" aria-selected="true">
                                                    <img src={item.attributes.categoryImage ? process.env.NEXT_PUBLIC_DEV_URL + item.attributes.categoryImage.data.attributes.url : "/assets/img/icon/globe.svg"}   alt="img" />
                                                    {/* <img src="/assets/img/icon/globe-white.svg" className="active-tab-icon" alt="img" /> */}
                                                    <span>{item.attributes.categoryTitle && item.attributes.categoryTitle}</span>
                                                </button>
                                            </li>
                                            )
                                        })}  
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xxl-12">
                            <div className="tab-content" id="pills-tabContent">
                            {data?.map((item,index)=>{
                                  return(
                                <div key={index} className={`tab-pane fadeInUp ${index == 0 ? "show active": ""}`} id={`itemid${index}`} role="tabpanel" aria-labelledby="pills-search-tab" tabindex="0">
                                    <div className="container">
                                        <div className="row">
                                        {item?.attributes?.blogs?.data?.map((item,index)=>{
                                            return(
                                            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12" key={index}>
                                                <div className="blog-grid__single mb-30">
                                                    <div className="blog-grid__single-img">
                                                        <Link href={`/blog/${item.id}`}>
                                                            <img src={item.attributes.postThumbnail ? process.env.NEXT_PUBLIC_DEV_URL + item.attributes.postThumbnail.data.attributes.url: "/assets/img/blog/2.jpg"} alt="Blog Img" />
                                                        </Link>
                                                    </div>
                                                    <div className="blog-grid__single-content">
                                                        <div className="postbox__meta">
                                                            <span><i className="fa-light fa-calendar-lines"></i>{dayjs(item.attributes.publishedAt).format('MMMM D, YYYY')}</span>
                                                        </div>
                                                        <h2><Link href={`/blog/${item.id}`}>{item.attributes.blogTitle}</Link></h2>
                                                        <div className="btn-box postbox__read-more">
                                                            <Link href={`/blog/${item.id}`} className="tp-btn postbox__more-btn">Read More <i className="fa-solid fa-arrow-right"></i></Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                              )
                                            })}  
                                        </div>
                                    </div>
                                </div>
                                  )
                                })}  
                            </div>
                        </div>
                    </div>
                    {/* <div className="row">
                        <div className="col-xxl-12">
                            <div className="basic-pagination text-center mt-40">
                                <nav>
                                    <ul>
                                        <li><Link href="/" className="prev"><i className="fa-regular fa-arrow-left"></i><span>Prew</span></Link></li>
                                        <li><span className="current">1</span></li>
                                        <li><Link href="/"><span>2</span></Link></li>
                                        <li><Link href="/"><span>3</span></Link></li>
                                        <li><Link href="/" className="next"><span>Next</span><i className="fa-regular fa-arrow-right"></i></Link></li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
        </>
    )
}

export default BlogGrid;