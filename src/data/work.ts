import jobIconRaw from '../assets/icons/job-title-icon.svg?raw';
import companyIconRaw from '../assets/icons/company-icon.svg?raw';
import locationIconRaw from '../assets/icons/location-icon.svg?raw';
import { sanitizeToOutline } from '../lib/svg';

export const workIcons = {
  job: sanitizeToOutline(jobIconRaw, 15),
  company: sanitizeToOutline(companyIconRaw, 15),
  location: sanitizeToOutline(locationIconRaw, 15),
};

export const work = [
  {
    title: "Komfort bývania",
    prompt: "Automatizácie a inteligentné ovládanie",
    description:
      "Zabúdate večer zamknúť dvere? Alebo sa vám už stalo, že ste nechali otvorenú garážovú bránu? Po sprche chcete inteligentne vyvetrať kúpeľňu, kým je tam vysoká vlhkosť? Alebo sa vám stane, že vypadne internet a potrebujete automaticky reštartovať router? Vďaka smart automatizáciám a ovládaniu na diaľku máte všetko pod kontrolou. Dokonca vám môže počas sprchy pustiť obľúbenú hudbu priamo v kúpeľni.",
    technologies: [
      "Smart zámky",
      "Smart spínače a senzory",
      "Automatizácie",
      "Integrácia multimédií"
    ],
    notes: ["po príchode domov sa rozsvietia svetlá v predsieni", "po sprche sa zapne ventilátor v kúpeľni", "upozornenie na mobil ak ste zabudli zatvoriť terasu alebo okno"],
  },
  {
    title: "Náhrada nástenných ovládačov",
    prompt: "Všetko v jednom modernom tablete",
    description:
      "Namiesto viacerých samostatných ovládačov – termostatu, ovládania rekuperácie či drahého videovrátnika – môžete mať všetko elegantne integrované v jednom dizajnovom tablete na stene. V prehľadnom rozhraní získate nielen ovládanie, ale aj aktuálne informácie o stave celého domu.",
    technologies: [
      "Nástenný tablet",
      "Integrácia systémov",
      "Prehľadné rozhranie"
    ],
    notes: [],
  },
  {
    title: "Úspora financií",
    prompt: "Optimalizácia spotreby a nižšie náklady",
    description:
      "Nemusíte dokupovať drahé samostatné zariadenia – termostat k tepelnému čerpadlu, ovládanie rekuperácie či videovrátnik. Vždy máte detailný prehľad o spotrebe elektriny, plynu a vody. Na základe dát môžete jednoducho zmeniť svoje návyky a šetriť peniaze.",
    technologies: [
      "Monitoring spotreby energií",
      "Smart ovládanie čerpadla",
      "Optimalizácia rekuperácie"
    ],
    notes: [],
  },
  {
    title: "Bezpečnosť",
    prompt: "Ochrana domu a rodiny",
    description:
      "Alarm aktivovaný pohybovými senzormi, prístup cez kódovú klávesnicu namiesto nosenia kľúčov, prehľad o tom, či je dom zamknutý a všetky okná zatvorené. Okamžité upozornenia z detektorov dymu či detektorov úniku vody vám pomôžu predísť škodám.",
    technologies: [
      "Alarm",
      "Detektory pohybu",
      "Detektory dymu a vody",
      "Kódové klávesnice"
    ],
    notes: [],
  },
  {
    title: "Ovládanie na diaľku",
    prompt: "Všetko máte pod kontrolou, nech ste kdekoľvek",
    description:
      "Bezpečné pripojenie k domu aj na diaľku. Kedykoľvek môžete cez mobilný telefón alebo počítač skontrolovať stav a ovládať všetky zariadenia vo vašej domácnosti.",
    technologies: [
      "Mobilná aplikácia",
      "Bezpečné pripojenie",
      "Diaľkové ovládanie"
    ],
    notes: [],
  },
  {
    title: "Veľmi výhodná cena",
    prompt: "Bez zbytočných marží, viac možností",
    description:
      "Oproti uzavretým systémom ako TapHome alebo Loxone ponúkame bezkonkurenčnú cenu a ešte širšie možnosti. Neplatíte marže predraženým spoločnostiam. Systém je aktívne vyvíjaný komunitou nadšencov, má masívnu podporu a milióny používateľov. Podporuje zariadenia od rôznych výrobcov – nie ste viazaní na jedinú značku.",
    technologies: [
      "Open-source platforma",
      "Podpora viacerých výrobcov",
      "Komunitný vývoj"
    ],
    notes: [],
  },

  {
    title: "Bez nutnosti špeciálnej elektroinštalácie",
    prompt: "SmartHome funguje aj v hotovom dome",
    description:
      "Nemusíte nijak špeciálne upravovať elektroinštaláciu. Smart domácnosť vieme vytvoriť aj vo vašom už postavenom dome výberom vhodných zariadení. Ak ste v priebehu výstavby, všetko je ešte jednoduchšie a máte viac možností, no smart funkcie vieme dodať aj do existujúcej nehnuteľnosti bez zásadných úprav.",
    technologies: [
      "Štandardná elektroinštalácia",
      "Bezdrôtové zariadenia",
      "Rozšíriteľnosť pri výstavbe"
    ],
    notes: [],
  },
  {
    title: "Ekologické riešenie",
    prompt: "Šetrite energiu aj planétu",
    description:
      "Smart dom pomáha šetriť elektrinu, vodu aj plyn. Vďaka automatizáciám sa energie využívajú len vtedy, keď ich skutočne potrebujete.",
    technologies: [
      "Automatizované úspory",
      "Optimalizácia spotreby",
      "Zelené riešenia"
    ],
    notes: [],
  },
  {
    title: "Lokálne ovládanie",
    prompt: "Funguje aj bez internetu",
    description:
      "Home Assistant beží kompletne lokálne – bez cloudu, bez posielania dát na internet. Vaša domácnosť funguje nezávisle od internetu a vaše súkromie je maximálne chránené.",
    technologies: [
      "Lokálny server",
      "Ochrana súkromia",
      "Offline režim"
    ],
    notes: [],
  },
  {
    title: "Flexibilita a rozšíriteľnosť",
    prompt: "Systém rastie spolu s vašimi potrebami",
    description:
      "Môžete začať len s pár senzormi a postupne pridávať ďalšie zariadenia – od svetiel, cez klimatizáciu, až po fotovoltaiku či nabíjačku elektromobilu. Všetko bez nutnosti meniť základný systém.",
    technologies: [
      "Modulárny systém",
      "Integrácia tisícov zariadení",
      "Budúca pripravenosť"
    ],
    notes: [],
  },
];

export type WorkItem = (typeof work)[number];

