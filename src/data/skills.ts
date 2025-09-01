export const skills = [
  {
    icon: `<svg viewBox="0 0 24 24" fill="#41BDF5"><path d="M6 13h12v7H6z"/><path d="M12 3a6 6 0 016 6v4H6V9a6 6 0 016-6z"/></svg>`,
    title: "Kúrenie a vetranie",
    description: "Inteligentné ovládanie kúrenia a regulovania teplej vody. Automatická regulácia chladenia alebo rekuperácie v dome podľa teploty, vlhkosti alebo prítomnosti osôb."
  }, 
  {
    icon: `<svg viewBox="0 0 24 24" fill="#41BDF5"><path d="M3 13h2a9 9 0 0018 0h-2a7 7 0 11-14 0H3z"/></svg>`,
    title: "Spotreba energií",
    description: "Prehľadné denné a mesačné štatistiky spotreby elektriny, plynu alebo vody. Celkovo za dom alebo podľa jednotlivých spotrebičov."
  },
  {
    icon: `<svg viewBox="0 0 24 24" fill="#41BDF5"><path d="M12 2a7 7 0 00-7 7v3H4v10h16V12h-1V9a7 7 0 00-7-7z"/></svg>`,
    title: "Prístupový systém",
    description: "Automatické zamykanie dverí alebo vstupnej bránky, vstupná klávesnica na kód alebo čipové karty."
  },
    {
    icon: `<svg viewBox="0 0 24 24" fill="#41BDF5"><path d="M12 2a7 7 0 00-7 7v3H4v10h16V12h-1V9a7 7 0 00-7-7z"/></svg>`,
    title: "Zabezpečovací systém",
    description: "Ochrana domu pomocou senzorov pohybu, sirény a integrácie s kamerami. Okamžitá informácia o tom, ktoré okná alebo dvere sú otvorené."
  },
   {
    icon: `<svg viewBox="0 0 24 24" fill="#41BDF5"><path d="M3 4h18v6H3zm2 8h14v8H5z"/></svg>`,
    title: "Garážová brána",
    description: "Komfortné otváranie a zatváranie garážovej brány alebo vstupnej brány cez mobil alebo automatizáciu."
  },  
  {
    icon: `<svg viewBox="0 0 24 24" fill="#41BDF5"><path d="M12 4a8 8 0 100 16 8 8 0 000-16zm-1 5h2v5h-2zm0 6h2v2h-2z"/></svg>`,
    title: "Svetlá",
    description: "Automatické spínanie a stmievanie osvetlenia aj na základe pohybových senzorov."
  },
 

];

export type Skill = (typeof skills)[number];

