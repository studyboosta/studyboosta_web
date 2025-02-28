"use client";
import { useState } from "react";
import { useRouter } from "next/navigation"; 
import Link from "next/link";
import axios, { AxiosError } from "axios";
import { FaGoogle } from "react-icons/fa";

const Signup = () => {
  // State variables with TypeScript types
  const [firstname, setFirstName] = useState<string>("");
  const [lastname, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [university, setUniversity] = useState<string>("");
  const [course, setCourse] = useState<string>("");
  const [level, setLevel] = useState<string>("");
  const [error, setError] = useState<string>("");

  const router = useRouter(); 

  // Function to handle form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent default form submission
  
    if (!firstname || !lastname || !email || !password || !confirmPassword|| !university || !course || !level) {
      setError("All fields are required");
      return;
    }
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }
  
    setError(""); 
  
    const data = {
      firstname,
      lastname,
      email,
      password,
      confirmPassword,
      university,
      course_of_study: course,
      level,
    };
  
    try {
      const response = await axios.post(
        "https://studyboosta.onrender.com/register/",
        data
      );
  
      if (response.status === 200) {
        alert("Account successfully created");
        router.push("/");
      }
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        setError(
          (error.response.data as { message?: string })?.message ||
            "Failed to create account. Please try again."
        );
      } else {
        setError("Failed to create account. Please try again.");
      }
    }
  };
  

  return (
    <div className="flex justify-center items-center min-h-screen bg-white ">
      <div className="w-full max-w-sm bg-white p-6 rounded-lg shadow-md m-6">
        {/* Logo */}
        <h1 className="text-3xl font-bold text-center text-[#050C9C] mb-5">
          StudyBoosta
        </h1>
        <p className="text-center text-[12px] font-medium mt-1 mb-10 text-[#050C9C]">
          Fill in the details below
        </p>

        {/* Display error message */}
        {error && (
          <p className="text-center text-red-500 text-sm mb-2">{error}</p>
        )}
        <form onSubmit={handleSubmit}>
          {/* Input Fields */}
          <div className="mt-6">
            <input
              type="text"
              id="firstname"
              placeholder="Enter your first name"
              value={firstname}
              onChange={(e) => setFirstName(e.target.value)}
              className="w-full p-3 border rounded-2xl bg-[#F1F5FF] mt-5 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <input
              type="text"
              id="lastname"
              placeholder="Enter your Last name"
              value={lastname}
              onChange={(e) => setLastName(e.target.value)}
              className="w-full p-3 border rounded-2xl bg-[#F1F5FF] mt-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />

            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 border rounded-2xl bg-[#F1F5FF] mt-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <input
              type="text"
              id="university"
              placeholder="University"
              value={university}
              onChange={(e) => setUniversity(e.target.value)}
              className="w-full p-3 border rounded-2xl bg-[#F1F5FF] mt-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <input
              type="text"
              id="course"
              placeholder="Course of Study"
              value={course}
              onChange={(e) => setCourse(e.target.value)}
              className="w-full p-3 border rounded-2xl bg-[#F1F5FF] mt-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <input
              type="text"
              id="level"
              placeholder="Level"
              value={level}
              onChange={(e) => setLevel(e.target.value)}
              className="w-full p-3 border rounded-2xl bg-[#F1F5FF] mt-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <input
              type="password"
              id="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full mt-3 p-3 border rounded-2xl bg-[#F1F5FF] focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <input
              type="password"
              id="confirmPassword"
              placeholder="Enter your password again"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full mt-3 p-3 border rounded-2xl bg-[#F1F5FF] focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Sign Up Button */}
          <button
            type="submit"
            className="w-full bg-[#050C9C] text-white py-3 rounded-2xl mt-5 font-bold text-[20px] hover:bg-blue-800 transition"
          >
            Sign up
          </button>

          {/* Separator */}
          {/* <div className="flex items-center my-10">
            <hr className="flex-grow border-[#000000B3]" />
            <span className="px-2 text-black text-sm">Or continue with</span>
            <hr className="flex-grow border-[#000000B3]" />
          </div> */}

          {/* Google Sign In Button */}
          {/* <button className="w-full flex items-center font-bold text-[16px] justify-center border py-3 rounded-lg bg-[#F1F5FF] hover:bg-[#F1F9F5] transition">
            <FaGoogle className="mr-2" />
            Sign in with Google
          </button> */}

          {/* Signup Link */}
          <p className="text-center text-sm font-light text-black mt-[120px]">
            Already have an account?
            <Link href="/login" className="text-black font-bold cursor-pointer">
              {" "}
              Log In
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
