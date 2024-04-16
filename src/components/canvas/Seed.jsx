import React from 'react';
import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import CanvasLoader from '../Loader';

const Seed = ({ scale, position }) => {
    const seed = useGLTF('../assets/models/seed.glb');

    return (
        <group>
            <group rotation={[0, Math.PI / 2, 0]}> {/* Rotate the group to orient the model properly */}
                <primitive object={seed.scene}
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

const SeedCanvas = () => {
    const isMobile = window.matchMedia("(max-width: 768px)").matches;
    const scale = isMobile ? 1 : 1;
    const position = isMobile ? { x: 0, y: 1, z: 0 } : { x: -3.5, y: 0.5, z: 0 };

    return (
        <Canvas shadows
            frameloop='demand'
            gl={{ preserveDrawingBuffer: true }}
            camera={{ fov: 45, near: 0.1, far: 200, position: [-4, 3, 6] }}>
            <Suspense fallback={<CanvasLoader />}>
                <OrbitControls
                    enableZoom={false}
                    maxPolarAngle={Math.PI / 2}
                    minPolarAngle={Math.PI / 2}
                    autoRotate={false}
                    rotateSpeed={0.5} // Adjust rotation speed as needed
                    enableRotate={true} // Enable rotation
                    enablePan={true} // Disable panning
                    enableDamping={true} // Enable damping for smoother movement
                    dampingFactor={0.1} // Set damping factor
                />

                <Seed scale={scale} position={position} />

            </Suspense>
        </Canvas>
    )
}

export default SeedCanvas;
