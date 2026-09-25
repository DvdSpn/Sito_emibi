import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Link, NavLink, useLocation } from "react-router-dom";
import "@/App.css";
import {
  Instagram,
  Menu,
  X,
  MapPin,
  Clock,
  ChevronDown,
  MessageCircle,
} from "lucide-react";

const IG_URL = "https://www.instagram.com/emibi.beaute/";
const WA_URL = "https://wa.me/393315978742";
const ADDRESS = "Via Pietro Gobetti 5, Camucia — Cortona (AR)";
const MAP_SRC =
  "https://www.google.com/maps?q=Via+Pietro+Gobetti+5,+Camucia,+Cortona+AR,+Italia&output=embed";

const GALLERIA = [
  { src: "/images/nail-1.jpg", caption: "Manicure glitter con dettagli gioiello" },
  { src: "/images/nail-2.jpg", caption: "French manicure lucida, linee pulite" },
  { src: "/images/nail-4.jpg", caption: "Nail art bianco su base naturale" },
  { src: "/images/nail-3.jpg", caption: "Pedicure French, curata nei dettagli" },
];

const SERVIZI = [
  {
    id: "mani-piedi",
    title: "Mani e Piedi",
    img: "/images/nail-1.jpg",
    alt: "Manicure glitter con dettagli gioiello realizzata da Emibi Beauté",
    items: [
      "Manicure",
      "Manicure spa",
      "Semipermanente",
      "Ricostruzione unghie",
      "Refill",
      "Copertura in gel",
      "Pedicure",
      "Pedicure SPA Luxury",
      "Nail art",
    ],
  },
  {
    id: "corpo",
    title: "Corpo",
    img: "/images/corpo.jpg",
    alt: "Massaggio rilassante in ambiente spa dai toni caldi",
    items: ["Massaggio rilassante", "Massaggio con coppettazione"],
  },
  {
    id: "viso",
    title: "Viso",
    img: "/images/viso.jpg",
    alt: "Trattamento viso professionale in centro estetico",
    items: [
      "Pulizia viso",
      "Pulizia viso con macchinario",
      "Trattamenti viso personalizzati",
    ],
  },
  {
    id: "sopracciglia-ciglia",
    title: "Sopracciglia e Ciglia",
    img: "/images/ciglia.jpg",
    alt: "Dettaglio sguardo con ciglia e sopracciglia curate",
    items: ["Laminazione ciglia", "Laminazione sopracciglia"],
  },
];

const STORY_PARAS = [
  "Da sempre ho avuto ben chiaro ciò che desideravo costruire per il mio futuro, ma non avrei mai immaginato che un giorno quel sogno sarebbe diventato realtà.",
  "Mi chiamo Stella, ho 26 anni e sono cresciuta in una famiglia che mi ha trasmesso valori fondamentali come l'indipendenza, la determinazione e l'importanza dell'impegno. Valori che, nel tempo, sono diventati parte integrante del mio modo di essere e di lavorare.",
  "Nel 2021 ho intrapreso il mio percorso professionale nel mondo dell'estetica presso New Line Academy di Firenze. È stato l'inizio di un cammino fatto di formazione, passione e continua ricerca della crescita personale e professionale.",
  "Terminato il percorso di formazione, ho scelto di continuare a investire su me stessa, approfondendo le mie competenze attraverso corsi avanzati e nuove esperienze. Credo infatti che la professionalità nasca dalla volontà di non smettere mai di imparare, evolversi e perfezionarsi, con l'obiettivo di offrire a ogni persona che si affida a me un servizio attento, qualificato e sempre aggiornato.",
  "Oggi, tutto questo percorso mi ha portata fino a qui: alla nascita di Emibi.",
  "Ho scelto questo nome unendo una parte del nome di mia figlia, la persona più importante della mia vita. In queste poche lettere racchiudo quindi qualcosa di profondamente personale: il mio sogno, il percorso che mi ha condotta fin qui e una parte del motivo per cui ho trovato la forza e la determinazione per trasformarlo in realtà.",
  "Emibi nasce così, dall'incontro tra un sogno coltivato nel tempo e i valori in cui credo: passione, cura, bellezza e dedizione.",
  "Ho immaginato questo centro come un luogo intimo e accogliente, in cui ogni persona possa sentirsi ascoltata, valorizzata e accompagnata nella cura di sé. Uno spazio pensato per dedicarsi del tempo, ritrovare il proprio benessere e concedersi un momento in cui sentirsi semplicemente bene.",
  "Perché Emibi non è soltanto un'attività.",
];

