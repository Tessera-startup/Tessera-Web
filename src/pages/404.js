import React from "react";
import Layout from "../components/Layout";
import Link from "next/link";

const Custom404 = () => {
  return (
    <Layout>
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-gray-700">404</h1>
          <p className="text-xl text-gray-700 mt-4">
            Oops! The page youre looking for doesnt exist.
          </p>
          <p className="text-xl text-gray-700 mt-2">
            Lets get you back to the homepage.
          </p>
          <div className="mt-4">
            <Link href="/" className="text-gray-700 font-semibold">
              Go to Homepage
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Custom404;
