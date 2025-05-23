import React, { useEffect, useState } from "react";
import { Lightbulb } from "lucide-react";
import Loading from "../Components/Loading";
import TipCard from "./TipCard";

const TopTrendingTips = () => {
  const [tips, setTips] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://a10-server-sandy.vercel.app/toptrending")
      .then((res) => res.json())
      .then((data) => {
        setTips(data);
        setLoading(false);
      });
  }, []);
  if (loading || !tips) {
    return <Loading></Loading>;
  }
  return (
    <section className=" py-10 mb-10 px-4 bg-gray-100">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <Lightbulb className="text-yellow-500" />
          Top Trending Tips
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {tips.map((tip) => (
            <TipCard key={tip._id} tip={tip} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopTrendingTips;
