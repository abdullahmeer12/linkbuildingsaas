import SEO from "../../common/seo/Seo";
import HeaderOne from "../../common/header/HeaderOne";
import Breadcrumb from "../../common/breadcrumb/Breadcrumb";
import BlogDetails from "../../components/blog/BlogDetails";
import FooterThree from "../../common/footer/FooterThree";
import { useState, useEffect } from "react";
import { fetchDataFromApi } from "../../../utils/api";
import { useRouter } from "next/router";
import FooterOne from "@/common/footer/FooterOne";

export default function BlogDetailsPage() {
  const router = useRouter();
  const { id } = router.query;
  const [data, setData] = useState();
  useEffect(() => {
    fetchDataFromApi(`/api/blogs/${id}?populate=*`)
      .then((response) => setData(response.data))
      .catch((error) => console.error("Error fetching data:", error));
  }, [id]);
  if (!data) {
    return (
      <div className="loading-screen">
        <div className="loading-spinner"></div>
      </div>
    );
  }
  return (
    <>
      <SEO
        pageTitle={
          data?.attributes?.blogTitle
            ? data?.attributes?.blogTitle
            : "Blog title"
        }
      />
      <HeaderOne />
      <Breadcrumb heading="Blog Details" currentPage="Blog Details" />
      <BlogDetails data={data} />
      <FooterOne />
    </>
  );
}
