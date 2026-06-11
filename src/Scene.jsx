import { ScrollControls, Scroll, Text } from '@react-three/drei'
import { Overlay } from './components/Overlay'
import { Candlestick } from './components/Candlestick'
import { GeometricBull } from './components/GeometricBull'
import { GeometricBear } from './components/GeometricBear'

// Section-aware floating ticker
// Each ticker is placed at a specific Y depth matching its section page
function MarketTicker({ position, text, color = "#00ff66", size = 1.0 }) {
  return (
    <Text
      position={position}
      color={color}
      fontSize={size}
      anchorX="center"
      anchorY="middle"
      outlineWidth={0.02}
      outlineColor="#000"
      fillOpacity={0.7}
    >
      {text}
    </Text>
  )
}

export function Scene() {
  return (
    <>
      <color attach="background" args={['#020502']} />

      {/* Dramatic split lighting: green from left, red from right */}
      <ambientLight intensity={0.3} />
      <directionalLight position={[-10, 10, 5]} intensity={2.5} color="#00ff66" />
      <directionalLight position={[10, 5, 5]} intensity={1.5} color="#ff003c" />
      <directionalLight position={[0, -5, 10]} intensity={0.8} color="#ffffff" />

      <fog attach="fog" args={['#020502', 8, 28]} />

      <ScrollControls pages={5} damping={0.25}>

        {/* Bull & Bear persist across scroll — they live outside <Scroll>
            to stay viewport-pinned while being scroll-aware via useScroll() */}
        <GeometricBull />
        <GeometricBear />

        <Scroll>
          {/* ─── PAGE 1: HERO — Bull charges in, market is hot ─── */}
          <Candlestick position={[-4, -1, -6]} type="bull" scale={1.2} floatSpeed={1.5} />
          <Candlestick position={[5,  0, -9]} type="bull" scale={0.8} floatSpeed={0.8} />

          {/* Section ticker: Who is Amrit? */}
          <MarketTicker position={[-6, 1.5, -12]} text="$AMRT  LIVE" color="#00ff66" size={0.9} />

          {/* ─── PAGE 2: ABOUT ME — Skills surge ─── */}
          <Candlestick position={[-3, -9, -7]}  type="bull" scale={2.0} floatSpeed={1.0} />
          <Candlestick position={[5,  -11, -5]} type="bear" scale={1.2} floatSpeed={1.8} />

          {/* Section ticker: Skills data */}
          <MarketTicker position={[7,  -8, -14]} text="$SKILLS  +8.5%" color="#00ff66" size={0.9} />
          <MarketTicker position={[-7, -10, -16]} text="$REACT   +12.1%" color="#00ff66" size={0.8} />

          {/* ─── PAGE 3: PROJECTS — Mixed market, bear lurks ─── */}
          <Candlestick position={[-5, -18, -8]} type="bear" scale={2.5} floatSpeed={0.7} />
          <Candlestick position={[4,  -20, -6]} type="bull" scale={1.5} floatSpeed={1.4} />
          <Candlestick position={[-2, -15, -9]} type="bull" scale={1.0} floatSpeed={2.0} />

          {/* Section tickers: project performance */}
          <MarketTicker position={[8,  -16, -14]} text="$CVCX  +4.2%"  color="#00ff66" size={0.8} />
          <MarketTicker position={[-8, -19, -18]} text="$HAPA  +18.5%" color="#00ff66" size={0.8} />
          <MarketTicker position={[6,  -22, -16]} text="$ZRVN  +9.1%"  color="#00ff66" size={0.8} />
          <MarketTicker position={[-5, -24, -14]} text="$FNDD  -0.5%"  color="#ff003c" size={0.8} />
          <MarketTicker position={[7,  -26, -15]} text="$HAKI  +12.4%" color="#00ff66" size={0.8} />
          <MarketTicker position={[-7, -27, -17]} text="$NGOA  +6.8%"  color="#00ff66" size={0.8} />

          {/* ─── PAGE 4: COMMUNITY — Bear lurks, bull steady ─── */}
          <Candlestick position={[-4, -28, -7]} type="bear" scale={3.0} floatSpeed={0.6} />
          <Candlestick position={[5,  -31, -9]} type="bull" scale={1.8} floatSpeed={1.2} />

          <MarketTicker position={[8,  -27, -15]} text="$COLLAB +15%"  color="#00ff66" size={0.9} />
          <MarketTicker position={[-8, -30, -18]} text="$CLUBS  +21%"  color="#00ff66" size={0.8} />

          {/* ─── PAGE 5: CONTACT — BULL RUN! Bear retreats ─── */}
          <Candlestick position={[-3, -38, -7]} type="bull" scale={2.2} floatSpeed={2.0} />
          <Candlestick position={[4,  -36, -5]} type="bull" scale={1.6} floatSpeed={1.5} />
          <Candlestick position={[-5, -40, -9]} type="bull" scale={1.0} floatSpeed={1.8} />

          <MarketTicker position={[0,  -34, -12]} text="🚀 BULL RUN INITIATED" color="#00ff66" size={1.2} />
          <MarketTicker position={[-7, -38, -16]} text="$AMRT  ∞ POTENTIAL" color="#ffffff" size={0.9} />
          <MarketTicker position={[7,  -41, -18]} text="$BEAR  RETREATING..." color="#ff003c" size={0.8} />
        </Scroll>

        {/* HTML Overlay */}
        <Scroll html>
          <Overlay />
        </Scroll>

      </ScrollControls>
    </>
  )
}
