import React from "react";

const Grow = () => {
  return (
    <section className="mt-20 bg-gradient-to-r from-green-600 via-lime-500 to-green-700 py-16 px-4 md:px-8 text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">Ready to Grow With Us?</h2>
        <p className="text-lg mb-8">
          Whether you're just planting your first seed or you're a seasoned
          green thumb, GardenCircle welcomes you. Share, learn, and thrive in
          our growing community.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="bg-white text-green-900 font-semibold px-6 py-3 rounded-full hover:bg-green-100 transition">
            Join the Community
          </button>
          <button className="border border-white text-white font-semibold px-6 py-3 rounded-full hover:bg-white hover:text-green-800 transition">
            Explore Resources
          </button>
        </div>
      </div>
    </section>
  );
};

export default Grow;
