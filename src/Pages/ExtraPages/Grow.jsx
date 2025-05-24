// import React from "react";

// const Grow = () => {
//   return (
//     <section className="mt-20 bg-gradient-to-r from-green-600 via-lime-500 to-green-700 py-16 px-4 md:px-8 text-white">
//       <div className="max-w-4xl mx-auto text-center">
//         <h2 className="text-4xl font-bold mb-4">Ready to Grow With Us?</h2>
//         <p className="text-lg mb-8">
//           Whether you're just planting your first seed or you're a seasoned
//           green thumb, GardenCircle welcomes you. Share, learn, and thrive in
//           our growing community.
//         </p>
//         <div className="flex flex-col sm:flex-row justify-center gap-4">
//           <button className="bg-white text-green-900 font-semibold px-6 py-3 rounded-full hover:bg-green-100 transition">
//             Join the Community
//           </button>
//           <button className="border border-white text-white font-semibold px-6 py-3 rounded-full hover:bg-white hover:text-green-800 transition">
//             Explore Resources
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Grow;
import React from "react";
import { Typewriter } from "react-simple-typewriter";

const Grow = () => {
  return (
    <section className="mt-10 bg-gradient-to-r from-green-700 via-lime-500 to-green-600 py-20 px-4 md:px-8 text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight drop-shadow-lg">
          <Typewriter
            words={[
              "Ready to Grow With Us?",
              "Join Our Green Community!",
              "Let's Bloom Together!",
            ]}
            loop={true}
            cursor
            cursorStyle="_"
            typeSpeed={80}
            deleteSpeed={40}
            delaySpeed={2000}
          />
        </h2>
        <p className="text-lg md:text-xl mb-10 max-w-3xl mx-auto drop-shadow-sm">
          Whether you're just planting your first seed or you're a seasoned
          green thumb, GardenCircle welcomes you. Share, learn, and thrive in
          our growing community.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <button className="bg-white text-green-900 font-semibold px-8 py-3 rounded-full hover:bg-green-100 transition duration-300 shadow-md">
            Join the Community
          </button>
          <button className="border border-white text-white font-semibold px-8 py-3 rounded-full hover:bg-white hover:text-green-800 transition duration-300 shadow-md">
            Explore Resources
          </button>
        </div>
      </div>
    </section>
  );
};

export default Grow;
