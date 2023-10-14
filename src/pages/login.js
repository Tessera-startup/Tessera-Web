import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import Link from "next/link";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import { loginAction } from "../services/actions/authActions";
import { useDispatch } from "react-redux";

const SponsorLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const router = useRouter();
  const dispatch = useDispatch();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      setLoading(true); // Set loading to true on submit

      const formData = {
        email: email,
        password: password,
      };

      // Dispatch the login action and wait for the Promise to resolve
      const actionResult = await dispatch(loginAction({ formData, toast }));

      console.log("Login Action Result:", actionResult);

      if (actionResult.type === `${loginAction.fulfilled}`) {
        console.log("Login successful");
        setError("");
        router.push("/admin");
      } else {
        console.log("Login failed");
        setError("Login failed. Please check your credentials.");
      }
    } catch (error) {
      console.error("Error during login:", error);
      setError("Login failed. Please check your credentials.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    return () => {
      setLoading(false);
    };
  }, []);

  return (
    <Layout>
      <div className="gradient fixed"></div>
      <div className="container mx-auto mt-32 z-5 relative">
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
                className="bg-gray-800 text-white btn-transparent rounded mt-1 px-3 py-2 w-full"
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
                className="bg-gray-800 text-white btn-transparent rounded mt-1 px-3 py-2 w-full"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            {error && (
              <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mt-4">
                {error}
              </div>
            )}
            <button
              type="submit"
              disabled={loading}
              className="text-gray-300 btn-transparent mt-4 bg-gray-700 hover:text-white px-6 py-2 rounded-md text-sm"
            >
              <div className="lds-dual-ring-container">
                {loading && (
                  <div className="flex justify-center items-center">
                    Login in <div className="lds-dual-ring"></div>
                  </div>
                )}
                {!loading && <span>Login</span>}
              </div>
            </button>
          </form>
          <p className="mt-4 text-gray-400">
            Don't have an account?{" "}
            <Link href="/signup" className="text-white">
              Sign up here
            </Link>
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default SponsorLogin;
