import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { useScroll } from '@react-three/drei'
import * as THREE from 'three'

// An angular, low-poly Wall Street Charging Bull
export function GeometricBull({ wireframe = false }) {
  const group = useRef()
  const scroll = useScroll()

  useFrame((state) => {
    const offset = scroll.offset // 0 at top, 1 at bottom
    // We want it to be HUGE at the center when offset is 0,
    // then shrink down to a small logo hovering in the top left or top right when offset > 0.1
    
    // Calculate target scale and positions
    // Math.min(offset * 8, 1) ensures the transition finishes quickly within the first scroll section
    const progress = Math.min(offset * 6, 1) 
    
    const targetScale = THREE.MathUtils.lerp(1.2, 0.4, progress)
    
    // Start Center (0, -1, 0). End at Top Right (3, 2, -2)
    const targetX = THREE.MathUtils.lerp(2, -3.5, progress)
    // Add sine wave oscillation to the Y target so it hovers
    const targetY = THREE.MathUtils.lerp(0, 1.8, progress) + Math.sin(state.clock.elapsedTime * 2.5) * 0.15
    const targetZ = THREE.MathUtils.lerp(-1, -4, progress)

    // Smoothly lerp towards targets
    group.current.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.08)
    group.current.position.lerp(new THREE.Vector3(targetX, targetY, targetZ), 0.08)
    
    // Very subtle continuous idle rotation
    group.current.rotation.y += 0.003 + (offset * 0.005)
  })

  // Sharp metallic neon green aesthetic
  const material = new THREE.MeshStandardMaterial({ 
    color: '#00ff66', 
    wireframe: wireframe,
    emissive: '#00ff66',
    emissiveIntensity: 0.1,
    roughness: 0.2,
    metalness: 0.9,
    flatShading: true
  })

  return (
    <group ref={group} rotation={[0, -Math.PI / 6, 0]}>
      {/* Body Core */}
      <mesh material={material} position={[0, 0, 0]}>
        <boxGeometry args={[1.5, 1, 2.5]} />
      </mesh>
      
      {/* Bulky Shoulders */}
      <mesh material={material} position={[0, 0.2, 0.8]}>
        <boxGeometry args={[1.8, 1.4, 1.5]} />
      </mesh>

      {/* Angular Head */}
      <mesh material={material} position={[0, 0.5, 1.9]} rotation={[-0.3, 0, 0]}>
        <boxGeometry args={[1.2, 0.9, 1.3]} />
      </mesh>
      
      {/* Snout */}
      <mesh material={material} position={[0, 0.2, 2.6]} rotation={[-0.4, 0, 0]}>
         <boxGeometry args={[0.8, 0.6, 0.8]} />
      </mesh>

      {/* Horns */}
      <mesh material={material} position={[-0.8, 1.2, 2.1]} rotation={[-0.2, 0, 0.5]}>
        <coneGeometry args={[0.15, 1.0, 4]} />
      </mesh>
      <mesh material={material} position={[0.8, 1.2, 2.1]} rotation={[-0.2, 0, -0.5]}>
        <coneGeometry args={[0.15, 1.0, 4]} />
      </mesh>

      {/* Front Legs - Action Stance */}
      <mesh material={material} position={[-0.6, -0.9, 1.2]} rotation={[0.2, 0, 0]}>
        <boxGeometry args={[0.4, 1.2, 0.4]} />
      </mesh>
      <mesh material={material} position={[0.6, -0.9, 1.2]} rotation={[0.2, 0, 0]}>
        <boxGeometry args={[0.4, 1.2, 0.4]} />
      </mesh>

      {/* Back Legs */}
      <mesh material={material} position={[-0.5, -0.8, -0.8]} rotation={[-0.1, 0, 0]}>
        <boxGeometry args={[0.4, 1.2, 0.4]} />
      </mesh>
      <mesh material={material} position={[0.5, -0.8, -0.8]} rotation={[-0.1, 0, 0]}>
        <boxGeometry args={[0.4, 1.2, 0.4]} />
      </mesh>
    </group>
  )
}
