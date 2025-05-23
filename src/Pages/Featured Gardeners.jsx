import React, { useEffect, useState } from "react";
import Loading from "../Components/Loading";
// import your JSON file

const FeaturedGardeners = () => {
  const [gardenerProfiles, setGardenerProfiles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://a10-server-sandy.vercel.app/gardeners")
      .then((res) => res.json())
      .then((data) => {
        setGardenerProfiles(data);
        setLoading(false);
      });
  }, []);
  if (loading || !gardenerProfiles) {
    return <Loading></Loading>;
  }
  return (
    <section className=" max-w-6xl mx-auto p-6 my-20 bg-green-50 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-green-800">
        Featured Gardeners
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {gardenerProfiles.map(({ id, name, photo, bio }) => (
          <div
            key={id}
            className="bg-white rounded-lg shadow p-4 flex flex-col items-center text-center"
          >
            <img
              src={photo}
              alt={name}
              className="w-24 h-24 rounded-full object-cover mb-3"
            />
            <h3 className="font-semibold text-lg text-green-900">{name}</h3>
            <p className="text-green-700 text-sm mt-2">{bio}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedGardeners;
