//
import React from "react";
import SliderPage from "../Components/SliderPage";
import FeaturedGardeners from "./Featured Gardeners";
import TopTrendingTips from "./TopTrendingTips ";
import Grow from "./ExtraPages/Grow";
import FAQSection from "./ExtraPages/FAQSection";
import WhyJoin from "./ExtraPages/WhyJoin";

const Home = () => {
  return (
    <div>
      <SliderPage></SliderPage>
      <FeaturedGardeners></FeaturedGardeners>
      <TopTrendingTips></TopTrendingTips>
      <FAQSection></FAQSection>
      <WhyJoin></WhyJoin>
      <Grow></Grow>
    </div>
  );
};

export default Home;
