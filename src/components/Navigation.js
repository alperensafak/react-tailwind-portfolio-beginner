import React from "react";

export default function Navigation() {
  return (
    <div
      className="bg-gradient-to-b "
      style={{
        background: "#091c29",
      }}
    >
      <div className="flex items-center justify-between w-10/12 mx-auto py-3 text-white font-dosis">
        <h1 className="text-3xl font-bold">
          A
          <span className=" w-2 h-2 mx-1 bg-button-pri inline-block rounded-full" />
          Ş
          <span className=" w-2 h-2 mx-1 bg-button-pri inline-block rounded-full" />
        </h1>
        <div>
          <span className="text-xl mr-4">Work</span>
          <span className="text-xl mr-4">Contact</span>
        </div>
      </div>
    </div>
  );
}
