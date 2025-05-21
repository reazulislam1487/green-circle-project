//
import React from "react";
import SliderPage from "../Components/SliderPage";
import FeaturedGardeners from "./Featured Gardeners";
import TopTrendingTips from "./TopTrendingTips ";
import Tips from "./ExtraPages/Tips";
import Grow from "./ExtraPages/Grow";

const Home = () => {
  return (
    <div>
      <SliderPage></SliderPage>
      <FeaturedGardeners></FeaturedGardeners>
      <TopTrendingTips></TopTrendingTips>
      <Tips></Tips>
      <Grow></Grow>
    </div>
  );
};

export default Home;
