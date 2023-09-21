import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({children}) => {
  return (
    <main>
      <Navbar />
      <div className="container mx-auto max-w-7xl lg:max-w-full min-h-screen">
        {children}
      </div>
      <Footer/>
    </main>
  );
};

export default Layout;
