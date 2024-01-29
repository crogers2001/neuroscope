import { Canvas } from '@react-three/fiber';
import { MeshStandardMaterial } from 'three';
import { useGLTF, Environment, Float } from '@react-three/drei';
import { Suspense, useEffect, useMemo } from 'react';

// function Model() {
//     const { scene } = useGLTF('/mesh/Surface.glb', true);
    
//     const mat = useMemo(() => new MeshStandardMaterial({ color: 0xff96af }), []);

//     useEffect(() => {
//         scene.traverse((node) => {
//             if (node.isMesh) {
//                 node.material = mat;
//             }
//         });
//     }, [scene, mat]);

//     return (
//         <Float speed={2} floatIntensity={1.5} rotationIntensity={1.5}>
//             <mesh position={[-0.8, 0, 0]}scale={[0.02, 0.02, 0.02]}>
//                 <primitive object={scene}/>
//             </mesh>
//         </Float>
//     );
// }

function HomeSplash () {
    return  (
        <Canvas camera={{position: [-5, 0, 7], focus: [-0.5, 0.5, 0], fov: 40}}>
            <Suspense fallback={null}>
                <Environment files={'/envmap/whitestudio.hdr'} />
                {/* <Model /> */}
            </Suspense>
        </Canvas>
    );
};

export default HomeSplash;