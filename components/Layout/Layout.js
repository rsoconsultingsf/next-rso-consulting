import React from "react";

import StickyHeader from "./StickyHeader";
import Footer from "./Footer";

const Layout = (props) => {
  const { children } = props;

  return (
    <>
      <StickyHeader />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
