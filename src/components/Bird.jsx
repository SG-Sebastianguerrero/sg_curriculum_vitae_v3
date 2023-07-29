/* import { useLoader } from "@react-three/fiber";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader";

export default function Bird() {
  const fbx = useLoader(FBXLoader, "./models/falcon/source/Brown_Falcon.FBX");
  return <primitive object={fbx} />;
} */

import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

export default function Bird() {
  const gltf = useLoader(GLTFLoader, "./models/bird/scene.gltf");
  return <primitive object={gltf.scene} />;
}
