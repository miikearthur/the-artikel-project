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
  { word: "Zitrusfrucht", article: "die", translation: "citrus fruit", category: "Obst" },

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

export const NOUNS_BY_LEVEL: Record<Level, GermanNoun[]> = {
  a1: a1Words.map((n, i) => ({ id: `a1-${i}`, ...n })),
  a2: [],
  b1: [],
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
