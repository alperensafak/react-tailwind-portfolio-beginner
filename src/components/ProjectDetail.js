import React from "react";

import useWindowPosition from "./hook/useWindowPosition";
export default function ProjectDetail() {
  const animated = useWindowPosition("header", 0.6);
  return (
    <div>
      <h1
        className={` ${
          animated ? "" : "translate-y-10 opacity-0"
        }   transform transition duration-1000 inline-block m-4  font-dosis text-xl font-bold`}
      >
        Portfolio
      </h1>
      <p
        className={`${
          animated ? "" : "translate-y-10 opacity-0"
        }  transform transition duration-1000 inline-block w-11/12 m-4  text-xl font-dosis`}
      >
        Sanctus sadipscing est duo takimata no labore rebum diam. Labore
        sadipscing at ea amet ut, vero voluptua no sit diam invidunt diam et, at
        et stet lorem sit ut lorem vero clita. Elitr duo aliquyam no sea at ut
        amet.
      </p>
      <button
        className={`${
          animated ? "" : "translate-y-10 opacity-0"
        } transform transition duration-1000  px-20 py-3 m-4 bg-black flex justify-around text-white rounded-lg shadow-2xl`}
      >
        <img
          src="https://timo.engineer/assets/icons/rocket.svg"
          alt="rocket"
          className="mr-5"
        />
        <p className="text-lg">Website</p>
      </button>
    </div>
  );
}
