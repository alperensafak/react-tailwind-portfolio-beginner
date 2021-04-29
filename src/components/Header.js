import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import Typical from "react-typical";
import { Link as ScrollLink } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import useStartAnimation from "./hook/useStartAnimation";

export default function Header() {
  const animated = useStartAnimation();
  return (
    <div
      className="min-h-screen flex items-center justify-center"
      style={{
        background: "#091c29",
      }}
      id="header"
    >
      <div className="w-10/12 mx-auto flex flex-col md:flex-row-reverse items-center justify-between">
        <div className="w-full md:w-2/5 animate-float">
          <LazyLoadImage src="/headerimg.svg" effect="blur" />
        </div>

        <div className="text-white font-dosis text-center md:text-left">
          <h2
            className={` ${
              animated ? "" : "translate-y-10 opacity-0"
            } transform transition duration-1000 ease-in-out text-3xl md:text-5xl font-bold`}
          >
            Hi, It's me Alperen
          </h2>
          <h1
            className={`${
              animated ? "" : "translate-y-10 opacity-0"
            } transform transition duration-1000 ease-in-out font-bold text-2xl text-gray-500`}
          >
            I'm{" "}
            <Typical
              className="inline-block"
              steps={[
                "front-end developer 🖱️",
                2000,
                "back-end developer 💻",
                2000,
                "graphic designer 📏",
                2000,
              ]}
              loop={Infinity}
              wrapper="p"
            />
          </h1>
          <div
            className={`${
              animated ? "" : "translate-y-10 opacity-0"
            } transform transition duration-1000 ease-in-out font-bold md:text-left text-center text-3xl md:text-6xl mt-3 `}
          >
            <button className="text-gray-500 dark:text-gray-300 hover:text-white  mr-2">
              <a href="https://github.com/alperensafak">
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </button>

            <button className="text-gray-500 dark:text-gray-300 hover:text-white ">
              <a href="https://linkedin.com/in/alperensafak">
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
            </button>
          </div>

          <ScrollLink to="mywork" smooth={true}>
            <button className="bg-gradient-to-b from-button-sec  to-button-pri hover:from-button-pri hover:to-button-sec   px-10 py-3  uppercase mt-6 rounded-lg ">
              Discovery more
            </button>
          </ScrollLink>
        </div>
      </div>
    </div>
  );
}
