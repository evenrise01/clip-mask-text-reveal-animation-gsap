export default function Home() {
  return (
    <>
      <nav>
        <div className="col">
          <div className="sub-col">
            <span>Evenrise</span>
          </div>
          <div className="sub-col">
            <span>Home</span>
            <span>Projects</span>
            <span>About</span>
          </div>
        </div>
        <div className="col">
          <span>Contact</span>
        </div>
      </nav>

      <section className="hero">
        <div className="hero-img">
          <img src="/hero.jpg" alt="" />
        </div>

        <div className="header">
          <h1>We craft identities and experiences for the bold.</h1>
        </div>
      </section>

      <section className="about">
        <span>Design and Strategy for the Vision-Driven</span>

        <div className="header">
          <h1>
            We partner with founders, innovators, and change-makers to shape
            brands that resonate. From first lines of code to global launches,
            we bring focus, elegance and intent to every stage.
          </h1>
        </div>
      </section>

      <section className="about-img">
        <img src="/about.jpg" alt="" />
      </section>

      <section className="story">
        <div className="col">
          <h1>
            The Story Behind <br />
            Our Stillness
          </h1>
        </div>
        <div className="col">
          <p>
            Evenrise was born from a simple idea: that creativity, when wielded
            with intention, can quietly reshape the world. In an era of
            overstimulation and fleeting trends, we chose a different path. One
            of clarity, restraint, and long-form vision.
          </p>

          <p>
            We began as a small collective of designers, developers, and
            strategists who shared an obsession with thoughtful execution. No
            shortcuts, no templates. Just the hard, honest work of listening
            deeply, thinking critically, and building beautifully. Over time,
            our work began to attract the kind of clients we had always hoped
            for. Visionary founders, principled organizations, and global teams
            with sharp ideas and quiet confidence.
          </p>

          <p>
            We don’t chase virality. We don’t trade in noise. We build for the
            long haul: timeless identities, seamless digital experiences, and
            strategies that evolve with clarity and purpose. Greyloom exists for
            those who believe that the most enduring ideas don’t demand
            attention. They earn it.
          </p>
        </div>
      </section>

      <section className="philosophy">
        <span>The Thought Beneath</span>

        <div className="header">
          <h1>
            We believe in the power of quiet conviction. In work that speaks softly but lingers long. In design as a tool for clarity, not decoration. We believe that the best ideas don&apos;t demand attention. Our philosophy is simple. Create with intent.
          </h1>
        </div>
      </section>

      <footer>
        <div className="col">
          <div className="sub-col">
            <span>Terms and Conditions</span>
          </div>
          <div className="sub-col">
            <h1>Twitter</h1>
            <h1>Github</h1>
            <h1>LinkedIn</h1>
            <h1>Awwwards</h1>
            <h1>Instagram</h1>
          </div>
        </div>
        <div className="col">
          <span>Copyright Evenrise 2025</span>
        </div>
      </footer>
    </>
  );
}
