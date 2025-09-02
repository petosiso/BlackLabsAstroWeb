import AlarmIcon from '../assets/logos/Alarm.svg?raw';


export const projects = [
	{
		title: "Kúrenie a teplá voda",
		techStack: "tepelné čerpadlo • plynový kotol • elektrický kotol",
		description:
			"Inteligentné ovládanie kúrenia a regulácie teplej vody. Systém sa prispôsobí tomu, či ste doma, a v noci nemusí bojler zbytočne zohrievať vodu na vysokú teplotu.",
		notes: [
			"zoslabenie bojlera v noci",
			"prispôsobenie kúrenia podľa vonkajšej teploty",
			"prispôsobenie kúrenia podľa prítomnosti osôb v dome",
			"prehľad spotreby energií a grafy",
			"ovládanie na diaľku",
			"bez nutnosti fyzického termostatu",
		],
		icon: AlarmIcon,
	},
	{
		title: "Vetranie a rekuperácia",
		techStack: "rekuperácia • klimatizácia • vlhkostné senzory",
		description:
			"Automatická regulácia chladenia alebo rekuperácie v dome podľa teploty, vlhkosti či prítomnosti osôb. Zónová regulácia - napríklad po sprche rýchlo a cielene odvetrať len kúpeľnu.",
		notes: [
			"vetranie podľa prítomnosti osôb",
			"zohľadnenie vonkajšej teploty - pri vysokých teplotách vonku sa vetrá miernejšie",
			"možnosť zónového vetrania (sprcha, kuchyňa,..)",
			"zosilnené vetranie pri zvýšenej vlhkosti napríklad v kúpeľni",

		],
		icon: AlarmIcon,
	},
	{
		title: "Spotreba energií",
		techStack: "elektromery • vodomery • plynomery",
		description:
			"Prehľadné denné a mesačné štatistiky spotreby elektriny, plynu alebo vody – celkovo za dom aj podľa jednotlivých spotrebičov.",
		notes: [
			"upozornenie na nezvyčajne vysokú spotrebu",
			"prehľad spotreby za konkrétne spotrebiče a za celý dom",
			"grafické zobrazenie trendov",
			"mesačné porovnania s predošlým obdobím",
		],
		icon: AlarmIcon,
	},
	{
		title: "Prístupový systém",
		techStack: "elektronické zámky • kódová klávesnica • RFID čítačka",
		description:
			"Automatické zamykanie dverí alebo vstupnej bránky, vstupná klávesnica na kód či čipové karty.",
		notes: [
			"otváranie a monitoring aj na diaľku cez mobil",
			"netreba nosiť kľúče",
			"časovo obmedzené prístupy pre návštevy - napríklad pri prenájmoch",
			"log prístupov do domu",
			"automatické zamykanie dverí",
			"notifikácia na mobil ak ste práve zamkli ale napríklad okno ostalo otvorené",
		],
		icon: AlarmIcon,
	},
	{
		title: "Zabezpečovací systém",
		techStack: "senzory pohybu • magnetické kontakty • siréna • kamery",
		description:
			"Ochrana domu pomocou senzorov pohybu, sirény a integrácie s kamerami. Okamžité upozornenie, ktoré okná alebo dvere sú otvorené.",
		notes: [
			"okamžité notifikácie pri vniknutí",
			"prepojenie s kamerovým systémom",
			"možnosť automatického spustenia sirény",
			"prehľad stavu všetkých okien a dverí",
		],
		icon: AlarmIcon,
	},
	{
		title: "Garážová a vstupná brána",
		techStack: "motorická brána • diaľkové ovládanie • senzory polohy",
		description:
			"Komfortné otváranie a zatváranie garážovej alebo vstupnej brány cez mobil alebo automatizáciu. Prehľad o stave.",
		notes: [
			"automatické zatvorenie pri odchode",
			"otváranie cez obrazovku auta - Android auto alebo CarPlay",
			"notifikácia ak ostane otvorená",
		],
		icon: AlarmIcon,
	},
	{
		title: "Svetlá",
		techStack: "stmievateľné žiarovky • pohybové senzory • LED pásy",
		description:
			"Automatické spínanie a stmievanie osvetlenia podľa pohybových senzorov alebo nastavených scén. Ovládanie aj na diaľku, prípadne z pohodlia gauča.",
		notes: [
			"inteligentné scény pre rôzne nálady",
			"automatické zapnutie pri príchode domov",
			"stmievanie pred spaním",
			"automatické vypnutie svetiel ak ste na to zabudli",
			"spínanie podľa pohybu v miestnosti - napríklad v noci alebo LED pásy pod kuchynskou linkou",
		],
		icon: AlarmIcon,
	},
	{
		title: "Tienenie",
		techStack: "externé žalúzie • rolety • markízy • senzory slnečného svitu",
		description:
			"Automatické riadenie žalúzií alebo roliet podľa intenzity slnečného svitu, dennej doby alebo teploty v interiéri. Zvýšenie komfortu a úspora energie.",
		notes: [
			"zatienenie počas horúcich letných dní",
			"automatické vytiahnutie pri východe slnka",
			"ovládanie na diaľku cez mobil",
			"prepojenie s kúrením alebo klimatizáciou pre úsporu energie",
		],
		icon: AlarmIcon,
	},
	{
		title: "Audio",
		techStack: "multiroom reproduktory • inteligentné asistenty • zosilňovače",
		description:
			"Ovládanie prehrávania hudby v jednotlivých miestnostiach alebo prehrávanie rovnakej hudby vo viacerých miestnostiach naraz. Automatizácie umožňujú hudbu napríklad pri sprche alebo relaxe.",
		notes: [
			"multiroom audio s jednotnou hudbou v celom dome",
			"individuálne playlisty v jednotlivých miestnostiach",
			"automatické spustenie hudby v kúpeľni pri sprche",
			"ovládanie hlasom alebo mobilom",
		],
		icon: AlarmIcon,
	},
	{
		title: "Wellness",
		techStack: "sauna • bazén • vírivka • senzory teploty vody",
		description:
			"Inteligentné riadenie wellness zariadení ako sauna alebo bazén. Možnosť vzdialeneho nahriatia sauny, ohrevu vody či riadenia filtrácie a osvetlenia.",
		notes: [
			"predohrev sauny na diaľku pred príchodom domov",
			"automatická filtrácia vody v bazéne",
			"meranie a udržiavanie optimálnej teploty vody",
			"osvetlenie bazéna podľa scény",
		],
		icon: AlarmIcon,
	},
	{
		title: "Zavlažovanie",
		techStack: "záhradné postrekovače • senzory vlhkosti pôdy • dažďové senzory",
		description:
			"Automatické zavlažovanie záhrady podľa počasia, vlhkosti pôdy alebo nastaveného časového plánu. Úspora vody a zdravšia zeleň.",
		notes: [
			"zavlažovanie iba pri nízkej vlhkosti pôdy",
			"pozastavenie zavlažovania pri daždi",
			"nočné zavlažovanie pre úsporu vody",
			"možnosť manuálneho spustenia cez mobil",
		],
		icon: AlarmIcon,
	},
	{
		title: "Fotovoltaické panely",
		techStack: "solárne panely • meniče • batériové úložiská",
		description:
			"Integrácia fotovoltaických panelov s domácnosťou. Monitorovanie výroby energie, využívanie vlastnej elektriny a efektívne riadenie spotreby.",
		notes: [
			"prehľad vyrobenej a spotrebovanej energie",
			"optimalizácia spotreby podľa výroby",
			"riadenie nabíjania batérie alebo elektromobilu",
			"notifikácia pri výpadku výroby",
		],
		icon: AlarmIcon,
	},
	{
		title: "Integrácie a spotrebiče",
		techStack: "práčka • sušička • robotický vysávač • inteligentné spotrebiče",
		description:
			"Home Assistant je otvorený systém s obrovským množstvom integrácií. Komunita neustále vytvára nové prepojenia pre domáce spotrebiče a zariadenia.",
		notes: [
			"automatické spustenie vysávača, keď nie ste doma",
			"upozornenie po doprati práčky alebo sušičky",
			"prehľad stavu a spotreby spotrebičov",
			"prepojenie s hlasovým asistentom alebo mobilnou aplikáciou",
		],
		icon: AlarmIcon,
	},
	{
		title: "Integrácia auta",
		techStack: "Toyota • Škoda Connect • VW Connect • iné značky",
		description:
			"Prehľad o stave vozidla priamo v Home Assistante. Informácie o palive, stave batérie, dojazde či uzamknutí auta. Možnosť automatických upozornení a prehľadných štatistík.",
		notes: [
			"upozornenie, ak večer ostalo auto nezamknuté",
			"prehľad o stave paliva alebo nabitia batérie",
			"zobrazenie poslednej polohy auta na mape",
			"štatistiky jázd a spotreby",
		],
		icon: AlarmIcon,

	},
	{
		title: "Bezpečnosť detí a domácnosti",
		techStack: "senzory CO₂ • senzory dymu • senzory úniku vody • detektory otvoreného okna",
		description:
			"Zvýšenie bezpečnosti domácnosti pomocou senzorov na únik plynu, vody alebo dymu. Upozornenia v reálnom čase môžu predísť škodám.",
		notes: [
			"okamžité notifikácie pri úniku vody",
			"spustenie sirény alebo svetelného signálu pri úniku plynu",
			"automatické zatvorenie hlavného ventilu",
			"kontrola kvality vzduchu v detskej izbe",
		],
		icon: AlarmIcon,
	},
	{
		title: "Nabíjanie elektromobilu",
		techStack: "wallbox • elektromobil • fotovoltaika",
		description:
			"Inteligentné riadenie nabíjania elektromobilu podľa taríf, spotreby domácnosti alebo výroby zo solárnych panelov.",
		notes: [
			"nabíjanie v čase lacnej tarify",
			"využívanie energie z fotovoltaiky",
			"notifikácia o stave nabitia auta",
			"možnosť obmedziť nabíjací výkon podľa spotreby v dome",
		],
		icon: AlarmIcon,
	},
	{
		title: "Pošta a balíky",
		techStack: "kamera pri bránke • senzor pohybu • inteligentný zvonček",
		description:
			"Upozornenie na príchod poštára alebo doručenie balíka. História doručení priamo v Home Assistante.",
		notes: [
			"notifikácia pri otvorení poštovej schránky",
			"automatické zaznamenanie doručenia balíka kamerou",
			"upozornenie, že poštár zazvonil pri dverách",
			"integrácia s inteligentným zámkom pre odovzdanie balíka do garáže",
		],
		icon: AlarmIcon,
	},
	{
		title: "Rodinné To-Do listy",
		techStack: "mobilná aplikácia • hlasový asistent • zdieľané panely",
		description:
			"Spoločné rodinné zoznamy úloh alebo nákupné zoznamy. Členovia domácnosti môžu pridávať a odškrtávať položky cez mobil alebo hlasové ovládanie.",
		notes: [
			"centrálne nákupné zoznamy dostupné všetkým",
			"možnosť diktovania úloh cez hlasového asistenta",
			"zobrazenie úloh na nástenke alebo tablete",
			"automatické pripomenutie dôležitých úloh",
		],
		icon: AlarmIcon,
	},
	{
		title: "Vývoz smetí",
		techStack: "kalendár smetiarskeho rozvozu • notifikácie • smart displej",
		description:
			"Automatické pripomenutie vývozu smetí podľa harmonogramu. Notifikácie pre konkrétne typy odpadu (plasty, papier, bio...).",
		notes: [
			"večerné upozornenie deň pred vývozom",
			"zobrazenie harmonogramu na nástenke alebo v aplikácii",
			"notifikácia len pre relevantný typ odpadu",
			"hlasové pripomenutie cez smart reproduktor",
		],
		icon: AlarmIcon,
	},
];
