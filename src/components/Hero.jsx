import { OrbitControls, ScrollControls, Scroll } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Birdcage from "../components/Birdcage";
import Falcon from "../components/Falcon";
import OverlayText from "../components/OverlayText";
import { Perf } from "r3f-perf";
import { Suspense } from "react";
import { Html, useProgress } from "@react-three/drei";
import Bird from "./Bird";

/* import { useControls } from "leva";
import { Office } from "../components/Office";
import Overlay from "../components/Overlay";
import * as THREE from "three"; */

export default function Hero() {
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

  return (
    <>
      <Canvas>
        <Suspense fallback={<Loader />}>
          {/* <Perf position="top-left" /> */}
          <OrbitControls /* enableZoom={false }  */ />
          <ambientLight intensity={1} />
          <ScrollControls pages={5} damping={0.25}>
            <Birdcage position={[0, -1, 2]} />
            {/* <Falcon /> */}
            {/* <Bird></Bird> */}
            <OverlayText />
          </ScrollControls>
        </Suspense>
      </Canvas>
    </>
  );
}
