// src/data/advantages.ts
import Home from "lucide-static/icons/home.svg";
import TabletSmartphone from "lucide-static/icons/tablet-smartphone.svg";
import PiggyBank from "lucide-static/icons/piggy-bank.svg";
import Shield from "lucide-static/icons/shield.svg";
import Smartphone from "lucide-static/icons/smartphone.svg";
import BadgeDollarSign from "lucide-static/icons/badge-dollar-sign.svg";
import Plug from "lucide-static/icons/plug.svg";
import Leaf from "lucide-static/icons/leaf.svg";
import Lock from "lucide-static/icons/lock.svg";
import Puzzle from "lucide-static/icons/puzzle.svg";

export const advantagesData = [
  {
    title: "Komfort bývania",
    prompt: "Automatizácie a inteligentné ovládanie",
    description:
      "Vďaka smart automatizáciám a ovládaniu na diaľku máte všetko pod kontrolou. Všetky zariadenia v domácnosti sú prepojené a môžu navzájom interagovať.",
    technologies: [
      "Smart zámky",
      "Osvetlenie",
      "Automatizácie",
      "Upozornenia na mobil",
      "Integrácia multimédií",
    ],
    notes: [
      "🔒 Automatické uzamknutie dverí na noc pre vyššiu bezpečnosť",
      "💡 Svetlá v predsieni sa rozsvietia hneď po príchode domov",
      "🔊 Hlasový asistent vám v kuchyni oznámi, že práčka doprala",
      "🌬️ Po sprche sa automaticky spustí ventilátor alebo zosilní rekuperácia",
      "📱 Upozornenie na mobil, ak zostane otvorené okno, terasa alebo garážová brána",
      "🌐 SmartHome sám reštartuje router, keď vypadne internet",
      "🌬️ Zosilňnenie rekuperácie ak je zapnutý digestor v kuchyni",
      "🚗 Ovládanie garážovej brány priamo z obrazovky auta [Android Auto / Apple CarPlay]",
      "♾️ Nekonečné možnosti automatizácií – prispôsobené vašim potrebám, kedykoľvek rozšíriteľné a upraviteľné",
    ],
    icon: Home,
  },
  {
    title: "Náhrada  ovládačov a appiek",
    prompt: "Všetko v jednom - v jednej appke v mobile alebo na nástennom tablete",
    description:
      "Namiesto viacerých samostatných ovládačov – termostatu, ovládania rekuperácie či drahého videovrátnika – môžete mať všetko elegantne integrované v jednom dizajnovom tablete na stene. V prehľadnom rozhraní získate nielen ovládanie, ale aj aktuálne informácie o stave celého domu. Dá sa vytvoriť aj 3D model vášho domu a okamžite vidieť v ktorých miestnostiach sa svieti, kde je pohyb a tak podobne. Rovnako tak nahradíme aj viaceré appky vo vašom mobile do jednej.",
    technologies: [
      "Nástenný tablet",
      "3D interaktívny model domu",
      "Integrácia systémov",
      "Prehľadné rozhranie",
    ],
    notes: [],
    icon: TabletSmartphone,
  },
  {
    title: "Ovládanie na diaľku",
    prompt: "Všetko máte pod kontrolou, nech ste kdekoľvek. Vhodné na prenájmy a chaty.",
    description:
      "Bezpečné pripojenie k domu aj na diaľku. Kedykoľvek môžete cez mobilný telefón alebo počítač skontrolovať stav a ovládať všetky zariadenia vo vašej domácnosti.",
    technologies: [
      "Mobilná aplikácia",
      "Bezpečné pripojenie",
      "Diaľkové ovládanie",
    ],
    notes: [],
    icon: Smartphone,
  },
  {
    title: "Bez nutnosti špeciálnej elektroinštalácie",
    prompt: "SmartHome funguje aj v existujúcom dome, byte či na chate.",
    description:
      "Nemusíte nijak špeciálne upravovať elektroinštaláciu. Smart domácnosť vieme vytvoriť aj vo vašom už postavenom dome výberom vhodných zariadení. Ak ste v priebehu výstavby, všetko je ešte jednoduchšie a máte viac možností, no smart funkcie vieme dodať aj do existujúcej nehnuteľnosti bez zásadných úprav.",
    technologies: [
      "Štandardná elektroinštalácia",
      "Bezdrôtové zariadenia",
      "Rozšíriteľnosť pri výstavbe",
    ],
    notes: [],
    icon: Plug,
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
      "Kódové klávesnice",
    ],
    notes: [],
    icon: Shield,
  },


  {
    title: "Úspora financií",
    prompt: "Optimalizácia spotreby a nižšie náklady",
    description:
      "Nemusíte dokupovať drahé samostatné zariadenia – termostat k tepelnému čerpadlu, ovládanie rekuperácie či videovrátnik. Vždy máte detailný prehľad o spotrebe elektriny, plynu a vody. Na základe dát môžete jednoducho kontrolovať svoju spotrebu energií.",
    technologies: [
      "Monitoring spotreby energií",
      "Smart ovládanie kúrenia",
      "Optimalizácia rekuperácie",
    ],
    notes: [],
    icon: PiggyBank,
  },
  {
    title: "Veľmi výhodná cena",
    prompt: "Bez zbytočných marží, viac možností",
    description:
      "Oproti uzavretým systémom ako TapHome alebo Loxone ponúkame bezkonkurenčnú cenu a ešte širšie možnosti. Neplatíte marže predraženým spoločnostiam. Systém je aktívne vyvíjaný komunitou nadšencov, má masívnu podporu a milióny používateľov. Podporuje zariadenia od rôznych výrobcov – nie ste viazaní na jedinú značku.",
    technologies: [
      "Open-source platforma",
      "Podpora viacerých výrobcov",
      "Komunitný vývoj",
    ],
    notes: [],
    icon: BadgeDollarSign,
  },
  {
    title: "Ekologické riešenie",
    prompt: "Šetrite energiu aj planétu",
    description:
      "Smart dom pomáha šetriť elektrinu, vodu aj plyn. Vďaka automatizáciám sa energie využívajú len vtedy, keď ich skutočne potrebujete.",
    technologies: [
      "Automatizované úspory",
      "Optimalizácia spotreby",
      "Zelené riešenia",
    ],
    notes: [],
    icon: Leaf,
  },
  {
    title: "Lokálne ovládanie",
    prompt: "Funguje aj bez internetu",
    description:
      "Home Assistant beží kompletne lokálne – bez cloudu, bez posielania dát na internet. Vaša domácnosť funguje nezávisle od internetu a vaše súkromie je maximálne chránené.",
    technologies: ["Lokálny server", "Ochrana súkromia", "Offline režim"],
    notes: [],
    icon: Lock,
  },
  {
    title: "Flexibilita a rozšíriteľnosť",
    prompt: "Systém rastie spolu s vašimi potrebami",
    description:
      "Môžete začať len s pár senzormi a postupne pridávať ďalšie zariadenia – od svetiel, cez klimatizáciu, až po fotovoltaiku či nabíjačku elektromobilu. Všetko bez nutnosti meniť základný systém.",
    technologies: [
      "Modulárny systém",
      "Integrácia tisícov zariadení",
      "Budúca pripravenosť",
    ],
    notes: [],
    icon: Puzzle,
  },
];
