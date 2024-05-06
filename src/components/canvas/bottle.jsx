// import React from 'react';
// import { Suspense } from 'react';
// import { Canvas } from '@react-three/fiber';
// import { OrbitControls, useGLTF } from '@react-three/drei';
// import CanvasLoader from '../Loader';

// const Bottle = ({ scale, position }) => {
//     const bottle = useGLTF('../assets/models/bottles/1L.glb');

//     return (
//         <group>
//             <group rotation={[0, Math.PI / 2, 0]}> {/* Rotate the group to orient the model properly */}
//                 <primitive object={bottle.scene}
//                     scale={scale}
//                     position={[position.x, position.y, position.z]}
//                 />
//             </group>
//             <hemisphereLight intensity={3} groundColor='black' />
//             <pointLight intensity={1} />
//             <spotLight
//                 position={[-20, 50, 10]}
//                 angle={0.12}
//                 penumbra={1}
//                 intensity={1}
//                 castShadow
//                 shadow-mapSize={1024}
//             />
//         </group>
//     )
// }

// const BottleCanvas = () => {
//     const isMobile = window.matchMedia("(max-width: 768px)").matches;
//     const scale = isMobile ? 8 : 18 ;
//     const position = isMobile ? { x: 10, y: -13, z: -1.5 } : { x: 22 , y: -33.5 , z: -12.5 };

//     return (
//         <Canvas shadows
//             frameloop='demand'
//             gl={{ preserveDrawingBuffer: true }}
//             camera={{ fov: 45, near: 0.1, far: 200, position: [-4, 2, 10] }}>
//             <Suspense fallback={<CanvasLoader />}>
              

//                 <Bottle scale={scale} position={position} />

//             </Suspense>
//         </Canvas>
//     )
// }

// export default BottleCanvas;










// import React, { useRef } from 'react';
// import { useFrame } from '@react-three/fiber';
// import { Suspense } from 'react';
// import { Canvas } from '@react-three/fiber';
// import { OrbitControls, useGLTF } from '@react-three/drei';
// import CanvasLoader from '../Loader';

// const Bottle = ({ scale, position }) => {
//     const bottle = useGLTF('../assets/models/bottles/1L.glb');
//     const bottleGroup = useRef();

//     // Use useFrame to animate the bottle's rotation
//     useFrame((state, delta) => {
//         if (bottleGroup.current) {
//             bottleGroup.current.rotation.y += delta * 0.5; // Adjust speed by changing 0.5
//         }
//     });

//     return (
//         <group ref={bottleGroup}>
//             <group rotation={[0, Math.PI / 2, 0]}> {/* Rotate the group to orient the model properly */}
//                 <primitive object={bottle.scene}
//                     scale={scale}
//                     position={[position.x, position.y, position.z]}
//                 />
//             </group>
//             <hemisphereLight intensity={3} groundColor='black' />
//             <pointLight intensity={1} />
//             <spotLight
//                 position={[-20, 50, 10]}
//                 angle={0.12}
//                 penumbra={1}
//                 intensity={1}
//                 castShadow
//                 shadow-mapSize={1024}
//             />
//         </group>
//     )
// }

// const BottleCanvas = () => {
//     const isMobile = window.matchMedia("(max-width: 768px)").matches;
//     const scale = isMobile ? 8 : 18 ;
//     const position = isMobile ? { x: 10, y: -13, z: -1.5 } : { x: 22 , y: -33.5 , z: -12.5 };

//     return (
//         <Canvas shadows
//             frameloop='demand'
//             gl={{ preserveDrawingBuffer: true }}
//             camera={{ fov: 45, near: 0.1, far: 200, position: [-4, 2, 10] }}>
//             <Suspense fallback={<CanvasLoader />}>
//                 <Bottle scale={scale} position={position} />
//             </Suspense>
//         </Canvas>
//     )
// }

// export default BottleCanvas;




