export type Language = 'nl' | 'en';

export const LANGUAGES: Language[] = ['nl', 'en'];

/* ── Menudata — 1-op-1 van de actuele menukaarten ─────────────── */

export interface PricedItem {
  name: Record<Language, string>;
  price: string;
  note?: Record<Language, string>;
}

export const coffee: PricedItem[] = [
  { name: { nl: 'Espresso', en: 'Espresso' }, price: '3,50' },
  { name: { nl: 'Macchiato', en: 'Macchiato' }, price: '4,00' },
  { name: { nl: 'Cortado', en: 'Cortado' }, price: '4,00' },
  { name: { nl: 'Cappuccino', en: 'Cappuccino' }, price: '4,50' },
  { name: { nl: 'Americano', en: 'Americano' }, price: '4,50' },
  { name: { nl: 'Latte', en: 'Latte' }, price: '4,50' },
  { name: { nl: 'Flat white', en: 'Flat white' }, price: '4,50' },
  { name: { nl: 'Latte macchiato', en: 'Latte macchiato' }, price: '5,00' },
  { name: { nl: 'Café chocolate', en: 'Café chocolate' }, price: '5,00' },
];

export const iced: PricedItem[] = [
  { name: { nl: 'Iced coffee', en: 'Iced coffee' }, price: '5,00' },
  { name: { nl: 'Iced latte', en: 'Iced latte' }, price: '5,00' },
  { name: { nl: 'Iced cappuccino', en: 'Iced cappuccino' }, price: '5,00' },
  { name: { nl: 'Iced chai latte', en: 'Iced chai latte' }, price: '5,00' },
  { name: { nl: 'Iced matcha', en: 'Iced matcha' }, price: '6,50' },
];

export const matcha: PricedItem[] = [
  { name: { nl: 'Matcha', en: 'Matcha' }, price: '6,00' },
  { name: { nl: 'Strawberry matcha', en: 'Strawberry matcha' }, price: '7,00' },
  { name: { nl: 'Mango matcha', en: 'Mango matcha' }, price: '7,00' },
];

export const tea: PricedItem[] = [
  { name: { nl: 'Thee', en: 'Tea' }, price: '4,00' },
  { name: { nl: 'Verse muntthee', en: 'Fresh mint tea' }, price: '5,00' },
  { name: { nl: 'Verse gemberthee', en: 'Fresh ginger tea' }, price: '5,00' },
];

export const pastries: PricedItem[] = [
  { name: { nl: 'Croissant', en: 'Croissant' }, price: '2,50' },
  { name: { nl: 'Chocolate bun', en: 'Chocolate bun' }, price: '3,00' },
  { name: { nl: 'Cinnamon bun', en: 'Cinnamon bun' }, price: '3,00' },
  { name: { nl: 'Brownie', en: 'Brownie' }, price: '3,00' },
  { name: { nl: 'Cookie', en: 'Cookie' }, price: '1,50' },
];

/* Tosti's — met beschrijving, van de tosti-kaart */
export const tostis: Array<PricedItem & { desc: Record<Language, string> }> = [
  {
    name: { nl: 'The Classic', en: 'The Classic' },
    price: '6,00',
    desc: {
      nl: 'Drie lagen brood met ham en gesmolten kaas.',
      en: 'Three layers of bread with ham and melted cheese.',
    },
  },
  {
    name: { nl: 'Traditional Dutch', en: 'Traditional Dutch' },
    price: '6,00',
    desc: {
      nl: 'Drielaags brood met authentieke oude Hollandse kaas.',
      en: 'Triple-layered bread with authentic old Dutch cheese.',
    },
  },
  {
    name: { nl: 'Mozzarella / Tomato', en: 'Mozzarella / Tomato' },
    price: '6,50',
    desc: {
      nl: 'Groene basilicumpesto, mozzarella en zongedroogde tomaat.',
      en: 'Green basil pesto, mozzarella and sun-dried tomatoes.',
    },
  },
  {
    name: { nl: 'Spanish Serrano', en: 'Spanish Serrano' },
    price: '7,00',
    desc: {
      nl: 'Groene basilicumpesto, kaas, serranoham en zongedroogde tomaat.',
      en: 'Green basil pesto, cheese, serrano ham and sun-dried tomatoes.',
    },
  },
  {
    name: { nl: 'Chorizo Cheddar', en: 'Chorizo Cheddar' },
    price: '7,00',
    desc: {
      nl: 'Plakjes chorizo met gesmolten cheddar.',
      en: 'Slices of chorizo with melted cheddar.',
    },
  },
  {
    name: { nl: 'Pulled Chicken', en: 'Pulled Chicken' },
    price: '7,00',
    desc: {
      nl: 'Gekruide pulled chicken met kaas.',
      en: 'Pulled seasoned chicken and cheese.',
    },
  },
];

