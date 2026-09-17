import { useState } from "react";

const business = {
  phone: "+91 86556 69966",
  phoneHref: "tel:+918655669966",
  address:
    "Shop No. 2, Bhukendra, Bus Stop, Pokharan Rd, near Yeoor Hills Road, Upvan, Thane West, Thane, Maharashtra 400606",
  rating: "4.7",
  reviews: "1,325",
};

const classes = [
  { name: "CrossFit", detail: "Strength, conditioning & functional movement", mark: "CF" },
  { name: "Zumba", detail: "Dance-led fitness with high-energy movement", mark: "ZU" },
  { name: "Yoga", detail: "Mobility, balance & mindful movement", mark: "YO" },
  { name: "Gym Floor", detail: "Independent training with a full fitness focus", mark: "GY" },
];

export default function App() {
  const [menu, setMenu] = useState(false);
  const [trial, setTrial] = useState(false);
  const [renew, setRenew] = useState(false);
  const [sent, setSent] = useState(false);
  const [renewed, setRenewed] = useState(false);
  const close = () => setMenu(false);

  return (
    <main>
      <header className="nav-shell">
        <a className="brand" href="#top" onClick={close}>
          <span className="brand-mark">A</span>
          <span><strong>AVENGERS</strong><small>FITNESS CLUB</small></span>
        </a>
        <button className="menu-button" onClick={() => setMenu(!menu)} aria-label="Toggle navigation">☰</button>
        <nav className={menu ? "nav-links open" : "nav-links"}>
          {[["Classes", "classes"], ["Membership", "membership"], ["Trainers", "trainers"], ["About", "about"], ["Contact", "contact"]].map(([x, id]) => (
            <a key={id} href={'#' + id} onClick={close}>{x}</a>
          ))}
          <button className="nav-cta" onClick={() => { close(); setTrial(true); }}>Book a Trial ↗</button>
        </nav>
      </header>

      <section id="top" className="hero section-pad">
        <div className="hero-copy">
          <div className="eyebrow"><span />UPVAN · THANE WEST</div>
          <h1>TRAIN HARD.<br /><em>LIVE STRONG.</em></h1>
          <p>A focused fitness space for strength, conditioning, movement and consistency. Find your training rhythm at Avengers Fitness Club.</p>
          <div className="hero-actions">
            <button className="primary-btn" onClick={() => setTrial(true)}>Book a Trial ↗</button>
            <a className="text-link" href="#classes">Explore Classes ↓</a>
          </div>
          <div className="proof-row">
            <div><b>{business.rating}</b><span>★</span><small>from {business.reviews} reviews</small></div>
            <i /><div><b>4</b><small>training formats</small></div>
            <i /><div><b>THANE</b><small>Upvan West</small></div>
          </div>
        </div>
        <div className="hero-visual">
          <div className="hero-image" />
          <div className="hero-stamp"><b>AV</b><small>EST. FIT</small></div>
          <div className="hero-caption"><span>01</span><b>BUILD YOUR<br />BASE.</b><small>Strength · movement · discipline</small></div>
        </div>
      </section>

      <section id="classes" className="dark-section section-pad">
        <div className="section-head">
          <div><span className="eyebrow">01 / TRAINING</span><h2>FIND YOUR <em>MODE.</em></h2></div>
          <p>Explore the club's core training formats and choose what fits your routine.</p>
        </div>
        <div className="class-grid">
          {classes.map((x, i) => (
            <article className="class-card" key={x.name}>
              <span className="card-number">0{i + 1}</span><span className="class-mark">{x.mark}</span>
              <div><h3>{x.name}</h3><p>{x.detail}</p></div><span className="arrow">↗</span>
            </article>
          ))}
        </div>
        <div className="data-note">Class schedules are being prepared for online publishing. Contact the club for the current timetable.</div>
      </section>

      <section id="membership" className="membership section-pad">
        <div className="membership-panel">
          <div><span className="eyebrow">02 / MEMBERSHIP</span><h2>YOUR ROUTINE.<br /><em>YOUR COMMITMENT.</em></h2><p>Membership plans and pricing will appear here once the club's live plan data is connected. No made-up prices.</p></div>
          <div className="membership-actions">
            <button className="primary-btn" onClick={() => setTrial(true)}>Start with a Trial ↗</button>
            <button className="outline-btn" onClick={() => setRenew(true)}>Renew Membership</button>
            <a href={business.phoneHref}>Call {business.phone}</a>
          </div>
        </div>
      </section>

      <section id="trainers" className="dark-section section-pad">
        <div className="section-head compact"><div><span className="eyebrow">03 / COACHING</span><h2>TRAIN WITH <em>INTENT.</em></h2></div><p>Trainer profiles and live availability will appear here when the club publishes its coaching roster.</p></div>
        <div className="empty-trainers"><div className="pulse-ring">+</div><h3>Trainer booking is ready to connect.</h3><p>No trainer profiles or availability have been supplied yet, so this page does not invent them.</p><button className="outline-light" onClick={() => setTrial(true)}>Ask About Coaching ↗</button></div>
      </section>

      <section id="about" className="about section-pad">
        <div className="about-art"><div className="giant-a">A</div><div className="vertical-label">AVENGERS FITNESS CLUB · UPVAN</div></div>
        <div className="about-copy"><span className="eyebrow">04 / THE CLUB</span><h2>BUILT FOR<br /><em>CONSISTENCY.</em></h2><p>Avengers Fitness Club is a fitness center and CrossFit-focused training space in Upvan, Thane West, offering gym training alongside Zumba and yoga.</p><p>The website is designed around a simple path: discover → explore → book a trial → join → renew.</p><div className="location-line"><span>⌖</span><div><b>UPVAN, THANE WEST</b><small>{business.address}</small></div></div></div>
      </section>

      <section id="contact" className="contact section-pad">
        <div className="contact-main"><span className="eyebrow">05 / CONTACT</span><h2>READY WHEN<br /><em>YOU ARE.</em></h2><p>Questions about classes, membership or current availability? Contact the club directly.</p><div className="contact-actions"><a className="primary-btn" href={business.phoneHref}>Call the Club ↗</a><button className="outline-btn light" onClick={() => setTrial(true)}>Request a Trial</button></div></div>
        <div className="contact-card"><span>FIND US</span><b>UPVAN · THANE WEST</b><p>{business.address}</p><a href="https://www.google.com/maps/search/?api=1&query=Avengers+Fitness+Club+Upvan+Thane" target="_blank" rel="noreferrer">Open in Maps ↗</a><hr /><span>PHONE</span><a className="phone" href={business.phoneHref}>{business.phone}</a></div>
      </section>

      <footer><div className="brand"><span className="brand-mark">A</span><span><strong>AVENGERS</strong><small>FITNESS CLUB</small></span></div><span>UPVAN · THANE WEST</span><span>© 2026 Avengers Fitness Club</span></footer>
      <div className="mobile-trial"><button onClick={() => setTrial(true)}>BOOK A TRIAL <span>↗</span></button></div>

      {trial && <div className="modal-backdrop" role="dialog" aria-modal="true"><div className="modal-card"><button className="modal-close" onClick={() => { setTrial(false); setSent(false); }} aria-label="Close">×</button>{!sent ? <><span className="eyebrow">TRIAL REQUEST</span><h2>START YOUR<br /><em>FIRST SESSION.</em></h2><p>This form validates locally. Connect the club's booking/email endpoint before accepting live requests.</p><form onSubmit={e => { e.preventDefault(); setSent(true); }}><label>Name<input required name="name" autoComplete="name" /></label><label>Phone<input required name="phone" type="tel" pattern="[0-9+() -]{8,}" /></label><label>Interest<select required defaultValue=""><option value="" disabled>Select a format</option><option>Gym</option><option>CrossFit</option><option>Zumba</option><option>Yoga</option></select></label><button className="primary-btn full">Send Trial Request ↗</button></form></> : <div className="success-state"><div className="success-icon">✓</div><h2>REQUEST <em>READY.</em></h2><p>Your details were validated locally. No booking was claimed.</p><a className="primary-btn full" href={business.phoneHref}>Call {business.phone} ↗</a></div>}</div></div>}

      {renew && <div className="modal-backdrop" role="dialog" aria-modal="true"><div className="modal-card"><button className="modal-close" onClick={() => setRenew(false)} aria-label="Close">×</button>{!renewed ? <><span className="eyebrow">MEMBERSHIP RENEWAL</span><h2>KEEP THE<br /><em>STREAK ALIVE.</em></h2><p>Enter member details. Payment and membership APIs can be connected without changing this interface.</p><form onSubmit={e => { e.preventDefault(); setRenewed(true); }}><label>Member name<input required /></label><label>Registered phone<input required type="tel" pattern="[0-9+() -]{8,}" /></label><label>Membership ID<input required /></label><button className="primary-btn full">Continue to Renewal ↗</button></form></> : <div className="success-state"><div className="success-icon">✓</div><h2>DETAILS <em>VALIDATED.</em></h2><p>No payment has been taken. Connect the membership API and payment gateway to complete renewal.</p><button className="outline-btn full" onClick={() => setRenew(false)}>Close</button></div>}</div></div>}
    </main>
  );
}
