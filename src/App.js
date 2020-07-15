import React, { useState } from "react";
import useWebAnimations, { pulse } from "@wellyshen/use-web-animations";
import "./css/App.css";
import "./css/utilities.css";
import Cycle from "./images/cycle.gif";
import Cloud from "./images/cloud.png";
import Ship from "./images/ship.png";

function App() {
  const [bg, setBg] = useState(true);

  const { ref: cycle, getAnimation: Cycleanum } = useWebAnimations({
    keyframes: [
      { transform: "translateX(0)" },
      { transform: "translateX(60px)" },
    ],
    timing: {
      // delay: 500, // Start with a 500ms delay
      duration: 2000, // Run for 1000ms
      direction: "alternate", // Run the animation forwards and then backwards
      iterations: Infinity, // Repeat once
      easing: "ease-in-out", // Use a fancy timing function
    },
  });

  const { ref: cloud1, getAnimation: cloud1anum } = useWebAnimations({
    keyframes: [
      { transform: "translateX(1500px)" },
      { transform: "translateX(-1500px)" },
    ],

    timing: {
      duration: 10000,
      iterations: Infinity,
    },
  });
  const { ref: cloud2, getAnimation: cloud2anum } = useWebAnimations({
    keyframes: [
      { transform: "translateX(1500px)" },
      { transform: "translateX(-1500px)" },
    ],

    timing: {
      duration: 10000,
      iterations: Infinity,
    },
  });
  const { ref: cloud3, getAnimation: cloud3anum } = useWebAnimations({
    keyframes: [
      { transform: "translateX(1500px)" },
      { transform: "translateX(-1500px)" },
    ],

    timing: {
      duration: 10000,
      iterations: Infinity,
    },
  });

  const { ref: ship, getAnimation: shipanum } = useWebAnimations({
    keyframes: [
      { transform: "translateX(-900px) rotate(5deg)" },
      { transform: "translateX(-800px) rotate(-10deg)" },
      { transform: "translateX(-700px) rotate(5deg)" },
      { transform: "translateX(-600px) rotate(-10deg)" },
      { transform: "translateX(-500px) rotate(5deg)" },
      { transform: "translateX(-400px) rotate(-10deg)" },
      { transform: "translateX(-300px) rotate(5deg)" },
      { transform: "translateX(-200px) rotate(-10deg)" },
      { transform: "translateX(-100px) rotate(5deg)" },
      { transform: "translateX(0px) rotate(-10deg)" },
      { transform: "translateX(100px) rotate(5deg)" },
      { transform: "translateX(200px) rotate(-10deg)" },
      { transform: "translateX(300px) rotate(5deg)" },
      { transform: "translateX(400px) rotate(-10deg)" },
      { transform: "translateX(500px) rotate(5deg)" },
      { transform: "translateX(600px) rotate(-10deg)" },
      { transform: "translateX(700px) rotate(5deg)" },
      { transform: "translateX(800px) rotate(-10deg)" },
      { transform: "translateX(900px) rotate(5deg)" },

      { transform: "translateX(1100px) rotate(-10deg)" },
    ],
    timing: {
      duration: 40000,

      iterations: Infinity,
    },
  });

  const { keyframes, timing } = pulse;
  const { ref: sunMoon } = useWebAnimations({
    keyframes,
    timing: {
      ...timing,
      delay: 1000, // Delay 1s
      iterations: Infinity,
    },
  });

  // speed up animation
  const speedUp = () => {
    const animation1 = Cycleanum();
    const animation2 = cloud1anum();
    const animation3 = cloud2anum();
    const animation4 = cloud3anum();
    const animation5 = shipanum();
    animation1.updatePlaybackRate(animation1.playbackRate * 1.1);
    animation2.updatePlaybackRate(animation2.playbackRate * 1.1);
    animation3.updatePlaybackRate(animation3.playbackRate * 1.1);
    animation4.updatePlaybackRate(animation4.playbackRate * 1.1);
    animation5.updatePlaybackRate(animation5.playbackRate * 1.1);
  };

  return (
    <div className={`${bg ? "daybg" : "bgNight"}`}>
      <div className="w-64 h-64 absolute cloud1 " ref={cloud1}>
        <img src={Cloud} width="100%" height="100%" alt="cloud" />
      </div>
      <div className="w-64 h-64 absolute cloud2 " ref={cloud2}>
        <img src={Cloud} width="100%" height="100%" alt="cloud" />
      </div>
      <div className="w-64 h-64 absolute cloud3 " ref={cloud3}>
        <img src={Cloud} width="100%" height="100%" alt="cloud" />
      </div>
      <div className="w-32 h-32 absolute ship " ref={ship}>
        <img src={Ship} width="100%" height="100%" alt="ship" />
      </div>
      <div
        onClick={() => setBg(!bg)}
        ref={sunMoon}
        className={`w-32 h-32 absolute  sunMoon ${
          bg ? "sunshow" : "moonshow"
        } `}
      ></div>
      <div className="w-full h-64 absolute bottom-0 flex justify-center ">
        <div className="w-64 h-64 absolute cycle ">
          <img
            className="cursor-pointer"
            src={Cycle}
            alt="cycle"
            width="100%"
            height="100%"
            onClick={speedUp}
            ref={cycle}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
