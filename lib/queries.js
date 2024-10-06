import { gql } from "@apollo/client";

export const GET_POSTS = gql`
  query GetPosts {
    posts {
      nodes {
        id
        title
        content
        slug
        date
        featuredImage {
              node {
                sourceUrl
                mediaItemUrl
              }
            }
      }
    }
  }
`;

export const GET_CATEGORIES = gql`
  query GetCategories {
    categories {
      nodes {
        id
        name
        databaseId
        slug
        enableOrDisable {
          enableOrDisable
        }
        categoryImage {
          categoryImage {
            node {
              mediaItemUrl
            }
          }
        }
        posts {
          nodes {
            title
            uri
            slug
            featuredImage {
              node {
                sourceUrl
                mediaItemUrl
              }
            }
            date
            author {
              node {
                name
              }
            }
          }
        }
      }
    }
  }
`;

export const GET_POST_SLUGS = gql`
  query GetPostSlugs {
    posts {
      nodes {
        slug
      }
    }
  }
`;

export const GET_SINGLE_POST = gql`
  query GetSinglePost($slug: String!) {
    postBy(slug: $slug) {
      title
      content
      date
      featuredImage {
        node {
          mediaItemUrl   
        }
      }
      author {
        node {
          name
        }
      }
    }
  }
`;


