import { useEffect, useMemo, useState, type ReactNode } from "react";
import { CheckCircle2, ChevronRight, Globe2, Menu, Phone, ShieldCheck, Sparkles, Star, X } from "lucide-react";
import { blogPosts } from "./blog/posts";
import { translations, type Language } from "./i18n/translations";
import { useI18n } from "./i18n/I18nContext";

const WHATSAPP_NUMBER = "905421180678";
const PHONE_NUMBER = "+905421180678";
const EMAIL = "serhair1@gmail.com";

const langLabels: Record<Language, string> = {
  tr: "TR",
  en: "EN",
  de: "DE",
  ru: "RU",
  ar: "AR",
  fr: "FR",
};

const image = (name: string) => `/assets/${name}`;

function sendLeadEvent(action: string, detail: Record<string, unknown> = {}) {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event: action, ...detail });
}

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
  }
}

function getWhatsappLink(lang: Language, source: string) {
  const textByLang: Record<Language, string> = {
    tr: "Merhaba SER HAIR, ücretsiz saç analizi ve fiyat bilgisi almak istiyorum.",
    en: "Hello SER HAIR, I would like a free hair analysis and price information.",
    de: "Hallo SER HAIR, ich möchte eine kostenlose Haaranalyse und Preisinformationen erhalten.",
    ru: "Здравствуйте SER HAIR, я хотел(а) бы получить бесплатный анализ волос и информацию о цене.",
    ar: "مرحباً SER HAIR، أود الحصول على تحليل مجاني للشعر ومعلومات عن الأسعار.",
    fr: "Bonjour SER HAIR, je souhaite obtenir une analyse capillaire gratuite et des informations sur les prix.",
  };
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`${textByLang[lang]} (${source})`)}`;
}

function SectionLabel({ children }: { children: ReactNode }) {
  return <div className="section-label"><span />{children}</div>;
}

function CtaButton({ children, source, variant = "gold" }: { children: ReactNode; source: string; variant?: "gold" | "glass" }) {
  const { lang } = useI18n();
  return (
    <a
      className={variant === "gold" ? "btn-gold" : "btn-glass"}
      href={getWhatsappLink(lang, source)}
      target="_blank"
      rel="noreferrer"
      onClick={() => sendLeadEvent("whatsapp_click", { source, language: lang })}
    >
      {children}<ChevronRight size={18} />
    </a>
  );
}

function Navigation() {
  const { lang, t, setLang } = useI18n();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navItems = [
    ["hero", t.nav.home],
    ["services", t.nav.services],
    ["results", t.gallery.label],
    ["faq", t.nav.faq],
    ["contact", t.nav.contact],
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className={`nav ${scrolled ? "nav-scrolled" : ""}`}>
      <button className="brand" onClick={() => go("hero")} aria-label="SER HAIR home">
        <img src={image("logo-main.png")} alt="SER HAIR Center" loading="eager" />
      </button>
      <nav className="nav-links" aria-label="Main navigation">
        {navItems.map(([id, label]) => <button key={id} onClick={() => go(id)}>{label}</button>)}
      </nav>
      <div className="nav-actions">
        <div className="lang-switch" aria-label={t.lang.select}>
          <Globe2 size={16} />
          {(Object.keys(translations) as Language[]).map((code) => (
            <button key={code} className={code === lang ? "active" : ""} onClick={() => setLang(code)}>{langLabels[code]}</button>
          ))}
        </div>
        <CtaButton source="nav">{t.nav.book}</CtaButton>
        <button className="mobile-toggle" onClick={() => setOpen(true)} aria-label="Open menu"><Menu /></button>
      </div>
      {open && (
        <div className="mobile-menu">
          <button className="mobile-close" onClick={() => setOpen(false)} aria-label="Close menu"><X /></button>
          <img src={image("logo-main.png")} alt="SER HAIR Center" />
          {navItems.map(([id, label]) => <button key={id} onClick={() => go(id)}>{label}</button>)}
          <div className="mobile-lang">{(Object.keys(translations) as Language[]).map((code) => <button key={code} onClick={() => setLang(code)}>{langLabels[code]}</button>)}</div>
          <CtaButton source="mobile_menu">{t.hero.cta1}</CtaButton>
        </div>
      )}
    </header>
  );
}

function Hero() {
  const { t } = useI18n();
  return (
    <section id="hero" className="hero">
      <div className="hero-bg"><img src={image("hasta-dhi.jpg")} alt="SER HAIR premium hair transplant result" loading="eager" /></div>
      <div className="hero-overlay" />
      <div className="hero-content">
        <SectionLabel>{t.hero.label}</SectionLabel>
        <h1>{t.hero.title1.split("\n")[0]}<br /><span>{t.hero.title1.split("\n")[1] || "Premium"}</span>{t.hero.title2}</h1>
        <p>{t.hero.desc}</p>
        <div className="hero-cta">
          <CtaButton source="hero_primary">{t.hero.cta1}</CtaButton>
          <button className="btn-glass" onClick={() => document.getElementById("process")?.scrollIntoView({ behavior: "smooth" })}>{t.hero.cta2}<ChevronRight size={18} /></button>
        </div>
        <div className="trust-strip">
          <div><strong>15+</strong><span>{t.why.stats.years}</span></div>
          <div><strong>10K+</strong><span>{t.why.stats.patients}</span></div>
          <div><strong>{t.hero.stat1}</strong><span>{t.hero.statLabel}</span></div>
        </div>
      </div>
    </section>
  );
}

function Services() {
  const { t } = useI18n();
  const imgs = ["hasta-dhi.jpg", "hasta-sapphire.jpg", "hasta-prp.jpg", "hasta-sakal.jpg", "hasta-kas.jpg", "hasta-longhair.jpg", "hasta-mezo.jpg", "hasta-exozom.jpg"];
  return (
    <section id="services" className="section">
      <SectionLabel>{t.services.label}</SectionLabel>
      <div className="section-head"><h2>{t.services.title}</h2><p>{t.govTrust.desc}</p></div>
      <div className="services-grid">
        {t.services.items.map((item, index) => (
          <article className="service-card" key={item.num}>
            <img src={image(imgs[index] || "img-clinic.jpg")} alt={item.title} loading="lazy" />
            <div>
              <span>{item.num}</span>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
              <ul>{item.features.slice(0, 3).map((feature) => <li key={feature}><CheckCircle2 size={16} />{feature}</li>)}</ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Authority() {
  const { t } = useI18n();
  const items = [
    [ShieldCheck, t.govTrust.title, t.govTrust.desc],
    [Sparkles, t.why.title.replace("\n", " "), t.why.desc],
    [Star, "International Patient Experience", "VIP transfer, multilingual support, hotel guidance and post-operation follow-up for global patients."],
  ] as const;
  return (
    <section className="authority section-narrow">
      {items.map(([Icon, title, desc]) => (
        <article key={title}>
          <Icon size={28} />
          <h3>{title}</h3>
          <p>{desc}</p>
        </article>
      ))}
    </section>
  );
}

function Process() {
  const { t } = useI18n();
  return (
    <section id="process" className="section process-section">
      <SectionLabel>{t.process.label}</SectionLabel>
      <div className="section-head"><h2>{t.process.title}</h2><CtaButton source="process">{t.hero.cta1}</CtaButton></div>
      <div className="process-grid">
        {t.process.steps.map((step) => <article key={step.num}><strong>{step.num}</strong><h3>{step.title}</h3><p>{step.desc}</p></article>)}
      </div>
    </section>
  );
}

function Results() {
  const { t } = useI18n();
  const cases = [
    ["img-beforeafter-1.jpg", "3200 grafts", "6-12 months"],
    ["img-beforeafter-2.jpg", "4100 grafts", "12 months"],
    ["img-beforeafter-3.jpg", "DHI plan", "Natural hairline"],
  ];
  return (
    <section id="results" className="section results">
      <SectionLabel>{t.gallery.label}</SectionLabel>
      <div className="section-head"><h2>{t.gallery.title}</h2><p>Realistic expectations, natural density and medical follow-up are the core of every SER HAIR plan.</p></div>
      <div className="result-grid">
        {cases.map(([img, graft, time], i) => (
          <article className="result-card" key={img}>
            <img src={image(img)} alt={`SER HAIR before after case ${i + 1}`} loading="lazy" />
            <div><span>{graft}</span><strong>{time}</strong></div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Testimonials() {
  const { t } = useI18n();
  return (
    <section className="section testimonials">
      <SectionLabel>{t.testimonials.label}</SectionLabel>
      <div className="section-head"><h2>{t.testimonials.title}</h2></div>
      <div className="testimonial-grid">
        {t.testimonials.items.map((item) => <article key={item.name}><div className="stars">★★★★★</div><p>“{item.quote}”</p><strong>{item.name}</strong><span>{item.op}</span></article>)}
      </div>
    </section>
  );
}

function Blog() {
  const { t, lang } = useI18n();
  const posts = useMemo(() => blogPosts.slice(0, 3), []);
  return (
    <section className="section blog">
      <SectionLabel>SEO JOURNAL</SectionLabel>
      <div className="section-head"><h2>{t.blog.title}</h2><p>International SEO landing content for hair transplant, DHI, FUE, PRP, beard and eyebrow treatments.</p></div>
      <div className="blog-grid">
        {posts.map((post) => <article key={post.id}><span>{post.readTime} {t.blog.readTime}</span><h3>{post.title}</h3><p>{post.excerpt}</p><CtaButton source={`blog_${post.id}`}>{t.blog.readMore}</CtaButton></article>)}
      </div>
    </section>
  );
}

function FAQ() {
  const { t } = useI18n();
  return (
    <section id="faq" className="section faq">
      <SectionLabel>{t.faq.label}</SectionLabel>
      <div className="section-head"><h2>{t.faq.title}</h2></div>
      <div className="faq-list">
        {t.faq.items.map((item) => <details key={item.q}><summary>{item.q}</summary><p>{item.a}</p></details>)}
      </div>
    </section>
  );
}

function Contact() {
  const { t, lang } = useI18n();
  return (
    <section id="contact" className="contact">
      <div>
        <SectionLabel>{t.contact.label}</SectionLabel>
        <h2>{t.contact.title}</h2>
        <p>{t.contact.desc}</p>
        <div className="contact-cards">
          <a href={`tel:${PHONE_NUMBER}`} onClick={() => sendLeadEvent("phone_click", { source: "contact", language: lang })}><Phone size={18} />{t.contact.phone}</a>
          <a href={`mailto:${EMAIL}`}>{t.contact.email}</a>
          <span>{t.contact.address}</span>
        </div>
      </div>
      <form className="lead-form" onSubmit={(e) => { e.preventDefault(); sendLeadEvent("form_submit_intent", { source: "contact", language: lang }); window.open(getWhatsappLink(lang, "contact_form"), "_blank"); }}>
        <input required placeholder={t.contact.form.name} />
        <input required placeholder={t.contact.form.phone} />
        <input placeholder={t.contact.form.email} type="email" />
        <textarea placeholder={t.contact.form.message} rows={4} />
        <button className="btn-gold" type="submit">{t.contact.form.submit}<ChevronRight size={18} /></button>
      </form>
    </section>
  );
}

function Footer() {
  const { t } = useI18n();
  return (
    <footer className="footer">
      <img src={image("logo-main.png")} alt="SER HAIR Center" loading="lazy" />
      <p>{t.footer.desc}</p>
      <div className="footer-links"><a href={`tel:${PHONE_NUMBER}`}>{t.contact.phone}</a><a href={`mailto:${EMAIL}`}>{EMAIL}</a><span>{t.footer.fullAddress}</span></div>
      <small>{t.footer.copyright}</small>
    </footer>
  );
}

function StickyCta() {
  const { t, lang } = useI18n();
  return (
    <div className="sticky-cta">
      <a href={`tel:${PHONE_NUMBER}`} onClick={() => sendLeadEvent("phone_click", { source: "sticky", language: lang })}><Phone size={18} />{t.contact.phone}</a>
      <a href={getWhatsappLink(lang, "sticky_mobile")} target="_blank" rel="noreferrer" onClick={() => sendLeadEvent("whatsapp_click", { source: "sticky_mobile", language: lang })}>WhatsApp</a>
    </div>
  );
}

function SeoRuntime() {
  const { lang, t } = useI18n();
  useEffect(() => {
    const title = `${t.hero.label} | SER HAIR Center`;
    const desc = t.hero.desc;
    document.title = title;
    const setMeta = (selector: string, attr: "content" | "href", value: string) => {
      const el = document.querySelector(selector);
      if (el) el.setAttribute(attr, value);
    };
    setMeta('meta[name="description"]', "content", desc);
    setMeta('meta[property="og:title"]', "content", title);
    setMeta('meta[property="og:description"]', "content", desc);
    setMeta('link[rel="canonical"]', "href", `https://serhair.com/${lang}/`);
  }, [lang, t]);
  return null;
}

export default function App() {
  const { dir } = useI18n();
  return (
    <main dir={dir}>
      <SeoRuntime />
      <Navigation />
      <Hero />
      <Services />
      <Authority />
      <Process />
      <Results />
      <Testimonials />
      <Blog />
      <FAQ />
      <Contact />
      <Footer />
      <StickyCta />
    </main>
  );
}