const STORY_EMPH = [
  "È una storia.",
  "È un sogno diventato realtà.",
  "È il frutto di un percorso.",
  "Ed è la testimonianza di una donna e di una mamma che ha scelto di credere in se stessa.",
];

const Lotus = ({ className = "" }) => (
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

const Logo = ({ className = "", testId }) => (
  <img
    src="/images/logo.jpg"
    alt="Emibi Beauté — Nail art ed estetica a Camucia, Cortona"
    className={`logo-badge ${className}`}
    data-testid={testId}
  />
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

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const navClass =
  (base) =>
  ({ isActive }) =>
    `${base}${isActive ? ` ${base}-active` : ""}`;

const Header = () => {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  useEffect(() => setOpen(false), [pathname]);
  return (
    <header className="site-header" data-testid="site-header">
      <div className="header-inner">
        <Link to="/" className="header-brand" data-testid="header-logo-link">
          <Logo className="header-logo" testId="header-logo" />
        </Link>
        <nav className="header-nav" aria-label="Navigazione principale">
          <NavLink to="/" end className={navClass("nav-link")} data-testid="nav-link-home">
            Home
          </NavLink>
          <NavLink to="/servizi" className={navClass("nav-link")} data-testid="nav-link-servizi">
            Servizi
          </NavLink>
        </nav>
        <div className="header-actions">
          <a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="nav-cta"
            data-testid="header-whatsapp-cta"
          >
            <MessageCircle size={15} strokeWidth={1.6} />
            WhatsApp
          </a>
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
      </div>
      {open && (
        <nav className="mobile-nav" aria-label="Menu mobile" data-testid="mobile-nav">
          <NavLink to="/" end className={navClass("mobile-nav-link")} data-testid="mobile-nav-link-home">
            Home
          </NavLink>
          <NavLink to="/servizi" className={navClass("mobile-nav-link")} data-testid="mobile-nav-link-servizi">
            Servizi
          </NavLink>
          <a
            href={IG_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mobile-nav-link mobile-nav-cta"
            data-testid="mobile-nav-instagram-link"
          >
            <Instagram size={17} strokeWidth={1.6} />
            @emibi.beaute
          </a>
        </nav>
      )}
    </header>
  );
};

const SectionHead = ({ eyebrow, title }) => (
  <div className="section-head reveal">
    <p className="eyebrow">{eyebrow}</p>
    <h2 className="section-title">{title}</h2>
    <GoldRule />
  </div>
);

const Hero = () => (
  <section className="hero" data-testid="hero-section">
    <div className="hero-content reveal revealed">
      <Logo className="hero-logo-img" testId="hero-logo" />
      <h1 className="sr-only">Emibi Beauté</h1>
      <p className="hero-claim" data-testid="hero-claim">
        Il tuo momento di bellezza.
      </p>
      <GoldRule className="hero-rule" />
      <p className="hero-sub">
        Nail art ed estetica a Camucia — Cortona (AR), in Via Pietro Gobetti 5.
        Cura dei dettagli, eleganza in ogni tocco.
      </p>
      <div className="hero-ctas">
        <a
          href={WA_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary"
          data-testid="hero-whatsapp-cta"
        >
          <MessageCircle size={18} strokeWidth={1.6} />
          Scrivici su WhatsApp
        </a>
        <a
          href={IG_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-outline"
          data-testid="hero-instagram-cta"
        >
          <Instagram size={17} strokeWidth={1.6} />
          @emibi.beaute
        </a>
      </div>
    </div>
    <a href="#storia" className="scroll-hint" aria-label="Scorri alla sezione La nostra storia" data-testid="hero-scroll-hint">
      <ChevronDown size={22} strokeWidth={1.2} />
    </a>
  </section>
);

const Storia = () => (
  <section id="storia" className="section section-tinted" data-testid="storia-section">
    <SectionHead eyebrow="La nostra storia" title="Un sogno diventato realtà" />
    <div className="story reveal">
      {STORY_PARAS.map((p, i) => (
        <p key={i} className="story-para" data-testid={`story-para-${i}`}>
          {p}
        </p>
      ))}
      <div className="story-emph" data-testid="story-emph">
        {STORY_EMPH.map((line, i) => (
          <p key={i} className="story-emph-line">
            {line}
          </p>
        ))}
      </div>
      <div className="story-sign">
        <span className="story-sign-script">Stella</span>
        <span className="story-sign-role">Fondatrice di Emibi Beauté</span>
      </div>
    </div>
  </section>
);

const DoveSiamo = () => (
  <section id="dove-siamo" className="section" data-testid="dove-siamo-section">
    <SectionHead eyebrow="Dove siamo" title="Ti aspettiamo a Camucia" />
    <div className="where-grid">
      <div className="where-info reveal">
        <div className="where-block">
          <MapPin size={22} strokeWidth={1.3} className="where-icon" />
          <div>
            <h3 className="where-label">Indirizzo</h3>
            <p className="where-value" data-testid="where-address">
              Emibi Beauté
              <br />
              {ADDRESS}
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
          href={WA_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary"
          data-testid="where-whatsapp-cta"
        >
          <MessageCircle size={18} strokeWidth={1.6} />
          Scrivici su WhatsApp
        </a>
      </div>
      <div className="where-map reveal" style={{ transitionDelay: "120ms" }}>
        <iframe
          title="Mappa — Emibi Beauté, Via Pietro Gobetti 5, Camucia, Cortona"
          src={MAP_SRC}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          data-testid="where-map-iframe"
        />
      </div>
    </div>
  </section>
);

const Gallery = () => (
  <div className="gallery-wrap">
    <SectionHead eyebrow="Galleria" title="I nostri lavori" />
    <div className="gallery-grid" data-testid="gallery-grid">
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
  </div>
);

const HomePage = () => {
  useReveal();
  return (
    <main data-testid="home-page">
      <Hero />
      <Storia />
      <DoveSiamo />
    </main>
  );
};

const ServiziPage = () => {
  useReveal();
  return (
    <main data-testid="servizi-page">
      <section className="section section-tinted page-top" data-testid="servizi-section">
        <SectionHead eyebrow="Servizi" title="I nostri trattamenti" />
        <div className="svc-grid">
          {SERVIZI.map((s, i) => (
            <article
              key={s.id}
              className="svc-card reveal"
              style={{ transitionDelay: `${i * 90}ms` }}
              data-testid={`service-card-${s.id}`}
            >
              <div className="svc-img">
                <img src={s.img} alt={s.alt} loading="lazy" />
              </div>
              <div className="svc-body">
                <h3 className="svc-title">{s.title}</h3>
                <ul className="svc-list">
                  {s.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
        <p className="services-note reveal" data-testid="services-note">
          Listino prezzi completo disponibile in salone — scrivici per un
          preventivo personalizzato.
        </p>
        <div className="gallery-cta reveal">
          <a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            data-testid="services-whatsapp-cta"
          >
            <MessageCircle size={18} strokeWidth={1.6} />
            Richiedi un preventivo
          </a>
        </div>
      </section>
      <section className="section" data-testid="galleria-section">
        <Gallery />
      </section>
    </main>
  );
};

const Footer = () => (
  <footer className="site-footer" data-testid="site-footer">
    <div className="footer-inner">
      <Logo className="footer-logo" testId="footer-logo" />
      <GoldRule className="footer-rule" />
      <p className="footer-address" data-testid="footer-address">
        {ADDRESS}
      </p>
      <div className="footer-contacts">
        <a
          href={WA_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="footer-contact"
          data-testid="footer-whatsapp-link"
        >
          <MessageCircle size={18} strokeWidth={1.5} />
          WhatsApp
        </a>
        <a
          href={IG_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="footer-contact"
          data-testid="footer-instagram-link"
        >
          <Instagram size={18} strokeWidth={1.5} />
          @emibi.beaute
        </a>
      </div>
      <p className="footer-copy">© 2026 Emibi Beauté — Tutti i diritti riservati</p>
    </div>
  </footer>
);

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/servizi" element={<ServiziPage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
