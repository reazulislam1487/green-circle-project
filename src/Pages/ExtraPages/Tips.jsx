import React from "react";
import { FaLeaf, FaHandsHelping, FaCalendarAlt } from "react-icons/fa";

const Tips = () => {
  return (
    <section className="bg-white py-16 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-green-800 mb-4">
          Grow Together with These Features
        </h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
          Discover how GardenCircle helps you connect, learn, and thrive in your
          gardening journey — no matter your experience level.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="bg-green-50 hover:bg-green-100 transition rounded-2xl shadow-lg p-6 text-center">
            <div className="flex justify-center mb-4">
              <FaLeaf className="text-green-700 w-10 h-10" />
            </div>
            <h3 className="text-xl font-semibold text-green-900 mb-2">
              Community Tips
            </h3>
            <p className="text-gray-700 text-sm">
              Share and explore <strong>gardening hacks</strong>,{" "}
              <strong>plant care advice</strong>, and{" "}
              <strong>seasonal tips</strong> from passionate members across the
              country.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-green-50 hover:bg-green-100 transition rounded-2xl shadow-lg p-6 text-center">
            <div className="flex justify-center mb-4">
              <FaCalendarAlt className="text-green-700 w-10 h-10" />
            </div>
            <h3 className="text-xl font-semibold text-green-900 mb-2">
              Events & Meetups
            </h3>
            <p className="text-gray-700 text-sm">
              Find or host <strong>local gardening events</strong>, join{" "}
              <strong>community plant swaps</strong>, or attend{" "}
              <strong>hands-on workshops</strong> near you.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-green-50 hover:bg-green-100 transition rounded-2xl shadow-lg p-6 text-center">
            <div className="flex justify-center mb-4">
              <FaHandsHelping className="text-green-700 w-10 h-10" />
            </div>
            <h3 className="text-xl font-semibold text-green-900 mb-2">
              Ask & Learn
            </h3>
            <p className="text-gray-700 text-sm">
              Post your <strong>plant care questions</strong>, join expert
              discussions, and build your knowledge from real-life gardener
              experiences.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tips;
