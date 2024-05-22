'use client'

import { useGLTF, useAnimations, Box } from '@react-three/drei'
import { Suspense, useEffect, useRef } from 'react'
import { Object3DEventMap, Group } from 'three'

export default function World() {
    const groupRef = useRef<Group<Object3DEventMap>>(null);
    const { scene, animations } = useGLTF('/models/virtualcity.gltf')
    const { actions, names } = useAnimations(animations, groupRef)

    useEffect(() => {
        actions[names[0]]?.play()
    })

    return (
        <>
            <ambientLight intensity={1} />
            <Suspense fallback={<Box/>}>
                <group ref={groupRef} dispose={null}>
                    <primitive object={scene} />
                </group>
            </Suspense>
        </>
    )
}