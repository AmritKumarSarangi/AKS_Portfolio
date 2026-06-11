import { useEffect, useRef } from 'react'

export function FancyCursor() {
  const cursorDot = useRef(null)
  const cursorRing = useRef(null)
  const trails = useRef([])
  const mouse = useRef({ x: 0, y: 0 })
  const ringPos = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const dot = cursorDot.current
    const ring = cursorRing.current
    if (!dot || !ring) return

    const onMove = (e) => {
      mouse.current = { x: e.clientX, y: e.clientY }
      dot.style.left = e.clientX + 'px'
      dot.style.top = e.clientY + 'px'

      // Spawn a trail particle
      const trail = document.createElement('div')
      trail.style.cssText = `
        position: fixed;
        width: 6px; height: 6px;
        border-radius: 50%;
        background: #00ff66;
        pointer-events: none;
        z-index: 9997;
        left: ${e.clientX - 3}px;
        top: ${e.clientY - 3}px;
        opacity: 0.7;
        transition: opacity 0.5s ease, transform 0.5s ease;
        transform: scale(1);
      `
      document.body.appendChild(trail)
      // Fade out and remove
      requestAnimationFrame(() => {
        trail.style.opacity = '0'
        trail.style.transform = 'scale(0)'
      })
      setTimeout(() => trail.remove(), 500)
    }

    // Smooth lag for the ring
    const animateRing = () => {
      ringPos.current.x += (mouse.current.x - ringPos.current.x) * 0.12
      ringPos.current.y += (mouse.current.y - ringPos.current.y) * 0.12
      ring.style.left = ringPos.current.x + 'px'
      ring.style.top = ringPos.current.y + 'px'
      requestAnimationFrame(animateRing)
    }

    const onMouseDown = () => ring.classList.add('cursor-click')
    const onMouseUp = () => ring.classList.remove('cursor-click')

    window.addEventListener('mousemove', onMove)
    window.addEventListener('mousedown', onMouseDown)
    window.addEventListener('mouseup', onMouseUp)
    animateRing()

    return () => {
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mousedown', onMouseDown)
      window.removeEventListener('mouseup', onMouseUp)
    }
  }, [])

  return (
    <>
      {/* Inner dot — sharp, instant */}
      <div ref={cursorDot} style={{
        position: 'fixed', width: '6px', height: '6px', borderRadius: '50%',
        background: '#00ff66', pointerEvents: 'none', zIndex: 9999,
        transform: 'translate(-50%, -50%)',
        boxShadow: '0 0 8px #00ff66, 0 0 16px #00ff66',
        transition: 'background 0.2s ease'
      }} />

      {/* Outer ring — lags behind */}
      <div ref={cursorRing} style={{
        position: 'fixed', width: '32px', height: '32px', borderRadius: '50%',
        border: '1.5px solid #00ff66', pointerEvents: 'none', zIndex: 9998,
        transform: 'translate(-50%, -50%)',
        boxShadow: '0 0 12px rgba(0,255,102,0.3)',
        transition: 'width 0.2s ease, height 0.2s ease, border-color 0.2s ease'
      }} />

      <style>{`
        * { cursor: none !important; }
        .cursor-click { width: 20px !important; height: 20px !important; border-color: #fff !important; }
        a:hover ~ div, button:hover ~ div { border-color: #fff !important; }
      `}</style>
    </>
  )
}
