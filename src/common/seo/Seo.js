import Head from "next/head";

const SEO = ({ pageTitle }) => (
    <>
        <Head>
            <title>
                {pageTitle && `${pageTitle} || Link Building Saas - SEO & Digital Marketing Agency `}
            </title>
            <meta httpEquiv="x-ua-compatible" content="ie=edge" />
            <meta name="description" content=" Link Building Saas - SEO & Digital Marketing Agency" />
            <meta name="robots" content="noindex, follow" />
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        </Head>
    </>
);

export default SEO;