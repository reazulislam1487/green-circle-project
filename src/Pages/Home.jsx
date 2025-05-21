//
import React from "react";
import SliderPage from "../Components/SliderPage";
import FeaturedGardeners from "./Featured Gardeners";
import TopTrendingTips from "./TopTrendingTips ";

const Home = () => {
  return (
    <div>
      <SliderPage></SliderPage>
      <FeaturedGardeners></FeaturedGardeners>
      <TopTrendingTips></TopTrendingTips>
    </div>
  );
};

export default Home;
