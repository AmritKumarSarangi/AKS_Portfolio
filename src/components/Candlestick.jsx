import { useRef } from 'react'
import { Float } from '@react-three/drei'

export function Candlestick({ position, type = 'bull', scale = 1, floatSpeed = 1, speedX = 0, speedY = 0, speedZ = 0 }) {
  const color = type === 'bull' ? '#00ff66' : '#ff003c'
  const emissive = type === 'bull' ? '#00ff66' : '#ff003c'
  const emissiveIntensity = type === 'bull' ? 0.8 : 0.4
  
  return (
    <Float speed={floatSpeed} rotationIntensity={0.2} floatIntensity={1} position={position} scale={scale}>
      <group>
        {/* Wick (Volatile price line) */}
        <mesh position={[0, 0, 0]}>
          <cylinderGeometry args={[0.02, 0.02, 3]} />
          <meshBasicMaterial color={color} />
        </mesh>
        {/* Body (Open/Close spread) */}
        <mesh position={[0, type === 'bull' ? 0.3 : -0.3, 0]}>
          <boxGeometry args={[0.4, 1.5, 0.4]} />
          <meshStandardMaterial color={color} emissive={emissive} emissiveIntensity={emissiveIntensity} opacity={0.85} transparent />
        </mesh>
      </group>
    </Float>
  )
}
