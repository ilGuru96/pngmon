// digimon-db.js
// Linee evolutive Rookie -> Champion -> Ultimate -> Mega
//
// Nota:
// - Gli stage sono espliciti.
// - I buchi nelle linee sono consentiti.
// - Le special evolution / object evolution non sono gestite.
// - Un Digimon può essere usato come punto di partenza indipendentemente
//   dal suo stage originale, secondo le regole del gioco.
// - attribute: Vaccine / Data / Virus / Free

const DIGIMON_DATA = {

  // ============================================================
  // AGUMON
  // ============================================================

  "Agumon": {
    n: "Agumon",
    i: "Agumon.png",
    stage: "Rookie",
    attribute: "Vaccine",
    evolve: {
      fel: 100,
      to: ["Greymon", "GeoGreymon"]
    }
  },

  "Greymon": {
    n: "Greymon",
    i: "Greymon.png",
    stage: "Champion",
    attribute: "Vaccine",
    evolve: {
      fel: 100,
      to: ["MetalGreymon", "SkullGreymon"]
    }
  },

  "MetalGreymon": {
    n: "MetalGreymon",
    i: "MetalGreymon.png",
    stage: "Ultimate",
    attribute: "Vaccine",
    evolve: {
      fel: 100,
      to: ["WarGreymon", "BlackWarGreymon"]
    }
  },

  "WarGreymon": {
    n: "WarGreymon",
    i: "WarGreymon.png",
    stage: "Mega",
    attribute: "Vaccine",
    evolve: {
      fel: 100,
      to: []
    }
  },

  "BlackWarGreymon": {
    n: "BlackWarGreymon",
    i: "BlackWarGreymon.png",
    stage: "Mega",
    attribute: "Virus",
    evolve: {
      fel: 100,
      to: []
    }
  },


  // ============================================================
  // AGUMON -> GEO GREYMON
  // ============================================================

  "GeoGreymon": {
    n: "GeoGreymon",
    i: "GeoGreymon.png",
    stage: "Champion",
    attribute: "Vaccine",
    evolve: {
      fel: 100,
      to: ["WarGrowlmon", "RizeGreymon"]
    }
  },

  "WarGrowlmon": {
    n: "WarGrowlmon",
    i: "WarGrowlmon.png",
    stage: "Ultimate",
    attribute: "Virus",
    evolve: {
      fel: 100,
      to: ["WarGreymon", "BlackWarGreymon"]
    }
  },

  "RizeGreymon": {
    n: "RizeGreymon",
    i: "RizeGreymon.png",
    stage: "Ultimate",
    attribute: "Vaccine",
    evolve: {
      fel: 100,
      to: ["WarGreymon"]
    }
  },


  // ============================================================
  // GABUMON
  // ============================================================

  "Gabumon": {
    n: "Gabumon",
    i: "Gabumon.png",
    stage: "Rookie",
    attribute: "Data",
    evolve: {
      fel: 100,
      to: ["Garurumon"]
    }
  },

  "Garurumon": {
    n: "Garurumon",
    i: "Garurumon.png",
    stage: "Champion",
    attribute: "Data",
    evolve: {
      fel: 100,
      to: ["WereGarurumon", "BlackWereGarurumon"]
    }
  },

  "WereGarurumon": {
    n: "WereGarurumon",
    i: "WereGarurumon.png",
    stage: "Ultimate",
    attribute: "Data",
    evolve: {
      fel: 100,
      to: ["MetalGarurumon"]
    }
  },

  "MetalGarurumon": {
    n: "MetalGarurumon",
    i: "MetalGarurumon.png",
    stage: "Mega",
    attribute: "Data",
    evolve: {
      fel: 100,
      to: []
    }
  },


  // ============================================================
  // PATAMON
  // ============================================================

  "Patamon": {
    n: "Patamon",
    i: "Patamon.png",
    stage: "Rookie",
    attribute: "Data",
    evolve: {
      fel: 100,
      to: ["Angemon"]
    }
  },

  "Angemon": {
    n: "Angemon",
    i: "Angemon.png",
    stage: "Champion",
    attribute: "Vaccine",
    evolve: {
      fel: 100,
      to: []
    }
  },


  // ============================================================
  // GOMAMON
  // ============================================================

  "Gomamon": {
    n: "Gomamon",
    i: "Gomamon.png",
    stage: "Rookie",
    attribute: "Vaccine",
    evolve: {
      fel: 100,
      to: ["Ikkakumon"]
    }
  },

  "Ikkakumon": {
    n: "Ikkakumon",
    i: "Ikkakumon.png",
    stage: "Champion",
    attribute: "Vaccine",
    evolve: {
      fel: 100,
      to: ["Zudomon"]
    }
  },

  "Zudomon": {
    n: "Zudomon",
    i: "Zudomon.png",
    stage: "Ultimate",
    attribute: "Vaccine",
    evolve: {
      fel: 100,
      to: ["Vikemon"]
    }
  },

  "Vikemon": {
    n: "Vikemon",
    i: "Vikemon.png",
    stage: "Mega",
    attribute: "Free",
    evolve: {
      fel: 100,
      to: []
    }
  },


  // ============================================================
  // PALMON
  // ============================================================

  "Palmon": {
    n: "Palmon",
    i: "Palmon.png",
    stage: "Rookie",
    attribute: "Data",
    evolve: {
      fel: 100,
      to: ["Togemon"]
    }
  },

  "Togemon": {
    n: "Togemon",
    i: "Togemon.png",
    stage: "Champion",
    attribute: "Data",
    evolve: {
      fel: 100,
      to: ["Lillymon"]
    }
  },

  "Lillymon": {
    n: "Lillymon",
    i: "Lillymon.png",
    stage: "Ultimate",
    attribute: "Data",
    evolve: {
      fel: 100,
      to: ["Rosemon"]
    }
  },

  "Rosemon": {
    n: "Rosemon",
    i: "Rosemon.png",
    stage: "Mega",
    attribute: "Data",
    evolve: {
      fel: 100,
      to: []
    }
  },


  // ============================================================
  // TENTOMON
  // ============================================================

  "Tentomon": {
    n: "Tentomon",
    i: "Tentomon.png",
    stage: "Rookie",
    attribute: "Vaccine",
    evolve: {
      fel: 100,
      to: ["Kabuterimon"]
    }
  },

  "Kabuterimon": {
    n: "Kabuterimon",
    i: "Kabuterimon.png",
    stage: "Champion",
    attribute: "Vaccine",
    evolve: {
      fel: 100,
      to: ["MegaKabuterimon Blue", "MegaKabuterimon Red"]
    }
  },

  "MegaKabuterimon Blue": {
    n: "MegaKabuterimon Blue",
    i: "MegaKabuterimon Blue.png",
    stage: "Ultimate",
    attribute: "Vaccine",
    evolve: {
      fel: 100,
      to: ["HerculesKabuterimon"]
    }
  },

  "MegaKabuterimon Red": {
    n: "MegaKabuterimon Red",
    i: "MegaKabuterimon Red.png",
    stage: "Ultimate",
    attribute: "Virus",
    evolve: {
      fel: 100,
      to: []
    }
  },

  "HerculesKabuterimon": {
    n: "HerculesKabuterimon",
    i: "HerculesKabuterimon.png",
    stage: "Mega",
    attribute: "Vaccine",
    evolve: {
      fel: 100,
      to: []
    }
  },


  // ============================================================
  // BIYOMON
  // ============================================================

  "Biyomon": {
    n: "Biyomon",
    i: "Biyomon.png",
    stage: "Rookie",
    attribute: "Vaccine",
    evolve: {
      fel: 100,
      to: ["Birdramon"]
    }
  },

  "Birdramon": {
    n: "Birdramon",
    i: "Birdramon.png",
    stage: "Champion",
    attribute: "Vaccine",
    evolve: {
      fel: 100,
      to: ["Garudamon"]
    }
  },

  "Garudamon": {
    n: "Garudamon",
    i: "Garudamon.png",
    stage: "Ultimate",
    attribute: "Vaccine",
    evolve: {
      fel: 100,
      to: ["Phoenixmon"]
    }
  },

  "Phoenixmon": {
    n: "Phoenixmon",
    i: "Phoenixmon.png",
    stage: "Mega",
    attribute: "Vaccine",
    evolve: {
      fel: 100,
      to: []
    }
  },


  // ============================================================
  // GUILMON
  // ============================================================

  "Guilmon": {
    n: "Guilmon",
    i: "Guilmon.png",
    stage: "Rookie",
    attribute: "Virus",
    evolve: {
      fel: 100,
      to: ["Growlmon"]
    }
  },

  "Growlmon": {
    n: "Growlmon",
    i: "Growlmon.png",
    stage: "Champion",
    attribute: "Virus",
    evolve: {
      fel: 100,
      to: ["WarGrowlmon", "BlackWarGrowlmon"]
    }
  },

  "BlackWarGrowlmon": {
    n: "BlackWarGrowlmon",
    i: "BlackWarGrowlmon.png",
    stage: "Ultimate",
    attribute: "Virus",
    evolve: {
      fel: 100,
      to: ["WarGreymon"]
    }
  },


  // ============================================================
  // RENAMON
  // ============================================================

  "Renamon": {
    n: "Renamon",
    i: "Renamon.png",
    stage: "Rookie",
    attribute: "Data",
    evolve: {
      fel: 100,
      to: ["Kyubimon"]
    }
  },

  "Kyubimon": {
    n: "Kyubimon",
    i: "Kyubimon.png",
    stage: "Champion",
    attribute: "Data",
    evolve: {
      fel: 100,
      to: ["Taomon"]
    }
  },

  "Taomon": {
    n: "Taomon",
    i: "Taomon.png",
    stage: "Ultimate",
    attribute: "Data",
    evolve: {
      fel: 100,
      to: ["Sakuyamon"]
    }
  },

  "Sakuyamon": {
    n: "Sakuyamon",
    i: "Sakuyamon.png",
    stage: "Mega",
    attribute: "Data",
    evolve: {
      fel: 100,
      to: []
    }
  },


  // ============================================================
  // IMPMON
  // ============================================================

  "Impmon": {
    n: "Impmon",
    i: "Impmon.png",
    stage: "Rookie",
    attribute: "Virus",
    evolve: {
      fel: 100,
      to: ["Wizardmon"]
    }
  },

  "Wizardmon": {
    n: "Wizardmon",
    i: "Wizardmon.png",
    stage: "Champion",
    attribute: "Data",
    evolve: {
      fel: 100,
      to: ["Beelzemon"]
    }
  },

  "Beelzemon": {
    n: "Beelzemon",
    i: "Beelzemon.png",
    stage: "Mega",
    attribute: "Virus",
    evolve: {
      fel: 100,
      to: []
    }
  },


  // ============================================================
  // TERRIERMON
  // ============================================================

  "Terriermon": {
    n: "Terriermon",
    i: "Terriermon.png",
    stage: "Rookie",
    attribute: "Vaccine",
    evolve: {
      fel: 100,
      to: ["Gargomon"]
    }
  },

  "Gargomon": {
    n: "Gargomon",
    i: "Gargomon.png",
    stage: "Champion",
    attribute: "Vaccine",
    evolve: {
      fel: 100,
      to: ["MegaGargomon", "BlackMegaGargomon"]
    }
  },

  "MegaGargomon": {
    n: "MegaGargomon",
    i: "MegaGargomon.png",
    stage: "Ultimate",
    attribute: "Vaccine",
    evolve: {
      fel: 100,
      to: ["Rapidmon"]
    }
  },

  "Rapidmon": {
    n: "Rapidmon",
    i: "Rapidmon.png",
    stage: "Mega",
    attribute: "Vaccine",
    evolve: {
      fel: 100,
      to: []
    }
  },

  "BlackMegaGargomon": {
    n: "BlackMegaGargomon",
    i: "BlackMegaGargomon.png",
    stage: "Ultimate",
    attribute: "Virus",
    evolve: {
      fel: 100,
      to: ["BlackRapidmon"]
    }
  },

  "BlackRapidmon": {
    n: "BlackRapidmon",
    i: "BlackRapidmon.png",
    stage: "Mega",
    attribute: "Virus",
    evolve: {
      fel: 100,
      to: []
    }
  },


  // ============================================================
  // DORUMON
  // ============================================================

  "Dorumon": {
    n: "Dorumon",
    i: "Dorumon.png",
    stage: "Rookie",
    attribute: "Vaccine",
    evolve: {
      fel: 100,
      to: ["Dorugamon"]
    }
  },

  "Dorugamon": {
    n: "Dorugamon",
    i: "Dorugamon.png",
    stage: "Champion",
    attribute: "Data",
    evolve: {
      fel: 100,
      to: ["DoruGreymon"]
    }
  },

  "DoruGreymon": {
    n: "DoruGreymon",
    i: "DoruGreymon.png",
    stage: "Ultimate",
    attribute: "Data",
    evolve: {
      fel: 100,
      to: ["Dorugoramon"]
    }
  },

  "Dorugoramon": {
    n: "Dorugoramon",
    i: "Dorugoramon.png",
    stage: "Mega",
    attribute: "Data",
    evolve: {
      fel: 100,
      to: []
    }
  },


  // ============================================================
  // GAOMON
  // ============================================================

  "Gaomon": {
    n: "Gaomon",
    i: "Gaomon.png",
    stage: "Rookie",
    attribute: "Data",
    evolve: {
      fel: 100,
      to: ["Gaogamon"]
    }
  },

  "Gaogamon": {
    n: "Gaogamon",
    i: "Gaogamon.png",
    stage: "Champion",
    attribute: "Data",
    evolve: {
      fel: 100,
      to: ["MachGaogamon"]
    }
  },

  "MachGaogamon": {
    n: "MachGaogamon",
    i: "MachGaogamon.png",
    stage: "Ultimate",
    attribute: "Data",
    evolve: {
      fel: 100,
      to: []
    }
  },


  // ============================================================
  // KERAMON
  // ============================================================

  "Keramon": {
    n: "Keramon",
    i: "Keramon.png",
    stage: "Rookie",
    attribute: "Virus",
    evolve: {
      fel: 100,
      to: ["Infermon"]
    }
  },

  "Infermon": {
    n: "Infermon",
    i: "Infermon.png",
    stage: "Ultimate",
    attribute: "Virus",
    evolve: {
      fel: 100,
      to: ["Diaboromon"]
    }
  },

  "Diaboromon": {
    n: "Diaboromon",
    i: "Diaboromon.png",
    stage: "Mega",
    attribute: "Virus",
    evolve: {
      fel: 100,
      to: []
    }
  },


  // ============================================================
  // HAWKMON
  // ============================================================

  "Hawkmon": {
    n: "Hawkmon",
    i: "Hawkmon.png",
    stage: "Rookie",
    attribute: "Free",
    evolve: {
      fel: 100,
      to: ["Aquilamon"]
    }
  },

  "Aquilamon": {
    n: "Aquilamon",
    i: "Aquilamon.png",
    stage: "Champion",
    attribute: "Free",
    evolve: {
      fel: 100,
      to: ["Silphymon"]
    }
  },


  // ============================================================
  // ARMADILLOMON
  // ============================================================

  "Armadillomon": {
    n: "Armadillomon",
    i: "Armadillomon.png",
    stage: "Rookie",
    attribute: "Free",
    evolve: {
      fel: 100,
      to: ["Ankylomon"]
    }
  },

  "Ankylomon": {
    n: "Ankylomon",
    i: "Ankylomon.png",
    stage: "Champion",
    attribute: "Free",
    evolve: {
      fel: 100,
      to: []
    }
  },


  // ============================================================
  // WORMMON
  // ============================================================

  "Wormmon": {
    n: "Wormmon",
    i: "Wormmon.png",
    stage: "Rookie",
    attribute: "Free",
    evolve: {
      fel: 100,
      to: ["Stingmon"]
    }
  },

  "Stingmon": {
    n: "Stingmon",
    i: "Stingmon.png",
    stage: "Champion",
    attribute: "Free",
    evolve: {
      fel: 100,
      to: ["Dinobeemon"]
    }
  },

  "Dinobeemon": {
    n: "Dinobeemon",
    i: "Dinobeemon.png",
    stage: "Ultimate",
    attribute: "Free",
    evolve: {
      fel: 100,
      to: []
    }
  },


  // ============================================================
  // SALAMON
  // ============================================================

  "Salamon": {
    n: "Salamon",
    i: "Salamon.png",
    stage: "Rookie",
    attribute: "Vaccine",
    evolve: {
      fel: 100,
      to: ["Gatomon"]
    }
  },

  "Gatomon": {
    n: "Gatomon",
    i: "Gatomon.png",
    stage: "Champion",
    attribute: "Vaccine",
    evolve: {
      fel: 100,
      to: ["Angewomon"]
    }
  },


  // ============================================================
  // MYOTISMON
  // ============================================================

  "Myotismon": {
    n: "Myotismon",
    i: "Myotismon.png",
    stage: "Champion",
    attribute: "Virus",
    evolve: {
      fel: 100,
      to: ["VenomMyotismon", "MaloMyotismon"]
    }
  },

  "VenomMyotismon": {
    n: "VenomMyotismon",
    i: "VenomMyotismon.png",
    stage: "Mega",
    attribute: "Virus",
    evolve: {
      fel: 100,
      to: []
    }
  },

  "MaloMyotismon": {
    n: "MaloMyotismon",
    i: "MaloMyotismon.png",
    stage: "Mega",
    attribute: "Virus",
    evolve: {
      fel: 100,
      to: []
    }
  }

};


