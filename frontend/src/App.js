import { useEffect, useState } from "react";
import "@/App.css";
import {
  Instagram,
  Menu,
  X,
  MapPin,
  Clock,
  Hand,
  Footprints,
  Sparkles,
  Brush,
  Gem,
  Armchair,
  Wand2,
  Crown,
  ChevronDown,
} from "lucide-react";

const IG_URL = "https://www.instagram.com/emibi.beaute/";

const NAV = [
  { label: "Chi siamo", href: "#chi-siamo", id: "chi-siamo" },
  { label: "Servizi", href: "#servizi", id: "servizi" },
  { label: "Galleria", href: "#galleria", id: "galleria" },
  { label: "Perché noi", href: "#perche-noi", id: "perche-noi" },
  { label: "Dove siamo", href: "#dove-siamo", id: "dove-siamo" },
];

const SERVIZI = [
  {
    icon: Hand,
    title: "Manicure",
    text: "Cura e bellezza delle mani, con finiture curate nei minimi dettagli.",
  },
  {
    icon: Footprints,
    title: "Pedicure",
    text: "Trattamenti completi per piedi morbidi e impeccabili tutto l'anno.",
  },
  {
    icon: Sparkles,
    title: "Ricostruzione unghie",
    text: "Unghie forti e naturali, personalizzate su forma e lunghezza desiderate.",
  },
  {
    icon: Brush,
    title: "Nail art",
    text: "Decorazioni su misura, dal minimal al più ricercato, per ogni occasione.",
  },
];

const GALLERIA = [
  { src: "/images/nail-1.jpg", caption: "Manicure glitter con dettagli gioiello" },
  { src: "/images/nail-2.jpg", caption: "French manicure lucida, linee pulite" },
  { src: "/images/nail-4.jpg", caption: "Nail art bianco su base naturale" },
  { src: "/images/nail-3.jpg", caption: "Pedicure French, curata nei dettagli" },
];

const PERCHE = [
  {
    icon: Gem,
    title: "Cura artigianale",
    text: "Ogni lavoro è fatto a mano, con attenzione al dettaglio.",
  },
  {
    icon: Armchair,
    title: "Ambiente accogliente",
    text: "Uno spazio pensato per il tuo relax.",
  },
  {
    icon: Wand2,
    title: "Personalizzazione",
    text: "Ogni trattamento su misura per te.",
  },
  {
    icon: Crown,
    title: "Eleganza senza tempo",
    text: "Uno stile curato, mai banale.",
  },
];

export const Lotus = ({ className = "" }) => (
  <svg
    viewBox="0 0 64 40"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.4"
    strokeLinecap="round"
    className={className}
    aria-hidden="true"
  >
    <path d="M32 6c-3.5 5.5-5 11-5 16.5 1.8 1.5 3.5 2.3 5 2.3s3.2-.8 5-2.3C37 17 35.5 11.5 32 6Z" />
    <path d="M18 10c.5 6.5 3.5 12 8.5 15.5M46 10c-.5 6.5-3.5 12-8.5 15.5" />
    <path d="M8 16c3 6 8 10.5 14.5 12.5M56 16c-3 6-8 10.5-14.5 12.5" />
    <path d="M14 33c5 3 11 4.5 18 4.5S45 36 50 33" />
  </svg>
);

export const Wordmark = ({ dark = false }) => (
  <span className={`wordmark ${dark ? "wordmark-dark" : ""}`}>
    <span className="wordmark-script">Emibi</span>
    <span className="wordmark-caps">BEAUTÉ</span>
  </span>
);

const GoldRule = ({ className = "" }) => (
  <div className={`gold-rule ${className}`} aria-hidden="true">
    <span className="gold-rule-line" />
    <Lotus className="gold-rule-lotus" />
    <span className="gold-rule-line" />
  </div>
);

const useReveal = () => {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("revealed");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
};

