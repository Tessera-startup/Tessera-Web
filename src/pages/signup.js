import React, { useState } from "react";
import Layout from "../components/Layout";
import axios from "axios";
import { useRouter } from "next/router";

const SponsorSignup = () => {
  const [businessname, setBusinessname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phonenumber, setPhonenumber] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const res = await axios.post(
        "https://tessera-api.onrender.com/auth/register",
        {
          businessname,
          email,
          password,
          confirmPassword,
          phonenumber,
        }
      );
      console.log(res.data);
      //Check for a successful response
      if(res.status === 200){
        router.push('/login');
      } else {
        console.error("Unexpected response", res);
        setError("Registration failed. Please try again.");
      }
    } catch (error) {
      if (error.response && error.response.status === 400) {
        // Check if the server responds with a 400 status (Bad Request)
        // This could indicate that the email is already taken
        console.log("User with this email is already registered.");
        setError("User with this email is already registered.");
      } else {
        // Handle other errors
        console.error(
          "Registration failed:",
          error.response?.data || error.message
        );
        setError("Registration failed. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout>
      <div className="gradient fixed"></div>
      <div className="container mx-auto mt-32 relative z-10">
        <div className="max-w-screen-sm mx-auto mt-9 px-5">
          <h2 className="text-3xl font-semibold mb-4 text-[#e2e8ff]">
            Sponsor Signup
          </h2>
          <form onSubmit={handleSignup}>
            <div className="mb-4">
              <label htmlFor="businessName" className="block text-[#e2e8ff]">
                Business Name:
              </label>
              <input
                type="text"
                id="businessname"
                className="bg-gray-800 text-white btn-transparent rounded mt-1 px-3 py-2 w-full"
                placeholder="Enter your business name"
                value={businessname}
                onChange={(e) => setBusinessname(e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-[#e2e8ff]">
                Business Email:
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
              {error && <p className="text-red-500">{error}</p>}
            </div>
            <div className="mb-4">
              <label htmlFor="phoneNumber" className="block text-[#e2e8ff]">
                Phone Number:
              </label>
              <input
                type="tel"
                id="phonenumber"
                className="bg-gray-800 text-white btn-transparent rounded mt-1 px-3 py-2 w-full"
                placeholder="Enter your phone number"
                value={phonenumber}
                onChange={(e) => setPhonenumber(e.target.value)}
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
            <div className="mb-4">
              <label htmlFor="confirmPassword" className="block text-[#e2e8ff]">
                Confirm Password:
              </label>
              <input
                type="password"
                id="confirmPassword"
                className="bg-gray-800 text-white btn-transparent rounded mt-1 px-3 py-2 w-full"
                placeholder="Confirm your password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
              {error && (
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mt-4">
                  {error}
                </div>
              )}
            </div>
            <div className="mb-4">
              <button
                type="submit"
                className="relative text-gray-300 btn-transparent bg-gray-700 hover:text-white px-6 py-2 rounded-md text-sm"
                disabled={loading}
              >
                <div className="lds-dual-ring-container">
                  {loading && (
                    <div className="flex justify-center items-center">
                      Signing up <div className="lds-dual-ring"></div>
                    </div>
                  )}
                  {!loading && <span>Signup</span>}
                </div>
              </button>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default SponsorSignup;
