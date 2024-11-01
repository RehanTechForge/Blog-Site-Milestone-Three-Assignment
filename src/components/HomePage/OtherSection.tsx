import Image from "next/image";
import React from "react";

const OtherSection = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-8 my-10 px-4">
      <div className="relative h-[250px] md:h-auto">
        <div className="absolute inset-0 z-[-1]">
          <Image
            src={"/back.png"}
            alt="back image"
            fill
            className="rounded-lg object-cover"
          />
        </div>
        <div className="px-4 md:px-20 flex flex-col md:h-[250px] h-full justify-center">
          <h1 className="text-primary font-semibold text-xl">Need Right Now</h1>
          <p className="font-light my-2">
            Your curated roundup of this <br /> season's essentials.
          </p>
        </div>
      </div>
      <div className="relative h-[250px] md:h-auto">
        <div className="absolute inset-0 z-[-1]">
          <Image
            src={"/back.png"}
            alt="back image"
            fill
            className="rounded-lg object-cover"
          />
        </div>
        <div className="px-4 md:px-20 flex flex-col text-white justify-center h-full">
          <h1 className="font-semibold text-xl">THE THREAD</h1>
          <p className="font-light my-2">
            Your go-to destination for all <br /> things fashion, beauty, and
            lifestyle at Nordstrom.
          </p>
        </div>
      </div>
    </section>
  );
};

export default OtherSection;
