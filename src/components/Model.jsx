import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import {Mesh, MeshPhysicalMaterial, MeshStandardMaterial, DoubleSide} from 'three';
import { Canvas, useThree, useLoader} from '@react-three/fiber';
import {Environment, CameraControls} from '@react-three/drei'
import React, { useRef, useLayoutEffect, useEffect } from 'react';



function Scene({ surfacePath, featurePath, transparentModel, isMobile}) {
  const { scene } = useThree();

  const gltfSurface = useLoader(GLTFLoader, surfacePath);

  const surfaceMeshRef = useRef();
  const featureMeshRefs = useRef([]);

  let sx = 0.035;
  let sy = 0.035;
  let sz = 0.035;
  let px = 0;
  let py = 0;
  let pz = 0;

  if (isMobile){
    sx = 0.015
    sy = 0.015
    sz = 0.015
  }

  useLayoutEffect(() => {
    const surfaceMesh = gltfSurface.scene;
    surfaceMesh.scale.set(sx, sy, sz);
    surfaceMesh.position.set(px, py, pz);

    const surfaceMat = new MeshPhysicalMaterial({ color: 0xff96af}); //can add 'side: DoubleSide' to render the inside of the brain as well
    surfaceMesh.traverse(child => {
      if (child instanceof Mesh) {
        child.material = surfaceMat;
        if (transparentModel) {
          child.material.transparent = true;
          child.material.opacity = 0.2;
          child.material.transmission = 0.3;
          child.material.depthWrite = false; // Disable depth writes
        }
      }
    });

    surfaceMeshRef.current = surfaceMesh;
    scene.add(surfaceMesh);

    return () => {
      scene.remove(surfaceMesh);
    };
  }, [transparentModel, gltfSurface.scene, scene]);

  //add a useEffect function that (slightly moves the brain around) and (gives directions to move the brain) when the component is first mounted... Maybe actually do this in OrbitControls
  useEffect(() => {
    const loadFeatureMesh = async (path, color) => {
      const gltfFeature = await new Promise((resolve, reject) => {
        new GLTFLoader().load(path, resolve, undefined, reject);
      });

      const featureMesh = gltfFeature.scene;
      featureMesh.scale.set(sx, sy, sz);
      featureMesh.position.set(px, py, pz);

      const featureMat = new MeshStandardMaterial({ color });
      featureMesh.traverse(child => {
        if (child instanceof Mesh) {
          child.material = featureMat;
        }
      });

      featureMeshRefs.current.push(featureMesh);
      scene.add(featureMesh);
    };

    featurePath.forEach(({ path, color }) => {
      loadFeatureMesh(path, color);
    });

    return () => {
      featureMeshRefs.current.forEach(featureMesh => {
        scene.remove(featureMesh);
      });
      featureMeshRefs.current = [];
    };
  }, [featurePath, scene]);

  return null;
}

function Model ({featurePath, transparentModel, isMobile}) {

  const surfacePath = '/mesh/Surface.glb';
  /*pos: (pov of camera) L/R, U/D, distance */

    if (isMobile) {
      return (
        <Canvas camera={{position: [-4, -1, 7], focus: [-0.5, 0.5, 0], fov: 40}}> 
                <Environment files={'./envmap/whitestudio.hdr'} />
                <CameraControls />
                  <Scene
                    surfacePath={surfacePath}
                    featurePath={featurePath}
                    transparentModel={transparentModel}
                    isMobile={isMobile}
                  />
            </Canvas>
      );
    }
    return  (
            <Canvas camera={{position: [6, 1, 7], focus: [-0.5, 0.5, 0], fov: 40}}> 
                <Environment files={'./envmap/whitestudio.hdr'} />
                <CameraControls />
                  <Scene
                    surfacePath={surfacePath}
                    featurePath={featurePath}
                    transparentModel={transparentModel}
                    isMobile={isMobile}
                  />
            </Canvas>
    );
};

//ADDITION: Add a nesting feature for the models. Qualifying features (midbrain, cerebrum, striatum, etc.) which have substructures will have a piece of data: (nest: true or false) which will
//          manifest as a button on this description. When the user presses the button, the brain will go away, the feature will be scaled up to the brain's size,
//          and each substructure will be loaded. This will be especially useful for looking at cross sections of the midbrain, pons, spinal cord, etc. 

export default Model;