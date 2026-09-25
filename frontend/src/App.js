import { useEffect, useRef, useState } from "react";
import { BrowserRouter, Routes, Route, Link, NavLink, useLocation } from "react-router-dom";
import "@/App.css";
import {
  Instagram,
  Menu,
  X,
  MapPin,
  Clock,
  ChevronDown,
  ChevronsLeftRight,
  MessageCircle,
} from "lucide-react";

const IG_URL = "https://www.instagram.com/emibi.beaute/";
const WA_URL = "https://wa.me/393315978742";
const WA_LABEL = "+39 331 597 8742";
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
    id: "manicure-pedicure",
    title: "Manicure & Pedicure",
    img: "/images/nail-1.jpg",
    alt: "Manicure glitter con dettagli gioiello realizzata da Emibi Beauté",
    items: [
      { name: "Manicure", desc: "Cura completa delle mani, con finiture precise e curate." },
      { name: "Manicure spa", desc: "Rituale rigenerante con esfoliazione e idratazione profonda." },
      { name: "Semipermanente", desc: "Colore brillante e impeccabile che dura a lungo." },
      { name: "Ricostruzione unghie", desc: "Unghie forti e naturali, su forma e lunghezza desiderate." },
      { name: "Refill", desc: "Mantenimento della ricostruzione, per un risultato sempre perfetto." },
      { name: "Copertura in gel", desc: "Rinforzo dell'unghia naturale con effetto luminoso." },
      { name: "Pedicure", desc: "Cura completa dei piedi, morbidi e ordinati in ogni stagione." },
      { name: "Pedicure SPA Luxury", desc: "Trattamento completo con scrub, maschera e massaggio rilassante." },
      { name: "Nail art", desc: "Decorazioni su misura, dal minimal al più ricercato." },
    ],
  },
  {
    id: "corpo",
    title: "Corpo",
    img: "/images/corpo.jpg",
    alt: "Massaggio rilassante in ambiente spa dai toni caldi",
    items: [
      { name: "Massaggio rilassante", desc: "Scioglie le tensioni e regala un benessere profondo." },
      { name: "Massaggio con coppettazione", desc: "Tecnica antica che drena e riattiva la circolazione." },
    ],
  },
  {
    id: "viso",
    title: "Viso",
    img: "/images/viso.jpg",
    alt: "Trattamento viso professionale in centro estetico",
    items: [
      { name: "Pulizia viso", desc: "Detersione profonda per una pelle luminosa e ossigenata." },
      { name: "Pulizia viso con macchinario", desc: "Pulizia profonda potenziata dalla tecnologia." },
      { name: "Trattamenti viso personalizzati", desc: "Percorsi su misura per le esigenze della tua pelle." },
    ],
  },
  {
    id: "sopracciglia-ciglia",
    title: "Sopracciglia e Ciglia",
    img: "/images/ciglia.jpg",
    alt: "Dettaglio sguardo con ciglia e sopracciglia curate",
    items: [
      { name: "Laminazione ciglia", desc: "Ciglia incurvate e nutrite, per uno sguardo aperto e naturale." },
      { name: "Laminazione sopracciglia", desc: "Sopracciglia ordinate, piene e definite a lungo." },
    ],
  },
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
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mobile-nav-link"
            data-testid="mobile-nav-whatsapp-link"
          >
            <MessageCircle size={17} strokeWidth={1.6} />
            WhatsApp — {WA_LABEL}
          </a>
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
      <p className="story-para" data-testid="story-para-0">
        Da sempre ho avuto ben chiaro ciò che desideravo costruire per il mio
        futuro, ma non avrei mai immaginato che un giorno quel sogno sarebbe
        diventato realtà. Mi chiamo Stella, ho 26 anni e sono cresciuta in una
        famiglia che mi ha trasmesso valori fondamentali come l'indipendenza, la
        determinazione e l'importanza dell'impegno, diventati parte del mio modo
        di essere e di lavorare.
      </p>
      <p className="story-para" data-testid="story-para-1">
        Nel 2021 ho intrapreso il mio percorso professionale nel mondo
        dell'estetica presso New Line Academy di Firenze: un cammino fatto di
        formazione, passione e continua crescita. Da allora non ho mai smesso di
        investire su me stessa, tra corsi avanzati e nuove esperienze, perché
        credo che la professionalità nasca dalla volontà di{" "}
        <em className="story-hl">non smettere mai di imparare, evolversi e perfezionarsi</em>.
      </p>
      <p className="story-para" data-testid="story-para-2">
        Oggi, tutto questo percorso mi ha portata fino a qui:{" "}
        <em className="story-hl">alla nascita di Emibi</em>. Ho scelto questo
        nome unendo una parte del nome di mia figlia, la persona più importante
        della mia vita: in queste poche lettere racchiudo il mio sogno, il
        percorso che mi ha condotta fin qui e la forza per trasformarlo in
        realtà.
      </p>
      <p className="story-para" data-testid="story-para-3">
        Emibi nasce così, dall'incontro tra un sogno coltivato nel tempo e i
        valori in cui credo: passione, cura, bellezza e dedizione. L'ho
        immaginato come un luogo intimo e accogliente, in cui ogni persona possa
        sentirsi ascoltata, valorizzata e accompagnata nella cura di sé. Perché
        Emibi non è soltanto un'attività.
      </p>
      <div className="story-emph" data-testid="story-emph">
        <GoldRule className="story-emph-rule" />
        <p className="story-emph-line">È una storia.</p>
        <p className="story-emph-line">È un sogno diventato realtà.</p>
        <p className="story-emph-line">È il frutto di un percorso.</p>
        <p className="story-emph-line">
          Ed è la testimonianza di una donna e di una mamma che ha scelto di
          credere in se stessa.
        </p>
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

