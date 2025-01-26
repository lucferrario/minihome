import React from "react";

function Device({ name }) {
  return (
    <div className="relative rounded-2xl w-1/5 aspect-square p-5 mr-5 bg-gray-100">
      <p className="font-semibold text-lg mb-5">{name}</p>
      <img src={require(`../img/${name}.png`)} alt={name} className=""></img>
    </div>
  );
}

export default Device;
