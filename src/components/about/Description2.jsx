import React from "react";

const Description = () => {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-center gap-16 p-6 pt-12 md:pb-36 w-full pl-10">
      {/* text block */}
      <div className="max-w-xl text-center lg:text-right lg:mt-10 mt-14 md:mt-1">
        <h2 className="text-4xl font-serif font-bold text-gray-900 mb-6 mt-6 md:mt-32">
          Why We Do This
        </h2>
        <p className="text-gray-700 text-lg leading-relaxed max-w-md mx-auto lg:mx-0">
          Because silence isn’t natural — it’s constructed.
          Because justice should not be a privilege — it should be a right.
          At Lex Maxima, we work with those who have been told they don’t belong in the courtroom, 
          in parliament, or in public debates. We are here for the student denied a seat at the table because of her caste.
          For the tribal girl told she doesn’t need an education. For the queer youth forced into silence.
          We don’t wait for permission — we build power.
          Not for charity. Not for applause.
          But for justice. No gatekeepers. No saviors. Just collective action — rooted in the margins, rising toward justice.
        </p>
      </div>

      {/* images block */}
      <div className="relative w-full max-w-lg flex-shrink-0">
        <div className="md:w-[28rem] md:h-[28rem] sm:w-[24rem] sm:h-[24rem] w-[18rem] h-[18rem] rounded-xl overflow-hidden shadow-lg">
          <img
            src="/gallery/about_img3.png"
            loading="lazy"
            alt="Young women participating in a grassroots legal awareness workshop"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="absolute -bottom-28 right-5 sm:-right-5 md:w-[20rem] md:h-[20rem] sm:w-[16rem] sm:h-[16rem] w-[12rem] h-[12rem] rounded-xl overflow-hidden shadow-md">
          <img
            src="/gallery/img2.png"
            loading="lazy"
            alt="Rural community learning session led by youth legal educator"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Description;
