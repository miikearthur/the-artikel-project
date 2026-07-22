export type Article = "der" | "die" | "das";
export type Level = "a1" | "a2" | "b1" | "b2" | "c1" | "c2";

export const LEVELS: Level[] = ["a1", "a2", "b1", "b2", "c1", "c2"];

export interface GermanNoun {
  id: string;
  word: string;
  article: Article;
  translation: string;
  category: string;
}

// A1 word list: everyday, concrete, high-frequency nouns a true beginner
// meets first. Grouped by topic so the app can offer category filters.
const a1Words: Omit<GermanNoun, "id">[] = [
// Familie & Personen
  { word: "Mann", article: "der", translation: "man", category: "Familie & Personen" },
  { word: "Frau", article: "die", translation: "woman", category: "Familie & Personen" },
  { word: "Kind", article: "das", translation: "child", category: "Familie & Personen" },
  { word: "Junge", article: "der", translation: "boy", category: "Familie & Personen" },
  { word: "Mädchen", article: "das", translation: "girl", category: "Familie & Personen" },
  { word: "Baby", article: "das", translation: "baby", category: "Familie & Personen" },
  { word: "Vater", article: "der", translation: "father", category: "Familie & Personen" },
  { word: "Mutter", article: "die", translation: "mother", category: "Familie & Personen" },
  { word: "Eltern", article: "die", translation: "parents", category: "Familie & Personen" },
  { word: "Bruder", article: "der", translation: "brother", category: "Familie & Personen" },
  { word: "Schwester", article: "die", translation: "sister", category: "Familie & Personen" },
  { word: "Sohn", article: "der", translation: "son", category: "Familie & Personen" },
  { word: "Tochter", article: "die", translation: "daughter", category: "Familie & Personen" },
  { word: "Großvater", article: "der", translation: "grandfather", category: "Familie & Personen" },
  { word: "Großmutter", article: "die", translation: "grandmother", category: "Familie & Personen" },
  { word: "Opa", article: "der", translation: "grandpa", category: "Familie & Personen" },
  { word: "Oma", article: "die", translation: "grandma", category: "Familie & Personen" },
  { word: "Onkel", article: "der", translation: "uncle", category: "Familie & Personen" },
  { word: "Tante", article: "die", translation: "aunt", category: "Familie & Personen" },
  { word: "Cousin", article: "der", translation: "cousin (male)", category: "Familie & Personen" },
  { word: "Cousine", article: "die", translation: "cousin (female)", category: "Familie & Personen" },
  { word: "Familie", article: "die", translation: "family", category: "Familie & Personen" },
  { word: "Freund", article: "der", translation: "friend (male)", category: "Familie & Personen" },
  { word: "Freundin", article: "die", translation: "friend (female)", category: "Familie & Personen" },

  // Körperteile
  { word: "Kopf", article: "der", translation: "head", category: "Körperteile" },
  { word: "Gesicht", article: "das", translation: "face", category: "Körperteile" },
  { word: "Haar", article: "das", translation: "hair", category: "Körperteile" },
  { word: "Auge", article: "das", translation: "eye", category: "Körperteile" },
  { word: "Ohr", article: "das", translation: "ear", category: "Körperteile" },
  { word: "Nase", article: "die", translation: "nose", category: "Körperteile" },
  { word: "Mund", article: "der", translation: "mouth", category: "Körperteile" },
  { word: "Zahn", article: "der", translation: "tooth", category: "Körperteile" },
  { word: "Zunge", article: "die", translation: "tongue", category: "Körperteile" },
  { word: "Hals", article: "der", translation: "neck", category: "Körperteile" },
  { word: "Schulter", article: "die", translation: "shoulder", category: "Körperteile" },
  { word: "Arm", article: "der", translation: "arm", category: "Körperteile" },
  { word: "Hand", article: "die", translation: "hand", category: "Körperteile" },
  { word: "Finger", article: "der", translation: "finger", category: "Körperteile" },
  { word: "Bauch", article: "der", translation: "belly", category: "Körperteile" },
  { word: "Rücken", article: "der", translation: "back", category: "Körperteile" },
  { word: "Bein", article: "das", translation: "leg", category: "Körperteile" },
  { word: "Knie", article: "das", translation: "knee", category: "Körperteile" },
  { word: "Fuß", article: "der", translation: "foot", category: "Körperteile" },

  // Haustiere & Bauernhoftiere
  { word: "Hund", article: "der", translation: "dog", category: "Haustiere & Bauernhoftiere" },
  { word: "Katze", article: "die", translation: "cat", category: "Haustiere & Bauernhoftiere" },
  { word: "Hamster", article: "der", translation: "hamster", category: "Haustiere & Bauernhoftiere" },
  { word: "Kaninchen", article: "das", translation: "rabbit", category: "Haustiere & Bauernhoftiere" },
  { word: "Vogel", article: "der", translation: "bird", category: "Haustiere & Bauernhoftiere" },
  { word: "Pferd", article: "das", translation: "horse", category: "Haustiere & Bauernhoftiere" },
  { word: "Kuh", article: "die", translation: "cow", category: "Haustiere & Bauernhoftiere" },
  { word: "Schwein", article: "das", translation: "pig", category: "Haustiere & Bauernhoftiere" },
  { word: "Schaf", article: "das", translation: "sheep", category: "Haustiere & Bauernhoftiere" },
  { word: "Ziege", article: "die", translation: "goat", category: "Haustiere & Bauernhoftiere" },
  { word: "Huhn", article: "das", translation: "chicken", category: "Haustiere & Bauernhoftiere" },
  { word: "Hahn", article: "der", translation: "rooster", category: "Haustiere & Bauernhoftiere" },
  { word: "Ente", article: "die", translation: "duck", category: "Haustiere & Bauernhoftiere" },
  { word: "Gans", article: "die", translation: "goose", category: "Haustiere & Bauernhoftiere" },
  { word: "Esel", article: "der", translation: "donkey", category: "Haustiere & Bauernhoftiere" },
  { word: "Maus", article: "die", translation: "mouse", category: "Haustiere & Bauernhoftiere" },
  { word: "Ratte", article: "die", translation: "rat", category: "Haustiere & Bauernhoftiere" },

  // Wilde Tiere & Zootiere
  { word: "Löwe", article: "der", translation: "lion", category: "Wilde Tiere & Zootiere" },
  { word: "Tiger", article: "der", translation: "tiger", category: "Wilde Tiere & Zootiere" },
  { word: "Elefant", article: "der", translation: "elephant", category: "Wilde Tiere & Zootiere" },
  { word: "Bär", article: "der", translation: "bear", category: "Wilde Tiere & Zootiere" },
  { word: "Wolf", article: "der", translation: "wolf", category: "Wilde Tiere & Zootiere" },
  { word: "Fuchs", article: "der", translation: "fox", category: "Wilde Tiere & Zootiere" },
  { word: "Hirsch", article: "der", translation: "deer", category: "Wilde Tiere & Zootiere" },
  { word: "Affe", article: "der", translation: "monkey", category: "Wilde Tiere & Zootiere" },
  { word: "Giraffe", article: "die", translation: "giraffe", category: "Wilde Tiere & Zootiere" },
  { word: "Zebra", article: "das", translation: "zebra", category: "Wilde Tiere & Zootiere" },
  { word: "Krokodil", article: "das", translation: "crocodile", category: "Wilde Tiere & Zootiere" },
  { word: "Schlange", article: "die", translation: "snake", category: "Wilde Tiere & Zootiere" },
  { word: "Frosch", article: "der", translation: "frog", category: "Wilde Tiere & Zootiere" },
  { word: "Eichhörnchen", article: "das", translation: "squirrel", category: "Wilde Tiere & Zootiere" },
  { word: "Igel", article: "der", translation: "hedgehog", category: "Wilde Tiere & Zootiere" },
  { word: "Kamel", article: "das", translation: "camel", category: "Wilde Tiere & Zootiere" },

  // Vögel, Insekten & Meerestiere
  { word: "Taube", article: "die", translation: "pigeon", category: "Vögel, Insekten & Meerestiere" },
  { word: "Spatz", article: "der", translation: "sparrow", category: "Vögel, Insekten & Meerestiere" },
  { word: "Eule", article: "die", translation: "owl", category: "Vögel, Insekten & Meerestiere" },
  { word: "Storch", article: "der", translation: "stork", category: "Vögel, Insekten & Meerestiere" },
  { word: "Schwan", article: "der", translation: "swan", category: "Vögel, Insekten & Meerestiere" },
  { word: "Adler", article: "der", translation: "eagle", category: "Vögel, Insekten & Meerestiere" },
  { word: "Biene", article: "die", translation: "bee", category: "Vögel, Insekten & Meerestiere" },
  { word: "Fliege", article: "die", translation: "fly", category: "Vögel, Insekten & Meerestiere" },
  { word: "Mücke", article: "die", translation: "mosquito", category: "Vögel, Insekten & Meerestiere" },
  { word: "Spinne", article: "die", translation: "spider", category: "Vögel, Insekten & Meerestiere" },
  { word: "Schmetterling", article: "der", translation: "butterfly", category: "Vögel, Insekten & Meerestiere" },
  { word: "Ameise", article: "die", translation: "ant", category: "Vögel, Insekten & Meerestiere" },
  { word: "Käfer", article: "der", translation: "beetle", category: "Vögel, Insekten & Meerestiere" },
  { word: "Wurm", article: "der", translation: "worm", category: "Vögel, Insekten & Meerestiere" },
  { word: "Hai", article: "der", translation: "shark", category: "Vögel, Insekten & Meerestiere" },
  { word: "Wal", article: "der", translation: "whale", category: "Vögel, Insekten & Meerestiere" },
  { word: "Delfin", article: "der", translation: "dolphin", category: "Vögel, Insekten & Meerestiere" },

  // Obst
  { word: "Apfel", article: "der", translation: "apple", category: "Obst" },
  { word: "Birne", article: "die", translation: "pear", category: "Obst" },
  { word: "Banane", article: "die", translation: "banana", category: "Obst" },
  { word: "Orange", article: "die", translation: "orange", category: "Obst" },
  { word: "Zitrone", article: "die", translation: "lemon", category: "Obst" },
  { word: "Traube", article: "die", translation: "grape", category: "Obst" },
  { word: "Erdbeere", article: "die", translation: "strawberry", category: "Obst" },
  { word: "Kirsche", article: "die", translation: "cherry", category: "Obst" },
  { word: "Pfirsich", article: "der", translation: "peach", category: "Obst" },
  { word: "Pflaume", article: "die", translation: "plum", category: "Obst" },
  { word: "Melone", article: "die", translation: "melon", category: "Obst" },
  { word: "Ananas", article: "die", translation: "pineapple", category: "Obst" },
  { word: "Mango", article: "die", translation: "mango", category: "Obst" },
  { word: "Kokosnuss", article: "die", translation: "coconut", category: "Obst" },

  // Gemüse
  { word: "Gemüse", article: "das", translation: "vegetable", category: "Gemüse" },
  { word: "Kartoffel", article: "die", translation: "potato", category: "Gemüse" },
  { word: "Tomate", article: "die", translation: "tomato", category: "Gemüse" },
  { word: "Gurke", article: "die", translation: "cucumber", category: "Gemüse" },
  { word: "Karotte", article: "die", translation: "carrot", category: "Gemüse" },
  { word: "Zwiebel", article: "die", translation: "onion", category: "Gemüse" },
  { word: "Knoblauch", article: "der", translation: "garlic", category: "Gemüse" },
  { word: "Paprika", article: "die", translation: "bell pepper", category: "Gemüse" },
  { word: "Salat", article: "der", translation: "lettuce/salad", category: "Gemüse" },
  { word: "Kohl", article: "der", translation: "cabbage", category: "Gemüse" },
  { word: "Erbse", article: "die", translation: "pea", category: "Gemüse" },
  { word: "Bohne", article: "die", translation: "bean", category: "Gemüse" },
  { word: "Mais", article: "der", translation: "corn", category: "Gemüse" },
  { word: "Pilz", article: "der", translation: "mushroom", category: "Gemüse" },

  // Brot & Milchprodukte
  { word: "Brot", article: "das", translation: "bread", category: "Brot & Milchprodukte" },
  { word: "Brötchen", article: "das", translation: "bread roll", category: "Brot & Milchprodukte" },
  { word: "Toast", article: "der", translation: "toast", category: "Brot & Milchprodukte" },
  { word: "Mehl", article: "das", translation: "flour", category: "Brot & Milchprodukte" },
  { word: "Reis", article: "der", translation: "rice", category: "Brot & Milchprodukte" },
  { word: "Nudel", article: "die", translation: "noodle/pasta", category: "Brot & Milchprodukte" },
  { word: "Ei", article: "das", translation: "egg", category: "Brot & Milchprodukte" },
  { word: "Milch", article: "die", translation: "milk", category: "Brot & Milchprodukte" },
  { word: "Käse", article: "der", translation: "cheese", category: "Brot & Milchprodukte" },
  { word: "Butter", article: "die", translation: "butter", category: "Brot & Milchprodukte" },
  { word: "Joghurt", article: "der", translation: "yogurt", category: "Brot & Milchprodukte" },
  { word: "Sahne", article: "die", translation: "cream", category: "Brot & Milchprodukte" },
  { word: "Zucker", article: "der", translation: "sugar", category: "Brot & Milchprodukte" },
  { word: "Salz", article: "das", translation: "salt", category: "Brot & Milchprodukte" },
  { word: "Pfeffer", article: "der", translation: "pepper (spice)", category: "Brot & Milchprodukte" },

  // Fleisch & Fisch
  { word: "Fleisch", article: "das", translation: "meat", category: "Fleisch & Fisch" },
  { word: "Hähnchen", article: "das", translation: "chicken (meat)", category: "Fleisch & Fisch" },
  { word: "Wurst", article: "die", translation: "sausage", category: "Fleisch & Fisch" },
  { word: "Schinken", article: "der", translation: "ham", category: "Fleisch & Fisch" },
  { word: "Steak", article: "das", translation: "steak", category: "Fleisch & Fisch" },

  // Getränke
  { word: "Wasser", article: "das", translation: "water", category: "Getränke" },
  { word: "Saft", article: "der", translation: "juice", category: "Getränke" },
  { word: "Kaffee", article: "der", translation: "coffee", category: "Getränke" },
  { word: "Tee", article: "der", translation: "tea", category: "Getränke" },
  { word: "Limonade", article: "die", translation: "lemonade", category: "Getränke" },
  { word: "Cola", article: "die", translation: "cola", category: "Getränke" },
  { word: "Bier", article: "das", translation: "beer", category: "Getränke" },
  { word: "Wein", article: "der", translation: "wine", category: "Getränke" },
  { word: "Getränk", article: "das", translation: "drink", category: "Getränke" },

  // Süßigkeiten & Snacks
  { word: "Schokolade", article: "die", translation: "chocolate", category: "Süßigkeiten & Snacks" },
  { word: "Kuchen", article: "der", translation: "cake", category: "Süßigkeiten & Snacks" },
  { word: "Keks", article: "der", translation: "cookie", category: "Süßigkeiten & Snacks" },
  { word: "Bonbon", article: "das", translation: "candy", category: "Süßigkeiten & Snacks" },
  { word: "Eis", article: "das", translation: "ice cream", category: "Süßigkeiten & Snacks" },
  { word: "Torte", article: "die", translation: "layer cake", category: "Süßigkeiten & Snacks" },
  { word: "Chips", article: "die", translation: "chips", category: "Süßigkeiten & Snacks" },

  // Essen & Geschirr
  { word: "Frühstück", article: "das", translation: "breakfast", category: "Essen & Geschirr" },
  { word: "Mittagessen", article: "das", translation: "lunch", category: "Essen & Geschirr" },
  { word: "Abendessen", article: "das", translation: "dinner", category: "Essen & Geschirr" },
  { word: "Teller", article: "der", translation: "plate", category: "Essen & Geschirr" },
  { word: "Schüssel", article: "die", translation: "bowl", category: "Essen & Geschirr" },
  { word: "Tasse", article: "die", translation: "cup", category: "Essen & Geschirr" },
  { word: "Glas", article: "das", translation: "glass", category: "Essen & Geschirr" },
  { word: "Gabel", article: "die", translation: "fork", category: "Essen & Geschirr" },
  { word: "Messer", article: "das", translation: "knife", category: "Essen & Geschirr" },
  { word: "Löffel", article: "der", translation: "spoon", category: "Essen & Geschirr" },

  // Küche
  { word: "Küche", article: "die", translation: "kitchen", category: "Küche" },
  { word: "Herd", article: "der", translation: "stove", category: "Küche" },
  { word: "Ofen", article: "der", translation: "oven", category: "Küche" },
  { word: "Kühlschrank", article: "der", translation: "refrigerator", category: "Küche" },
  { word: "Spüle", article: "die", translation: "sink", category: "Küche" },
  { word: "Topf", article: "der", translation: "pot", category: "Küche" },
  { word: "Pfanne", article: "die", translation: "pan", category: "Küche" },
  { word: "Kanne", article: "die", translation: "kettle/pot", category: "Küche" },
  { word: "Mikrowelle", article: "die", translation: "microwave", category: "Küche" },

  // Haus & Zimmer
  { word: "Haus", article: "das", translation: "house", category: "Haus & Zimmer" },
  { word: "Wohnung", article: "die", translation: "apartment", category: "Haus & Zimmer" },
  { word: "Zimmer", article: "das", translation: "room", category: "Haus & Zimmer" },
  { word: "Wohnzimmer", article: "das", translation: "living room", category: "Haus & Zimmer" },
  { word: "Schlafzimmer", article: "das", translation: "bedroom", category: "Haus & Zimmer" },
  { word: "Badezimmer", article: "das", translation: "bathroom", category: "Haus & Zimmer" },
  { word: "Flur", article: "der", translation: "hallway", category: "Haus & Zimmer" },
  { word: "Keller", article: "der", translation: "basement", category: "Haus & Zimmer" },
  { word: "Dach", article: "das", translation: "roof", category: "Haus & Zimmer" },
  { word: "Wand", article: "die", translation: "wall", category: "Haus & Zimmer" },
  { word: "Boden", article: "der", translation: "floor", category: "Haus & Zimmer" },
  { word: "Tür", article: "die", translation: "door", category: "Haus & Zimmer" },
  { word: "Fenster", article: "das", translation: "window", category: "Haus & Zimmer" },
  { word: "Treppe", article: "die", translation: "staircase", category: "Haus & Zimmer" },

  // Wohnzimmer & Möbel
  { word: "Tisch", article: "der", translation: "table", category: "Wohnzimmer & Möbel" },
  { word: "Stuhl", article: "der", translation: "chair", category: "Wohnzimmer & Möbel" },
  { word: "Sofa", article: "das", translation: "sofa", category: "Wohnzimmer & Möbel" },
  { word: "Sessel", article: "der", translation: "armchair", category: "Wohnzimmer & Möbel" },
  { word: "Regal", article: "das", translation: "shelf", category: "Wohnzimmer & Möbel" },
  { word: "Schrank", article: "der", translation: "closet/cabinet", category: "Wohnzimmer & Möbel" },
  { word: "Lampe", article: "die", translation: "lamp", category: "Wohnzimmer & Möbel" },
  { word: "Spiegel", article: "der", translation: "mirror", category: "Wohnzimmer & Möbel" },
  { word: "Teppich", article: "der", translation: "carpet", category: "Wohnzimmer & Möbel" },

  // Schlafzimmer
  { word: "Bett", article: "das", translation: "bed", category: "Schlafzimmer" },
  { word: "Kissen", article: "das", translation: "pillow", category: "Schlafzimmer" },
  { word: "Decke", article: "die", translation: "blanket", category: "Schlafzimmer" },
  { word: "Wecker", article: "der", translation: "alarm clock", category: "Schlafzimmer" },

  // Badezimmer
  { word: "Dusche", article: "die", translation: "shower", category: "Badezimmer" },
  { word: "Badewanne", article: "die", translation: "bathtub", category: "Badezimmer" },
  { word: "Toilette", article: "die", translation: "toilet", category: "Badezimmer" },
  { word: "Waschbecken", article: "das", translation: "sink (bathroom)", category: "Badezimmer" },
  { word: "Seife", article: "die", translation: "soap", category: "Badezimmer" },
  { word: "Handtuch", article: "das", translation: "towel", category: "Badezimmer" },
  { word: "Zahnbürste", article: "die", translation: "toothbrush", category: "Badezimmer" },
  { word: "Zahnpasta", article: "die", translation: "toothpaste", category: "Badezimmer" },

  // Kleidung
  { word: "Kleidung", article: "die", translation: "clothing", category: "Kleidung" },
  { word: "Hemd", article: "das", translation: "shirt", category: "Kleidung" },
  { word: "T-Shirt", article: "das", translation: "t-shirt", category: "Kleidung" },
  { word: "Hose", article: "die", translation: "pants", category: "Kleidung" },
  { word: "Jeans", article: "die", translation: "jeans", category: "Kleidung" },
  { word: "Rock", article: "der", translation: "skirt", category: "Kleidung" },
  { word: "Kleid", article: "das", translation: "dress", category: "Kleidung" },
  { word: "Pullover", article: "der", translation: "sweater", category: "Kleidung" },
  { word: "Jacke", article: "die", translation: "jacket", category: "Kleidung" },
  { word: "Mantel", article: "der", translation: "coat", category: "Kleidung" },
  { word: "Schuh", article: "der", translation: "shoe", category: "Kleidung" },
  { word: "Stiefel", article: "der", translation: "boot", category: "Kleidung" },
  { word: "Socke", article: "die", translation: "sock", category: "Kleidung" },
  { word: "Unterwäsche", article: "die", translation: "underwear", category: "Kleidung" },
  { word: "Mütze", article: "die", translation: "cap/beanie", category: "Kleidung" },
  { word: "Hut", article: "der", translation: "hat", category: "Kleidung" },
  { word: "Schal", article: "der", translation: "scarf", category: "Kleidung" },
  { word: "Handschuh", article: "der", translation: "glove", category: "Kleidung" },

  // Accessoires & Schmuck
  { word: "Tasche", article: "die", translation: "bag", category: "Accessoires & Schmuck" },
  { word: "Rucksack", article: "der", translation: "backpack", category: "Accessoires & Schmuck" },
  { word: "Brille", article: "die", translation: "glasses", category: "Accessoires & Schmuck" },
  { word: "Uhr", article: "die", translation: "clock/watch", category: "Accessoires & Schmuck" },
  { word: "Ring", article: "der", translation: "ring", category: "Accessoires & Schmuck" },
  { word: "Kette", article: "die", translation: "necklace", category: "Accessoires & Schmuck" },
  { word: "Ohrring", article: "der", translation: "earring", category: "Accessoires & Schmuck" },
  { word: "Armband", article: "das", translation: "bracelet", category: "Accessoires & Schmuck" },
  { word: "Schirm", article: "der", translation: "umbrella", category: "Accessoires & Schmuck" },

  // Schule & Büro
  { word: "Schule", article: "die", translation: "school", category: "Schule & Büro" },
  { word: "Klasse", article: "die", translation: "class", category: "Schule & Büro" },
  { word: "Lehrer", article: "der", translation: "teacher (male)", category: "Schule & Büro" },
  { word: "Lehrerin", article: "die", translation: "teacher (female)", category: "Schule & Büro" },
  { word: "Schüler", article: "der", translation: "pupil (male)", category: "Schule & Büro" },
  { word: "Schülerin", article: "die", translation: "pupil (female)", category: "Schule & Büro" },
  { word: "Buch", article: "das", translation: "book", category: "Schule & Büro" },
  { word: "Heft", article: "das", translation: "notebook", category: "Schule & Büro" },
  { word: "Stift", article: "der", translation: "pen", category: "Schule & Büro" },
  { word: "Bleistift", article: "der", translation: "pencil", category: "Schule & Büro" },
  { word: "Radiergummi", article: "der", translation: "eraser", category: "Schule & Büro" },
  { word: "Lineal", article: "das", translation: "ruler", category: "Schule & Büro" },
  { word: "Schere", article: "die", translation: "scissors", category: "Schule & Büro" },
  { word: "Kleber", article: "der", translation: "glue", category: "Schule & Büro" },
  { word: "Tafel", article: "die", translation: "blackboard", category: "Schule & Büro" },

  // Wochentage
  { word: "Montag", article: "der", translation: "Monday", category: "Wochentage" },
  { word: "Dienstag", article: "der", translation: "Tuesday", category: "Wochentage" },
  { word: "Mittwoch", article: "der", translation: "Wednesday", category: "Wochentage" },
  { word: "Donnerstag", article: "der", translation: "Thursday", category: "Wochentage" },
  { word: "Freitag", article: "der", translation: "Friday", category: "Wochentage" },
  { word: "Samstag", article: "der", translation: "Saturday", category: "Wochentage" },
  { word: "Sonntag", article: "der", translation: "Sunday", category: "Wochentage" },

  // Monate
  { word: "Januar", article: "der", translation: "January", category: "Monate" },
  { word: "Februar", article: "der", translation: "February", category: "Monate" },
  { word: "März", article: "der", translation: "March", category: "Monate" },
  { word: "April", article: "der", translation: "April", category: "Monate" },
  { word: "Mai", article: "der", translation: "May", category: "Monate" },
  { word: "Juni", article: "der", translation: "June", category: "Monate" },
  { word: "Juli", article: "der", translation: "July", category: "Monate" },
  { word: "August", article: "der", translation: "August", category: "Monate" },
  { word: "September", article: "der", translation: "September", category: "Monate" },
  { word: "Oktober", article: "der", translation: "October", category: "Monate" },
  { word: "November", article: "der", translation: "November", category: "Monate" },
  { word: "Dezember", article: "der", translation: "December", category: "Monate" },

  // Jahreszeiten & Tageszeiten
  { word: "Frühling", article: "der", translation: "spring", category: "Jahreszeiten & Tageszeiten" },
  { word: "Sommer", article: "der", translation: "summer", category: "Jahreszeiten & Tageszeiten" },
  { word: "Herbst", article: "der", translation: "autumn", category: "Jahreszeiten & Tageszeiten" },
  { word: "Winter", article: "der", translation: "winter", category: "Jahreszeiten & Tageszeiten" },
  { word: "Morgen", article: "der", translation: "morning", category: "Jahreszeiten & Tageszeiten" },
  { word: "Mittag", article: "der", translation: "noon", category: "Jahreszeiten & Tageszeiten" },
  { word: "Nachmittag", article: "der", translation: "afternoon", category: "Jahreszeiten & Tageszeiten" },
  { word: "Abend", article: "der", translation: "evening", category: "Jahreszeiten & Tageszeiten" },

  // Zeit & Kalender
  { word: "Zeit", article: "die", translation: "time", category: "Zeit & Kalender" },
  { word: "Tag", article: "der", translation: "day", category: "Zeit & Kalender" },
  { word: "Woche", article: "die", translation: "week", category: "Zeit & Kalender" },
  { word: "Monat", article: "der", translation: "month", category: "Zeit & Kalender" },
  { word: "Jahr", article: "das", translation: "year", category: "Zeit & Kalender" },
  { word: "Stunde", article: "die", translation: "hour", category: "Zeit & Kalender" },
  { word: "Minute", article: "die", translation: "minute", category: "Zeit & Kalender" },
  { word: "Sekunde", article: "die", translation: "second", category: "Zeit & Kalender" },

  // Wetter
  { word: "Wetter", article: "das", translation: "weather", category: "Wetter" },
  { word: "Sonne", article: "die", translation: "sun", category: "Wetter" },
  { word: "Regen", article: "der", translation: "rain", category: "Wetter" },
  { word: "Schnee", article: "der", translation: "snow", category: "Wetter" },
  { word: "Wind", article: "der", translation: "wind", category: "Wetter" },
  { word: "Wolke", article: "die", translation: "cloud", category: "Wetter" },
  { word: "Himmel", article: "der", translation: "sky", category: "Wetter" },
  { word: "Nebel", article: "der", translation: "fog", category: "Wetter" },
  { word: "Sturm", article: "der", translation: "storm", category: "Wetter" },
  { word: "Gewitter", article: "das", translation: "thunderstorm", category: "Wetter" },
  { word: "Blitz", article: "der", translation: "lightning", category: "Wetter" },

  // Natur
  { word: "Natur", article: "die", translation: "nature", category: "Natur" },
  { word: "Baum", article: "der", translation: "tree", category: "Natur" },
  { word: "Blume", article: "die", translation: "flower", category: "Natur" },
  { word: "Gras", article: "das", translation: "grass", category: "Natur" },
  { word: "Wald", article: "der", translation: "forest", category: "Natur" },
  { word: "Berg", article: "der", translation: "mountain", category: "Natur" },
  { word: "Tal", article: "das", translation: "valley", category: "Natur" },
  { word: "Fluss", article: "der", translation: "river", category: "Natur" },
  { word: "See", article: "der", translation: "lake", category: "Natur" },
  { word: "Meer", article: "das", translation: "sea", category: "Natur" },
  { word: "Strand", article: "der", translation: "beach", category: "Natur" },
  { word: "Insel", article: "die", translation: "island", category: "Natur" },
  { word: "Wüste", article: "die", translation: "desert", category: "Natur" },
  { word: "Stein", article: "der", translation: "stone", category: "Natur" },

  // Pflanzen & Garten
  { word: "Pflanze", article: "die", translation: "plant", category: "Pflanzen & Garten" },
  { word: "Blatt", article: "das", translation: "leaf", category: "Pflanzen & Garten" },
  { word: "Wurzel", article: "die", translation: "root", category: "Pflanzen & Garten" },
  { word: "Ast", article: "der", translation: "branch", category: "Pflanzen & Garten" },
  { word: "Rose", article: "die", translation: "rose", category: "Pflanzen & Garten" },
  { word: "Tulpe", article: "die", translation: "tulip", category: "Pflanzen & Garten" },
  { word: "Sonnenblume", article: "die", translation: "sunflower", category: "Pflanzen & Garten" },
  { word: "Kaktus", article: "der", translation: "cactus", category: "Pflanzen & Garten" },

  // Stadt
  { word: "Stadt", article: "die", translation: "city", category: "Stadt" },
  { word: "Dorf", article: "das", translation: "village", category: "Stadt" },
  { word: "Straße", article: "die", translation: "street", category: "Stadt" },
  { word: "Weg", article: "der", translation: "path/way", category: "Stadt" },
  { word: "Platz", article: "der", translation: "square", category: "Stadt" },
  { word: "Ecke", article: "die", translation: "corner", category: "Stadt" },
  { word: "Brücke", article: "die", translation: "bridge", category: "Stadt" },
  { word: "Park", article: "der", translation: "park", category: "Stadt" },
  { word: "Kirche", article: "die", translation: "church", category: "Stadt" },
  { word: "Schloss", article: "das", translation: "castle", category: "Stadt" },
  { word: "Turm", article: "der", translation: "tower", category: "Stadt" },
  { word: "Rathaus", article: "das", translation: "town hall", category: "Stadt" },
  { word: "Krankenhaus", article: "das", translation: "hospital", category: "Stadt" },
  { word: "Bahnhof", article: "der", translation: "train station", category: "Stadt" },
  { word: "Flughafen", article: "der", translation: "airport", category: "Stadt" },
  { word: "Hotel", article: "das", translation: "hotel", category: "Stadt" },
  { word: "Museum", article: "das", translation: "museum", category: "Stadt" },
  { word: "Kino", article: "das", translation: "cinema", category: "Stadt" },
  { word: "Theater", article: "das", translation: "theater", category: "Stadt" },
  { word: "Spielplatz", article: "der", translation: "playground", category: "Stadt" },

  // Geschäfte
  { word: "Geschäft", article: "das", translation: "shop", category: "Geschäfte" },
  { word: "Supermarkt", article: "der", translation: "supermarket", category: "Geschäfte" },
  { word: "Markt", article: "der", translation: "market", category: "Geschäfte" },
  { word: "Bäckerei", article: "die", translation: "bakery", category: "Geschäfte" },
  { word: "Metzgerei", article: "die", translation: "butcher shop", category: "Geschäfte" },
  { word: "Apotheke", article: "die", translation: "pharmacy", category: "Geschäfte" },
  { word: "Buchhandlung", article: "die", translation: "bookstore", category: "Geschäfte" },
  { word: "Bank", article: "die", translation: "bank", category: "Geschäfte" },
  { word: "Post", article: "die", translation: "post office", category: "Geschäfte" },
  { word: "Restaurant", article: "das", translation: "restaurant", category: "Geschäfte" },

  // Fahrzeuge
  { word: "Auto", article: "das", translation: "car", category: "Fahrzeuge" },
  { word: "Bus", article: "der", translation: "bus", category: "Fahrzeuge" },
  { word: "Zug", article: "der", translation: "train", category: "Fahrzeuge" },
  { word: "Fahrrad", article: "das", translation: "bicycle", category: "Fahrzeuge" },
  { word: "Motorrad", article: "das", translation: "motorcycle", category: "Fahrzeuge" },
  { word: "Flugzeug", article: "das", translation: "airplane", category: "Fahrzeuge" },
  { word: "Schiff", article: "das", translation: "ship", category: "Fahrzeuge" },
  { word: "Boot", article: "das", translation: "boat", category: "Fahrzeuge" },
  { word: "Taxi", article: "das", translation: "taxi", category: "Fahrzeuge" },
  { word: "U-Bahn", article: "die", translation: "subway", category: "Fahrzeuge" },
  { word: "Straßenbahn", article: "die", translation: "tram", category: "Fahrzeuge" },
  { word: "Lastwagen", article: "der", translation: "truck", category: "Fahrzeuge" },
  { word: "Koffer", article: "der", translation: "suitcase", category: "Fahrzeuge" },

  // Berufe
  { word: "Arzt", article: "der", translation: "doctor (male)", category: "Berufe" },
  { word: "Ärztin", article: "die", translation: "doctor (female)", category: "Berufe" },
  { word: "Koch", article: "der", translation: "cook", category: "Berufe" },
  { word: "Bäcker", article: "der", translation: "baker", category: "Berufe" },
  { word: "Polizist", article: "der", translation: "police officer (male)", category: "Berufe" },
  { word: "Polizistin", article: "die", translation: "police officer (female)", category: "Berufe" },
  { word: "Feuerwehrmann", article: "der", translation: "firefighter", category: "Berufe" },
  { word: "Verkäufer", article: "der", translation: "salesperson (male)", category: "Berufe" },
  { word: "Verkäuferin", article: "die", translation: "salesperson (female)", category: "Berufe" },
  { word: "Kellner", article: "der", translation: "waiter", category: "Berufe" },
  { word: "Kellnerin", article: "die", translation: "waitress", category: "Berufe" },
  { word: "Friseur", article: "der", translation: "hairdresser (male)", category: "Berufe" },
  { word: "Friseurin", article: "die", translation: "hairdresser (female)", category: "Berufe" },
  { word: "Fahrer", article: "der", translation: "driver", category: "Berufe" },
  { word: "Pilot", article: "der", translation: "pilot", category: "Berufe" },
  { word: "Bauer", article: "der", translation: "farmer", category: "Berufe" },
  { word: "Sänger", article: "der", translation: "singer (male)", category: "Berufe" },

  // Sport
  { word: "Sport", article: "der", translation: "sport", category: "Sport" },
  { word: "Fußball", article: "der", translation: "soccer", category: "Sport" },
  { word: "Basketball", article: "der", translation: "basketball", category: "Sport" },
  { word: "Tennis", article: "das", translation: "tennis", category: "Sport" },
  { word: "Schwimmen", article: "das", translation: "swimming", category: "Sport" },
  { word: "Ball", article: "der", translation: "ball", category: "Sport" },
  { word: "Tor", article: "das", translation: "goal", category: "Sport" },
  { word: "Mannschaft", article: "die", translation: "team", category: "Sport" },
  { word: "Spieler", article: "der", translation: "player", category: "Sport" },
  { word: "Spiel", article: "das", translation: "game", category: "Sport" },
  { word: "Rennen", article: "das", translation: "race", category: "Sport" },

  // Hobbys & Freizeit
  { word: "Musik", article: "die", translation: "music", category: "Hobbys & Freizeit" },
  { word: "Film", article: "der", translation: "movie", category: "Hobbys & Freizeit" },
  { word: "Foto", article: "das", translation: "photo", category: "Hobbys & Freizeit" },
  { word: "Zeitung", article: "die", translation: "newspaper", category: "Hobbys & Freizeit" },
  { word: "Zeitschrift", article: "die", translation: "magazine", category: "Hobbys & Freizeit" },
  { word: "Comic", article: "der", translation: "comic book", category: "Hobbys & Freizeit" },
  { word: "Puzzle", article: "das", translation: "puzzle", category: "Hobbys & Freizeit" },
  { word: "Reise", article: "die", translation: "trip", category: "Hobbys & Freizeit" },
  { word: "Urlaub", article: "der", translation: "vacation", category: "Hobbys & Freizeit" },

  // Musikinstrumente
  { word: "Gitarre", article: "die", translation: "guitar", category: "Musikinstrumente" },
  { word: "Klavier", article: "das", translation: "piano", category: "Musikinstrumente" },
  { word: "Geige", article: "die", translation: "violin", category: "Musikinstrumente" },
  { word: "Trommel", article: "die", translation: "drum", category: "Musikinstrumente" },
  { word: "Flöte", article: "die", translation: "flute", category: "Musikinstrumente" },
  { word: "Schlagzeug", article: "das", translation: "drum kit", category: "Musikinstrumente" },
  { word: "Trompete", article: "die", translation: "trumpet", category: "Musikinstrumente" },
  { word: "Lied", article: "das", translation: "song", category: "Musikinstrumente" },

  // Feiertage & Feste
  { word: "Geburtstag", article: "der", translation: "birthday", category: "Feiertage & Feste" },
  { word: "Feier", article: "die", translation: "celebration/party", category: "Feiertage & Feste" },
  { word: "Party", article: "die", translation: "party", category: "Feiertage & Feste" },
  { word: "Geschenk", article: "das", translation: "present", category: "Feiertage & Feste" },
  { word: "Karte", article: "die", translation: "card", category: "Feiertage & Feste" },
  { word: "Kerze", article: "die", translation: "candle", category: "Feiertage & Feste" },
  { word: "Feuerwerk", article: "das", translation: "fireworks", category: "Feiertage & Feste" },
  { word: "Weihnachten", article: "das", translation: "Christmas", category: "Feiertage & Feste" },

  // Technik & Elektronik
  { word: "Computer", article: "der", translation: "computer", category: "Technik & Elektronik" },
  { word: "Handy", article: "das", translation: "cell phone", category: "Technik & Elektronik" },
  { word: "Fernseher", article: "der", translation: "television", category: "Technik & Elektronik" },
  { word: "Radio", article: "das", translation: "radio", category: "Technik & Elektronik" },
  { word: "Kamera", article: "die", translation: "camera", category: "Technik & Elektronik" },
  { word: "Bildschirm", article: "der", translation: "screen", category: "Technik & Elektronik" },
  { word: "Tastatur", article: "die", translation: "keyboard", category: "Technik & Elektronik" },
  { word: "Batterie", article: "die", translation: "battery", category: "Technik & Elektronik" },
  { word: "Kabel", article: "das", translation: "cable", category: "Technik & Elektronik" },
  { word: "Internet", article: "das", translation: "internet", category: "Technik & Elektronik" },
  { word: "App", article: "die", translation: "app", category: "Technik & Elektronik" },

  // Werkzeug
  { word: "Werkzeug", article: "das", translation: "tool", category: "Werkzeug" },
  { word: "Hammer", article: "der", translation: "hammer", category: "Werkzeug" },
  { word: "Nagel", article: "der", translation: "nail", category: "Werkzeug" },
  { word: "Schraube", article: "die", translation: "screw", category: "Werkzeug" },
  { word: "Säge", article: "die", translation: "saw", category: "Werkzeug" },
  { word: "Leiter", article: "die", translation: "ladder", category: "Werkzeug" },
  { word: "Eimer", article: "der", translation: "bucket", category: "Werkzeug" },
  { word: "Besen", article: "der", translation: "broom", category: "Werkzeug" },
  { word: "Farbe", article: "die", translation: "paint/color", category: "Werkzeug" },

  // Formen & Materialien
  { word: "Kreis", article: "der", translation: "circle", category: "Formen & Materialien" },
  { word: "Quadrat", article: "das", translation: "square (shape)", category: "Formen & Materialien" },
  { word: "Dreieck", article: "das", translation: "triangle", category: "Formen & Materialien" },
  { word: "Linie", article: "die", translation: "line", category: "Formen & Materialien" },
  { word: "Holz", article: "das", translation: "wood", category: "Formen & Materialien" },
  { word: "Metall", article: "das", translation: "metal", category: "Formen & Materialien" },
  { word: "Plastik", article: "das", translation: "plastic", category: "Formen & Materialien" },

  // Gefühle
  { word: "Glück", article: "das", translation: "happiness/luck", category: "Gefühle" },
  { word: "Liebe", article: "die", translation: "love", category: "Gefühle" },
  { word: "Freude", article: "die", translation: "joy", category: "Gefühle" },
  { word: "Angst", article: "die", translation: "fear", category: "Gefühle" },
  { word: "Hunger", article: "der", translation: "hunger", category: "Gefühle" },
  { word: "Durst", article: "der", translation: "thirst", category: "Gefühle" },
  { word: "Müdigkeit", article: "die", translation: "tiredness", category: "Gefühle" },
  { word: "Ruhe", article: "die", translation: "quiet/calm", category: "Gefühle" },

  // Gesundheit & Krankheit
  { word: "Gesundheit", article: "die", translation: "health", category: "Gesundheit & Krankheit" },
  { word: "Krankheit", article: "die", translation: "illness", category: "Gesundheit & Krankheit" },
  { word: "Schmerz", article: "der", translation: "pain", category: "Gesundheit & Krankheit" },
  { word: "Fieber", article: "das", translation: "fever", category: "Gesundheit & Krankheit" },
  { word: "Husten", article: "der", translation: "cough", category: "Gesundheit & Krankheit" },
  { word: "Erkältung", article: "die", translation: "cold (illness)", category: "Gesundheit & Krankheit" },
  { word: "Medikament", article: "das", translation: "medication", category: "Gesundheit & Krankheit" },
  { word: "Pflaster", article: "das", translation: "bandage", category: "Gesundheit & Krankheit" },

  // Behälter & Haushalt
  { word: "Box", article: "die", translation: "box", category: "Behälter & Haushalt" },
  { word: "Kiste", article: "die", translation: "crate", category: "Behälter & Haushalt" },
  { word: "Korb", article: "der", translation: "basket", category: "Behälter & Haushalt" },
  { word: "Sack", article: "der", translation: "sack", category: "Behälter & Haushalt" },
  { word: "Beutel", article: "der", translation: "small bag", category: "Behälter & Haushalt" },
  { word: "Dose", article: "die", translation: "can", category: "Behälter & Haushalt" },
  { word: "Tüte", article: "die", translation: "plastic bag", category: "Behälter & Haushalt" },
  { word: "Mülleimer", article: "der", translation: "trash can", category: "Behälter & Haushalt" },

  // Spielzeug & Spiele
  { word: "Spielzeug", article: "das", translation: "toy", category: "Spielzeug & Spiele" },
  { word: "Puppe", article: "die", translation: "doll", category: "Spielzeug & Spiele" },
  { word: "Teddybär", article: "der", translation: "teddy bear", category: "Spielzeug & Spiele" },
  { word: "Würfel", article: "der", translation: "dice", category: "Spielzeug & Spiele" },
  { word: "Drachen", article: "der", translation: "kite", category: "Spielzeug & Spiele" },
  { word: "Luftballon", article: "der", translation: "balloon", category: "Spielzeug & Spiele" },
  { word: "Schaukel", article: "die", translation: "swing", category: "Spielzeug & Spiele" },
  { word: "Rutsche", article: "die", translation: "slide", category: "Spielzeug & Spiele" },

  // Richtungen & Orte
  { word: "Norden", article: "der", translation: "north", category: "Richtungen & Orte" },
  { word: "Süden", article: "der", translation: "south", category: "Richtungen & Orte" },
  { word: "Osten", article: "der", translation: "east", category: "Richtungen & Orte" },
  { word: "Westen", article: "der", translation: "west", category: "Richtungen & Orte" },
  { word: "Richtung", article: "die", translation: "direction", category: "Richtungen & Orte" },
  { word: "Land", article: "das", translation: "country", category: "Richtungen & Orte" },

  // Zahlen & Maße
  { word: "Zahl", article: "die", translation: "number", category: "Zahlen & Maße" },
  { word: "Nummer", article: "die", translation: "number (phone etc.)", category: "Zahlen & Maße" },
  { word: "Preis", article: "der", translation: "price", category: "Zahlen & Maße" },
  { word: "Geld", article: "das", translation: "money", category: "Zahlen & Maße" },
  { word: "Münze", article: "die", translation: "coin", category: "Zahlen & Maße" },
  { word: "Schein", article: "der", translation: "bill (money)", category: "Zahlen & Maße" },
  { word: "Kilometer", article: "der", translation: "kilometer", category: "Zahlen & Maße" },

  // Alltagsgegenstände
  { word: "Bild", article: "das", translation: "picture", category: "Alltagsgegenstände" },
  { word: "Frage", article: "die", translation: "question", category: "Alltagsgegenstände" },
  { word: "Antwort", article: "die", translation: "answer", category: "Alltagsgegenstände" },
  { word: "Problem", article: "das", translation: "problem", category: "Alltagsgegenstände" },
  { word: "Idee", article: "die", translation: "idea", category: "Alltagsgegenstände" },
  { word: "Plan", article: "der", translation: "plan", category: "Alltagsgegenstände" },
  { word: "Regel", article: "die", translation: "rule", category: "Alltagsgegenstände" },
  { word: "Ende", article: "das", translation: "end", category: "Alltagsgegenstände" },
  { word: "Anfang", article: "der", translation: "beginning", category: "Alltagsgegenstände" },
  { word: "Feuer", article: "das", translation: "fire", category: "Alltagsgegenstände" },
  { word: "Licht", article: "das", translation: "light", category: "Alltagsgegenstände" },
];

