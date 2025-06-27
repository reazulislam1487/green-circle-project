import React from "react";
import { FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-[#2F855A] via-[#A0DAB6] to-[#2F855A] text-[#2D3748] py-14 px-6 md:px-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-10">
        {/* Logo Info */}
        <div className="flex-1">
          {/* logo */}
          <div className="flex items-center gap-2 mb-4">
            <img
              src="https://i.ibb.co/N2CRDq0w/logo.png"
              alt="GreenCircle Logo"
              className="w-10 h-10 rounded-full"
            />
            <span className="text-xl font-bold inline tracking-wide">
              GreenCircle
            </span>
          </div>
          <div>
            GreenCircle is your trusted community hub for gardening inspiration,
            sustainable tips, and plant-care wisdom. Whether you're a beginner
            or a seasoned grower, join us to explore, share, and thrive together
            in a greener world.
          </div>
        </div>

        {/* Useful Links */}
        <div className="flex-1">
          <h3 className="text-xl font-bold mb-4 ">Useful Links</h3>
          <ul className="space-y-2">
            {[
              { label: "Home", path: "/" },
              { label: "Explore Gardeners", path: "/exploreGardeners" },
              { label: "Browse Tips", path: "/browseTips" },
              { label: "About Us", path: "/aboutUs" },
              { label: "Contact Us", path: "/contactUs" },
            ].map((link, idx) => (
              <li key={idx}>
                <a
                  href={link.path}
                  className=" hover:text-[#F6C26B] transition-colors font-medium"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Social Links */}
        <div className="flex-1 ">
          <h3 className="text-xl font-bold mb-4"> Follow Us</h3>
          <div className="flex space-x-6 text-[#2F855A] text-2xl">
            <a
              href="https://www.facebook.com/thinkerboyreaz/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#F6C26B] transition-colors"
              aria-label="Facebook"
            >
              <FaFacebook />
            </a>

            <a
              href="https://www.linkedin.com/in/reazul-islam-reaz-467509318/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#F6C26B] transition-colors"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://www.instagram.com/reazulislamreaz.1/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#F6C26B] transition-colors"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Note */}
      <div className="text-center text-sm text-[#2D3748] mt-10 border-t border-[#A0DAB6] pt-4">
        &copy; {new Date().getFullYear()} GreenCircle. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
