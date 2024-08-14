import React from 'react';
import Link from 'next/link';
import { useState ,useEffect } from "react";
import { fetchDataFromApi } from "../../../utils/api";
import dayjs from 'dayjs';
import { useRouter } from 'next/router';

const BlogLatestPost = () => {
    const [data,setData] = useState()
    const router = useRouter();
    const recentBlogData = ()=>{
        fetchDataFromApi(`/api/blogs?sort=createdAt:desc&pagination[limit]=4&populate=*`).then((response)=> setData(response.data)).catch(error => console.error('Error fetching data:', error));
    }
	useEffect(()=>{
		recentBlogData()
        const handleRouteChange = () => {
            recentBlogData();
        };
        router.events.on('routeChangeComplete', handleRouteChange);

        return () => {
            router.events.off('routeChangeComplete', handleRouteChange);
        };
	},[router.events])
    return (
        <>
            <div className="sidebar__single widget_latest_post">
                <h3 className="sidebar__title mb-30">Recent Posts</h3>
                <div className="sidebar__post-box">
                    {data?.map((iteam,index)=>{
                        return(
                    <div className="sidebar__post-single" key={index}>
                        <div className="sidebar-post__img">
                            <Link href={`/blog/${iteam?.id}`}><img src={iteam?.attributes?.postThumbnail?.data.attributes?.url ? process.env.NEXT_PUBLIC_DEV_URL + iteam?.attributes?.postThumbnail?.data.attributes?.url :"/assets/img/blog/1.jpg"} alt="img" /></Link>
                        </div>
                        <div className="sidebar__post-content-box">
                            <h3><Link href={`/blog/${iteam?.id}`}>{iteam?.attributes?.blogTitle}</Link></h3>
                            <span><i className="fa-light fa-calendar-lines"></i>{dayjs(iteam?.attributes?.publishedAt).format('MMMM D, YYYY')}</span>
                        </div>
                    </div>)
                    })} 
                </div>
            </div>
        </>
    )
}

export default BlogLatestPost;