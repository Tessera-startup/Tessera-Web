import React from "react";
import Navbar from "./Navbar";

const Layout = ({children}) => {
  return (
    <main>
      <Navbar />
      <div className="container mx-auto max-w-7xl lg:max-w-full min-h-screen">
        {children}
      </div>
    </main>
  );
};

export default Layout;
