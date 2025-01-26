import React from "react";

import Device from "../Device";

function Devices() {
  return (
    <div className="p-12">
      <p className="text-3xl font-bold mb-10">Your devices</p>
      <div className="flex">
        <div className="flex w-3/4 overflow-x-scroll">
          <Device name={"Oculus Quest 2"}></Device>
        </div>
        {/* <div className="w-1/4 ml-5">
          <p className="font-semibold text-xl">Add a device</p>
        </div> */}
      </div>
    </div>
  );
}

export default Devices;
