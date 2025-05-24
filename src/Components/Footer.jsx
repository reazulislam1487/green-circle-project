import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-green-800 via-green-600 to-green-900 pt-30 text-green-200 py-10 px-6 md:px-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-8">
        {/* Contact Info */}
        <div className="flex-1">
          <h3 className="text-xl font-semibold mb-4 text-green-100">
            Contact Us
          </h3>
          <p>Faridpur City, Dhaka Bangladesh</p>
          <p>Email: reazulislam1487@gmail.com</p>
          <p>Phone: +8801770807782</p>
        </div>

        {/* Terms */}
        <div className="flex-1">
          <h3 className="text-xl font-semibold mb-4 text-green-100">Terms</h3>
          <ul>
            <li className="mb-2">
              <a
                href="/terms"
                className="hover:text-green-300 transition-colors"
              >
                Terms of Service
              </a>
            </li>
            <li className="mb-2">
              <a
                href="/privacy"
                className="hover:text-green-300 transition-colors"
              >
                Privacy Policy
              </a>
            </li>
            <li className="mb-2">
              <a
                href="/refund"
                className="hover:text-green-300 transition-colors"
              >
                Refund Policy
              </a>
            </li>
          </ul>
        </div>

        {/* Social Links */}
        <div className="flex-1">
          <h3 className="text-xl font-semibold mb-4 text-green-100">
            Follow Us
          </h3>
          <div className="flex space-x-6 text-green-300">
            <a
              href="https://www.facebook.com/thinkerboyreaz/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-500 transition-colors"
              aria-label="Facebook"
            >
              <svg
                className="w-6 h-6 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M22 12.07C22 6.54 17.52 2 12 2S2 6.54 2 12.07c0 5 3.66 9.14 8.44 9.93v-7.03H7.9v-2.9h2.54v-2.21c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.25.2 2.25.2v2.48h-1.27c-1.25 0-1.63.78-1.63 1.58v1.85h2.78l-.44 2.9h-2.34v7.03C18.34 21.22 22 17.07 22 12.07z" />
              </svg>
            </a>

            <a
              href="https://www.linkedin.com/in/reazul-islam-reaz-467509318/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-500 transition-colors"
              aria-label="Twitter"
            >
              <svg
                className="w-5 h-5 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M4.98 3.5C4.98 5 3.88 6 2.5 6S0 5 0 3.5 1.12 1 2.5 1s2.48 1 2.48 2.5zM.5 8h4V24h-4V8zm7.5 0h3.8v2.2h.1c.53-1 1.83-2.2 3.76-2.2 4.02 0 4.76 2.65 4.76 6.1V24h-4v-7.8c0-1.85-.03-4.23-2.6-4.23-2.6 0-3 2.03-3 4.1V24h-4V8z" />
              </svg>
            </a>

            <a
              href="https://www.instagram.com/reazulislamreaz.1/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-500 transition-colors"
              aria-label="Instagram"
            >
              <svg
                className="w-6 h-6 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2zm0 2A3.75 3.75 0 004 7.75v8.5A3.75 3.75 0 007.75 20h8.5A3.75 3.75 0 0020 16.25v-8.5A3.75 3.75 0 0016.25 4h-8.5zM12 7a5 5 0 110 10 5 5 0 010-10zm0 2a3 3 0 100 6 3 3 0 000-6zm4.5-.5a1.5 1.5 0 110 3 1.5 1.5 0 010-3z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
