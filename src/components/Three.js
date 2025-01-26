import React, { useRef, useState } from "react";
import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import { useLoader } from "@react-three/fiber";
import { Environment, OrbitControls, Sky, Cloud } from "@react-three/drei";
import { Physics, useSphere, useBox } from "@react-three/cannon";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import { MTLLoader } from "three/examples/jsm/loaders/MTLLoader";
import { DDSLoader } from "three-stdlib";
import { Suspense } from "react";

THREE.DefaultLoadingManager.addHandler(/\.dds$/i, new DDSLoader());

const Scene = () => {
  const materials = useLoader(MTLLoader, "building_04.mtl");
  const obj = useLoader(OBJLoader, "building_04.obj", (loader) => {
    materials.preload();
    loader.setMaterials(materials);
  });

  return <primitive object={obj} scale={0.4} />;
};

// const Scene = () => {
//   const obj = useLoader(OBJLoader, "Head.obj");
//   return <primitive object={obj} />;
// };

function Three({ threeIndex }) {
  return (
    <div className={threeIndex}>
      <Canvas className="rounded-2xl" camera={{ position: [0, 10, 0] }}>
        <Suspense fallback={null}>
          <Scene />
          <OrbitControls />
          {/* <Environment preset="sunset" background /> */}
        </Suspense>
      </Canvas>
    </div>
  );
}

export default Three;
