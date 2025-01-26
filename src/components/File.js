import React from "react";
import { HiCubeTransparent } from "react-icons/hi";

function File({ name }) {
  return (
    <div className="rounded-xl aspect-square border-gray-800 border-4 bg-white flex justify-center items-center relative">
      <HiCubeTransparent size={50} className="-mt-8" />
      <p className="absolute bottom-5">{name}.obj</p>
    </div>
  );
}

export default File;
