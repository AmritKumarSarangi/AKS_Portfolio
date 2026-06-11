import { useState, useEffect } from 'react'
import { useProgress } from '@react-three/drei'

export const CustomLoader = ({ forcedProgress = false }) => {
  const { progress } = useProgress()
  const [simulatedProgress, setSimulatedProgress] = useState(0)

  useEffect(() => {
    if (forcedProgress) {
      const interval = setInterval(() => {
        setSimulatedProgress(p => {
          if (p >= 100) {
            clearInterval(interval)
            return 100
          }
          // Random jumps for algorithmic terminal realism
          return p + Math.random() * 15
        })
      }, 300)
      return () => clearInterval(interval)
    }
  }, [forcedProgress])

  const displayProgress = forcedProgress ? Math.min(simulatedProgress, 100) : progress

  return (
    <div className="loading-screen" style={{
      position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh',
      background: '#020502', display: 'flex', flexDirection: 'column',
      justifyContent: 'center', alignItems: 'center', zIndex: 9999,
      fontFamily: '"JetBrains Mono", monospace', color: '#00ff66'
    }}>
      <div style={{ fontSize: '2.5rem', marginBottom: '10px', textShadow: '0 0 15px #00ff66', fontWeight: 'bold' }}>
        BOOTING ALGORITHMS
      </div>
      <div style={{ fontSize: '1rem', color: '#a1b5a5', letterSpacing: '2px' }}>
        FETCHING LIVE MARKET DATA...
      </div>
      
      <div className="loader-bar-container" style={{ width: '400px', height: '6px', background: '#112a18', marginTop: '30px', borderRadius: '3px', overflow: 'hidden' }}>
        <div className="loader-bar" style={{ width: `${displayProgress}%`, height: '100%', background: '#00ff66', transition: 'width 0.2s linear', boxShadow: '0 0 15px #00ff66' }}></div>
      </div>
      
      <div className="loader-ticker" style={{ fontSize: '2.5rem', marginTop: '20px', fontWeight: 'bold' }}>
        {displayProgress.toFixed(1)}%
      </div>

      <div style={{ marginTop: '40px', fontSize: '0.9rem', color: '#1a3622', textAlign: 'left', width: '400px' }}>
        > INITIALIZING UI_KERNEL... OK <br/>
        > ESTABLISHING WEBSOCKET... {displayProgress > 30 ? 'OK' : 'WAIT'} <br/>
        > INJECTING ALPHA PARAMS... {displayProgress > 60 ? 'OK' : 'WAIT'} <br/>
        > LAUNCHING MARKET... {displayProgress > 95 ? 'DONE' : 'WAIT'}
      </div>
    </div>
  )
}
