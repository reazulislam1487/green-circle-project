import React from "react";
import { Typewriter } from "react-simple-typewriter";

const MyComponent = () => {
  const handleType = (count: number) => {
    console.log("Typed word count:", count);
  };

  const handleDone = () => {
    console.log("Done after 5 loops!");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <h1 className="text-3xl md:text-5xl font-medium">
        Life is simple{" "}
        <span className="text-red-600 font-bold">
          <Typewriter
            words={["Eat", "Sleep", "Code", "Repeat!"]}
            loop={5}
            cursor
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
            onLoopDone={handleDone}
            onType={handleType}
          />
        </span>
      </h1>
    </div>
  );
};

export default MyComponent;
