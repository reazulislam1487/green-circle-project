import React from "react";
import Slider from "react-slick";
import { Fade, Zoom } from "react-awesome-reveal";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SliderPage = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1200,
    autoplaySpeed: 4500,
    cssEase: "ease-in-out",
    pauseOnHover: true,
    arrows: false,
  };

  const slides = [
    {
      img: "https://www.southernliving.com/thmb/110u4_Q7R-1Y8Juz6bX-RPPNer0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/2119102_garla039-e59dd588deba4301a43515fcd0c213d3.jpg",
      heading: "Welcome to Your Green Home",
      subheading:
        "Discover smart tips and tools to grow a greener lifestyle—from your doorstep!",
      buttonText: "Get Started",
    },
    {
      img: "https://images.squarespace-cdn.com/content/v1/5dea42a80d60bb6675fdb54c/1619182116698-VM8JQZATNHI2DWZB2RYY/alaster-anderson-garden-design-planting-installation-garden-lighting.jpg?format=2500w",
      heading: "Join Our Growing Community",
      subheading:
        "Share your garden journey, get tips from others, and grow together with like-minded people.",
      buttonText: "Join Now",
    },
    {
      img: "https://static.vecteezy.com/system/resources/previews/038/345/095/non_2x/ai-generated-blurry-garden-house-scene-behind-an-empty-wooden-surface-setting-the-stage-for-product-displays-photo.jpeg",
      heading: "Easy Gardening Tips & Tools",
      subheading:
        "Explore seasonal tips and tools to make gardening joyful and simple.",
      buttonText: "Learn More",
    },
  ];

  return (
    <Slider className="mb-20 overflow-hidden" {...settings}>
      {slides.map((slide, index) => (
        <div key={index}>
          <div className="relative w-full h-[calc(100vh-10rem)]">
            <img
              src={slide.img}
              alt={slide.heading}
              className="w-full h-full object-cover brightness-[0.6]"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/15 to-black/35 flex items-center justify-center px-4">
              <div className="max-w-3xl text-center text-white space-y-5">
                <Fade direction="down" triggerOnce>
                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-wide drop-shadow-md">
                    {slide.heading}
                  </h2>
                </Fade>
                <Fade direction="up" delay={200} triggerOnce>
                  <p className="text-base sm:text-lg md:text-xl text-gray-200 drop-shadow-sm leading-relaxed">
                    {slide.subheading}
                  </p>
                </Fade>
                <Zoom delay={400} triggerOnce>
                  <button
                    className="bg-[#F6C26B] hover:bg-[#f4b955] text-[#2D3748] font-semibold py-3 px-8 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-[#F6C26B]/50"
                    aria-label={slide.buttonText}
                  >
                    {slide.buttonText}
                  </button>
                </Zoom>
              </div>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default SliderPage;
