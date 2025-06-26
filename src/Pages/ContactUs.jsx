import React from "react";

const ContactUs = () => {
  return (
    <section className="bg-[#F9F9F6] text-[#2D3748] py-16 px-6 md:px-20">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold text-[#2F855A] mb-4">Get in Touch</h2>
        <p className="text-[#718096] text-lg">
          We'd love to hear from you! Whether you have a question about your
          subscription, a suggestion, or just want to say hello — drop us a
          message below.
        </p>
      </div>

      <form className="max-w-3xl mx-auto bg-white p-8 rounded-2xl shadow-lg space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block mb-2 text-sm font-semibold text-[#2D3748]">
              Full Name
            </label>
            <input
              type="text"
              placeholder="Your name"
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#A0DAB6]"
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-semibold text-[#2D3748]">
              Email Address
            </label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#A0DAB6]"
            />
          </div>
        </div>

        <div>
          <label className="block mb-2 text-sm font-semibold text-[#2D3748]">
            Subject
          </label>
          <input
            type="text"
            placeholder="Subject of your message"
            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#A0DAB6]"
          />
        </div>

        <div>
          <label className="block mb-2 text-sm font-semibold text-[#2D3748]">
            Message
          </label>
          <textarea
            rows="5"
            placeholder="Write your message here..."
            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#A0DAB6]"
          ></textarea>
        </div>

        <div className="text-center">
          <button
            type="submit"
            className="bg-[#2F855A] text-white font-semibold px-8 py-3 rounded-xl hover:bg-[#276749] transition duration-300"
          >
            Send Message
          </button>
        </div>
      </form>
    </section>
  );
};

export default ContactUs;
