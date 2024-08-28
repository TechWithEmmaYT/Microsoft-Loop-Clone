import React from "react";
import Image from "next/image";
import looplogo from "@/public/images/loop-logo.png";

const Logo = () => {
  return (
    <div className="flex items-center gap-2">
      <Image src={looplogo} width={30} height={30} alt="Microsoft loop clone" />
      <h2 className="font-bold text-xl">Loop</h2>
    </div>
  );
};

export default Logo;
