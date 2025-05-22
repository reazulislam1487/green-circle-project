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
            src="https://www.southernliving.com/thmb/110u4_Q7R-1Y8Juz6bX-RPPNer0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/2119102_garla039-e59dd588deba4301a43515fcd0c213d3.jpg"
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
          src="https://images.squarespace-cdn.com/content/v1/5dea42a80d60bb6675fdb54c/1619182116698-VM8JQZATNHI2DWZB2RYY/alaster-anderson-garden-design-planting-installation-garden-lighting.jpg?format=2500w"
          alt=""
        />
      </div>
      <div>
        <img
          className="w-full h-[calc(100vh-8rem)]"
          src="https://static.vecteezy.com/system/resources/previews/038/345/095/non_2x/ai-generated-blurry-garden-house-scene-behind-an-empty-wooden-surface-setting-the-stage-for-product-displays-photo.jpeg"
          alt=""
        />
      </div>
    </Slider>
  );
}

//  SliderPage;
