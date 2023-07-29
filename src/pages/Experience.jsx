import { OrbitControls, ScrollControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Birdcage from "../components/Birdcage";
import { Office } from "../components/Office";
import Overlay from "../components/Overlay";

export default function Experience() {
  return (
    <>
      {/* Office */}

      <Canvas camera={{ fov: 64, position: [2.3, 1.5, 2.3] }}>
        <ambientLight intensity={1} />
        <OrbitControls enableZoom={false} />
        <ScrollControls pages={3} damping={0.25}>
          <Overlay />
          <Office />
        </ScrollControls>
      </Canvas>
    </>
  );
}
