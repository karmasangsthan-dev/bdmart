import Head from "next/head";
import Header from "./Shared/Header/Header";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchUser } from "../features/auth/authSlice";
import Script from "next/script";

const Layout = ({ children, title = "Bangladesh Mart" }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    dispatch(fetchUser(token));
  }, [dispatch]);
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Bangladesh Mart" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Script
        src="https://kit.fontawesome.com/6fd519cc43.js"
        crossorigin="anonymous"
      />

      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW"
        crossOrigin="anonymous"
      />
      <Header />
      <main>{children}</main>
      {/* <Footer /> */}
    </div>
  );
};

export default Layout;
