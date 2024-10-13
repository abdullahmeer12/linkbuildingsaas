import Head from "next/head";

const SEO = ({ pageTitle , description , keywords}) => (
    <>
        <Head>
            <title>
                {pageTitle && `${pageTitle} || Link Building SaaS - SEO & Digital Marketing Agency  `}
            </title>
            <meta httpEquiv="x-ua-compatible" content="ie=edge" />
            <meta name="keywords" content={keywords ?? "Digital Marketing Agency"}/>
            <meta name="description" content={description ?? "Link Building SaaS - SEO & Digital Marketing Agency"} />
            <meta name="robots" content="noindex, follow" />
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        </Head>
    </>
);

export default SEO;