// A2 adds 500 new elementary-level nouns on top of everything from A1 —
// the A2 pool is all of A1 (as review) plus these, 1000 words total.
const a2NewWords: Omit<GermanNoun, "id">[] = [
// Familie & Beziehungen
  { word: "Ehemann", article: "der", translation: "husband", category: "Familie & Beziehungen" },
  { word: "Ehefrau", article: "die", translation: "wife", category: "Familie & Beziehungen" },
  { word: "Partner", article: "der", translation: "partner (male)", category: "Familie & Beziehungen" },
  { word: "Partnerin", article: "die", translation: "partner (female)", category: "Familie & Beziehungen" },
  { word: "Zwilling", article: "der", translation: "twin", category: "Familie & Beziehungen" },
  { word: "Enkel", article: "der", translation: "grandson", category: "Familie & Beziehungen" },
  { word: "Enkelin", article: "die", translation: "granddaughter", category: "Familie & Beziehungen" },
  { word: "Schwiegermutter", article: "die", translation: "mother-in-law", category: "Familie & Beziehungen" },
  { word: "Schwiegervater", article: "der", translation: "father-in-law", category: "Familie & Beziehungen" },
  { word: "Stiefvater", article: "der", translation: "stepfather", category: "Familie & Beziehungen" },
  { word: "Stiefmutter", article: "die", translation: "stepmother", category: "Familie & Beziehungen" },
  { word: "Neffe", article: "der", translation: "nephew", category: "Familie & Beziehungen" },
  { word: "Nichte", article: "die", translation: "niece", category: "Familie & Beziehungen" },
  { word: "Verlobung", article: "die", translation: "engagement", category: "Familie & Beziehungen" },
  { word: "Hochzeit", article: "die", translation: "wedding", category: "Familie & Beziehungen" },
  { word: "Ehe", article: "die", translation: "marriage", category: "Familie & Beziehungen" },
  { word: "Scheidung", article: "die", translation: "divorce", category: "Familie & Beziehungen" },
  { word: "Geburt", article: "die", translation: "birth", category: "Familie & Beziehungen" },

  // Berufe (mehr)
  { word: "Ingenieur", article: "der", translation: "engineer (male)", category: "Berufe (mehr)" },
  { word: "Ingenieurin", article: "die", translation: "engineer (female)", category: "Berufe (mehr)" },
  { word: "Anwalt", article: "der", translation: "lawyer (male)", category: "Berufe (mehr)" },
  { word: "Anwältin", article: "die", translation: "lawyer (female)", category: "Berufe (mehr)" },
  { word: "Richter", article: "der", translation: "judge (male)", category: "Berufe (mehr)" },
  { word: "Richterin", article: "die", translation: "judge (female)", category: "Berufe (mehr)" },
  { word: "Journalist", article: "der", translation: "journalist (male)", category: "Berufe (mehr)" },
  { word: "Journalistin", article: "die", translation: "journalist (female)", category: "Berufe (mehr)" },
  { word: "Elektriker", article: "der", translation: "electrician", category: "Berufe (mehr)" },
  { word: "Klempner", article: "der", translation: "plumber", category: "Berufe (mehr)" },
  { word: "Mechaniker", article: "der", translation: "mechanic", category: "Berufe (mehr)" },
  { word: "Programmierer", article: "der", translation: "programmer", category: "Berufe (mehr)" },
  { word: "Übersetzer", article: "der", translation: "translator", category: "Berufe (mehr)" },
  { word: "Schauspieler", article: "der", translation: "actor", category: "Berufe (mehr)" },
  { word: "Schauspielerin", article: "die", translation: "actress", category: "Berufe (mehr)" },
  { word: "Künstler", article: "der", translation: "artist", category: "Berufe (mehr)" },
  { word: "Zahnarzt", article: "der", translation: "dentist (male)", category: "Berufe (mehr)" },
  { word: "Zahnärztin", article: "die", translation: "dentist (female)", category: "Berufe (mehr)" },
  { word: "Apotheker", article: "der", translation: "pharmacist", category: "Berufe (mehr)" },
  { word: "Kassierer", article: "der", translation: "cashier", category: "Berufe (mehr)" },

  // Persönlichkeit & Charakter
  { word: "Charakter", article: "der", translation: "character", category: "Persönlichkeit & Charakter" },
  { word: "Persönlichkeit", article: "die", translation: "personality", category: "Persönlichkeit & Charakter" },
  { word: "Geduld", article: "die", translation: "patience", category: "Persönlichkeit & Charakter" },
  { word: "Mut", article: "der", translation: "courage", category: "Persönlichkeit & Charakter" },
  { word: "Ehrlichkeit", article: "die", translation: "honesty", category: "Persönlichkeit & Charakter" },
  { word: "Höflichkeit", article: "die", translation: "politeness", category: "Persönlichkeit & Charakter" },
  { word: "Freundlichkeit", article: "die", translation: "friendliness", category: "Persönlichkeit & Charakter" },
  { word: "Fleiß", article: "der", translation: "diligence", category: "Persönlichkeit & Charakter" },
  { word: "Faulheit", article: "die", translation: "laziness", category: "Persönlichkeit & Charakter" },
  { word: "Neugier", article: "die", translation: "curiosity", category: "Persönlichkeit & Charakter" },
  { word: "Großzügigkeit", article: "die", translation: "generosity", category: "Persönlichkeit & Charakter" },
  { word: "Humor", article: "der", translation: "humor", category: "Persönlichkeit & Charakter" },
  { word: "Selbstbewusstsein", article: "das", translation: "self-confidence", category: "Persönlichkeit & Charakter" },
  { word: "Schüchternheit", article: "die", translation: "shyness", category: "Persönlichkeit & Charakter" },

  // Gefühle & Meinungen
  { word: "Überraschung", article: "die", translation: "surprise", category: "Gefühle & Meinungen" },
  { word: "Enttäuschung", article: "die", translation: "disappointment", category: "Gefühle & Meinungen" },
  { word: "Eifersucht", article: "die", translation: "jealousy", category: "Gefühle & Meinungen" },
  { word: "Stolz", article: "der", translation: "pride", category: "Gefühle & Meinungen" },
  { word: "Scham", article: "die", translation: "shame", category: "Gefühle & Meinungen" },
  { word: "Langeweile", article: "die", translation: "boredom", category: "Gefühle & Meinungen" },
  { word: "Verwirrung", article: "die", translation: "confusion", category: "Gefühle & Meinungen" },
  { word: "Erleichterung", article: "die", translation: "relief", category: "Gefühle & Meinungen" },
  { word: "Meinung", article: "die", translation: "opinion", category: "Gefühle & Meinungen" },
  { word: "Einstellung", article: "die", translation: "attitude", category: "Gefühle & Meinungen" },
  { word: "Interesse", article: "das", translation: "interest", category: "Gefühle & Meinungen" },
  { word: "Wunsch", article: "der", translation: "wish", category: "Gefühle & Meinungen" },
  { word: "Zweifel", article: "der", translation: "doubt", category: "Gefühle & Meinungen" },

  // Wohnen (mehr)
  { word: "Miete", article: "die", translation: "rent", category: "Wohnen (mehr)" },
  { word: "Vermieter", article: "der", translation: "landlord", category: "Wohnen (mehr)" },
  { word: "Mieter", article: "der", translation: "tenant", category: "Wohnen (mehr)" },
  { word: "Nachbarschaft", article: "die", translation: "neighborhood", category: "Wohnen (mehr)" },
  { word: "Umzug", article: "der", translation: "move (relocation)", category: "Wohnen (mehr)" },
  { word: "Aufzug", article: "der", translation: "elevator", category: "Wohnen (mehr)" },
  { word: "Garage", article: "die", translation: "garage", category: "Wohnen (mehr)" },
  { word: "Hof", article: "der", translation: "courtyard", category: "Wohnen (mehr)" },
  { word: "Zaun", article: "der", translation: "fence", category: "Wohnen (mehr)" },
  { word: "Briefkasten", article: "der", translation: "mailbox", category: "Wohnen (mehr)" },
  { word: "Klingel", article: "die", translation: "doorbell", category: "Wohnen (mehr)" },
  { word: "Steckdose", article: "die", translation: "electrical outlet", category: "Wohnen (mehr)" },
  { word: "Lichtschalter", article: "der", translation: "light switch", category: "Wohnen (mehr)" },
  { word: "Heizung", article: "die", translation: "heating", category: "Wohnen (mehr)" },

  // Küche & Kochen
  { word: "Rezept", article: "das", translation: "recipe", category: "Küche & Kochen" },
  { word: "Zutat", article: "die", translation: "ingredient", category: "Küche & Kochen" },
  { word: "Gewürz", article: "das", translation: "spice", category: "Küche & Kochen" },
  { word: "Schneidebrett", article: "das", translation: "cutting board", category: "Küche & Kochen" },
  { word: "Kochlöffel", article: "der", translation: "cooking spoon", category: "Küche & Kochen" },
  { word: "Sieb", article: "das", translation: "strainer", category: "Küche & Kochen" },
  { word: "Waage", article: "die", translation: "scale", category: "Küche & Kochen" },
  { word: "Geschirrtuch", article: "das", translation: "dish towel", category: "Küche & Kochen" },
  { word: "Toaster", article: "der", translation: "toaster", category: "Küche & Kochen" },
  { word: "Wasserkocher", article: "der", translation: "electric kettle", category: "Küche & Kochen" },
  { word: "Mixer", article: "der", translation: "blender", category: "Küche & Kochen" },
  { word: "Dosenöffner", article: "der", translation: "can opener", category: "Küche & Kochen" },

  // Essen gehen
  { word: "Speisekarte", article: "die", translation: "menu", category: "Essen gehen" },
  { word: "Rechnung", article: "die", translation: "bill/check", category: "Essen gehen" },
  { word: "Trinkgeld", article: "das", translation: "tip", category: "Essen gehen" },
  { word: "Vorspeise", article: "die", translation: "appetizer", category: "Essen gehen" },
  { word: "Hauptgericht", article: "das", translation: "main course", category: "Essen gehen" },
  { word: "Nachspeise", article: "die", translation: "dessert", category: "Essen gehen" },
  { word: "Reservierung", article: "die", translation: "reservation", category: "Essen gehen" },
  { word: "Bestellung", article: "die", translation: "order", category: "Essen gehen" },
  { word: "Portion", article: "die", translation: "portion", category: "Essen gehen" },
  { word: "Gast", article: "der", translation: "guest", category: "Essen gehen" },
  { word: "Küchenchef", article: "der", translation: "head chef", category: "Essen gehen" },

  // Einkaufen (mehr)
  { word: "Kasse", article: "die", translation: "checkout", category: "Einkaufen (mehr)" },
  { word: "Einkaufswagen", article: "der", translation: "shopping cart", category: "Einkaufen (mehr)" },
  { word: "Einkaufsliste", article: "die", translation: "shopping list", category: "Einkaufen (mehr)" },
  { word: "Rabatt", article: "der", translation: "discount", category: "Einkaufen (mehr)" },
  { word: "Angebot", article: "das", translation: "offer/deal", category: "Einkaufen (mehr)" },
  { word: "Kunde", article: "der", translation: "customer (male)", category: "Einkaufen (mehr)" },
  { word: "Kundin", article: "die", translation: "customer (female)", category: "Einkaufen (mehr)" },
  { word: "Umkleidekabine", article: "die", translation: "fitting room", category: "Einkaufen (mehr)" },
  { word: "Kassenbon", article: "der", translation: "receipt", category: "Einkaufen (mehr)" },
  { word: "Verpackung", article: "die", translation: "packaging", category: "Einkaufen (mehr)" },
  { word: "Größe", article: "die", translation: "size", category: "Einkaufen (mehr)" },
  { word: "Marke", article: "die", translation: "brand", category: "Einkaufen (mehr)" },

  // Kleidung & Mode
  { word: "Anzug", article: "der", translation: "suit", category: "Kleidung & Mode" },
  { word: "Krawatte", article: "die", translation: "tie", category: "Kleidung & Mode" },
  { word: "Sakko", article: "das", translation: "blazer", category: "Kleidung & Mode" },
  { word: "Bluse", article: "die", translation: "blouse", category: "Kleidung & Mode" },
  { word: "Badehose", article: "die", translation: "swim trunks", category: "Kleidung & Mode" },
  { word: "Regenmantel", article: "der", translation: "raincoat", category: "Kleidung & Mode" },
  { word: "Sonnenbrille", article: "die", translation: "sunglasses", category: "Kleidung & Mode" },
  { word: "Gürtel", article: "der", translation: "belt", category: "Kleidung & Mode" },
  { word: "Reißverschluss", article: "der", translation: "zipper", category: "Kleidung & Mode" },
  { word: "Knopf", article: "der", translation: "button", category: "Kleidung & Mode" },

  // Körper & Gesundheit
  { word: "Skelett", article: "das", translation: "skeleton", category: "Körper & Gesundheit" },
  { word: "Muskel", article: "der", translation: "muscle", category: "Körper & Gesundheit" },
  { word: "Lunge", article: "die", translation: "lung", category: "Körper & Gesundheit" },
  { word: "Leber", article: "die", translation: "liver", category: "Körper & Gesundheit" },
  { word: "Nerv", article: "der", translation: "nerve", category: "Körper & Gesundheit" },
  { word: "Blut", article: "das", translation: "blood", category: "Körper & Gesundheit" },
  { word: "Puls", article: "der", translation: "pulse", category: "Körper & Gesundheit" },
  { word: "Impfung", article: "die", translation: "vaccination", category: "Körper & Gesundheit" },
  { word: "Diagnose", article: "die", translation: "diagnosis", category: "Körper & Gesundheit" },
  { word: "Therapie", article: "die", translation: "therapy", category: "Körper & Gesundheit" },
  { word: "Verband", article: "der", translation: "bandage", category: "Körper & Gesundheit" },
  { word: "Spritze", article: "die", translation: "injection", category: "Körper & Gesundheit" },
  { word: "Termin", article: "der", translation: "appointment", category: "Körper & Gesundheit" },
  { word: "Notaufnahme", article: "die", translation: "emergency room", category: "Körper & Gesundheit" },

  // Schule & Ausbildung
  { word: "Universität", article: "die", translation: "university", category: "Schule & Ausbildung" },
  { word: "Fach", article: "das", translation: "(school) subject", category: "Schule & Ausbildung" },
  { word: "Prüfung", article: "die", translation: "exam", category: "Schule & Ausbildung" },
  { word: "Note", article: "die", translation: "grade", category: "Schule & Ausbildung" },
  { word: "Zeugnis", article: "das", translation: "report card", category: "Schule & Ausbildung" },
  { word: "Hausaufgabe", article: "die", translation: "homework", category: "Schule & Ausbildung" },
  { word: "Stundenplan", article: "der", translation: "timetable", category: "Schule & Ausbildung" },
  { word: "Ferien", article: "die", translation: "school holidays", category: "Schule & Ausbildung" },
  { word: "Ausbildung", article: "die", translation: "vocational training", category: "Schule & Ausbildung" },
  { word: "Studium", article: "das", translation: "(university) studies", category: "Schule & Ausbildung" },
  { word: "Student", article: "der", translation: "student (male)", category: "Schule & Ausbildung" },
  { word: "Studentin", article: "die", translation: "student (female)", category: "Schule & Ausbildung" },
  { word: "Bibliothek", article: "die", translation: "library", category: "Schule & Ausbildung" },
  { word: "Vorlesung", article: "die", translation: "lecture", category: "Schule & Ausbildung" },

  // Arbeit & Büro
  { word: "Arbeit", article: "die", translation: "work", category: "Arbeit & Büro" },
  { word: "Büro", article: "das", translation: "office", category: "Arbeit & Büro" },
  { word: "Chef", article: "der", translation: "boss (male)", category: "Arbeit & Büro" },
  { word: "Chefin", article: "die", translation: "boss (female)", category: "Arbeit & Büro" },
  { word: "Kollege", article: "der", translation: "colleague (male)", category: "Arbeit & Büro" },
  { word: "Kollegin", article: "die", translation: "colleague (female)", category: "Arbeit & Büro" },
  { word: "Gehalt", article: "das", translation: "salary", category: "Arbeit & Büro" },
  { word: "Vertrag", article: "der", translation: "contract", category: "Arbeit & Büro" },
  { word: "Bewerbung", article: "die", translation: "job application", category: "Arbeit & Büro" },
  { word: "Lebenslauf", article: "der", translation: "resume/CV", category: "Arbeit & Büro" },
  { word: "Interview", article: "das", translation: "interview", category: "Arbeit & Büro" },
  { word: "Besprechung", article: "die", translation: "meeting", category: "Arbeit & Büro" },
  { word: "Projekt", article: "das", translation: "project", category: "Arbeit & Büro" },
  { word: "Firma", article: "die", translation: "company", category: "Arbeit & Büro" },
  { word: "Aufgabe", article: "die", translation: "task", category: "Arbeit & Büro" },

  // Technik & Medien
  { word: "Laptop", article: "der", translation: "laptop", category: "Technik & Medien" },
  { word: "Drucker", article: "der", translation: "printer", category: "Technik & Medien" },
  { word: "Webseite", article: "die", translation: "website", category: "Technik & Medien" },
  { word: "Passwort", article: "das", translation: "password", category: "Technik & Medien" },
  { word: "Datei", article: "die", translation: "file", category: "Technik & Medien" },
  { word: "Ordner", article: "der", translation: "folder", category: "Technik & Medien" },
  { word: "Software", article: "die", translation: "software", category: "Technik & Medien" },
  { word: "Lautsprecher", article: "der", translation: "speaker", category: "Technik & Medien" },
  { word: "Kopfhörer", article: "der", translation: "headphones", category: "Technik & Medien" },
  { word: "Fernbedienung", article: "die", translation: "remote control", category: "Technik & Medien" },
  { word: "Akku", article: "der", translation: "rechargeable battery", category: "Technik & Medien" },
  { word: "WLAN", article: "das", translation: "WiFi", category: "Technik & Medien" },

  // Reisen & Verkehr
  { word: "Fahrkarte", article: "die", translation: "ticket", category: "Reisen & Verkehr" },
  { word: "Bahnsteig", article: "der", translation: "platform", category: "Reisen & Verkehr" },
  { word: "Abfahrt", article: "die", translation: "departure", category: "Reisen & Verkehr" },
  { word: "Ankunft", article: "die", translation: "arrival", category: "Reisen & Verkehr" },
  { word: "Verspätung", article: "die", translation: "delay", category: "Reisen & Verkehr" },
  { word: "Gepäck", article: "das", translation: "luggage", category: "Reisen & Verkehr" },
  { word: "Parkplatz", article: "der", translation: "parking lot", category: "Reisen & Verkehr" },
  { word: "Ampel", article: "die", translation: "traffic light", category: "Reisen & Verkehr" },
  { word: "Kreuzung", article: "die", translation: "intersection", category: "Reisen & Verkehr" },
  { word: "Stau", article: "der", translation: "traffic jam", category: "Reisen & Verkehr" },
  { word: "Autobahn", article: "die", translation: "highway", category: "Reisen & Verkehr" },
  { word: "Führerschein", article: "der", translation: "driver's license", category: "Reisen & Verkehr" },
  { word: "Tankstelle", article: "die", translation: "gas station", category: "Reisen & Verkehr" },
  { word: "Reifen", article: "der", translation: "tire", category: "Reisen & Verkehr" },

  // Urlaub & Tourismus
  { word: "Reisepass", article: "der", translation: "passport", category: "Urlaub & Tourismus" },
  { word: "Visum", article: "das", translation: "visa", category: "Urlaub & Tourismus" },
  { word: "Sehenswürdigkeit", article: "die", translation: "tourist attraction", category: "Urlaub & Tourismus" },
  { word: "Wanderung", article: "die", translation: "hike", category: "Urlaub & Tourismus" },
  { word: "Campingplatz", article: "der", translation: "campsite", category: "Urlaub & Tourismus" },
  { word: "Zelt", article: "das", translation: "tent", category: "Urlaub & Tourismus" },
  { word: "Sonnenschutz", article: "der", translation: "sunscreen", category: "Urlaub & Tourismus" },
  { word: "Andenken", article: "das", translation: "souvenir", category: "Urlaub & Tourismus" },
  { word: "Reiseführer", article: "der", translation: "travel guide", category: "Urlaub & Tourismus" },
  { word: "Ausflug", article: "der", translation: "excursion", category: "Urlaub & Tourismus" },
  { word: "Postkarte", article: "die", translation: "postcard", category: "Urlaub & Tourismus" },
  { word: "Reisebüro", article: "das", translation: "travel agency", category: "Urlaub & Tourismus" },

  // Natur & Umwelt
  { word: "Umwelt", article: "die", translation: "environment", category: "Natur & Umwelt" },
  { word: "Klima", article: "das", translation: "climate", category: "Natur & Umwelt" },
  { word: "Klimawandel", article: "der", translation: "climate change", category: "Natur & Umwelt" },
  { word: "Recycling", article: "das", translation: "recycling", category: "Natur & Umwelt" },
  { word: "Müll", article: "der", translation: "trash", category: "Natur & Umwelt" },
  { word: "Sonnenenergie", article: "die", translation: "solar energy", category: "Natur & Umwelt" },
  { word: "Ressource", article: "die", translation: "resource", category: "Natur & Umwelt" },
  { word: "Verschmutzung", article: "die", translation: "pollution", category: "Natur & Umwelt" },
  { word: "Energie", article: "die", translation: "energy", category: "Natur & Umwelt" },
  { word: "Landschaft", article: "die", translation: "landscape", category: "Natur & Umwelt" },
  { word: "Höhle", article: "die", translation: "cave", category: "Natur & Umwelt" },
  { word: "Vulkan", article: "der", translation: "volcano", category: "Natur & Umwelt" },
  { word: "Erdbeben", article: "das", translation: "earthquake", category: "Natur & Umwelt" },
  { word: "Ozean", article: "der", translation: "ocean", category: "Natur & Umwelt" },

  // Wetter (mehr)
  { word: "Hitze", article: "die", translation: "heat", category: "Wetter (mehr)" },
  { word: "Kälte", article: "die", translation: "coldness", category: "Wetter (mehr)" },
  { word: "Feuchtigkeit", article: "die", translation: "humidity", category: "Wetter (mehr)" },
  { word: "Frost", article: "der", translation: "frost", category: "Wetter (mehr)" },
  { word: "Hagel", article: "der", translation: "hail", category: "Wetter (mehr)" },
  { word: "Tau", article: "der", translation: "dew", category: "Wetter (mehr)" },
  { word: "Dürre", article: "die", translation: "drought", category: "Wetter (mehr)" },
  { word: "Klimaanlage", article: "die", translation: "air conditioning", category: "Wetter (mehr)" },

  // Tiere (mehr)
  { word: "Truthahn", article: "der", translation: "turkey", category: "Tiere (mehr)" },
  { word: "Flamingo", article: "der", translation: "flamingo", category: "Tiere (mehr)" },
  { word: "Nashorn", article: "das", translation: "rhinoceros", category: "Tiere (mehr)" },
  { word: "Nilpferd", article: "das", translation: "hippopotamus", category: "Tiere (mehr)" },
  { word: "Qualle", article: "die", translation: "jellyfish", category: "Tiere (mehr)" },
  { word: "Krake", article: "der", translation: "octopus", category: "Tiere (mehr)" },
  { word: "Robbe", article: "die", translation: "seal", category: "Tiere (mehr)" },
  { word: "Wildschwein", article: "das", translation: "wild boar", category: "Tiere (mehr)" },
  { word: "Reh", article: "das", translation: "roe deer", category: "Tiere (mehr)" },

  // Stadt & Verwaltung
  { word: "Bürgermeister", article: "der", translation: "mayor", category: "Stadt & Verwaltung" },
  { word: "Ausweis", article: "der", translation: "ID card", category: "Stadt & Verwaltung" },
  { word: "Anmeldung", article: "die", translation: "registration", category: "Stadt & Verwaltung" },
  { word: "Amt", article: "das", translation: "government office", category: "Stadt & Verwaltung" },
  { word: "Formular", article: "das", translation: "form", category: "Stadt & Verwaltung" },
  { word: "Unterschrift", article: "die", translation: "signature", category: "Stadt & Verwaltung" },
  { word: "Stempel", article: "der", translation: "stamp", category: "Stadt & Verwaltung" },
  { word: "Gebühr", article: "die", translation: "fee", category: "Stadt & Verwaltung" },
  { word: "Genehmigung", article: "die", translation: "permit", category: "Stadt & Verwaltung" },
  { word: "Gericht", article: "das", translation: "court", category: "Stadt & Verwaltung" },
  { word: "Polizei", article: "die", translation: "police", category: "Stadt & Verwaltung" },
  { word: "Feuerwehr", article: "die", translation: "fire department", category: "Stadt & Verwaltung" },

  // Bank & Geld
  { word: "Konto", article: "das", translation: "(bank) account", category: "Bank & Geld" },
  { word: "Kreditkarte", article: "die", translation: "credit card", category: "Bank & Geld" },
  { word: "Überweisung", article: "die", translation: "bank transfer", category: "Bank & Geld" },
  { word: "Bargeld", article: "das", translation: "cash", category: "Bank & Geld" },
  { word: "Zins", article: "der", translation: "interest (finance)", category: "Bank & Geld" },
  { word: "Kredit", article: "der", translation: "loan", category: "Bank & Geld" },
  { word: "Geldautomat", article: "der", translation: "ATM", category: "Bank & Geld" },
  { word: "Wechselkurs", article: "der", translation: "exchange rate", category: "Bank & Geld" },
  { word: "Währung", article: "die", translation: "currency", category: "Bank & Geld" },

  // Post & Kommunikation
  { word: "Brief", article: "der", translation: "letter", category: "Post & Kommunikation" },
  { word: "Umschlag", article: "der", translation: "envelope", category: "Post & Kommunikation" },
  { word: "Briefmarke", article: "die", translation: "postage stamp", category: "Post & Kommunikation" },
  { word: "Paket", article: "das", translation: "package", category: "Post & Kommunikation" },
  { word: "Absender", article: "der", translation: "sender", category: "Post & Kommunikation" },
  { word: "Empfänger", article: "der", translation: "recipient", category: "Post & Kommunikation" },
  { word: "E-Mail", article: "die", translation: "email", category: "Post & Kommunikation" },
  { word: "Nachricht", article: "die", translation: "message", category: "Post & Kommunikation" },
  { word: "Anruf", article: "der", translation: "phone call", category: "Post & Kommunikation" },
  { word: "Telefonnummer", article: "die", translation: "phone number", category: "Post & Kommunikation" },

  // Sport (mehr)
  { word: "Schwimmbad", article: "das", translation: "swimming pool", category: "Sport (mehr)" },
  { word: "Fitnessstudio", article: "das", translation: "gym", category: "Sport (mehr)" },
  { word: "Trainer", article: "der", translation: "coach", category: "Sport (mehr)" },
  { word: "Wettkampf", article: "der", translation: "competition", category: "Sport (mehr)" },
  { word: "Meisterschaft", article: "die", translation: "championship", category: "Sport (mehr)" },
  { word: "Medaille", article: "die", translation: "medal", category: "Sport (mehr)" },
  { word: "Turnier", article: "das", translation: "tournament", category: "Sport (mehr)" },
  { word: "Handball", article: "der", translation: "handball", category: "Sport (mehr)" },
  { word: "Volleyball", article: "der", translation: "volleyball", category: "Sport (mehr)" },
  { word: "Golf", article: "das", translation: "golf", category: "Sport (mehr)" },
  { word: "Boxen", article: "das", translation: "boxing", category: "Sport (mehr)" },
  { word: "Radfahren", article: "das", translation: "cycling", category: "Sport (mehr)" },

  // Freizeit & Hobbys (mehr)
  { word: "Kartenspiel", article: "das", translation: "card game", category: "Freizeit & Hobbys (mehr)" },
  { word: "Angeln", article: "das", translation: "fishing", category: "Freizeit & Hobbys (mehr)" },
  { word: "Fotografie", article: "die", translation: "photography", category: "Freizeit & Hobbys (mehr)" },
  { word: "Sammlung", article: "die", translation: "collection", category: "Freizeit & Hobbys (mehr)" },
  { word: "Yoga", article: "das", translation: "yoga", category: "Freizeit & Hobbys (mehr)" },
  { word: "Tanz", article: "der", translation: "dance", category: "Freizeit & Hobbys (mehr)" },
  { word: "Gesang", article: "der", translation: "singing", category: "Freizeit & Hobbys (mehr)" },
  { word: "Theaterstück", article: "das", translation: "play/theater piece", category: "Freizeit & Hobbys (mehr)" },

  // Kunst & Kultur
  { word: "Kunst", article: "die", translation: "art", category: "Kunst & Kultur" },
  { word: "Gemälde", article: "das", translation: "painting", category: "Kunst & Kultur" },
  { word: "Skulptur", article: "die", translation: "sculpture", category: "Kunst & Kultur" },
  { word: "Ausstellung", article: "die", translation: "exhibition", category: "Kunst & Kultur" },
  { word: "Galerie", article: "die", translation: "gallery", category: "Kunst & Kultur" },
  { word: "Literatur", article: "die", translation: "literature", category: "Kunst & Kultur" },
  { word: "Gedicht", article: "das", translation: "poem", category: "Kunst & Kultur" },
  { word: "Roman", article: "der", translation: "novel", category: "Kunst & Kultur" },
  { word: "Autor", article: "der", translation: "author", category: "Kunst & Kultur" },

  // Musik (mehr)
  { word: "Chor", article: "der", translation: "choir", category: "Musik (mehr)" },
  { word: "Orchester", article: "das", translation: "orchestra", category: "Musik (mehr)" },
  { word: "Melodie", article: "die", translation: "melody", category: "Musik (mehr)" },
  { word: "Rhythmus", article: "der", translation: "rhythm", category: "Musik (mehr)" },
  { word: "Text", article: "der", translation: "lyrics", category: "Musik (mehr)" },
  { word: "Album", article: "das", translation: "album", category: "Musik (mehr)" },
  { word: "Konzertsaal", article: "der", translation: "concert hall", category: "Musik (mehr)" },

  // Feste & Traditionen (mehr)
  { word: "Ostern", article: "das", translation: "Easter", category: "Feste & Traditionen (mehr)" },
  { word: "Silvester", article: "das", translation: "New Year's Eve", category: "Feste & Traditionen (mehr)" },
  { word: "Karneval", article: "der", translation: "carnival", category: "Feste & Traditionen (mehr)" },
  { word: "Tradition", article: "die", translation: "tradition", category: "Feste & Traditionen (mehr)" },
  { word: "Brauch", article: "der", translation: "custom", category: "Feste & Traditionen (mehr)" },
  { word: "Feiertag", article: "der", translation: "holiday", category: "Feste & Traditionen (mehr)" },
  { word: "Jubiläum", article: "das", translation: "anniversary", category: "Feste & Traditionen (mehr)" },

  // Zeit & Termine
  { word: "Kalender", article: "der", translation: "calendar", category: "Zeit & Termine" },
  { word: "Uhrzeit", article: "die", translation: "time of day", category: "Zeit & Termine" },
  { word: "Vergangenheit", article: "die", translation: "past", category: "Zeit & Termine" },
  { word: "Gegenwart", article: "die", translation: "present", category: "Zeit & Termine" },
  { word: "Zukunft", article: "die", translation: "future", category: "Zeit & Termine" },
  { word: "Frist", article: "die", translation: "deadline", category: "Zeit & Termine" },
  { word: "Pünktlichkeit", article: "die", translation: "punctuality", category: "Zeit & Termine" },

  // Zahlen & Mengen (mehr)
  { word: "Prozent", article: "das", translation: "percent", category: "Zahlen & Mengen (mehr)" },
  { word: "Hälfte", article: "die", translation: "half", category: "Zahlen & Mengen (mehr)" },
  { word: "Viertel", article: "das", translation: "quarter", category: "Zahlen & Mengen (mehr)" },
  { word: "Dutzend", article: "das", translation: "dozen", category: "Zahlen & Mengen (mehr)" },
  { word: "Menge", article: "die", translation: "amount/quantity", category: "Zahlen & Mengen (mehr)" },
  { word: "Gewicht", article: "das", translation: "weight", category: "Zahlen & Mengen (mehr)" },
  { word: "Liter", article: "der", translation: "liter", category: "Zahlen & Mengen (mehr)" },
  { word: "Gramm", article: "das", translation: "gram", category: "Zahlen & Mengen (mehr)" },

  // Landwirtschaft
  { word: "Bauernhof", article: "der", translation: "farm", category: "Landwirtschaft" },
  { word: "Traktor", article: "der", translation: "tractor", category: "Landwirtschaft" },
  { word: "Ernte", article: "die", translation: "harvest", category: "Landwirtschaft" },
  { word: "Scheune", article: "die", translation: "barn", category: "Landwirtschaft" },
  { word: "Stall", article: "der", translation: "stable", category: "Landwirtschaft" },
  { word: "Weide", article: "die", translation: "pasture", category: "Landwirtschaft" },
  { word: "Getreide", article: "das", translation: "grain", category: "Landwirtschaft" },
  { word: "Saat", article: "die", translation: "seed/sowing", category: "Landwirtschaft" },

  // Geographie
  { word: "Kontinent", article: "der", translation: "continent", category: "Geographie" },
  { word: "Grenze", article: "die", translation: "border", category: "Geographie" },
  { word: "Hauptstadt", article: "die", translation: "capital city", category: "Geographie" },
  { word: "Bundesland", article: "das", translation: "federal state", category: "Geographie" },
  { word: "Gebirge", article: "das", translation: "mountain range", category: "Geographie" },
  { word: "Ebene", article: "die", translation: "plain", category: "Geographie" },
  { word: "Küste", article: "die", translation: "coast", category: "Geographie" },
  { word: "Halbinsel", article: "die", translation: "peninsula", category: "Geographie" },
  { word: "Gletscher", article: "der", translation: "glacier", category: "Geographie" },

  // Körperpflege
  { word: "Rasierer", article: "der", translation: "razor", category: "Körperpflege" },
  { word: "Deo", article: "das", translation: "deodorant", category: "Körperpflege" },
  { word: "Parfüm", article: "das", translation: "perfume", category: "Körperpflege" },
  { word: "Creme", article: "die", translation: "cream", category: "Körperpflege" },
  { word: "Nagelschere", article: "die", translation: "nail scissors", category: "Körperpflege" },
  { word: "Bürste", article: "die", translation: "brush", category: "Körperpflege" },
  { word: "Föhn", article: "der", translation: "hairdryer", category: "Körperpflege" },

  // Verkehrsregeln & Sicherheit
  { word: "Verkehr", article: "der", translation: "traffic", category: "Verkehrsregeln & Sicherheit" },
  { word: "Vorfahrt", article: "die", translation: "right of way", category: "Verkehrsregeln & Sicherheit" },
  { word: "Geschwindigkeit", article: "die", translation: "speed", category: "Verkehrsregeln & Sicherheit" },
  { word: "Unfall", article: "der", translation: "accident", category: "Verkehrsregeln & Sicherheit" },
  { word: "Helm", article: "der", translation: "helmet", category: "Verkehrsregeln & Sicherheit" },
  { word: "Gurt", article: "der", translation: "seatbelt", category: "Verkehrsregeln & Sicherheit" },
  { word: "Strafe", article: "die", translation: "penalty", category: "Verkehrsregeln & Sicherheit" },
  { word: "Bußgeld", article: "das", translation: "fine (monetary penalty)", category: "Verkehrsregeln & Sicherheit" },

  // Bildung & Wissen
  { word: "Wissen", article: "das", translation: "knowledge", category: "Bildung & Wissen" },
  { word: "Erfahrung", article: "die", translation: "experience", category: "Bildung & Wissen" },
  { word: "Fähigkeit", article: "die", translation: "skill/ability", category: "Bildung & Wissen" },
  { word: "Kenntnis", article: "die", translation: "knowledge/skill", category: "Bildung & Wissen" },
  { word: "Sprache", article: "die", translation: "language", category: "Bildung & Wissen" },
  { word: "Übersetzung", article: "die", translation: "translation", category: "Bildung & Wissen" },
  { word: "Bedeutung", article: "die", translation: "meaning", category: "Bildung & Wissen" },
  { word: "Erklärung", article: "die", translation: "explanation", category: "Bildung & Wissen" },

  // Wirtschaft & Handel
  { word: "Wirtschaft", article: "die", translation: "economy", category: "Wirtschaft & Handel" },
  { word: "Handel", article: "der", translation: "trade", category: "Wirtschaft & Handel" },
  { word: "Export", article: "der", translation: "export", category: "Wirtschaft & Handel" },
  { word: "Import", article: "der", translation: "import", category: "Wirtschaft & Handel" },
  { word: "Produkt", article: "das", translation: "product", category: "Wirtschaft & Handel" },
  { word: "Produktion", article: "die", translation: "production", category: "Wirtschaft & Handel" },
  { word: "Fabrik", article: "die", translation: "factory", category: "Wirtschaft & Handel" },
  { word: "Industrie", article: "die", translation: "industry", category: "Wirtschaft & Handel" },

  // Gesellschaft
  { word: "Gesellschaft", article: "die", translation: "society", category: "Gesellschaft" },
  { word: "Gemeinschaft", article: "die", translation: "community", category: "Gesellschaft" },
  { word: "Kultur", article: "die", translation: "culture", category: "Gesellschaft" },
  { word: "Generation", article: "die", translation: "generation", category: "Gesellschaft" },
  { word: "Jugend", article: "die", translation: "youth", category: "Gesellschaft" },
  { word: "Alter", article: "das", translation: "age", category: "Gesellschaft" },

  // Haushaltsgeräte
  { word: "Staubsauger", article: "der", translation: "vacuum cleaner", category: "Haushaltsgeräte" },
  { word: "Waschmaschine", article: "die", translation: "washing machine", category: "Haushaltsgeräte" },
  { word: "Trockner", article: "der", translation: "dryer", category: "Haushaltsgeräte" },
  { word: "Bügeleisen", article: "das", translation: "iron", category: "Haushaltsgeräte" },
  { word: "Geschirrspüler", article: "der", translation: "dishwasher", category: "Haushaltsgeräte" },
  { word: "Ventilator", article: "der", translation: "fan", category: "Haushaltsgeräte" },

  // Möbel & Einrichtung
  { word: "Kommode", article: "die", translation: "dresser", category: "Möbel & Einrichtung" },
  { word: "Schreibtisch", article: "der", translation: "desk", category: "Möbel & Einrichtung" },
  { word: "Bücherregal", article: "das", translation: "bookshelf", category: "Möbel & Einrichtung" },
  { word: "Nachttisch", article: "der", translation: "nightstand", category: "Möbel & Einrichtung" },
  { word: "Gardine", article: "die", translation: "curtain", category: "Möbel & Einrichtung" },
  { word: "Vase", article: "die", translation: "vase", category: "Möbel & Einrichtung" },
  { word: "Bilderrahmen", article: "der", translation: "picture frame", category: "Möbel & Einrichtung" },

  // Getränke & Genussmittel
  { word: "Sekt", article: "der", translation: "sparkling wine", category: "Getränke & Genussmittel" },
  { word: "Whisky", article: "der", translation: "whiskey", category: "Getränke & Genussmittel" },
  { word: "Cocktail", article: "der", translation: "cocktail", category: "Getränke & Genussmittel" },
  { word: "Espresso", article: "der", translation: "espresso", category: "Getränke & Genussmittel" },
  { word: "Mineralwasser", article: "das", translation: "mineral water", category: "Getränke & Genussmittel" },

  // Süßes & Gebäck
  { word: "Marmelade", article: "die", translation: "jam", category: "Süßes & Gebäck" },
  { word: "Honig", article: "der", translation: "honey", category: "Süßes & Gebäck" },
  { word: "Pudding", article: "der", translation: "pudding", category: "Süßes & Gebäck" },
  { word: "Waffel", article: "die", translation: "waffle", category: "Süßes & Gebäck" },
  { word: "Pfannkuchen", article: "der", translation: "pancake", category: "Süßes & Gebäck" },
  { word: "Marzipan", article: "das", translation: "marzipan", category: "Süßes & Gebäck" },

  // Nationalitäten & Sprachen
  { word: "Ausländer", article: "der", translation: "foreigner (male)", category: "Nationalitäten & Sprachen" },
  { word: "Ausländerin", article: "die", translation: "foreigner (female)", category: "Nationalitäten & Sprachen" },
  { word: "Muttersprache", article: "die", translation: "native language", category: "Nationalitäten & Sprachen" },
  { word: "Fremdsprache", article: "die", translation: "foreign language", category: "Nationalitäten & Sprachen" },
  { word: "Dialekt", article: "der", translation: "dialect", category: "Nationalitäten & Sprachen" },
  { word: "Akzent", article: "der", translation: "accent", category: "Nationalitäten & Sprachen" },
  { word: "Dolmetscher", article: "der", translation: "interpreter", category: "Nationalitäten & Sprachen" },

  // Politik
  { word: "Politik", article: "die", translation: "politics", category: "Politik" },
  { word: "Regierung", article: "die", translation: "government", category: "Politik" },
  { word: "Präsident", article: "der", translation: "president", category: "Politik" },
  { word: "Kanzler", article: "der", translation: "chancellor", category: "Politik" },
  { word: "Wahl", article: "die", translation: "election", category: "Politik" },
  { word: "Partei", article: "die", translation: "(political) party", category: "Politik" },
  { word: "Gesetz", article: "das", translation: "law", category: "Politik" },
  { word: "Bürger", article: "der", translation: "citizen", category: "Politik" },

  // Medien
  { word: "Nachrichtensendung", article: "die", translation: "news broadcast", category: "Medien" },
  { word: "Sender", article: "der", translation: "(TV/radio) channel", category: "Medien" },
  { word: "Werbung", article: "die", translation: "advertising", category: "Medien" },
  { word: "Programm", article: "das", translation: "program/schedule", category: "Medien" },
  { word: "Podcast", article: "der", translation: "podcast", category: "Medien" },
  { word: "Reportage", article: "die", translation: "report", category: "Medien" },
  { word: "Schlagzeile", article: "die", translation: "headline", category: "Medien" },

  // Emotionen im Detail
  { word: "Aufregung", article: "die", translation: "excitement", category: "Emotionen im Detail" },
  { word: "Nervosität", article: "die", translation: "nervousness", category: "Emotionen im Detail" },
  { word: "Gelassenheit", article: "die", translation: "calmness", category: "Emotionen im Detail" },
  { word: "Traurigkeit", article: "die", translation: "sadness", category: "Emotionen im Detail" },
  { word: "Dankbarkeit", article: "die", translation: "gratitude", category: "Emotionen im Detail" },
  { word: "Hoffnung", article: "die", translation: "hope", category: "Emotionen im Detail" },
  { word: "Wut", article: "die", translation: "anger", category: "Emotionen im Detail" },
  { word: "Zufriedenheit", article: "die", translation: "contentment", category: "Emotionen im Detail" },

  // Konflikte & Lösungen
  { word: "Streit", article: "der", translation: "argument", category: "Konflikte & Lösungen" },
  { word: "Kompromiss", article: "der", translation: "compromise", category: "Konflikte & Lösungen" },
  { word: "Lösung", article: "die", translation: "solution", category: "Konflikte & Lösungen" },
  { word: "Entscheidung", article: "die", translation: "decision", category: "Konflikte & Lösungen" },
  { word: "Möglichkeit", article: "die", translation: "possibility", category: "Konflikte & Lösungen" },
  { word: "Chance", article: "die", translation: "chance/opportunity", category: "Konflikte & Lösungen" },

  // Technologie im Alltag
  { word: "Chip", article: "der", translation: "chip", category: "Technologie im Alltag" },
  { word: "Drohne", article: "die", translation: "drone", category: "Technologie im Alltag" },
  { word: "Sensor", article: "der", translation: "sensor", category: "Technologie im Alltag" },
  { word: "Programmierung", article: "die", translation: "programming", category: "Technologie im Alltag" },
  { word: "Update", article: "das", translation: "update", category: "Technologie im Alltag" },
  { word: "Download", article: "der", translation: "download", category: "Technologie im Alltag" },
  { word: "Server", article: "der", translation: "server", category: "Technologie im Alltag" },

  // Verpackung & Materialien
  { word: "Karton", article: "der", translation: "cardboard box", category: "Verpackung & Materialien" },
  { word: "Folie", article: "die", translation: "foil/film", category: "Verpackung & Materialien" },
  { word: "Glasflasche", article: "die", translation: "glass bottle", category: "Verpackung & Materialien" },
  { word: "Aluminium", article: "das", translation: "aluminum", category: "Verpackung & Materialien" },
  { word: "Textil", article: "das", translation: "textile", category: "Verpackung & Materialien" },

  // Schulfächer
  { word: "Mathematik", article: "die", translation: "math", category: "Schulfächer" },
  { word: "Geschichte", article: "die", translation: "history", category: "Schulfächer" },
  { word: "Erdkunde", article: "die", translation: "geography (subject)", category: "Schulfächer" },
  { word: "Biologie", article: "die", translation: "biology", category: "Schulfächer" },
  { word: "Chemie", article: "die", translation: "chemistry", category: "Schulfächer" },
  { word: "Physik", article: "die", translation: "physics", category: "Schulfächer" },
  { word: "Religion", article: "die", translation: "religion (subject)", category: "Schulfächer" },
  { word: "Informatik", article: "die", translation: "computer science", category: "Schulfächer" },
  { word: "Philosophie", article: "die", translation: "philosophy", category: "Schulfächer" },

  // Versicherung & Verwaltung
  { word: "Versicherung", article: "die", translation: "insurance", category: "Versicherung & Verwaltung" },
  { word: "Steuer", article: "die", translation: "tax", category: "Versicherung & Verwaltung" },
  { word: "Rente", article: "die", translation: "pension", category: "Versicherung & Verwaltung" },
  { word: "Antrag", article: "der", translation: "application/request", category: "Versicherung & Verwaltung" },
  { word: "Dokument", article: "das", translation: "document", category: "Versicherung & Verwaltung" },
  { word: "Kopie", article: "die", translation: "copy", category: "Versicherung & Verwaltung" },

  // Beziehungen & Kommunikation
  { word: "Gespräch", article: "das", translation: "conversation", category: "Beziehungen & Kommunikation" },
  { word: "Diskussion", article: "die", translation: "discussion", category: "Beziehungen & Kommunikation" },
  { word: "Vertrauen", article: "das", translation: "trust", category: "Beziehungen & Kommunikation" },
  { word: "Freundschaft", article: "die", translation: "friendship", category: "Beziehungen & Kommunikation" },
  { word: "Beziehung", article: "die", translation: "relationship", category: "Beziehungen & Kommunikation" },
  { word: "Missverständnis", article: "das", translation: "misunderstanding", category: "Beziehungen & Kommunikation" },
  { word: "Kompliment", article: "das", translation: "compliment", category: "Beziehungen & Kommunikation" },
  { word: "Entschuldigung", article: "die", translation: "apology", category: "Beziehungen & Kommunikation" },

  // Kleine Haushaltsgegenstände
  { word: "Streichholz", article: "das", translation: "match (fire)", category: "Kleine Haushaltsgegenstände" },
  { word: "Feuerzeug", article: "das", translation: "lighter", category: "Kleine Haushaltsgegenstände" },
  { word: "Taschenlampe", article: "die", translation: "flashlight", category: "Kleine Haushaltsgegenstände" },
  { word: "Faden", article: "der", translation: "thread", category: "Kleine Haushaltsgegenstände" },
  { word: "Klebeband", article: "das", translation: "tape", category: "Kleine Haushaltsgegenstände" },

  // Berufliche Fähigkeiten
  { word: "Verantwortung", article: "die", translation: "responsibility", category: "Berufliche Fähigkeiten" },
  { word: "Teamarbeit", article: "die", translation: "teamwork", category: "Berufliche Fähigkeiten" },
  { word: "Führung", article: "die", translation: "leadership", category: "Berufliche Fähigkeiten" },
  { word: "Motivation", article: "die", translation: "motivation", category: "Berufliche Fähigkeiten" },
  { word: "Kreativität", article: "die", translation: "creativity", category: "Berufliche Fähigkeiten" },
  { word: "Organisation", article: "die", translation: "organization", category: "Berufliche Fähigkeiten" },
  { word: "Zusammenarbeit", article: "die", translation: "cooperation", category: "Berufliche Fähigkeiten" },
  { word: "Leistung", article: "die", translation: "performance/achievement", category: "Berufliche Fähigkeiten" },

  // Digitale Kommunikation
  { word: "Chat", article: "der", translation: "chat", category: "Digitale Kommunikation" },
  { word: "Kontakt", article: "der", translation: "contact", category: "Digitale Kommunikation" },
  { word: "Anhang", article: "der", translation: "attachment", category: "Digitale Kommunikation" },
  { word: "Benutzername", article: "der", translation: "username", category: "Digitale Kommunikation" },
  { word: "Bestätigung", article: "die", translation: "confirmation", category: "Digitale Kommunikation" },
  { word: "Verbindung", article: "die", translation: "connection", category: "Digitale Kommunikation" },

  // Reinigung & Ordnung
  { word: "Reinigung", article: "die", translation: "cleaning", category: "Reinigung & Ordnung" },
  { word: "Ordnung", article: "die", translation: "order/tidiness", category: "Reinigung & Ordnung" },
  { word: "Unordnung", article: "die", translation: "mess", category: "Reinigung & Ordnung" },
  { word: "Staub", article: "der", translation: "dust", category: "Reinigung & Ordnung" },
  { word: "Fleck", article: "der", translation: "stain", category: "Reinigung & Ordnung" },
  { word: "Waschmittel", article: "das", translation: "detergent", category: "Reinigung & Ordnung" },
  { word: "Mülltrennung", article: "die", translation: "waste separation", category: "Reinigung & Ordnung" },
];

