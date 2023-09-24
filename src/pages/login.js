import React, { useState } from "react";
import Layout from "../components/Layout";
import Link from "next/link";

const SponsorLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
  };

  return (
    <Layout>
      <div className="gradient fixed"></div>
      <div className="container mx-auto mt-8">
        {loggedIn ? (
          <div>
            <h2 className="text-3xl font-semibold mb-4">Welcome, Sponsor!</h2>
          </div>
        ) : (
          <div className="max-w-screen-sm mx-auto mt-9 px-5">
            <h2 className="text-3xl font-semibold mb-4 text-[#ffffff]">
              Sponsor Login
            </h2>
            <form onSubmit={handleLogin}>
              <div className="mb-4">
                <label htmlFor="email" className="block text-[#e2e8ff]">
                  Email:
                </label>
                <input
                  type="email"
                  id="email"
                  className="border border-gray-300 rounded px-3 py-2 w-full"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="password" className="block text-[#e2e8ff]">
                  Password:
                </label>
                <input
                  type="password"
                  id="password"
                  className="border border-gray-300 rounded px-3 py-2 w-full"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <button
                type="submit"
                className="bg-gray-700  text-[#e2e8ff] px-6 py-2 rounded-md hover:bg-gray-500 transition duration-300 transform hover:scale-105"
              >
                Login
              </button>
            </form>
            <p className="mt-4  text-gray-400">
              Don't have an account? {""}
              <Link href="/signup" className="text-white">
                Sign up here
              </Link>
            </p>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default SponsorLogin;
