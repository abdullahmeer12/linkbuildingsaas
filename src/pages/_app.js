import React, { useEffect } from "react";
import { animationCreate } from "../../utils/utils";
import ScrollToTop from "react-scroll-to-top";
import { FaAngleUp } from "react-icons/fa";
import Head from "next/head";
import { ApolloProvider } from "@apollo/client";
import client from "../../lib/apollo-client";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    setTimeout(() => {
      animationCreate();
    }, 500);
  }, []);
  return (
    <>
      <Head> </Head>
      <div className="page-wrapper">
        <ApolloProvider client={client}>
          <Component {...pageProps} />
        </ApolloProvider>
      </div>
      <ScrollToTop className="scroll-to-top" smooth component={<FaAngleUp />} />
    </>
  );
}

export default MyApp;
