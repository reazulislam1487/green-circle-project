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
    <section className="py-24 px-6  bg-transparent">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-2xl md:text-4xl font-extrabold text-center text-[#2F855A] mb-16 drop-shadow-md"
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
                className={`rounded-xl border border-[#D3EFC9] hover:border-[#2F855A] bg-white/80 backdrop-blur-sm shadow-md transition-all duration-300 cursor-pointer p-6 md:p-8 group focus:outline-none`}
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
                  <h3 className="text-2xl font-semibold text-[#2D3748] group-hover:text-[#2F855A] transition duration-300">
                    {faq.question}
                  </h3>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-[#2F855A] group-hover:text-green-900"
                  >
                    {isOpen ? (
                      <FiChevronUp size={26} />
                    ) : (
                      <FiChevronDown size={26} />
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
                      <p className="text-lg text-gray-600 mt-4 leading-relaxed">
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
    </section>
  );
};

export default FAQSection;
