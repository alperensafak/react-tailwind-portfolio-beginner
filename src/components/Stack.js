import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

export default function Stack() {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center font-dosis"
      id="stack"
    >
      <h1 className="text-5xl font-bold">Stack I use</h1>

      <div className="flex flex-wrap  justify-center mt-10">
        <span className="w-40 h-40 bg-white shadow-lg m-2 rounded-full flex items-center p-5">
          <LazyLoadImage src="/mongo.png" alt="mongo"></LazyLoadImage>
        </span>
        <span className="w-40 h-40 bg-white shadow-lg m-2 rounded-full flex items-center p-5">
          <LazyLoadImage src="/express.png" alt="express"></LazyLoadImage>
        </span>
        <span className="w-40 h-40 bg-white shadow-lg m-2 rounded-full flex items-center p-5">
          <LazyLoadImage src="/logo192.png" alt="react"></LazyLoadImage>
        </span>
        <span className="w-40 h-40 bg-white shadow-lg m-2 rounded-full flex items-center p-5">
          <LazyLoadImage src="/node.png" alt="node"></LazyLoadImage>
        </span>
      </div>

      <p className="w-11/12 text-xl mx-auto md:max-w-xl mt-10">
        <t />
        &emsp; At accusam stet elitr voluptua eirmod justo diam, at ut voluptua
        et nonumy sadipscing consetetur rebum. Sadipscing voluptua dolore et
        dolor clita sit et dolor gubergren. Sea ea ipsum erat eos sed diam lorem
        dolor. Et lorem consetetur voluptua eos et et stet.
      </p>
    </div>
  );
}