const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header" data-testid="site-header">
      <div className="header-inner">
        <a href="#home" className="header-brand" data-testid="header-logo-link" onClick={() => setOpen(false)}>
          <Wordmark />
        </a>
        <nav className="header-nav" aria-label="Navigazione principale">
          {NAV.map((n) => (
            <a key={n.id} href={n.href} className="nav-link" data-testid={`nav-link-${n.id}`}>
              {n.label}
            </a>
          ))}
          <a
            href={IG_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="nav-cta"
            data-testid="nav-instagram-cta"
          >
            <Instagram size={15} strokeWidth={1.6} />
            Instagram
          </a>
        </nav>
        <button
          className="hamburger"
          aria-label={open ? "Chiudi menu" : "Apri menu"}
          aria-expanded={open}
          data-testid="hamburger-menu-button"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={26} strokeWidth={1.4} /> : <Menu size={26} strokeWidth={1.4} />}
        </button>
      </div>
      {open && (
        <nav className="mobile-nav" aria-label="Menu mobile" data-testid="mobile-nav">
          {NAV.map((n) => (
            <a
              key={n.id}
              href={n.href}
              className="mobile-nav-link"
              data-testid={`mobile-nav-link-${n.id}`}
              onClick={() => setOpen(false)}
            >
              {n.label}
            </a>
          ))}
          <a
            href={IG_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mobile-nav-link mobile-nav-cta"
            data-testid="mobile-nav-instagram-cta"
            onClick={() => setOpen(false)}
          >
            <Instagram size={17} strokeWidth={1.6} />
            Scrivici su Instagram
          </a>
        </nav>
      )}
    </header>
  );
};

const SectionHead = ({ eyebrow, title }) => (
  <div className="section-head reveal">
    <p className="eyebrow" data-testid={`eyebrow-${eyebrow.toLowerCase().replace(/\s/g, "-")}`}>
      {eyebrow}
    </p>
    <h2 className="section-title">{title}</h2>
    <GoldRule />
  </div>
);

