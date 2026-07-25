import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import {
  LANGUAGES,
  type Language,
  ui,
  coffee,
  iced,
  specials,
  teaAndMore,
  sweets,
  food,
  milkNote,
  MAPS_EMBED,
  MAPS_URL,
  type PricedItem,
} from './i18n';
import {
  LatteIllustration,
  TostiIllustration,
  BowlIllustration,
  BunIllustration,
  JuiceIllustration,
  SteamLines,
  SunIllustration,
} from './components/Illustrations';
import './index.css';

/* Kleine eigen icoontjes — zelfde lijnstijl als de illustraties */
const icon = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.7,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
};

const PinIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} {...icon} aria-hidden>
    <path d="M12 21c-3.8-3.9-6.5-7.2-6.5-10.4C5.5 6.9 8.4 4 12 4s6.5 2.9 6.5 6.6c0 3.2-2.7 6.5-6.5 10.4Z" />
    <circle cx="12" cy="10.4" r="2.3" />
  </svg>
);
const ClockIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} {...icon} aria-hidden>
    <circle cx="12" cy="12" r="8.2" />
    <path d="M12 7.8V12l3 2.2" />
  </svg>
);
const ArrowIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} {...icon} aria-hidden>
    <path d="M4.5 12h14.3m0 0-5.4-5.4M18.8 12l-5.4 5.4" />
  </svg>
);

