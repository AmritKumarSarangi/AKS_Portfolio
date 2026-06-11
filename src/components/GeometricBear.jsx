import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { useScroll } from '@react-three/drei'
import * as THREE from 'three'

export function GeometricBear() {
  const group = useRef()
  const scroll = useScroll()

  useFrame((state) => {
    const offset = scroll.offset

    // Bear is off-screen left at start (pages 1-2)
    // Lurks in on page 3-4 (offset 0.35-0.75) 
    // Then retreats off-screen right on page 5 (offset > 0.8)

    let targetX, targetY, targetZ, targetScale

    if (offset < 0.3) {
      // Hiding off-screen left, pages 1-2
      const p = offset / 0.3
      targetX = THREE.MathUtils.lerp(-12, -8, p)
      targetY = THREE.MathUtils.lerp(-2, -1, p)
      targetZ = THREE.MathUtils.lerp(-10, -8, p)
      targetScale = 0.1
    } else if (offset < 0.55) {
      // Creeping in from the right, pages 3-4
      const p = (offset - 0.3) / 0.25
      targetX = THREE.MathUtils.lerp(8, 4, p)
      targetY = THREE.MathUtils.lerp(-1, -1.5, p)
      targetZ = THREE.MathUtils.lerp(-8, -5, p)
      targetScale = THREE.MathUtils.lerp(0.1, 0.5, p)
    } else if (offset < 0.8) {
      // Lurking, slightly hovering — subdued
      const p = (offset - 0.55) / 0.25
      targetX = THREE.MathUtils.lerp(4, 5, p)
      targetY = -1.5 + Math.sin(state.clock.elapsedTime * 1.5) * 0.12
      targetZ = -5
      targetScale = 0.5
    } else {
      // Bull run begins — bear retreats off screen in defeat
      const p = (offset - 0.8) / 0.2
      targetX = THREE.MathUtils.lerp(5, 14, p)
      targetY = THREE.MathUtils.lerp(-1.5, -4, p)
      targetZ = -5
      targetScale = THREE.MathUtils.lerp(0.5, 0.05, p)
    }

    group.current.scale.lerp(
      new THREE.Vector3(targetScale, targetScale, targetScale), 0.07
    )
    group.current.position.lerp(
      new THREE.Vector3(targetX, targetY, targetZ), 0.07
    )

    // Bear keeps its head slightly bowed — defeated posture
    group.current.rotation.y += -0.004
  })

  const material = new THREE.MeshStandardMaterial({
    color: '#cc2233',
    emissive: '#ff003c',
    emissiveIntensity: 0.15,
    roughness: 0.4,
    metalness: 0.6,
    flatShading: true
  })

  return (
    <group ref={group} rotation={[0, Math.PI / 4, 0]} position={[-12, -2, -10]}>
      {/* Main Body — rounder, heavier than bull */}
      <mesh material={material} position={[0, 0, 0]}>
        <sphereGeometry args={[1.0, 6, 5]} />
      </mesh>

      {/* Shoulder hump */}
      <mesh material={material} position={[0, 0.5, 0.3]}>
        <sphereGeometry args={[0.7, 5, 4]} />
      </mesh>

      {/* Head — bowed down */}
      <mesh material={material} position={[0, 0.2, 1.2]} rotation={[0.4, 0, 0]}>
        <sphereGeometry args={[0.55, 6, 5]} />
      </mesh>

      {/* Snout */}
      <mesh material={material} position={[0, -0.1, 1.7]} rotation={[0.4, 0, 0]}>
        <sphereGeometry args={[0.3, 5, 4]} />
      </mesh>

      {/* Small round ears */}
      <mesh material={material} position={[-0.35, 0.75, 1.0]}>
        <sphereGeometry args={[0.18, 5, 4]} />
      </mesh>
      <mesh material={material} position={[0.35, 0.75, 1.0]}>
        <sphereGeometry args={[0.18, 5, 4]} />
      </mesh>

      {/* Short stumpy legs */}
      <mesh material={material} position={[-0.5, -1.1, 0.4]}>
        <cylinderGeometry args={[0.28, 0.28, 0.8, 6]} />
      </mesh>
      <mesh material={material} position={[0.5, -1.1, 0.4]}>
        <cylinderGeometry args={[0.28, 0.28, 0.8, 6]} />
      </mesh>
      <mesh material={material} position={[-0.45, -1.0, -0.5]}>
        <cylinderGeometry args={[0.25, 0.25, 0.8, 6]} />
      </mesh>
      <mesh material={material} position={[0.45, -1.0, -0.5]}>
        <cylinderGeometry args={[0.25, 0.25, 0.8, 6]} />
      </mesh>
    </group>
  )
}
