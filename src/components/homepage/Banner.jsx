import React from "react";
import bannerImg from "@/assets/img/hero.png";
import Image from "next/image";

const Banner = () => {
  return (
    <div className="min-h-[70vh] text-center space-y-6 pt-10">
      <h2 className="font-bold text-5xl">
        We Build <br />
        <span className="text-purple-500">Productive</span> Apps
      </h2>
      <p className="text-gray-600 max-w-[50%] mx-auto">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet
        veritatis, eum sit magnam consequatur illo minus laborum nemo laboriosam
        ipsam.
      </p>

      <div className="flex justify-center gap-2">
        <button className="btn">Play Store</button>
        <button className="btn">App Store</button>
      </div>
      <Image src={bannerImg} className="mx-auto" alt="" />
    </div>
  );
};

export default Banner;
