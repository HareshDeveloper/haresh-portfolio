import React, { useState } from 'react';
import Header from "../../components/Header/Header";
import "./Home.scss";
import "../../main.scss";
import Lottie from "react-lottie";
import aboutMeAnimation from "../../assets/lottie-animations/about-me.json";
import loader from "../../assets/lottie-animations/loader.json";

const HomePage = () => {
  const [mainAnimationLoaded, setMainAnimationLoaded] = useState(false);

  const loaderAnimation = {
    loop: true,
    autoplay: true,
    animationData: loader,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  const handleMainAnimationLoad = () => {
    console.log("{in}}}}}}}}}");
    setMainAnimationLoaded(true);
  };
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: aboutMeAnimation, 
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div>
      <Header />
      {!mainAnimationLoaded ? (
        <Lottie
          options={loaderAnimation}
        />
      ) : (
        <div className="container">
          <div className="info">
            <div className="about-me">
              <div className="about-me-content">
                <h1>About me</h1>
                <span className="about-me-span">
                  As a software developer, I believe in the power of simplicity.
                  Whether it's troubleshooting bugs or implementing new features,
                  I approach each task with a focus on clarity and precision. My
                  journey in software development has equipped me with a diverse
                  skill set and a passion for crafting elegant solutions to
                  complex problems. Let's team up and create something remarkable
                  together!
                </span>
              </div>
              <div className="lottie-content">
                <span className="lottie-span">
                  <Lottie
                    options={defaultOptions}
                    eventListeners={[
                      {
                        eventName: 'load',
                        callback: () => handleMainAnimationLoad(true),
                      },
                    ]}
                  />
                </span>
              </div>
            </div>
            <div className="experience-section">
              <div>
                <h1>Experience</h1>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HomePage;
