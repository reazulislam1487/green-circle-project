import React from "react";

const AboutUs = () => {
  return (
    <section className="bg-[#F9F9F6] text-[#2D3748] py-16 px-6 md:px-20">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left: Image */}
        <div>
          <img
            src="https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=800&q=80"
            alt="About Green Circle"
            className="rounded-2xl shadow-lg"
          />
        </div>

        {/* Right: Content */}
        <div>
          <h2 className="text-4xl font-bold mb-4 text-[#2F855A]">
            About Green Circle
          </h2>
          <p className="text-lg text-[#718096] mb-6">
            At <strong>Green Circle</strong>, we believe in bringing nature
            closer to your home. Our eco-friendly subscription boxes are curated
            with love, containing indoor plants, garden tips, and sustainable
            decor to help you build a greener lifestyle.
          </p>
          <p className="text-md text-[#2D3748] mb-4">
            Whether you’re a seasoned gardener or just starting your green
            journey, we’re here to support you every step of the way. Our
            mission is to promote sustainability, support local artisans, and
            inspire a love for nature.
          </p>

          <div className="mt-6">
            <h3 className="text-xl font-semibold text-[#2F855A] mb-2">
              Why Choose Us?
            </h3>
            <ul className="list-disc list-inside text-[#2D3748] space-y-2">
              <li>Carefully selected eco-friendly products</li>
              <li>Expert gardening tips every month</li>
              <li>Commitment to sustainability & wellness</li>
              <li>Affordable and flexible subscriptions</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
