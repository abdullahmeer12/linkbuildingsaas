import React from 'react';
import Link from 'next/link';

const BlogCategory = ({categories}) => {
    console.log("categories",categories)
    return (
        <>
            <div className="sidebar__single widget_categories">
                <h3 className="sidebar__title mb-30">Categories</h3>
                <ul>
                    {categories?.map((category,index)=>{
                    {/* {categories?.sort((a, b) => new Date(b.date) - new Date(a.date))?.map((category,index)=>{ */}
                        return(
                            <>
                            {category?.enableOrDisable.enableOrDisable && 
                            <li key={index}><Link href="/blog">{category.name?? "Category Name"}</Link></li>}</>
                        )
                    })}
                    
                </ul>
            </div>
        </>
    )
}

export default BlogCategory;