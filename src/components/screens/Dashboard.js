import React, { useRef, useState, useEffect } from "react";

import Three from "../Three";
import File from "../File";
import Device from "../Device";
import Map from "../Map";
import Addresses from "../Addresses";

function Dashboard() {
  const [address, setAddress] = useState("");
  const [coords, setCoords] = useState({ lat: 54.729858, lng: 9.526702 });

  const [shown, setShown] = useState(true);
  const [component, setComponent] = useState("");
  const [threeIndex, setThreeIndex] = useState("z-10");

  function handleToggle() {
    setShown(!shown);
  }

  useEffect(() => {
    if (shown === true) {
      setComponent("Map");
      setThreeIndex("z-10 w-full rounded-2xl flex justify-center items-center");
    } else {
      setComponent("3D Model");
      setThreeIndex("z-0 w-full rounded-2xl flex justify-center items-center");
    }
  }, [shown]);

  return (
    <div className="p-12 h-screen overflow-y-scroll">
      <p className="text-3xl font-bold mb-10">Project Overview</p>
      <div className="flex">
        <div className="flex w-2/3 h-2/3 rounded-2xl bg-gray-100 shadow-sm aspect-video relative">
          <button
            className="absolute top-5 right-5 bg-black rounded-xl z-50 p-2 text-white"
            onClick={handleToggle}
          >
            Move {component}
          </button>
          <Map coords={coords}></Map>
          <Three className="z-50" threeIndex={threeIndex} />
        </div>
        <div className="ml-5 p-5 bg-gray-100 w-1/3 rounded-2xl">
          <p className="font-semibold text-xl mb-2">Current File:</p>
          <p className="">File.obj</p>

          <div className="mt-5 mb-10">
            <label
              htmlFor="file-upload"
              className="p-2 rounded-lg bg-black text-white mt-10 mb-20"
            >
              Upload
            </label>
            <input
              id="file-upload"
              type="file"
              className="hidden"
              accept=".obj"
            />
          </div>

          <div className="grid grid-cols-3 grid-rows-2 gap-2">
            <File name="Bugatti" />
            <File name="Garden" />
            <File name="Home" />
            <File name="Studio" />
          </div>
        </div>
      </div>
      <div className="mt-10">
        <p className="font-semibold text-xl mb-5">Choose Location</p>
        <div className="w-full bg-gray-100 rounded-2xl p-5">
          <Addresses
            address={address}
            setAddress={setAddress}
            coords={coords}
            setCoords={setCoords}
          />
        </div>
      </div>
      <div className="mt-10">
        <p className="font-semibold text-xl mb-5">Load on device</p>
        <div className="flex">
          <Device name={"Oculus Quest 2"}></Device>
          <Device name={"Oculus Rift"}></Device>
          <Device name={"Oculus Rift S"}></Device>
          <Device name={"Oculus Quest"}></Device>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
