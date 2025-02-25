"use client";
import { FaGoogle } from "react-icons/fa";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import axios from "axios";

const Login = () => {
  // Define state variables with types
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");

  const router = useRouter(); // Next.js navigation

  // Define function type for event handling
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent default form submission

    if (!email || !password) {
      setError("All fields are required");
      return;
    }

    setError(""); // Clear existing error messages

    try {
      const response = await axios.post("https://studyboosta.onrender.com/users", { email, password });

      if (response.status === 200) {
        alert("Login Successful");
        router.push("/Home");
      }
    } catch (error: any) {
      setError(error.response?.data?.message || "Incorrect details. Please try again.");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-white">
      <div className="w-full max-w-sm bg-white p-6 rounded-lg shadow-md m-6">
        {/* Logo */}
        <h1 className="text-3xl font-bold text-center text-[#050C9C] mb-5">
          StudyBoosta
        </h1>
        <p className="text-center text-[12px] font-semibold mt-1 mb-10 text-[#050C9C]">
          LOGIN TO YOUR ACCOUNT
        </p>
        
        {/* Display error message */}
        {error && <p className="text-center text-red-500 text-sm mt-2">{error}</p>}

        <form onSubmit={handleSubmit}>
          {/* Input Fields */}
          <div className="mt-6">
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full p-3 border rounded-2xl bg-[#F1F5FF] mt-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              id="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              type="password"
              className="w-full mt-3 p-3 border rounded-2xl bg-[#F1F5FF] focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <div className="text-right text-sm text-[#000000B3] mt-2 cursor-pointer m-5">
              Forgot Password?
            </div>
          </div>

          {/* Sign In Button */}
          <button type="submit" className="w-full bg-[#050C9C] text-white py-3 rounded-2xl mt-4 font-bold text-[20px] hover:bg-blue-800 transition">
            Sign in
          </button>

          {/* Separator */}
          <div className="flex items-center my-10">
            <hr className="flex-grow border-[#000000B3]" />
            <span className="px-2 text-black text-sm">Or continue with</span>
            <hr className="flex-grow border-[#000000B3]" />
          </div>

          {/* Google Sign In Button */}
          <button
            type="button" // Prevents form submission
            className="w-full flex items-center font-bold text-[16px] justify-center border py-3 rounded-lg bg-[#F1F5FF] hover:bg-[#F1F9F5] transition"
          >
            <FaGoogle className="mr-2" />
            Sign in with Google
          </button>

          {/* Signup Link */}
          <p className="text-center text-sm font-light text-black mt-[120px]">
            Don’t have an account?
            <Link href="/signup" className="text-black font-bold cursor-pointer">
              {" "} Sign up now
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