// ============================================================
// CONTROLLO INTEGRITÀ EVOLUZIONI
// ============================================================
//
// Controlla che ogni Digimon indicato come destinazione
// di un'evoluzione esista effettivamente nel database.

for (const [name, data] of Object.entries(DIGIMON_DATA)) {
  for (const target of data.evolve?.to ?? []) {
    if (!DIGIMON_DATA[target]) {
      console.warn(
        `[DIGIMON DB] ${name} evolve in "${target}", ma "${target}" non esiste nel database.`
      );
    }
  }
}


// ============================================================
// CONTROLLO ATTRIBUTI
// ============================================================

const VALID_ATTRIBUTES = [
  "Vaccine",
  "Data",
  "Virus",
  "Free"
];

for (const [name, data] of Object.entries(DIGIMON_DATA)) {
  if (!VALID_ATTRIBUTES.includes(data.attribute)) {
    console.warn(
      `[DIGIMON DB] ${name} ha un attributo non valido: "${data.attribute}".`
    );
  }
}


// ============================================================
// MAPPA INVERSA
// ============================================================

const BACK_MAP = {};

for (const key in DIGIMON_DATA) {
  const evo = DIGIMON_DATA[key].evolve?.to;

  if (Array.isArray(evo)) {
    evo.forEach(target => {
      if (!BACK_MAP[target]) {
        BACK_MAP[target] = [];
      }

      BACK_MAP[target].push(key);
    });
  }
}


// ============================================================
// ESPORTAZIONE
// ============================================================

if (typeof module !== "undefined" && module.exports) {
  module.exports = {
    DIGIMON_DATA,
    BACK_MAP
  };
}