/* Vers uit de keuken — wisselt per dag/seizoen, geen vaste prijzen */
export const food: Array<{ name: Record<Language, string>; desc: Record<Language, string> }> = [
  {
    name: { nl: 'Bowls', en: 'Bowls' },
    desc: {
      nl: 'Smoothie bowls met vers fruit, huisgemaakte granola en matcha.',
      en: 'Smoothie bowls with fresh fruit, homemade granola and matcha.',
    },
  },
  {
    name: { nl: 'Verse juices', en: 'Fresh juices' },
    desc: {
      nl: 'Elke ochtend vers geperst — vraag naar de sappen van vandaag.',
      en: 'Freshly squeezed every morning — ask for today’s juices.',
    },
  },
];

export const milkNote = {
  nl: 'Specialty melk (oatly · kokos · soja · amandel) + 0,70',
  en: 'Specialty milk (oatly · coconut · soy · almond) + 0.70',
};

/* ── UI-teksten ──────────────────────────────────────────────── */

export const ui = {
  nl: {
    navMenu: 'Menu',
    navGallery: 'Impressie',
    navAbout: 'Over ons',
    navLocation: 'Locatie',
    heroKicker: 'Markthal Rotterdam · Unit 35',
    heroTitle1: 'Brunch',
    heroAmp: '&',
    heroTitle2: 'Brew',
    heroSub: 'Verse koffie · tosti’s · juices · bowls',
    heroDesc: 'Elke ochtend bereiden we alles vers. Geen shortcuts — gewoon eerlijk eten en heel goede koffie, midden in de Markthal.',
    ctaMenu: 'Bekijk het menu',
    ctaRoute: 'Zo vind je ons',
    freshDaily: 'Elke dag vers',
    menuKicker: 'Het menu',
    menuTitle: 'Vers gezet, vers gebakken',
    menuIntro: 'Dezelfde prijzen als op de kaart. Alles ook om mee te nemen.',
    coffeeHeading: 'Koffie',
    icedHeading: 'Iced',
    matchaHeading: 'Matcha',
    teaHeading: 'Thee',
    pastriesHeading: 'Pastries',
    tostiHeading: 'Tosti’s',
    foodHeading: 'Vers uit de keuken',
    foodNote: 'Wisselt per dag en seizoen — check de kaart of vraag het ons.',
    galleryKicker: 'Impressie',
    galleryTitle: 'Van de pass',
    aboutKicker: 'Over ons',
    aboutTitle: 'Made fresh, made with love',
    aboutText1: 'Bij Brunch & Brew begint elke dag vroeg: sappen persen, granola bakken, deeg rollen. Geen shortcuts — gewoon eerlijk eten dat smaakt naar de dag waarop het gemaakt is.',
    aboutText2: 'Van de eerste pour tot het laatste bord: elk detail klopt. Kom langs, blijf even hangen en proef waarom onze stek in de Markthal zo geliefd is.',
    locationKicker: 'Kom langs',
    locationTitle: 'In de Markthal',
    address: 'Adres',
    hours: 'Openingstijden',
    hoursMonThu: 'Ma – do',
    hoursFri: 'Vrijdag',
    hoursSat: 'Zaterdag',
    hoursSun: 'Zondag',
    directions: 'Routebeschrijving',
    reviewsHeading: 'Reviews',
    reviewsText: 'Al geweest? Deel je ervaring en help anderen ons te vinden.',
    tripadvisorCta: 'Bekijk ons op TripAdvisor',
    followHeading: 'Volg ons',
    followText: 'Dagelijkse specials en nieuwtjes op Instagram.',
    footerTagline: 'Koffie & brunch in de Markthal Rotterdam',
  },
  en: {
    navMenu: 'Menu',
    navGallery: 'Gallery',
    navAbout: 'About',
    navLocation: 'Location',
    heroKicker: 'Markthal Rotterdam · Unit 35',
    heroTitle1: 'Brunch',
    heroAmp: '&',
    heroTitle2: 'Brew',
    heroSub: 'Fresh coffee · grilled cheese · juices · bowls',
    heroDesc: 'We prep everything fresh every morning. No shortcuts — just honest food and seriously good coffee, in the heart of the Markthal.',
    ctaMenu: 'View the menu',
    ctaRoute: 'How to find us',
    freshDaily: 'Fresh every day',
    menuKicker: 'The menu',
    menuTitle: 'Freshly brewed, freshly baked',
    menuIntro: 'Same prices as on the board. Everything available to go.',
    coffeeHeading: 'Coffee',
    icedHeading: 'Iced',
    matchaHeading: 'Matcha',
    teaHeading: 'Tea',
    pastriesHeading: 'Pastries',
    tostiHeading: 'Grilled cheese',
    foodHeading: 'Fresh from the kitchen',
    foodNote: 'Changes daily and with the seasons — check the board or just ask.',
    galleryKicker: 'Gallery',
    galleryTitle: 'From the pass',
    aboutKicker: 'About us',
    aboutTitle: 'Made fresh, made with love',
    aboutText1: 'At Brunch & Brew every day starts early: squeezing juices, baking granola, rolling dough. No shortcuts — just honest food that tastes like the day it was made.',
    aboutText2: 'From the first pour to the final plate, every detail is intentional. Come by, stay a while and taste why our spot in the Markthal is so loved.',
    locationKicker: 'Visit us',
    locationTitle: 'Inside the Markthal',
    address: 'Address',
    hours: 'Opening hours',
    hoursMonThu: 'Mon – Thu',
    hoursFri: 'Friday',
    hoursSat: 'Saturday',
    hoursSun: 'Sunday',
    directions: 'Get directions',
    reviewsHeading: 'Reviews',
    reviewsText: 'Been here? Share your experience and help others find us.',
    tripadvisorCta: 'Find us on TripAdvisor',
    followHeading: 'Follow us',
    followText: 'Daily specials and news on Instagram.',
    footerTagline: 'Coffee & brunch in the Markthal Rotterdam',
  },
} satisfies Record<Language, Record<string, string>>;

export const MAPS_EMBED =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2461.082575034268!2d4.486676776762635!3d51.92014747191106!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c4335c5e0f8a31%3A0x8c1b8b8b8b8b8b8b!2sMarkthal!5e0!3m2!1snl!2snl!4v1704153600000!5m2!1snl!2snl';

export const MAPS_URL =
  'https://www.google.com/maps/search/?api=1&query=Markthal+Rotterdam+Dominee+Jan+Scharpstraat+298';

export const TRIPADVISOR_URL =
  'https://www.tripadvisor.nl/Restaurant_Review-g188632-d26352718-Reviews-Brunch_And_Brew-Rotterdam_South_Holland_Province.html';

export const INSTAGRAM_URL = 'https://www.instagram.com/brunchandbrew.markthal';
