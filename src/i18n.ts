export type Language = 'nl' | 'en';

export const LANGUAGES: Language[] = ['nl', 'en'];

/* ── Menudata — overgenomen van het menubord bij de kraam ─────── */

export interface PricedItem {
  name: Record<Language, string>;
  price: string;
  note?: Record<Language, string>;
}

export const coffee: PricedItem[] = [
  { name: { nl: 'Americano', en: 'Americano' }, price: '3,70' },
  { name: { nl: 'Cappuccino', en: 'Cappuccino' }, price: '3,70' },
  { name: { nl: 'Espresso', en: 'Espresso' }, price: '3,00' },
  { name: { nl: 'Espresso macchiato', en: 'Espresso macchiato' }, price: '3,70' },
  { name: { nl: 'Cortado', en: 'Cortado' }, price: '3,70' },
  { name: { nl: 'Latte', en: 'Latte' }, price: '3,70' },
  { name: { nl: 'Latte macchiato', en: 'Latte macchiato' }, price: '4,00' },
  { name: { nl: 'Flat white', en: 'Flat white' }, price: '4,00' },
  { name: { nl: 'Café chocolate', en: 'Café chocolate' }, price: '5,00' },
];

export const iced: PricedItem[] = [
  { name: { nl: 'Iced cappuccino', en: 'Iced cappuccino' }, price: '5,00' },
  { name: { nl: 'Iced latte', en: 'Iced latte' }, price: '5,00' },
  { name: { nl: 'Iced coffee', en: 'Iced coffee' }, price: '5,00' },
  { name: { nl: 'Iced chai latte', en: 'Iced chai latte' }, price: '5,00' },
  { name: { nl: 'Iced matcha', en: 'Iced matcha' }, price: '6,00' },
];

export const specials: PricedItem[] = [
  { name: { nl: 'Chai latte', en: 'Chai latte' }, price: '5,00' },
  { name: { nl: 'Pumpkin spice latte', en: 'Pumpkin spice latte' }, price: '5,00' },
  { name: { nl: 'Matcha latte', en: 'Matcha tea latte' }, price: '5,00' },
  {
    name: { nl: 'Dirty chai', en: 'Dirty chai' },
    price: '5,00',
    note: { nl: 'chai + shot espresso', en: 'chai + espresso shot' },
  },
];

export const teaAndMore: PricedItem[] = [
  { name: { nl: 'Thee', en: 'Tea' }, price: '3,00' },
  { name: { nl: 'Verse muntthee', en: 'Fresh mint tea' }, price: '4,00' },
  { name: { nl: 'Verse gemberthee', en: 'Fresh ginger tea' }, price: '4,00' },
  { name: { nl: 'Warme chocolademelk', en: 'Hot chocolate' }, price: '5,00' },
  { name: { nl: 'Frisdrank', en: 'Soft drinks' }, price: '3,00' },
  { name: { nl: 'Water', en: 'Water' }, price: '3,00' },
];

export const sweets: PricedItem[] = [
  { name: { nl: 'Cookies', en: 'Cookies' }, price: '3,50' },
  { name: { nl: 'Brownies', en: 'Brownies' }, price: '3,00' },
  { name: { nl: 'Gebak & pastries', en: 'Pastries' }, price: '3,00' },
];

/* Food — vers gemaakt, prijzen wisselen per dag/seizoen */
export const food: Array<{ name: Record<Language, string>; desc: Record<Language, string> }> = [
  {
    name: { nl: "Tosti's", en: 'Grilled cheese' },
    desc: {
      nl: 'Goudbruin gegrild met échte Hollandse kaas — onze klassieker.',
      en: 'Grilled golden brown with real Dutch cheese — our classic.',
    },
  },
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
  {
    name: { nl: 'Cinnamon buns', en: 'Cinnamon buns' },
    desc: {
      nl: 'Vers gebakken kaneelbroodjes, knapperig en zacht tegelijk.',
      en: 'Freshly baked cinnamon rolls, crispy and soft at once.',
    },
  },
];

export const milkNote = {
  nl: 'Specialty melk (haver · soja · amandel · kokos) + 0,70',
  en: 'Specialty milk (oat · soy · almond · coconut) + 0.70',
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
    menuIntro: 'Dezelfde prijzen als op het bord. Alles ook om mee te nemen.',
    coffeeHeading: 'Koffie',
    icedHeading: 'Iced',
    specialsHeading: 'Lattes & chai',
    teaHeading: 'Thee & meer',
    sweetsHeading: 'Zoet',
    foodHeading: 'Vers uit de keuken',
    foodNote: 'Prijzen wisselen met het seizoen — check het bord of vraag het ons.',
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
    specialsHeading: 'Lattes & chai',
    teaHeading: 'Tea & more',
    sweetsHeading: 'Sweets',
    foodHeading: 'Fresh from the kitchen',
    foodNote: 'Prices change with the seasons — check the board or just ask.',
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
    footerTagline: 'Coffee & brunch in the Markthal Rotterdam',
  },
} satisfies Record<Language, Record<string, string>>;

export const MAPS_EMBED =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2461.082575034268!2d4.486676776762635!3d51.92014747191106!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c4335c5e0f8a31%3A0x8c1b8b8b8b8b8b8b!2sMarkthal!5e0!3m2!1snl!2snl!4v1704153600000!5m2!1snl!2snl';

export const MAPS_URL =
  'https://www.google.com/maps/search/?api=1&query=Markthal+Rotterdam+Dominee+Jan+Scharpstraat+298';
