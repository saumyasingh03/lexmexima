import React from "react";
import { images } from "./images.js";

const Description = () => {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-center gap-16 p-6 pt-12 md:pb-36 w-full pl-10">
      {/* images block – unchanged */}
      <div className="relative w-full max-w-lg flex-shrink-0">
        <div className="md:w-[28rem] md:h-[28rem] sm:w-[24rem] sm:h-[24rem] w-[18rem] h-[18rem] rounded-xl overflow-hidden shadow-lg">
          <img
            src={"/gallery/about_img1.png"}
            loading="lazy"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>

        <div className="absolute -bottom-28 right-5 sm:-right-5 md:w-[20rem] md:h-[20rem] sm:w-[16rem] sm:h-[16rem] w-[12rem] h-[12rem] rounded-xl overflow-hidden shadow-md">
          <img
            src={"/gallery/img20.png"}
            loading="lazy"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* text block – only heading & paragraph replaced */}
      <div className="max-w-xl text-center lg:text-left lg:mt-10 mt-14 md:mt-1">
        <h2 className="text-4xl font-serif font-bold text-gray-900 mb-6 mt-6 md:mt-32">
          About New Project
        </h2>
        <p className="text-gray-700 text-lg leading-relaxed max-w-md mx-auto lg:mx-0">
        At Lex Maxima, we believe the law doesn’t live only in courtrooms — it lives in every village where a woman
        is denied her rights, every school shaped by caste, and every home where silence replaces justice.
        This project reclaims the law as a language of the people — not in jargon, but in lived realities.
        We're building a network of young legal educators and grassroots leaders to bring justice where it was never meant to reach.
        With regional legal toolkits and fellowships for first-gen learners, we're not just teaching rights — we're changing 
        who gets to speak the language of justice.Because the constitution isn’t just a document — it’s a promise.
        And that promise belongs to everyone.
        </p>
      </div>
    </section>
  );
};

export default Description;
