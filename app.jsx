/* global React, ReactDOM */
const { useState, useEffect, useRef } = React;

/* ========== Inline icons ========== */
const Icon = {
  Phone: (p) => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
    </svg>
  ),
  Message: (p) => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
    </svg>
  ),
  Facebook: (p) => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" {...p}>
      <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z"/>
    </svg>
  ),
  Instagram: (p) => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <rect x="3" y="3" width="18" height="18" rx="5" ry="5"/>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
    </svg>
  ),
  Check: (p) => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <polyline points="20 6 9 17 4 12"/>
    </svg>
  ),
  Plus: (p) => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <line x1="12" y1="5" x2="12" y2="19"/>
      <line x1="5" y1="12" x2="19" y2="12"/>
    </svg>
  ),
  Pin: (p) => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
      <circle cx="12" cy="10" r="3"/>
    </svg>
  ),
  Clock: (p) => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <circle cx="12" cy="12" r="10"/>
      <polyline points="12 6 12 12 16 14"/>
    </svg>
  ),
  ArrowRight: (p) => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <line x1="5" y1="12" x2="19" y2="12"/>
      <polyline points="12 5 19 12 12 19"/>
    </svg>
  ),
  Shield: (p) => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
    </svg>
  ),
};

/* ========== Brand mark (real logo) ========== */
function BrandMark() {
  return <img src="assets/logo-primary.jpg" alt="We Buy In FL logo" />;
}
function Stars({ n = 5, size = 14 }) {
  return (
    <span className="stars" aria-label={`${n} out of 5 stars`}>
      {Array.from({ length: n }).map((_, i) => (
        <svg key={i} width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
        </svg>
      ))}
    </span>
  );
}

/* ========== Coastal wave divider ========== */
function CoastDivider() {
  return (
    <svg className="coast-divider" viewBox="0 0 1200 36" preserveAspectRatio="none" aria-hidden="true">
      <path d="M0 22 Q 150 6 300 22 T 600 22 T 900 22 T 1200 22" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.7"/>
      <path d="M0 30 Q 150 14 300 30 T 600 30 T 900 30 T 1200 30" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.4"/>
    </svg>
  );
}

/* ========== Header ========== */
function Header() {
  return (
    <header className="header">
      <div className="wrap header-inner">
        <a href="#top" className="brand" aria-label="We Buy In FL — Florida Gulf Coast real estate acquisitions">
          <span className="brand-mark"><BrandMark /></span>
          <span className="brand-name">
            <b>We Buy In FL</b>
            <span>Local · Trusted · Off-Market</span>
          </span>
        </a>
        <nav className="nav">
          <a href="#how">How it works</a>
          <a href="#reviews">Reviews</a>
          <a href="#areas">Areas served</a>
          <a href="#why">Why us</a>
          <a href="#faq">FAQ</a>
        </nav>
        <div className="header-cta">
          <a href="tel:+19414053419" className="phone-pill">
            <span className="dot" aria-hidden="true"></span>
            <Icon.Phone width="14" height="14"/>
            <span className="long">Call or Text</span>
            <span>941-405-3419</span>
          </a>
        </div>
      </div>
    </header>
  );
}

/* ========== Hero ========== */
function Hero() {
  return (
    <section className="hero" id="top">
      <div className="wrap hero-grid">
        <div>
          <span className="eyebrow">Florida Gulf Coast · Off-Market Specialists</span>
          <h1>
            Sell your Florida home <span className="accent">on your terms</span> — as-is, off-market, and without the runaround.
          </h1>
          <p className="hero-sub">
            We help Florida Gulf Coast homeowners sell off-market quickly, as-is, and without repairs, commissions, or pressure. Every conversation starts with a real person — not a script.
          </p>
          <div className="hero-trust">
            <span className="hero-trust-item"><Icon.Check/> No repairs needed</span>
            <span className="hero-trust-item"><Icon.Check/> No commissions or fees</span>
            <span className="hero-trust-item"><Icon.Check/> Close on your timeline</span>
          </div>
          <div className="hero-cta-row">
            <a className="btn btn-gold btn-lg" href="tel:+19414053419">
              <Icon.Phone/> Call or Text 941-405-3419
            </a>
            <a className="btn btn-outline btn-lg" href="#form">
              Get a fair cash offer <Icon.ArrowRight/>
            </a>
          </div>
        </div>
        <PropertyForm />
      </div>
    </section>
  );
}

