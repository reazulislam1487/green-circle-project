import React from "react";
import { FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-[#2F855A] via-[#A0DAB6] to-[#2F855A] text-[#2D3748] py-14 px-6 md:px-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-10">
        {/* Contact Info */}
        <div className="flex-1">
          <h3 className="text-xl font-bold mb-4"> Contact Us</h3>
          <p className="mb-1">Faridpur City, Dhaka, Bangladesh</p>
          <p className="mb-1">
            Email:{" "}
            <a
              href="mailto:reazulislam1487@gmail.com"
              className="text-[#2F855A] hover:underline"
            >
              reazulislam1487@gmail.com
            </a>
          </p>
          <p>
            Phone:{" "}
            <a
              href="tel:+8801770807782"
              className="text-[#2F855A] hover:underline"
            >
              +8801770807782
            </a>
          </p>
        </div>

        {/* Terms */}
        <div className="flex-1">
          <h3 className="text-xl font-bold mb-4"> Terms</h3>
          <ul>
            {["terms", "privacy", "refund"].map((item, idx) => (
              <li key={idx} className="mb-2">
                <a
                  href={`/${item}`}
                  className="hover:text-[#F6C26B] transition-colors font-medium"
                >
                  {item === "terms"
                    ? "Terms of Service"
                    : item === "privacy"
                    ? "Privacy Policy"
                    : "Refund Policy"}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Social Links */}
        <div className="flex-1">
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