// B1 adds 1000 new intermediate-level nouns on top of everything from A2 —
// the B1 pool is all of A1+A2 (as review) plus these, 2000 words total.
const b1NewWords: Omit<GermanNoun, "id">[] = [


  // Wissenschaftliche Berufe
  { word: "Wissenschaftler", article: "der", translation: "scientist (male)", category: "Wissenschaftliche Berufe" },
  { word: "Wissenschaftlerin", article: "die", translation: "scientist (female)", category: "Wissenschaftliche Berufe" },
  { word: "Forscher", article: "der", translation: "researcher (male)", category: "Wissenschaftliche Berufe" },
  { word: "Forscherin", article: "die", translation: "researcher (female)", category: "Wissenschaftliche Berufe" },
  { word: "Biologe", article: "der", translation: "biologist (male)", category: "Wissenschaftliche Berufe" },
  { word: "Biologin", article: "die", translation: "biologist (female)", category: "Wissenschaftliche Berufe" },
  { word: "Chemiker", article: "der", translation: "chemist (male)", category: "Wissenschaftliche Berufe" },
  { word: "Chemikerin", article: "die", translation: "chemist (female)", category: "Wissenschaftliche Berufe" },
  { word: "Physiker", article: "der", translation: "physicist (male)", category: "Wissenschaftliche Berufe" },
  { word: "Physikerin", article: "die", translation: "physicist (female)", category: "Wissenschaftliche Berufe" },
  { word: "Astronom", article: "der", translation: "astronomer (male)", category: "Wissenschaftliche Berufe" },
  { word: "Astronomin", article: "die", translation: "astronomer (female)", category: "Wissenschaftliche Berufe" },
  { word: "Geologe", article: "der", translation: "geologist (male)", category: "Wissenschaftliche Berufe" },
  { word: "Geologin", article: "die", translation: "geologist (female)", category: "Wissenschaftliche Berufe" },
  { word: "Historiker", article: "der", translation: "historian (male)", category: "Wissenschaftliche Berufe" },
  { word: "Historikerin", article: "die", translation: "historian (female)", category: "Wissenschaftliche Berufe" },
  { word: "Psychologe", article: "der", translation: "psychologist (male)", category: "Wissenschaftliche Berufe" },
  { word: "Psychologin", article: "die", translation: "psychologist (female)", category: "Wissenschaftliche Berufe" },

  // Weitere Berufe
  { word: "Architekt", article: "der", translation: "architect (male)", category: "Weitere Berufe" },
  { word: "Architektin", article: "die", translation: "architect (female)", category: "Weitere Berufe" },
  { word: "Designer", article: "der", translation: "designer (male)", category: "Weitere Berufe" },
  { word: "Designerin", article: "die", translation: "designer (female)", category: "Weitere Berufe" },
  { word: "Regisseur", article: "der", translation: "director (film, male)", category: "Weitere Berufe" },
  { word: "Regisseurin", article: "die", translation: "director (film, female)", category: "Weitere Berufe" },
  { word: "Produzent", article: "der", translation: "producer (male)", category: "Weitere Berufe" },
  { word: "Produzentin", article: "die", translation: "producer (female)", category: "Weitere Berufe" },
  { word: "Redakteur", article: "der", translation: "editor (male)", category: "Weitere Berufe" },
  { word: "Redakteurin", article: "die", translation: "editor (female)", category: "Weitere Berufe" },
  { word: "Moderator", article: "der", translation: "host/presenter (male)", category: "Weitere Berufe" },
  { word: "Moderatorin", article: "die", translation: "host/presenter (female)", category: "Weitere Berufe" },
  { word: "Diplomat", article: "der", translation: "diplomat (male)", category: "Weitere Berufe" },
  { word: "Diplomatin", article: "die", translation: "diplomat (female)", category: "Weitere Berufe" },
  { word: "Unternehmer", article: "der", translation: "entrepreneur (male)", category: "Weitere Berufe" },
  { word: "Unternehmerin", article: "die", translation: "entrepreneur (female)", category: "Weitere Berufe" },

  // Führung & Management
  { word: "Manager", article: "der", translation: "manager (male)", category: "Führung & Management" },
  { word: "Managerin", article: "die", translation: "manager (female)", category: "Führung & Management" },
  { word: "Direktor", article: "der", translation: "director (male)", category: "Führung & Management" },
  { word: "Direktorin", article: "die", translation: "director (female)", category: "Führung & Management" },
  { word: "Vorstand", article: "der", translation: "executive board", category: "Führung & Management" },
  { word: "Geschäftsführer", article: "der", translation: "CEO (male)", category: "Führung & Management" },
  { word: "Geschäftsführerin", article: "die", translation: "CEO (female)", category: "Führung & Management" },
  { word: "Berater", article: "der", translation: "consultant (male)", category: "Führung & Management" },
  { word: "Beraterin", article: "die", translation: "consultant (female)", category: "Führung & Management" },
  { word: "Analyst", article: "der", translation: "analyst (male)", category: "Führung & Management" },
  { word: "Analystin", article: "die", translation: "analyst (female)", category: "Führung & Management" },
  { word: "Investor", article: "der", translation: "investor (male)", category: "Führung & Management" },
  { word: "Investorin", article: "die", translation: "investor (female)", category: "Führung & Management" },
  { word: "Aktionär", article: "der", translation: "shareholder", category: "Führung & Management" },

  // Wissenschaft & Forschung
  { word: "Theorie", article: "die", translation: "theory", category: "Wissenschaft & Forschung" },
  { word: "Hypothese", article: "die", translation: "hypothesis", category: "Wissenschaft & Forschung" },
  { word: "Studie", article: "die", translation: "study", category: "Wissenschaft & Forschung" },
  { word: "Ergebnis", article: "das", translation: "result", category: "Wissenschaft & Forschung" },
  { word: "Statistik", article: "die", translation: "statistics", category: "Wissenschaft & Forschung" },
  { word: "Labor", article: "das", translation: "laboratory", category: "Wissenschaft & Forschung" },
  { word: "Mikroskop", article: "das", translation: "microscope", category: "Wissenschaft & Forschung" },
  { word: "Molekül", article: "das", translation: "molecule", category: "Wissenschaft & Forschung" },
  { word: "Atom", article: "das", translation: "atom", category: "Wissenschaft & Forschung" },
  { word: "Zelle", article: "die", translation: "cell (biology)", category: "Wissenschaft & Forschung" },
  { word: "Gen", article: "das", translation: "gene", category: "Wissenschaft & Forschung" },
  { word: "Element", article: "das", translation: "element", category: "Wissenschaft & Forschung" },
  { word: "Reaktion", article: "die", translation: "reaction", category: "Wissenschaft & Forschung" },
  { word: "Substanz", article: "die", translation: "substance", category: "Wissenschaft & Forschung" },
  { word: "Beweis", article: "der", translation: "proof/evidence", category: "Wissenschaft & Forschung" },

  // Psychologie & Verhalten
  { word: "Bewusstsein", article: "das", translation: "consciousness", category: "Psychologie & Verhalten" },
  { word: "Wahrnehmung", article: "die", translation: "perception", category: "Psychologie & Verhalten" },
  { word: "Erinnerung", article: "die", translation: "memory (a memory)", category: "Psychologie & Verhalten" },
  { word: "Gedächtnis", article: "das", translation: "memory (faculty)", category: "Psychologie & Verhalten" },
  { word: "Konzentration", article: "die", translation: "concentration", category: "Psychologie & Verhalten" },
  { word: "Aufmerksamkeit", article: "die", translation: "attention", category: "Psychologie & Verhalten" },
  { word: "Intuition", article: "die", translation: "intuition", category: "Psychologie & Verhalten" },
  { word: "Instinkt", article: "der", translation: "instinct", category: "Psychologie & Verhalten" },
  { word: "Verhalten", article: "das", translation: "behavior", category: "Psychologie & Verhalten" },
  { word: "Gewohnheit", article: "die", translation: "habit", category: "Psychologie & Verhalten" },
  { word: "Rücksicht", article: "die", translation: "consideration (for others)", category: "Psychologie & Verhalten" },
  { word: "Stimmung", article: "die", translation: "mood", category: "Psychologie & Verhalten" },
  { word: "Beratung", article: "die", translation: "counseling", category: "Psychologie & Verhalten" },

  // Gesellschaft & soziale Themen
  { word: "Ungleichheit", article: "die", translation: "inequality", category: "Gesellschaft & soziale Themen" },
  { word: "Armut", article: "die", translation: "poverty", category: "Gesellschaft & soziale Themen" },
  { word: "Reichtum", article: "der", translation: "wealth", category: "Gesellschaft & soziale Themen" },
  { word: "Wohlstand", article: "der", translation: "prosperity", category: "Gesellschaft & soziale Themen" },
  { word: "Diskriminierung", article: "die", translation: "discrimination", category: "Gesellschaft & soziale Themen" },
  { word: "Vorurteil", article: "das", translation: "prejudice", category: "Gesellschaft & soziale Themen" },
  { word: "Toleranz", article: "die", translation: "tolerance", category: "Gesellschaft & soziale Themen" },
  { word: "Respekt", article: "der", translation: "respect", category: "Gesellschaft & soziale Themen" },
  { word: "Solidarität", article: "die", translation: "solidarity", category: "Gesellschaft & soziale Themen" },
  { word: "Integration", article: "die", translation: "integration", category: "Gesellschaft & soziale Themen" },
  { word: "Minderheit", article: "die", translation: "minority", category: "Gesellschaft & soziale Themen" },
  { word: "Mehrheit", article: "die", translation: "majority", category: "Gesellschaft & soziale Themen" },
  { word: "Gleichberechtigung", article: "die", translation: "equal rights", category: "Gesellschaft & soziale Themen" },
  { word: "Norm", article: "die", translation: "norm", category: "Gesellschaft & soziale Themen" },

  // Wirtschaft (vertieft)
  { word: "Aktie", article: "die", translation: "stock/share", category: "Wirtschaft (vertieft)" },
  { word: "Börse", article: "die", translation: "stock exchange", category: "Wirtschaft (vertieft)" },
  { word: "Umsatz", article: "der", translation: "revenue", category: "Wirtschaft (vertieft)" },
  { word: "Etat", article: "der", translation: "budget", category: "Wirtschaft (vertieft)" },
  { word: "Finanzierung", article: "die", translation: "financing", category: "Wirtschaft (vertieft)" },
  { word: "Marketing", article: "das", translation: "marketing", category: "Wirtschaft (vertieft)" },
  { word: "Zielgruppe", article: "die", translation: "target audience", category: "Wirtschaft (vertieft)" },
  { word: "Konkurrenz", article: "die", translation: "competition (business)", category: "Wirtschaft (vertieft)" },
  { word: "Monopol", article: "das", translation: "monopoly", category: "Wirtschaft (vertieft)" },
  { word: "Globalisierung", article: "die", translation: "globalization", category: "Wirtschaft (vertieft)" },
  { word: "Lieferkette", article: "die", translation: "supply chain", category: "Wirtschaft (vertieft)" },
  { word: "Marktanteil", article: "der", translation: "market share", category: "Wirtschaft (vertieft)" },
  { word: "Fusion", article: "die", translation: "merger", category: "Wirtschaft (vertieft)" },
  { word: "Filiale", article: "die", translation: "branch (business)", category: "Wirtschaft (vertieft)" },

  // Finanzen (vertieft)
  { word: "Inflation", article: "die", translation: "inflation", category: "Finanzen (vertieft)" },
  { word: "Rezession", article: "die", translation: "recession", category: "Finanzen (vertieft)" },
  { word: "Konjunktur", article: "die", translation: "economic cycle", category: "Finanzen (vertieft)" },
  { word: "Schuld", article: "die", translation: "debt", category: "Finanzen (vertieft)" },
  { word: "Schuldner", article: "der", translation: "debtor", category: "Finanzen (vertieft)" },
  { word: "Vermögen", article: "das", translation: "wealth/assets", category: "Finanzen (vertieft)" },
  { word: "Investition", article: "die", translation: "investment", category: "Finanzen (vertieft)" },
  { word: "Rendite", article: "die", translation: "return (on investment)", category: "Finanzen (vertieft)" },
  { word: "Risiko", article: "das", translation: "risk", category: "Finanzen (vertieft)" },
  { word: "Absicherung", article: "die", translation: "hedge/protection", category: "Finanzen (vertieft)" },
  { word: "Spekulation", article: "die", translation: "speculation", category: "Finanzen (vertieft)" },
  { word: "Haushalt", article: "der", translation: "budget (household/state)", category: "Finanzen (vertieft)" },
  { word: "Subvention", article: "die", translation: "subsidy", category: "Finanzen (vertieft)" },

  // Umwelt & Klima (vertieft)
  { word: "Treibhauseffekt", article: "der", translation: "greenhouse effect", category: "Umwelt & Klima (vertieft)" },
  { word: "Emission", article: "die", translation: "emission", category: "Umwelt & Klima (vertieft)" },
  { word: "Artenvielfalt", article: "die", translation: "biodiversity", category: "Umwelt & Klima (vertieft)" },
  { word: "Naturschutz", article: "der", translation: "nature conservation", category: "Umwelt & Klima (vertieft)" },
  { word: "Nationalpark", article: "der", translation: "national park", category: "Umwelt & Klima (vertieft)" },
  { word: "Mülldeponie", article: "die", translation: "landfill", category: "Umwelt & Klima (vertieft)" },
  { word: "Plastikmüll", article: "der", translation: "plastic waste", category: "Umwelt & Klima (vertieft)" },
  { word: "Abgas", article: "das", translation: "exhaust fumes", category: "Umwelt & Klima (vertieft)" },
  { word: "Ozonschicht", article: "die", translation: "ozone layer", category: "Umwelt & Klima (vertieft)" },
  { word: "Erderwärmung", article: "die", translation: "global warming", category: "Umwelt & Klima (vertieft)" },
  { word: "Nachhaltigkeit", article: "die", translation: "sustainability", category: "Umwelt & Klima (vertieft)" },
  { word: "Umweltschützer", article: "der", translation: "environmentalist", category: "Umwelt & Klima (vertieft)" },

  // Erneuerbare Energien
  { word: "Windkraft", article: "die", translation: "wind power", category: "Erneuerbare Energien" },
  { word: "Wasserkraft", article: "die", translation: "hydropower", category: "Erneuerbare Energien" },
  { word: "Solaranlage", article: "die", translation: "solar panel system", category: "Erneuerbare Energien" },
  { word: "Kernenergie", article: "die", translation: "nuclear energy", category: "Erneuerbare Energien" },
  { word: "Kraftwerk", article: "das", translation: "power plant", category: "Erneuerbare Energien" },
  { word: "Stromnetz", article: "das", translation: "power grid", category: "Erneuerbare Energien" },
  { word: "Batteriespeicher", article: "der", translation: "battery storage", category: "Erneuerbare Energien" },
  { word: "Windrad", article: "das", translation: "wind turbine", category: "Erneuerbare Energien" },
  { word: "Rohstoff", article: "der", translation: "raw material", category: "Erneuerbare Energien" },
  { word: "Verbrauch", article: "der", translation: "consumption", category: "Erneuerbare Energien" },

  // Politik & Staat (vertieft)
  { word: "Verfassung", article: "die", translation: "constitution", category: "Politik & Staat (vertieft)" },
  { word: "Parlament", article: "das", translation: "parliament", category: "Politik & Staat (vertieft)" },
  { word: "Opposition", article: "die", translation: "opposition", category: "Politik & Staat (vertieft)" },
  { word: "Koalition", article: "die", translation: "coalition", category: "Politik & Staat (vertieft)" },
  { word: "Diktatur", article: "die", translation: "dictatorship", category: "Politik & Staat (vertieft)" },
  { word: "Demokratie", article: "die", translation: "democracy", category: "Politik & Staat (vertieft)" },
  { word: "Monarchie", article: "die", translation: "monarchy", category: "Politik & Staat (vertieft)" },
  { word: "Republik", article: "die", translation: "republic", category: "Politik & Staat (vertieft)" },
  { word: "Bürokratie", article: "die", translation: "bureaucracy", category: "Politik & Staat (vertieft)" },
  { word: "Korruption", article: "die", translation: "corruption", category: "Politik & Staat (vertieft)" },
  { word: "Skandal", article: "der", translation: "scandal", category: "Politik & Staat (vertieft)" },
  { word: "Reform", article: "die", translation: "reform", category: "Politik & Staat (vertieft)" },
  { word: "Revolution", article: "die", translation: "revolution", category: "Politik & Staat (vertieft)" },
  { word: "Bündnis", article: "das", translation: "alliance", category: "Politik & Staat (vertieft)" },
  { word: "Abstimmung", article: "die", translation: "vote/voting", category: "Politik & Staat (vertieft)" },

  // Recht & Justiz (vertieft)
  { word: "Rechtsanwalt", article: "der", translation: "lawyer/attorney", category: "Recht & Justiz (vertieft)" },
  { word: "Klage", article: "die", translation: "lawsuit", category: "Recht & Justiz (vertieft)" },
  { word: "Urteil", article: "das", translation: "verdict", category: "Recht & Justiz (vertieft)" },
  { word: "Beweismittel", article: "das", translation: "evidence (legal)", category: "Recht & Justiz (vertieft)" },
  { word: "Zeuge", article: "der", translation: "witness", category: "Recht & Justiz (vertieft)" },
  { word: "Verdächtige", article: "der", translation: "suspect", category: "Recht & Justiz (vertieft)" },
  { word: "Gefängnis", article: "das", translation: "prison", category: "Recht & Justiz (vertieft)" },
  { word: "Verbrechen", article: "das", translation: "crime", category: "Recht & Justiz (vertieft)" },
  { word: "Diebstahl", article: "der", translation: "theft", category: "Recht & Justiz (vertieft)" },
  { word: "Betrug", article: "der", translation: "fraud", category: "Recht & Justiz (vertieft)" },
  { word: "Gerechtigkeit", article: "die", translation: "justice", category: "Recht & Justiz (vertieft)" },
  { word: "Menschenrecht", article: "das", translation: "human right", category: "Recht & Justiz (vertieft)" },

  // Medien (vertieft)
  { word: "Berichterstattung", article: "die", translation: "news coverage", category: "Medien (vertieft)" },
  { word: "Zensur", article: "die", translation: "censorship", category: "Medien (vertieft)" },
  { word: "Meinungsfreiheit", article: "die", translation: "freedom of speech", category: "Medien (vertieft)" },
  { word: "Pressefreiheit", article: "die", translation: "freedom of the press", category: "Medien (vertieft)" },
  { word: "Auflage", article: "die", translation: "circulation (press)", category: "Medien (vertieft)" },
  { word: "Zuschauer", article: "der", translation: "viewer", category: "Medien (vertieft)" },
  { word: "Zuhörer", article: "der", translation: "listener", category: "Medien (vertieft)" },
  { word: "Algorithmus", article: "der", translation: "algorithm", category: "Medien (vertieft)" },
  { word: "Plattform", article: "die", translation: "platform", category: "Medien (vertieft)" },
  { word: "Öffentlichkeit", article: "die", translation: "the public", category: "Medien (vertieft)" },
  { word: "Manipulation", article: "die", translation: "manipulation", category: "Medien (vertieft)" },

  // Gesundheit (vertieft)
  { word: "Symptom", article: "das", translation: "symptom", category: "Gesundheit (vertieft)" },
  { word: "Behandlung", article: "die", translation: "treatment", category: "Gesundheit (vertieft)" },
  { word: "Operation", article: "die", translation: "surgery", category: "Gesundheit (vertieft)" },
  { word: "Chirurg", article: "der", translation: "surgeon", category: "Gesundheit (vertieft)" },
  { word: "Narkose", article: "die", translation: "anesthesia", category: "Gesundheit (vertieft)" },
  { word: "Prävention", article: "die", translation: "prevention", category: "Gesundheit (vertieft)" },
  { word: "Epidemie", article: "die", translation: "epidemic", category: "Gesundheit (vertieft)" },
  { word: "Virus", article: "das", translation: "virus", category: "Gesundheit (vertieft)" },
  { word: "Bakterie", article: "die", translation: "bacterium", category: "Gesundheit (vertieft)" },
  { word: "Infektion", article: "die", translation: "infection", category: "Gesundheit (vertieft)" },
  { word: "Immunsystem", article: "das", translation: "immune system", category: "Gesundheit (vertieft)" },
  { word: "Impfstoff", article: "der", translation: "vaccine", category: "Gesundheit (vertieft)" },
  { word: "Allergie", article: "die", translation: "allergy", category: "Gesundheit (vertieft)" },
  { word: "Diät", article: "die", translation: "diet", category: "Gesundheit (vertieft)" },

  // Bildung (vertieft)
  { word: "Lehrplan", article: "der", translation: "curriculum", category: "Bildung (vertieft)" },
  { word: "Unterricht", article: "der", translation: "instruction/class", category: "Bildung (vertieft)" },
  { word: "Bildungssystem", article: "das", translation: "education system", category: "Bildung (vertieft)" },
  { word: "Abschluss", article: "der", translation: "graduation/degree", category: "Bildung (vertieft)" },
  { word: "Diplom", article: "das", translation: "diploma", category: "Bildung (vertieft)" },
  { word: "Stipendium", article: "das", translation: "scholarship", category: "Bildung (vertieft)" },
  { word: "Austauschprogramm", article: "das", translation: "exchange program", category: "Bildung (vertieft)" },
  { word: "Seminar", article: "das", translation: "seminar", category: "Bildung (vertieft)" },
  { word: "Doktorarbeit", article: "die", translation: "doctoral thesis", category: "Bildung (vertieft)" },
  { word: "Fakultät", article: "die", translation: "faculty/department", category: "Bildung (vertieft)" },
  { word: "Campus", article: "der", translation: "campus", category: "Bildung (vertieft)" },
  { word: "Weiterbildung", article: "die", translation: "continuing education", category: "Bildung (vertieft)" },

  // Philosophie & Ethik
  { word: "Lebensweise", article: "die", translation: "way of life", category: "Philosophie & Ethik" },
  { word: "Sinn", article: "der", translation: "meaning/purpose", category: "Philosophie & Ethik" },
  { word: "Wert", article: "der", translation: "value", category: "Philosophie & Ethik" },
  { word: "Moral", article: "die", translation: "morality", category: "Philosophie & Ethik" },
  { word: "Ethik", article: "die", translation: "ethics", category: "Philosophie & Ethik" },
  { word: "Freiheit", article: "die", translation: "freedom", category: "Philosophie & Ethik" },
  { word: "Gleichheit", article: "die", translation: "equality", category: "Philosophie & Ethik" },
  { word: "Wahrheit", article: "die", translation: "truth", category: "Philosophie & Ethik" },
  { word: "Realität", article: "die", translation: "reality", category: "Philosophie & Ethik" },
  { word: "Selbstzweifel", article: "der", translation: "self-doubt", category: "Philosophie & Ethik" },
  { word: "Identität", article: "die", translation: "identity", category: "Philosophie & Ethik" },
  { word: "Charakterzug", article: "der", translation: "character trait", category: "Philosophie & Ethik" },
  { word: "Fairness", article: "die", translation: "fairness", category: "Philosophie & Ethik" },

  // Kunst & Literatur (vertieft)
  { word: "Stil", article: "der", translation: "style", category: "Kunst & Literatur (vertieft)" },
  { word: "Epoche", article: "die", translation: "era/epoch", category: "Kunst & Literatur (vertieft)" },
  { word: "Genre", article: "das", translation: "genre", category: "Kunst & Literatur (vertieft)" },
  { word: "Interpretation", article: "die", translation: "interpretation", category: "Kunst & Literatur (vertieft)" },
  { word: "Symbolik", article: "die", translation: "symbolism", category: "Kunst & Literatur (vertieft)" },
  { word: "Metapher", article: "die", translation: "metaphor", category: "Kunst & Literatur (vertieft)" },
  { word: "Erzähler", article: "der", translation: "narrator", category: "Kunst & Literatur (vertieft)" },
  { word: "Perspektive", article: "die", translation: "perspective", category: "Kunst & Literatur (vertieft)" },
  { word: "Handlung", article: "die", translation: "plot", category: "Kunst & Literatur (vertieft)" },
  { word: "Figur", article: "die", translation: "character (fiction)", category: "Kunst & Literatur (vertieft)" },
  { word: "Kapitel", article: "das", translation: "chapter", category: "Kunst & Literatur (vertieft)" },
  { word: "Verlag", article: "der", translation: "publishing house", category: "Kunst & Literatur (vertieft)" },

  // Sport (vertieft)
  { word: "Ausdauer", article: "die", translation: "endurance", category: "Sport (vertieft)" },
  { word: "Kondition", article: "die", translation: "physical fitness", category: "Sport (vertieft)" },
  { word: "Verletzung", article: "die", translation: "injury", category: "Sport (vertieft)" },
  { word: "Doping", article: "das", translation: "doping", category: "Sport (vertieft)" },
  { word: "Schiedsrichter", article: "der", translation: "referee", category: "Sport (vertieft)" },
  { word: "Publikum", article: "das", translation: "audience/crowd", category: "Sport (vertieft)" },
  { word: "Tabelle", article: "die", translation: "standings/table", category: "Sport (vertieft)" },
  { word: "Aufstieg", article: "der", translation: "promotion (league)", category: "Sport (vertieft)" },
  { word: "Abstieg", article: "der", translation: "relegation", category: "Sport (vertieft)" },
  { word: "Halbfinale", article: "das", translation: "semifinal", category: "Sport (vertieft)" },
  { word: "Endspiel", article: "das", translation: "final (match)", category: "Sport (vertieft)" },

  // Technologie (vertieft)
  { word: "Datenbank", article: "die", translation: "database", category: "Technologie (vertieft)" },
  { word: "Netzwerk", article: "das", translation: "network", category: "Technologie (vertieft)" },
  { word: "Verschlüsselung", article: "die", translation: "encryption", category: "Technologie (vertieft)" },
  { word: "Innovation", article: "die", translation: "innovation", category: "Technologie (vertieft)" },
  { word: "Erfindung", article: "die", translation: "invention", category: "Technologie (vertieft)" },
  { word: "Patent", article: "das", translation: "patent", category: "Technologie (vertieft)" },
  { word: "Roboter", article: "der", translation: "robot", category: "Technologie (vertieft)" },
  { word: "Automatisierung", article: "die", translation: "automation", category: "Technologie (vertieft)" },
  { word: "Simulation", article: "die", translation: "simulation", category: "Technologie (vertieft)" },
  { word: "Schnittstelle", article: "die", translation: "interface", category: "Technologie (vertieft)" },
  { word: "Cloud", article: "die", translation: "cloud (computing)", category: "Technologie (vertieft)" },

  // Naturkatastrophen & Phänomene
  { word: "Tsunami", article: "der", translation: "tsunami", category: "Naturkatastrophen & Phänomene" },
  { word: "Wirbelsturm", article: "der", translation: "hurricane/cyclone", category: "Naturkatastrophen & Phänomene" },
  { word: "Tornado", article: "der", translation: "tornado", category: "Naturkatastrophen & Phänomene" },
  { word: "Lawine", article: "die", translation: "avalanche", category: "Naturkatastrophen & Phänomene" },
  { word: "Erdrutsch", article: "der", translation: "landslide", category: "Naturkatastrophen & Phänomene" },
  { word: "Überschwemmung", article: "die", translation: "flood", category: "Naturkatastrophen & Phänomene" },
  { word: "Waldbrand", article: "der", translation: "wildfire", category: "Naturkatastrophen & Phänomene" },
  { word: "Naturkatastrophe", article: "die", translation: "natural disaster", category: "Naturkatastrophen & Phänomene" },
  { word: "Beben", article: "das", translation: "tremor/quake", category: "Naturkatastrophen & Phänomene" },
  { word: "Katastrophe", article: "die", translation: "catastrophe", category: "Naturkatastrophen & Phänomene" },

  // Migration & Integration
  { word: "Auswanderung", article: "die", translation: "emigration", category: "Migration & Integration" },
  { word: "Einwanderung", article: "die", translation: "immigration", category: "Migration & Integration" },
  { word: "Flüchtling", article: "der", translation: "refugee", category: "Migration & Integration" },
  { word: "Asyl", article: "das", translation: "asylum", category: "Migration & Integration" },
  { word: "Kulturschock", article: "der", translation: "culture shock", category: "Migration & Integration" },
  { word: "Herkunft", article: "die", translation: "origin/background", category: "Migration & Integration" },
  { word: "Heimat", article: "die", translation: "homeland", category: "Migration & Integration" },
  { word: "Staatsangehörigkeit", article: "die", translation: "citizenship", category: "Migration & Integration" },
  { word: "Aufenthaltsgenehmigung", article: "die", translation: "residence permit", category: "Migration & Integration" },
  { word: "Vielfalt", article: "die", translation: "diversity", category: "Migration & Integration" },

  // Lebensphasen
  { word: "Kindheit", article: "die", translation: "childhood", category: "Lebensphasen" },
  { word: "Pubertät", article: "die", translation: "puberty", category: "Lebensphasen" },
  { word: "Erwachsenenalter", article: "das", translation: "adulthood", category: "Lebensphasen" },
  { word: "Lebensphase", article: "die", translation: "stage of life", category: "Lebensphasen" },
  { word: "Erbe", article: "das", translation: "inheritance/legacy", category: "Lebensphasen" },
  { word: "Nachlass", article: "der", translation: "estate (inheritance)", category: "Lebensphasen" },
  { word: "Ruhestand", article: "der", translation: "retirement", category: "Lebensphasen" },
  { word: "Meilenstein", article: "der", translation: "milestone", category: "Lebensphasen" },
  { word: "Wendepunkt", article: "der", translation: "turning point", category: "Lebensphasen" },

  // Karriere & Arbeitsleben (vertieft)
  { word: "Karriere", article: "die", translation: "career", category: "Karriere & Arbeitsleben (vertieft)" },
  { word: "Kündigung", article: "die", translation: "termination/resignation", category: "Karriere & Arbeitsleben (vertieft)" },
  { word: "Entlassung", article: "die", translation: "layoff", category: "Karriere & Arbeitsleben (vertieft)" },
  { word: "Beförderung", article: "die", translation: "promotion (job)", category: "Karriere & Arbeitsleben (vertieft)" },
  { word: "Homeoffice", article: "das", translation: "working from home", category: "Karriere & Arbeitsleben (vertieft)" },
  { word: "Überstunde", article: "die", translation: "overtime", category: "Karriere & Arbeitsleben (vertieft)" },
  { word: "Praktikum", article: "das", translation: "internship", category: "Karriere & Arbeitsleben (vertieft)" },
  { word: "Praktikant", article: "der", translation: "intern (male)", category: "Karriere & Arbeitsleben (vertieft)" },
  { word: "Fachkraft", article: "die", translation: "skilled worker", category: "Karriere & Arbeitsleben (vertieft)" },
  { word: "Arbeitsmarkt", article: "der", translation: "job market", category: "Karriere & Arbeitsleben (vertieft)" },
  { word: "Arbeitslosigkeit", article: "die", translation: "unemployment", category: "Karriere & Arbeitsleben (vertieft)" },
  { word: "Gewerkschaft", article: "die", translation: "labor union", category: "Karriere & Arbeitsleben (vertieft)" },
  { word: "Streik", article: "der", translation: "strike (labor)", category: "Karriere & Arbeitsleben (vertieft)" },

  // Kommunikation & Rhetorik
  { word: "Wortwahl", article: "die", translation: "choice of words", category: "Kommunikation & Rhetorik" },
  { word: "Debatte", article: "die", translation: "debate", category: "Kommunikation & Rhetorik" },
  { word: "Argument", article: "das", translation: "argument", category: "Kommunikation & Rhetorik" },
  { word: "Gegenargument", article: "das", translation: "counterargument", category: "Kommunikation & Rhetorik" },
  { word: "Standpunkt", article: "der", translation: "standpoint", category: "Kommunikation & Rhetorik" },
  { word: "Überzeugung", article: "die", translation: "conviction", category: "Kommunikation & Rhetorik" },
  { word: "Widerspruch", article: "der", translation: "contradiction", category: "Kommunikation & Rhetorik" },
  { word: "Zusammenfassung", article: "die", translation: "summary", category: "Kommunikation & Rhetorik" },
  { word: "Vortrag", article: "der", translation: "presentation/lecture", category: "Kommunikation & Rhetorik" },

  // Konsum & Gesellschaft
  { word: "Konsum", article: "der", translation: "consumption", category: "Konsum & Gesellschaft" },
  { word: "Konsument", article: "der", translation: "consumer", category: "Konsum & Gesellschaft" },
  { word: "Verbraucherschutz", article: "der", translation: "consumer protection", category: "Konsum & Gesellschaft" },
  { word: "Werbekampagne", article: "die", translation: "advertising campaign", category: "Konsum & Gesellschaft" },
  { word: "Trend", article: "der", translation: "trend", category: "Konsum & Gesellschaft" },
  { word: "Lebensstandard", article: "der", translation: "standard of living", category: "Konsum & Gesellschaft" },
  { word: "Lebensstil", article: "der", translation: "lifestyle", category: "Konsum & Gesellschaft" },
  { word: "Statussymbol", article: "das", translation: "status symbol", category: "Konsum & Gesellschaft" },
  { word: "Massenproduktion", article: "die", translation: "mass production", category: "Konsum & Gesellschaft" },

  // Geschichte
  { word: "Jahrhundert", article: "das", translation: "century", category: "Geschichte" },
  { word: "Jahrzehnt", article: "das", translation: "decade", category: "Geschichte" },
  { word: "Zeitalter", article: "das", translation: "age/era", category: "Geschichte" },
  { word: "Herrscher", article: "der", translation: "ruler", category: "Geschichte" },
  { word: "Reich", article: "das", translation: "empire", category: "Geschichte" },
  { word: "Kolonie", article: "die", translation: "colony", category: "Geschichte" },
  { word: "Unabhängigkeit", article: "die", translation: "independence", category: "Geschichte" },
  { word: "Denkmal", article: "das", translation: "monument", category: "Geschichte" },
  { word: "Ruine", article: "die", translation: "ruin", category: "Geschichte" },
  { word: "Ausgrabung", article: "die", translation: "excavation", category: "Geschichte" },
  { word: "Überlieferung", article: "die", translation: "tradition/legacy (historical)", category: "Geschichte" },
  { word: "Vorfahre", article: "der", translation: "ancestor", category: "Geschichte" },
  { word: "Nachfahre", article: "der", translation: "descendant", category: "Geschichte" },

  // Religion & Glauben
  { word: "Glaube", article: "der", translation: "faith/belief", category: "Religion & Glauben" },
  { word: "Gott", article: "der", translation: "god", category: "Religion & Glauben" },
  { word: "Gebet", article: "das", translation: "prayer", category: "Religion & Glauben" },
  { word: "Gottesdienst", article: "der", translation: "church service", category: "Religion & Glauben" },
  { word: "Seele", article: "die", translation: "soul", category: "Religion & Glauben" },
  { word: "Ritual", article: "das", translation: "ritual", category: "Religion & Glauben" },
  { word: "Pilger", article: "der", translation: "pilgrim", category: "Religion & Glauben" },
  { word: "Kloster", article: "das", translation: "monastery", category: "Religion & Glauben" },
  { word: "Priester", article: "der", translation: "priest", category: "Religion & Glauben" },
  { word: "Gemeinde", article: "die", translation: "congregation/parish", category: "Religion & Glauben" },

  // Architektur & Bauwesen
  { word: "Architektur", article: "die", translation: "architecture", category: "Architektur & Bauwesen" },
  { word: "Baustelle", article: "die", translation: "construction site", category: "Architektur & Bauwesen" },
  { word: "Fundament", article: "das", translation: "foundation", category: "Architektur & Bauwesen" },
  { word: "Gerüst", article: "das", translation: "scaffolding", category: "Architektur & Bauwesen" },
  { word: "Bauplan", article: "der", translation: "building plan", category: "Architektur & Bauwesen" },
  { word: "Wolkenkratzer", article: "der", translation: "skyscraper", category: "Architektur & Bauwesen" },
  { word: "Fassade", article: "die", translation: "facade", category: "Architektur & Bauwesen" },
  { word: "Konstruktion", article: "die", translation: "construction", category: "Architektur & Bauwesen" },
  { word: "Renovierung", article: "die", translation: "renovation", category: "Architektur & Bauwesen" },
  { word: "Abriss", article: "der", translation: "demolition", category: "Architektur & Bauwesen" },

  // Landwirtschaft & Ernährung (vertieft)
  { word: "Anbau", article: "der", translation: "cultivation", category: "Landwirtschaft & Ernährung (vertieft)" },
  { word: "Dünger", article: "der", translation: "fertilizer", category: "Landwirtschaft & Ernährung (vertieft)" },
  { word: "Pestizid", article: "das", translation: "pesticide", category: "Landwirtschaft & Ernährung (vertieft)" },
  { word: "Bio-Lebensmittel", article: "das", translation: "organic food", category: "Landwirtschaft & Ernährung (vertieft)" },
  { word: "Gentechnik", article: "die", translation: "genetic engineering", category: "Landwirtschaft & Ernährung (vertieft)" },
  { word: "Nährstoff", article: "der", translation: "nutrient", category: "Landwirtschaft & Ernährung (vertieft)" },
  { word: "Vitamin", article: "das", translation: "vitamin", category: "Landwirtschaft & Ernährung (vertieft)" },
  { word: "Ballaststoff", article: "der", translation: "dietary fiber", category: "Landwirtschaft & Ernährung (vertieft)" },
  { word: "Kalorie", article: "die", translation: "calorie", category: "Landwirtschaft & Ernährung (vertieft)" },
  { word: "Mangelernährung", article: "die", translation: "malnutrition", category: "Landwirtschaft & Ernährung (vertieft)" },

  // Verkehr & Mobilität (vertieft)
  { word: "Mobilität", article: "die", translation: "mobility", category: "Verkehr & Mobilität (vertieft)" },
  { word: "Verkehrsmittel", article: "das", translation: "means of transport", category: "Verkehr & Mobilität (vertieft)" },
  { word: "Elektroauto", article: "das", translation: "electric car", category: "Verkehr & Mobilität (vertieft)" },
  { word: "Ladestation", article: "die", translation: "charging station", category: "Verkehr & Mobilität (vertieft)" },
  { word: "Fahrgast", article: "der", translation: "passenger", category: "Verkehr & Mobilität (vertieft)" },
  { word: "Fahrplan", article: "der", translation: "timetable/schedule", category: "Verkehr & Mobilität (vertieft)" },
  { word: "Anschluss", article: "der", translation: "connection (transport)", category: "Verkehr & Mobilität (vertieft)" },
  { word: "Infrastruktur", article: "die", translation: "infrastructure", category: "Verkehr & Mobilität (vertieft)" },
  { word: "Verkehrsschild", article: "das", translation: "traffic sign", category: "Verkehr & Mobilität (vertieft)" },
  { word: "Umleitung", article: "die", translation: "detour", category: "Verkehr & Mobilität (vertieft)" },

  // Tourismus (vertieft)
  { word: "Massentourismus", article: "der", translation: "mass tourism", category: "Tourismus (vertieft)" },
  { word: "Ökotourismus", article: "der", translation: "ecotourism", category: "Tourismus (vertieft)" },
  { word: "Unterkunft", article: "die", translation: "accommodation", category: "Tourismus (vertieft)" },
  { word: "Reiseveranstalter", article: "der", translation: "tour operator", category: "Tourismus (vertieft)" },
  { word: "Reiseziel", article: "das", translation: "destination", category: "Tourismus (vertieft)" },
  { word: "Rundreise", article: "die", translation: "round trip/tour", category: "Tourismus (vertieft)" },
  { word: "Gastfreundschaft", article: "die", translation: "hospitality", category: "Tourismus (vertieft)" },
  { word: "Einheimische", article: "der", translation: "local (person)", category: "Tourismus (vertieft)" },

  // Familie & Erziehung (vertieft)
  { word: "Erziehung", article: "die", translation: "upbringing", category: "Familie & Erziehung (vertieft)" },
  { word: "Vorbild", article: "das", translation: "role model", category: "Familie & Erziehung (vertieft)" },
  { word: "Fürsorge", article: "die", translation: "care/nurturing", category: "Familie & Erziehung (vertieft)" },
  { word: "Disziplin", article: "die", translation: "discipline", category: "Familie & Erziehung (vertieft)" },
  { word: "Generationenkonflikt", article: "der", translation: "generation gap conflict", category: "Familie & Erziehung (vertieft)" },
  { word: "Kinderbetreuung", article: "die", translation: "childcare", category: "Familie & Erziehung (vertieft)" },
  { word: "Erziehungsberechtigte", article: "der", translation: "legal guardian", category: "Familie & Erziehung (vertieft)" },
  { word: "Adoption", article: "die", translation: "adoption", category: "Familie & Erziehung (vertieft)" },

  // Persönliche Entwicklung
  { word: "Lebensziel", article: "das", translation: "life goal", category: "Persönliche Entwicklung" },
  { word: "Selbstvertrauen", article: "das", translation: "self-confidence", category: "Persönliche Entwicklung" },
  { word: "Ziel", article: "das", translation: "goal", category: "Persönliche Entwicklung" },
  { word: "Erfolg", article: "der", translation: "success", category: "Persönliche Entwicklung" },
  { word: "Misserfolg", article: "der", translation: "failure", category: "Persönliche Entwicklung" },
  { word: "Herausforderung", article: "die", translation: "challenge", category: "Persönliche Entwicklung" },
  { word: "Fortschritt", article: "der", translation: "progress", category: "Persönliche Entwicklung" },
  { word: "Rückschlag", article: "der", translation: "setback", category: "Persönliche Entwicklung" },
  { word: "Priorität", article: "die", translation: "priority", category: "Persönliche Entwicklung" },
  { word: "Gleichgewicht", article: "das", translation: "balance", category: "Persönliche Entwicklung" },

  // Kriminalität & Sicherheit
  { word: "Kriminalität", article: "die", translation: "crime (general)", category: "Kriminalität & Sicherheit" },
  { word: "Täter", article: "der", translation: "perpetrator", category: "Kriminalität & Sicherheit" },
  { word: "Opfer", article: "das", translation: "victim", category: "Kriminalität & Sicherheit" },
  { word: "Überwachung", article: "die", translation: "surveillance", category: "Kriminalität & Sicherheit" },
  { word: "Alarmanlage", article: "die", translation: "alarm system", category: "Kriminalität & Sicherheit" },
  { word: "Einbruch", article: "der", translation: "break-in", category: "Kriminalität & Sicherheit" },
  { word: "Sicherheitsdienst", article: "der", translation: "security service", category: "Kriminalität & Sicherheit" },
  { word: "Ermittlung", article: "die", translation: "investigation", category: "Kriminalität & Sicherheit" },
  { word: "Festnahme", article: "die", translation: "arrest", category: "Kriminalität & Sicherheit" },

  // Sprache & Linguistik
  { word: "Grammatik", article: "die", translation: "grammar", category: "Sprache & Linguistik" },
  { word: "Wortschatz", article: "der", translation: "vocabulary", category: "Sprache & Linguistik" },
  { word: "Aussprache", article: "die", translation: "pronunciation", category: "Sprache & Linguistik" },
  { word: "Redewendung", article: "die", translation: "idiom/expression", category: "Sprache & Linguistik" },
  { word: "Muttersprachler", article: "der", translation: "native speaker", category: "Sprache & Linguistik" },
  { word: "Satzbau", article: "der", translation: "sentence structure", category: "Sprache & Linguistik" },
  { word: "Sprachkurs", article: "der", translation: "language course", category: "Sprache & Linguistik" },
  { word: "Sprichwort", article: "das", translation: "proverb", category: "Sprache & Linguistik" },

  // Mathematik & Logik
  { word: "Gleichung", article: "die", translation: "equation", category: "Mathematik & Logik" },
  { word: "Formel", article: "die", translation: "formula", category: "Mathematik & Logik" },
  { word: "Berechnung", article: "die", translation: "calculation", category: "Mathematik & Logik" },
  { word: "Wahrscheinlichkeit", article: "die", translation: "probability", category: "Mathematik & Logik" },
  { word: "Durchschnitt", article: "der", translation: "average", category: "Mathematik & Logik" },
  { word: "Diagramm", article: "das", translation: "diagram/chart", category: "Mathematik & Logik" },
  { word: "Logik", article: "die", translation: "logic", category: "Mathematik & Logik" },
  { word: "Muster", article: "das", translation: "pattern", category: "Mathematik & Logik" },

  // Astronomie & Weltall
  { word: "Weltall", article: "das", translation: "outer space", category: "Astronomie & Weltall" },
  { word: "Planet", article: "der", translation: "planet", category: "Astronomie & Weltall" },
  { word: "Stern", article: "der", translation: "star", category: "Astronomie & Weltall" },
  { word: "Galaxie", article: "die", translation: "galaxy", category: "Astronomie & Weltall" },
  { word: "Satellit", article: "der", translation: "satellite", category: "Astronomie & Weltall" },
  { word: "Rakete", article: "die", translation: "rocket", category: "Astronomie & Weltall" },
  { word: "Umlaufbahn", article: "die", translation: "orbit", category: "Astronomie & Weltall" },
  { word: "Sonnensystem", article: "das", translation: "solar system", category: "Astronomie & Weltall" },
  { word: "Schwerkraft", article: "die", translation: "gravity", category: "Astronomie & Weltall" },
  { word: "Astronaut", article: "der", translation: "astronaut", category: "Astronomie & Weltall" },

  // Geologie & Erde
  { word: "Flussbett", article: "das", translation: "riverbed", category: "Geologie & Erde" },
  { word: "Klippe", article: "die", translation: "cliff", category: "Geologie & Erde" },
  { word: "Mineral", article: "das", translation: "mineral", category: "Geologie & Erde" },
  { word: "Fossil", article: "das", translation: "fossil", category: "Geologie & Erde" },
  { word: "Kies", article: "der", translation: "gravel", category: "Geologie & Erde" },
  { word: "Magma", article: "das", translation: "magma", category: "Geologie & Erde" },
  { word: "Erosion", article: "die", translation: "erosion", category: "Geologie & Erde" },
  { word: "Gestein", article: "das", translation: "rock (geology)", category: "Geologie & Erde" },

  // Chemie & Physik (Begriffe)
  { word: "Energiequelle", article: "die", translation: "energy source", category: "Chemie & Physik (Begriffe)" },
  { word: "Temperatur", article: "die", translation: "temperature", category: "Chemie & Physik (Begriffe)" },
  { word: "Druck", article: "der", translation: "pressure", category: "Chemie & Physik (Begriffe)" },
  { word: "Magnet", article: "der", translation: "magnet", category: "Chemie & Physik (Begriffe)" },
  { word: "Strahlung", article: "die", translation: "radiation", category: "Chemie & Physik (Begriffe)" },
  { word: "Elektrizität", article: "die", translation: "electricity", category: "Chemie & Physik (Begriffe)" },
  { word: "Widerstand", article: "der", translation: "resistance", category: "Chemie & Physik (Begriffe)" },

  // Biologie & Ökosystem
  { word: "Ökosystem", article: "das", translation: "ecosystem", category: "Biologie & Ökosystem" },
  { word: "Lebensraum", article: "der", translation: "habitat", category: "Biologie & Ökosystem" },
  { word: "Nahrungskette", article: "die", translation: "food chain", category: "Biologie & Ökosystem" },
  { word: "Fortpflanzung", article: "die", translation: "reproduction", category: "Biologie & Ökosystem" },
  { word: "Evolution", article: "die", translation: "evolution", category: "Biologie & Ökosystem" },
  { word: "Aussterben", article: "das", translation: "extinction", category: "Biologie & Ökosystem" },
  { word: "Population", article: "die", translation: "population (biology)", category: "Biologie & Ökosystem" },
  { word: "Organismus", article: "der", translation: "organism", category: "Biologie & Ökosystem" },

  // Tiere (vertieft)
  { word: "Raubtier", article: "das", translation: "predator", category: "Tiere (vertieft)" },
  { word: "Beute", article: "die", translation: "prey", category: "Tiere (vertieft)" },
  { word: "Herde", article: "die", translation: "herd", category: "Tiere (vertieft)" },
  { word: "Rudel", article: "das", translation: "pack (wolves)", category: "Tiere (vertieft)" },
  { word: "Nest", article: "das", translation: "nest", category: "Tiere (vertieft)" },
  { word: "Zugvogel", article: "der", translation: "migratory bird", category: "Tiere (vertieft)" },
  { word: "Fell", article: "das", translation: "fur/coat (animal)", category: "Tiere (vertieft)" },

  // Wetter & Klimaphänomene (vertieft)
  { word: "Klimazone", article: "die", translation: "climate zone", category: "Wetter & Klimaphänomene (vertieft)" },
  { word: "Jahreszeit", article: "die", translation: "season", category: "Wetter & Klimaphänomene (vertieft)" },
  { word: "Niederschlag", article: "der", translation: "precipitation", category: "Wetter & Klimaphänomene (vertieft)" },
  { word: "Luftdruck", article: "der", translation: "air pressure", category: "Wetter & Klimaphänomene (vertieft)" },
  { word: "Vorhersage", article: "die", translation: "forecast", category: "Wetter & Klimaphänomene (vertieft)" },
  { word: "Extremwetter", article: "das", translation: "extreme weather", category: "Wetter & Klimaphänomene (vertieft)" },

  // Stadtplanung & Infrastruktur
  { word: "Stadtplanung", article: "die", translation: "urban planning", category: "Stadtplanung & Infrastruktur" },
  { word: "Wohnviertel", article: "das", translation: "residential area", category: "Stadtplanung & Infrastruktur" },
  { word: "Industriegebiet", article: "das", translation: "industrial area", category: "Stadtplanung & Infrastruktur" },
  { word: "Fußgängerzone", article: "die", translation: "pedestrian zone", category: "Stadtplanung & Infrastruktur" },
  { word: "Grünfläche", article: "die", translation: "green space", category: "Stadtplanung & Infrastruktur" },
  { word: "Vorort", article: "der", translation: "suburb", category: "Stadtplanung & Infrastruktur" },
  { word: "Ballungsgebiet", article: "das", translation: "metropolitan area", category: "Stadtplanung & Infrastruktur" },

  // Digitalisierung & Gesellschaft
  { word: "Digitalisierung", article: "die", translation: "digitalization", category: "Digitalisierung & Gesellschaft" },
  { word: "Datenschutz", article: "der", translation: "data privacy", category: "Digitalisierung & Gesellschaft" },
  { word: "Onlinehandel", article: "der", translation: "online retail", category: "Digitalisierung & Gesellschaft" },
  { word: "Homeschooling", article: "das", translation: "homeschooling", category: "Digitalisierung & Gesellschaft" },
  { word: "Bildschirmzeit", article: "die", translation: "screen time", category: "Digitalisierung & Gesellschaft" },
  { word: "Abhängigkeit", article: "die", translation: "dependency/addiction", category: "Digitalisierung & Gesellschaft" },
  { word: "Anonymität", article: "die", translation: "anonymity", category: "Digitalisierung & Gesellschaft" },

  // Ernährung & Diät
  { word: "Vollwertkost", article: "die", translation: "whole food diet", category: "Ernährung & Diät" },
  { word: "Fastenzeit", article: "die", translation: "fasting period", category: "Ernährung & Diät" },
  { word: "Nahrungsergänzungsmittel", article: "das", translation: "dietary supplement", category: "Ernährung & Diät" },
  { word: "Unverträglichkeit", article: "die", translation: "intolerance (food)", category: "Ernährung & Diät" },
  { word: "Verdauung", article: "die", translation: "digestion", category: "Ernährung & Diät" },
  { word: "Stoffwechsel", article: "der", translation: "metabolism", category: "Ernährung & Diät" },

  // Mode & Design
  { word: "Modetrend", article: "der", translation: "fashion trend", category: "Mode & Design" },
  { word: "Kollektion", article: "die", translation: "collection (fashion)", category: "Mode & Design" },
  { word: "Laufsteg", article: "der", translation: "runway/catwalk", category: "Mode & Design" },
  { word: "Stoffmuster", article: "das", translation: "fabric pattern", category: "Mode & Design" },
  { word: "Accessoire", article: "das", translation: "accessory", category: "Mode & Design" },
  { word: "Schnittmuster", article: "das", translation: "sewing pattern", category: "Mode & Design" },

  // Handwerk
  { word: "Handwerker", article: "der", translation: "craftsman", category: "Handwerk" },
  { word: "Werkstatt", article: "die", translation: "workshop", category: "Handwerk" },
  { word: "Lehrling", article: "der", translation: "apprentice", category: "Handwerk" },
  { word: "Zunft", article: "die", translation: "guild", category: "Handwerk" },
  { word: "Meisterbrief", article: "der", translation: "master craftsman certificate", category: "Handwerk" },
  { word: "Rohmaterial", article: "das", translation: "raw material", category: "Handwerk" },

  // Freizeit & Unterhaltung (vertieft)
  { word: "Unterhaltung", article: "die", translation: "entertainment", category: "Freizeit & Unterhaltung (vertieft)" },
  { word: "Vergnügungspark", article: "der", translation: "amusement park", category: "Freizeit & Unterhaltung (vertieft)" },
  { word: "Festival", article: "das", translation: "festival", category: "Freizeit & Unterhaltung (vertieft)" },
  { word: "Vorstellung", article: "die", translation: "performance/show", category: "Freizeit & Unterhaltung (vertieft)" },
  { word: "Zuschauerraum", article: "der", translation: "auditorium", category: "Freizeit & Unterhaltung (vertieft)" },
  { word: "Eintrittskarte", article: "die", translation: "admission ticket", category: "Freizeit & Unterhaltung (vertieft)" },

  // Beziehungen & Emotionen (vertieft)
  { word: "Bindung", article: "die", translation: "bond/attachment", category: "Beziehungen & Emotionen (vertieft)" },
  { word: "Nähe", article: "die", translation: "closeness", category: "Beziehungen & Emotionen (vertieft)" },
  { word: "Distanz", article: "die", translation: "distance (emotional)", category: "Beziehungen & Emotionen (vertieft)" },
  { word: "Loyalität", article: "die", translation: "loyalty", category: "Beziehungen & Emotionen (vertieft)" },
  { word: "Verrat", article: "der", translation: "betrayal", category: "Beziehungen & Emotionen (vertieft)" },
  { word: "Versöhnung", article: "die", translation: "reconciliation", category: "Beziehungen & Emotionen (vertieft)" },

  // Werte & Normen
  { word: "Pflicht", article: "die", translation: "duty", category: "Werte & Normen" },
  { word: "Recht", article: "das", translation: "right (entitlement)", category: "Werte & Normen" },
  { word: "Tugend", article: "die", translation: "virtue", category: "Werte & Normen" },
  { word: "Prinzip", article: "das", translation: "principle", category: "Werte & Normen" },
  { word: "Konvention", article: "die", translation: "convention", category: "Werte & Normen" },
  { word: "Tabu", article: "das", translation: "taboo", category: "Werte & Normen" },

  // Verwaltung & Bürokratie (vertieft)
  { word: "Behörde", article: "die", translation: "authority/agency", category: "Verwaltung & Bürokratie (vertieft)" },
  { word: "Zuständigkeit", article: "die", translation: "jurisdiction/responsibility", category: "Verwaltung & Bürokratie (vertieft)" },
  { word: "Vorschrift", article: "die", translation: "regulation", category: "Verwaltung & Bürokratie (vertieft)" },
  { word: "Richtlinie", article: "die", translation: "guideline", category: "Verwaltung & Bürokratie (vertieft)" },
  { word: "Verordnung", article: "die", translation: "ordinance", category: "Verwaltung & Bürokratie (vertieft)" },
  { word: "Bescheid", article: "der", translation: "official notice", category: "Verwaltung & Bürokratie (vertieft)" },

  // Internationale Beziehungen
  { word: "Vereinbarung", article: "die", translation: "agreement", category: "Internationale Beziehungen" },
  { word: "Abkommen", article: "das", translation: "treaty/accord", category: "Internationale Beziehungen" },
  { word: "Verhandlung", article: "die", translation: "negotiation", category: "Internationale Beziehungen" },
  { word: "Botschaft", article: "die", translation: "embassy", category: "Internationale Beziehungen" },
  { word: "Botschafter", article: "der", translation: "ambassador", category: "Internationale Beziehungen" },
  { word: "Gipfeltreffen", article: "das", translation: "summit meeting", category: "Internationale Beziehungen" },
  { word: "Sanktion", article: "die", translation: "sanction", category: "Internationale Beziehungen" },

  // Wirtschaftssektoren
  { word: "Dienstleistung", article: "die", translation: "service (economic)", category: "Wirtschaftssektoren" },
  { word: "Landwirtschaft", article: "die", translation: "agriculture (sector)", category: "Wirtschaftssektoren" },
  { word: "Bergbau", article: "der", translation: "mining", category: "Wirtschaftssektoren" },
  { word: "Bauindustrie", article: "die", translation: "construction industry", category: "Wirtschaftssektoren" },
  { word: "Gastgewerbe", article: "das", translation: "hospitality industry", category: "Wirtschaftssektoren" },
  { word: "Einzelhandel", article: "der", translation: "retail", category: "Wirtschaftssektoren" },
  { word: "Großhandel", article: "der", translation: "wholesale", category: "Wirtschaftssektoren" },

  // Arbeitswelt der Zukunft
  { word: "Berufserfahrung", article: "die", translation: "professional experience", category: "Arbeitswelt der Zukunft" },
  { word: "Flexibilität", article: "die", translation: "flexibility", category: "Arbeitswelt der Zukunft" },
  { word: "Umschulung", article: "die", translation: "retraining", category: "Arbeitswelt der Zukunft" },
  { word: "Zeitmanagement", article: "das", translation: "time management", category: "Arbeitswelt der Zukunft" },
  { word: "Arbeitsbedingung", article: "die", translation: "working condition", category: "Arbeitswelt der Zukunft" },
  { word: "Nebenjob", article: "der", translation: "side job", category: "Arbeitswelt der Zukunft" },

  // Konflikte & Diplomatie
  { word: "Krise", article: "die", translation: "crisis", category: "Konflikte & Diplomatie" },
  { word: "Spannung", article: "die", translation: "tension", category: "Konflikte & Diplomatie" },
  { word: "Vermittlung", article: "die", translation: "mediation", category: "Konflikte & Diplomatie" },
  { word: "Waffenstillstand", article: "der", translation: "ceasefire", category: "Konflikte & Diplomatie" },
  { word: "Bedrohung", article: "die", translation: "threat", category: "Konflikte & Diplomatie" },
  { word: "Sicherheit", article: "die", translation: "security", category: "Konflikte & Diplomatie" },

  // Zeitgeist & Werte im Wandel
  { word: "Zeitgeist", article: "der", translation: "spirit of the times", category: "Zeitgeist & Werte im Wandel" },
  { word: "Wandel", article: "der", translation: "change/transformation", category: "Zeitgeist & Werte im Wandel" },
  { word: "Umbruch", article: "der", translation: "upheaval", category: "Zeitgeist & Werte im Wandel" },
  { word: "Bewegung", article: "die", translation: "movement (social)", category: "Zeitgeist & Werte im Wandel" },
  { word: "Anhänger", article: "der", translation: "follower/supporter", category: "Zeitgeist & Werte im Wandel" },
  { word: "Gegner", article: "der", translation: "opponent", category: "Zeitgeist & Werte im Wandel" },

  // Alltag & Routinen (vertieft)
  { word: "Routine", article: "die", translation: "routine", category: "Alltag & Routinen (vertieft)" },
  { word: "Tagesablauf", article: "der", translation: "daily routine", category: "Alltag & Routinen (vertieft)" },
  { word: "Freizeitgestaltung", article: "die", translation: "leisure activities", category: "Alltag & Routinen (vertieft)" },
  { word: "Erholung", article: "die", translation: "recovery/relaxation", category: "Alltag & Routinen (vertieft)" },
  { word: "Belastung", article: "die", translation: "strain/burden", category: "Alltag & Routinen (vertieft)" },

  // Kommunikationsmittel (vertieft)
  { word: "Videokonferenz", article: "die", translation: "video conference", category: "Kommunikationsmittel (vertieft)" },
  { word: "Kommunikationsmittel", article: "das", translation: "means of communication", category: "Kommunikationsmittel (vertieft)" },
  { word: "Signal", article: "das", translation: "signal", category: "Kommunikationsmittel (vertieft)" },
  { word: "Übertragung", article: "die", translation: "transmission/broadcast", category: "Kommunikationsmittel (vertieft)" },
  { word: "Empfang", article: "der", translation: "reception (signal)", category: "Kommunikationsmittel (vertieft)" },

  // Konsumgüter & Produktion
  { word: "Konsumgut", article: "das", translation: "consumer good", category: "Konsumgüter & Produktion" },
  { word: "Halbfertigprodukt", article: "das", translation: "semi-finished product", category: "Konsumgüter & Produktion" },
  { word: "Qualitätskontrolle", article: "die", translation: "quality control", category: "Konsumgüter & Produktion" },
  { word: "Herstellung", article: "die", translation: "manufacturing", category: "Konsumgüter & Produktion" },
  { word: "Ausschuss", article: "der", translation: "reject/scrap (production)", category: "Konsumgüter & Produktion" },

  // Vertrieb & Verkauf
  { word: "Vertrieb", article: "der", translation: "sales/distribution", category: "Vertrieb & Verkauf" },
  { word: "Verkaufsleiter", article: "der", translation: "sales manager", category: "Vertrieb & Verkauf" },
  { word: "Provision", article: "die", translation: "commission", category: "Vertrieb & Verkauf" },
  { word: "Teamfähigkeit", article: "die", translation: "ability to work in a team", category: "Vertrieb & Verkauf" },
  { word: "Kundenstamm", article: "der", translation: "customer base", category: "Vertrieb & Verkauf" },
  { word: "Absatz", article: "der", translation: "sales volume", category: "Vertrieb & Verkauf" },
  { word: "Verkaufsstrategie", article: "die", translation: "sales strategy", category: "Vertrieb & Verkauf" },
  { word: "Vertriebsweg", article: "der", translation: "distribution channel", category: "Vertrieb & Verkauf" },

  // Personalwesen
  { word: "Personalabteilung", article: "die", translation: "HR department", category: "Personalwesen" },
  { word: "Personalmangel", article: "der", translation: "staff shortage", category: "Personalwesen" },
  { word: "Vorstellungsgespräch", article: "das", translation: "job interview", category: "Personalwesen" },
  { word: "Probezeit", article: "die", translation: "probationary period", category: "Personalwesen" },
  { word: "Mitarbeitergespräch", article: "das", translation: "employee review", category: "Personalwesen" },
  { word: "Personalentwicklung", article: "die", translation: "staff development", category: "Personalwesen" },
  { word: "Fluktuation", article: "die", translation: "staff turnover", category: "Personalwesen" },
  { word: "Betriebsklima", article: "das", translation: "workplace atmosphere", category: "Personalwesen" },

  // Projekt- & Qualitätsmanagement
  { word: "Projektleiter", article: "der", translation: "project manager", category: "Projekt- & Qualitätsmanagement" },
  { word: "Zeitplan", article: "der", translation: "schedule/timeline", category: "Projekt- & Qualitätsmanagement" },
  { word: "Zwischenziel", article: "das", translation: "interim goal", category: "Projekt- & Qualitätsmanagement" },
  { word: "Zielvorgabe", article: "die", translation: "target/goal setting", category: "Projekt- & Qualitätsmanagement" },
  { word: "Qualitätsstandard", article: "der", translation: "quality standard", category: "Projekt- & Qualitätsmanagement" },
  { word: "Prozessoptimierung", article: "die", translation: "process optimization", category: "Projekt- & Qualitätsmanagement" },
  { word: "Risikoanalyse", article: "die", translation: "risk analysis", category: "Projekt- & Qualitätsmanagement" },
  { word: "Feedbackrunde", article: "die", translation: "feedback round", category: "Projekt- & Qualitätsmanagement" },

  // Logistik & Lagerhaltung
  { word: "Lager", article: "das", translation: "warehouse", category: "Logistik & Lagerhaltung" },
  { word: "Bestand", article: "der", translation: "inventory/stock", category: "Logistik & Lagerhaltung" },
  { word: "Versand", article: "der", translation: "shipping", category: "Logistik & Lagerhaltung" },
  { word: "Spedition", article: "die", translation: "freight company", category: "Logistik & Lagerhaltung" },
  { word: "Frachtkosten", article: "die", translation: "freight costs", category: "Logistik & Lagerhaltung" },
  { word: "Zoll", article: "der", translation: "customs", category: "Logistik & Lagerhaltung" },
  { word: "Containerhafen", article: "der", translation: "container port", category: "Logistik & Lagerhaltung" },
  { word: "Lieferzeit", article: "die", translation: "delivery time", category: "Logistik & Lagerhaltung" },

  // Steuern & Abgaben (mehr)
  { word: "Einkommensteuer", article: "die", translation: "income tax", category: "Steuern & Abgaben (mehr)" },
  { word: "Mehrwertsteuer", article: "die", translation: "value-added tax", category: "Steuern & Abgaben (mehr)" },
  { word: "Steuererklärung", article: "die", translation: "tax return", category: "Steuern & Abgaben (mehr)" },
  { word: "Steuersatz", article: "der", translation: "tax rate", category: "Steuern & Abgaben (mehr)" },
  { word: "Freibetrag", article: "der", translation: "tax-free allowance", category: "Steuern & Abgaben (mehr)" },
  { word: "Steuerhinterziehung", article: "die", translation: "tax evasion", category: "Steuern & Abgaben (mehr)" },
  { word: "Finanzamt", article: "das", translation: "tax office", category: "Steuern & Abgaben (mehr)" },

  // Versicherungen (mehr)
  { word: "Haftpflichtversicherung", article: "die", translation: "liability insurance", category: "Versicherungen (mehr)" },
  { word: "Krankenversicherung", article: "die", translation: "health insurance", category: "Versicherungen (mehr)" },
  { word: "Lebensversicherung", article: "die", translation: "life insurance", category: "Versicherungen (mehr)" },
  { word: "Versicherungsprämie", article: "die", translation: "insurance premium", category: "Versicherungen (mehr)" },
  { word: "Schadensfall", article: "der", translation: "insurance claim/incident", category: "Versicherungen (mehr)" },
  { word: "Selbstbeteiligung", article: "die", translation: "deductible", category: "Versicherungen (mehr)" },
  { word: "Versicherungspolice", article: "die", translation: "insurance policy", category: "Versicherungen (mehr)" },

  // Immobilien
  { word: "Immobilie", article: "die", translation: "real estate/property", category: "Immobilien" },
  { word: "Makler", article: "der", translation: "real estate agent", category: "Immobilien" },
  { word: "Grundstück", article: "das", translation: "plot of land", category: "Immobilien" },
  { word: "Eigentümer", article: "der", translation: "owner (property)", category: "Immobilien" },
  { word: "Kaufpreis", article: "der", translation: "purchase price", category: "Immobilien" },
  { word: "Nebenkosten", article: "die", translation: "additional costs (rent)", category: "Immobilien" },
  { word: "Wohnfläche", article: "die", translation: "living space", category: "Immobilien" },
  { word: "Grundbuch", article: "das", translation: "land register", category: "Immobilien" },

  // Elektrizität im Haushalt
  { word: "Stromausfall", article: "der", translation: "power outage", category: "Elektrizität im Haushalt" },
  { word: "Stromrechnung", article: "die", translation: "electricity bill", category: "Elektrizität im Haushalt" },
  { word: "Sicherung", article: "die", translation: "fuse", category: "Elektrizität im Haushalt" },
  { word: "Stromanbieter", article: "der", translation: "electricity provider", category: "Elektrizität im Haushalt" },
  { word: "Stromverbrauch", article: "der", translation: "power consumption", category: "Elektrizität im Haushalt" },
  { word: "Zähler", article: "der", translation: "meter (utility)", category: "Elektrizität im Haushalt" },

  // Wasser- & Abfallwirtschaft
  { word: "Trinkwasser", article: "das", translation: "drinking water", category: "Wasser- & Abfallwirtschaft" },
  { word: "Abwasser", article: "das", translation: "wastewater", category: "Wasser- & Abfallwirtschaft" },
  { word: "Kläranlage", article: "die", translation: "sewage treatment plant", category: "Wasser- & Abfallwirtschaft" },
  { word: "Wasserknappheit", article: "die", translation: "water scarcity", category: "Wasser- & Abfallwirtschaft" },
  { word: "Kompost", article: "der", translation: "compost", category: "Wasser- & Abfallwirtschaft" },
  { word: "Sondermüll", article: "der", translation: "hazardous waste", category: "Wasser- & Abfallwirtschaft" },

  // Gesundheitswesen
  { word: "Gesundheitswesen", article: "das", translation: "healthcare system", category: "Gesundheitswesen" },
  { word: "Krankenkasse", article: "die", translation: "health insurance fund", category: "Gesundheitswesen" },
  { word: "Hausarzt", article: "der", translation: "general practitioner", category: "Gesundheitswesen" },
  { word: "Facharzt", article: "der", translation: "specialist (doctor)", category: "Gesundheitswesen" },
  { word: "Wartezimmer", article: "das", translation: "waiting room", category: "Gesundheitswesen" },
  { word: "Sprechstunde", article: "die", translation: "office hours (doctor)", category: "Gesundheitswesen" },
  { word: "Rezeption", article: "die", translation: "reception desk", category: "Gesundheitswesen" },

  // Pflege & Betreuung
  { word: "Pflegekraft", article: "die", translation: "caregiver", category: "Pflege & Betreuung" },
  { word: "Altenheim", article: "das", translation: "nursing home", category: "Pflege & Betreuung" },
  { word: "Pflegebedürftigkeit", article: "die", translation: "need for care", category: "Pflege & Betreuung" },
  { word: "Behinderung", article: "die", translation: "disability", category: "Pflege & Betreuung" },
  { word: "Barrierefreiheit", article: "die", translation: "accessibility", category: "Pflege & Betreuung" },
  { word: "Rollstuhl", article: "der", translation: "wheelchair", category: "Pflege & Betreuung" },

  // Psychische Gesundheit
  { word: "Depression", article: "die", translation: "depression", category: "Psychische Gesundheit" },
  { word: "Burnout", article: "das", translation: "burnout", category: "Psychische Gesundheit" },
  { word: "Achtsamkeit", article: "die", translation: "mindfulness", category: "Psychische Gesundheit" },
  { word: "Entspannung", article: "die", translation: "relaxation", category: "Psychische Gesundheit" },
  { word: "Selbsthilfegruppe", article: "die", translation: "self-help group", category: "Psychische Gesundheit" },
  { word: "Psychotherapie", article: "die", translation: "psychotherapy", category: "Psychische Gesundheit" },

  // Sportarten (weitere)
  { word: "Kampfsport", article: "der", translation: "martial arts", category: "Sportarten (weitere)" },
  { word: "Skifahren", article: "das", translation: "skiing", category: "Sportarten (weitere)" },
  { word: "Snowboarden", article: "das", translation: "snowboarding", category: "Sportarten (weitere)" },
  { word: "Segeln", article: "das", translation: "sailing", category: "Sportarten (weitere)" },
  { word: "Klettern", article: "das", translation: "climbing", category: "Sportarten (weitere)" },
  { word: "Surfen", article: "das", translation: "surfing", category: "Sportarten (weitere)" },
  { word: "Turnen", article: "das", translation: "gymnastics", category: "Sportarten (weitere)" },
  { word: "Leichtathletik", article: "die", translation: "track and field", category: "Sportarten (weitere)" },

  // Spiele & Unterhaltung
  { word: "Brettspiel", article: "das", translation: "board game", category: "Spiele & Unterhaltung" },
  { word: "Videospiel", article: "das", translation: "video game", category: "Spiele & Unterhaltung" },
  { word: "Spielkonsole", article: "die", translation: "game console", category: "Spiele & Unterhaltung" },
  { word: "Strategiespiel", article: "das", translation: "strategy game", category: "Spiele & Unterhaltung" },
  { word: "Spielregel", article: "die", translation: "game rule", category: "Spiele & Unterhaltung" },
  { word: "Highscore", article: "der", translation: "high score", category: "Spiele & Unterhaltung" },

  // Film & Theater (Berufe)
  { word: "Drehbuch", article: "das", translation: "screenplay", category: "Film & Theater (Berufe)" },
  { word: "Kameramann", article: "der", translation: "cameraman", category: "Film & Theater (Berufe)" },
  { word: "Bühnenbild", article: "das", translation: "stage set", category: "Film & Theater (Berufe)" },
  { word: "Kostüm", article: "das", translation: "costume", category: "Film & Theater (Berufe)" },
  { word: "Vorführung", article: "die", translation: "screening/performance", category: "Film & Theater (Berufe)" },
  { word: "Premiere", article: "die", translation: "premiere", category: "Film & Theater (Berufe)" },
  { word: "Kritiker", article: "der", translation: "critic", category: "Film & Theater (Berufe)" },

  // Verlagswesen & Journalismus
  { word: "Verleger", article: "der", translation: "publisher (person)", category: "Verlagswesen & Journalismus" },
  { word: "Herausgeber", article: "der", translation: "editor-in-chief", category: "Verlagswesen & Journalismus" },
  { word: "Artikel", article: "der", translation: "article", category: "Verlagswesen & Journalismus" },
  { word: "Kolumne", article: "die", translation: "column (writing)", category: "Verlagswesen & Journalismus" },
  { word: "Leitartikel", article: "der", translation: "editorial", category: "Verlagswesen & Journalismus" },
  { word: "Quelle", article: "die", translation: "source (journalism)", category: "Verlagswesen & Journalismus" },
  { word: "Recherche", article: "die", translation: "research (journalistic)", category: "Verlagswesen & Journalismus" },

  // Eventmanagement & Feiern
  { word: "Veranstalter", article: "der", translation: "event organizer", category: "Eventmanagement & Feiern" },
  { word: "Veranstaltungsort", article: "der", translation: "venue", category: "Eventmanagement & Feiern" },
  { word: "Gästeliste", article: "die", translation: "guest list", category: "Eventmanagement & Feiern" },
  { word: "Trauung", article: "die", translation: "wedding ceremony", category: "Eventmanagement & Feiern" },
  { word: "Brautpaar", article: "das", translation: "bride and groom", category: "Eventmanagement & Feiern" },
  { word: "Trauerfeier", article: "die", translation: "funeral service", category: "Eventmanagement & Feiern" },
  { word: "Beileid", article: "das", translation: "condolences", category: "Eventmanagement & Feiern" },

  // Schönheit & Kosmetik
  { word: "Kosmetik", article: "die", translation: "cosmetics", category: "Schönheit & Kosmetik" },
  { word: "Schönheitssalon", article: "der", translation: "beauty salon", category: "Schönheit & Kosmetik" },
  { word: "Tätowierung", article: "die", translation: "tattoo", category: "Schönheit & Kosmetik" },
  { word: "Piercing", article: "das", translation: "piercing", category: "Schönheit & Kosmetik" },
  { word: "Maniküre", article: "die", translation: "manicure", category: "Schönheit & Kosmetik" },
  { word: "Hautpflege", article: "die", translation: "skincare", category: "Schönheit & Kosmetik" },

  // Tierschutz & Haustiere (vertieft)
  { word: "Tierschutz", article: "der", translation: "animal welfare", category: "Tierschutz & Haustiere (vertieft)" },
  { word: "Tierheim", article: "das", translation: "animal shelter", category: "Tierschutz & Haustiere (vertieft)" },
  { word: "Tierarzt", article: "der", translation: "veterinarian", category: "Tierschutz & Haustiere (vertieft)" },
  { word: "Tierquälerei", article: "die", translation: "animal cruelty", category: "Tierschutz & Haustiere (vertieft)" },
  { word: "Artenschutz", article: "der", translation: "species protection", category: "Tierschutz & Haustiere (vertieft)" },
  { word: "Haustierhaltung", article: "die", translation: "pet ownership", category: "Tierschutz & Haustiere (vertieft)" },

  // Gartenarbeit (vertieft)
  { word: "Gärtnerei", article: "die", translation: "nursery (plants)", category: "Gartenarbeit (vertieft)" },
  { word: "Gießkanne", article: "die", translation: "watering can", category: "Gartenarbeit (vertieft)" },
  { word: "Rasenmäher", article: "der", translation: "lawn mower", category: "Gartenarbeit (vertieft)" },
  { word: "Gartenschere", article: "die", translation: "garden shears", category: "Gartenarbeit (vertieft)" },
  { word: "Blumenbeet", article: "das", translation: "flower bed", category: "Gartenarbeit (vertieft)" },
  { word: "Gewächshaus", article: "das", translation: "greenhouse", category: "Gartenarbeit (vertieft)" },

  // Innenarchitektur & Design
  { word: "Innenarchitekt", article: "der", translation: "interior designer", category: "Innenarchitektur & Design" },
  { word: "Raumgestaltung", article: "die", translation: "room design", category: "Innenarchitektur & Design" },
  { word: "Farbschema", article: "das", translation: "color scheme", category: "Innenarchitektur & Design" },
  { word: "Beleuchtung", article: "die", translation: "lighting", category: "Innenarchitektur & Design" },
  { word: "Stilrichtung", article: "die", translation: "design style", category: "Innenarchitektur & Design" },

  // Ehrenamt & Engagement
  { word: "Ehrenamt", article: "das", translation: "volunteer work", category: "Ehrenamt & Engagement" },
  { word: "Freiwillige", article: "der", translation: "volunteer (person)", category: "Ehrenamt & Engagement" },
  { word: "Spende", article: "die", translation: "donation", category: "Ehrenamt & Engagement" },
  { word: "Spendenaktion", article: "die", translation: "fundraising campaign", category: "Ehrenamt & Engagement" },
  { word: "Hilfsorganisation", article: "die", translation: "aid organization", category: "Ehrenamt & Engagement" },
  { word: "Gemeinnützigkeit", article: "die", translation: "charitable status", category: "Ehrenamt & Engagement" },

  // Katastrophenhilfe & Entwicklung
  { word: "Katastrophenhilfe", article: "die", translation: "disaster relief", category: "Katastrophenhilfe & Entwicklung" },
  { word: "Entwicklungshilfe", article: "die", translation: "development aid", category: "Katastrophenhilfe & Entwicklung" },
  { word: "Notunterkunft", article: "die", translation: "emergency shelter", category: "Katastrophenhilfe & Entwicklung" },
  { word: "Hungersnot", article: "die", translation: "famine", category: "Katastrophenhilfe & Entwicklung" },
  { word: "Wiederaufbau", article: "der", translation: "reconstruction", category: "Katastrophenhilfe & Entwicklung" },

  // Konsumkritik & Minimalismus
  { word: "Überkonsum", article: "der", translation: "overconsumption", category: "Konsumkritik & Minimalismus" },
  { word: "Minimalismus", article: "der", translation: "minimalism", category: "Konsumkritik & Minimalismus" },
  { word: "Verschwendung", article: "die", translation: "waste/wastefulness", category: "Konsumkritik & Minimalismus" },
  { word: "Second-Hand-Laden", article: "der", translation: "secondhand shop", category: "Konsumkritik & Minimalismus" },
  { word: "Tauschbörse", article: "die", translation: "swap exchange", category: "Konsumkritik & Minimalismus" },
  { word: "Reparaturwerkstatt", article: "die", translation: "repair shop", category: "Konsumkritik & Minimalismus" },

  // Maschinenbau & Fahrzeugtechnik
  { word: "Motor", article: "der", translation: "engine/motor", category: "Maschinenbau & Fahrzeugtechnik" },
  { word: "Getriebe", article: "das", translation: "gearbox/transmission", category: "Maschinenbau & Fahrzeugtechnik" },
  { word: "Bremse", article: "die", translation: "brake", category: "Maschinenbau & Fahrzeugtechnik" },
  { word: "Werkzeugmaschine", article: "die", translation: "machine tool", category: "Maschinenbau & Fahrzeugtechnik" },
  { word: "Antrieb", article: "der", translation: "drive/propulsion", category: "Maschinenbau & Fahrzeugtechnik" },
  { word: "Bauteil", article: "das", translation: "component/part", category: "Maschinenbau & Fahrzeugtechnik" },

  // Schifffahrt & Luftfahrt
  { word: "Schifffahrt", article: "die", translation: "shipping/navigation", category: "Schifffahrt & Luftfahrt" },
  { word: "Kapitän", article: "der", translation: "captain", category: "Schifffahrt & Luftfahrt" },
  { word: "Besatzung", article: "die", translation: "crew", category: "Schifffahrt & Luftfahrt" },
  { word: "Hafenanlage", article: "die", translation: "port facility", category: "Schifffahrt & Luftfahrt" },
  { word: "Cockpit", article: "das", translation: "cockpit", category: "Schifffahrt & Luftfahrt" },
  { word: "Landebahn", article: "die", translation: "runway", category: "Schifffahrt & Luftfahrt" },
  { word: "Turbine", article: "die", translation: "turbine", category: "Schifffahrt & Luftfahrt" },

  // Meteorologie & Ozeanographie
  { word: "Meteorologe", article: "der", translation: "meteorologist", category: "Meteorologie & Ozeanographie" },
  { word: "Wetterstation", article: "die", translation: "weather station", category: "Meteorologie & Ozeanographie" },
  { word: "Strömung", article: "die", translation: "current (ocean)", category: "Meteorologie & Ozeanographie" },
  { word: "Gezeiten", article: "die", translation: "tides", category: "Meteorologie & Ozeanographie" },
  { word: "Meeresspiegel", article: "der", translation: "sea level", category: "Meteorologie & Ozeanographie" },
  { word: "Tiefsee", article: "die", translation: "deep sea", category: "Meteorologie & Ozeanographie" },

  // Paläontologie & Anthropologie
  { word: "Dinosaurier", article: "der", translation: "dinosaur", category: "Paläontologie & Anthropologie" },
  { word: "Urmensch", article: "der", translation: "early human", category: "Paläontologie & Anthropologie" },
  { word: "Steinzeit", article: "die", translation: "stone age", category: "Paläontologie & Anthropologie" },
  { word: "Höhlenmalerei", article: "die", translation: "cave painting", category: "Paläontologie & Anthropologie" },
  { word: "Artefakt", article: "das", translation: "artifact", category: "Paläontologie & Anthropologie" },
  { word: "Stamm", article: "der", translation: "tribe", category: "Paläontologie & Anthropologie" },

  // Soziologie & Statistik
  { word: "Sozialstruktur", article: "die", translation: "social structure", category: "Soziologie & Statistik" },
  { word: "Umfrage", article: "die", translation: "survey/poll", category: "Soziologie & Statistik" },
  { word: "Stichprobe", article: "die", translation: "sample (statistics)", category: "Soziologie & Statistik" },
  { word: "Rückgang", article: "der", translation: "decline (statistical)", category: "Soziologie & Statistik" },
  { word: "Kennzahl", article: "die", translation: "key metric", category: "Soziologie & Statistik" },
  { word: "Marktforschung", article: "die", translation: "market research", category: "Soziologie & Statistik" },

  // Unternehmensgründung
  { word: "Existenzgründung", article: "die", translation: "business startup", category: "Unternehmensgründung" },
  { word: "Geschäftsidee", article: "die", translation: "business idea", category: "Unternehmensgründung" },
  { word: "Geschäftsplan", article: "der", translation: "business plan", category: "Unternehmensgründung" },
  { word: "Startkapital", article: "das", translation: "startup capital", category: "Unternehmensgründung" },
  { word: "Gründer", article: "der", translation: "founder", category: "Unternehmensgründung" },
  { word: "Risikokapital", article: "das", translation: "venture capital", category: "Unternehmensgründung" },
  { word: "Insolvenz", article: "die", translation: "insolvency", category: "Unternehmensgründung" },

  // Digitale Wirtschaft
  { word: "Onlineshop", article: "der", translation: "online shop", category: "Digitale Wirtschaft" },
  { word: "Kryptowährung", article: "die", translation: "cryptocurrency", category: "Digitale Wirtschaft" },
  { word: "Lieferdienst", article: "der", translation: "delivery service", category: "Digitale Wirtschaft" },
  { word: "Homeoffice-Regelung", article: "die", translation: "remote-work policy", category: "Digitale Wirtschaft" },
  { word: "Plattformwirtschaft", article: "die", translation: "platform economy", category: "Digitale Wirtschaft" },
  { word: "Nutzerkonto", article: "das", translation: "user account", category: "Digitale Wirtschaft" },

  // Elektronik & Bauteile
  { word: "Schaltkreis", article: "der", translation: "circuit", category: "Elektronik & Bauteile" },
  { word: "Halbleiter", article: "der", translation: "semiconductor", category: "Elektronik & Bauteile" },
  { word: "Prozessor", article: "der", translation: "processor", category: "Elektronik & Bauteile" },
  { word: "Speicherchip", article: "der", translation: "memory chip", category: "Elektronik & Bauteile" },
  { word: "Stromkreis", article: "der", translation: "electrical circuit", category: "Elektronik & Bauteile" },
  { word: "Leiterplatte", article: "die", translation: "circuit board", category: "Elektronik & Bauteile" },

  // Trauer & Lebensende
  { word: "Trauer", article: "die", translation: "grief", category: "Trauer & Lebensende" },
  { word: "Verlust", article: "der", translation: "loss", category: "Trauer & Lebensende" },
  { word: "Beerdigung", article: "die", translation: "burial/funeral", category: "Trauer & Lebensende" },
  { word: "Friedhof", article: "der", translation: "cemetery", category: "Trauer & Lebensende" },
  { word: "Testament", article: "das", translation: "will (legal)", category: "Trauer & Lebensende" },
  { word: "Sterblichkeit", article: "die", translation: "mortality", category: "Trauer & Lebensende" },

  // Freundschaft & soziales Netzwerk
  { word: "Bekanntschaft", article: "die", translation: "acquaintance", category: "Freundschaft & soziales Netzwerk" },
  { word: "Clique", article: "die", translation: "clique/group of friends", category: "Freundschaft & soziales Netzwerk" },
  { word: "Vertraute", article: "der", translation: "confidant", category: "Freundschaft & soziales Netzwerk" },
  { word: "Zusammenhalt", article: "der", translation: "cohesion/solidarity", category: "Freundschaft & soziales Netzwerk" },
  { word: "Kontaktkreis", article: "der", translation: "circle of contacts", category: "Freundschaft & soziales Netzwerk" },

  // Erinnerungskultur & Denkmalschutz
  { word: "Erinnerungskultur", article: "die", translation: "culture of remembrance", category: "Erinnerungskultur & Denkmalschutz" },
  { word: "Denkmalschutz", article: "der", translation: "historic preservation", category: "Erinnerungskultur & Denkmalschutz" },
  { word: "Weltkulturerbe", article: "das", translation: "world heritage site", category: "Erinnerungskultur & Denkmalschutz" },
  { word: "Gedenkstätte", article: "die", translation: "memorial site", category: "Erinnerungskultur & Denkmalschutz" },
  { word: "Jahrestag", article: "der", translation: "anniversary (event)", category: "Erinnerungskultur & Denkmalschutz" },

  // Vereine & Zivilgesellschaft
  { word: "Verein", article: "der", translation: "club/association", category: "Vereine & Zivilgesellschaft" },
  { word: "Mitgliedschaft", article: "die", translation: "membership", category: "Vereine & Zivilgesellschaft" },
  { word: "Vorsitzende", article: "der", translation: "chairperson", category: "Vereine & Zivilgesellschaft" },
  { word: "Satzung", article: "die", translation: "bylaws/statutes", category: "Vereine & Zivilgesellschaft" },
  { word: "Bürgerinitiative", article: "die", translation: "citizens' initiative", category: "Vereine & Zivilgesellschaft" },

  // Wahlkampf & Kampagnen
  { word: "Wahlkampf", article: "der", translation: "election campaign", category: "Wahlkampf & Kampagnen" },
  { word: "Kandidat", article: "der", translation: "candidate", category: "Wahlkampf & Kampagnen" },
  { word: "Wahlversprechen", article: "das", translation: "campaign promise", category: "Wahlkampf & Kampagnen" },
  { word: "Wahlbeteiligung", article: "die", translation: "voter turnout", category: "Wahlkampf & Kampagnen" },
  { word: "Umfragewert", article: "der", translation: "poll rating", category: "Wahlkampf & Kampagnen" },
  { word: "Stimmzettel", article: "der", translation: "ballot", category: "Wahlkampf & Kampagnen" },

  // Cybersicherheit & Datenschutz
  { word: "Cyberkriminalität", article: "die", translation: "cybercrime", category: "Cybersicherheit & Datenschutz" },
  { word: "Hacker", article: "der", translation: "hacker", category: "Cybersicherheit & Datenschutz" },
  { word: "Firewall", article: "die", translation: "firewall", category: "Cybersicherheit & Datenschutz" },
  { word: "Sicherheitslücke", article: "die", translation: "security vulnerability", category: "Cybersicherheit & Datenschutz" },
  { word: "Identitätsdiebstahl", article: "der", translation: "identity theft", category: "Cybersicherheit & Datenschutz" },
  { word: "Datenleck", article: "das", translation: "data leak", category: "Cybersicherheit & Datenschutz" },

  // Menschliche Sinne & Wahrnehmung
  { word: "Sehvermögen", article: "das", translation: "eyesight", category: "Menschliche Sinne & Wahrnehmung" },
  { word: "Gehör", article: "das", translation: "hearing (sense)", category: "Menschliche Sinne & Wahrnehmung" },
  { word: "Geschmackssinn", article: "der", translation: "sense of taste", category: "Menschliche Sinne & Wahrnehmung" },
  { word: "Geruchssinn", article: "der", translation: "sense of smell", category: "Menschliche Sinne & Wahrnehmung" },
  { word: "Tastsinn", article: "der", translation: "sense of touch", category: "Menschliche Sinne & Wahrnehmung" },
  { word: "Sinnesorgan", article: "das", translation: "sensory organ", category: "Menschliche Sinne & Wahrnehmung" },

  // Emotionale Intelligenz & Konfliktlösung
  { word: "Empathie", article: "die", translation: "empathy", category: "Emotionale Intelligenz & Konfliktlösung" },
  { word: "Selbstreflexion", article: "die", translation: "self-reflection", category: "Emotionale Intelligenz & Konfliktlösung" },
  { word: "Konfliktfähigkeit", article: "die", translation: "ability to handle conflict", category: "Emotionale Intelligenz & Konfliktlösung" },
  { word: "Zivilcourage", article: "die", translation: "moral courage", category: "Emotionale Intelligenz & Konfliktlösung" },
  { word: "Selbstkontrolle", article: "die", translation: "self-control", category: "Emotionale Intelligenz & Konfliktlösung" },

  // Alternative Medizin & Wellness
  { word: "Naturheilkunde", article: "die", translation: "natural medicine", category: "Alternative Medizin & Wellness" },
  { word: "Akupunktur", article: "die", translation: "acupuncture", category: "Alternative Medizin & Wellness" },
  { word: "Homöopathie", article: "die", translation: "homeopathy", category: "Alternative Medizin & Wellness" },
  { word: "Massage", article: "die", translation: "massage", category: "Alternative Medizin & Wellness" },
  { word: "Wellnessurlaub", article: "der", translation: "wellness vacation", category: "Alternative Medizin & Wellness" },
  { word: "Tiefenentspannung", article: "die", translation: "deep relaxation", category: "Alternative Medizin & Wellness" },

  // Coworking & moderne Arbeitsformen
  { word: "Coworking-Space", article: "der", translation: "coworking space", category: "Coworking & moderne Arbeitsformen" },
  { word: "Digitalnomade", article: "der", translation: "digital nomad", category: "Coworking & moderne Arbeitsformen" },
  { word: "Freelancer", article: "der", translation: "freelancer", category: "Coworking & moderne Arbeitsformen" },
  { word: "Gleitzeit", article: "die", translation: "flextime", category: "Coworking & moderne Arbeitsformen" },
  { word: "Teilzeit", article: "die", translation: "part-time work", category: "Coworking & moderne Arbeitsformen" },
  { word: "Vollzeit", article: "die", translation: "full-time work", category: "Coworking & moderne Arbeitsformen" },

  // Franchise & Handel
  { word: "Franchise", article: "das", translation: "franchise", category: "Franchise & Handel" },
  { word: "Filialleiter", article: "der", translation: "branch manager", category: "Franchise & Handel" },
  { word: "Großhändler", article: "der", translation: "wholesaler", category: "Franchise & Handel" },
  { word: "Einzelhändler", article: "der", translation: "retailer", category: "Franchise & Handel" },
  { word: "Handelsspanne", article: "die", translation: "profit margin (retail)", category: "Franchise & Handel" },

  // Wein & Genuss
  { word: "Weinberg", article: "der", translation: "vineyard", category: "Wein & Genuss" },
  { word: "Winzer", article: "der", translation: "winemaker", category: "Wein & Genuss" },
  { word: "Verkostung", article: "die", translation: "tasting", category: "Wein & Genuss" },
  { word: "Jahrgang", article: "der", translation: "vintage (wine)", category: "Wein & Genuss" },
  { word: "Aroma", article: "das", translation: "aroma", category: "Wein & Genuss" },
  { word: "Brauerei", article: "die", translation: "brewery", category: "Wein & Genuss" },

  // Bäckerei & Konditorei (vertieft)
  { word: "Teig", article: "der", translation: "dough", category: "Bäckerei & Konditorei (vertieft)" },
  { word: "Hefe", article: "die", translation: "yeast", category: "Bäckerei & Konditorei (vertieft)" },
  { word: "Backform", article: "die", translation: "baking pan", category: "Bäckerei & Konditorei (vertieft)" },
  { word: "Glasur", article: "die", translation: "icing/glaze", category: "Bäckerei & Konditorei (vertieft)" },
  { word: "Konditor", article: "der", translation: "pastry chef", category: "Bäckerei & Konditorei (vertieft)" },

  // Schulalltag & Prüfungen
  { word: "Klassenarbeit", article: "die", translation: "class test", category: "Schulalltag & Prüfungen" },
  { word: "Abschlussprüfung", article: "die", translation: "final exam", category: "Schulalltag & Prüfungen" },
  { word: "Durchfallquote", article: "die", translation: "failure rate", category: "Schulalltag & Prüfungen" },
  { word: "Schulpflicht", article: "die", translation: "compulsory education", category: "Schulalltag & Prüfungen" },
  { word: "Klassenkamerad", article: "der", translation: "classmate", category: "Schulalltag & Prüfungen" },
  { word: "Schulleiter", article: "der", translation: "school principal", category: "Schulalltag & Prüfungen" },

  // Elternschaft & Familienpolitik
  { word: "Elternzeit", article: "die", translation: "parental leave", category: "Elternschaft & Familienpolitik" },
  { word: "Mutterschutz", article: "der", translation: "maternity protection", category: "Elternschaft & Familienpolitik" },
  { word: "Kindergeld", article: "das", translation: "child benefit", category: "Elternschaft & Familienpolitik" },
  { word: "Erziehungsurlaub", article: "der", translation: "childcare leave", category: "Elternschaft & Familienpolitik" },
  { word: "Alleinerziehende", article: "der", translation: "single parent", category: "Elternschaft & Familienpolitik" },

  // Meditation & Spiritualität
  { word: "Meditation", article: "die", translation: "meditation", category: "Meditation & Spiritualität" },
  { word: "Spiritualität", article: "die", translation: "spirituality", category: "Meditation & Spiritualität" },
  { word: "Erleuchtung", article: "die", translation: "enlightenment", category: "Meditation & Spiritualität" },
  { word: "Stille", article: "die", translation: "silence/stillness", category: "Meditation & Spiritualität" },
  { word: "Achtsamkeitsübung", article: "die", translation: "mindfulness exercise", category: "Meditation & Spiritualität" },

  // Verpflegung unterwegs
  { word: "Imbiss", article: "der", translation: "snack bar/fast food stand", category: "Verpflegung unterwegs" },
  { word: "Kantine", article: "die", translation: "cafeteria", category: "Verpflegung unterwegs" },
  { word: "Lieferservice", article: "der", translation: "delivery service (food)", category: "Verpflegung unterwegs" },
  { word: "Selbstbedienung", article: "die", translation: "self-service", category: "Verpflegung unterwegs" },
  { word: "Verzehr", article: "der", translation: "consumption (food)", category: "Verpflegung unterwegs" },
  { word: "Speiseplan", article: "der", translation: "meal plan/menu", category: "Verpflegung unterwegs" },

  // Verhandlungen & Geschäftsleben
  { word: "Geschäftspartner", article: "der", translation: "business partner", category: "Verhandlungen & Geschäftsleben" },
  { word: "Absprache", article: "die", translation: "arrangement (mutual)", category: "Verhandlungen & Geschäftsleben" },
  { word: "Klausel", article: "die", translation: "clause", category: "Verhandlungen & Geschäftsleben" },
  { word: "Unterzeichnung", article: "die", translation: "signing (of contract)", category: "Verhandlungen & Geschäftsleben" },
  { word: "Geschäftsreise", article: "die", translation: "business trip", category: "Verhandlungen & Geschäftsleben" },
  { word: "Delegation", article: "die", translation: "delegation (group)", category: "Verhandlungen & Geschäftsleben" },

  // Bildschirmarbeit & Ergonomie
  { word: "Bürostuhl", article: "der", translation: "office chair", category: "Bildschirmarbeit & Ergonomie" },
  { word: "Haltung", article: "die", translation: "posture", category: "Bildschirmarbeit & Ergonomie" },
  { word: "Augenbelastung", article: "die", translation: "eye strain", category: "Bildschirmarbeit & Ergonomie" },
  { word: "Pausenraum", article: "der", translation: "break room", category: "Bildschirmarbeit & Ergonomie" },
  { word: "Arbeitsplatzgestaltung", article: "die", translation: "workplace design", category: "Bildschirmarbeit & Ergonomie" },

  // Freizeitparks & Attraktionen
  { word: "Achterbahn", article: "die", translation: "roller coaster", category: "Freizeitparks & Attraktionen" },
  { word: "Karussell", article: "das", translation: "carousel", category: "Freizeitparks & Attraktionen" },
  { word: "Riesenrad", article: "das", translation: "ferris wheel", category: "Freizeitparks & Attraktionen" },
  { word: "Warteschlange", article: "die", translation: "queue/line", category: "Freizeitparks & Attraktionen" },
  { word: "Attraktion", article: "die", translation: "attraction", category: "Freizeitparks & Attraktionen" },

  // Kochkurse & Küchentechniken
  { word: "Kochkurs", article: "der", translation: "cooking class", category: "Kochkurse & Küchentechniken" },
  { word: "Kochtechnik", article: "die", translation: "cooking technique", category: "Kochkurse & Küchentechniken" },
  { word: "Marinade", article: "die", translation: "marinade", category: "Kochkurse & Küchentechniken" },
  { word: "Garzeit", article: "die", translation: "cooking time", category: "Kochkurse & Küchentechniken" },
  { word: "Kochbuch", article: "das", translation: "cookbook", category: "Kochkurse & Küchentechniken" },
  { word: "Feinschmecker", article: "der", translation: "gourmet", category: "Kochkurse & Küchentechniken" },

  // Sprachprüfungen & Zertifikate
  { word: "Sprachzertifikat", article: "das", translation: "language certificate", category: "Sprachprüfungen & Zertifikate" },
  { word: "Einstufungstest", article: "der", translation: "placement test", category: "Sprachprüfungen & Zertifikate" },
  { word: "Hörverständnis", article: "das", translation: "listening comprehension", category: "Sprachprüfungen & Zertifikate" },
  { word: "Leseverständnis", article: "das", translation: "reading comprehension", category: "Sprachprüfungen & Zertifikate" },
  { word: "Sprachniveau", article: "das", translation: "language level", category: "Sprachprüfungen & Zertifikate" },

  // Umgangsformen & Etikette
  { word: "Höflichkeitsform", article: "die", translation: "polite form (address)", category: "Umgangsformen & Etikette" },
  { word: "Anrede", article: "die", translation: "form of address/salutation", category: "Umgangsformen & Etikette" },
  { word: "Benimmregel", article: "die", translation: "rule of etiquette", category: "Umgangsformen & Etikette" },
  { word: "Taktgefühl", article: "das", translation: "tact", category: "Umgangsformen & Etikette" },
  { word: "Fingerspitzengefühl", article: "das", translation: "sensitivity/finesse", category: "Umgangsformen & Etikette" },

  // Verkehrsplanung & Nahverkehr
  { word: "Nahverkehr", article: "der", translation: "local public transport", category: "Verkehrsplanung & Nahverkehr" },
  { word: "Fahrgastzahl", article: "die", translation: "passenger numbers", category: "Verkehrsplanung & Nahverkehr" },
  { word: "Streckennetz", article: "das", translation: "route network", category: "Verkehrsplanung & Nahverkehr" },
  { word: "Haltestelle", article: "die", translation: "bus/tram stop", category: "Verkehrsplanung & Nahverkehr" },
  { word: "Verkehrsstoß", article: "der", translation: "rush hour crush", category: "Verkehrsplanung & Nahverkehr" },
  { word: "Radweg", article: "der", translation: "bike lane", category: "Verkehrsplanung & Nahverkehr" },

  // Naturerlebnis & Outdoor
  { word: "Naturerlebnis", article: "das", translation: "nature experience", category: "Naturerlebnis & Outdoor" },
  { word: "Wanderweg", article: "der", translation: "hiking trail", category: "Naturerlebnis & Outdoor" },
  { word: "Aussichtspunkt", article: "der", translation: "viewpoint", category: "Naturerlebnis & Outdoor" },
  { word: "Rastplatz", article: "der", translation: "rest area", category: "Naturerlebnis & Outdoor" },
  { word: "Lagerfeuer", article: "das", translation: "campfire", category: "Naturerlebnis & Outdoor" },
  { word: "Rucksacktour", article: "die", translation: "backpacking trip", category: "Naturerlebnis & Outdoor" },

  // Buchhaltung & Controlling
  { word: "Buchhaltung", article: "die", translation: "accounting/bookkeeping", category: "Buchhaltung & Controlling" },
  { word: "Bilanz", article: "die", translation: "balance sheet", category: "Buchhaltung & Controlling" },
  { word: "Jahresabschluss", article: "der", translation: "annual financial statement", category: "Buchhaltung & Controlling" },
  { word: "Ausgabe", article: "die", translation: "expense", category: "Buchhaltung & Controlling" },
  { word: "Einnahme", article: "die", translation: "income/revenue", category: "Buchhaltung & Controlling" },
  { word: "Kostenstelle", article: "die", translation: "cost center", category: "Buchhaltung & Controlling" },

  // Verhaltensökonomie & Entscheidungen
  { word: "Entscheidungsfindung", article: "die", translation: "decision-making", category: "Verhaltensökonomie & Entscheidungen" },
  { word: "Vernunft", article: "die", translation: "reason/rationality", category: "Verhaltensökonomie & Entscheidungen" },
  { word: "Abwägung", article: "die", translation: "weighing/consideration", category: "Verhaltensökonomie & Entscheidungen" },
  { word: "Konsequenz", article: "die", translation: "consequence", category: "Verhaltensökonomie & Entscheidungen" },
  { word: "Alternative", article: "die", translation: "alternative", category: "Verhaltensökonomie & Entscheidungen" },

  // Gesellschaftliche Institutionen
  { word: "Institution", article: "die", translation: "institution", category: "Gesellschaftliche Institutionen" },
  { word: "Stiftung", article: "die", translation: "foundation (organization)", category: "Gesellschaftliche Institutionen" },
  { word: "Dachverband", article: "der", translation: "umbrella organization", category: "Gesellschaftliche Institutionen" },
  { word: "Kammer", article: "die", translation: "chamber (institution)", category: "Gesellschaftliche Institutionen" },
  { word: "Kommission", article: "die", translation: "commission", category: "Gesellschaftliche Institutionen" },

  // Redaktionsalltag & Content
  { word: "Inhalt", article: "der", translation: "content", category: "Redaktionsalltag & Content" },
  { word: "Beitrag", article: "der", translation: "post/contribution", category: "Redaktionsalltag & Content" },
  { word: "Veröffentlichung", article: "die", translation: "publication", category: "Redaktionsalltag & Content" },
  { word: "Entwurf", article: "der", translation: "draft", category: "Redaktionsalltag & Content" },
  { word: "Korrektur", article: "die", translation: "correction/proofreading", category: "Redaktionsalltag & Content" },
  { word: "Redaktion", article: "die", translation: "editorial team", category: "Redaktionsalltag & Content" },

  // Klimafreundliches Leben
  { word: "CO2-Fußabdruck", article: "der", translation: "carbon footprint", category: "Klimafreundliches Leben" },
  { word: "Klimaschutzmaßnahme", article: "die", translation: "climate protection measure", category: "Klimafreundliches Leben" },
  { word: "Emissionshandel", article: "der", translation: "emissions trading", category: "Klimafreundliches Leben" },
  { word: "Kompensation", article: "die", translation: "offsetting/compensation", category: "Klimafreundliches Leben" },
  { word: "Verzicht", article: "der", translation: "renunciation/giving up", category: "Klimafreundliches Leben" },

  // Wohnungssuche
  { word: "Wohnungssuche", article: "die", translation: "apartment hunting", category: "Wohnungssuche" },
  { word: "Besichtigung", article: "die", translation: "viewing (property)", category: "Wohnungssuche" },
  { word: "Kaution", article: "die", translation: "security deposit", category: "Wohnungssuche" },
  { word: "Mietvertrag", article: "der", translation: "rental agreement", category: "Wohnungssuche" },
  { word: "Wohngemeinschaft", article: "die", translation: "shared apartment", category: "Wohnungssuche" },

  // Kunsthandwerk
  { word: "Kunsthandwerk", article: "das", translation: "arts and crafts", category: "Kunsthandwerk" },
  { word: "Töpferei", article: "die", translation: "pottery", category: "Kunsthandwerk" },
  { word: "Schmuckherstellung", article: "die", translation: "jewelry making", category: "Kunsthandwerk" },
  { word: "Weberei", article: "die", translation: "weaving", category: "Kunsthandwerk" },
  { word: "Schnitzerei", article: "die", translation: "carving", category: "Kunsthandwerk" },

  // Verkauf & Kundenkontakt
  { word: "Beschwerde", article: "die", translation: "complaint", category: "Verkauf & Kundenkontakt" },
  { word: "Kundenservice", article: "der", translation: "customer service", category: "Verkauf & Kundenkontakt" },
  { word: "Umtausch", article: "der", translation: "exchange (retail)", category: "Verkauf & Kundenkontakt" },
  { word: "Garantie", article: "die", translation: "warranty", category: "Verkauf & Kundenkontakt" },
  { word: "Kulanz", article: "die", translation: "goodwill gesture", category: "Verkauf & Kundenkontakt" },
  { word: "Nachbesserung", article: "die", translation: "rectification/rework", category: "Verkauf & Kundenkontakt" },

  // Naturschutzgebiete & Wildnis
  { word: "Wildnis", article: "die", translation: "wilderness", category: "Naturschutzgebiete & Wildnis" },
  { word: "Schutzgebiet", article: "das", translation: "protected area", category: "Naturschutzgebiete & Wildnis" },
  { word: "Wildtier", article: "das", translation: "wild animal", category: "Naturschutzgebiete & Wildnis" },
  { word: "Jäger", article: "der", translation: "hunter", category: "Naturschutzgebiete & Wildnis" },
  { word: "Förster", article: "der", translation: "forester", category: "Naturschutzgebiete & Wildnis" },
  { word: "Aufforstung", article: "die", translation: "reforestation", category: "Naturschutzgebiete & Wildnis" },

  // Berufsorientierung
  { word: "Berufswahl", article: "die", translation: "career choice", category: "Berufsorientierung" },
  { word: "Eignungstest", article: "der", translation: "aptitude test", category: "Berufsorientierung" },
  { word: "Berufsberatung", article: "die", translation: "career counseling", category: "Berufsorientierung" },
  { word: "Quereinsteiger", article: "der", translation: "career changer", category: "Berufsorientierung" },
  { word: "Zukunftsaussicht", article: "die", translation: "future prospect", category: "Berufsorientierung" },

  // Diplomarbeit & Forschung (Studium)
  { word: "Abschlussarbeit", article: "die", translation: "thesis", category: "Diplomarbeit & Forschung (Studium)" },
  { word: "Literaturverzeichnis", article: "das", translation: "bibliography", category: "Diplomarbeit & Forschung (Studium)" },
  { word: "Fußnote", article: "die", translation: "footnote", category: "Diplomarbeit & Forschung (Studium)" },
  { word: "Plagiat", article: "das", translation: "plagiarism", category: "Diplomarbeit & Forschung (Studium)" },
  { word: "Gutachten", article: "das", translation: "expert opinion/assessment", category: "Diplomarbeit & Forschung (Studium)" },
  { word: "Betreuer", article: "der", translation: "advisor/supervisor", category: "Diplomarbeit & Forschung (Studium)" },

  // Nachbarschaft & Zusammenleben
  { word: "Mietshaus", article: "das", translation: "apartment building", category: "Nachbarschaft & Zusammenleben" },
  { word: "Hausordnung", article: "die", translation: "house rules", category: "Nachbarschaft & Zusammenleben" },
  { word: "Ruhestörung", article: "die", translation: "disturbance of the peace", category: "Nachbarschaft & Zusammenleben" },
  { word: "Gemeinschaftsraum", article: "der", translation: "communal room", category: "Nachbarschaft & Zusammenleben" },
  { word: "Hausmeister", article: "der", translation: "building superintendent", category: "Nachbarschaft & Zusammenleben" },
  { word: "Zusammenleben", article: "das", translation: "living together/coexistence", category: "Nachbarschaft & Zusammenleben" },

  // Wettbewerb & Auszeichnungen
  { word: "Wettbewerb", article: "der", translation: "competition/contest", category: "Wettbewerb & Auszeichnungen" },
  { word: "Auszeichnung", article: "die", translation: "award/distinction", category: "Wettbewerb & Auszeichnungen" },
  { word: "Preisverleihung", article: "die", translation: "award ceremony", category: "Wettbewerb & Auszeichnungen" },
  { word: "Gewinner", article: "der", translation: "winner", category: "Wettbewerb & Auszeichnungen" },
  { word: "Teilnehmer", article: "der", translation: "participant", category: "Wettbewerb & Auszeichnungen" },
  { word: "Jury", article: "die", translation: "jury/panel of judges", category: "Wettbewerb & Auszeichnungen" },
  { word: "Pokal", article: "der", translation: "trophy/cup", category: "Wettbewerb & Auszeichnungen" },
  { word: "Urkunde", article: "die", translation: "certificate", category: "Wettbewerb & Auszeichnungen" },

  // Handel im Wandel
  { word: "Ladenschluss", article: "der", translation: "store closing time", category: "Handel im Wandel" },
  { word: "Innenstadt", article: "die", translation: "city center/downtown", category: "Handel im Wandel" },
  { word: "Leerstand", article: "der", translation: "vacancy (retail space)", category: "Handel im Wandel" },
  { word: "Einkaufszentrum", article: "das", translation: "shopping mall", category: "Handel im Wandel" },
  { word: "Ladenkette", article: "die", translation: "retail chain", category: "Handel im Wandel" },
  { word: "Nachfrageeinbruch", article: "der", translation: "demand slump", category: "Handel im Wandel" },
  { word: "Wettbewerbsdruck", article: "der", translation: "competitive pressure", category: "Handel im Wandel" },

  // Sonstiges (vertieft)
  { word: "Ausnahme", article: "die", translation: "exception", category: "Sonstiges (vertieft)" },
  { word: "Voraussetzung", article: "die", translation: "prerequisite", category: "Sonstiges (vertieft)" },
  { word: "Rahmenbedingung", article: "die", translation: "framework condition", category: "Sonstiges (vertieft)" },
  { word: "Grundlage", article: "die", translation: "basis/foundation (abstract)", category: "Sonstiges (vertieft)" },
  { word: "Hintergrund", article: "der", translation: "background (context)", category: "Sonstiges (vertieft)" },
  { word: "Ausblick", article: "der", translation: "outlook", category: "Sonstiges (vertieft)" },
  { word: "Anlass", article: "der", translation: "occasion/reason", category: "Sonstiges (vertieft)" },
  { word: "Auswirkung", article: "die", translation: "impact/effect", category: "Sonstiges (vertieft)" },
];

export const NOUNS_BY_LEVEL: Record<Level, GermanNoun[]> = {
  a1: a1Words.map((n, i) => ({ id: `a1-${i}`, ...n })),
  a2: [...a1Words, ...a2NewWords].map((n, i) => ({ id: `a2-${i}`, ...n })),
  b1: [...a1Words, ...a2NewWords, ...b1NewWords].map((n, i) => ({ id: `b1-${i}`, ...n })),
  b2: [],
  c1: [],
  c2: [],
};

export function categoriesForLevel(level: Level): string[] {
  const seen = new Set<string>();
  const order: string[] = [];
  for (const noun of NOUNS_BY_LEVEL[level]) {
    if (!seen.has(noun.category)) {
      seen.add(noun.category);
      order.push(noun.category);
    }
  }
  return order;
}

export function nounsForCategories(level: Level, categories: string[]): GermanNoun[] {
  const allowed = new Set(categories);
  return NOUNS_BY_LEVEL[level].filter((n) => allowed.has(n.category));
}