/* ========== Property form ========== */
function PropertyForm() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    address: "", city: "", name: "", phone: "", type: "Single-family home", timeline: "Within 30 days"
  });
  const upd = (k) => (e) => setForm({ ...form, [k]: e.target.value });
  const submit = async (e) => {
  e.preventDefault();

  const formData = new FormData();

  formData.append("Property Address", form.address);
  formData.append("City", form.city);
  formData.append("Property Type", form.type);
  formData.append("Name", form.name);
  formData.append("Phone", form.phone);
  formData.append("Timeline", form.timeline);

 const response = await fetch("https://formspree.io/f/mzdonjdw", {
  method: "POST",
  body: formData,
  headers: {
    Accept: "application/json",
  },
});

  setSubmitted(true);
};

  if (submitted) {
    return (
      <div className="form-card" id="form">
        <div className="form-success">
          <div className="checkmark"><Icon.Check width="28" height="28"/></div>
          <h3>Thank you, {form.name.split(" ")[0] || "neighbor"}.</h3>
          <p>We received your property details. Expect a call or text from a local team member shortly — usually within an hour during business hours.</p>
          <a className="btn btn-primary btn-lg" href="tel:+19414053419" style={{ marginTop: 22 }}>
            <Icon.Phone/> Or call us now: 941-405-3419
          </a>
          <p style={{ marginTop: 18, fontSize: 13, color: "var(--ink-mute)" }}>
            <button onClick={() => setSubmitted(false)} style={{ background: "none", border: 0, color: "var(--navy-700)", textDecoration: "underline", cursor: "pointer" }}>Submit another property</button>
          </p>
        </div>
      </div>
    );
  }

  return (
    <form className="form-card" id="form" onSubmit={submit}>
      <span className="kicker-tag">Free, no-obligation offer</span>
      <h3 style={{ marginTop: 14 }}>Tell us about your property</h3>
      <p className="form-sub">No pressure, no listing — just an honest conversation about your options.</p>

      <div className="form-row">
        <div className="field">
          <label htmlFor="addr">Property address</label>
          <input id="addr" type="text" placeholder="e.g. 1432 Bayshore Rd" required value={form.address} onChange={upd("address")} />
        </div>
        <div className="form-row form-row-2">
          <div className="field">
            <label htmlFor="city">City</label>
            <input id="city" type="text" placeholder="Sarasota" required value={form.city} onChange={upd("city")} />
          </div>
          <div className="field">
            <label htmlFor="type">Property type</label>
            <select id="type" value={form.type} onChange={upd("type")}>
              <option>Single-family home</option>
              <option>Condo / townhome</option>
              <option>Multi-family</option>
              <option>Vacant land / lot</option>
              <option>Mobile / manufactured</option>
              <option>Other</option>
            </select>
          </div>
        </div>
        <div className="form-row form-row-2">
          <div className="field">
            <label htmlFor="name">Your name</label>
            <input id="name" type="text" placeholder="First and last" required value={form.name} onChange={upd("name")} />
          </div>
          <div className="field">
            <label htmlFor="phone">Phone</label>
            <input id="phone" type="tel" placeholder="(941) 000-0000" required value={form.phone} onChange={upd("phone")} />
          </div>
        </div>
        <div className="field">
          <label htmlFor="when">Ideal timeline</label>
          <select id="when" value={form.timeline} onChange={upd("timeline")}>
            <option>Within 30 days</option>
            <option>1–3 months</option>
            <option>Flexible — best offer wins</option>
            <option>Just exploring</option>
          </select>
        </div>
      </div>
<button type="submit" className="btn btn-primary btn-lg btn-full" style={{ marginTop: 22 }}>
  Get my no-obligation offer <Icon.ArrowRight />
</button>

      <div className="form-divider">or speak with us directly</div>

      <a href="tel:+19414053419" className="btn btn-gold btn-full">
        <Icon.Phone/> Call or Text 941-405-3419
      </a>

      <p className="form-foot">
        <Icon.Shield width="14" height="14"/>
        <span>Your information stays private. We never share or sell your details — this is a one-on-one conversation with the local team.</span>
      </p>
    </form>
  );
}

/* ========== Trust strip ========== */
function TrustStrip() {
  return (
    <div className="trust-strip">
      <div className="wrap trust-strip-inner">
        <span className="trust-pill"><Stars/> <b>4.9</b> on Google · 27 reviews</span>
        <span className="trust-pill"><Icon.Shield width="14" height="14" style={{color: "var(--gold-600)"}}/> <b>Licensed</b> Florida buyers</span>
        <span className="trust-pill"><Icon.Pin width="14" height="14" style={{color: "var(--gold-600)"}}/> <b>Locally owned</b> on the Gulf Coast</span>
        <span className="trust-pill"><Icon.Check style={{color: "var(--gold-600)"}}/> <b>200+</b> homeowners helped</span>
      </div>
    </div>
  );
}

