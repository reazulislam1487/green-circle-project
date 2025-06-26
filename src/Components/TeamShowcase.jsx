import React from "react";
import ChromaGrid from "./ChomraGrid";

const items = [
  {
    image: "https://i.ibb.co/mCmpyxCn/shared-image-6-740x490.jpg",
    title: "Reazul Islam Reaz",
    subtitle: "Organic Garden Expert",
    handle: "@reazulgreen",
    borderColor: "#2F855A",
    gradient: "linear-gradient(145deg, #2F855A, #000)",
    url: "https://github.com/reazulgreen",
  },
  {
    image:
      "https://thumbs.dreamstime.com/b/landscaping-industry-worker-professional-gardener-job-satisfied-caucasian-garden-his-s-relaxing-mid-day-work-break-154984471.jpg",
    title: "Nadia Rahman",
    subtitle: "Hydroponics Specialist",
    handle: "@nadiahydro",
    borderColor: "#A0DAB6",
    gradient: "linear-gradient(180deg, #A0DAB6, #000)",
    url: "https://linkedin.com/in/nadiahydro",
  },
  {
    image:
      "https://i.ibb.co/HTsjjfRQ/close-up-outdoors-portrait-beautiful-cheerful-bearded-caucasian-farmer-blue-shirt-gloves-smiling-wor.jpg",
    title: "Shafin Mahmud",
    subtitle: "Composting Guru",
    handle: "@compostshafin",
    borderColor: "#F6C26B",
    gradient: "linear-gradient(180deg, #F6C26B, #000)",
    url: "https://twitter.com/compostshafin",
  },
  {
    image:
      "https://i.ibb.co/Zp9qZkNk/laughing-people-with-potted-plant-23-2147768528.jpg",
    title: "Tania Haque",
    subtitle: "Permaculture Designer",
    handle: "@permatania",
    borderColor: "#38A169",
    gradient: "linear-gradient(180deg, #38A169, #000)",
    url: "https://linkedin.com/in/permatania",
  },
  {
    image:
      "https://i.ibb.co/hJpKkc18/garden-worker-trimming-trees-with-scissors-yard-732190-2439.jpg",
    title: "Habib Al Mamun",
    subtitle: "Urban Gardener",
    handle: "@urbhabib",
    borderColor: "#E53E3E",
    gradient: "linear-gradient(180deg, #E53E3E, #000)",
    url: "https://github.com/urbhabib",
  },
  {
    image:
      "https://media.istockphoto.com/id/497613033/photo/gardener-in-beautiful-garden.jpg?s=612x612&w=0&k=20&c=lbA9Wp922GHDFJBRiXHNwbt3fwMj3XRN7e16Aq63ZJM=",
    title: "Farzana Ahmed",
    subtitle: "Seedling Expert",
    handle: "@seedfarzana",
    borderColor: "#3B82F6",
    gradient: "linear-gradient(145deg, #3B82F6, #000)",
    url: "https://linkedin.com/in/seedfarzana",
  },
];

const TeamShowcase = () => {
  return (
    <div className="h-[700px] relative z-10">
      <ChromaGrid
        items={items}
        radius={300}
        damping={0.45}
        fadeOut={0.6}
        ease="power3.out"
      />
    </div>
  );
};

export default TeamShowcase;
