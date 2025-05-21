import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function SliderPage() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 5000,
    cssEase: "linear",
  };
  return (
    <Slider className=" mb-20 overflow-hidden " {...settings}>
      <div>
        <div className="w-full  h-[calc(100vh-8rem)] relative">
          <img
            className="w-full h-[calc(100vh-8rem)]"
            src="https://cdn-ilambkb.nitrocdn.com/FwusrUaDunqulcCQbYwYEwuqflLoTUox/assets/images/optimized/rev-d1e8843/blog.givingassistant.org/wp-content/uploads/012-subscription-boxes-for-couples-blog-copy.jpg"
            alt=""
          />
          <button className="btn btn-accent absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            add me
          </button>
        </div>
      </div>
      <div>
        <img
          className="w-full h-[calc(100vh-8rem)]"
          src="https://cdn.prod.website-files.com/660e658d0cfb31720d8934d0/670944252c37ec199fe781ac_66bb6abaf58fb1c4b67ef1a5_Best-Monthly-Subscription-Boxes-Within-the-UK.webp"
          alt=""
        />
      </div>
      <div>
        <img
          className="w-full h-[calc(100vh-8rem)]"
          src="https://i.shgcdn.com/6ed04b5a-9321-4f93-ae09-207c83d4c8bc/-/format/auto/-/preview/3000x3000/-/quality/lighter//pexels-photo-3384195.jpeg?auto=compress&cs=tinysrgb&w=400&h=300"
          alt=""
        />
      </div>
    </Slider>
  );
}

//  SliderPage;
