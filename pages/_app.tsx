import "../styles/globals.css";
import Layout from "../components/layout/Layout";

import * as ga from "../lib/services/ga";
import { useEffect } from "react";
import { useRouter } from "next/router";
import AppThemeProvider from "../components/provider/AppThemeProvider";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      ga.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);

    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <AppThemeProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AppThemeProvider>
  );
}

export default MyApp;
