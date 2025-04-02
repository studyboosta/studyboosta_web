"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext"; // Use Auth Context
import Link from "next/link";
import { toast, ToastContainer } from "react-toastify";
import { FiEye, FiEyeOff } from "react-icons/fi";

const Login = () => {
  const { login } = useAuth(); // Get login function from context
  const router = useRouter();

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const validateForm = () => {
    if (!email || !password) {
      toast.error("All fields are required");
      return false;
    }
    setError("");
    return true;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateForm()) return;
    setLoading(true);

    const data = {
      email,
      password,
    };

    try {
      const response = await fetch("https://studyboosta.onrender.com/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        const result = await response.json();
        const token = result.access_token;
        if (!token) {
          throw new Error("Token not received from server");
        }

        // const user = {
        //   email: result.email,
        // };
        localStorage.setItem("token", token);
        login(token); // Store token and user details in Auth Context
        toast.success("Login successful! 🎉", { autoClose: 2000 });
        router.push("/");
      } else {
        const errorData = await response.json();
        const errorMessage = Array.isArray(errorData.detail)
          ? errorData.detail.map((err: any) => err.msg).join(", ")
          : errorData.detail || "Authentication failed";
        toast.error(errorMessage);
      }
    } catch (error) {
      toast.error("An error occurred. Please try again later.");
    } finally {
      setLoading(false);
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
        {error && (
          <p className="text-center text-red-500 text-sm mt-2">{error}</p>
        )}

        <form onSubmit={handleSubmit}>
          {/* Input Fields */}
          <div className="mt-6">
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full p-3 border rounded-2xl bg-[#F1F5FF] mt-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <div className="relative w-full">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full mt-3 p-3 pr-10 border rounded-2xl bg-[#F1F5FF] focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <button
                type="button"
                className="absolute top-1/2 right-4 transform -translate-y-1/2 text-gray-500"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FiEyeOff size={20} /> : <FiEye size={20} />}
              </button>
            </div>
            <div className="text-right text-sm text-[#000000B3] mt-2 cursor-pointer m-5">
              Forgot Password?
            </div>
          </div>

          {/* Sign In Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#050C9C] text-white py-3 rounded-2xl mt-4 font-bold text-[20px] hover:bg-blue-800 transition"
          >
            {loading ? "Logging in..." : "Login"}
          </button>

          {/* Separator */}
          {/* <div className="flex items-center my-10">
            <hr className="flex-grow border-[#000000B3]" />
            <span className="px-2 text-black text-sm">Or continue with</span>
            <hr className="flex-grow border-[#000000B3]" />
          </div> */}

          {/* Google Sign In Button */}
          {/* <button
            type="button" // Prevents form submission
            className="w-full flex items-center font-bold text-[16px] justify-center border py-3 rounded-lg bg-[#F1F5FF] hover:bg-[#F1F9F5] transition"
          >
            <FaGoogle className="mr-2" />
            Sign in with Google
          </button> */}

          {/* Signup Link */}
          <p className="text-center text-sm font-light text-black mt-[120px]">
            Don’t have an account?
            <Link
              href="/signup"
              className="text-black font-bold cursor-pointer"
            >
              {" "}
              Sign up now
            </Link>
          </p>
        </form>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
      />
    </div>
  );
};

export default Login;
