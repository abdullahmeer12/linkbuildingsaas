import SEO from "../common/seo/Seo";
import HeaderOne from "../common/header/HeaderOne";
import BreadcrumbTwo from "../common/breadcrumb/BreadcrumbTwo";
import BlogGrid from "../components/blog/BlogGrid";
import FooterThree from "../common/footer/FooterThree";
import FooterOne from "@/common/footer/FooterOne";
import client from '../../lib/apollo-client';
import { GET_POSTS, GET_CATEGORIES } from '../../lib/queries';
import { gql } from '@apollo/client';

export default function BlogPage({posts,categories}) {
 
	return (
		<>
			<SEO pageTitle={"Blog Page"}  />
			<HeaderOne />
			<BreadcrumbTwo 
                heading="The SEO Ranking Blog"
                currentPage="Stay Updated with the Latest News and Best Strategies" 
            />
			<BlogGrid posts={posts} categories={categories} />
			<FooterOne />
		</>
	);
}


export async function getStaticProps() {
    try {
      const { data: postsData } = await client.query({
        query: GET_POSTS,
      });
  
      const { data: categoriesData } = await client.query({
        query: GET_CATEGORIES,
      });
   
      return {
        props: {
          posts: postsData?.posts?.nodes || [],
          categories: categoriesData?.categories?.nodes || [],
        },
        revalidate: 10,  
      };
    } catch (error) {
      console.error('Error fetching data:', error);
      return {
        props: {
          posts: [],
          categories: [],
        },
      };
    }
  }