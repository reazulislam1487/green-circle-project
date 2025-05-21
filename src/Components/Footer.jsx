import React from "react";

const Footer = () => {
  return (
    // <footer className="bg-gray-900 text-gray-300 py-10 px-6 md:px-20">
    //   <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-8">
    //     {/* Contact Info */}
    //     <div className="flex-1">
    //       <h3 className="text-xl font-semibold mb-4 text-white">Contact Us</h3>
    //       <p>123 Your Street, City, Country</p>
    //       <p>Email: support@yourdomain.com</p>
    //       <p>Phone: +1 (234) 567-890</p>
    //     </div>

    //     {/* Terms */}
    //     <div className="flex-1">
    //       <h3 className="text-xl font-semibold mb-4 text-white">Terms</h3>
    //       <ul>
    //         <li className="mb-2">
    //           <a
    //             href="/terms"
    //             className="hover:text-indigo-400 transition-colors"
    //           >
    //             Terms of Service
    //           </a>
    //         </li>
    //         <li className="mb-2">
    //           <a
    //             href="/privacy"
    //             className="hover:text-indigo-400 transition-colors"
    //           >
    //             Privacy Policy
    //           </a>
    //         </li>
    //         <li className="mb-2">
    //           <a
    //             href="/refund"
    //             className="hover:text-indigo-400 transition-colors"
    //           >
    //             Refund Policy
    //           </a>
    //         </li>
    //       </ul>
    //     </div>

    //     {/* Social Links */}
    //     <div className="flex-1">
    //       <h3 className="text-xl font-semibold mb-4 text-white">Follow Us</h3>
    //       <div className="flex space-x-6 text-gray-400">
    //         <a
    //           href="https://facebook.com/yourpage"
    //           target="_blank"
    //           rel="noopener noreferrer"
    //           className="hover:text-indigo-400 transition-colors"
    //           aria-label="Facebook"
    //         >
    //           <svg
    //             className="w-6 h-6 fill-current"
    //             xmlns="http://www.w3.org/2000/svg"
    //             viewBox="0 0 24 24"
    //           >
    //             <path d="M22 12.07C22 6.54 17.52 2 12 2S2 6.54 2 12.07c0 5 3.66 9.14 8.44 9.93v-7.03H7.9v-2.9h2.54v-2.21c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.25.2 2.25.2v2.48h-1.27c-1.25 0-1.63.78-1.63 1.58v1.85h2.78l-.44 2.9h-2.34v7.03C18.34 21.22 22 17.07 22 12.07z" />
    //           </svg>
    //         </a>

    //         <a
    //           href="https://twitter.com/yourprofile"
    //           target="_blank"
    //           rel="noopener noreferrer"
    //           className="hover:text-indigo-400 transition-colors"
    //           aria-label="Twitter"
    //         >
    //           <svg
    //             className="w-6 h-6 fill-current"
    //             xmlns="http://www.w3.org/2000/svg"
    //             viewBox="0 0 24 24"
    //           >
    //             <path d="M23 3a10.9 10.9 0 01-3.14.86A4.48 4.48 0 0022.43.36a9.17 9.17 0 01-2.88 1.1A4.52 4.52 0 0016.11 0a4.48 4.48 0 00-4.47 4.47c0 .35.04.7.12 1.03A12.84 12.84 0 013 1.64a4.47 4.47 0 001.39 6 4.41 4.41 0 01-2.03-.57v.06a4.48 4.48 0 003.6 4.4 4.5 4.5 0 01-2.02.08 4.49 4.49 0 004.2 3.12A9 9 0 011 19.54 12.73 12.73 0 007 21c8.25 0 12.77-6.84 12.77-12.77 0-.19 0-.39-.01-.58A9.07 9.07 0 0023 3z" />
    //           </svg>
    //         </a>

    //         <a
    //           href="https://instagram.com/yourprofile"
    //           target="_blank"
    //           rel="noopener noreferrer"
    //           className="hover:text-indigo-400 transition-colors"
    //           aria-label="Instagram"
    //         >
    //           <svg
    //             className="w-6 h-6 fill-current"
    //             xmlns="http://www.w3.org/2000/svg"
    //             viewBox="0 0 24 24"
    //           >
    //             <path d="M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2zm0 2A3.75 3.75 0 004 7.75v8.5A3.75 3.75 0 007.75 20h8.5A3.75 3.75 0 0020 16.25v-8.5A3.75 3.75 0 0016.25 4h-8.5zM12 7a5 5 0 110 10 5 5 0 010-10zm0 2a3 3 0 100 6 3 3 0 000-6zm4.5-.5a1.5 1.5 0 110 3 1.5 1.5 0 010-3z" />
    //           </svg>
    //         </a>
    //       </div>
    //     </div>
    //   </div>
    // </footer>
    <footer className="bg-green-900 text-green-200 py-10 px-6 md:px-20">
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
              href="https://facebook.com/yourpage"
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
              href="https://twitter.com/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-500 transition-colors"
              aria-label="Twitter"
            >
              <svg
                className="w-6 h-6 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M23 3a10.9 10.9 0 01-3.14.86A4.48 4.48 0 0022.43.36a9.17 9.17 0 01-2.88 1.1A4.52 4.52 0 0016.11 0a4.48 4.48 0 00-4.47 4.47c0 .35.04.7.12 1.03A12.84 12.84 0 013 1.64a4.47 4.47 0 001.39 6 4.41 4.41 0 01-2.03-.57v.06a4.48 4.48 0 003.6 4.4 4.5 4.5 0 01-2.02.08 4.49 4.49 0 004.2 3.12A9 9 0 011 19.54 12.73 12.73 0 007 21c8.25 0 12.77-6.84 12.77-12.77 0-.19 0-.39-.01-.58A9.07 9.07 0 0023 3z" />
              </svg>
            </a>

            <a
              href="https://instagram.com/yourprofile"
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
