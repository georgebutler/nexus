'use client'

import { Environment, FirstPersonControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'

export default function World() {
    return (
        <Canvas>
            <FirstPersonControls />
            <ambientLight />
            <Environment preset="sunset" />
            <mesh>
                <boxGeometry args={[1, 1, 1]} />
                <meshStandardMaterial color="hotpink" />
            </mesh>
        </Canvas>
    )
}