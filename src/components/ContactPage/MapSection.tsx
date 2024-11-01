import React from "react";

const MapSection = () => {
  return (
    <div className="relative w-full h-[400px] text-right">
      <div className="overflow-hidden bg-none w-full h-full">
        <iframe
          className="w-full h-full"
          src="https://maps.google.com/maps?width=600&height=400&hl=en&q=Governer house&t=&z=14&ie=UTF8&iwloc=B&output=embed"
          title="Google Map"
        ></iframe>
      </div>
    </div>
  );
};

export default MapSection;
