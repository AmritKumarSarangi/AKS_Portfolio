import { Canvas } from '@react-three/fiber'
import { Scene } from './Scene'
import { Suspense, useState, useEffect } from 'react'
import { CustomLoader } from './components/CustomLoader'
import { FancyCursor } from './components/FancyCursor'

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000)
    return () => clearTimeout(timer)
  }, [])

  if (loading) return <><FancyCursor /><CustomLoader forcedProgress={true} /></>

  return (
    <div style={{ width: '100vw', height: '100vh', background: '#020502' }}>
      <FancyCursor />
      <Suspense fallback={null}>
        <Canvas shadows camera={{ position: [0, 0, 5], fov: 50 }}>
          <Scene />
        </Canvas>
      </Suspense>
    </div>
  )
}

export default App
