import React from "react";
import Link from "next/link";
import dayjs from "dayjs";

const BlogLatestPost = ({ allpost }) => {
  return (
    <>
      <div className="sidebar__single widget_latest_post">
        <h3 className="sidebar__title mb-30">Recent Posts</h3>
        <div className="sidebar__post-box">
          {[...allpost]
            ?.sort((a, b) => new Date(b.date) - new Date(a.date)) // Sort posts by date (newest first)
            ?.slice(0, 3) // Take only the first 5 posts
            ?.map((value, index) => {
              return (
                <div className="sidebar__post-single" key={index}>
                  <div className="sidebar-post__img">
                    <Link href={`/${value.slug}`}>
                      <img
                        src={
                          value.featuredImage?.node?.sourceUrl ??
                          "/assets/img/placeholder.jpg"
                        }
                        alt={value.title}
                      />
                    </Link>
                  </div>
                  <div className="sidebar__post-content-box">
                    <h3>
                      <Link href={`/${value.slug}`}>
                        {value.title ?? "Post Title"}
                      </Link>
                    </h3>
                    <span>
                      <i className="fa-light fa-calendar-lines"></i>
                      {dayjs(value?.date).format("MMMM-DD-YYYY")}
                    </span>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default BlogLatestPost;