const BeforeAfter = () => {
  const [pos, setPos] = useState(50);
  const ref = useRef(null);
  const dragging = useRef(false);
  const update = (clientX) => {
    const r = ref.current.getBoundingClientRect();
    setPos(Math.min(96, Math.max(4, ((clientX - r.left) / r.width) * 100)));
  };
  const onKey = (e) => {
    if (e.key === "ArrowLeft") setPos((p) => Math.max(4, p - 5));
    if (e.key === "ArrowRight") setPos((p) => Math.min(96, p + 5));
  };
  return (
    <div
      ref={ref}
      className="ba"
      role="slider"
      aria-label="Confronto prima e dopo"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={Math.round(pos)}
      tabIndex={0}
      data-testid="before-after-slider"
      onPointerDown={(e) => {
        dragging.current = true;
        ref.current.setPointerCapture(e.pointerId);
        update(e.clientX);
      }}
      onPointerMove={(e) => dragging.current && update(e.clientX)}
      onPointerUp={() => (dragging.current = false)}
      onPointerCancel={() => (dragging.current = false)}
      onKeyDown={onKey}
    >
      <img src="/images/nail-1.jpg" alt="Dopo — french con glitter" draggable={false} />
      <img
        src="/images/nail-4.jpg"
        alt="Prima — unghie al naturale"
        draggable={false}
        style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
      />
      <span className="ba-label ba-label-before">Prima</span>
      <span className="ba-label ba-label-after">Dopo</span>
      <div className="ba-handle" style={{ left: `${pos}%` }} aria-hidden="true">
        <div className="ba-knob">
          <ChevronsLeftRight size={18} strokeWidth={1.6} />
        </div>
      </div>
    </div>
  );
};

const PrimaDopo = () => (
  <section className="section" data-testid="prima-dopo-section">
    <SectionHead eyebrow="Prima &amp; Dopo" title="La differenza è nei dettagli" />
    <div className="ba-wrap reveal">
      <BeforeAfter />
      <p className="ba-note">Trascina il cursore per vedere la trasformazione.</p>
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

const ServiziAccordion = () => {
  const [openId, setOpenId] = useState("manicure-pedicure");
  return (
    <div className="acc-list">
      {SERVIZI.map((s) => {
        const open = openId === s.id;
        return (
          <article key={s.id} className={`acc-card${open ? " acc-open" : ""}`} data-testid={`accordion-card-${s.id}`}>
            <button
              className="acc-head"
              aria-expanded={open}
              data-testid={`accordion-trigger-${s.id}`}
              onClick={() => setOpenId(open ? null : s.id)}
            >
              <img src={s.img} alt={s.alt} className="acc-thumb" loading="lazy" />
              <span className="acc-head-text">
                <span className="acc-title">{s.title}</span>
                <span className="acc-sub">{s.items.length} trattamenti</span>
              </span>
              <ChevronDown size={22} strokeWidth={1.4} className="acc-chev" />
            </button>
            <div className="acc-panel">
              <div className="acc-panel-inner">
                <ul className="svc-list" data-testid={`accordion-panel-${s.id}`}>
                  {s.items.map((item) => (
                    <li key={item.name}>
                      <span className="svc-name">{item.name}</span>
                      <span className="svc-desc">{item.desc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
};

const ServiziPage = () => {
  useReveal();
  return (
    <main data-testid="servizi-page">
      <section className="section section-tinted page-top" data-testid="servizi-section">
        <SectionHead eyebrow="Servizi" title="I nostri trattamenti" />
        <ServiziAccordion />
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
      <PrimaDopo />
      <section className="section section-tinted" data-testid="galleria-section">
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
          {WA_LABEL}
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
