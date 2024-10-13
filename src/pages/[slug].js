import SEO from "../common/seo/Seo";
import HeaderOne from "../common/header/HeaderOne";
import Breadcrumb from "../common/breadcrumb/Breadcrumb";
import BlogDetails from "../components/blog/BlogDetails";
import FooterThree from "../common/footer/FooterThree";
import FooterOne from "@/common/footer/FooterOne";
import client from '../../lib/apollo-client';
import { GET_SINGLE_POST ,GET_POST_SLUGS ,GET_CATEGORIES ,GET_POSTS} from '../../lib/queries';
import { gql } from '@apollo/client';

export default function BlogDetailsPage({ post ,categories ,posts}) {  
	
	return (
		<>
			<SEO pageTitle={post.title ?? "Blog Title"} description={post.postDescription} keywords={post?.tags} />
			<HeaderOne />
			{/* <Breadcrumb 
                heading="Blog Details"
                currentPage="Blog Details" 
            /> */}
			<BlogDetails post={post} categories={categories} allpost={posts}/>
			<FooterOne />
		</>
	);
}

// getStaticPaths: Fetch all slugs and generate dynamic paths
export async function getStaticPaths() {
	const { data } = await client.query({
	  query: GET_POST_SLUGS,
	});
  
	const paths = data.posts.nodes.map((post) => ({
	  params: { slug: post.slug },
	}));
  
	return {
	  paths,
	  fallback: 'blocking',  // 'blocking' will generate the page on demand if it doesn't exist
	};
  }
  
 // getStaticProps: Fetch the content for a single post
export async function getStaticProps({ params }) {
	try {
	  // Fetch the single post data using the slug
	  const { data: postData } = await client.query({
		query: GET_SINGLE_POST,
		variables: { slug: params.slug },
	  });
  
	  // If the post does not exist, return `null`
	  const post = postData?.postBy || null;
  
	  if (!post) {
		return {
		  notFound: true, // Return 404 if the post doesn't exist
		};
	  }
  
	  // Fetch categories for sidebar
	  const { data: categoriesData } = await client.query({
		query: GET_CATEGORIES,
	  });

	  const { data: allpostsData } = await client.query({
        query: GET_POSTS,
      });
  
	  return {
		props: {
		  post: {
			title: post?.title || null,
			content: post?.content || null,
			featuredImage: post?.featuredImage?.node?.mediaItemUrl || null, // Fetch the featured image URL
			date: post?.date || null, // Fetch the post date
			author: post?.author?.node?.name || null, 
			tags: post?.tags?.nodes?.map(tag => tag.name) || null,
			postDescription: post?.postDescription?.post || null, 
		  },
		  categories: categoriesData?.categories?.nodes || [], // Categories for sidebar
		  	posts :  allpostsData?.posts?.nodes || [],
		},
		revalidate: 10, // Revalidate every 10 seconds
	  };
	} catch (error) {
	  console.error('Error fetching post:', error);
  
	  // In case of error, return an empty post object or a 404 page
	  return {
		props: {
		  post: null, // Return null if there was an error
		  posts : [],
		  categories : []
		},
	  };
	}
  }
  