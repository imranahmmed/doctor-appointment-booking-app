import React from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/footer";
import Routers from "../routes/Routers";
const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <Routers />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
