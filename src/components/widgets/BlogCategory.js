import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { fetchDataFromApi } from '../../../utils/api';

const BlogCategory = () => {
    const [data,setData] = useState()
	console.log("categories",data)
	useEffect(()=>{
		fetchDataFromApi('/api/categories').then((response)=> setData(response.data)).catch(error => console.error('Error fetching data:', error));
	},[])
    return (
        <>
            <div className="sidebar__single widget_categories">
                <h3 className="sidebar__title mb-30">Categories</h3>
                <ul>
                    {data?.map((item,index)=>{
                        return(
                        <li><Link href="/blog">{item?.attributes?.categoryTitle}</Link></li>
                        )
                    })} 
                </ul>
            </div>
        </>
    )
}

export default BlogCategory;