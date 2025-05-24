// import React from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// export default function SliderPage() {
//   const settings = {
//     dots: true,
//     infinite: true,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     speed: 2000,
//     autoplaySpeed: 5000,
//     cssEase: "linear",
//   };
//   return (
//     <Slider className=" mb-20 overflow-hidden " {...settings}>
//       <div>
//         <div className="w-full  h-[calc(100vh-8rem)] relative">
//           <img
//             className="w-full h-[calc(100vh-8rem)]"
//             src="https://www.southernliving.com/thmb/110u4_Q7R-1Y8Juz6bX-RPPNer0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/2119102_garla039-e59dd588deba4301a43515fcd0c213d3.jpg"
//             alt=""
//           />

//           <div className="absolute inset-0 bg-black/50 flex items-center justify-center text-center text-white px-4">
//             <div>
//               <h2 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
//                 Welcome to Your Green Home
//               </h2>
//               <p className="text-lg md:text-xl mb-6 max-w-xl mx-auto">
//                 Discover smart tips and tools to grow a greener lifestyle—from
//                 your doorstep!
//               </p>
//               <button className="bg-green-500 hover:bg-green-600 text-white py-2 px-6 rounded-full transition">
//                 Get Started
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div>
//         <div className="w-full  h-[calc(100vh-8rem)] relative">
//           <img
//             className="w-full h-[calc(100vh-8rem)]"
//             src="https://images.squarespace-cdn.com/content/v1/5dea42a80d60bb6675fdb54c/1619182116698-VM8JQZATNHI2DWZB2RYY/alaster-anderson-garden-design-planting-installation-garden-lighting.jpg?format=2500w"
//             alt=""
//           />
//           <div className="absolute inset-0 bg-black/40 flex items-center justify-center text-center text-white px-4">
//             <div>
//               <h2 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
//                 Join Our Growing Community
//               </h2>
//               <p className="text-lg md:text-xl mb-6 max-w-xl mx-auto">
//                 Share your garden journey, get tips from others, and grow
//                 together with like-minded people.
//               </p>
//               <button className="bg-green-500 hover:bg-green-600 text-white py-2 px-6 rounded-full transition">
//                 Join Now
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div>
//         <div className="w-full  h-[calc(100vh-8rem)] relative">
//           <img
//             className="w-full h-[calc(100vh-8rem)]"
//             src="https://static.vecteezy.com/system/resources/previews/038/345/095/non_2x/ai-generated-blurry-garden-house-scene-behind-an-empty-wooden-surface-setting-the-stage-for-product-displays-photo.jpeg"
//             alt=""
//           />
//           <div className="absolute inset-0 bg-black/40 flex items-center justify-center text-center text-white px-4">
//             <div>
//               <h2 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
//                 Easy Gardening Tips & Tools
//               </h2>
//               <p className="text-lg md:text-xl mb-6 max-w-xl mx-auto">
//                 Explore seasonal tips and tools to make gardening joyful and
//                 simple.
//               </p>
//               <button className="bg-green-500 hover:bg-green-600 text-white py-2 px-6 rounded-full transition">
//                 Learn More
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </Slider>
//   );
// }

//  SliderPage;
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
    speed: 1500,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
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
    <Slider className="mb-20 overflow-hidden " {...settings}>
      {slides.map((slide, index) => (
        <div key={index}>
          <div className="w-full h-[calc(100vh-5rem)] relative">
            <img
              className="w-full h-full object-cover brightness-90"
              src={slide.img}
              alt={`Slide ${index + 1}`}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/60 flex items-center justify-center text-center text-white px-4">
              <div className="max-w-3xl space-y-6">
                <Fade direction="down" triggerOnce>
                  <h2 className="text-4xl md:text-6xl font-extrabold leading-tight drop-shadow-lg tracking-wide">
                    {slide.heading}
                  </h2>
                </Fade>
                <Fade direction="up" delay={200} triggerOnce>
                  <p className="text-lg md:text-xl drop-shadow-sm">
                    {slide.subheading}
                  </p>
                </Fade>
                <Zoom delay={400} triggerOnce>
                  <button className="bg-green-500 hover:bg-green-600 text-white py-3 px-8 rounded-full transition shadow-lg hover:shadow-xl hover:scale-105 duration-300">
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
