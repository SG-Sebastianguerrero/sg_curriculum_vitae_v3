import React, { Suspense, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stage } from "@react-three/drei";
import Falc from "./Falc";
import { Perf } from "r3f-perf";
import { Html, useProgress } from "@react-three/drei";

export default function Viewer() {
  function Loader() {
    const { progress } = useProgress();
    return (
      <Html center>
        <div className="text-center flex flex-col gap-3 justify-center items-center">
          <span className="loader"></span>
          <span className="text-sg_black">
            {Math.round(progress)}% Loading...
          </span>
        </div>
      </Html>
    );
  }

  const ref = useRef();
  return (
    <Canvas /* dpr={[5, 2]} camera={{ fov: 100 }} */>
      <Suspense fallback={<Loader />}>
        <Perf position="bottom-left" />
        <Stage
          controls={ref}
          preset="rembrandt"
          intensity={1}
          environment="city"
        >
          <Falc /* position={[1, 3, -5]} */ scale="0.5" />
        </Stage>
        <OrbitControls ref={ref} />
      </Suspense>
    </Canvas>
  );
}
