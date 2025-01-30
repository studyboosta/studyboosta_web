"use client";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

interface NavbarProps {
  activeRoute: string;
}

const NavBar = ({ activeRoute }: NavbarProps) => {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-[#F1F5FF]">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Navbar Brand */}
        <p className="text-left text-[20px] sm:text-[24px] md:text-[26px] lg:text-[28px] font-bold text-[#050C9C]">
          StudyBoosta
        </p>

        {/* Desktop Menu */}
        <ul className="hidden sm:flex gap-6">
          {[
            { name: "Home", href: "/" },
            { name: "Courses", href: "/Courses" },
            { name: "Chatbot", href: "/Chatbot" },
            { name: "Opportunities", href: "/opportunities" },
            { name: "Security", href: "/security" },
            { name: "Digital Skills", href: "/digitalskills" },
            { name: "Marketplace", href: "/marketplace" },
          ].map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className={`${
                  isActive(item.href)
                    ? "border-b-4 rounded border-[#050C9C] mt-2 font-semibold"
                    : "text-black"
                }`}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger Icon */}
        <div className="sm:hidden flex items-center">
          <button onClick={toggleMenu} className="text-[#050C9C]">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>

        {/* Desktop Login & Signup */}
        <div className="space-x-4 hidden sm:flex items-center">
          <Link
            href="/login"
            className="text-[14px] font-bold text-[#050C9C] hover:underline"
          >
            Login
          </Link>
          <Link
            href="/signup"
            className="px-4 py-2 font-semibold bg-[#050C9C] text-white rounded-xl hover:bg-blue-800"
          >
            Sign Up
          </Link>
        </div>
      </div>

      {/* Mobile Menu (Visible when isOpen is true) */}
      {isOpen && (
        <div className="sm:hidden bg-[#F1F5FF] py-2">
          <ul className="flex flex-col gap-4">
            {[
              { name: "Home", href: "/" },
              { name: "Courses", href: "/Courses" },
              { name: "Chatbot", href: "/Chatbot" },
              { name: "Opportunities", href: "/opportunities" },
              { name: "Security", href: "/security" },
              { name: "Digital Skills", href: "/digitalskills" },
              { name: "Marketplace", href: "/marketplace" },
            ].map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className={`${
                    isActive(item.href)
                      ? "font-semibold text-blue-700"
                      : "text-black"
                  }`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
          <div className="space-x-14 py-4">
            <Link
              href="/login"
              className=" text-[14px] font-bold text-[#050C9C] hover:underline"
            >
              Login
            </Link>
            <Link
              href="/signup"
              className="px-4 py-2 font-semibold bg-[#050C9C] text-white rounded-xl hover:bg-blue-800"
            >
              Sign Up
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
