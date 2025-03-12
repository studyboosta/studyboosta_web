"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import axios from "axios";
import { useAuth } from "@/context/AuthContext";
import { toast, ToastContainer } from "react-toastify";

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
  const [loading, setLoading] = useState(false);

  const router = useRouter();
  const { signIn } = useAuth();

  // Function to handle form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent default form submission
    setError("");
    setLoading(true);

    // Field validation
    if (!firstname) {
      toast.error("First name is required");
      setLoading(false);
      return;
    }
    if (!lastname) {
      toast.error("Last name is required");
      setLoading(false);
      return;
    }
    if (!email) {
      toast.error("Email is required");
      setLoading(false);
      return;
    }
    if (!university) {
      toast.error("University is required");
      setLoading(false);
      return;
    }
    if (!course) {
      toast.error("Course of Study is required");
      setLoading(false);
      return;
    }
    if (!level) {
      toast.error("Level is required");
      setLoading(false);
      return;
    }
    if (!password) {
      toast.error("Password is required");
      setLoading(false);
      return;
    }
    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      setLoading(false);
      return;
    }

    const data = {
      email,
      surname: lastname, // Change to "surname"
      first_name: firstname, // Change to "first_name"
      university,
      course_of_study: course,
      level: level.toString(), // Convert level to number
      password,
    };

    try {
      const response = await axios.post(
        "https://studyboosta.onrender.com/register/",
        data,
        { headers: { "Content-Type": "application/json" } }
      );

      if (response.status === 200) {
        const token = response.data.access_token; // Get token from response
        const user = {
          email,
          first_name: firstname,
          surname: lastname,
          university,
          course_of_study: course,
          level,
        };

        signIn(token, user); // Store user session
        toast.success("Account successfully created! 🎉");
        router.push("/"); // Redirect to a protected page
      }
    } catch (error) {
      toast.error("Failed to create account. Please try again.");
    } finally {
      setLoading(false);
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
              id="full_name"
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
            disabled={loading}
            className="w-full bg-[#050C9C] text-white py-3 rounded-2xl mt-5 font-bold text-[20px] hover:bg-blue-800 transition"
          >
            {loading ? "Creating account..." : "Sign up"}
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
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
      />
    </div>
  );
};

export default Signup;
