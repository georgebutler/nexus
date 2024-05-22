'use client'

import { VRButton, XR, Controllers, Hands } from '@react-three/xr'
import { OrbitControls } from '@react-three/drei'
import { Canvas } from "@react-three/fiber"
import World from './world'

export default function Renderer() {
    return (
        <>
            <VRButton />
            <Canvas gl={{ antialias: true }}>
                <XR>
                    <Controllers />
                    <Hands />
                </XR>
                <OrbitControls />
                <World />
            </Canvas>
        </>
    )
}