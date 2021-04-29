import React from "react";
import { Link as ScrollLink } from "react-scroll";
export default function Navigation() {
  return (
    <div
      className="bg-gradient-to-b fixed top-0 w-screen z-40 "
      style={{
        background: "#091c29",
      }}
    >
      <div className="flex items-center justify-between w-10/12 mx-auto py-3 text-white font-dosis">
        <ScrollLink
          to="header"
          smooth={true}
          className="text-3xl  font-bold text-white flex-1 cursor-pointer"
        >
          <h1>
            A
            <span className=" w-2 h-2 mx-1 bg-button-pri inline-block rounded-full" />
            Ş
            <span className=" w-2 h-2 mx-1 bg-button-pri inline-block rounded-full" />
          </h1>
        </ScrollLink>
        <div>
          <ScrollLink to="mywork" smooth={true}>
            <span className="text-xl mr-4 cursor-pointer">Work</span>
          </ScrollLink>
          <ScrollLink to="mycontact" smooth={true}>
            <span className="text-xl mr-4 cursor-pointer">Contact</span>
          </ScrollLink>
        </div>
      </div>
    </div>
  );
}