// import React, { useRef } from 'react';
// import { useFrame } from '@react-three/fiber';
// import { Suspense } from 'react';
// import { Canvas } from '@react-three/fiber';
// import { OrbitControls, useGLTF } from '@react-three/drei';
// import CanvasLoader from '../Loader';

// const Bottle = ({ scale, position }) => {
//     const bottle = useGLTF('../assets/models/bottles/1L.glb');
//     const bottleGroup = useRef();

//     // Use useFrame to animate the bottle's rotation
//     useFrame((state, delta) => {
//         if (bottleGroup.current) {
//             bottleGroup.current.rotation.y += delta * 0.5; // Adjust speed by changing 0.5
//         }
//     });

//     return (
//         <group ref={bottleGroup}>
//             <group rotation={[0, Math.PI / 2, 0]}> {/* Rotate the group to orient the model properly */}
//                 <primitive object={bottle.scene}
//                     scale={scale}
//                     position={[position.x, position.y, position.z]}
//                 />
//             </group>
//             <hemisphereLight intensity={3} groundColor='black' />
//             <pointLight intensity={1} />
//             <spotLight
//                 position={[-20, 50, 10]}
//                 angle={0.12}
//                 penumbra={1}
//                 intensity={1}
//                 castShadow
//                 shadow-mapSize={1024}
//             />
//         </group>
//     )
// }

// const BottleCanvas = () => {
//     const isMobile = window.matchMedia("(max-width: 768px)").matches;
//     const scale = isMobile ? 8 : 18 ;
//     const position = isMobile ? { x: 10, y: -13, z: -1.5 } : { x: 22 , y: -33.5 , z: -12.5 };

//     return (
//         <Canvas shadows
//             frameloop='demand'
//             gl={{ preserveDrawingBuffer: true }}
//             camera={{ fov: 45, near: 0.1, far: 200, position: [-4, 3, 6] }}>
//             <Suspense fallback={<CanvasLoader />}>
//                 <OrbitControls enableZoom={false} autoRotate={false} rotateSpeed={0.5} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} />
//                 <Bottle scale={scale} position={position} />
//             </Suspense>
//         </Canvas>
//     )
// }

// export default BottleCanvas;



import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import CanvasLoader from '../Loader';

const Bottle = ({ scale, position }) => {
    const bottle = useGLTF('../assets/models/bottles/1L.glb');
    const bottleGroup = useRef();

    // Use useFrame to animate the bottle's rotation
    // useFrame((state, delta) => {
    //     if (bottleGroup.current) {
    //         bottleGroup.current.rotation.y += delta * 0.5; // Adjust speed by changing 0.5
    //     }
    // });

    return (
        <group ref={bottleGroup}>
            <group rotation={[0, Math.PI / 2, 0]}> {/* Rotate the group to orient the model properly */}
                <primitive object={bottle.scene}
                    scale={scale}
                    position={[position.x, position.y, position.z]}
                />
            </group>
            <hemisphereLight intensity={3} groundColor='black' />
            <pointLight intensity={1} />
            <spotLight
                position={[-20, 50, 10]}
                angle={0.12}
                penumbra={1}
                intensity={1}
                castShadow
                shadow-mapSize={1024}
            />
        </group>
    )
}

const BottleCanvas = () => {
    const isMobile = window.matchMedia("(max-width: 768px)").matches;
    const scale = isMobile ? 8 : 18 ;
    const position = isMobile ? { x: 10, y: -13, z: -1.5 } : { x: 22 , y: -33.5 , z: -12.5 };

    return (
        <Canvas shadows
            frameloop='demand'
            gl={{ preserveDrawingBuffer: true }}
            camera={{ fov: 45, near: 0.1, far: 200, position: [-4, 3, 6] }}>
            <Suspense fallback={<CanvasLoader />}>
                <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} />
                <Bottle scale={scale} position={position} />
            </Suspense>
        </Canvas>
    )
}

export default BottleCanvas;
