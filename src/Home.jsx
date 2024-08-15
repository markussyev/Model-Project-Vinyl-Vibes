import React, { useState } from "react";

function Home() {
  return (
    <div className=" flex flex-col-reverse md:flex-row mt-20 md:h-screen gap-10 bg-white dark:bg-darkgray-default z-20">
      <div className="flex flex-col w-full md:w-1/3 items-center z-10">
        <h1 className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-8xl dark:text-lightgray-default">HELLO</h1>
        <h2 className="text-2xl sm:text-3xl md:text-4xl text-lightcoral-default pb-20 ">
          Vinyl Lover!
        </h2>
        <p className="dark:text-lightgray-default">
          We're thrilled to have you join our community of vinyl enthusiasts.
          Here, you can explore an extensive collection of vinyl records, find
          rare gems, and build your dream vinyl list. Whether you’re a seasoned
          collector or just starting your journey, our platform is designed to
          help you discover, track, and cherish your favorite records. Dive in,
          add to your collection, and connect with fellow vinyl lovers. Happy
          spinning!
        </p>
      </div>
      <div className="relative md:flex-grow z-0">
        <img
          className="w-full h-auto object-cover md:absolute md:top-0 md:right-0 md:h-full md:w-auto md:object-right scale-x-[-1] z-0 drop-shadow-xl dark:brightness-200"
          src="../src/assets/img-home.png"
          alt="vinyl record"
        />
      </div>
    </div>
  );
}

export default Home;
