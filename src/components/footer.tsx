import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faWhatsapp,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#000B76] w-full text-white px-6 md:px-24 py-8">
      <div className="container mx-auto pt-3 px-4 grid grid-cols-1 md:flex md:justify-between md:items-start gap-8">
        {/* Stay Up to Date Section */}
        <div className="md:flex-1">
          <h3 className="text-[16px]">Stay up to date with</h3>
          <h3 className="text-[28px] font-bold mb-6">StudyBoosta</h3>
          <div>
            <form className="border-[1px] border-white rounded flex items-center">
              <input
                type="email"
                placeholder="Enter your email address"
                className="bg-[#000B76] p-2 w-full rounded-l-md text-white"
              />
              <button
                type="submit"
                className="bg-white text-[#000B76] px-4 py-2 rounded font-bold hover:bg-gray-100"
              >
                Submit
              </button>
            </form>
          </div>
        </div>

        {/* Links and Contact Section */}
        <div className="flex flex-col md:flex-row md:gap-[25px] md:flex-1 md:justify-end">
          {/* Quick Links Section */}
          <div className="md:mr-5">
            <h3 className="text-[19px] font-semibold mb-4">Quick links</h3>
            <ul className="space-y-2">
              <li>
              <Link
                href="/"
                className= "hover:underline text-[14px]"
              >
                Home
              </Link>
                
              </li>
              <li>
                <Link href="/courses" className="hover:underline text-[14px]">
                  Courses
                </Link>
              </li>
              <li>
                <Link href="/opportunities" className="hover:underline text-[14px]">
                  Opportunities
                </Link>
              </li>
              <li>
                <Link href="/digitalskills" className="hover:underline text-[14px]">
                  Digital skills
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Us Section */}
          <div className="md:ml-5">
            <h3 className="text-[19px] font-semibold mb-4">Contact us</h3>
            <p className="mb-2 text-[14px]">📍 University of Benin, Edo state.</p>
            <p className="mb-2 text-[14px]">📞 +2347049831780</p>
            <p className="text-[14px]">📧 studyboosta@gmail.com</p>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-opacity-80 rounded-s-sm border-white mt-10 pt-4 flex flex-col md:flex-row items-center justify-between px-4">
        <p className="text-sm mt-4 text-center md:text-left">
          © 2025. All rights reserved.
        </p>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="#" className=" bg-[050C96] text-white hover:text-gray-300" aria-label="Facebook">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a href="#" className="bg-[050C96] text-white hover:text-gray-300" aria-label="WhatsApp">
            <FontAwesomeIcon icon={faWhatsapp} />
          </a>
          <a href="#" className="hover:text-gray-300" aria-label="Messenger">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
