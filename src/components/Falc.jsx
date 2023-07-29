/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Author: NestaEric (https://sketchfab.com/Nestaeric)
License: SKETCHFAB Standard (https://sketchfab.com/licenses)
Source: https://sketchfab.com/3d-models/brown-falcon-7c5c98e51fcb460bbac5ca895bc3f878
Title: Brown Falcon
*/

import React, { useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { useEffect } from "react";
import { useControls } from "leva";

export default function Falc(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF(
    "./models/falc/brown_falcon.glb"
  );

  const { actions } = useAnimations(animations, group);

  const { animationName } = useControls({
    animationName: {
      options: Object.keys(actions),
    },
  });
  useEffect(() => {
    let animate = actions[animationName];
    animate.reset().fadeIn(0.5).play();

    return () => {
      animate.fadeOut(0.5);
    };
  }, [animationName]);

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group
            name="fbx_mergefbx"
            rotation={[Math.PI / 2, 0, 0]}
            scale={0.01}
          >
            <group name="Object_2">
              <group name="RootNode">
                <group name="Object_4">
                  <primitive object={nodes._rootJoint} />
                  <skinnedMesh
                    name="Object_7"
                    geometry={nodes.Object_7.geometry}
                    material={materials.eyes}
                    skeleton={nodes.Object_7.skeleton}
                  />
                  <skinnedMesh
                    name="Object_8"
                    geometry={nodes.Object_8.geometry}
                    material={materials.eyelens}
                    skeleton={nodes.Object_8.skeleton}
                  />
                  <skinnedMesh
                    name="Object_9"
                    geometry={nodes.Object_9.geometry}
                    material={materials.body}
                    skeleton={nodes.Object_9.skeleton}
                  />
                  <skinnedMesh
                    name="Object_10"
                    geometry={nodes.Object_10.geometry}
                    material={materials.eyelids}
                    skeleton={nodes.Object_10.skeleton}
                  />
                  <skinnedMesh
                    name="Object_12"
                    geometry={nodes.Object_12.geometry}
                    material={materials.body}
                    skeleton={nodes.Object_12.skeleton}
                  />
                  <skinnedMesh
                    name="Object_13"
                    geometry={nodes.Object_13.geometry}
                    material={materials.material}
                    skeleton={nodes.Object_13.skeleton}
                  />
                  <skinnedMesh
                    name="Object_14"
                    geometry={nodes.Object_14.geometry}
                    material={materials.peck}
                    skeleton={nodes.Object_14.skeleton}
                  />
                  <skinnedMesh
                    name="Object_15"
                    geometry={nodes.Object_15.geometry}
                    /* material={materials.tongue} */
                    skeleton={nodes.Object_15.skeleton}
                  />
                  <skinnedMesh
                    name="Object_17"
                    geometry={nodes.Object_17.geometry}
                    material={materials.feather}
                    skeleton={nodes.Object_17.skeleton}
                  />
                  <skinnedMesh
                    name="Object_19"
                    geometry={nodes.Object_19.geometry}
                    material={materials.feather}
                    skeleton={nodes.Object_19.skeleton}
                  />
                  <group name="Object_6" rotation={[-Math.PI / 2, 0, 0]} />
                  <group name="Object_11" rotation={[-Math.PI / 2, 0, 0]} />
                  <group name="Object_16" rotation={[-Math.PI / 2, 0, 0]} />
                  <group name="Object_18" rotation={[-Math.PI / 2, 0, 0]} />
                  <group name="BF_skin_eyes" rotation={[-Math.PI / 2, 0, 0]} />
                  <group name="BF_skin_body" rotation={[-Math.PI / 2, 0, 0]} />
                  <group
                    name="BF_skin_feather"
                    rotation={[-Math.PI / 2, 0, 0]}
                  />
                  <group name="props" rotation={[-Math.PI / 2, 0.262, 0]}>
                    <mesh
                      name="props__0"
                      castShadow
                      receiveShadow
                      geometry={nodes.props__0.geometry}
                      material={materials.props__0}
                    />
                  </group>
                  <group name="BF_skin_wings" rotation={[-Math.PI / 2, 0, 0]} />
                  {/* <group name="props_g" rotation={[-Math.PI / 2, 0, 0]}>
                    <mesh
                      name="props_g_ground_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.props_g_ground_0.geometry}
                      material={materials.ground}
                    />
                  </group> */}
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("./models/falc/brown_falcon.glb");