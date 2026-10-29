function Hero() {
  return (
    <section className="hero section-inner" id="home" aria-labelledby="hero-title">
      <div className="hero-copy">
        <p className="eyebrow hero-eyebrow">
          <span className="eyebrow-line" aria-hidden="true" />
          AI Digital Marketing Executive
        </p>
        <h1 id="hero-title">
          I Turn Ideas Into <span>Digital Growth.</span>
        </h1>
        <p className="hero-description">
          I combine digital marketing, creative design, website development,
          and AI-powered tools to help brands build their digital presence.
        </p>
        <div className="hero-actions">
          <a className="button button-gold" href="#projects">
            Explore my work <span aria-hidden="true">↘</span>
          </a>
          <a className="button button-quiet" href="#contact">
            Let’s work together <span aria-hidden="true">↗</span>
          </a>
        </div>
        <p className="hero-footnote">
          Digital marketing <span aria-hidden="true">·</span> creative design
          <span aria-hidden="true">·</span> web development
        </p>
      </div>

      <div className="portrait-frame">
        <div className="portrait-topline">
          <span>PROFILE / 01</span>
          <span>PERSONAL BRAND</span>
        </div>
        <div className="portrait-art">
          <img
            className="portrait-image"
            src="/aayush-profile.jpg"
            alt="Aayush Kumar - Digital Marketing Professional"
          />
        </div>
        <div className="portrait-caption">
          <div>
            <span className="caption-label">YOUR PORTRAIT</span>
            <strong>Aayush Kumar</strong>
          </div>
          <span className="portrait-arrow" aria-hidden="true">↗</span>
        </div>
      </div>

      <a className="scroll-cue" href="#about">
        <span className="scroll-line" aria-hidden="true" />
        Scroll to explore
      </a>
      <span className="hero-index" aria-hidden="true">01 — 08</span>
    </section>
  )
}

export default Hero
