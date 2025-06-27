import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

const faqs = [
  {
    question: "What is GreenCircle all about?",
    answer:
      "GreenCircle is your community hub for all things gardening. Connect with fellow plant lovers, share tips, join events, and grow your skills together.",
  },
  {
    question: "Is GreenCircle free to use?",
    answer:
      "Yes! GreenCircle is completely free for all members. You can share tips, post questions, attend events, and explore resources at no cost.",
  },
  {
    question: "How can I contribute my own tips?",
    answer:
      "Once you're signed in, simply go to the 'Share Tip' section and fill in the form to contribute your own gardening wisdom to the community.",
  },
  {
    question: "Are there real-life meetups or events?",
    answer:
      "Absolutely! GreenCircle regularly promotes workshops, plant swaps, and meetups to help you connect offline with fellow gardeners.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-[#F9F9F6]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 px-6 lg:px-0  items-center">
        {/* Left image area */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <img
            src="https://static.vecteezy.com/system/resources/previews/049/771/308/non_2x/young-male-gardener-watering-plants-with-a-shower-head-and-hose-photo.jpg"
            alt="GreenCircle FAQ Illustration"
            className="w-full rounded-3xl shadow-lg"
          />
        </motion.div>

        {/* Right FAQs */}
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-extrabold text-[#2F855A] mb-10 text-center md:text-left"
          >
            Frequently Asked Questions
          </motion.h2>

          <div className="space-y-6">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <motion.div
                  key={index}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className={`rounded-xl border border-[#A0DAB6] bg-white/90 backdrop-blur-md shadow-md p-6 transition-all duration-300 cursor-pointer ${
                    isOpen ? "border-[#2F855A] shadow-lg" : ""
                  }`}
                  onClick={() => toggleFAQ(index)}
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      toggleFAQ(index);
                    }
                  }}
                  role="button"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg sm:text-xl font-semibold text-[#2D3748] group-hover:text-[#2F855A] transition duration-300">
                      {faq.question}
                    </h3>
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="text-[#2F855A]"
                    >
                      {isOpen ? (
                        <FiChevronUp size={22} />
                      ) : (
                        <FiChevronDown size={22} />
                      )}
                    </motion.div>
                  </div>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="content"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                      >
                        <p className="text-gray-600 mt-4 text-base leading-relaxed">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
