import React from 'react'
import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, useGLTF } from '@react-three/drei'
import CanvasLoader from '../Loader';

const Seed = ({ scale, position }) => {
    const seed = useGLTF('../assets/models/seed-1.glb');

    return (
        <group>
            <primitive object={seed.scene}
                scale={scale}
                position={[position.x, position.y, position.z]}
                rotation-y={0} />
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
    const scale = isMobile ? 18 : 20;
    const position = isMobile ? { x: 0, y: 1, z: 2 } : { x: 3, y: -0.5, z: 3 };

    return (
        <Canvas shadows
            frameloop='demand'
            gl={{ preserveDrawingBuffer: true }}
            camera={{ fov: 45, near: 0.1, far: 200, position: [-4, 3, 6] }}>
            <Suspense fallback={<CanvasLoader />}>
                <OrbitControls
                    autoRotate
                    enableZoom={false}
                    maxPolarAngle={Math.PI / 2}
                    minPolarAngle={Math.PI / 2} />

                <Seed scale={scale} position={position} />

            </Suspense>
        </Canvas>
    )
}

export default SeedCanvas;
