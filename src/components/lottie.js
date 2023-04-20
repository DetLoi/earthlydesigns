
import Lottie from "lottie-react";
import anim1 from "../animations/lottielogo.json"
import React, { useState } from "react";



export default function Lottielogo(){
    const [isStopped, setIsStopped] = useState(false);

  const onEnterFrame = (animation) => {
    const progress = animation.playCount / animation.totalFrames;
    if (progress >= 0.9 && !isStopped) {
      setIsStopped(true);
    }
  };
    return(
       <main>
        <div className="animationbox">
          <Lottie
            className="lottielogo"
            animationData={anim1}
            loop={false}
            autoplay={true}
            isStopped={isStopped}
            config={{
              onEnterFrame: onEnterFrame,
            }}
          />
        </div>
</main>)
}