const ProjectWindow = ({ title, url, description, ticker, perf }) => {
  return (
    <div className="browser-window">
      <div className="window-header">
        <div className="window-dots">
          <span className="ticker-text" style={{ fontSize: '0.7rem', paddingLeft: '5px' }}>{ticker}</span>
        </div>
        <div className="window-title">{title}</div>
        <div style={{ paddingRight: '5px' }}>
          <span className={perf.includes('+') ? 'ticker-text' : 'ticker-red'} style={{ fontSize: '0.7rem' }}>{perf}</span>
        </div>
      </div>
      <div className="window-content">
        <iframe src={url} title={title} className="project-iframe" tabIndex="-1"></iframe>
        <div className="window-overlay-info">
          <p>{description}</p>
          <a href={url} target="_blank" rel="noreferrer" className="warm-btn">EXECUTE_TRADE</a>
        </div>
      </div>
    </div>
  )
}

export const Overlay = () => {
  return (
    <div style={{ width: '100vw', height: '500vh' }}>

      {/* Page 1: Hero */}
      <section style={{ height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', paddingLeft: '10vw' }}>
        <div className="glass-card" style={{ maxWidth: '450px' }}>
          <h1 style={{ fontSize: '3.5rem', margin: 0, color: '#00ff66', textShadow: '0 0 20px rgba(0,255,102,0.4)' }}>Amrit Kumar Sarangi</h1>
          <p style={{ fontSize: '1.2rem', color: '#a1b5a5', margin: '10px 0' }}>> ALGORITHMIC ENGINEER & UI/UX</p>
          <p style={{ color: '#e0e0e0', fontSize: '1rem', lineHeight: '1.6' }}>Leveraging high-performance logic to build web experiences that scale like institutional portfolios.</p>
        </div>
      </section>

      {/* Page 2: About Me */}
      <section style={{ height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-end', paddingRight: '10vw' }}>
        <div className="glass-card" style={{ maxWidth: '900px', display: 'flex', gap: '40px', alignItems: 'center' }}>
          {/* Image on LEFT */}
          <img 
            src="/profile.jpg" 
            alt="Amrit Kumar Sarangi" 
            style={{ width: '220px', height: '220px', borderRadius: '4px', objectFit: 'cover', border: '2px solid #00ff66', flexShrink: 0 }} 
          />
          {/* Text on RIGHT — visually right-aligned to screen edge */}
          <div style={{ textAlign: 'right', flex: 1 }}>
            <h2 style={{ fontSize: '3rem', color: '#fff', margin: '0 0 15px 0', textAlign: 'right' }}>ALPHA_SOURCE</h2>
            <p style={{ color: '#e0e0e0', fontSize: '1rem', lineHeight: '1.7', margin: '0 0 10px 0', textAlign: 'right' }}>
              I'm a second-year B.Tech student at <span style={{ color: '#00ff66', fontWeight: 600 }}>Vellore Institute of Technology</span> engineering intuitive, scalable web platforms.
            </p>
            <p style={{ color: '#e0e0e0', fontSize: '1rem', lineHeight: '1.7', margin: '0 0 10px 0', textAlign: 'right' }}>
              My core strategy is frontend development — reacting to UI/UX friction to ensure maximum user retention and minimal interaction latency.
            </p>
            <p style={{ color: '#e0e0e0', fontSize: '1rem', lineHeight: '1.7', margin: 0, textAlign: 'right' }}>
              Beyond code, my true interest lies in <span style={{ color: '#00ff66', fontWeight: 600 }}>quantitative finance and algorithmic trading</span> — structuring logic to optimize performance metrics in high-stress environments.
            </p>
          </div>
        </div>
      </section>

      {/* Page 3: Projects */}
      <section style={{ height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', paddingLeft: '10vw' }}>
        <div className="glass-card" style={{ maxWidth: '900px', background: 'rgba(3, 8, 4, 0.7)' }}>
          <h2 style={{ fontSize: '3rem', color: '#fff', margin: '0 0 15px 0' }}>PORTFOLIO_ASSETS</h2>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
            <ProjectWindow
              title="CivicConnect"
              url="https://civicconnect-8dcc3.web.app"
              ticker="[CVCX]"
              perf="+4.2%"
              description="[VOLATILE]: Crowdsourced civic issue platform compiled with Firebase."
            />
            <ProjectWindow
              title="HAPAning"
              url="https://hapaing-unicorn.netlify.app/"
              ticker="[HAPA]"
              perf="+18.5%"
              description="[BULLISH]: Gen-Z trading app MVP implementing TWAP execution algorithms."
            />
            <ProjectWindow
              title="Zervyn Fintech"
              url="https://zervyn-amrit-kumar-sarangi.vercel.app/"
              ticker="[ZRVN]"
              perf="+9.1%"
              description="[STABLE]: Premium, aesthetic dashboard mapping visual data fidelity."
            />
            <ProjectWindow
              title="Fake News Detector"
              url="https://fake-news-detector-lemon.vercel.app"
              ticker="[FNDD]"
              perf="-0.5%"
              description="[HEDGE]: AI/ML safety protocol designed to flag deceptive market information."
            />
            <ProjectWindow
              title="HakiTrade"
              url="https://hakitrade-production.up.railway.app/"
              ticker="[HAKI]"
              perf="+12.4%"
              description="[MOMENTUM]: Algorithmic trading and portfolio management application."
            />
            <ProjectWindow
              title="NGO Accounting Manager"
              url="https://ngo-accounting-manager.web.app"
              ticker="[NGOA]"
              perf="+6.8%"
              description="[STEADY]: Accounting and resource allocation dashboard for non-profits."
            />
          </div>
        </div>
      </section>

      {/* Page 4: Community & Beyond */}
      <section style={{ height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', paddingLeft: '10vw' }}>
        <div className="glass-card" style={{ maxWidth: '650px' }}>
          <h2 style={{ fontSize: '3rem', color: '#fff', margin: '0 0 15px 0' }}>MARKET_INFLUENCE</h2>
          <p style={{ color: '#e0e0e0', fontSize: '1.05rem', lineHeight: '1.6', margin: '0 0 15px 0' }}>
            Operating inside college clusters like <strong>DAO Chapter</strong> and <strong>Kalinga Jyoti Club</strong>, executing management, outreach, and design pipelines.
          </p>
          <p style={{ color: '#e0e0e0', fontSize: '1.05rem', lineHeight: '1.6', margin: '0 0 15px 0' }}>
            Creative hedging includes sketching, recently yielding a <strong>gold medal</strong> at the Chintana International Framework.
          </p>
          <p style={{ color: '#00ff66', fontSize: '1.2rem', fontFamily: 'JetBrains Mono', margin: 0 }}>
            > COMPOUNDING KNOWLEDGE AT 10% APY.
          </p>
        </div>
      </section>

      {/* Page 5: Contact */}
      <section style={{ height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <div className="glass-card" style={{ textAlign: 'center', width: '500px' }}>
          <h2 style={{ fontSize: '3rem', color: '#fff', margin: '0 0 20px 0' }}>BULL_RUN</h2>
          <p style={{ color: '#a1b5a5', marginBottom: '5px' }}><strong>[EMAIL]:</strong> amritkumarsarangi@gmail.com</p>
          <p style={{ color: '#a1b5a5', marginBottom: '5px' }}>
            <strong>[LINKEDIN]:</strong>{' '}
            <a href="https://linkedin.com/in/amrit-kumar-sarangi-b5171a321" target="_blank" rel="noreferrer" style={{ color: '#00ff66', textDecoration: 'none' }}>linkedin.com/in/amrit-kumar-sarangi</a>
          </p>
          <p style={{ color: '#a1b5a5', marginBottom: '25px' }}>
            <strong>[INSTAGRAM]:</strong>{' '}
            <a href="https://www.instagram.com/amritsarangi/" target="_blank" rel="noreferrer" style={{ color: '#00ff66', textDecoration: 'none' }}>@amritsarangi</a>
          </p>

          <div style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
            <a href="https://linkedin.com/in/amrit-kumar-sarangi-b5171a321" target="_blank" rel="noreferrer" className="warm-btn">LINKEDIN</a>
            <a href="https://www.instagram.com/amritsarangi/" target="_blank" rel="noreferrer" className="warm-btn">INSTAGRAM</a>
            <a href="https://github.com/AmritKumarSarangi" target="_blank" rel="noreferrer" className="warm-btn">GITHUB</a>
          </div>
        </div>
      </section>

    </div>
  )
}