const fadeInUp = {
  initial: { opacity: 0, y: 36 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
};

function PriceList({
  title,
  items,
  lang,
}: {
  title: string;
  items: PricedItem[];
  lang: Language;
}) {
  return (
    <div>
      <h3 className="font-display text-xl text-espresso mb-4">{title}</h3>
      <ul className="space-y-2.5">
        {items.map((item) => (
          <li key={item.name.nl} className="flex items-baseline gap-2 text-sm">
            <span className="text-espresso-soft">
              {item.name[lang]}
              {item.note && (
                <span className="block text-xs text-espresso-mist">{item.note[lang]}</span>
              )}
            </span>
            <span className="flex-1 border-b border-dotted border-espresso/25 translate-y-[-3px]" />
            <span className="font-semibold text-cinnamon tabular-nums shrink-0">{item.price}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [lang, setLang] = useState<Language>('nl');
  const t = ui[lang];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const LanguageSwitcher = () => (
    <div className="flex items-center gap-0.5 rounded-full p-1 bg-espresso/10">
      {LANGUAGES.map((l) => (
        <button
          key={l}
          onClick={() => setLang(l)}
          className={`px-2.5 py-1 rounded-full text-[11px] font-semibold tracking-wide transition-all ${
            lang === l
              ? 'bg-espresso text-crema'
              : 'text-espresso/50 hover:text-espresso'
          }`}
        >
          {l.toUpperCase()}
        </button>
      ))}
    </div>
  );

  const marqueeItems =
    lang === 'nl'
      ? ['Verse koffie', 'Tosti’s', 'Smoothie bowls', 'Verse juices', 'Cinnamon buns', 'Chai & matcha', 'Iced lattes']
      : ['Fresh coffee', 'Grilled cheese', 'Smoothie bowls', 'Fresh juices', 'Cinnamon buns', 'Chai & matcha', 'Iced lattes'];

  const foodIllustrations = [TostiIllustration, BowlIllustration, JuiceIllustration, BunIllustration];

  return (
    <div className="min-h-screen bg-crema text-espresso font-body">
      {/* ── Navigatie ─────────────────────────────────────────── */}
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-crema/90 backdrop-blur-md border-b border-espresso/10'
            : 'bg-transparent'
        }`}
      >
        <nav className="max-w-6xl mx-auto px-5 sm:px-8 h-16 flex items-center justify-between">
          <a href="#top" className="flex items-center gap-2.5 group">
            <LatteIllustration className="w-8 h-8 text-cinnamon transition-transform duration-500 group-hover:rotate-12" />
            <span className="font-display text-lg text-espresso tracking-tight">
              Brunch <span className="text-cinnamon">&amp;</span> Brew
            </span>
          </a>
          <div className="hidden md:flex items-center gap-7">
            {[
              ['#menu', t.navMenu],
              ['#impressie', t.navGallery],
              ['#over-ons', t.navAbout],
              ['#locatie', t.navLocation],
            ].map(([href, label]) => (
              <a
                key={href}
                href={href}
                className="text-sm font-medium text-espresso-soft hover:text-cinnamon transition-colors"
              >
                {label}
              </a>
            ))}
            <LanguageSwitcher />
          </div>
          <div className="md:hidden">
            <LanguageSwitcher />
          </div>
        </nav>
      </header>

      {/* ── Hero ──────────────────────────────────────────────── */}
      <section id="top" className="relative bg-crema overflow-hidden">
        <div className="absolute top-0 right-0 w-[520px] h-[520px] bg-butter/20 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3" />
        <div className="absolute bottom-0 left-0 w-[380px] h-[380px] bg-cinnamon/10 rounded-full blur-3xl -translate-x-1/4 translate-y-1/3" />

        <div className="relative max-w-6xl mx-auto px-5 sm:px-8 pt-32 md:pt-40 pb-20 md:pb-28">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <motion.div
              className="lg:col-span-7"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="inline-flex items-center gap-2.5 text-[11px] font-semibold uppercase tracking-[0.25em] text-cinnamon mb-7">
                <PinIcon className="w-4 h-4" />
                {t.heroKicker}
              </p>

              <h1 className="font-display text-espresso text-[15vw] sm:text-8xl lg:text-[6.5rem] leading-[0.95] tracking-tight mb-6">
                {t.heroTitle1}
                <span className="text-cinnamon"> {t.heroAmp} </span>
                {t.heroTitle2}
              </h1>

              <p className="font-display text-xl md:text-2xl text-matcha-deep mb-5">{t.heroSub}</p>

              <p className="text-espresso-mist text-lg leading-relaxed max-w-md mb-9">
                {t.heroDesc}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-10">
                <a
                  href="#menu"
                  className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-espresso text-crema font-semibold rounded-full hover:bg-cinnamon transition-colors duration-300"
                >
                  {t.ctaMenu}
                  <ArrowIcon className="w-[18px] h-[18px] rotate-90 transition-transform duration-300 group-hover:translate-y-0.5" />
                </a>
                <a
                  href="#locatie"
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 border border-espresso/20 text-espresso font-medium rounded-full hover:border-cinnamon hover:text-cinnamon transition-colors duration-300"
                >
                  <PinIcon className="w-[18px] h-[18px]" />
                  {t.ctaRoute}
                </a>
              </div>

              <span className="inline-flex items-center gap-2.5 text-sm text-espresso-soft">
                <SunIllustration className="w-5 h-5 text-butter" />
                {t.freshDaily}
              </span>
            </motion.div>

            <motion.div
              className="lg:col-span-5"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="relative">
                <SteamLines className="absolute -top-9 left-10 w-14 text-cinnamon-soft z-10" />
                <div className="grid grid-cols-5 gap-4">
                  <div className="col-span-3 aspect-[4/5] rounded-3xl overflow-hidden shadow-xl shadow-espresso/15 rotate-[-2deg]">
                    <img
                      src="/images/latte-art.webp"
                      alt="Latte art in een verse cappuccino"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="col-span-2 self-end aspect-[4/5] rounded-3xl overflow-hidden shadow-xl shadow-espresso/15 rotate-[2.5deg] translate-y-4">
                    <img
                      src="/images/bowl.webp"
                      alt="Smoothie bowl met vers fruit en granola"
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>
                <div className="absolute -bottom-5 left-6 bg-matcha-deep text-crema rounded-2xl px-5 py-3 shadow-xl rotate-[-1.5deg]">
                  <p className="font-display text-sm tracking-wide">Markthal · Unit 35</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Marquee ───────────────────────────────────────────── */}
      <section className="bg-cinnamon py-4 overflow-hidden" aria-hidden>
        <div className="flex w-max animate-marquee">
          {[0, 1].map((copy) => (
            <div key={copy} className="flex shrink-0 items-center">
              {marqueeItems.map((item) => (
                <span key={`${copy}-${item}`} className="flex items-center gap-6 pr-6">
                  <span className="font-display text-lg text-crema whitespace-nowrap">{item}</span>
                  <SunIllustration className="w-4 h-4 text-butter-soft shrink-0" />
                </span>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* ── Menu ──────────────────────────────────────────────── */}
      <section id="menu" className="py-24 md:py-32 px-5 sm:px-8 bg-crema-warm">
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-14">
            <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-cinnamon mb-4">
              {t.menuKicker}
            </p>
            <h2 className="font-display text-4xl md:text-6xl tracking-tight text-espresso mb-4">
              {t.menuTitle}
            </h2>
            <p className="text-espresso-mist max-w-md mx-auto text-sm leading-relaxed">
              {t.menuIntro}
            </p>
          </motion.div>

          {/* Drankenkaart */}
          <motion.div {...fadeInUp} transition={{ ...fadeInUp.transition, delay: 0.1 }}>
            <div className="bg-crema rounded-[2rem] border border-crema-deep shadow-xl shadow-espresso/5 p-8 md:p-12">
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-10">
                <PriceList title={t.coffeeHeading} items={coffee} lang={lang} />
                <div className="space-y-10">
                  <PriceList title={t.icedHeading} items={iced} lang={lang} />
                  <PriceList title={t.sweetsHeading} items={sweets} lang={lang} />
                </div>
                <div className="space-y-10">
                  <PriceList title={t.specialsHeading} items={specials} lang={lang} />
                  <PriceList title={t.teaHeading} items={teaAndMore} lang={lang} />
                </div>
              </div>
              <p className="mt-10 inline-block px-4 py-2 bg-butter/20 border border-butter/50 rounded-full text-xs font-semibold text-espresso-soft">
                {milkNote[lang]}
              </p>
            </div>
          </motion.div>

          {/* Food */}
          <motion.div {...fadeInUp} transition={{ ...fadeInUp.transition, delay: 0.15 }} className="mt-14">
            <h3 className="font-display text-2xl md:text-3xl text-espresso text-center mb-8">
              {t.foodHeading}
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {food.map((item, i) => {
                const Illustration = foodIllustrations[i % foodIllustrations.length];
                return (
                  <div
                    key={item.name.nl}
                    className="bg-crema rounded-3xl border border-crema-deep p-7 text-center"
                  >
                    <Illustration className="w-16 h-16 mx-auto mb-4 text-cinnamon" />
                    <p className="font-display text-lg text-espresso mb-2">{item.name[lang]}</p>
                    <p className="text-sm text-espresso-mist leading-relaxed">{item.desc[lang]}</p>
                  </div>
                );
              })}
            </div>
            <p className="text-center text-xs text-espresso-mist mt-6">{t.foodNote}</p>
          </motion.div>
        </div>
      </section>

      {/* ── Galerij ───────────────────────────────────────────── */}
      <section id="impressie" className="py-24 md:py-32 px-5 sm:px-8 bg-crema">
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeInUp} className="mb-12 flex items-end justify-between gap-6">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-cinnamon mb-4">
                {t.galleryKicker}
              </p>
              <h2 className="font-display text-4xl md:text-5xl tracking-tight text-espresso">
                {t.galleryTitle}
              </h2>
            </div>
            <BunIllustration className="w-14 h-14 text-cinnamon-soft hidden sm:block shrink-0" />
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-5">
            {[
              ['/images/cinnamon-buns.webp', 'Vers gebakken cinnamon buns'],
              ['/images/iced-latte.webp', 'Iced latte onder de machine'],
              ['/images/tosti.webp', 'Tosti met gesmolten Hollandse kaas'],
              ['/images/chai-pumpkin.webp', 'Pumpkin spice en Tiger Spice chai'],
              ['/images/espresso-machine.webp', 'Onze espressomachine'],
              ['/images/matcha-set.webp', 'Ceremoniële matcha set'],
              ['/images/bowl.webp', 'Smoothie bowl met granola'],
              ['/images/kraam.webp', 'Brunch & Brew in de Markthal'],
              ['/images/latte-art.webp', 'Latte art'],
            ].map(([src, alt], i) => (
              <motion.div
                key={src}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (i % 3) * 0.08, duration: 0.7 }}
                className="aspect-square rounded-3xl overflow-hidden group shadow-sm"
              >
                <img
                  src={src}
                  alt={alt}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Over ons ──────────────────────────────────────────── */}
      <section id="over-ons" className="py-24 md:py-32 px-5 sm:px-8 bg-crema-warm relative overflow-hidden">
        <BunIllustration className="absolute -left-14 -bottom-14 w-72 text-cinnamon/10 pointer-events-none select-none" />
        <div className="relative max-w-3xl mx-auto text-center">
          <motion.div {...fadeInUp}>
            <SteamLines className="w-12 mx-auto mb-4 text-cinnamon-soft" />
            <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-cinnamon mb-4">
              {t.aboutKicker}
            </p>
            <h2 className="font-display text-4xl md:text-5xl tracking-tight text-espresso mb-7">
              {t.aboutTitle}
            </h2>
            <p className="text-espresso-soft leading-relaxed mb-4">{t.aboutText1}</p>
            <p className="text-espresso-mist leading-relaxed">{t.aboutText2}</p>
          </motion.div>
        </div>
      </section>

      {/* ── Locatie ───────────────────────────────────────────── */}
      <section id="locatie" className="relative bg-espresso text-crema overflow-hidden">
        <div className="absolute top-16 right-0 w-96 h-96 bg-cinnamon/20 rounded-full blur-3xl translate-x-1/3" />
        <div className="relative max-w-6xl mx-auto px-5 sm:px-8 py-24 md:py-32">
          <div className="grid md:grid-cols-2 gap-14 items-start">
            <motion.div {...fadeInUp}>
              <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-butter mb-4">
                {t.locationKicker}
              </p>
              <h2 className="font-display text-4xl md:text-5xl tracking-tight mb-10">
                {t.locationTitle}
              </h2>

              <div className="space-y-7">
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-2xl bg-cinnamon/25 border border-cinnamon/50 flex items-center justify-center shrink-0">
                    <PinIcon className="w-5 h-5 text-butter" />
                  </div>
                  <div className="pt-0.5">
                    <h3 className="font-semibold mb-1">{t.address}</h3>
                    <p className="text-crema/60 text-sm leading-relaxed">
                      Markthal Rotterdam · Unit 35
                      <br />
                      Dominee Jan Scharpstraat 298
                      <br />
                      3011 GZ Rotterdam
                    </p>
                    <a
                      href={MAPS_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-butter hover:text-crema transition-colors mt-2"
                    >
                      {t.directions}
                      <ArrowIcon className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-2xl bg-cinnamon/25 border border-cinnamon/50 flex items-center justify-center shrink-0">
                    <ClockIcon className="w-5 h-5 text-butter" />
                  </div>
                  <div className="pt-0.5">
                    <h3 className="font-semibold mb-1">{t.hours}</h3>
                    <div className="text-crema/60 text-sm space-y-1 tabular-nums">
                      <p className="flex justify-between gap-10">
                        <span>{t.hoursMonThu}</span>
                        <span>10:00 – 20:00</span>
                      </p>
                      <p className="flex justify-between gap-10">
                        <span>{t.hoursFri}</span>
                        <span>10:00 – 21:00</span>
                      </p>
                      <p className="flex justify-between gap-10">
                        <span>{t.hoursSat}</span>
                        <span>10:00 – 20:00</span>
                      </p>
                      <p className="flex justify-between gap-10">
                        <span>{t.hoursSun}</span>
                        <span>12:00 – 18:00</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              {...fadeInUp}
              transition={{ ...fadeInUp.transition, delay: 0.15 }}
              className="aspect-[4/3] rounded-3xl overflow-hidden ring-1 ring-crema/15"
            >
              <iframe
                src={MAPS_EMBED}
                title="Brunch & Brew in de Markthal — kaart"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Footer ────────────────────────────────────────────── */}
      <footer className="bg-espresso border-t border-crema/10 py-8">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2.5">
            <LatteIllustration className="w-6 h-6 text-cinnamon-soft" />
            <span className="font-display text-crema">
              Brunch <span className="text-cinnamon-soft">&amp;</span> Brew
            </span>
          </div>
          <p className="text-crema/40 text-xs text-center">
            © {new Date().getFullYear()} Brunch &amp; Brew — {t.footerTagline}
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