/* ========== Reviews ========== */
function Reviews() {
  const reviews = [
    {
      q: "They actually picked up when I called — no voicemail maze. We closed in 12 days on my late mother's house in Englewood. Fair offer, no games.",
      who: "Linda M.",
      where: "Englewood, FL · Inherited home",
      initial: "L",
      source: "Google",
    },
    {
      q: "I had a rental in Port Charlotte the tenants trashed. Two agents told me to fix it first. These guys bought it as-is and even helped with the trash-out.",
      who: "Marcus T.",
      where: "Port Charlotte, FL · Tired landlord",
      initial: "M",
      source: "Google",
    },
    {
      q: "What I appreciated most was that they didn't try to lowball me at closing. The number we agreed on is the number I got. Honest, local, professional.",
      who: "Diane & Bob R.",
      where: "Venice, FL · Downsizing",
      initial: "D",
      source: "Google",
    },
  ];
  return (
    <section className="section reviews" id="reviews">
      <div className="wrap">
        <div className="reviews-head">
          <div>
            <span className="eyebrow">Reviews · neighbors who sold to us</span>
            <h2 className="h-section" style={{ marginTop: 14 }}>The reason most of our business comes from referrals.</h2>
          </div>
          <div className="google-summary" aria-label="4.9 stars on Google, 27 reviews">
            <span className="g">G</span>
            <div>
              <div style={{ display: "flex", alignItems: "baseline", gap: 8 }}>
                <span className="rating-num">4.9</span>
                <Stars size={14}/>
              </div>
              <small>27 Google reviews</small>
            </div>
          </div>
        </div>
        <div className="reviews-grid">
          {reviews.map((r, i) => (
            <article className="review-card" key={i} itemScope itemType="https://schema.org/Review">
              <Stars size={16}/>
              <blockquote itemProp="reviewBody">“{r.q}”</blockquote>
              <div className="review-meta">
                <div className="review-avatar">{r.initial}</div>
                <div>
                  <div className="who" itemProp="author">{r.who}</div>
                  <div className="where">{r.where}</div>
                </div>
                <span className="source">{r.source}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ========== Marquee bar ========== */
function Marquee() {
  const cities = ["Sarasota", "Venice", "North Port", "Englewood", "Port Charlotte", "Punta Gorda", "Bradenton", "Manatee County", "Charlotte County", "Tampa Bay"];
  const items = [...cities, ...cities]; // duplicate for seamless loop
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        {items.map((c, i) => (
          <span key={i} className="marquee-item">
            <span className="marquee-dot">◆</span>
            {c}
          </span>
        ))}
      </div>
    </div>
  );
}

/* ========== Sections ========== */
function SectionHead({ eyebrow, title, lead, ctaText, ctaHref }) {
  return (
    <div className="section-head">
      <div>
        <span className="eyebrow">{eyebrow}</span>
        <h2 className="h-section" style={{ marginTop: 14 }}>{title}</h2>
      </div>
      <div>
        <p className="lead">{lead}</p>
        {ctaText && <a className="btn btn-ghost" href={ctaHref} style={{ marginTop: 12, paddingLeft: 0 }}>{ctaText} <Icon.ArrowRight/></a>}
      </div>
    </div>
  );
}

function WhatWeBuy() {
  const items = [
    { title: "Inherited homes", desc: "Probate, estate, or out-of-state property. We handle the complexity so the family doesn't have to.", icon: "🏛" },
    { title: "Fixer-uppers", desc: "Outdated, deferred maintenance, or storm-damaged. No repairs, cleaning, or staging required.", icon: "🔧" },
    { title: "Vacant houses", desc: "Sitting empty, costing you taxes and insurance. We close fast and take it off your books.", icon: "🪟" },
    { title: "Distressed properties", desc: "Behind on payments, facing foreclosure, or struggling tenants? Let's talk about real options.", icon: "📉" },
    { title: "Off-market opportunities", desc: "Want a private sale without signs in the yard, showings, or open houses? That's our specialty.", icon: "🤝" },
    { title: "Value-add investments", desc: "Tired landlords, problem rentals, or properties needing serious work. We buy them as-is.", icon: "📊" },
  ];
  // We're not actually rendering emoji per system guidance; render simple shape icons via SVG instead.
  const ShapeIcon = ({ idx }) => {
    const icons = [
      // Inherited / classic home with pediment
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M3 11 L12 4 L21 11"/><path d="M5 11 V20 H19 V11"/><path d="M10 20 V14 H14 V20"/></svg>,
      // Fixer / wrench
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a4 4 0 0 0-5.4 5.4l-6 6a1.4 1.4 0 0 0 2 2l6-6a4 4 0 0 0 5.4-5.4l-2.5 2.5-2.5-2.5z"/></svg>,
      // Vacant / window
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="4" width="16" height="16" rx="1"/><path d="M12 4 V20 M4 12 H20"/></svg>,
      // Distressed / trending down
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 17 13.5 8.5 8.5 13.5 2 7"/><polyline points="16 17 22 17 22 11"/></svg>,
      // Off-market / handshake
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M3 12 L7 8 L12 13 L17 8 L21 12"/><path d="M3 12 L8 17 L12 13"/><path d="M21 12 L16 17 L12 13"/></svg>,
      // Value-add / chart up
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><line x1="4" y1="20" x2="4" y2="10"/><line x1="10" y1="20" x2="10" y2="4"/><line x1="16" y1="20" x2="16" y2="14"/><line x1="22" y1="20" x2="2" y2="20"/></svg>,
    ];
    return icons[idx];
  };
  return (
    <section className="section" id="what">
      <div className="wrap">
        <SectionHead
          eyebrow="What we buy"
          title="If it's a Florida home with a story, we'd like to hear it."
          lead="From quiet probate sales to value-add rentals — we work with situations most listing agents would rather pass on."
        />
        <div className="buy-grid">
          {items.map((it, i) => (
            <div key={i} className="buy-card">
              <div className="buy-card-icon"><ShapeIcon idx={i}/></div>
              <h3 className="h-card">{it.title}</h3>
              <p>{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowItWorks() 
  const steps = [
    {
      n: "01",
      title: "Reach out — call, text, or fill the form",
      desc: "Tell us about the property and your situation. A local team member will pick up — never a national call center. No pushy follow-ups, ever.",
      meta: "Takes about 5 minutes",
    },
    {
      n: "02",
      title: "We do the homework, you get a fair offer",
      desc: "We review comparables, assess the property as-is (no walkthroughs required), and present a transparent, written offer — usually within 24–48 hours.",
      meta: "Offer in 24–48 hours",
    },
    {
      n: "03",
      title: "Close on your timeline at a trusted title company",
      desc: "Pick a closing date that works for you — as soon as 7 days, or weeks out if you need time. We pay closing costs and you walk away with a check.",
      meta: "As soon as 7 days",
    },
  ];
  return (
    <section className="section how" id="how">
      <div className="wrap">
        <SectionHead
          eyebrow="How it works"
          title="Three simple steps — and a local person at every one of them."
          lead="No surprise inspections. No re-trades at the closing table. No “let me check with my partner.” Just a straight path from hello to handed-over."
        />
        <div className="steps">
          {steps.map((s, i) => (
            <div key={i} className="step">
              <div className="step-num">{s.n}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
              <div className="step-meta"><Icon.Clock width="14" height="14"/> {s.meta}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AreasServed() {
  const counties = [
    { county: "Sarasota County", cities: ["Sarasota", "Venice", "North Port", "Osprey", "Nokomis", "Siesta Key"] },
    { county: "Charlotte County", cities: ["Port Charlotte", "Punta Gorda", "Englewood", "Rotonda West"] },
    { county: "Manatee County", cities: ["Bradenton", "Palmetto", "Anna Maria", "Lakewood Ranch", "Parrish"] },
    { county: "Tampa Bay Area", cities: ["Tampa", "St. Petersburg", "Clearwater", "Brandon", "Riverview"] },
  ];
  return (
    <section className="section areas" id="areas">
      <div className="wrap">
        <SectionHead
          eyebrow="Areas we serve"
          title="Born on the Gulf Coast. Working from Bradenton to Bonita."
          lead="We know the difference between a Venice canal home and a Port Charlotte rental block — and we price accordingly."
        />
        <div className="areas-grid">
          <div className="area-counties">
            {counties.map((c) => (
              <div className="county-card" key={c.county}>
                <h4><Icon.Pin width="12" height="12" style={{display: "inline-block", marginRight: 6, verticalAlign: "-2px"}}/>{c.county}</h4>
                <div className="city-list">
                  {c.cities.map((city) => <span key={city}>{city}</span>)}
                </div>
              </div>
            ))}
          </div>
          <CoastalMap />
        </div>
      </div>
    </section>
  );
}

function CoastalMap() {
  // Stylized abstract map of Florida's Gulf Coast with pin clusters
  return (
    <div className="map-card">
      <h4>Service map</h4>
      <div className="map-title">Florida Gulf Coast Coverage</div>
      <svg viewBox="0 0 420 460" style={{ width: "100%", height: "auto", marginTop: 8 }} role="img" aria-label="Stylized map of the Florida Gulf Coast">
        <defs>
          <pattern id="dots" x="0" y="0" width="14" height="14" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1" fill="#E9E2D2"/>
          </pattern>
        </defs>
        {/* Water */}
        <rect width="420" height="460" fill="url(#dots)"/>
        {/* Florida west coast silhouette (stylized) */}
        <path d="M180 20 C 210 30 240 60 245 100 C 250 140 240 165 235 195 C 230 225 215 245 200 270 C 190 295 175 320 155 345 C 140 370 130 395 115 420 C 95 440 80 445 75 440 C 70 430 80 410 95 385 C 115 355 130 325 140 295 C 150 265 158 235 165 205 C 170 175 168 145 172 115 C 175 80 175 50 180 20 Z"
              fill="#FBF9F5" stroke="#D4CCB8" strokeWidth="1.5"/>
        {/* Subtle inland tone */}
        <path d="M200 30 C 240 60 250 110 245 150 C 240 190 230 215 220 250 C 210 280 200 305 185 330 C 170 360 155 385 145 405"
              stroke="#E5E0D3" strokeWidth="1" fill="none" strokeDasharray="3 4"/>

        {/* Pins */}
        {[
          { x: 162, y: 230, label: "Bradenton" },
          { x: 158, y: 256, label: "Sarasota", big: true },
          { x: 150, y: 286, label: "Venice" },
          { x: 142, y: 310, label: "Englewood" },
          { x: 138, y: 330, label: "Port Charlotte" },
          { x: 132, y: 350, label: "Punta Gorda" },
          { x: 184, y: 175, label: "Tampa Bay" },
          { x: 152, y: 300, label: "North Port", offset: -1 },
        ].map((p, i) => (
          <g key={i}>
            <circle cx={p.x} cy={p.y} r={p.big ? 13 : 9} fill="#C2A45C" opacity="0.22"/>
            <circle cx={p.x} cy={p.y} r={p.big ? 6 : 4} fill="#0E2A47"/>
            <circle cx={p.x} cy={p.y} r={p.big ? 2.5 : 1.6} fill="#C2A45C"/>
            <text x={p.x + 12} y={p.y + 4} fontFamily="Plus Jakarta Sans" fontSize="12" fill="#0E2A47" fontWeight={p.big ? 700 : 500}>{p.label}</text>
          </g>
        ))}
        {/* Compass */}
        <g transform="translate(360 50)">
          <circle r="22" fill="#fff" stroke="#E5E0D3"/>
          <path d="M0 -14 L4 0 L0 14 L-4 0 Z" fill="#0E2A47"/>
          <path d="M0 -14 L4 0 L0 4 L-4 0 Z" fill="#C2A45C"/>
          <text x="0" y="-26" fontSize="10" textAnchor="middle" fill="#6B7280">N</text>
        </g>
      </svg>
      <div style={{ marginTop: 12, fontSize: 13, color: "var(--ink-mute)", borderTop: "1px solid var(--line)", paddingTop: 12 }}>
        Don't see your town? <a href="tel:+19414053419" style={{ color: "var(--navy-800)", fontWeight: 600, textDecoration: "underline" }}>Call us</a> — we likely serve it.
      </div>
    </div>
  );
}

function WhyUs() {
  const reasons = [
    { num: "01", title: "We answer the phone", desc: "Real people, local numbers, same-day responses. No bots, no out-of-state call centers passing you around." },
    { num: "02", title: "We pay your closing costs", desc: "No commissions, no listing fees, no surprise deductions. The number you sign is the number you net." },
    { num: "03", title: "We don't re-trade at closing", desc: "The offer we make is the offer you sign. We've walked away from deals before lowering them at the table — and we'll do it again." },
    { num: "04", title: "We're licensed locally", desc: "Florida-based, with established title partners and proof of funds available on request. We close where you live." },
  ];
  return (
    <section className="section why" id="why">
      <div className="wrap">
        <SectionHead
          eyebrow="Why work with us"
          title="A handshake business, in a handshake town."
          lead="We're a small, relationship-first acquisitions team. We'd rather close one deal honestly than chase a hundred dishonestly."
        />
        <div className="why-grid">
          {reasons.map((r, i) => (
            <div className="why-card" key={i}>
              <div className="num">{r.num}</div>
              <h3>{r.title}</h3>
              <p>{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function InvestorNetwork() {
  return (
    <section className="section investor" id="investors">
      <div className="wrap investor-grid">
        <div>
          <span className="eyebrow">Acquisition network</span>
          <h2 className="h-section" style={{ marginTop: 14 }}>Vetted buyers. Real capital. The right exit for your property.</h2>
          <p style={{ marginTop: 20, fontSize: 17, color: "var(--ink-soft)", lineHeight: 1.6 }}>
            We're more than a single buyer. We're plugged into a network of trusted local investors, rehabbers, and long-term holders across the Gulf Coast — so the right exit finds your property quickly.
          </p>
          <ul className="list-checks">
            <li><Icon.Check/> Direct cash buyers — no daisy-chained assignments</li>
            <li><Icon.Check/> Proof of funds and verified deposits, always</li>
            <li><Icon.Check/> Title attorney references provided on request</li>
            <li><Icon.Check/> Investor partners for owner-finance, sub-2, or creative structures</li>
          </ul>
          <div className="investor-stats">
            <div className="stat"><div className="v">7 days</div><div className="l">Fastest close</div></div>
            <div className="stat"><div className="v">$0</div><div className="l">Commissions paid</div></div>
            <div className="stat"><div className="v">100%</div><div className="l">As-is purchase</div></div>
            <div className="stat"><div className="v">Local</div><div className="l">Florida-based team</div></div>
          </div>
        </div>
        <NetworkVisual />
      </div>
    </section>
  );
}

function NetworkVisual() {
  // Hub-and-spoke "network" visual: We Buy In FL at center, partner nodes around
  return (
    <div className="network-visual">
      <svg viewBox="0 0 440 360" style={{ width: "100%", height: "auto" }} role="img" aria-label="Network of acquisition partners around We Buy In FL">
        <defs>
          <radialGradient id="hubGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#C2A45C" stopOpacity="0.25"/>
            <stop offset="100%" stopColor="#C2A45C" stopOpacity="0"/>
          </radialGradient>
        </defs>
        <circle cx="220" cy="180" r="120" fill="url(#hubGlow)"/>
        {/* Spokes */}
        {[
          { x: 70, y: 70, label: "Local rehabbers", sub: "Quick renovate + resell" },
          { x: 370, y: 70, label: "Long-term holders", sub: "Buy-and-hold rentals" },
          { x: 380, y: 280, label: "Creative finance", sub: "Sub-2, seller carry" },
          { x: 60, y: 280, label: "Multi-family buyers", sub: "Duplex, fourplex+" },
        ].map((n, i) => (
          <g key={i}>
            <line x1="220" y1="180" x2={n.x} y2={n.y} stroke="#D4CCB8" strokeWidth="1" strokeDasharray="3 5"/>
            <circle cx={n.x} cy={n.y} r="38" fill="#fff" stroke="#E5E0D3"/>
            <text x={n.x} y={n.y - 4} textAnchor="middle" fontSize="12" fontWeight="700" fill="#0E2A47" fontFamily="Plus Jakarta Sans">{n.label}</text>
            <text x={n.x} y={n.y + 12} textAnchor="middle" fontSize="10" fill="#6B7280" fontFamily="Plus Jakarta Sans">{n.sub}</text>
          </g>
        ))}
        {/* Hub */}
        <circle cx="220" cy="180" r="58" fill="#0E2A47"/>
        <circle cx="220" cy="180" r="58" fill="none" stroke="#C2A45C" strokeWidth="2" opacity="0.7"/>
        <text x="220" y="174" textAnchor="middle" fontSize="11" fill="#C2A45C" fontWeight="700" letterSpacing="2" fontFamily="Plus Jakarta Sans">WE BUY IN FL</text>
        <text x="220" y="192" textAnchor="middle" fontSize="10" fill="rgba(255,255,255,0.7)" fontFamily="Plus Jakarta Sans">Acquisitions Hub</text>
        <line x1="195" y1="183" x2="245" y2="183" stroke="#C2A45C" strokeWidth="1" opacity="0.5"/>
      </svg>
      <div style={{ marginTop: 18, padding: "14px 16px", background: "var(--sand-100)", borderRadius: 8, fontSize: 13, color: "var(--ink-soft)", display: "flex", gap: 10, alignItems: "flex-start" }}>
        <Icon.Shield width="16" height="16" style={{ color: "var(--gold-700)", flexShrink: 0, marginTop: 2 }}/>
        <span>All partners vetted and contracted directly. We never wholesale your information.</span>
      </div>
    </div>
  );
}

/* ========== FAQ ========== */
function FAQ() {
  const items = [
    { q: "How is this different from listing with a real estate agent?", a: "When you list with an agent, you pay 5–6% in commissions, prepare the home for showings, sign a multi-month contract, and wait for a buyer's financing to come through. We buy directly — no commissions, no repairs, no showings, no financing contingencies. You pick the closing date." },
    { q: "Do I need to make repairs or clean before you'll buy?", a: "No. We buy properties exactly as they are — full of belongings, unrenovated, damaged, tenant-occupied, whatever the situation. Take what you want, leave the rest. We handle cleanup." },
    { q: "What if my home is in foreclosure or behind on payments?", a: "Time matters in those situations, so please call as soon as you can. We've helped homeowners stop foreclosure and protect their credit by closing quickly and bringing accounts current at the title company." },
    { q: "How quickly can you close?", a: "As fast as 7 days with cash, or on your preferred timeline — some sellers need 60+ days to find a new place, and that's fine. You set the date." },
    { q: "Is your offer the actual amount I'll receive?", a: "Yes. We cover standard closing costs and there are no agent commissions. The number on the offer is what gets wired or cut as a check at closing, minus any liens or mortgage payoffs (which would happen in any sale)." },
    { q: "Will you ever lower your offer at the closing table?", a: "No. The offer we make is the offer we close on. Re-trading at closing is one of the worst practices in this industry, and we don't do it. If something changes materially, we'll talk about it long before signing." },
    { q: "Do you buy properties outside the Gulf Coast?", a: "Our core area runs from Bradenton down through Punta Gorda, plus Tampa Bay. If your property is elsewhere in Florida, call anyway — we may still buy it directly or refer you to a trusted local buyer in our network." },
    { q: "What if I'm not sure I want to sell yet?", a: "That's fine. Most of our calls are exploratory. We'll walk through your options — including ones that don't involve us — and you decide what makes sense for your family. No pressure, no follow-up spam." },
  ];
  const [open, setOpen] = useState(0);
  return (
    <section className="section" id="faq">
      <div className="wrap">
        <SectionHead
          eyebrow="Frequently asked"
          title="Honest answers to the questions homeowners actually ask."
          lead="If you have a question that isn't here, just call or text — we're happy to walk you through it."
        />
        <div className="faq-list">
          {items.map((it, i) => (
            <div className={`faq-item ${open === i ? "open" : ""}`} key={i}>
              <button className="faq-q" onClick={() => setOpen(open === i ? -1 : i)} aria-expanded={open === i}>
                <span>{it.q}</span>
                <span className="faq-icon"><Icon.Plus/></span>
              </button>
              <div className="faq-a">
                <div className="faq-a-inner">{it.a}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ========== Contact ========== */
function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", best: "Anytime", note: "" });
  const upd = (k) => (e) => setForm({ ...form, [k]: e.target.value });
  return (
    <section className="section contact" id="contact">
      <div className="wrap contact-grid">
        <div className="contact-info">
          <span className="eyebrow" style={{ color: "var(--gold-400)" }}>Get in touch</span>
          <h2 className="h-section" style={{ color: "#fff", marginTop: 14 }}>Talk to a local team member.</h2>
          <a href="tel:+19414053419" className="phone-big">941-405-3419</a>
          <div className="phone-hours">Available 7 days a week · 7am–9pm ET</div>

          <div className="contact-row">
            <a className="contact-pill" href="tel:+19414053419"><Icon.Phone/> Call now</a>
            <a className="contact-pill" href="sms:+19414053419"><Icon.Message/> Send a text</a>
          </div>

          <ul className="contact-list">
            <li><Icon.Pin width="16" height="16"/><span>Serving the Florida Gulf Coast — Sarasota, Manatee, Charlotte, and Tampa Bay counties.</span></li>
            <li><Icon.Clock width="16" height="16"/><span>Most calls and texts answered within 30 minutes.</span></li>
            <li><Icon.Shield width="16" height="16"/><span>Phone and text only. We don't use email or share your number — ever.</span></li>
          </ul>

          <div className="social-row">
            <div className="social-row-label">Follow us locally</div>
            <div className="social-icons">
              <a href="https://www.facebook.com/profile.php?id=100085568126447" target="_blank" rel="noopener" aria-label="We Buy In FL on Facebook" className="social-icon">
                <Icon.Facebook/>
              </a>
              <a href="https://www.instagram.com/webuyinfl/" target="_blank" rel="noopener" aria-label="We Buy In FL on Instagram" className="social-icon">
                <Icon.Instagram/>
              </a>
            </div>
          </div>
        </div>

        <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="form-card" style={{ alignSelf: "start" }}>
          {sent ? (
            <div className="form-success">
              <div className="checkmark"><Icon.Check width="28" height="28"/></div>
              <h3>We'll be in touch.</h3>
              <p>Thanks {form.name.split(" ")[0] || "for reaching out"}. A local team member will reach you at {form.phone || "your number"} during the window you mentioned.</p>
              <a href="tel:+19414053419" className="btn btn-gold btn-lg" style={{ marginTop: 20 }}>
                <Icon.Phone/> Or call now: 941-405-3419
              </a>
            </div>
          ) : (
            <>
              <span className="kicker-tag">Request a callback</span>
              <h3 style={{ marginTop: 14 }}>Prefer we reach out?</h3>
              <p className="form-sub">Leave your number and the best time to talk. No email needed.</p>
              <div className="form-row">
                <div className="field">
                  <label>Your name</label>
                  <input type="text" placeholder="First and last" required value={form.name} onChange={upd("name")}/>
                </div>
                <div className="form-row form-row-2">
                  <div className="field">
                    <label>Phone</label>
                    <input type="tel" placeholder="(941) 000-0000" required value={form.phone} onChange={upd("phone")}/>
                  </div>
                  <div className="field">
                    <label>Best time to reach you</label>
                    <select value={form.best} onChange={upd("best")}>
                      <option>Anytime</option>
                      <option>Morning (8am–12pm)</option>
                      <option>Afternoon (12pm–5pm)</option>
                      <option>Evening (5pm–9pm)</option>
                    </select>
                  </div>
                </div>
                <div className="field">
                  <label>Anything we should know? (optional)</label>
                  <textarea rows="3" placeholder="Property address, situation, timeline…" value={form.note} onChange={upd("note")}/>
                </div>
              </div>
              <button type="submit" className="btn btn-primary btn-lg btn-full" style={{ marginTop: 18 }}>
                Request my callback <Icon.ArrowRight/>
              </button>
              <p className="form-foot">
                <Icon.Shield width="14" height="14"/>
                <span>Phone or text only. We will never share your information.</span>
              </p>
            </>
          )}
        </form>
      </div>
    </section>
  );
}

/* ========== Footer ========== */
function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer-top">
          <div className="footer-col">
            <a href="#top" className="brand">
              <span className="brand-mark"><BrandMark/></span>
              <span className="brand-name">
                <b>We Buy In FL</b>
                <span>Local · Trusted · Off-Market</span>
              </span>
            </a>
            <p className="footer-blurb">
              A Florida Gulf Coast real estate acquisitions team. We buy off-market properties directly from homeowners — quickly, as-is, and with respect.
            </p>
          </div>
          <div className="footer-col">
            <h5>Explore</h5>
            <ul>
              <li><a href="#what">What we buy</a></li>
              <li><a href="#how">How it works</a></li>
              <li><a href="#reviews">Reviews</a></li>
              <li><a href="#areas">Areas we serve</a></li>
              <li><a href="#faq">FAQ</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h5>Areas served</h5>
            <ul>
              <li><a href="#areas">Sarasota County</a></li>
              <li><a href="#areas">Charlotte County</a></li>
              <li><a href="#areas">Manatee County</a></li>
              <li><a href="#areas">Tampa Bay</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h5>Get in touch</h5>
            <ul>
              <li><a href="tel:+19414053419" style={{ fontWeight: 700, color: "var(--navy-800)" }}>Call · 941-405-3419</a></li>
              <li><a href="sms:+19414053419">Text · 941-405-3419</a></li>
              <li><a href="#contact">Request callback</a></li>
            </ul>
            <div className="footer-social">
              <a href="https://www.facebook.com/profile.php?id=100085568126447" target="_blank" rel="noopener" aria-label="Facebook" className="footer-social-icon">
                <Icon.Facebook/>
              </a>
              <a href="https://www.instagram.com/webuyinfl/" target="_blank" rel="noopener" aria-label="Instagram" className="footer-social-icon">
                <Icon.Instagram/>
              </a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} We Buy In FL. All rights reserved.</span>
          <span>Webuyinfl.com · Florida Gulf Coast real estate acquisitions</span>
        </div>
      </div>
    </footer>
  );
}

/* ========== App ========== */
function App() {
  // Smooth scroll for in-page anchors
  useEffect(() => {
    const handler = (e) => {
      const a = e.target.closest('a[href^="#"]');
      if (!a) return;
      const id = a.getAttribute("href").slice(1);
      if (!id || id === "top") return;
      const target = document.getElementById(id);
      if (!target) return;
      e.preventDefault();
      const headerOffset = 76;
      const top = target.getBoundingClientRect().top + window.scrollY - headerOffset;
      window.scrollTo({ top, behavior: "smooth" });
    };
    document.addEventListener("click", handler);
    return () => document.removeEventListener("click", handler);
  }, []);

  return (
    <div data-screen-label="01 Home">
      <Header />
      <Hero />
      <TrustStrip />
      <Marquee />
      <WhatWeBuy />
      <HowItWorks />
      <Reviews />
      <AreasServed />
      <WhyUs />
      <InvestorNetwork />
      <FAQ />
      <Contact />
      <Footer />
      <a className="btn btn-gold float-cta" href="tel:+19414053419">
        <Icon.Phone/> Call 941-405-3419
      </a>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
