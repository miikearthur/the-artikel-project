// Word list ported from the original SwiftUI prototype (GermanNouns.swift).
export type Article = "der" | "die" | "das";

export interface GermanNoun {
  id: string;
  word: string;
  article: Article;
  translation: string;
}

const raw: Omit<GermanNoun, "id">[] = [
  // People & family
  { word: "Mann", article: "der", translation: "man" },
  { word: "Frau", article: "die", translation: "woman" },
  { word: "Kind", article: "das", translation: "child" },
  { word: "Junge", article: "der", translation: "boy" },
  { word: "Mädchen", article: "das", translation: "girl" },
  { word: "Familie", article: "die", translation: "family" },
  { word: "Vater", article: "der", translation: "father" },
  { word: "Mutter", article: "die", translation: "mother" },
  { word: "Bruder", article: "der", translation: "brother" },
  { word: "Schwester", article: "die", translation: "sister" },
  { word: "Baby", article: "das", translation: "baby" },
  { word: "Freund", article: "der", translation: "friend (male)" },
  { word: "Freundin", article: "die", translation: "friend (female)" },
  { word: "Lehrer", article: "der", translation: "teacher (male)" },
  { word: "Lehrerin", article: "die", translation: "teacher (female)" },
  { word: "Arzt", article: "der", translation: "doctor (male)" },
  { word: "Ärztin", article: "die", translation: "doctor (female)" },

  // Home
  { word: "Haus", article: "das", translation: "house" },
  { word: "Tisch", article: "der", translation: "table" },
  { word: "Tür", article: "die", translation: "door" },
  { word: "Fenster", article: "das", translation: "window" },
  { word: "Stuhl", article: "der", translation: "chair" },
  { word: "Lampe", article: "die", translation: "lamp" },
  { word: "Bett", article: "das", translation: "bed" },
  { word: "Schrank", article: "der", translation: "closet" },
  { word: "Küche", article: "die", translation: "kitchen" },
  { word: "Wohnzimmer", article: "das", translation: "living room" },
  { word: "Garten", article: "der", translation: "garden" },
  { word: "Wand", article: "die", translation: "wall" },
  { word: "Dach", article: "das", translation: "roof" },
  { word: "Spiegel", article: "der", translation: "mirror" },
  { word: "Uhr", article: "die", translation: "clock" },
  { word: "Bild", article: "das", translation: "picture" },

  // Nature
  { word: "Baum", article: "der", translation: "tree" },
  { word: "Blume", article: "die", translation: "flower" },
  { word: "Feld", article: "das", translation: "field" },
  { word: "Berg", article: "der", translation: "mountain" },
  { word: "Sonne", article: "die", translation: "sun" },
  { word: "Meer", article: "das", translation: "sea" },
  { word: "Wald", article: "der", translation: "forest" },
  { word: "Wolke", article: "die", translation: "cloud" },
  { word: "Wasser", article: "das", translation: "water" },
  { word: "Himmel", article: "der", translation: "sky" },
  { word: "Erde", article: "die", translation: "earth" },
  { word: "Tal", article: "das", translation: "valley" },
  { word: "Fluss", article: "der", translation: "river" },
  { word: "Insel", article: "die", translation: "island" },
  { word: "Eis", article: "das", translation: "ice" },
  { word: "Schnee", article: "der", translation: "snow" },
  { word: "Luft", article: "die", translation: "air" },
  { word: "Feuer", article: "das", translation: "fire" },

  // Animals
  { word: "Hund", article: "der", translation: "dog" },
  { word: "Katze", article: "die", translation: "cat" },
  { word: "Pferd", article: "das", translation: "horse" },
  { word: "Vogel", article: "der", translation: "bird" },
  { word: "Kuh", article: "die", translation: "cow" },
  { word: "Schaf", article: "das", translation: "sheep" },
  { word: "Fisch", article: "der", translation: "fish" },
  { word: "Maus", article: "die", translation: "mouse" },
  { word: "Schwein", article: "das", translation: "pig" },

  // Food & drink
  { word: "Apfel", article: "der", translation: "apple" },
  { word: "Banane", article: "die", translation: "banana" },
  { word: "Brot", article: "das", translation: "bread" },
  { word: "Käse", article: "der", translation: "cheese" },
  { word: "Milch", article: "die", translation: "milk" },
  { word: "Ei", article: "das", translation: "egg" },
  { word: "Zucker", article: "der", translation: "sugar" },
  { word: "Butter", article: "die", translation: "butter" },
  { word: "Salz", article: "das", translation: "salt" },
  { word: "Kaffee", article: "der", translation: "coffee" },
  { word: "Suppe", article: "die", translation: "soup" },
  { word: "Fleisch", article: "das", translation: "meat" },
  { word: "Reis", article: "der", translation: "rice" },
  { word: "Kartoffel", article: "die", translation: "potato" },
  { word: "Gemüse", article: "das", translation: "vegetable" },
  { word: "Wein", article: "der", translation: "wine" },
  { word: "Torte", article: "die", translation: "cake" },

  // Time & weather
  { word: "Tag", article: "der", translation: "day" },
  { word: "Woche", article: "die", translation: "week" },
  { word: "Jahr", article: "das", translation: "year" },
  { word: "Monat", article: "der", translation: "month" },
  { word: "Minute", article: "die", translation: "minute" },
  { word: "Wetter", article: "das", translation: "weather" },
  { word: "Regen", article: "der", translation: "rain" },
  { word: "Nacht", article: "die", translation: "night" },
  { word: "Wochenende", article: "das", translation: "weekend" },
  { word: "Sommer", article: "der", translation: "summer" },
  { word: "Zeit", article: "die", translation: "time" },
  { word: "Licht", article: "das", translation: "light" },

  // Travel & city
  { word: "Zug", article: "der", translation: "train" },
  { word: "Straße", article: "die", translation: "street" },
  { word: "Auto", article: "das", translation: "car" },
  { word: "Bus", article: "der", translation: "bus" },
  { word: "Brücke", article: "die", translation: "bridge" },
  { word: "Fahrrad", article: "das", translation: "bicycle" },
  { word: "Flughafen", article: "der", translation: "airport" },
  { word: "Stadt", article: "die", translation: "city" },
  { word: "Dorf", article: "das", translation: "village" },
  { word: "Park", article: "der", translation: "park" },
  { word: "Reise", article: "die", translation: "trip" },
  { word: "Land", article: "das", translation: "country" },

  // Work & objects
  { word: "Computer", article: "der", translation: "computer" },
  { word: "Tasche", article: "die", translation: "bag" },
  { word: "Handy", article: "das", translation: "cell phone" },
  { word: "Stift", article: "der", translation: "pen" },
  { word: "Arbeit", article: "die", translation: "work" },
  { word: "Buch", article: "das", translation: "book" },
  { word: "Job", article: "der", translation: "job" },
  { word: "Firma", article: "die", translation: "company" },
  { word: "Büro", article: "das", translation: "office" },
  { word: "Preis", article: "der", translation: "price" },
  { word: "Bank", article: "die", translation: "bank" },
  { word: "Geld", article: "das", translation: "money" },

  // Culture & leisure
  { word: "Film", article: "der", translation: "movie" },
  { word: "Musik", article: "die", translation: "music" },
  { word: "Spiel", article: "das", translation: "game" },
  { word: "Sport", article: "der", translation: "sport" },
  { word: "Kunst", article: "die", translation: "art" },
  { word: "Theater", article: "das", translation: "theater" },
  { word: "Ball", article: "der", translation: "ball" },
  { word: "Mannschaft", article: "die", translation: "team" },
  { word: "Fest", article: "das", translation: "festival" },
];

export const GERMAN_NOUNS: GermanNoun[] = raw.map((n, i) => ({ id: String(i), ...n }));
