"use client";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import Image from "next/image";

interface NavbarProps {
  activeRoute: string;
}

const NavBar = ({ activeRoute }: NavbarProps) => {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;
  const { token, logout } = useAuth();

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    logout();
  };

  return (
    <nav className="bg-[#F1F5FF] fixed top-0 left-0 w-full z-50 shadow-md">
      <div className="container mx-auto px-6 flex items-center justify-between py-4 ">
        {/* Navbar Brand */}
        <Link href="/" className="flex items-center">
          <Image
            src="/assests/images/logo-lg-blue.png"
            alt="Logo"
            width={180} // adjust width to fit your design
            height={60} // height scales automatically with w-auto
            className="h-12  w-auto object-contain"
            priority
          />
        </Link>

        {/* Desktop Menu */}
        <ul className="md:hidden hidden  lg:flex gap-6">
          {[
            { name: "Home", href: "/" },
            { name: "CareerPath AI", href: "/careerpath" },
            { name: "Digital Skills", href: "/digitalskills" },
            { name: "Coaching", href: "/marketplace" },
            { name: "Opportunities", href: "/opportunities" },
            { name: "Interview/Exam AI", href: "/comingSoon" },
            { name: "Academic Courses", href: "/courses" },
          ].map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className={`${
                  isActive(item.href)
                    ? "border-b-4 rounded border-[#050C9C] mt-2 font-semibold"
                    : "text-black hover:border-b-4 hover:border-[#050C9C] mt-2"
                }`}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger Icon */}
        <div className="block md:block lg:hidden flex items-center">
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
        <div className="space-x-4 md:hidden hidden lg:flex items-center">
          {token ? (
            <>
              <button
                onClick={handleLogout}
                className="text-[14px] font-bold text-[#D9534F] hover:underline"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                href="/login"
                className="text-[14px] font-bold text-[#050C9C] hover:text-[#081566]"
              >
                Login
              </Link>
              <Link
                href="/signup"
                className="px-4 py-2 font-semibold bg-[#050C9C] text-white rounded-xl hover:bg-[#081566]"
              >
                Sign Up
              </Link>
            </>
          )}
        </div>
      </div>

      {/* Mobile Menu (Visible when isOpen is true) */}
      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-[#F1F5FF] z-50 transform transition-transform duration-300 ease-in-out
    ${isOpen ? "translate-x-0" : "-translate-x-full"}
  `}
      >
        {/* Close Button */}
        <div className="flex justify-end p-4">
          <button
            onClick={toggleMenu}
            className="text-[#050C9C] text-2xl font-bold"
          >
            &times;
          </button>
        </div>

        {/* Menu Links */}
        <ul className="flex flex-col gap-6 px-6 mt-6">
          {[
            { name: "Home", href: "/" },
            { name: "CareerPath AI", href: "/careerpath" },
            { name: "Digital Skills", href: "/digitalskills" },
            { name: "Coaching", href: "/marketplace" },
            { name: "Opportunities", href: "/opportunities" },
            { name: "Interview/Exam AI", href: "/comingSoon" },
            { name: "Academic Courses", href: "/courses" },
          ].map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className={`${
                  isActive(item.href)
                    ? "font-semibold text-[#081566]"
                    : "text-black hover:text-[#050C9C]"
                }`}
                onClick={() => setIsOpen(false)} // close sidebar on click
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Login / Signup */}
        <div className="mt-6 px-6 space-y-4">
          {token ? (
            <button
              onClick={handleLogout}
              className="w-full text-left text-[#D9534F] font-bold hover:underline"
            >
              Logout
            </button>
          ) : (
            <>
              <Link
                href="/login"
                className="w-full block font-bold text-[#050C9C] hover:text-[#081566]"
                onClick={() => setIsOpen(false)}
              >
                Login
              </Link>
              <Link
                href="/signup"
                className="w-full block px-4 py-2 font-semibold bg-[#050C9C] text-white rounded-xl hover:bg-[#081566] text-center"
                onClick={() => setIsOpen(false)}
              >
                Sign Up
              </Link>
            </>
          )}
        </div>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-30 z-40"
          onClick={toggleMenu}
        ></div>
      )}
    </nav>
  );
};

export default NavBar;