const Hero = () => (
  <section id="home" className="hero" data-testid="hero-section">
    <div className="hero-content reveal revealed">
      <Lotus className="hero-lotus" />
      <h1 className="hero-logo" aria-label="Emibi Beauté">
        <span className="hero-script">Emibi</span>
        <span className="hero-caps">BEAUTÉ</span>
      </h1>
      <p className="hero-claim" data-testid="hero-claim">
        Il tuo momento di bellezza.
      </p>
      <GoldRule className="hero-rule" />
      <p className="hero-sub">
        Manicure, pedicure, ricostruzione e nail art a Firenze, in Via Pietro
        Gobetti 5. Cura dei dettagli, eleganza in ogni tocco.
      </p>
      <a
        href={IG_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-gold"
        data-testid="hero-instagram-cta"
      >
        <Instagram size={18} strokeWidth={1.6} />
        Scrivici su Instagram
      </a>
    </div>
    <a href="#chi-siamo" className="scroll-hint" aria-label="Scorri alla sezione Chi siamo" data-testid="hero-scroll-hint">
      <ChevronDown size={22} strokeWidth={1.2} />
    </a>
  </section>
);

const ChiSiamo = () => (
  <section id="chi-siamo" className="section" data-testid="chi-siamo-section">
    <SectionHead eyebrow="Chi siamo" title="Una passione che diventa cura" />
    <div className="about-grid">
      <div className="about-text reveal">
        <p className="about-lead">
          Emibi Beauté nasce dalla passione di{" "}
          <em>Stela Nako</em> per la cura delle mani e dei piedi, tra precisione
          tecnica e attenzione ai dettagli.
        </p>
        <p className="about-body">
          Ogni trattamento è pensato per farti sentire curata, in un ambiente
          caldo ed elegante, pensato per te.
        </p>
        <div className="about-sign">
          <span className="about-sign-script">Stela Nako</span>
          <span className="about-sign-role">Fondatrice &amp; Nail Artist</span>
        </div>
      </div>
      <div className="about-photo reveal" style={{ transitionDelay: "120ms" }}>
        <img src="/images/nail-4.jpg" alt="Nail art bianco su base naturale realizzata da Emibi Beauté" loading="lazy" />
        <div className="about-photo-frame" aria-hidden="true" />
      </div>
    </div>
  </section>
);

const Servizi = () => (
  <section id="servizi" className="section section-tinted" data-testid="servizi-section">
    <SectionHead eyebrow="Servizi" title="Trattamenti su misura" />
    <div className="services-grid">
      {SERVIZI.map((s, i) => (
        <article
          key={s.title}
          className="service-card reveal"
          style={{ transitionDelay: `${i * 90}ms` }}
          data-testid={`service-card-${i}`}
        >
          <s.icon className="service-icon" size={30} strokeWidth={1.1} />
          <h3 className="service-title">{s.title}</h3>
          <p className="service-text">{s.text}</p>
        </article>
      ))}
    </div>
    <p className="services-note reveal" data-testid="services-note">
      Prezzi su richiesta — scrivici per un preventivo personalizzato.
    </p>
  </section>
);

const Galleria = () => (
  <section id="galleria" className="section" data-testid="galleria-section">
    <SectionHead eyebrow="Galleria" title="I nostri lavori" />
    <div className="gallery-grid">
      {GALLERIA.map((g, i) => (
        <figure
          key={g.src}
          className="gallery-item reveal"
          style={{ transitionDelay: `${i * 80}ms` }}
          data-testid={`gallery-item-${i}`}
        >
          <img src={g.src} alt={g.caption} loading="lazy" />
          <figcaption className="gallery-caption">{g.caption}</figcaption>
        </figure>
      ))}
    </div>
    <div className="gallery-cta reveal">
      <a
        href={IG_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-outline"
        data-testid="gallery-instagram-cta"
      >
        <Instagram size={17} strokeWidth={1.6} />
        Altri lavori su Instagram
      </a>
    </div>
  </section>
);

const PercheNoi = () => (
  <section id="perche-noi" className="section section-tinted" data-testid="perche-noi-section">
    <SectionHead eyebrow="Perché sceglierci" title="L'eleganza è nei dettagli" />
    <div className="why-grid">
      {PERCHE.map((p, i) => (
        <div
          key={p.title}
          className="why-item reveal"
          style={{ transitionDelay: `${i * 90}ms` }}
          data-testid={`why-item-${i}`}
        >
          <div className="why-icon-ring">
            <p.icon size={24} strokeWidth={1.1} />
          </div>
          <h3 className="why-title">{p.title}</h3>
          <p className="why-text">{p.text}</p>
        </div>
      ))}
    </div>
  </section>
);

const DoveSiamo = () => (
  <section id="dove-siamo" className="section" data-testid="dove-siamo-section">
    <SectionHead eyebrow="Dove siamo" title="Ti aspettiamo a Firenze" />
    <div className="where-grid">
      <div className="where-info reveal">
        <div className="where-block">
          <MapPin size={22} strokeWidth={1.3} className="where-icon" />
          <div>
            <h3 className="where-label">Indirizzo</h3>
            <p className="where-value" data-testid="where-address">
              Emibi Beauté
              <br />
              Via Pietro Gobetti 5, Firenze
            </p>
          </div>
        </div>
        <div className="where-block">
          <Clock size={22} strokeWidth={1.3} className="where-icon" />
          <div>
            <h3 className="where-label">Orari</h3>
            <p className="where-value" data-testid="where-hours">
              Martedì – Sabato: 9:30 – 19:00
              <br />
              Domenica e Lunedì: chiuso
            </p>
            <p className="where-note">Orari indicativi, da confermare.</p>
          </div>
        </div>
        <a
          href={IG_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-gold"
          data-testid="where-instagram-cta"
        >
          <Instagram size={18} strokeWidth={1.6} />
          Scrivici su Instagram
        </a>
      </div>
      <div className="where-map reveal" style={{ transitionDelay: "120ms" }}>
        <iframe
          title="Mappa — Emibi Beauté, Via Pietro Gobetti 5, Firenze"
          src="https://www.google.com/maps?q=Via+Pietro+Gobetti+5,+Firenze,+Italia&output=embed"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          data-testid="where-map-iframe"
        />
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="site-footer" data-testid="site-footer">
    <div className="footer-inner">
      <Wordmark dark />
      <GoldRule className="footer-rule" />
      <p className="footer-address" data-testid="footer-address">
        Via Pietro Gobetti 5, Firenze
      </p>
      <a
        href={IG_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="footer-ig"
        data-testid="footer-instagram-link"
      >
        <Instagram size={18} strokeWidth={1.5} />
        @emibi.beaute
      </a>
      <p className="footer-copy">© 2026 Emibi Beauté — Tutti i diritti riservati</p>
    </div>
  </footer>
);

function App() {
  useReveal();
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <ChiSiamo />
        <Servizi />
        <Galleria />
        <PercheNoi />
        <DoveSiamo />
      </main>
      <Footer />
    </div>
  );
}

export default App;
