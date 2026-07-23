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

// B2 adds 2000 new upper-intermediate nouns on top of everything from B1 —
// the B2 pool is all of A1+A2+B1 (as review) plus these, 4000 words total.
const b2NewWords: Omit<GermanNoun, "id">[] = [
  // Naturwissenschaften (vertieft)
  { word: "Naturgesetz", article: "das", translation: "law of nature", category: "Naturwissenschaften (vertieft)" },
  { word: "Naturkonstante", article: "die", translation: "physical constant", category: "Naturwissenschaften (vertieft)" },
  { word: "Naturwissenschaft", article: "die", translation: "natural science", category: "Naturwissenschaften (vertieft)" },
  { word: "Beobachtung", article: "die", translation: "observation", category: "Naturwissenschaften (vertieft)" },
  { word: "Messung", article: "die", translation: "measurement", category: "Naturwissenschaften (vertieft)" },
  { word: "Messwert", article: "der", translation: "measured value", category: "Naturwissenschaften (vertieft)" },
  { word: "Fehlerquote", article: "die", translation: "error rate", category: "Naturwissenschaften (vertieft)" },
  { word: "Präzision", article: "die", translation: "precision", category: "Naturwissenschaften (vertieft)" },
  { word: "Validität", article: "die", translation: "validity", category: "Naturwissenschaften (vertieft)" },
  { word: "Reproduzierbarkeit", article: "die", translation: "reproducibility", category: "Naturwissenschaften (vertieft)" },
  { word: "Paradigma", article: "das", translation: "paradigm", category: "Naturwissenschaften (vertieft)" },
  { word: "Anomalie", article: "die", translation: "anomaly", category: "Naturwissenschaften (vertieft)" },
  { word: "Kausalität", article: "die", translation: "causality", category: "Naturwissenschaften (vertieft)" },
  { word: "Korrelation", article: "die", translation: "correlation", category: "Naturwissenschaften (vertieft)" },
  { word: "Wechselwirkung", article: "die", translation: "interaction (physical)", category: "Naturwissenschaften (vertieft)" },

  // Quantenphysik & moderne Physik
  { word: "Quant", article: "das", translation: "quantum", category: "Quantenphysik & moderne Physik" },
  { word: "Quantenmechanik", article: "die", translation: "quantum mechanics", category: "Quantenphysik & moderne Physik" },
  { word: "Elementarteilchen", article: "das", translation: "elementary particle", category: "Quantenphysik & moderne Physik" },
  { word: "Photon", article: "das", translation: "photon", category: "Quantenphysik & moderne Physik" },
  { word: "Elektron", article: "das", translation: "electron", category: "Quantenphysik & moderne Physik" },
  { word: "Neutron", article: "das", translation: "neutron", category: "Quantenphysik & moderne Physik" },
  { word: "Proton", article: "das", translation: "proton", category: "Quantenphysik & moderne Physik" },
  { word: "Relativitätstheorie", article: "die", translation: "theory of relativity", category: "Quantenphysik & moderne Physik" },
  { word: "Raumzeit", article: "die", translation: "spacetime", category: "Quantenphysik & moderne Physik" },
  { word: "Vakuum", article: "das", translation: "vacuum", category: "Quantenphysik & moderne Physik" },
  { word: "Antimaterie", article: "die", translation: "antimatter", category: "Quantenphysik & moderne Physik" },
  { word: "Beschleuniger", article: "der", translation: "particle accelerator", category: "Quantenphysik & moderne Physik" },
  { word: "Kernspaltung", article: "die", translation: "nuclear fission", category: "Quantenphysik & moderne Physik" },
  { word: "Kernfusion", article: "die", translation: "nuclear fusion", category: "Quantenphysik & moderne Physik" },
  { word: "Strahlendosis", article: "die", translation: "radiation dose", category: "Quantenphysik & moderne Physik" },

  // Chemie (vertieft)
  { word: "Chemikalie", article: "die", translation: "chemical substance", category: "Chemie (vertieft)" },
  { word: "Isotop", article: "das", translation: "isotope", category: "Chemie (vertieft)" },
  { word: "Legierung", article: "die", translation: "alloy", category: "Chemie (vertieft)" },
  { word: "Katalysator", article: "der", translation: "catalyst", category: "Chemie (vertieft)" },
  { word: "Synthese", article: "die", translation: "synthesis", category: "Chemie (vertieft)" },
  { word: "Oxidation", article: "die", translation: "oxidation", category: "Chemie (vertieft)" },
  { word: "Säure", article: "die", translation: "acid", category: "Chemie (vertieft)" },
  { word: "Lauge", article: "die", translation: "base/lye", category: "Chemie (vertieft)" },
  { word: "Neutralisation", article: "die", translation: "neutralization", category: "Chemie (vertieft)" },
  { word: "Molekülstruktur", article: "die", translation: "molecular structure", category: "Chemie (vertieft)" },
  { word: "Löslichkeit", article: "die", translation: "solubility", category: "Chemie (vertieft)" },
  { word: "Schmelzpunkt", article: "der", translation: "melting point", category: "Chemie (vertieft)" },
  { word: "Siedepunkt", article: "der", translation: "boiling point", category: "Chemie (vertieft)" },
  { word: "Dichte", article: "die", translation: "density", category: "Chemie (vertieft)" },
  { word: "Periodensystem", article: "das", translation: "periodic table", category: "Chemie (vertieft)" },

  // Medizinische Forschung
  { word: "Arzneimittelstudie", article: "die", translation: "drug trial", category: "Medizinische Forschung" },
  { word: "Proband", article: "der", translation: "test subject", category: "Medizinische Forschung" },
  { word: "Placebo", article: "das", translation: "placebo", category: "Medizinische Forschung" },
  { word: "Nebenwirkung", article: "die", translation: "side effect", category: "Medizinische Forschung" },
  { word: "Wirksamkeit", article: "die", translation: "efficacy", category: "Medizinische Forschung" },
  { word: "Zulassung", article: "die", translation: "approval (drug/medical)", category: "Medizinische Forschung" },
  { word: "Wirkstoff", article: "der", translation: "active ingredient", category: "Medizinische Forschung" },
  { word: "Dosierung", article: "die", translation: "dosage", category: "Medizinische Forschung" },
  { word: "Verträglichkeit", article: "die", translation: "tolerability", category: "Medizinische Forschung" },
  { word: "Langzeitstudie", article: "die", translation: "long-term study", category: "Medizinische Forschung" },
  { word: "Kontrollgruppe", article: "die", translation: "control group", category: "Medizinische Forschung" },
  { word: "Genesung", article: "die", translation: "recovery", category: "Medizinische Forschung" },
  { word: "Heilungschance", article: "die", translation: "chance of recovery", category: "Medizinische Forschung" },
  { word: "Lebenserwartung", article: "die", translation: "life expectancy", category: "Medizinische Forschung" },
  { word: "Sterblichkeitsrate", article: "die", translation: "mortality rate", category: "Medizinische Forschung" },

  // Genetik & Biotechnologie
  { word: "DNA", article: "die", translation: "DNA", category: "Genetik & Biotechnologie" },
  { word: "Erbgut", article: "das", translation: "genetic material", category: "Genetik & Biotechnologie" },
  { word: "Vererbung", article: "die", translation: "heredity", category: "Genetik & Biotechnologie" },
  { word: "Mutation", article: "die", translation: "mutation", category: "Genetik & Biotechnologie" },
  { word: "Chromosom", article: "das", translation: "chromosome", category: "Genetik & Biotechnologie" },
  { word: "Genforschung", article: "die", translation: "genetic research", category: "Genetik & Biotechnologie" },
  { word: "Gentest", article: "der", translation: "genetic test", category: "Genetik & Biotechnologie" },
  { word: "Genmanipulation", article: "die", translation: "genetic manipulation", category: "Genetik & Biotechnologie" },
  { word: "Klonen", article: "das", translation: "cloning", category: "Genetik & Biotechnologie" },
  { word: "Stammzelle", article: "die", translation: "stem cell", category: "Genetik & Biotechnologie" },
  { word: "Biotechnologie", article: "die", translation: "biotechnology", category: "Genetik & Biotechnologie" },
  { word: "Genschere", article: "die", translation: "gene-editing tool", category: "Genetik & Biotechnologie" },
  { word: "Fortpflanzungstechnik", article: "die", translation: "reproductive technology", category: "Genetik & Biotechnologie" },
  { word: "Erbfaktor", article: "der", translation: "hereditary factor", category: "Genetik & Biotechnologie" },
  { word: "Erbkrankheit", article: "die", translation: "hereditary disease", category: "Genetik & Biotechnologie" },

  // Neurowissenschaft
  { word: "Gehirn", article: "das", translation: "brain", category: "Neurowissenschaft" },
  { word: "Nervenzelle", article: "die", translation: "nerve cell", category: "Neurowissenschaft" },
  { word: "Neuron", article: "das", translation: "neuron", category: "Neurowissenschaft" },
  { word: "Synapse", article: "die", translation: "synapse", category: "Neurowissenschaft" },
  { word: "Neurotransmitter", article: "der", translation: "neurotransmitter", category: "Neurowissenschaft" },
  { word: "Hirnforschung", article: "die", translation: "brain research", category: "Neurowissenschaft" },
  { word: "Hirnhälfte", article: "die", translation: "brain hemisphere", category: "Neurowissenschaft" },
  { word: "Hirnstamm", article: "der", translation: "brainstem", category: "Neurowissenschaft" },
  { word: "Kleinhirn", article: "das", translation: "cerebellum", category: "Neurowissenschaft" },
  { word: "Großhirnrinde", article: "die", translation: "cerebral cortex", category: "Neurowissenschaft" },
  { word: "Reizübertragung", article: "die", translation: "neural signal transmission", category: "Neurowissenschaft" },
  { word: "Wahrnehmungsstörung", article: "die", translation: "perception disorder", category: "Neurowissenschaft" },
  { word: "Gehirnaktivität", article: "die", translation: "brain activity", category: "Neurowissenschaft" },
  { word: "Denkprozess", article: "der", translation: "thought process", category: "Neurowissenschaft" },
  { word: "Plastizität", article: "die", translation: "neural plasticity", category: "Neurowissenschaft" },

  // Statistik & Datenanalyse
  { word: "Datensatz", article: "der", translation: "dataset", category: "Statistik & Datenanalyse" },
  { word: "Datenerhebung", article: "die", translation: "data collection", category: "Statistik & Datenanalyse" },
  { word: "Auswertung", article: "die", translation: "evaluation/analysis", category: "Statistik & Datenanalyse" },
  { word: "Häufigkeit", article: "die", translation: "frequency", category: "Statistik & Datenanalyse" },
  { word: "Verteilung", article: "die", translation: "distribution", category: "Statistik & Datenanalyse" },
  { word: "Standardabweichung", article: "die", translation: "standard deviation", category: "Statistik & Datenanalyse" },
  { word: "Median", article: "der", translation: "median", category: "Statistik & Datenanalyse" },
  { word: "Signifikanz", article: "die", translation: "significance", category: "Statistik & Datenanalyse" },
  { word: "Datenvisualisierung", article: "die", translation: "data visualization", category: "Statistik & Datenanalyse" },
  { word: "Prognose", article: "die", translation: "forecast/prediction", category: "Statistik & Datenanalyse" },
  { word: "Trendanalyse", article: "die", translation: "trend analysis", category: "Statistik & Datenanalyse" },
  { word: "Rohdaten", article: "die", translation: "raw data", category: "Statistik & Datenanalyse" },
  { word: "Erhebungsmethode", article: "die", translation: "survey method", category: "Statistik & Datenanalyse" },
  { word: "Repräsentativität", article: "die", translation: "representativeness", category: "Statistik & Datenanalyse" },
  { word: "Regressionsanalyse", article: "die", translation: "regression analysis", category: "Statistik & Datenanalyse" },

  // Wissenschaftstheorie
  { word: "Modell", article: "das", translation: "model", category: "Wissenschaftstheorie" },
  { word: "Annahme", article: "die", translation: "assumption", category: "Wissenschaftstheorie" },
  { word: "Prämisse", article: "die", translation: "premise", category: "Wissenschaftstheorie" },
  { word: "Schlussfolgerung", article: "die", translation: "conclusion", category: "Wissenschaftstheorie" },
  { word: "Widerlegung", article: "die", translation: "refutation", category: "Wissenschaftstheorie" },
  { word: "Falsifizierbarkeit", article: "die", translation: "falsifiability", category: "Wissenschaftstheorie" },
  { word: "Axiom", article: "das", translation: "axiom", category: "Wissenschaftstheorie" },
  { word: "Methodik", article: "die", translation: "methodology", category: "Wissenschaftstheorie" },
  { word: "Erkenntnisgewinn", article: "der", translation: "gain in knowledge", category: "Wissenschaftstheorie" },
  { word: "Objektivität", article: "die", translation: "objectivity", category: "Wissenschaftstheorie" },
  { word: "Subjektivität", article: "die", translation: "subjectivity", category: "Wissenschaftstheorie" },
  { word: "Verallgemeinerung", article: "die", translation: "generalization", category: "Wissenschaftstheorie" },
  { word: "Interdisziplinarität", article: "die", translation: "interdisciplinarity", category: "Wissenschaftstheorie" },
  { word: "Fragestellung", article: "die", translation: "research question", category: "Wissenschaftstheorie" },
  { word: "Denkansatz", article: "der", translation: "approach/way of thinking", category: "Wissenschaftstheorie" },

  // Forschungsmethodik
  { word: "Experiment", article: "das", translation: "experiment", category: "Forschungsmethodik" },
  { word: "Feldforschung", article: "die", translation: "field research", category: "Forschungsmethodik" },
  { word: "Fallstudie", article: "die", translation: "case study", category: "Forschungsmethodik" },
  { word: "Beobachtungsstudie", article: "die", translation: "observational study", category: "Forschungsmethodik" },
  { word: "Fragebogen", article: "der", translation: "questionnaire", category: "Forschungsmethodik" },
  { word: "Versuchsanordnung", article: "die", translation: "experimental setup", category: "Forschungsmethodik" },
  { word: "Kontrollvariable", article: "die", translation: "control variable", category: "Forschungsmethodik" },
  { word: "Störvariable", article: "die", translation: "confounding variable", category: "Forschungsmethodik" },
  { word: "Forschungsfrage", article: "die", translation: "research question", category: "Forschungsmethodik" },
  { word: "Primärquelle", article: "die", translation: "primary source", category: "Forschungsmethodik" },
  { word: "Sekundärquelle", article: "die", translation: "secondary source", category: "Forschungsmethodik" },
  { word: "Quellenkritik", article: "die", translation: "source criticism", category: "Forschungsmethodik" },
  { word: "Auswertungsmethode", article: "die", translation: "method of analysis", category: "Forschungsmethodik" },
  { word: "Stichprobengröße", article: "die", translation: "sample size", category: "Forschungsmethodik" },
  { word: "Studienaufbau", article: "der", translation: "study design", category: "Forschungsmethodik" },

  // Erkenntnistheorie
  { word: "Erkenntnis", article: "die", translation: "insight/knowledge", category: "Erkenntnistheorie" },
  { word: "Gewissheit", article: "die", translation: "certainty", category: "Erkenntnistheorie" },
  { word: "Skepsis", article: "die", translation: "skepticism", category: "Erkenntnistheorie" },
  { word: "Verstand", article: "der", translation: "mind/intellect", category: "Erkenntnistheorie" },
  { word: "Einsicht", article: "die", translation: "insight", category: "Erkenntnistheorie" },
  { word: "Anschauung", article: "die", translation: "perception/view", category: "Erkenntnistheorie" },
  { word: "Empirismus", article: "der", translation: "empiricism", category: "Erkenntnistheorie" },
  { word: "Rationalismus", article: "der", translation: "rationalism", category: "Erkenntnistheorie" },
  { word: "Wahrnehmungstheorie", article: "die", translation: "perception theory", category: "Erkenntnistheorie" },
  { word: "Erkenntnisquelle", article: "die", translation: "source of knowledge", category: "Erkenntnistheorie" },
  { word: "Denkweise", article: "die", translation: "way of thinking", category: "Erkenntnistheorie" },
  { word: "Urteilskraft", article: "die", translation: "power of judgment", category: "Erkenntnistheorie" },
  { word: "Plausibilität", article: "die", translation: "plausibility", category: "Erkenntnistheorie" },
  { word: "Überzeugungskraft", article: "die", translation: "persuasiveness", category: "Erkenntnistheorie" },
  { word: "Gedankenwelt", article: "die", translation: "world of thought", category: "Erkenntnistheorie" },

  // Existenzphilosophie
  { word: "Existenz", article: "die", translation: "existence", category: "Existenzphilosophie" },
  { word: "Dasein", article: "das", translation: "being/existence", category: "Existenzphilosophie" },
  { word: "Absurdität", article: "die", translation: "absurdity", category: "Existenzphilosophie" },
  { word: "Sinnsuche", article: "die", translation: "search for meaning", category: "Existenzphilosophie" },
  { word: "Selbstbestimmung", article: "die", translation: "self-determination", category: "Existenzphilosophie" },
  { word: "Entfremdung", article: "die", translation: "alienation", category: "Existenzphilosophie" },
  { word: "Verzweiflung", article: "die", translation: "despair", category: "Existenzphilosophie" },
  { word: "Autonomie", article: "die", translation: "autonomy", category: "Existenzphilosophie" },
  { word: "Individuum", article: "das", translation: "individual (philosophical)", category: "Existenzphilosophie" },
  { word: "Authentizität", article: "die", translation: "authenticity", category: "Existenzphilosophie" },
  { word: "Selbstverwirklichung", article: "die", translation: "self-actualization", category: "Existenzphilosophie" },
  { word: "Vergänglichkeit", article: "die", translation: "transience", category: "Existenzphilosophie" },
  { word: "Grenzerfahrung", article: "die", translation: "limit experience", category: "Existenzphilosophie" },
  { word: "Lebenssinn", article: "der", translation: "meaning of life", category: "Existenzphilosophie" },
  { word: "Ohnmacht", article: "die", translation: "powerlessness", category: "Existenzphilosophie" },

  // Angewandte Ethik
  { word: "Moralvorstellung", article: "die", translation: "moral notion", category: "Angewandte Ethik" },
  { word: "Wertekonflikt", article: "der", translation: "conflict of values", category: "Angewandte Ethik" },
  { word: "Gewissensfrage", article: "die", translation: "matter of conscience", category: "Angewandte Ethik" },
  { word: "Verantwortungsbewusstsein", article: "das", translation: "sense of responsibility", category: "Angewandte Ethik" },
  { word: "Pflichtgefühl", article: "das", translation: "sense of duty", category: "Angewandte Ethik" },
  { word: "Tierethik", article: "die", translation: "animal ethics", category: "Angewandte Ethik" },
  { word: "Bioethik", article: "die", translation: "bioethics", category: "Angewandte Ethik" },
  { word: "Sterbehilfe", article: "die", translation: "euthanasia/assisted dying", category: "Angewandte Ethik" },
  { word: "Selbstbestimmungsrecht", article: "das", translation: "right to self-determination", category: "Angewandte Ethik" },
  { word: "Interessenkonflikt", article: "der", translation: "conflict of interest", category: "Angewandte Ethik" },
  { word: "Doppelmoral", article: "die", translation: "double standard", category: "Angewandte Ethik" },
  { word: "Wertvorstellung", article: "die", translation: "set of values", category: "Angewandte Ethik" },
  { word: "Gerechtigkeitssinn", article: "der", translation: "sense of justice", category: "Angewandte Ethik" },
  { word: "Ethikkommission", article: "die", translation: "ethics committee", category: "Angewandte Ethik" },
  { word: "Moralphilosophie", article: "die", translation: "moral philosophy", category: "Angewandte Ethik" },

  // Kognitive Psychologie
  { word: "Denkvermögen", article: "das", translation: "cognitive ability", category: "Kognitive Psychologie" },
  { word: "Gedächtnisleistung", article: "die", translation: "memory performance", category: "Kognitive Psychologie" },
  { word: "Merkfähigkeit", article: "die", translation: "capacity to memorize", category: "Kognitive Psychologie" },
  { word: "Aufmerksamkeitsspanne", article: "die", translation: "attention span", category: "Kognitive Psychologie" },
  { word: "Wahrnehmungsverzerrung", article: "die", translation: "perceptual bias", category: "Kognitive Psychologie" },
  { word: "Denkfehler", article: "der", translation: "cognitive error", category: "Kognitive Psychologie" },
  { word: "Vorurteilsstruktur", article: "die", translation: "structure of prejudice", category: "Kognitive Psychologie" },
  { word: "Problemlösung", article: "die", translation: "problem-solving", category: "Kognitive Psychologie" },
  { word: "Entscheidungsprozess", article: "der", translation: "decision-making process", category: "Kognitive Psychologie" },
  { word: "Denkmuster", article: "das", translation: "thought pattern", category: "Kognitive Psychologie" },
  { word: "Lernfähigkeit", article: "die", translation: "ability to learn", category: "Kognitive Psychologie" },
  { word: "Konzentrationsfähigkeit", article: "die", translation: "ability to concentrate", category: "Kognitive Psychologie" },
  { word: "Reaktionszeit", article: "die", translation: "reaction time", category: "Kognitive Psychologie" },
  { word: "Informationsverarbeitung", article: "die", translation: "information processing", category: "Kognitive Psychologie" },
  { word: "Gedankengang", article: "der", translation: "train of thought", category: "Kognitive Psychologie" },

  // Persönlichkeitspsychologie
  { word: "Persönlichkeitsmerkmal", article: "das", translation: "personality trait", category: "Persönlichkeitspsychologie" },
  { word: "Persönlichkeitsstörung", article: "die", translation: "personality disorder", category: "Persönlichkeitspsychologie" },
  { word: "Selbstwertgefühl", article: "das", translation: "self-esteem", category: "Persönlichkeitspsychologie" },
  { word: "Charakterstärke", article: "die", translation: "character strength", category: "Persönlichkeitspsychologie" },
  { word: "Temperament", article: "das", translation: "temperament", category: "Persönlichkeitspsychologie" },
  { word: "Verhaltensmuster", article: "das", translation: "behavior pattern", category: "Persönlichkeitspsychologie" },
  { word: "Selbstbild", article: "das", translation: "self-image", category: "Persönlichkeitspsychologie" },
  { word: "Fremdbild", article: "das", translation: "how one is perceived by others", category: "Persönlichkeitspsychologie" },
  { word: "Identitätskrise", article: "die", translation: "identity crisis", category: "Persönlichkeitspsychologie" },
  { word: "Persönlichkeitsentfaltung", article: "die", translation: "personal development", category: "Persönlichkeitspsychologie" },
  { word: "Selbstakzeptanz", article: "die", translation: "self-acceptance", category: "Persönlichkeitspsychologie" },
  { word: "Perfektionismus", article: "der", translation: "perfectionism", category: "Persönlichkeitspsychologie" },
  { word: "Risikobereitschaft", article: "die", translation: "willingness to take risks", category: "Persönlichkeitspsychologie" },
  { word: "Anpassungsfähigkeit", article: "die", translation: "adaptability", category: "Persönlichkeitspsychologie" },
  { word: "Belastbarkeit", article: "die", translation: "resilience", category: "Persönlichkeitspsychologie" },

  // Sozialpsychologie
  { word: "Gruppendynamik", article: "die", translation: "group dynamics", category: "Sozialpsychologie" },
  { word: "Gruppenzwang", article: "der", translation: "peer pressure", category: "Sozialpsychologie" },
  { word: "Konformität", article: "die", translation: "conformity", category: "Sozialpsychologie" },
  { word: "Feindbild", article: "das", translation: "negative stereotype of an out-group", category: "Sozialpsychologie" },
  { word: "Stereotyp", article: "das", translation: "stereotype", category: "Sozialpsychologie" },
  { word: "Rollenverhalten", article: "das", translation: "role behavior", category: "Sozialpsychologie" },
  { word: "Statusdenken", article: "das", translation: "status-consciousness", category: "Sozialpsychologie" },
  { word: "Machtgefälle", article: "das", translation: "power imbalance", category: "Sozialpsychologie" },
  { word: "Manipulationstechnik", article: "die", translation: "manipulation technique", category: "Sozialpsychologie" },
  { word: "Sozialerwünschtheit", article: "die", translation: "social desirability", category: "Sozialpsychologie" },
  { word: "Zugehörigkeitsgefühl", article: "das", translation: "sense of belonging", category: "Sozialpsychologie" },
  { word: "Ausgrenzung", article: "die", translation: "exclusion", category: "Sozialpsychologie" },
  { word: "Anerkennung", article: "die", translation: "recognition/approval", category: "Sozialpsychologie" },
  { word: "Selbstdarstellung", article: "die", translation: "self-presentation", category: "Sozialpsychologie" },
  { word: "Massenpsychologie", article: "die", translation: "mass/crowd psychology", category: "Sozialpsychologie" },

  // Entwicklungspsychologie
  { word: "Entwicklungsphase", article: "die", translation: "developmental stage", category: "Entwicklungspsychologie" },
  { word: "Bindungstheorie", article: "die", translation: "attachment theory", category: "Entwicklungspsychologie" },
  { word: "Sozialisation", article: "die", translation: "socialization", category: "Entwicklungspsychologie" },
  { word: "Reifeprozess", article: "der", translation: "maturation process", category: "Entwicklungspsychologie" },
  { word: "Ablösungsprozess", article: "der", translation: "process of separation (from parents)", category: "Entwicklungspsychologie" },
  { word: "Identitätsfindung", article: "die", translation: "finding one's identity", category: "Entwicklungspsychologie" },
  { word: "Entwicklungsstörung", article: "die", translation: "developmental disorder", category: "Entwicklungspsychologie" },
  { word: "Frühförderung", article: "die", translation: "early childhood intervention", category: "Entwicklungspsychologie" },
  { word: "Erziehungsstil", article: "der", translation: "parenting style", category: "Entwicklungspsychologie" },
  { word: "Bezugsperson", article: "die", translation: "caregiver/attachment figure", category: "Entwicklungspsychologie" },
  { word: "Kindesentwicklung", article: "die", translation: "child development", category: "Entwicklungspsychologie" },
  { word: "Entwicklungsschritt", article: "der", translation: "developmental step", category: "Entwicklungspsychologie" },
  { word: "Altersstufe", article: "die", translation: "age group/stage", category: "Entwicklungspsychologie" },
  { word: "Verselbstständigung", article: "die", translation: "becoming independent", category: "Entwicklungspsychologie" },
  { word: "Erwachsenwerden", article: "das", translation: "coming of age", category: "Entwicklungspsychologie" },

  // Politikwissenschaft
  { word: "Machtverteilung", article: "die", translation: "distribution of power", category: "Politikwissenschaft" },
  { word: "Gewaltenteilung", article: "die", translation: "separation of powers", category: "Politikwissenschaft" },
  { word: "Regierungsform", article: "die", translation: "form of government", category: "Politikwissenschaft" },
  { word: "Legitimität", article: "die", translation: "legitimacy", category: "Politikwissenschaft" },
  { word: "Machtmissbrauch", article: "der", translation: "abuse of power", category: "Politikwissenschaft" },
  { word: "Regierungskrise", article: "die", translation: "government crisis", category: "Politikwissenschaft" },
  { word: "Politikverdrossenheit", article: "die", translation: "political disillusionment", category: "Politikwissenschaft" },
  { word: "Wählerschaft", article: "die", translation: "electorate", category: "Politikwissenschaft" },
  { word: "Machtwechsel", article: "der", translation: "change of power", category: "Politikwissenschaft" },
  { word: "Regierungsbildung", article: "die", translation: "government formation", category: "Politikwissenschaft" },
  { word: "Populismus", article: "der", translation: "populism", category: "Politikwissenschaft" },
  { word: "Extremismus", article: "der", translation: "extremism", category: "Politikwissenschaft" },
  { word: "Radikalisierung", article: "die", translation: "radicalization", category: "Politikwissenschaft" },
  { word: "Machtstruktur", article: "die", translation: "power structure", category: "Politikwissenschaft" },
  { word: "Staatsform", article: "die", translation: "type of state", category: "Politikwissenschaft" },

  // Völkerrecht & Diplomatie
  { word: "Völkerrecht", article: "das", translation: "international law", category: "Völkerrecht & Diplomatie" },
  { word: "Souveränität", article: "die", translation: "sovereignty", category: "Völkerrecht & Diplomatie" },
  { word: "Staatsgrenze", article: "die", translation: "national border", category: "Völkerrecht & Diplomatie" },
  { word: "Vertragspartei", article: "die", translation: "treaty party", category: "Völkerrecht & Diplomatie" },
  { word: "Ratifizierung", article: "die", translation: "ratification", category: "Völkerrecht & Diplomatie" },
  { word: "Kriegsverbrechen", article: "das", translation: "war crime", category: "Völkerrecht & Diplomatie" },
  { word: "Völkermord", article: "der", translation: "genocide", category: "Völkerrecht & Diplomatie" },
  { word: "Immunität", article: "die", translation: "immunity", category: "Völkerrecht & Diplomatie" },
  { word: "Gesandtschaft", article: "die", translation: "diplomatic mission", category: "Völkerrecht & Diplomatie" },
  { word: "Staatsbesuch", article: "der", translation: "state visit", category: "Völkerrecht & Diplomatie" },
  { word: "Vermittler", article: "der", translation: "mediator (diplomatic)", category: "Völkerrecht & Diplomatie" },
  { word: "Blockbildung", article: "die", translation: "formation of political blocs", category: "Völkerrecht & Diplomatie" },
  { word: "Neutralität", article: "die", translation: "neutrality", category: "Völkerrecht & Diplomatie" },
  { word: "Interessenvertretung", article: "die", translation: "lobbying/representation of interests", category: "Völkerrecht & Diplomatie" },
  { word: "Staatengemeinschaft", article: "die", translation: "community of nations", category: "Völkerrecht & Diplomatie" },

  // Verfassungsrecht
  { word: "Grundgesetz", article: "das", translation: "constitution (German basic law)", category: "Verfassungsrecht" },
  { word: "Grundrecht", article: "das", translation: "fundamental right", category: "Verfassungsrecht" },
  { word: "Verfassungsgericht", article: "das", translation: "constitutional court", category: "Verfassungsrecht" },
  { word: "Verfassungsänderung", article: "die", translation: "constitutional amendment", category: "Verfassungsrecht" },
  { word: "Rechtsstaatlichkeit", article: "die", translation: "rule of law", category: "Verfassungsrecht" },
  { word: "Gewaltmonopol", article: "das", translation: "state monopoly on the use of force", category: "Verfassungsrecht" },
  { word: "Meinungsäußerung", article: "die", translation: "expression of opinion", category: "Verfassungsrecht" },
  { word: "Versammlungsfreiheit", article: "die", translation: "freedom of assembly", category: "Verfassungsrecht" },
  { word: "Glaubensfreiheit", article: "die", translation: "freedom of religion", category: "Verfassungsrecht" },
  { word: "Gleichheitsgrundsatz", article: "der", translation: "principle of equality", category: "Verfassungsrecht" },
  { word: "Verhältnismäßigkeit", article: "die", translation: "proportionality (legal principle)", category: "Verfassungsrecht" },
  { word: "Notstand", article: "der", translation: "state of emergency", category: "Verfassungsrecht" },
  { word: "Amtsenthebung", article: "die", translation: "impeachment", category: "Verfassungsrecht" },
  { word: "Verfassungswidrigkeit", article: "die", translation: "unconstitutionality", category: "Verfassungsrecht" },
  { word: "Staatsoberhaupt", article: "das", translation: "head of state", category: "Verfassungsrecht" },

  // Strafrecht (vertieft)
  { word: "Strafmaß", article: "das", translation: "sentence/penalty severity", category: "Strafrecht (vertieft)" },
  { word: "Bewährungsstrafe", article: "die", translation: "suspended sentence", category: "Strafrecht (vertieft)" },
  { word: "Freiheitsstrafe", article: "die", translation: "prison sentence", category: "Strafrecht (vertieft)" },
  { word: "Geldstrafe", article: "die", translation: "fine (criminal penalty)", category: "Strafrecht (vertieft)" },
  { word: "Tatverdacht", article: "der", translation: "suspicion of a crime", category: "Strafrecht (vertieft)" },
  { word: "Tatbestand", article: "der", translation: "legal element of an offense", category: "Strafrecht (vertieft)" },
  { word: "Vorsatz", article: "der", translation: "criminal intent", category: "Strafrecht (vertieft)" },
  { word: "Fahrlässigkeit", article: "die", translation: "negligence", category: "Strafrecht (vertieft)" },
  { word: "Selbstverteidigung", article: "die", translation: "self-defense", category: "Strafrecht (vertieft)" },
  { word: "Strafverfolgung", article: "die", translation: "criminal prosecution", category: "Strafrecht (vertieft)" },
  { word: "Vernehmung", article: "die", translation: "interrogation", category: "Strafrecht (vertieft)" },
  { word: "Geständnis", article: "das", translation: "confession", category: "Strafrecht (vertieft)" },
  { word: "Berufungsverfahren", article: "das", translation: "appeals process", category: "Strafrecht (vertieft)" },
  { word: "Revision", article: "die", translation: "legal appeal (on points of law)", category: "Strafrecht (vertieft)" },
  { word: "Rehabilitierung", article: "die", translation: "rehabilitation (legal)", category: "Strafrecht (vertieft)" },

  // Zivilrecht
  { word: "Vertragsbruch", article: "der", translation: "breach of contract", category: "Zivilrecht" },
  { word: "Schadensersatz", article: "der", translation: "damages/compensation", category: "Zivilrecht" },
  { word: "Haftung", article: "die", translation: "liability", category: "Zivilrecht" },
  { word: "Eigentumsrecht", article: "das", translation: "property right", category: "Zivilrecht" },
  { word: "Erbrecht", article: "das", translation: "inheritance law", category: "Zivilrecht" },
  { word: "Sorgerecht", article: "das", translation: "custody (of children)", category: "Zivilrecht" },
  { word: "Unterhaltspflicht", article: "die", translation: "obligation to pay maintenance", category: "Zivilrecht" },
  { word: "Vollmacht", article: "die", translation: "power of attorney", category: "Zivilrecht" },
  { word: "Vertragsklausel", article: "die", translation: "contract clause", category: "Zivilrecht" },
  { word: "Kündigungsfrist", article: "die", translation: "notice period", category: "Zivilrecht" },
  { word: "Rechtsanspruch", article: "der", translation: "legal claim/entitlement", category: "Zivilrecht" },
  { word: "Rechtsstreit", article: "der", translation: "legal dispute", category: "Zivilrecht" },
  { word: "Vergleich", article: "der", translation: "settlement (legal)", category: "Zivilrecht" },
  { word: "Vollstreckung", article: "die", translation: "enforcement (of a judgment)", category: "Zivilrecht" },
  { word: "Zwangsräumung", article: "die", translation: "forced eviction", category: "Zivilrecht" },

  // Soziologie (vertieft)
  { word: "Sozialgefüge", article: "die", translation: "social fabric", category: "Soziologie (vertieft)" },
  { word: "Sozialschicht", article: "die", translation: "social class/stratum", category: "Soziologie (vertieft)" },
  { word: "Sozialmobilität", article: "die", translation: "social mobility", category: "Soziologie (vertieft)" },
  { word: "Gesellschaftswandel", article: "der", translation: "social change", category: "Soziologie (vertieft)" },
  { word: "Wertewandel", article: "der", translation: "shift in values", category: "Soziologie (vertieft)" },
  { word: "Rollenbild", article: "das", translation: "role model/image", category: "Soziologie (vertieft)" },
  { word: "Geschlechterrolle", article: "die", translation: "gender role", category: "Soziologie (vertieft)" },
  { word: "Milieu", article: "das", translation: "social milieu", category: "Soziologie (vertieft)" },
  { word: "Randgruppe", article: "die", translation: "marginalized group", category: "Soziologie (vertieft)" },
  { word: "Sozialkontrolle", article: "die", translation: "social control", category: "Soziologie (vertieft)" },
  { word: "Anomie", article: "die", translation: "anomie (breakdown of social norms)", category: "Soziologie (vertieft)" },
  { word: "Subkultur", article: "die", translation: "subculture", category: "Soziologie (vertieft)" },
  { word: "Konsumgesellschaft", article: "die", translation: "consumer society", category: "Soziologie (vertieft)" },
  { word: "Individualisierung", article: "die", translation: "individualization", category: "Soziologie (vertieft)" },
  { word: "Entsolidarisierung", article: "die", translation: "decline of solidarity", category: "Soziologie (vertieft)" },

  // Sozialpolitik
  { word: "Sozialleistung", article: "die", translation: "social benefit/welfare payment", category: "Sozialpolitik" },
  { word: "Grundsicherung", article: "die", translation: "basic income support", category: "Sozialpolitik" },
  { word: "Umverteilung", article: "die", translation: "redistribution", category: "Sozialpolitik" },
  { word: "Sozialstaat", article: "der", translation: "welfare state", category: "Sozialpolitik" },
  { word: "Existenzminimum", article: "das", translation: "subsistence minimum", category: "Sozialpolitik" },
  { word: "Wohlfahrt", article: "die", translation: "welfare", category: "Sozialpolitik" },
  { word: "Sozialausgabe", article: "die", translation: "social spending", category: "Sozialpolitik" },
  { word: "Bedürftigkeit", article: "die", translation: "neediness (financial)", category: "Sozialpolitik" },
  { word: "Verteilungsgerechtigkeit", article: "die", translation: "distributive justice", category: "Sozialpolitik" },
  { word: "Chancenungleichheit", article: "die", translation: "inequality of opportunity", category: "Sozialpolitik" },
  { word: "Sozialreform", article: "die", translation: "social reform", category: "Sozialpolitik" },
  { word: "Fürsorgepflicht", article: "die", translation: "duty of care", category: "Sozialpolitik" },
  { word: "Sozialabbau", article: "der", translation: "cuts to social welfare", category: "Sozialpolitik" },
  { word: "Armutsrisiko", article: "das", translation: "risk of poverty", category: "Sozialpolitik" },
  { word: "Grundeinkommen", article: "das", translation: "basic income", category: "Sozialpolitik" },

  // Migrationspolitik
  { word: "Zuwanderung", article: "die", translation: "immigration (inflow)", category: "Migrationspolitik" },
  { word: "Abschiebung", article: "die", translation: "deportation", category: "Migrationspolitik" },
  { word: "Asylverfahren", article: "das", translation: "asylum procedure", category: "Migrationspolitik" },
  { word: "Fluchtursache", article: "die", translation: "root cause of flight/migration", category: "Migrationspolitik" },
  { word: "Einbürgerung", article: "die", translation: "naturalization", category: "Migrationspolitik" },
  { word: "Aufnahmeland", article: "das", translation: "host country", category: "Migrationspolitik" },
  { word: "Herkunftsland", article: "das", translation: "country of origin", category: "Migrationspolitik" },
  { word: "Migrationshintergrund", article: "der", translation: "immigrant background", category: "Migrationspolitik" },
  { word: "Integrationspolitik", article: "die", translation: "integration policy", category: "Migrationspolitik" },
  { word: "Aufnahmequote", article: "die", translation: "admission quota", category: "Migrationspolitik" },
  { word: "Grenzkontrolle", article: "die", translation: "border control", category: "Migrationspolitik" },
  { word: "Fluchtroute", article: "die", translation: "migration route", category: "Migrationspolitik" },
  { word: "Asylantrag", article: "der", translation: "asylum application", category: "Migrationspolitik" },
  { word: "Abschiebehaft", article: "die", translation: "deportation detention", category: "Migrationspolitik" },
  { word: "Fachkräfteeinwanderung", article: "die", translation: "skilled-worker immigration", category: "Migrationspolitik" },

  // Sicherheitspolitik
  { word: "Bedrohungslage", article: "die", translation: "threat situation", category: "Sicherheitspolitik" },
  { word: "Terrorabwehr", article: "die", translation: "counterterrorism", category: "Sicherheitspolitik" },
  { word: "Geheimdienst", article: "der", translation: "intelligence agency", category: "Sicherheitspolitik" },
  { word: "Spionage", article: "die", translation: "espionage", category: "Sicherheitspolitik" },
  { word: "Rüstung", article: "die", translation: "armament", category: "Sicherheitspolitik" },
  { word: "Abrüstung", article: "die", translation: "disarmament", category: "Sicherheitspolitik" },
  { word: "Verteidigungsbündnis", article: "das", translation: "defense alliance", category: "Sicherheitspolitik" },
  { word: "Militäreinsatz", article: "der", translation: "military operation", category: "Sicherheitspolitik" },
  { word: "Grenzsicherung", article: "die", translation: "border security", category: "Sicherheitspolitik" },
  { word: "Krisenmanagement", article: "das", translation: "crisis management", category: "Sicherheitspolitik" },
  { word: "Katastrophenschutz", article: "der", translation: "disaster protection", category: "Sicherheitspolitik" },
  { word: "Zivilschutz", article: "der", translation: "civil defense", category: "Sicherheitspolitik" },
  { word: "Sicherheitsrisiko", article: "das", translation: "security risk", category: "Sicherheitspolitik" },
  { word: "Cyberabwehr", article: "die", translation: "cyber defense", category: "Sicherheitspolitik" },
  { word: "Sicherheitsbehörde", article: "die", translation: "security agency", category: "Sicherheitspolitik" },

  // Makroökonomie
  { word: "Gesamtwirtschaft", article: "die", translation: "overall economy", category: "Makroökonomie" },
  { word: "Wirtschaftswachstum", article: "das", translation: "economic growth", category: "Makroökonomie" },
  { word: "Bruttoinlandsprodukt", article: "das", translation: "gross domestic product", category: "Makroökonomie" },
  { word: "Konjunkturzyklus", article: "der", translation: "economic cycle", category: "Makroökonomie" },
  { word: "Wirtschaftskrise", article: "die", translation: "economic crisis", category: "Makroökonomie" },
  { word: "Staatsverschuldung", article: "die", translation: "national debt", category: "Makroökonomie" },
  { word: "Zinssatz", article: "der", translation: "interest rate", category: "Makroökonomie" },
  { word: "Geldpolitik", article: "die", translation: "monetary policy", category: "Makroökonomie" },
  { word: "Notenbank", article: "die", translation: "central bank", category: "Makroökonomie" },
  { word: "Kaufkraft", article: "die", translation: "purchasing power", category: "Makroökonomie" },
  { word: "Deflation", article: "die", translation: "deflation", category: "Makroökonomie" },
  { word: "Wechselkurspolitik", article: "die", translation: "exchange rate policy", category: "Makroökonomie" },
  { word: "Außenhandel", article: "der", translation: "foreign trade", category: "Makroökonomie" },
  { word: "Handelsbilanz", article: "die", translation: "trade balance", category: "Makroökonomie" },
  { word: "Wirtschaftsleistung", article: "die", translation: "economic output", category: "Makroökonomie" },

  // Mikroökonomie
  { word: "Angebotsmenge", article: "das", translation: "quantity supplied", category: "Mikroökonomie" },
  { word: "Nachfrage", article: "die", translation: "demand (economics)", category: "Mikroökonomie" },
  { word: "Marktgleichgewicht", article: "das", translation: "market equilibrium", category: "Mikroökonomie" },
  { word: "Preiselastizität", article: "die", translation: "price elasticity", category: "Mikroökonomie" },
  { word: "Grenzkosten", article: "die", translation: "marginal cost", category: "Mikroökonomie" },
  { word: "Skaleneffekt", article: "der", translation: "economy of scale", category: "Mikroökonomie" },
  { word: "Marktversagen", article: "das", translation: "market failure", category: "Mikroökonomie" },
  { word: "Externalität", article: "die", translation: "externality (economics)", category: "Mikroökonomie" },
  { word: "Wettbewerbsvorteil", article: "der", translation: "competitive advantage", category: "Mikroökonomie" },
  { word: "Marktzutritt", article: "der", translation: "market entry", category: "Mikroökonomie" },
  { word: "Preisbildung", article: "die", translation: "price formation", category: "Mikroökonomie" },
  { word: "Kostenstruktur", article: "die", translation: "cost structure", category: "Mikroökonomie" },
  { word: "Gewinnmarge", article: "die", translation: "profit margin", category: "Mikroökonomie" },
  { word: "Marktnische", article: "die", translation: "market niche", category: "Mikroökonomie" },
  { word: "Preisabsprache", article: "die", translation: "price collusion", category: "Mikroökonomie" },

  // Unternehmensführung
  { word: "Führungsstil", article: "der", translation: "leadership style", category: "Unternehmensführung" },
  { word: "Unternehmensstrategie", article: "die", translation: "corporate strategy", category: "Unternehmensführung" },
  { word: "Betriebsführung", article: "die", translation: "business management", category: "Unternehmensführung" },
  { word: "Entscheidungsbefugnis", article: "die", translation: "decision-making authority", category: "Unternehmensführung" },
  { word: "Zielsetzung", article: "die", translation: "goal-setting", category: "Unternehmensführung" },
  { word: "Unternehmenswert", article: "der", translation: "company value", category: "Unternehmensführung" },
  { word: "Restrukturierung", article: "die", translation: "restructuring", category: "Unternehmensführung" },
  { word: "Übernahme", article: "die", translation: "takeover/acquisition", category: "Unternehmensführung" },
  { word: "Aufsichtsrat", article: "der", translation: "supervisory board", category: "Unternehmensführung" },
  { word: "Hauptversammlung", article: "die", translation: "shareholders' meeting", category: "Unternehmensführung" },
  { word: "Geschäftsbericht", article: "der", translation: "annual report", category: "Unternehmensführung" },
  { word: "Unternehmensethik", article: "die", translation: "business ethics", category: "Unternehmensführung" },
  { word: "Wertschöpfung", article: "die", translation: "value creation", category: "Unternehmensführung" },
  { word: "Effizienzsteigerung", article: "die", translation: "efficiency increase", category: "Unternehmensführung" },
  { word: "Unternehmensrisiko", article: "das", translation: "business risk", category: "Unternehmensführung" },

  // Finanzmärkte
  { word: "Kapitalmarkt", article: "der", translation: "capital market", category: "Finanzmärkte" },
  { word: "Wertpapier", article: "das", translation: "security (financial)", category: "Finanzmärkte" },
  { word: "Anleihe", article: "die", translation: "bond", category: "Finanzmärkte" },
  { word: "Dividende", article: "die", translation: "dividend", category: "Finanzmärkte" },
  { word: "Kursschwankung", article: "die", translation: "price fluctuation (stock)", category: "Finanzmärkte" },
  { word: "Börsencrash", article: "der", translation: "stock market crash", category: "Finanzmärkte" },
  { word: "Anlagestrategie", article: "die", translation: "investment strategy", category: "Finanzmärkte" },
  { word: "Portfolio", article: "das", translation: "portfolio", category: "Finanzmärkte" },
  { word: "Risikostreuung", article: "die", translation: "risk diversification", category: "Finanzmärkte" },
  { word: "Fondsmanager", article: "der", translation: "fund manager", category: "Finanzmärkte" },
  { word: "Spekulationsblase", article: "die", translation: "speculative bubble", category: "Finanzmärkte" },
  { word: "Liquidität", article: "die", translation: "liquidity", category: "Finanzmärkte" },
  { word: "Kreditwürdigkeit", article: "die", translation: "creditworthiness", category: "Finanzmärkte" },
  { word: "Zahlungsunfähigkeit", article: "die", translation: "insolvency (inability to pay)", category: "Finanzmärkte" },
  { word: "Finanzaufsicht", article: "die", translation: "financial regulator", category: "Finanzmärkte" },

  // Medientheorie
  { word: "Massenmedium", article: "das", translation: "mass medium", category: "Medientheorie" },
  { word: "Medienwirkung", article: "die", translation: "media effect/influence", category: "Medientheorie" },
  { word: "Informationsflut", article: "die", translation: "flood of information", category: "Medientheorie" },
  { word: "Nachrichtenwert", article: "der", translation: "news value", category: "Medientheorie" },
  { word: "Boulevardpresse", article: "die", translation: "tabloid press", category: "Medientheorie" },
  { word: "Medienlandschaft", article: "die", translation: "media landscape", category: "Medientheorie" },
  { word: "Filterblase", article: "die", translation: "filter bubble", category: "Medientheorie" },
  { word: "Echokammer", article: "die", translation: "echo chamber", category: "Medientheorie" },
  { word: "Reichweite", article: "die", translation: "reach (media)", category: "Medientheorie" },
  { word: "Medienkonsum", article: "der", translation: "media consumption", category: "Medientheorie" },
  { word: "Berichterstattungspflicht", article: "die", translation: "duty to report", category: "Medientheorie" },
  { word: "Quotendruck", article: "der", translation: "ratings pressure", category: "Medientheorie" },
  { word: "Skandalisierung", article: "die", translation: "sensationalizing (of a story)", category: "Medientheorie" },
  { word: "Medienethik", article: "die", translation: "media ethics", category: "Medientheorie" },
  { word: "Gegendarstellung", article: "die", translation: "right of reply/correction", category: "Medientheorie" },

  // Öffentlichkeitsarbeit
  { word: "Pressemitteilung", article: "die", translation: "press release", category: "Öffentlichkeitsarbeit" },
  { word: "Pressesprecher", article: "der", translation: "press spokesperson", category: "Öffentlichkeitsarbeit" },
  { word: "Imagepflege", article: "die", translation: "image cultivation", category: "Öffentlichkeitsarbeit" },
  { word: "Öffentlichkeitsarbeit", article: "die", translation: "public relations", category: "Öffentlichkeitsarbeit" },
  { word: "Krisenkommunikation", article: "die", translation: "crisis communication", category: "Öffentlichkeitsarbeit" },
  { word: "Reputationsschaden", article: "der", translation: "reputational damage", category: "Öffentlichkeitsarbeit" },
  { word: "Markenbotschafter", article: "der", translation: "brand ambassador", category: "Öffentlichkeitsarbeit" },
  { word: "Zielgruppenanalyse", article: "die", translation: "target audience analysis", category: "Öffentlichkeitsarbeit" },
  { word: "Kernbotschaft", article: "die", translation: "core message", category: "Öffentlichkeitsarbeit" },
  { word: "Außendarstellung", article: "die", translation: "public image/presentation", category: "Öffentlichkeitsarbeit" },
  { word: "Medienauftritt", article: "der", translation: "media appearance", category: "Öffentlichkeitsarbeit" },
  { word: "Positionierung", article: "die", translation: "positioning (strategic)", category: "Öffentlichkeitsarbeit" },
  { word: "Glaubwürdigkeit", article: "die", translation: "credibility", category: "Öffentlichkeitsarbeit" },
  { word: "Vertrauensverlust", article: "der", translation: "loss of trust", category: "Öffentlichkeitsarbeit" },
  { word: "Imagekampagne", article: "die", translation: "image campaign", category: "Öffentlichkeitsarbeit" },

  // Argumentationstechnik
  { word: "Streitpunkt", article: "der", translation: "point of contention", category: "Argumentationstechnik" },
  { word: "Beweisführung", article: "die", translation: "line of argument/reasoning", category: "Argumentationstechnik" },
  { word: "Gegenbeispiel", article: "das", translation: "counterexample", category: "Argumentationstechnik" },
  { word: "Trugschluss", article: "der", translation: "fallacy", category: "Argumentationstechnik" },
  { word: "Scheinargument", article: "das", translation: "specious argument", category: "Argumentationstechnik" },
  { word: "Denkfalle", article: "die", translation: "thinking trap", category: "Argumentationstechnik" },
  { word: "Verallgemeinerungsfehler", article: "der", translation: "overgeneralization error", category: "Argumentationstechnik" },
  { word: "Gegenposition", article: "die", translation: "opposing position", category: "Argumentationstechnik" },
  { word: "Argumentationskette", article: "die", translation: "chain of reasoning", category: "Argumentationstechnik" },
  { word: "Schlagfertigkeit", article: "die", translation: "quick-wittedness (in debate)", category: "Argumentationstechnik" },
  { word: "Überzeugungsarbeit", article: "die", translation: "work of persuasion", category: "Argumentationstechnik" },
  { word: "Diskussionsgrundlage", article: "die", translation: "basis for discussion", category: "Argumentationstechnik" },
  { word: "Streitkultur", article: "die", translation: "culture of debate", category: "Argumentationstechnik" },
  { word: "Wortgefecht", article: "das", translation: "war of words", category: "Argumentationstechnik" },
  { word: "Redegewandtheit", article: "die", translation: "eloquence", category: "Argumentationstechnik" },

  // Textanalyse
  { word: "Textsorte", article: "die", translation: "text type/genre", category: "Textanalyse" },
  { word: "Textaufbau", article: "der", translation: "text structure", category: "Textanalyse" },
  { word: "Kernaussage", article: "die", translation: "main statement/thesis", category: "Textanalyse" },
  { word: "Zeilenzahl", article: "die", translation: "line number", category: "Textanalyse" },
  { word: "Sprachebene", article: "die", translation: "register (language level)", category: "Textanalyse" },
  { word: "Stilmittel", article: "das", translation: "stylistic device", category: "Textanalyse" },
  { word: "Textinterpretation", article: "die", translation: "text interpretation", category: "Textanalyse" },
  { word: "Aussageabsicht", article: "die", translation: "communicative intent", category: "Textanalyse" },
  { word: "Formulierung", article: "die", translation: "phrasing/wording", category: "Textanalyse" },
  { word: "Textzusammenhang", article: "der", translation: "context of a text", category: "Textanalyse" },
  { word: "Nebensatz", article: "der", translation: "subordinate clause", category: "Textanalyse" },
  { word: "Satzgefüge", article: "das", translation: "complex sentence structure", category: "Textanalyse" },
  { word: "Textkohärenz", article: "die", translation: "text coherence", category: "Textanalyse" },
  { word: "Sprachregister", article: "das", translation: "language register", category: "Textanalyse" },
  { word: "Zwischenzeile", article: "die", translation: "the lines between (subtext)", category: "Textanalyse" },

  // Kommunikationswissenschaft
  { word: "Sender-Empfänger-Modell", article: "das", translation: "sender-receiver model", category: "Kommunikationswissenschaft" },
  { word: "Kommunikationsstörung", article: "die", translation: "communication breakdown", category: "Kommunikationswissenschaft" },
  { word: "Körpersprache", article: "die", translation: "body language", category: "Kommunikationswissenschaft" },
  { word: "Tonfall", article: "der", translation: "tone of voice", category: "Kommunikationswissenschaft" },
  { word: "Zwischenton", article: "der", translation: "undertone/nuance", category: "Kommunikationswissenschaft" },
  { word: "Kommunikationskanal", article: "der", translation: "communication channel", category: "Kommunikationswissenschaft" },
  { word: "Feedbackkultur", article: "die", translation: "feedback culture", category: "Kommunikationswissenschaft" },
  { word: "Gesprächsführung", article: "die", translation: "conversation management", category: "Kommunikationswissenschaft" },
  { word: "Zuhörfähigkeit", article: "die", translation: "listening ability", category: "Kommunikationswissenschaft" },
  { word: "Missverständlichkeit", article: "die", translation: "ambiguity/proneness to misunderstanding", category: "Kommunikationswissenschaft" },
  { word: "Ausdrucksform", article: "die", translation: "form of expression", category: "Kommunikationswissenschaft" },
  { word: "Gesprächsklima", article: "das", translation: "conversational atmosphere", category: "Kommunikationswissenschaft" },
  { word: "Mimik", article: "die", translation: "facial expression", category: "Kommunikationswissenschaft" },
  { word: "Kommunikationsbarriere", article: "die", translation: "communication barrier", category: "Kommunikationswissenschaft" },
  { word: "Empfängerhorizont", article: "der", translation: "the receiver's frame of reference", category: "Kommunikationswissenschaft" },

  // Künstliche Intelligenz
  { word: "Chatbot", article: "der", translation: "chatbot", category: "Künstliche Intelligenz" },
  { word: "Mustererkennung", article: "die", translation: "pattern recognition", category: "Künstliche Intelligenz" },
  { word: "Datenmodell", article: "das", translation: "data model", category: "Künstliche Intelligenz" },
  { word: "Trainingsdaten", article: "die", translation: "training data", category: "Künstliche Intelligenz" },
  { word: "Spracherkennung", article: "die", translation: "speech recognition", category: "Künstliche Intelligenz" },
  { word: "Bilderkennung", article: "die", translation: "image recognition", category: "Künstliche Intelligenz" },
  { word: "Automatisierungspotenzial", article: "das", translation: "automation potential", category: "Künstliche Intelligenz" },
  { word: "Entscheidungsautomatisierung", article: "die", translation: "automated decision-making", category: "Künstliche Intelligenz" },
  { word: "Rechenleistung", article: "die", translation: "computing power", category: "Künstliche Intelligenz" },
  { word: "Systemfehler", article: "der", translation: "system error", category: "Künstliche Intelligenz" },
  { word: "Programmierfehler", article: "der", translation: "programming bug", category: "Künstliche Intelligenz" },
  { word: "KI-Ethik", article: "die", translation: "AI ethics", category: "Künstliche Intelligenz" },
  { word: "Blackbox", article: "die", translation: "black box (AI opacity)", category: "Künstliche Intelligenz" },
  { word: "Simulationsmodell", article: "das", translation: "simulation model", category: "Künstliche Intelligenz" },
  { word: "Mensch-Maschine-Interaktion", article: "die", translation: "human-machine interaction", category: "Künstliche Intelligenz" },

  // Digitale Transformation
  { word: "Digitalisierungsgrad", article: "der", translation: "degree of digitalization", category: "Digitale Transformation" },
  { word: "Geschäftsmodell", article: "das", translation: "business model", category: "Digitale Transformation" },
  { word: "Plattformökonomie", article: "die", translation: "platform economy", category: "Digitale Transformation" },
  { word: "Digitalstrategie", article: "die", translation: "digital strategy", category: "Digitale Transformation" },
  { word: "Cloud-Speicher", article: "der", translation: "cloud storage", category: "Digitale Transformation" },
  { word: "Vernetzung", article: "die", translation: "networking/interconnection", category: "Digitale Transformation" },
  { word: "Digitalkompetenz", article: "die", translation: "digital literacy", category: "Digitale Transformation" },
  { word: "Automatisierungsgrad", article: "der", translation: "degree of automation", category: "Digitale Transformation" },
  { word: "Prozessdigitalisierung", article: "die", translation: "process digitalization", category: "Digitale Transformation" },
  { word: "Innovationstempo", article: "das", translation: "pace of innovation", category: "Digitale Transformation" },
  { word: "Digitalkluft", article: "die", translation: "digital divide", category: "Digitale Transformation" },
  { word: "Datenmigration", article: "die", translation: "data migration", category: "Digitale Transformation" },
  { word: "Systemumstellung", article: "die", translation: "system changeover", category: "Digitale Transformation" },
  { word: "Vernetzungsgrad", article: "der", translation: "degree of connectivity", category: "Digitale Transformation" },
  { word: "Plattformanbieter", article: "der", translation: "platform provider", category: "Digitale Transformation" },

  // IT-Sicherheit (vertieft)
  { word: "Verschlüsselungstechnik", article: "die", translation: "encryption technology", category: "IT-Sicherheit (vertieft)" },
  { word: "Zugriffsrecht", article: "das", translation: "access right/permission", category: "IT-Sicherheit (vertieft)" },
  { word: "Schadsoftware", article: "die", translation: "malware", category: "IT-Sicherheit (vertieft)" },
  { word: "Phishing-Angriff", article: "der", translation: "phishing attack", category: "IT-Sicherheit (vertieft)" },
  { word: "Sicherheitsprotokoll", article: "das", translation: "security protocol", category: "IT-Sicherheit (vertieft)" },
  { word: "Systemschwachstelle", article: "die", translation: "system vulnerability", category: "IT-Sicherheit (vertieft)" },
  { word: "Zwei-Faktor-Authentifizierung", article: "die", translation: "two-factor authentication", category: "IT-Sicherheit (vertieft)" },
  { word: "Datenverschlüsselung", article: "die", translation: "data encryption", category: "IT-Sicherheit (vertieft)" },
  { word: "Sicherheitsupdate", article: "das", translation: "security update", category: "IT-Sicherheit (vertieft)" },
  { word: "Angriffsfläche", article: "die", translation: "attack surface", category: "IT-Sicherheit (vertieft)" },
  { word: "Notfallplan", article: "der", translation: "emergency plan", category: "IT-Sicherheit (vertieft)" },
  { word: "Systemausfall", article: "der", translation: "system outage", category: "IT-Sicherheit (vertieft)" },
  { word: "Backup-Strategie", article: "die", translation: "backup strategy", category: "IT-Sicherheit (vertieft)" },
  { word: "Erpressungssoftware", article: "die", translation: "ransomware", category: "IT-Sicherheit (vertieft)" },
  { word: "Sicherheitsvorfall", article: "der", translation: "security incident", category: "IT-Sicherheit (vertieft)" },

  // Softwareentwicklung
  { word: "Quellcode", article: "der", translation: "source code", category: "Softwareentwicklung" },
  { word: "Programmiersprache", article: "die", translation: "programming language", category: "Softwareentwicklung" },
  { word: "Softwarearchitektur", article: "die", translation: "software architecture", category: "Softwareentwicklung" },
  { word: "Programmfehler", article: "der", translation: "software bug", category: "Softwareentwicklung" },
  { word: "Testphase", article: "die", translation: "testing phase", category: "Softwareentwicklung" },
  { word: "Versionsverwaltung", article: "die", translation: "version control", category: "Softwareentwicklung" },
  { word: "Benutzeroberfläche", article: "die", translation: "user interface", category: "Softwareentwicklung" },
  { word: "Anwendungsprogramm", article: "das", translation: "application program", category: "Softwareentwicklung" },
  { word: "Softwarelizenz", article: "die", translation: "software license", category: "Softwareentwicklung" },
  { word: "Programmierteam", article: "das", translation: "development team", category: "Softwareentwicklung" },
  { word: "Entwicklungsumgebung", article: "die", translation: "development environment", category: "Softwareentwicklung" },
  { word: "Fehlerbehebung", article: "die", translation: "bug fixing", category: "Softwareentwicklung" },
  { word: "Softwareupdate", article: "das", translation: "software update", category: "Softwareentwicklung" },
  { word: "Schnittstellendokumentation", article: "die", translation: "interface documentation", category: "Softwareentwicklung" },
  { word: "Programmierrichtlinie", article: "die", translation: "coding guideline", category: "Softwareentwicklung" },

  // Robotik
  { word: "Industrieroboter", article: "der", translation: "industrial robot", category: "Robotik" },
  { word: "Robotersteuerung", article: "die", translation: "robot control system", category: "Robotik" },
  { word: "Greifarm", article: "der", translation: "robotic arm", category: "Robotik" },
  { word: "Sensorik", article: "die", translation: "sensor technology", category: "Robotik" },
  { word: "Fertigungsstraße", article: "die", translation: "production line", category: "Robotik" },
  { word: "Robotertechnik", article: "die", translation: "robotics", category: "Robotik" },
  { word: "Fahrerassistenzsystem", article: "das", translation: "driver assistance system", category: "Robotik" },
  { word: "Servomotor", article: "der", translation: "servo motor", category: "Robotik" },
  { word: "Steuerungseinheit", article: "die", translation: "control unit", category: "Robotik" },
  { word: "Bewegungsablauf", article: "der", translation: "sequence of movement", category: "Robotik" },
  { word: "Robotereinsatz", article: "der", translation: "robot deployment", category: "Robotik" },
  { word: "Präzisionsarbeit", article: "die", translation: "precision work", category: "Robotik" },
  { word: "Maschinensteuerung", article: "die", translation: "machine control", category: "Robotik" },
  { word: "Fertigungsprozess", article: "der", translation: "manufacturing process", category: "Robotik" },
  { word: "Robotereinheit", article: "die", translation: "robot unit", category: "Robotik" },

  // Literaturwissenschaft
  { word: "Erzähltempo", article: "das", translation: "narrative pace", category: "Literaturwissenschaft" },
  { word: "Erzählperspektive", article: "die", translation: "narrative perspective", category: "Literaturwissenschaft" },
  { word: "Ich-Erzähler", article: "der", translation: "first-person narrator", category: "Literaturwissenschaft" },
  { word: "Rahmenhandlung", article: "die", translation: "frame story", category: "Literaturwissenschaft" },
  { word: "Peripetie", article: "die", translation: "dramatic turning point", category: "Literaturwissenschaft" },
  { word: "Spannungsbogen", article: "der", translation: "narrative arc/tension", category: "Literaturwissenschaft" },
  { word: "Charakterentwicklung", article: "die", translation: "character development", category: "Literaturwissenschaft" },
  { word: "Motivwahl", article: "die", translation: "choice of motif", category: "Literaturwissenschaft" },
  { word: "Textgattung", article: "die", translation: "literary genre", category: "Literaturwissenschaft" },
  { word: "Werkinterpretation", article: "die", translation: "interpretation of a work", category: "Literaturwissenschaft" },
  { word: "Literaturkritik", article: "die", translation: "literary criticism", category: "Literaturwissenschaft" },
  { word: "Leserlenkung", article: "die", translation: "guiding the reader", category: "Literaturwissenschaft" },
  { word: "Erzählstimme", article: "die", translation: "narrative voice", category: "Literaturwissenschaft" },
  { word: "Symbolgehalt", article: "der", translation: "symbolic content", category: "Literaturwissenschaft" },
  { word: "Deutungsansatz", article: "der", translation: "interpretive approach", category: "Literaturwissenschaft" },

  // Filmwissenschaft
  { word: "Kameraeinstellung", article: "die", translation: "camera shot/framing", category: "Filmwissenschaft" },
  { word: "Schnitttechnik", article: "die", translation: "editing technique", category: "Filmwissenschaft" },
  { word: "Filmmusik", article: "die", translation: "film score", category: "Filmwissenschaft" },
  { word: "Drehort", article: "der", translation: "filming location", category: "Filmwissenschaft" },
  { word: "Filmgenre", article: "das", translation: "film genre", category: "Filmwissenschaft" },
  { word: "Erzählstruktur", article: "die", translation: "narrative structure", category: "Filmwissenschaft" },
  { word: "Filminterpretation", article: "die", translation: "film interpretation", category: "Filmwissenschaft" },
  { word: "Bildkomposition", article: "die", translation: "visual composition", category: "Filmwissenschaft" },
  { word: "Spezialeffekt", article: "der", translation: "special effect", category: "Filmwissenschaft" },
  { word: "Filmkritiker", article: "der", translation: "film critic", category: "Filmwissenschaft" },
  { word: "Produktionsfirma", article: "die", translation: "production company", category: "Filmwissenschaft" },
  { word: "Drehbuchautor", article: "der", translation: "screenwriter", category: "Filmwissenschaft" },
  { word: "Filmfassung", article: "die", translation: "cut/version of a film", category: "Filmwissenschaft" },
  { word: "Nachbearbeitung", article: "die", translation: "post-production", category: "Filmwissenschaft" },
  { word: "Publikumserfolg", article: "der", translation: "box-office success", category: "Filmwissenschaft" },

  // Kunsttheorie
  { word: "Kunstrichtung", article: "die", translation: "artistic movement", category: "Kunsttheorie" },
  { word: "Bildsprache", article: "die", translation: "visual language", category: "Kunsttheorie" },
  { word: "Kunstwerk", article: "das", translation: "work of art", category: "Kunsttheorie" },
  { word: "Kunstgattung", article: "die", translation: "art form/category", category: "Kunsttheorie" },
  { word: "Formsprache", article: "die", translation: "formal language (art)", category: "Kunsttheorie" },
  { word: "Kunstgeschmack", article: "der", translation: "artistic taste", category: "Kunsttheorie" },
  { word: "Werkschau", article: "die", translation: "retrospective exhibition", category: "Kunsttheorie" },
  { word: "Kunstbewegung", article: "die", translation: "art movement", category: "Kunsttheorie" },
  { word: "Farbgebung", article: "die", translation: "coloring/color scheme", category: "Kunsttheorie" },
  { word: "Bildaussage", article: "die", translation: "visual statement/message", category: "Kunsttheorie" },
  { word: "Kunstauffassung", article: "die", translation: "conception of art", category: "Kunsttheorie" },
  { word: "Kunstmarkt", article: "der", translation: "art market", category: "Kunsttheorie" },
  { word: "Fälschung", article: "die", translation: "forgery", category: "Kunsttheorie" },
  { word: "Provenienz", article: "die", translation: "provenance", category: "Kunsttheorie" },
  { word: "Kunstsammlung", article: "die", translation: "art collection", category: "Kunsttheorie" },

  // Ästhetik
  { word: "Schönheitsideal", article: "das", translation: "ideal of beauty", category: "Ästhetik" },
  { word: "Geschmacksfrage", article: "die", translation: "matter of taste", category: "Ästhetik" },
  { word: "Formvollendung", article: "die", translation: "formal perfection", category: "Ästhetik" },
  { word: "Ebenmaß", article: "das", translation: "symmetry/proportion", category: "Ästhetik" },
  { word: "Stilempfinden", article: "das", translation: "sense of style", category: "Ästhetik" },
  { word: "Schönheitsempfinden", article: "das", translation: "sense of beauty", category: "Ästhetik" },
  { word: "Harmonie", article: "die", translation: "harmony", category: "Ästhetik" },
  { word: "Ästhetikbewusstsein", article: "das", translation: "aesthetic awareness", category: "Ästhetik" },
  { word: "Kitsch", article: "der", translation: "kitsch", category: "Ästhetik" },
  { word: "Eleganz", article: "die", translation: "elegance", category: "Ästhetik" },
  { word: "Erscheinungsbild", article: "das", translation: "outward appearance", category: "Ästhetik" },
  { word: "Formgebung", article: "die", translation: "shaping/design", category: "Ästhetik" },
  { word: "Stilbewusstsein", article: "das", translation: "style-consciousness", category: "Ästhetik" },
  { word: "Anmut", article: "die", translation: "grace", category: "Ästhetik" },
  { word: "Wirkungsästhetik", article: "die", translation: "aesthetics of effect", category: "Ästhetik" },

  // Kulturkritik
  { word: "Kulturpessimismus", article: "der", translation: "cultural pessimism", category: "Kulturkritik" },
  { word: "Konsumkritik", article: "die", translation: "critique of consumerism", category: "Kulturkritik" },
  { word: "Zeitgeistkritik", article: "die", translation: "critique of the zeitgeist", category: "Kulturkritik" },
  { word: "Kulturverfall", article: "der", translation: "cultural decline", category: "Kulturkritik" },
  { word: "Oberflächlichkeit", article: "die", translation: "superficiality", category: "Kulturkritik" },
  { word: "Kulturimperialismus", article: "der", translation: "cultural imperialism", category: "Kulturkritik" },
  { word: "Massengeschmack", article: "der", translation: "mass taste", category: "Kulturkritik" },
  { word: "Kommerzialisierung", article: "die", translation: "commercialization", category: "Kulturkritik" },
  { word: "Kulturverlust", article: "der", translation: "cultural loss", category: "Kulturkritik" },
  { word: "Traditionsverlust", article: "der", translation: "loss of tradition", category: "Kulturkritik" },
  { word: "Wertezerfall", article: "der", translation: "erosion of values", category: "Kulturkritik" },
  { word: "Konformitätsdruck", article: "der", translation: "pressure to conform", category: "Kulturkritik" },
  { word: "Kulturkonflikt", article: "der", translation: "culture clash", category: "Kulturkritik" },
  { word: "Nivellierung", article: "die", translation: "leveling/homogenization", category: "Kulturkritik" },
  { word: "Kulturverständnis", article: "das", translation: "understanding of culture", category: "Kulturkritik" },

  // Klinische Medizin
  { word: "Krankheitsbild", article: "das", translation: "clinical picture", category: "Klinische Medizin" },
  { word: "Diagnoseverfahren", article: "das", translation: "diagnostic procedure", category: "Klinische Medizin" },
  { word: "Behandlungsmethode", article: "die", translation: "treatment method", category: "Klinische Medizin" },
  { word: "Fehldiagnose", article: "die", translation: "misdiagnosis", category: "Klinische Medizin" },
  { word: "Krankheitsverlauf", article: "der", translation: "course of an illness", category: "Klinische Medizin" },
  { word: "Chronifizierung", article: "die", translation: "becoming chronic", category: "Klinische Medizin" },
  { word: "Akutbehandlung", article: "die", translation: "acute treatment", category: "Klinische Medizin" },
  { word: "Facharztbehandlung", article: "die", translation: "specialist treatment", category: "Klinische Medizin" },
  { word: "Aufnahmestation", article: "die", translation: "admissions ward", category: "Klinische Medizin" },
  { word: "Krankenakte", article: "die", translation: "medical record", category: "Klinische Medizin" },
  { word: "Rehabilitationsmaßnahme", article: "die", translation: "rehabilitation measure", category: "Klinische Medizin" },
  { word: "Vorsorgeuntersuchung", article: "die", translation: "preventive checkup", category: "Klinische Medizin" },
  { word: "Krankheitsbewältigung", article: "die", translation: "coping with illness", category: "Klinische Medizin" },
  { word: "Patientenverfügung", article: "die", translation: "living will", category: "Klinische Medizin" },
  { word: "Zweitmeinung", article: "die", translation: "second opinion", category: "Klinische Medizin" },

  // Pharmakologie
  { word: "Arzneimittelforschung", article: "die", translation: "pharmaceutical research", category: "Pharmakologie" },
  { word: "Wirkmechanismus", article: "der", translation: "mechanism of action", category: "Pharmakologie" },
  { word: "Arzneimittelwechselwirkung", article: "die", translation: "drug interaction", category: "Pharmakologie" },
  { word: "Beipackzettel", article: "der", translation: "package insert", category: "Pharmakologie" },
  { word: "Generikum", article: "das", translation: "generic drug", category: "Pharmakologie" },
  { word: "Rezeptpflicht", article: "die", translation: "prescription requirement", category: "Pharmakologie" },
  { word: "Wirkstoffkonzentration", article: "die", translation: "active-ingredient concentration", category: "Pharmakologie" },
  { word: "Arzneimittelsicherheit", article: "die", translation: "drug safety", category: "Pharmakologie" },
  { word: "Medikamentenabhängigkeit", article: "die", translation: "drug dependency", category: "Pharmakologie" },
  { word: "Überdosierung", article: "die", translation: "overdose", category: "Pharmakologie" },
  { word: "Wirkungseintritt", article: "der", translation: "onset of effect", category: "Pharmakologie" },
  { word: "Arzneimittelzulassung", article: "die", translation: "drug approval", category: "Pharmakologie" },
  { word: "Impfschutz", article: "der", translation: "vaccination protection", category: "Pharmakologie" },
  { word: "Resistenzbildung", article: "die", translation: "development of resistance", category: "Pharmakologie" },
  { word: "Medikamentenmissbrauch", article: "der", translation: "drug abuse", category: "Pharmakologie" },

  // Public Health
  { word: "Volksgesundheit", article: "die", translation: "public health", category: "Public Health" },
  { word: "Krankheitsprävention", article: "die", translation: "disease prevention", category: "Public Health" },
  { word: "Impfquote", article: "die", translation: "vaccination rate", category: "Public Health" },
  { word: "Seuchenschutz", article: "der", translation: "epidemic control", category: "Public Health" },
  { word: "Ausbruchsgeschehen", article: "das", translation: "outbreak event", category: "Public Health" },
  { word: "Ansteckungsgefahr", article: "die", translation: "risk of infection", category: "Public Health" },
  { word: "Herdenimmunität", article: "die", translation: "herd immunity", category: "Public Health" },
  { word: "Gesundheitsvorsorge", article: "die", translation: "preventive healthcare", category: "Public Health" },
  { word: "Krankheitslast", article: "die", translation: "disease burden", category: "Public Health" },
  { word: "Gesundheitsaufklärung", article: "die", translation: "health education", category: "Public Health" },
  { word: "Versorgungslücke", article: "die", translation: "gap in healthcare provision", category: "Public Health" },
  { word: "Hygienemaßnahme", article: "die", translation: "hygiene measure", category: "Public Health" },
  { word: "Gesundheitsrisiko", article: "das", translation: "health risk", category: "Public Health" },
  { word: "Übertragungsweg", article: "der", translation: "route of transmission", category: "Public Health" },
  { word: "Ausbreitungsgeschwindigkeit", article: "die", translation: "rate of spread", category: "Public Health" },

  // Ernährungswissenschaft (vertieft)
  { word: "Nährstoffmangel", article: "der", translation: "nutrient deficiency", category: "Ernährungswissenschaft (vertieft)" },
  { word: "Ballaststoffgehalt", article: "der", translation: "fiber content", category: "Ernährungswissenschaft (vertieft)" },
  { word: "Nahrungsmittelunverträglichkeit", article: "die", translation: "food intolerance", category: "Ernährungswissenschaft (vertieft)" },
  { word: "Ernährungsgewohnheit", article: "die", translation: "eating habit", category: "Ernährungswissenschaft (vertieft)" },
  { word: "Kalorienbedarf", article: "der", translation: "calorie requirement", category: "Ernährungswissenschaft (vertieft)" },
  { word: "Nährwertangabe", article: "die", translation: "nutritional information", category: "Ernährungswissenschaft (vertieft)" },
  { word: "Fehlernährung", article: "die", translation: "poor nutrition", category: "Ernährungswissenschaft (vertieft)" },
  { word: "Essstörung", article: "die", translation: "eating disorder", category: "Ernährungswissenschaft (vertieft)" },
  { word: "Ernährungsberatung", article: "die", translation: "nutritional counseling", category: "Ernährungswissenschaft (vertieft)" },
  { word: "Lebensmittelzusatzstoff", article: "der", translation: "food additive", category: "Ernährungswissenschaft (vertieft)" },
  { word: "Nahrungsergänzung", article: "die", translation: "dietary supplementation", category: "Ernährungswissenschaft (vertieft)" },
  { word: "Stoffwechselstörung", article: "die", translation: "metabolic disorder", category: "Ernährungswissenschaft (vertieft)" },
  { word: "Ernährungsumstellung", article: "die", translation: "dietary change", category: "Ernährungswissenschaft (vertieft)" },
  { word: "Sättigungsgefühl", article: "das", translation: "feeling of fullness", category: "Ernährungswissenschaft (vertieft)" },
  { word: "Lebensmittelkennzeichnung", article: "die", translation: "food labeling", category: "Ernährungswissenschaft (vertieft)" },

  // Klimapolitik
  { word: "Emissionsgrenzwert", article: "der", translation: "emission limit", category: "Klimapolitik" },
  { word: "Klimaziel", article: "das", translation: "climate target", category: "Klimapolitik" },
  { word: "CO2-Bepreisung", article: "die", translation: "carbon pricing", category: "Klimapolitik" },
  { word: "Klimaabkommen", article: "das", translation: "climate agreement", category: "Klimapolitik" },
  { word: "Emissionsminderung", article: "die", translation: "emissions reduction", category: "Klimapolitik" },
  { word: "Kohleausstieg", article: "der", translation: "coal phase-out", category: "Klimapolitik" },
  { word: "Klimaneutralität", article: "die", translation: "climate neutrality", category: "Klimapolitik" },
  { word: "Treibhausgas", article: "das", translation: "greenhouse gas", category: "Klimapolitik" },
  { word: "Klimafolgenabschätzung", article: "die", translation: "climate impact assessment", category: "Klimapolitik" },
  { word: "Anpassungsstrategie", article: "die", translation: "adaptation strategy", category: "Klimapolitik" },
  { word: "Klimagerechtigkeit", article: "die", translation: "climate justice", category: "Klimapolitik" },
  { word: "Emissionshandelssystem", article: "das", translation: "emissions trading system", category: "Klimapolitik" },
  { word: "Erderhitzung", article: "die", translation: "global heating", category: "Klimapolitik" },
  { word: "Kipppunkt", article: "der", translation: "tipping point (climate)", category: "Klimapolitik" },
  { word: "Klimabilanz", article: "die", translation: "carbon footprint balance", category: "Klimapolitik" },

  // Umweltökonomie
  { word: "Umweltkosten", article: "die", translation: "environmental costs", category: "Umweltökonomie" },
  { word: "Ressourcenverbrauch", article: "der", translation: "resource consumption", category: "Umweltökonomie" },
  { word: "Umweltabgabe", article: "die", translation: "environmental levy", category: "Umweltökonomie" },
  { word: "Ökobilanz", article: "die", translation: "life-cycle environmental assessment", category: "Umweltökonomie" },
  { word: "Nachhaltigkeitsziel", article: "das", translation: "sustainability goal", category: "Umweltökonomie" },
  { word: "Ressourcenschonung", article: "die", translation: "resource conservation", category: "Umweltökonomie" },
  { word: "Umweltverträglichkeit", article: "die", translation: "environmental compatibility", category: "Umweltökonomie" },
  { word: "Ressourceneffizienz", article: "die", translation: "resource efficiency", category: "Umweltökonomie" },
  { word: "Umweltauflage", article: "die", translation: "environmental regulation/requirement", category: "Umweltökonomie" },
  { word: "Umweltbilanz", article: "die", translation: "environmental balance sheet", category: "Umweltökonomie" },
  { word: "Grüninvestition", article: "die", translation: "green investment", category: "Umweltökonomie" },
  { word: "Umweltverschmutzer", article: "der", translation: "polluter", category: "Umweltökonomie" },
  { word: "Subventionsabbau", article: "der", translation: "phasing out of subsidies", category: "Umweltökonomie" },
  { word: "Umweltstandard", article: "der", translation: "environmental standard", category: "Umweltökonomie" },
  { word: "Ökosteuer", article: "die", translation: "eco tax", category: "Umweltökonomie" },

  // Kreislaufwirtschaft
  { word: "Wiederverwertung", article: "die", translation: "recycling/reuse", category: "Kreislaufwirtschaft" },
  { word: "Rohstoffkreislauf", article: "der", translation: "resource cycle", category: "Kreislaufwirtschaft" },
  { word: "Wegwerfgesellschaft", article: "die", translation: "throwaway society", category: "Kreislaufwirtschaft" },
  { word: "Reparaturfähigkeit", article: "die", translation: "repairability", category: "Kreislaufwirtschaft" },
  { word: "Produktlebenszyklus", article: "der", translation: "product life cycle", category: "Kreislaufwirtschaft" },
  { word: "Materialeffizienz", article: "die", translation: "material efficiency", category: "Kreislaufwirtschaft" },
  { word: "Wiederverwendbarkeit", article: "die", translation: "reusability", category: "Kreislaufwirtschaft" },
  { word: "Recyclingquote", article: "die", translation: "recycling rate", category: "Kreislaufwirtschaft" },
  { word: "Abfallvermeidung", article: "die", translation: "waste avoidance", category: "Kreislaufwirtschaft" },
  { word: "Sekundärrohstoff", article: "der", translation: "secondary raw material", category: "Kreislaufwirtschaft" },
  { word: "Obsoleszenz", article: "die", translation: "planned obsolescence", category: "Kreislaufwirtschaft" },
  { word: "Kreislaufmodell", article: "das", translation: "circular economy model", category: "Kreislaufwirtschaft" },
  { word: "Ressourcenschutz", article: "der", translation: "resource protection", category: "Kreislaufwirtschaft" },
  { word: "Verpackungsmüll", article: "der", translation: "packaging waste", category: "Kreislaufwirtschaft" },
  { word: "Stoffkreislauf", article: "der", translation: "material cycle", category: "Kreislaufwirtschaft" },

  // Biodiversität (vertieft)
  { word: "Artenreichtum", article: "der", translation: "species richness", category: "Biodiversität (vertieft)" },
  { word: "Artensterben", article: "das", translation: "species extinction", category: "Biodiversität (vertieft)" },
  { word: "Ökosystemleistung", article: "die", translation: "ecosystem service", category: "Biodiversität (vertieft)" },
  { word: "Lebensraumverlust", article: "der", translation: "habitat loss", category: "Biodiversität (vertieft)" },
  { word: "Verdrängung", article: "die", translation: "displacement (of native species)", category: "Biodiversität (vertieft)" },
  { word: "Bestandserhaltung", article: "die", translation: "conservation of populations", category: "Biodiversität (vertieft)" },
  { word: "Wiederansiedlung", article: "die", translation: "reintroduction (species)", category: "Biodiversität (vertieft)" },
  { word: "Ökosystemvielfalt", article: "die", translation: "ecosystem diversity", category: "Biodiversität (vertieft)" },
  { word: "Genpool", article: "der", translation: "gene pool", category: "Biodiversität (vertieft)" },
  { word: "Populationsdichte", article: "die", translation: "population density", category: "Biodiversität (vertieft)" },
  { word: "Bestandsrückgang", article: "der", translation: "population decline", category: "Biodiversität (vertieft)" },
  { word: "Renaturierung", article: "die", translation: "ecological restoration", category: "Biodiversität (vertieft)" },
  { word: "Biotopvernetzung", article: "die", translation: "habitat connectivity", category: "Biodiversität (vertieft)" },
  { word: "Artenschutzabkommen", article: "das", translation: "species protection agreement", category: "Biodiversität (vertieft)" },
  { word: "Naturhaushalt", article: "das", translation: "ecological balance", category: "Biodiversität (vertieft)" },

  // Hochschulwesen
  { word: "Studiengang", article: "der", translation: "degree program", category: "Hochschulwesen" },
  { word: "Immatrikulation", article: "die", translation: "university enrollment", category: "Hochschulwesen" },
  { word: "Hochschulzugang", article: "der", translation: "access to higher education", category: "Hochschulwesen" },
  { word: "Studienordnung", article: "die", translation: "study regulations", category: "Hochschulwesen" },
  { word: "Lehrveranstaltung", article: "die", translation: "course/class (university)", category: "Hochschulwesen" },
  { word: "Prüfungsordnung", article: "die", translation: "examination regulations", category: "Hochschulwesen" },
  { word: "Studienabbruch", article: "der", translation: "dropping out of university", category: "Hochschulwesen" },
  { word: "Regelstudienzeit", article: "die", translation: "standard period of study", category: "Hochschulwesen" },
  { word: "Hochschulranking", article: "das", translation: "university ranking", category: "Hochschulwesen" },
  { word: "Forschungsschwerpunkt", article: "der", translation: "research focus", category: "Hochschulwesen" },
  { word: "Lehrstuhl", article: "der", translation: "professorial chair", category: "Hochschulwesen" },
  { word: "Promotionsverfahren", article: "das", translation: "doctoral process", category: "Hochschulwesen" },
  { word: "Habilitation", article: "die", translation: "habilitation (post-doctoral qualification)", category: "Hochschulwesen" },
  { word: "Drittmittel", article: "die", translation: "third-party research funding", category: "Hochschulwesen" },
  { word: "Studiengebühr", article: "die", translation: "tuition fee", category: "Hochschulwesen" },

  // Bildungspolitik
  { word: "Bildungschance", article: "die", translation: "educational opportunity", category: "Bildungspolitik" },
  { word: "Bildungsauftrag", article: "der", translation: "educational mandate", category: "Bildungspolitik" },
  { word: "Schulreform", article: "die", translation: "school reform", category: "Bildungspolitik" },
  { word: "Bildungsstandard", article: "der", translation: "education standard", category: "Bildungspolitik" },
  { word: "Bildungsgerechtigkeit", article: "die", translation: "educational equity", category: "Bildungspolitik" },
  { word: "Ganztagsschule", article: "die", translation: "all-day school", category: "Bildungspolitik" },
  { word: "Bildungsinvestition", article: "die", translation: "investment in education", category: "Bildungspolitik" },
  { word: "Lehrkräftemangel", article: "der", translation: "teacher shortage", category: "Bildungspolitik" },
  { word: "Inklusion", article: "die", translation: "inclusion (education)", category: "Bildungspolitik" },
  { word: "Bildungswesen", article: "das", translation: "education sector", category: "Bildungspolitik" },
  { word: "Schulautonomie", article: "die", translation: "school autonomy", category: "Bildungspolitik" },
  { word: "Bildungsabschluss", article: "der", translation: "educational qualification", category: "Bildungspolitik" },
  { word: "Leistungsdruck", article: "der", translation: "performance pressure", category: "Bildungspolitik" },
  { word: "Notengebung", article: "die", translation: "grading", category: "Bildungspolitik" },
  { word: "Bildungslücke", article: "die", translation: "education gap", category: "Bildungspolitik" },

  // Didaktik
  { word: "Unterrichtsmethode", article: "die", translation: "teaching method", category: "Didaktik" },
  { word: "Rahmenlehrplan", article: "der", translation: "curriculum framework", category: "Didaktik" },
  { word: "Unterrichtsgestaltung", article: "die", translation: "lesson design", category: "Didaktik" },
  { word: "Wissensvermittlung", article: "die", translation: "knowledge transfer", category: "Didaktik" },
  { word: "Lernziel", article: "das", translation: "learning objective", category: "Didaktik" },
  { word: "Unterrichtsstoff", article: "der", translation: "course material", category: "Didaktik" },
  { word: "Differenzierung", article: "die", translation: "differentiation (teaching)", category: "Didaktik" },
  { word: "Handlungsorientierung", article: "die", translation: "action-oriented approach", category: "Didaktik" },
  { word: "Kompetenzerwerb", article: "der", translation: "skill acquisition", category: "Didaktik" },
  { word: "Lernumgebung", article: "die", translation: "learning environment", category: "Didaktik" },
  { word: "Leistungsbewertung", article: "die", translation: "performance assessment", category: "Didaktik" },
  { word: "Unterrichtsplanung", article: "die", translation: "lesson planning", category: "Didaktik" },
  { word: "Lehrmittel", article: "das", translation: "teaching material", category: "Didaktik" },
  { word: "Gruppenarbeit", article: "die", translation: "group work", category: "Didaktik" },
  { word: "Frontalunterricht", article: "der", translation: "teacher-centered instruction", category: "Didaktik" },

  // Lernpsychologie
  { word: "Lernstrategie", article: "die", translation: "learning strategy", category: "Lernpsychologie" },
  { word: "Lernblockade", article: "die", translation: "learning block", category: "Lernpsychologie" },
  { word: "Merkhilfe", article: "die", translation: "memory aid", category: "Lernpsychologie" },
  { word: "Lernmotivation", article: "die", translation: "motivation to learn", category: "Lernpsychologie" },
  { word: "Prüfungsangst", article: "die", translation: "exam anxiety", category: "Lernpsychologie" },
  { word: "Lernerfolg", article: "der", translation: "learning success", category: "Lernpsychologie" },
  { word: "Lerntempo", article: "das", translation: "learning pace", category: "Lernpsychologie" },
  { word: "Wiederholungseffekt", article: "der", translation: "repetition effect", category: "Lernpsychologie" },
  { word: "Lerntyp", article: "der", translation: "learning type/style", category: "Lernpsychologie" },
  { word: "Aufschieberitis", article: "die", translation: "procrastination", category: "Lernpsychologie" },
  { word: "Selbstdisziplin", article: "die", translation: "self-discipline", category: "Lernpsychologie" },
  { word: "Konzentrationsschwäche", article: "die", translation: "lack of concentration", category: "Lernpsychologie" },
  { word: "Lernkurve", article: "die", translation: "learning curve", category: "Lernpsychologie" },
  { word: "Merksatz", article: "der", translation: "mnemonic sentence", category: "Lernpsychologie" },
  { word: "Wissensstand", article: "der", translation: "level of knowledge", category: "Lernpsychologie" },

  // Zwischenmenschliche Beziehungen (vertieft)
  { word: "Vertrauensbasis", article: "die", translation: "basis of trust", category: "Zwischenmenschliche Beziehungen (vertieft)" },
  { word: "Beziehungskrise", article: "die", translation: "relationship crisis", category: "Zwischenmenschliche Beziehungen (vertieft)" },
  { word: "Kommunikationsfähigkeit", article: "die", translation: "communication skill", category: "Zwischenmenschliche Beziehungen (vertieft)" },
  { word: "Eifersuchtsszene", article: "die", translation: "jealousy scene", category: "Zwischenmenschliche Beziehungen (vertieft)" },
  { word: "Beziehungsdynamik", article: "die", translation: "relationship dynamics", category: "Zwischenmenschliche Beziehungen (vertieft)" },
  { word: "Bindungsangst", article: "die", translation: "fear of commitment", category: "Zwischenmenschliche Beziehungen (vertieft)" },
  { word: "Kompromissfähigkeit", article: "die", translation: "ability to compromise", category: "Zwischenmenschliche Beziehungen (vertieft)" },
  { word: "Versöhnungsfähigkeit", article: "die", translation: "ability to reconcile", category: "Zwischenmenschliche Beziehungen (vertieft)" },
  { word: "Nähebedürfnis", article: "das", translation: "need for closeness", category: "Zwischenmenschliche Beziehungen (vertieft)" },
  { word: "Distanzbedürfnis", article: "das", translation: "need for distance", category: "Zwischenmenschliche Beziehungen (vertieft)" },
  { word: "Vertrauensbruch", article: "der", translation: "breach of trust", category: "Zwischenmenschliche Beziehungen (vertieft)" },
  { word: "Wiedergutmachung", article: "die", translation: "making amends", category: "Zwischenmenschliche Beziehungen (vertieft)" },
  { word: "Beziehungsstatus", article: "der", translation: "relationship status", category: "Zwischenmenschliche Beziehungen (vertieft)" },
  { word: "Herzensangelegenheit", article: "die", translation: "matter of the heart", category: "Zwischenmenschliche Beziehungen (vertieft)" },
  { word: "Trennungsschmerz", article: "der", translation: "pain of separation", category: "Zwischenmenschliche Beziehungen (vertieft)" },

  // Persönlichkeitsentwicklung (vertieft)
  { word: "Selbstoptimierung", article: "die", translation: "self-optimization", category: "Persönlichkeitsentwicklung (vertieft)" },
  { word: "Wachstumsdenken", article: "das", translation: "growth mindset", category: "Persönlichkeitsentwicklung (vertieft)" },
  { word: "Selbstreflexionsfähigkeit", article: "die", translation: "capacity for self-reflection", category: "Persönlichkeitsentwicklung (vertieft)" },
  { word: "Komfortzone", article: "die", translation: "comfort zone", category: "Persönlichkeitsentwicklung (vertieft)" },
  { word: "Selbstmotivation", article: "die", translation: "self-motivation", category: "Persönlichkeitsentwicklung (vertieft)" },
  { word: "Willenskraft", article: "die", translation: "willpower", category: "Persönlichkeitsentwicklung (vertieft)" },
  { word: "Zielstrebigkeit", article: "die", translation: "determination", category: "Persönlichkeitsentwicklung (vertieft)" },
  { word: "Selbstverbesserung", article: "die", translation: "self-improvement", category: "Persönlichkeitsentwicklung (vertieft)" },
  { word: "Lebenserfahrung", article: "die", translation: "life experience", category: "Persönlichkeitsentwicklung (vertieft)" },
  { word: "Rückschlagfestigkeit", article: "die", translation: "resilience to setbacks", category: "Persönlichkeitsentwicklung (vertieft)" },
  { word: "Charakterbildung", article: "die", translation: "character formation", category: "Persönlichkeitsentwicklung (vertieft)" },
  { word: "Selbstfindung", article: "die", translation: "self-discovery", category: "Persönlichkeitsentwicklung (vertieft)" },
  { word: "Erfolgsdruck", article: "der", translation: "pressure to succeed", category: "Persönlichkeitsentwicklung (vertieft)" },
  { word: "Sinnkrise", article: "die", translation: "crisis of meaning", category: "Persönlichkeitsentwicklung (vertieft)" },
  { word: "Neuanfang", article: "der", translation: "fresh start", category: "Persönlichkeitsentwicklung (vertieft)" },

  // Lebensphilosophie
  { word: "Lebensweisheit", article: "die", translation: "life wisdom", category: "Lebensphilosophie" },
  { word: "Lebenskunst", article: "die", translation: "art of living", category: "Lebensphilosophie" },
  { word: "Ausgeglichenheit", article: "die", translation: "balance/equanimity", category: "Lebensphilosophie" },
  { word: "Lebensfreude", article: "die", translation: "joy of living", category: "Lebensphilosophie" },
  { word: "Genügsamkeit", article: "die", translation: "contentment/frugality", category: "Lebensphilosophie" },
  { word: "Lebenshaltung", article: "die", translation: "outlook on life", category: "Lebensphilosophie" },
  { word: "Bescheidenheit", article: "die", translation: "modesty", category: "Lebensphilosophie" },
  { word: "Dankbarkeitshaltung", article: "die", translation: "attitude of gratitude", category: "Lebensphilosophie" },
  { word: "Sinnhaftigkeit", article: "die", translation: "meaningfulness", category: "Lebensphilosophie" },
  { word: "Lebensbalance", article: "die", translation: "life balance", category: "Lebensphilosophie" },
  { word: "Loslassen", article: "das", translation: "letting go", category: "Lebensphilosophie" },
  { word: "Gegenwärtigkeit", article: "die", translation: "presence/being in the moment", category: "Lebensphilosophie" },
  { word: "Lebensmotto", article: "das", translation: "life motto", category: "Lebensphilosophie" },
  { word: "Selbstgenügsamkeit", article: "die", translation: "self-sufficiency (contentment)", category: "Lebensphilosophie" },
  { word: "Weisheit", article: "die", translation: "wisdom", category: "Lebensphilosophie" },

  // Achtsamkeit & Wohlbefinden (vertieft)
  { word: "Achtsamkeitspraxis", article: "die", translation: "mindfulness practice", category: "Achtsamkeit & Wohlbefinden (vertieft)" },
  { word: "Stressbewältigung", article: "die", translation: "stress management", category: "Achtsamkeit & Wohlbefinden (vertieft)" },
  { word: "Erschöpfungszustand", article: "der", translation: "state of exhaustion", category: "Achtsamkeit & Wohlbefinden (vertieft)" },
  { word: "Selbstfürsorge", article: "die", translation: "self-care", category: "Achtsamkeit & Wohlbefinden (vertieft)" },
  { word: "Gleichmut", article: "der", translation: "equanimity", category: "Achtsamkeit & Wohlbefinden (vertieft)" },
  { word: "Achtsamkeitstraining", article: "das", translation: "mindfulness training", category: "Achtsamkeit & Wohlbefinden (vertieft)" },
  { word: "Erholungsphase", article: "die", translation: "recovery phase", category: "Achtsamkeit & Wohlbefinden (vertieft)" },
  { word: "Reizüberflutung", article: "die", translation: "sensory overload", category: "Achtsamkeit & Wohlbefinden (vertieft)" },
  { word: "Entschleunigung", article: "die", translation: "slowing down/deceleration", category: "Achtsamkeit & Wohlbefinden (vertieft)" },
  { word: "Achtsamkeitsritual", article: "die", translation: "mindfulness ritual", category: "Achtsamkeit & Wohlbefinden (vertieft)" },
  { word: "Wohlbefinden", article: "das", translation: "wellbeing", category: "Achtsamkeit & Wohlbefinden (vertieft)" },
  { word: "Selbstmitgefühl", article: "das", translation: "self-compassion", category: "Achtsamkeit & Wohlbefinden (vertieft)" },
  { word: "Ruhepol", article: "der", translation: "anchor of calm", category: "Achtsamkeit & Wohlbefinden (vertieft)" },
  { word: "Achtsamkeitsmoment", article: "der", translation: "mindful moment", category: "Achtsamkeit & Wohlbefinden (vertieft)" },
  { word: "Burnout-Prävention", article: "die", translation: "burnout prevention", category: "Achtsamkeit & Wohlbefinden (vertieft)" },

  // Karriereplanung
  { word: "Berufswechsel", article: "der", translation: "career change", category: "Karriereplanung" },
  { word: "Karrierechance", article: "die", translation: "career opportunity", category: "Karriereplanung" },
  { word: "Aufstiegsmöglichkeit", article: "die", translation: "opportunity for advancement", category: "Karriereplanung" },
  { word: "Karriereleiter", article: "die", translation: "career ladder", category: "Karriereplanung" },
  { word: "Berufserfolg", article: "der", translation: "professional success", category: "Karriereplanung" },
  { word: "Zusatzqualifikation", article: "die", translation: "additional qualification", category: "Karriereplanung" },
  { word: "Karriereknick", article: "der", translation: "career setback", category: "Karriereplanung" },
  { word: "Berufsziel", article: "das", translation: "career goal", category: "Karriereplanung" },
  { word: "Fachlaufbahn", article: "die", translation: "specialist career path", category: "Karriereplanung" },
  { word: "Quereinstieg", article: "der", translation: "career switch (from another field)", category: "Karriereplanung" },
  { word: "Standortwechsel", article: "der", translation: "relocation (for work)", category: "Karriereplanung" },
  { word: "Selbstständigkeit", article: "die", translation: "self-employment", category: "Karriereplanung" },
  { word: "Berufserfahrungsstand", article: "der", translation: "level of professional experience", category: "Karriereplanung" },
  { word: "Karriereberatung", article: "die", translation: "career counseling", category: "Karriereplanung" },
  { word: "Fachkarriere", article: "die", translation: "specialist career track", category: "Karriereplanung" },

  // Führungskompetenz
  { word: "Vorbildfunktion", article: "die", translation: "role-model function", category: "Führungskompetenz" },
  { word: "Delegationsfähigkeit", article: "die", translation: "ability to delegate", category: "Führungskompetenz" },
  { word: "Durchsetzungsvermögen", article: "das", translation: "assertiveness", category: "Führungskompetenz" },
  { word: "Entscheidungsstärke", article: "die", translation: "decisiveness", category: "Führungskompetenz" },
  { word: "Führungsverantwortung", article: "die", translation: "leadership responsibility", category: "Führungskompetenz" },
  { word: "Konfliktlösungskompetenz", article: "die", translation: "conflict-resolution skill", category: "Führungskompetenz" },
  { word: "Mitarbeiterführung", article: "die", translation: "staff management", category: "Führungskompetenz" },
  { word: "Führungsqualität", article: "die", translation: "leadership quality", category: "Führungskompetenz" },
  { word: "Vertrauenskultur", article: "die", translation: "culture of trust", category: "Führungskompetenz" },
  { word: "Führungsschwäche", article: "die", translation: "weak leadership", category: "Führungskompetenz" },
  { word: "Vorgesetztenrolle", article: "die", translation: "role of a superior", category: "Führungskompetenz" },
  { word: "Teamgeist", article: "der", translation: "team spirit", category: "Führungskompetenz" },
  { word: "Motivationsfähigkeit", article: "die", translation: "ability to motivate others", category: "Führungskompetenz" },
  { word: "Führungsposition", article: "die", translation: "leadership position", category: "Führungskompetenz" },
  { word: "Vorbildwirkung", article: "die", translation: "exemplary effect", category: "Führungskompetenz" },

  // Arbeitspsychologie
  { word: "Arbeitszufriedenheit", article: "die", translation: "job satisfaction", category: "Arbeitspsychologie" },
  { word: "Arbeitsbelastung", article: "die", translation: "workload", category: "Arbeitspsychologie" },
  { word: "Berufsalltag", article: "der", translation: "working life/daily routine at work", category: "Arbeitspsychologie" },
  { word: "Arbeitsklima", article: "das", translation: "work atmosphere", category: "Arbeitspsychologie" },
  { word: "Überforderung", article: "die", translation: "being overwhelmed", category: "Arbeitspsychologie" },
  { word: "Unterforderung", article: "die", translation: "being underchallenged", category: "Arbeitspsychologie" },
  { word: "Arbeitsmotivation", article: "die", translation: "work motivation", category: "Arbeitspsychologie" },
  { word: "Mitarbeiterzufriedenheit", article: "die", translation: "employee satisfaction", category: "Arbeitspsychologie" },
  { word: "Erholungsbedürfnis", article: "das", translation: "need for recovery", category: "Arbeitspsychologie" },
  { word: "Work-Life-Balance", article: "die", translation: "work-life balance", category: "Arbeitspsychologie" },
  { word: "Leistungsfähigkeit", article: "die", translation: "capacity for performance", category: "Arbeitspsychologie" },
  { word: "Arbeitsdruck", article: "der", translation: "work pressure", category: "Arbeitspsychologie" },
  { word: "Erschöpfungssyndrom", article: "das", translation: "exhaustion syndrome", category: "Arbeitspsychologie" },
  { word: "Feierabendstimmung", article: "die", translation: "end-of-workday mood", category: "Arbeitspsychologie" },
  { word: "Berufsmüdigkeit", article: "die", translation: "job fatigue", category: "Arbeitspsychologie" },

  // Unternehmenskultur
  { word: "Fehlerkultur", article: "die", translation: "culture around mistakes", category: "Unternehmenskultur" },
  { word: "Wertschätzung", article: "die", translation: "appreciation", category: "Unternehmenskultur" },
  { word: "Unternehmensleitbild", article: "das", translation: "corporate mission statement", category: "Unternehmenskultur" },
  { word: "Teamkultur", article: "die", translation: "team culture", category: "Unternehmenskultur" },
  { word: "Firmenphilosophie", article: "die", translation: "company philosophy", category: "Unternehmenskultur" },
  { word: "Zugehörigkeit", article: "die", translation: "sense of belonging (workplace)", category: "Unternehmenskultur" },
  { word: "Betriebszugehörigkeit", article: "die", translation: "length of service/tenure", category: "Unternehmenskultur" },
  { word: "Mitspracherecht", article: "das", translation: "right to have a say", category: "Unternehmenskultur" },
  { word: "Hierarchieebene", article: "die", translation: "hierarchical level", category: "Unternehmenskultur" },
  { word: "Duz-Kultur", article: "die", translation: "informal (first-name) workplace culture", category: "Unternehmenskultur" },
  { word: "Innovationskultur", article: "die", translation: "culture of innovation", category: "Unternehmenskultur" },
  { word: "Firmenidentität", article: "die", translation: "corporate identity", category: "Unternehmenskultur" },
  { word: "Loyalitätsgefühl", article: "das", translation: "sense of loyalty", category: "Unternehmenskultur" },
  { word: "Mitarbeiterbindung", article: "die", translation: "employee retention", category: "Unternehmenskultur" },
  { word: "Gemeinschaftsgefühl", article: "das", translation: "sense of community", category: "Unternehmenskultur" },

  // Zeitgeschichte
  { word: "Nachkriegszeit", article: "die", translation: "post-war period", category: "Zeitgeschichte" },
  { word: "Wiederaufbauphase", article: "die", translation: "reconstruction period", category: "Zeitgeschichte" },
  { word: "Wirtschaftswunder", article: "das", translation: "economic miracle", category: "Zeitgeschichte" },
  { word: "Zeitzeuge", article: "der", translation: "contemporary witness", category: "Zeitgeschichte" },
  { word: "Umbruchszeit", article: "die", translation: "time of upheaval", category: "Zeitgeschichte" },
  { word: "Systemwechsel", article: "der", translation: "regime/system change", category: "Zeitgeschichte" },
  { word: "Wiedervereinigung", article: "die", translation: "reunification", category: "Zeitgeschichte" },
  { word: "Aufarbeitung", article: "die", translation: "coming to terms with (the past)", category: "Zeitgeschichte" },
  { word: "Erinnerungspolitik", article: "die", translation: "politics of remembrance", category: "Zeitgeschichte" },
  { word: "Geschichtsbewusstsein", article: "das", translation: "historical awareness", category: "Zeitgeschichte" },
  { word: "Zeitdokument", article: "das", translation: "historical document/record", category: "Zeitgeschichte" },
  { word: "Nachkriegsgeneration", article: "die", translation: "post-war generation", category: "Zeitgeschichte" },
  { word: "Umsturz", article: "der", translation: "overthrow", category: "Zeitgeschichte" },
  { word: "Epochenwechsel", article: "der", translation: "change of era", category: "Zeitgeschichte" },
  { word: "Zeitspanne", article: "die", translation: "time span (historical)", category: "Zeitgeschichte" },

  // Kulturgeschichte
  { word: "Kulturerbe", article: "das", translation: "cultural heritage", category: "Kulturgeschichte" },
  { word: "Traditionslinie", article: "die", translation: "line of tradition", category: "Kulturgeschichte" },
  { word: "Kulturaustausch", article: "der", translation: "cultural exchange", category: "Kulturgeschichte" },
  { word: "Kulturprägung", article: "die", translation: "cultural imprint/shaping", category: "Kulturgeschichte" },
  { word: "Sittengeschichte", article: "die", translation: "history of customs/morals", category: "Kulturgeschichte" },
  { word: "Zeitepoche", article: "die", translation: "historical epoch", category: "Kulturgeschichte" },
  { word: "Kulturkreis", article: "der", translation: "cultural sphere", category: "Kulturgeschichte" },
  { word: "Brauchtum", article: "das", translation: "customs and traditions", category: "Kulturgeschichte" },
  { word: "Volkskunde", article: "die", translation: "folklore studies", category: "Kulturgeschichte" },
  { word: "Alltagsgeschichte", article: "die", translation: "history of everyday life", category: "Kulturgeschichte" },
  { word: "Zivilisationsgeschichte", article: "die", translation: "history of civilization", category: "Kulturgeschichte" },
  { word: "Kulturwandel", article: "der", translation: "cultural change", category: "Kulturgeschichte" },
  { word: "Traditionsbewusstsein", article: "das", translation: "awareness of tradition", category: "Kulturgeschichte" },
  { word: "Kulturerbestätte", article: "die", translation: "heritage site", category: "Kulturgeschichte" },
  { word: "Sittenwandel", article: "der", translation: "shift in mores", category: "Kulturgeschichte" },

  // Globalgeschichte
  { word: "Weltordnung", article: "die", translation: "world order", category: "Globalgeschichte" },
  { word: "Kolonialismus", article: "der", translation: "colonialism", category: "Globalgeschichte" },
  { word: "Entkolonialisierung", article: "die", translation: "decolonization", category: "Globalgeschichte" },
  { word: "Weltmacht", article: "die", translation: "world power", category: "Globalgeschichte" },
  { word: "Imperium", article: "das", translation: "empire", category: "Globalgeschichte" },
  { word: "Expansionspolitik", article: "die", translation: "expansionist policy", category: "Globalgeschichte" },
  { word: "Handelsroute", article: "die", translation: "trade route", category: "Globalgeschichte" },
  { word: "Machtgleichgewicht", article: "das", translation: "balance of power", category: "Globalgeschichte" },
  { word: "Weltgeschichte", article: "die", translation: "world history", category: "Globalgeschichte" },
  { word: "Zivilisationsbruch", article: "der", translation: "civilizational rupture", category: "Globalgeschichte" },
  { word: "Kulturbegegnung", article: "die", translation: "encounter of cultures", category: "Globalgeschichte" },
  { word: "Weltbild", article: "das", translation: "worldview", category: "Globalgeschichte" },
  { word: "Epochenbruch", article: "der", translation: "historical rupture/break", category: "Globalgeschichte" },
  { word: "Globalgeschichte", article: "die", translation: "global history", category: "Globalgeschichte" },
  { word: "Machtverschiebung", article: "die", translation: "power shift", category: "Globalgeschichte" },

  // Sportwissenschaft
  { word: "Bewegungsapparat", article: "der", translation: "musculoskeletal system", category: "Sportwissenschaft" },
  { word: "Trainingsplan", article: "der", translation: "training plan", category: "Sportwissenschaft" },
  { word: "Leistungsdiagnostik", article: "die", translation: "performance diagnostics", category: "Sportwissenschaft" },
  { word: "Regenerationsphase", article: "die", translation: "recovery phase (sport)", category: "Sportwissenschaft" },
  { word: "Trainingsreiz", article: "der", translation: "training stimulus", category: "Sportwissenschaft" },
  { word: "Muskelaufbau", article: "der", translation: "muscle building", category: "Sportwissenschaft" },
  { word: "Belastungsgrenze", article: "die", translation: "physical limit/threshold", category: "Sportwissenschaft" },
  { word: "Bewegungskoordination", article: "die", translation: "movement coordination", category: "Sportwissenschaft" },
  { word: "Ausdauertraining", article: "das", translation: "endurance training", category: "Sportwissenschaft" },
  { word: "Sportverletzung", article: "die", translation: "sports injury", category: "Sportwissenschaft" },
  { word: "Leistungssteigerung", article: "die", translation: "performance improvement", category: "Sportwissenschaft" },
  { word: "Trainingsmethode", article: "die", translation: "training method", category: "Sportwissenschaft" },
  { word: "Fitnesslevel", article: "das", translation: "fitness level", category: "Sportwissenschaft" },
  { word: "Wettkampfvorbereitung", article: "die", translation: "competition preparation", category: "Sportwissenschaft" },
  { word: "Bewegungsmangel", article: "der", translation: "lack of exercise", category: "Sportwissenschaft" },

  // Sportpsychologie
  { word: "Wettkampfangst", article: "die", translation: "competition anxiety", category: "Sportpsychologie" },
  { word: "Mentalstärke", article: "die", translation: "mental strength", category: "Sportpsychologie" },
  { word: "Siegeswille", article: "der", translation: "will to win", category: "Sportpsychologie" },
  { word: "Wettkampfnerven", article: "die", translation: "competition nerves", category: "Sportpsychologie" },
  { word: "Teamzusammenhalt", article: "der", translation: "team cohesion", category: "Sportpsychologie" },
  { word: "Erfolgserlebnis", article: "das", translation: "sense of achievement", category: "Sportpsychologie" },
  { word: "Leistungsangst", article: "die", translation: "performance anxiety", category: "Sportpsychologie" },
  { word: "Frustrationstoleranz", article: "die", translation: "frustration tolerance", category: "Sportpsychologie" },
  { word: "Kampfgeist", article: "der", translation: "fighting spirit", category: "Sportpsychologie" },
  { word: "Konzentrationsübung", article: "die", translation: "concentration exercise", category: "Sportpsychologie" },
  { word: "Wettkampfroutine", article: "das", translation: "competition routine", category: "Sportpsychologie" },
  { word: "Niederlagenverarbeitung", article: "die", translation: "processing defeat", category: "Sportpsychologie" },
  { word: "Zielorientierung", article: "die", translation: "goal orientation", category: "Sportpsychologie" },
  { word: "Trainerpersönlichkeit", article: "die", translation: "coach's personality", category: "Sportpsychologie" },
  { word: "Mannschaftsgeist", article: "der", translation: "team spirit", category: "Sportpsychologie" },

  // Internationale Organisationen
  { word: "Mitgliedstaat", article: "der", translation: "member state", category: "Internationale Organisationen" },
  { word: "Generalversammlung", article: "die", translation: "general assembly", category: "Internationale Organisationen" },
  { word: "Sicherheitsrat", article: "der", translation: "security council", category: "Internationale Organisationen" },
  { word: "Vetorecht", article: "das", translation: "veto right", category: "Internationale Organisationen" },
  { word: "Beitrittsverfahren", article: "das", translation: "accession process", category: "Internationale Organisationen" },
  { word: "Mitgliedsbeitrag", article: "der", translation: "membership fee", category: "Internationale Organisationen" },
  { word: "Dachorganisation", article: "die", translation: "umbrella organization", category: "Internationale Organisationen" },
  { word: "Sanktionsregime", article: "das", translation: "sanctions regime", category: "Internationale Organisationen" },
  { word: "Resolution", article: "die", translation: "resolution (UN etc.)", category: "Internationale Organisationen" },
  { word: "Blauhelm", article: "der", translation: "UN peacekeeper", category: "Internationale Organisationen" },
  { word: "Beobachterstatus", article: "der", translation: "observer status", category: "Internationale Organisationen" },
  { word: "Gremium", article: "das", translation: "committee/panel", category: "Internationale Organisationen" },
  { word: "Sitzverteilung", article: "die", translation: "distribution of seats", category: "Internationale Organisationen" },
  { word: "Ratspräsidentschaft", article: "die", translation: "council presidency", category: "Internationale Organisationen" },
  { word: "Grundsatzentscheidung", article: "die", translation: "fundamental decision", category: "Internationale Organisationen" },

  // Globalisierung (vertieft)
  { word: "Weltmarkt", article: "der", translation: "global market", category: "Globalisierung (vertieft)" },
  { word: "Standortwettbewerb", article: "der", translation: "competition among locations", category: "Globalisierung (vertieft)" },
  { word: "Produktionsverlagerung", article: "die", translation: "offshoring of production", category: "Globalisierung (vertieft)" },
  { word: "Freihandelsabkommen", article: "das", translation: "free trade agreement", category: "Globalisierung (vertieft)" },
  { word: "Handelsschranke", article: "die", translation: "trade barrier", category: "Globalisierung (vertieft)" },
  { word: "Weltkonzern", article: "der", translation: "global corporation", category: "Globalisierung (vertieft)" },
  { word: "Zollschranke", article: "die", translation: "tariff barrier", category: "Globalisierung (vertieft)" },
  { word: "Standortvorteil", article: "der", translation: "location advantage", category: "Globalisierung (vertieft)" },
  { word: "Deregulierung", article: "die", translation: "deregulation", category: "Globalisierung (vertieft)" },
  { word: "Weltwirtschaftsordnung", article: "die", translation: "global economic order", category: "Globalisierung (vertieft)" },
  { word: "Kapitalflucht", article: "die", translation: "capital flight", category: "Globalisierung (vertieft)" },
  { word: "Standortnachteil", article: "der", translation: "location disadvantage", category: "Globalisierung (vertieft)" },
  { word: "Lohngefälle", article: "das", translation: "wage gap (international)", category: "Globalisierung (vertieft)" },
  { word: "Vernetzungswirtschaft", article: "die", translation: "networked economy", category: "Globalisierung (vertieft)" },
  { word: "Handelspartner", article: "der", translation: "trading partner", category: "Globalisierung (vertieft)" },

  // Entwicklungspolitik
  { word: "Entwicklungsland", article: "das", translation: "developing country", category: "Entwicklungspolitik" },
  { word: "Entwicklungshelfer", article: "der", translation: "development aid worker", category: "Entwicklungspolitik" },
  { word: "Grundversorgung", article: "die", translation: "basic supply/provision", category: "Entwicklungspolitik" },
  { word: "Aufbauhilfe", article: "die", translation: "reconstruction aid", category: "Entwicklungspolitik" },
  { word: "Schuldenerlass", article: "der", translation: "debt relief", category: "Entwicklungspolitik" },
  { word: "Selbsthilfeprojekt", article: "das", translation: "self-help project", category: "Entwicklungspolitik" },
  { word: "Armutsbekämpfung", article: "die", translation: "poverty reduction", category: "Entwicklungspolitik" },
  { word: "Entwicklungsziel", article: "das", translation: "development goal", category: "Entwicklungspolitik" },
  { word: "Nahrungsmittelhilfe", article: "die", translation: "food aid", category: "Entwicklungspolitik" },
  { word: "Bildungshilfe", article: "die", translation: "educational aid", category: "Entwicklungspolitik" },
  { word: "Wasserversorgung", article: "die", translation: "water supply", category: "Entwicklungspolitik" },
  { word: "Infrastrukturprojekt", article: "das", translation: "infrastructure project", category: "Entwicklungspolitik" },
  { word: "Nachhaltigkeitsprojekt", article: "das", translation: "sustainability project", category: "Entwicklungspolitik" },
  { word: "Partnerschaftsprogramm", article: "das", translation: "partnership program", category: "Entwicklungspolitik" },
  { word: "Hungerbekämpfung", article: "die", translation: "fight against hunger", category: "Entwicklungspolitik" },

  // Verwaltungsrecht
  { word: "Verwaltungsakt", article: "der", translation: "administrative act", category: "Verwaltungsrecht" },
  { word: "Behördengang", article: "der", translation: "visit to a government office", category: "Verwaltungsrecht" },
  { word: "Zuständigkeitsbereich", article: "der", translation: "area of jurisdiction", category: "Verwaltungsrecht" },
  { word: "Verwaltungsverfahren", article: "das", translation: "administrative procedure", category: "Verwaltungsrecht" },
  { word: "Ermessensspielraum", article: "der", translation: "scope of discretion", category: "Verwaltungsrecht" },
  { word: "Widerspruchsverfahren", article: "das", translation: "objection procedure", category: "Verwaltungsrecht" },
  { word: "Verwaltungsbescheid", article: "der", translation: "administrative ruling", category: "Verwaltungsrecht" },
  { word: "Amtspflicht", article: "die", translation: "official duty", category: "Verwaltungsrecht" },
  { word: "Verwaltungsaufwand", article: "der", translation: "administrative effort", category: "Verwaltungsrecht" },
  { word: "Genehmigungsverfahren", article: "das", translation: "approval procedure", category: "Verwaltungsrecht" },
  { word: "Amtshaftung", article: "die", translation: "official liability", category: "Verwaltungsrecht" },
  { word: "Verwaltungsgericht", article: "das", translation: "administrative court", category: "Verwaltungsrecht" },
  { word: "Bürokratieabbau", article: "der", translation: "reduction of bureaucracy", category: "Verwaltungsrecht" },
  { word: "Aktenzeichen", article: "das", translation: "case/file reference number", category: "Verwaltungsrecht" },
  { word: "Dienstweg", article: "der", translation: "official channels", category: "Verwaltungsrecht" },

  // Arbeitsrecht (vertieft)
  { word: "Arbeitsverhältnis", article: "das", translation: "employment relationship", category: "Arbeitsrecht (vertieft)" },
  { word: "Kündigungsschutz", article: "der", translation: "protection against dismissal", category: "Arbeitsrecht (vertieft)" },
  { word: "Betriebsrat", article: "der", translation: "works council", category: "Arbeitsrecht (vertieft)" },
  { word: "Tarifvertrag", article: "der", translation: "collective bargaining agreement", category: "Arbeitsrecht (vertieft)" },
  { word: "Arbeitszeitregelung", article: "die", translation: "working-time regulation", category: "Arbeitsrecht (vertieft)" },
  { word: "Sonderkündigungsschutz", article: "der", translation: "special protection against dismissal", category: "Arbeitsrecht (vertieft)" },
  { word: "Abfindung", article: "die", translation: "severance pay", category: "Arbeitsrecht (vertieft)" },
  { word: "Arbeitgeberpflicht", article: "die", translation: "employer's obligation", category: "Arbeitsrecht (vertieft)" },
  { word: "Streikrecht", article: "das", translation: "right to strike", category: "Arbeitsrecht (vertieft)" },
  { word: "Mitbestimmungsrecht", article: "das", translation: "right of co-determination", category: "Arbeitsrecht (vertieft)" },
  { word: "Arbeitsvertrag", article: "der", translation: "employment contract", category: "Arbeitsrecht (vertieft)" },
  { word: "Befristung", article: "die", translation: "fixed-term limitation", category: "Arbeitsrecht (vertieft)" },
  { word: "Änderungskündigung", article: "die", translation: "termination with modified terms", category: "Arbeitsrecht (vertieft)" },
  { word: "Diskriminierungsverbot", article: "das", translation: "prohibition of discrimination", category: "Arbeitsrecht (vertieft)" },
  { word: "Gleichstellungsbeauftragte", article: "der", translation: "equal-opportunity officer", category: "Arbeitsrecht (vertieft)" },

  // Vertragsrecht
  { word: "Vertragspartner", article: "der", translation: "contracting party", category: "Vertragsrecht" },
  { word: "Vertragsabschluss", article: "der", translation: "conclusion of a contract", category: "Vertragsrecht" },
  { word: "Vertragsentwurf", article: "der", translation: "draft contract", category: "Vertragsrecht" },
  { word: "Vertragslaufzeit", article: "die", translation: "contract term", category: "Vertragsrecht" },
  { word: "Rücktrittsrecht", article: "das", translation: "right of withdrawal", category: "Vertragsrecht" },
  { word: "Gewährleistung", article: "die", translation: "warranty", category: "Vertragsrecht" },
  { word: "Vertragsstrafe", article: "die", translation: "contractual penalty", category: "Vertragsrecht" },
  { word: "Widerrufsrecht", article: "das", translation: "right of revocation", category: "Vertragsrecht" },
  { word: "Vertragsverletzung", article: "die", translation: "breach of contract", category: "Vertragsrecht" },
  { word: "Vertragsänderung", article: "die", translation: "contract amendment", category: "Vertragsrecht" },
  { word: "Vollzugsklausel", article: "die", translation: "enforcement clause", category: "Vertragsrecht" },
  { word: "Vertragsfreiheit", article: "die", translation: "freedom of contract", category: "Vertragsrecht" },
  { word: "Vertragsauslegung", article: "die", translation: "contract interpretation", category: "Vertragsrecht" },
  { word: "Formvorschrift", article: "die", translation: "formal requirement (legal)", category: "Vertragsrecht" },
  { word: "Vertragsgegenstand", article: "der", translation: "subject matter of a contract", category: "Vertragsrecht" },

  // Sprachwissenschaft
  { word: "Erstsprache", article: "die", translation: "first language (linguistic term)", category: "Sprachwissenschaft" },
  { word: "Sprachfamilie", article: "die", translation: "language family", category: "Sprachwissenschaft" },
  { word: "Lautverschiebung", article: "die", translation: "sound shift", category: "Sprachwissenschaft" },
  { word: "Sprachwandel", article: "der", translation: "language change", category: "Sprachwissenschaft" },
  { word: "Sprachursprung", article: "der", translation: "origin of language", category: "Sprachwissenschaft" },
  { word: "Sprachvarietät", article: "die", translation: "language variety", category: "Sprachwissenschaft" },
  { word: "Sprachnorm", article: "die", translation: "language norm/standard", category: "Sprachwissenschaft" },
  { word: "Sprachpurismus", article: "der", translation: "linguistic purism", category: "Sprachwissenschaft" },
  { word: "Lehnwort", article: "das", translation: "loanword", category: "Sprachwissenschaft" },
  { word: "Fremdwort", article: "das", translation: "foreign word", category: "Sprachwissenschaft" },
  { word: "Sprachwissenschaftler", article: "der", translation: "linguist", category: "Sprachwissenschaft" },
  { word: "Sprachtypologie", article: "die", translation: "language typology", category: "Sprachwissenschaft" },
  { word: "Bedeutungswandel", article: "der", translation: "semantic shift", category: "Sprachwissenschaft" },
  { word: "Sprachgemeinschaft", article: "die", translation: "speech community", category: "Sprachwissenschaft" },
  { word: "Sprachbarriere", article: "die", translation: "language barrier", category: "Sprachwissenschaft" },

  // Übersetzungswissenschaft
  { word: "Übersetzungsfehler", article: "der", translation: "translation error", category: "Übersetzungswissenschaft" },
  { word: "Dolmetscherdienst", article: "der", translation: "interpreting service", category: "Übersetzungswissenschaft" },
  { word: "Simultandolmetschen", article: "das", translation: "simultaneous interpreting", category: "Übersetzungswissenschaft" },
  { word: "Übersetzungstreue", article: "die", translation: "translation fidelity", category: "Übersetzungswissenschaft" },
  { word: "Ausgangssprache", article: "die", translation: "source language", category: "Übersetzungswissenschaft" },
  { word: "Zielsprache", article: "die", translation: "target language", category: "Übersetzungswissenschaft" },
  { word: "Übersetzungsauftrag", article: "der", translation: "translation assignment", category: "Übersetzungswissenschaft" },
  { word: "Fachübersetzung", article: "die", translation: "specialized translation", category: "Übersetzungswissenschaft" },
  { word: "Übersetzungssoftware", article: "die", translation: "translation software", category: "Übersetzungswissenschaft" },
  { word: "Sprachmittlung", article: "die", translation: "language mediation", category: "Übersetzungswissenschaft" },
  { word: "Untertitelung", article: "die", translation: "subtitling", category: "Übersetzungswissenschaft" },
  { word: "Synchronisation", article: "die", translation: "dubbing", category: "Übersetzungswissenschaft" },
  { word: "Textgetreue", article: "die", translation: "textual accuracy", category: "Übersetzungswissenschaft" },
  { word: "Übersetzungsbüro", article: "das", translation: "translation agency", category: "Übersetzungswissenschaft" },
  { word: "Sprachkombination", article: "die", translation: "language combination", category: "Übersetzungswissenschaft" },

  // Stadtsoziologie
  { word: "Wohnviertelentwicklung", article: "die", translation: "neighborhood development", category: "Stadtsoziologie" },
  { word: "Gentrifizierung", article: "die", translation: "gentrification", category: "Stadtsoziologie" },
  { word: "Verstädterung", article: "die", translation: "urbanization", category: "Stadtsoziologie" },
  { word: "Stadtflucht", article: "die", translation: "urban flight", category: "Stadtsoziologie" },
  { word: "Wohnraumknappheit", article: "die", translation: "housing shortage", category: "Stadtsoziologie" },
  { word: "Mietpreisbremse", article: "die", translation: "rent control", category: "Stadtsoziologie" },
  { word: "Stadtentwicklung", article: "die", translation: "urban development", category: "Stadtsoziologie" },
  { word: "Segregation", article: "die", translation: "segregation", category: "Stadtsoziologie" },
  { word: "Nachbarschaftsgefühl", article: "das", translation: "sense of neighborhood", category: "Stadtsoziologie" },
  { word: "Stadtbild", article: "das", translation: "cityscape", category: "Stadtsoziologie" },
  { word: "Ballungsraum", article: "der", translation: "metropolitan area", category: "Stadtsoziologie" },
  { word: "Wohndichte", article: "die", translation: "housing density", category: "Stadtsoziologie" },
  { word: "Stadtsanierung", article: "die", translation: "urban renewal", category: "Stadtsoziologie" },
  { word: "Verdrängungseffekt", article: "der", translation: "displacement effect", category: "Stadtsoziologie" },
  { word: "Quartiersentwicklung", article: "die", translation: "district development", category: "Stadtsoziologie" },

  // Nachhaltiges Bauen
  { word: "Wärmedämmung", article: "die", translation: "thermal insulation", category: "Nachhaltiges Bauen" },
  { word: "Niedrigenergiehaus", article: "das", translation: "low-energy house", category: "Nachhaltiges Bauen" },
  { word: "Baumaterial", article: "das", translation: "building material", category: "Nachhaltiges Bauen" },
  { word: "Energieeffizienzklasse", article: "die", translation: "energy efficiency rating", category: "Nachhaltiges Bauen" },
  { word: "Dachbegrünung", article: "die", translation: "green roof", category: "Nachhaltiges Bauen" },
  { word: "Bauweise", article: "die", translation: "building method", category: "Nachhaltiges Bauen" },
  { word: "Passivhaus", article: "das", translation: "passive house", category: "Nachhaltiges Bauen" },
  { word: "Recyclingbaustoff", article: "der", translation: "recycled building material", category: "Nachhaltiges Bauen" },
  { word: "Energiesparmaßnahme", article: "die", translation: "energy-saving measure", category: "Nachhaltiges Bauen" },
  { word: "Baugenehmigung", article: "die", translation: "building permit", category: "Nachhaltiges Bauen" },
  { word: "Modernisierungsbedarf", article: "der", translation: "need for modernization", category: "Nachhaltiges Bauen" },
  { word: "Wohnkonzept", article: "das", translation: "housing concept", category: "Nachhaltiges Bauen" },
  { word: "Flächenversiegelung", article: "die", translation: "soil sealing", category: "Nachhaltiges Bauen" },
  { word: "Grünflächenanteil", article: "der", translation: "share of green space", category: "Nachhaltiges Bauen" },
  { word: "Bauvorschrift", article: "die", translation: "building regulation", category: "Nachhaltiges Bauen" },

  // Kriminologie
  { word: "Tatmotiv", article: "das", translation: "motive (for a crime)", category: "Kriminologie" },
  { word: "Rückfallquote", article: "die", translation: "recidivism rate", category: "Kriminologie" },
  { word: "Kriminalstatistik", article: "die", translation: "crime statistics", category: "Kriminologie" },
  { word: "Bandenkriminalität", article: "die", translation: "gang crime", category: "Kriminologie" },
  { word: "Jugendkriminalität", article: "die", translation: "juvenile delinquency", category: "Kriminologie" },
  { word: "Verbrechensbekämpfung", article: "die", translation: "crime fighting", category: "Kriminologie" },
  { word: "Tatort", article: "der", translation: "crime scene", category: "Kriminologie" },
  { word: "Spurensicherung", article: "die", translation: "forensic evidence collection", category: "Kriminologie" },
  { word: "Kriminalpsychologie", article: "die", translation: "criminal psychology", category: "Kriminologie" },
  { word: "Tathergang", article: "der", translation: "sequence of events (of a crime)", category: "Kriminologie" },
  { word: "Präventionsprogramm", article: "das", translation: "prevention program", category: "Kriminologie" },
  { word: "Verbrechersyndikat", article: "das", translation: "crime syndicate", category: "Kriminologie" },
  { word: "Dunkelziffer", article: "die", translation: "number of unreported cases", category: "Kriminologie" },
  { word: "Strafverfolgungsbehörde", article: "die", translation: "law enforcement agency", category: "Kriminologie" },
  { word: "Wiedereingliederung", article: "die", translation: "reintegration (of offenders)", category: "Kriminologie" },

  // Konfliktforschung
  { word: "Interessenausgleich", article: "der", translation: "balancing of interests", category: "Konfliktforschung" },
  { word: "Eskalationsstufe", article: "die", translation: "level of escalation", category: "Konfliktforschung" },
  { word: "Deeskalation", article: "die", translation: "de-escalation", category: "Konfliktforschung" },
  { word: "Konfliktpartei", article: "die", translation: "party to a conflict", category: "Konfliktforschung" },
  { word: "Konfliktursache", article: "die", translation: "root cause of conflict", category: "Konfliktforschung" },
  { word: "Gewaltspirale", article: "die", translation: "spiral of violence", category: "Konfliktforschung" },
  { word: "Konfliktschlichtung", article: "die", translation: "conflict settlement", category: "Konfliktforschung" },
  { word: "Interessengegensatz", article: "der", translation: "conflicting interests", category: "Konfliktforschung" },
  { word: "Verhandlungsbereitschaft", article: "die", translation: "willingness to negotiate", category: "Konfliktforschung" },
  { word: "Streitschlichter", article: "der", translation: "mediator/conflict resolver", category: "Konfliktforschung" },
  { word: "Konfliktbewältigung", article: "die", translation: "conflict management", category: "Konfliktforschung" },
  { word: "Machtkampf", article: "der", translation: "power struggle", category: "Konfliktforschung" },
  { word: "Interessenlage", article: "die", translation: "constellation of interests", category: "Konfliktforschung" },
  { word: "Konfliktpotenzial", article: "das", translation: "conflict potential", category: "Konfliktforschung" },
  { word: "Vermittlungsversuch", article: "der", translation: "mediation attempt", category: "Konfliktforschung" },

  // Friedensforschung
  { word: "Friedensvertrag", article: "der", translation: "peace treaty", category: "Friedensforschung" },
  { word: "Friedensprozess", article: "der", translation: "peace process", category: "Friedensforschung" },
  { word: "Friedenssicherung", article: "die", translation: "peacekeeping", category: "Friedensforschung" },
  { word: "Waffenruhe", article: "die", translation: "ceasefire", category: "Friedensforschung" },
  { word: "Versöhnungsprozess", article: "der", translation: "reconciliation process", category: "Friedensforschung" },
  { word: "Friedensbewegung", article: "die", translation: "peace movement", category: "Friedensforschung" },
  { word: "Friedensverhandlung", article: "die", translation: "peace negotiation", category: "Friedensforschung" },
  { word: "Konfliktprävention", article: "die", translation: "conflict prevention", category: "Friedensforschung" },
  { word: "Gewaltverzicht", article: "der", translation: "renunciation of violence", category: "Friedensforschung" },
  { word: "Friedensnobelpreis", article: "der", translation: "Nobel Peace Prize", category: "Friedensforschung" },
  { word: "Wiederaufbauhilfe", article: "die", translation: "reconstruction assistance", category: "Friedensforschung" },
  { word: "Aussöhnung", article: "die", translation: "reconciliation", category: "Friedensforschung" },
  { word: "Dialogbereitschaft", article: "die", translation: "willingness to engage in dialogue", category: "Friedensforschung" },
  { word: "Friedensinitiative", article: "die", translation: "peace initiative", category: "Friedensforschung" },
  { word: "Stabilisierungsmission", article: "die", translation: "stabilization mission", category: "Friedensforschung" },

  // Diplomatie (vertieft)
  { word: "Verhandlungsdelegation", article: "die", translation: "negotiating delegation", category: "Diplomatie (vertieft)" },
  { word: "Konsulat", article: "das", translation: "consulate", category: "Diplomatie (vertieft)" },
  { word: "Gipfelgespräch", article: "das", translation: "summit talk", category: "Diplomatie (vertieft)" },
  { word: "Verhandlungsspielraum", article: "der", translation: "negotiating room/margin", category: "Diplomatie (vertieft)" },
  { word: "Protokollpflicht", article: "die", translation: "protocol obligation", category: "Diplomatie (vertieft)" },
  { word: "Diplomatensprache", article: "die", translation: "diplomatic language", category: "Diplomatie (vertieft)" },
  { word: "Gesandter", article: "der", translation: "envoy", category: "Diplomatie (vertieft)" },
  { word: "Verhandlungsführer", article: "der", translation: "lead negotiator", category: "Diplomatie (vertieft)" },
  { word: "Annäherung", article: "die", translation: "rapprochement", category: "Diplomatie (vertieft)" },
  { word: "Entspannungspolitik", article: "die", translation: "détente policy", category: "Diplomatie (vertieft)" },
  { word: "Protestnote", article: "die", translation: "note of protest", category: "Diplomatie (vertieft)" },
  { word: "Staatsakt", article: "der", translation: "state ceremony", category: "Diplomatie (vertieft)" },
  { word: "Beziehungsabbruch", article: "der", translation: "severing of relations", category: "Diplomatie (vertieft)" },
  { word: "Verhandlungsergebnis", article: "das", translation: "negotiation outcome", category: "Diplomatie (vertieft)" },
  { word: "Vertrauensbildung", article: "die", translation: "confidence-building", category: "Diplomatie (vertieft)" },

  // Menschenrechte (vertieft)
  { word: "Menschenwürde", article: "die", translation: "human dignity", category: "Menschenrechte (vertieft)" },
  { word: "Meinungsvielfalt", article: "die", translation: "diversity of opinion", category: "Menschenrechte (vertieft)" },
  { word: "Diskriminierungsschutz", article: "der", translation: "protection against discrimination", category: "Menschenrechte (vertieft)" },
  { word: "Menschenrechtsverletzung", article: "die", translation: "human rights violation", category: "Menschenrechte (vertieft)" },
  { word: "Grundfreiheit", article: "die", translation: "fundamental freedom", category: "Menschenrechte (vertieft)" },
  { word: "Rechtsschutz", article: "der", translation: "legal protection", category: "Menschenrechte (vertieft)" },
  { word: "Unterdrückung", article: "die", translation: "oppression", category: "Menschenrechte (vertieft)" },
  { word: "Zensurmaßnahme", article: "die", translation: "censorship measure", category: "Menschenrechte (vertieft)" },
  { word: "Meinungsdiktat", article: "das", translation: "dictatorship of opinion", category: "Menschenrechte (vertieft)" },
  { word: "Bürgerrechtsbewegung", article: "die", translation: "civil rights movement", category: "Menschenrechte (vertieft)" },
  { word: "Gleichbehandlung", article: "die", translation: "equal treatment", category: "Menschenrechte (vertieft)" },
  { word: "Schutzstatus", article: "der", translation: "protected status", category: "Menschenrechte (vertieft)" },
  { word: "Verfolgung", article: "die", translation: "persecution", category: "Menschenrechte (vertieft)" },
  { word: "Rechtlosigkeit", article: "die", translation: "lack of legal protection", category: "Menschenrechte (vertieft)" },
  { word: "Aktivistin", article: "die", translation: "activist (female)", category: "Menschenrechte (vertieft)" },

  // Datenschutz & Privatsphäre
  { word: "Datenerfassung", article: "die", translation: "data collection/capture", category: "Datenschutz & Privatsphäre" },
  { word: "Privatsphäre", article: "die", translation: "privacy", category: "Datenschutz & Privatsphäre" },
  { word: "Datenweitergabe", article: "die", translation: "data disclosure/sharing", category: "Datenschutz & Privatsphäre" },
  { word: "Einwilligungserklärung", article: "die", translation: "consent declaration", category: "Datenschutz & Privatsphäre" },
  { word: "Überwachungskamera", article: "die", translation: "surveillance camera", category: "Datenschutz & Privatsphäre" },
  { word: "Datensammlung", article: "die", translation: "data collection", category: "Datenschutz & Privatsphäre" },
  { word: "Anonymisierung", article: "die", translation: "anonymization", category: "Datenschutz & Privatsphäre" },
  { word: "Nutzerprofil", article: "das", translation: "user profile", category: "Datenschutz & Privatsphäre" },
  { word: "Datenschutzverletzung", article: "die", translation: "data breach", category: "Datenschutz & Privatsphäre" },
  { word: "Überwachungsstaat", article: "der", translation: "surveillance state", category: "Datenschutz & Privatsphäre" },
  { word: "Persönlichkeitsrecht", article: "das", translation: "personal rights", category: "Datenschutz & Privatsphäre" },
  { word: "Ortungsdienst", article: "der", translation: "location tracking service", category: "Datenschutz & Privatsphäre" },
  { word: "Speicherfrist", article: "die", translation: "data retention period", category: "Datenschutz & Privatsphäre" },
  { word: "Cookie-Einwilligung", article: "die", translation: "cookie consent", category: "Datenschutz & Privatsphäre" },
  { word: "Auskunftsrecht", article: "das", translation: "right to access (data)", category: "Datenschutz & Privatsphäre" },

  // Verbraucherverhalten
  { word: "Kaufentscheidung", article: "die", translation: "purchasing decision", category: "Verbraucherverhalten" },
  { word: "Kaufverhalten", article: "das", translation: "purchasing behavior", category: "Verbraucherverhalten" },
  { word: "Impulskauf", article: "der", translation: "impulse purchase", category: "Verbraucherverhalten" },
  { word: "Markentreue", article: "die", translation: "brand loyalty", category: "Verbraucherverhalten" },
  { word: "Preisvergleich", article: "der", translation: "price comparison", category: "Verbraucherverhalten" },
  { word: "Konsumverhalten", article: "das", translation: "consumption behavior", category: "Verbraucherverhalten" },
  { word: "Kaufkraftverlust", article: "der", translation: "loss of purchasing power", category: "Verbraucherverhalten" },
  { word: "Produktwahrnehmung", article: "die", translation: "product perception", category: "Verbraucherverhalten" },
  { word: "Werbewirkung", article: "die", translation: "advertising effect", category: "Verbraucherverhalten" },
  { word: "Kaufreue", article: "die", translation: "buyer's remorse", category: "Verbraucherverhalten" },
  { word: "Verbraucherschutzverband", article: "der", translation: "consumer protection association", category: "Verbraucherverhalten" },
  { word: "Bewertungsportal", article: "das", translation: "review platform", category: "Verbraucherverhalten" },
  { word: "Kundenbindung", article: "die", translation: "customer retention", category: "Verbraucherverhalten" },
  { word: "Kaufanreiz", article: "der", translation: "purchase incentive", category: "Verbraucherverhalten" },
  { word: "Statuskauf", article: "der", translation: "status purchase", category: "Verbraucherverhalten" },

  // Werbepsychologie
  { word: "Werbebotschaft", article: "die", translation: "advertising message", category: "Werbepsychologie" },
  { word: "Zielgruppenansprache", article: "die", translation: "target-audience appeal", category: "Werbepsychologie" },
  { word: "Konsumreiz", article: "der", translation: "consumer stimulus", category: "Werbepsychologie" },
  { word: "Verkaufsförderung", article: "die", translation: "sales promotion", category: "Werbepsychologie" },
  { word: "Aufmerksamkeitseffekt", article: "der", translation: "attention-grabbing effect", category: "Werbepsychologie" },
  { word: "Emotionalisierung", article: "die", translation: "emotionalization (marketing)", category: "Werbepsychologie" },
  { word: "Wiedererkennungswert", article: "der", translation: "recognition value", category: "Werbepsychologie" },
  { word: "Verkaufstrick", article: "der", translation: "sales trick", category: "Werbepsychologie" },
  { word: "Beeinflussung", article: "die", translation: "influence", category: "Werbepsychologie" },
  { word: "Werbebranche", article: "die", translation: "advertising industry", category: "Werbepsychologie" },
  { word: "Konsumverführung", article: "die", translation: "consumer temptation", category: "Werbepsychologie" },
  { word: "Slogan", article: "der", translation: "slogan", category: "Werbepsychologie" },
  { word: "Produktplatzierung", article: "die", translation: "product placement", category: "Werbepsychologie" },
  { word: "Werbepause", article: "die", translation: "commercial break", category: "Werbepsychologie" },
  { word: "Influencer-Marketing", article: "das", translation: "influencer marketing", category: "Werbepsychologie" },

  // Konsumkultur
  { word: "Prestigekonsum", article: "das", translation: "prestige consumption", category: "Konsumkultur" },
  { word: "Markenbewusstsein", article: "das", translation: "brand consciousness", category: "Konsumkultur" },
  { word: "Konsumzwang", article: "der", translation: "compulsion to consume", category: "Konsumkultur" },
  { word: "Luxusgut", article: "das", translation: "luxury good", category: "Konsumkultur" },
  { word: "Massenkonsum", article: "der", translation: "mass consumption", category: "Konsumkultur" },
  { word: "Wegwerfmentalität", article: "die", translation: "throwaway mentality", category: "Konsumkultur" },
  { word: "Shoppingerlebnis", article: "das", translation: "shopping experience", category: "Konsumkultur" },
  { word: "Konsumrausch", article: "der", translation: "buying frenzy", category: "Konsumkultur" },
  { word: "Prestigeobjekt", article: "das", translation: "prestige object", category: "Konsumkultur" },
  { word: "Wohlstandsgesellschaft", article: "die", translation: "affluent society", category: "Konsumkultur" },
  { word: "Verschwendungssucht", article: "die", translation: "addiction to waste/excess", category: "Konsumkultur" },
  { word: "Minimalismusbewegung", article: "die", translation: "minimalism movement", category: "Konsumkultur" },
  { word: "Konsumverzicht", article: "der", translation: "consumer abstinence", category: "Konsumkultur" },
  { word: "Statusdruck", article: "der", translation: "status pressure", category: "Konsumkultur" },
  { word: "Neid", article: "der", translation: "envy", category: "Konsumkultur" },

  // Interkulturelle Kommunikation
  { word: "Kulturverständigung", article: "die", translation: "cross-cultural understanding", category: "Interkulturelle Kommunikation" },
  { word: "Anpassungsschwierigkeit", article: "die", translation: "difficulty adapting", category: "Interkulturelle Kommunikation" },
  { word: "Verständigungsproblem", article: "das", translation: "communication problem", category: "Interkulturelle Kommunikation" },
  { word: "Umgangsform", article: "die", translation: "manner/etiquette", category: "Interkulturelle Kommunikation" },
  { word: "Fettnäpfchen", article: "das", translation: "social faux pas", category: "Interkulturelle Kommunikation" },
  { word: "Höflichkeitsnorm", article: "die", translation: "politeness norm", category: "Interkulturelle Kommunikation" },
  { word: "Kulturunterschied", article: "der", translation: "cultural difference", category: "Interkulturelle Kommunikation" },
  { word: "Anpassungsdruck", article: "der", translation: "pressure to assimilate", category: "Interkulturelle Kommunikation" },
  { word: "Wertevermittlung", article: "die", translation: "transmission of values", category: "Interkulturelle Kommunikation" },
  { word: "Kulturvermittler", article: "der", translation: "cultural mediator", category: "Interkulturelle Kommunikation" },
  { word: "Fremdverstehen", article: "das", translation: "understanding of the foreign/other", category: "Interkulturelle Kommunikation" },
  { word: "Weltoffenheit", article: "die", translation: "cosmopolitanism/open-mindedness", category: "Interkulturelle Kommunikation" },
  { word: "Kulturkompetenz", article: "die", translation: "cultural competence", category: "Interkulturelle Kommunikation" },
  { word: "Gastfreundlichkeit", article: "die", translation: "hospitality", category: "Interkulturelle Kommunikation" },
  { word: "Toleranzgrenze", article: "die", translation: "limit of tolerance", category: "Interkulturelle Kommunikation" },

  // Emotionale Bildung
  { word: "Gefühlsregung", article: "die", translation: "emotional stirring", category: "Emotionale Bildung" },
  { word: "Emotionserkennung", article: "die", translation: "emotion recognition", category: "Emotionale Bildung" },
  { word: "Gefühlsausdruck", article: "der", translation: "expression of feeling", category: "Emotionale Bildung" },
  { word: "Selbstwahrnehmung", article: "die", translation: "self-perception", category: "Emotionale Bildung" },
  { word: "Emotionsregulation", article: "die", translation: "emotion regulation", category: "Emotionale Bildung" },
  { word: "Gefühlskälte", article: "die", translation: "emotional coldness", category: "Emotionale Bildung" },
  { word: "Empathiefähigkeit", article: "die", translation: "capacity for empathy", category: "Emotionale Bildung" },
  { word: "Gefühlsleben", article: "das", translation: "emotional life", category: "Emotionale Bildung" },
  { word: "Emotionsarbeit", article: "die", translation: "emotional labor", category: "Emotionale Bildung" },
  { word: "Gefühlsstau", article: "der", translation: "buildup of suppressed emotion", category: "Emotionale Bildung" },
  { word: "Herzenswärme", article: "die", translation: "warmth of heart", category: "Emotionale Bildung" },
  { word: "Mitgefühl", article: "das", translation: "compassion", category: "Emotionale Bildung" },
  { word: "Gefühlsausbruch", article: "der", translation: "emotional outburst", category: "Emotionale Bildung" },
  { word: "Verletzlichkeit", article: "die", translation: "vulnerability", category: "Emotionale Bildung" },
  { word: "Selbstoffenbarung", article: "die", translation: "self-disclosure", category: "Emotionale Bildung" },

  // Konfliktmanagement
  { word: "Konfliktgespräch", article: "das", translation: "conflict-resolution conversation", category: "Konfliktmanagement" },
  { word: "Streitschlichtung", article: "die", translation: "dispute resolution", category: "Konfliktmanagement" },
  { word: "Interessenabwägung", article: "die", translation: "weighing of interests", category: "Konfliktmanagement" },
  { word: "Konfliktlösungsstrategie", article: "die", translation: "conflict-resolution strategy", category: "Konfliktmanagement" },
  { word: "Kompromisslösung", article: "die", translation: "compromise solution", category: "Konfliktmanagement" },
  { word: "Auseinandersetzung", article: "die", translation: "dispute/confrontation", category: "Konfliktmanagement" },
  { word: "Konfliktvermeidung", article: "die", translation: "conflict avoidance", category: "Konfliktmanagement" },
  { word: "Klärungsprozess", article: "der", translation: "clarification process", category: "Konfliktmanagement" },
  { word: "Streitgespräch", article: "das", translation: "argument/dispute conversation", category: "Konfliktmanagement" },
  { word: "Kompromisslinie", article: "die", translation: "line of compromise", category: "Konfliktmanagement" },
  { word: "Schlichtungsstelle", article: "die", translation: "arbitration/mediation office", category: "Konfliktmanagement" },
  { word: "Konfliktsignal", article: "das", translation: "conflict signal", category: "Konfliktmanagement" },
  { word: "Gesprächsangebot", article: "das", translation: "offer to talk", category: "Konfliktmanagement" },
  { word: "Streitfrage", article: "die", translation: "disputed issue", category: "Konfliktmanagement" },
  { word: "Konfliktlinie", article: "die", translation: "fault line (of conflict)", category: "Konfliktmanagement" },

  // Verhandlungsführung
  { word: "Verhandlungstaktik", article: "die", translation: "negotiation tactic", category: "Verhandlungsführung" },
  { word: "Verhandlungspartner", article: "der", translation: "negotiating partner", category: "Verhandlungsführung" },
  { word: "Verhandlungsposition", article: "die", translation: "negotiating position", category: "Verhandlungsführung" },
  { word: "Einigungsversuch", article: "der", translation: "attempt at agreement", category: "Verhandlungsführung" },
  { word: "Verhandlungsmasse", article: "die", translation: "negotiation leverage/bargaining chips", category: "Verhandlungsführung" },
  { word: "Zugeständnis", article: "das", translation: "concession", category: "Verhandlungsführung" },
  { word: "Feilschen", article: "das", translation: "haggling", category: "Verhandlungsführung" },
  { word: "Verhandlungsabbruch", article: "der", translation: "breakdown of negotiations", category: "Verhandlungsführung" },
  { word: "Win-win-Situation", article: "die", translation: "win-win situation", category: "Verhandlungsführung" },
  { word: "Verhandlungsgrundlage", article: "die", translation: "basis for negotiation", category: "Verhandlungsführung" },
  { word: "Kompromissvorschlag", article: "der", translation: "compromise proposal", category: "Verhandlungsführung" },
  { word: "Verhandlungserfolg", article: "der", translation: "negotiation success", category: "Verhandlungsführung" },
  { word: "Verhandlungsblockade", article: "die", translation: "negotiation deadlock", category: "Verhandlungsführung" },
  { word: "Angebotspalette", article: "die", translation: "range of offers", category: "Verhandlungsführung" },
  { word: "Gegenangebot", article: "das", translation: "counteroffer", category: "Verhandlungsführung" },

  // Mediation & Schlichtung
  { word: "Schlichtungsverfahren", article: "das", translation: "arbitration procedure", category: "Mediation & Schlichtung" },
  { word: "Schiedsspruch", article: "der", translation: "arbitration award", category: "Mediation & Schlichtung" },
  { word: "Schlichtungsausschuss", article: "der", translation: "arbitration committee", category: "Mediation & Schlichtung" },
  { word: "Mediationssitzung", article: "die", translation: "mediation session", category: "Mediation & Schlichtung" },
  { word: "Streitbeilegung", article: "die", translation: "dispute settlement", category: "Mediation & Schlichtung" },
  { word: "Ausgleichsvorschlag", article: "der", translation: "proposal for settlement", category: "Mediation & Schlichtung" },
  { word: "Vermittlerrolle", article: "die", translation: "role of a mediator", category: "Mediation & Schlichtung" },
  { word: "Schlichtungsspruch", article: "der", translation: "arbitration ruling", category: "Mediation & Schlichtung" },
  { word: "Einigungsstelle", article: "die", translation: "settlement/mediation board", category: "Mediation & Schlichtung" },
  { word: "Konfliktmoderation", article: "die", translation: "conflict moderation", category: "Mediation & Schlichtung" },
  { word: "Gütetermin", article: "der", translation: "settlement hearing", category: "Mediation & Schlichtung" },
  { word: "Mediator", article: "der", translation: "mediator", category: "Mediation & Schlichtung" },
  { word: "Verständigungsversuch", article: "der", translation: "attempt at mutual understanding", category: "Mediation & Schlichtung" },
  { word: "Ausgleichszahlung", article: "die", translation: "compensation payment", category: "Mediation & Schlichtung" },
  { word: "Interessenausgleichsverfahren", article: "das", translation: "process of reconciling interests", category: "Mediation & Schlichtung" },

  // Zivilgesellschaft (vertieft)
  { word: "Bürgerbeteiligung", article: "die", translation: "citizen participation", category: "Zivilgesellschaft (vertieft)" },
  { word: "Basisdemokratie", article: "die", translation: "grassroots democracy", category: "Zivilgesellschaft (vertieft)" },
  { word: "Interessengruppe", article: "die", translation: "interest group", category: "Zivilgesellschaft (vertieft)" },
  { word: "Protestbewegung", article: "die", translation: "protest movement", category: "Zivilgesellschaft (vertieft)" },
  { word: "Bürgerforum", article: "das", translation: "citizens' forum", category: "Zivilgesellschaft (vertieft)" },
  { word: "Petitionsrecht", article: "das", translation: "right to petition", category: "Zivilgesellschaft (vertieft)" },
  { word: "Nichtregierungsorganisation", article: "die", translation: "non-governmental organization", category: "Zivilgesellschaft (vertieft)" },
  { word: "Gemeinwohl", article: "das", translation: "common good", category: "Zivilgesellschaft (vertieft)" },
  { word: "Widerstandsgeist", article: "der", translation: "spirit of resistance", category: "Zivilgesellschaft (vertieft)" },
  { word: "Basisinitiative", article: "die", translation: "grassroots initiative", category: "Zivilgesellschaft (vertieft)" },
  { word: "Mitbestimmung", article: "die", translation: "co-determination/participation", category: "Zivilgesellschaft (vertieft)" },
  { word: "Protestkultur", article: "die", translation: "culture of protest", category: "Zivilgesellschaft (vertieft)" },
  { word: "Unterschriftenaktion", article: "die", translation: "signature campaign", category: "Zivilgesellschaft (vertieft)" },
  { word: "Bürgerengagement", article: "das", translation: "citizen engagement", category: "Zivilgesellschaft (vertieft)" },
  { word: "Beteiligungsprozess", article: "der", translation: "participation process", category: "Zivilgesellschaft (vertieft)" },

  // Ehrenamtliches Engagement (vertieft)
  { word: "Freiwilligenarbeit", article: "die", translation: "volunteer work", category: "Ehrenamtliches Engagement (vertieft)" },
  { word: "Ehrenamtskultur", article: "die", translation: "culture of volunteering", category: "Ehrenamtliches Engagement (vertieft)" },
  { word: "Spendenbereitschaft", article: "die", translation: "willingness to donate", category: "Ehrenamtliches Engagement (vertieft)" },
  { word: "Engagementbereitschaft", article: "die", translation: "willingness to get involved", category: "Ehrenamtliches Engagement (vertieft)" },
  { word: "Freiwilligendienst", article: "der", translation: "volunteer service", category: "Ehrenamtliches Engagement (vertieft)" },
  { word: "Gemeinnützigkeitsstatus", article: "der", translation: "charitable status", category: "Ehrenamtliches Engagement (vertieft)" },
  { word: "Vereinsvorstand", article: "der", translation: "club board/committee", category: "Ehrenamtliches Engagement (vertieft)" },
  { word: "Nachbarschaftshilfe", article: "die", translation: "neighborly help", category: "Ehrenamtliches Engagement (vertieft)" },
  { word: "Ehrenamtskoordinator", article: "der", translation: "volunteer coordinator", category: "Ehrenamtliches Engagement (vertieft)" },
  { word: "Sachspende", article: "die", translation: "donation in kind", category: "Ehrenamtliches Engagement (vertieft)" },
  { word: "Hilfsbereitschaft", article: "die", translation: "willingness to help", category: "Ehrenamtliches Engagement (vertieft)" },
  { word: "Gemeinschaftsprojekt", article: "das", translation: "community project", category: "Ehrenamtliches Engagement (vertieft)" },
  { word: "Sozialpraktikum", article: "das", translation: "social work internship", category: "Ehrenamtliches Engagement (vertieft)" },
  { word: "Spendenlauf", article: "der", translation: "charity run", category: "Ehrenamtliches Engagement (vertieft)" },
  { word: "Wohltätigkeitsveranstaltung", article: "die", translation: "charity event", category: "Ehrenamtliches Engagement (vertieft)" },

  // Soziale Gerechtigkeit
  { word: "Verteilungsungerechtigkeit", article: "die", translation: "distributive injustice", category: "Soziale Gerechtigkeit" },
  { word: "Bildungsgleichheit", article: "die", translation: "educational equality", category: "Soziale Gerechtigkeit" },
  { word: "Startchance", article: "die", translation: "starting opportunity", category: "Soziale Gerechtigkeit" },
  { word: "Sozialkluft", article: "die", translation: "social divide", category: "Soziale Gerechtigkeit" },
  { word: "Einkommensschere", article: "die", translation: "income gap", category: "Soziale Gerechtigkeit" },
  { word: "Gerechtigkeitslücke", article: "die", translation: "justice gap", category: "Soziale Gerechtigkeit" },
  { word: "Teilhabechance", article: "die", translation: "chance to participate (in society)", category: "Soziale Gerechtigkeit" },
  { word: "Ausgrenzungserfahrung", article: "die", translation: "experience of exclusion", category: "Soziale Gerechtigkeit" },
  { word: "Solidarprinzip", article: "das", translation: "principle of solidarity", category: "Soziale Gerechtigkeit" },
  { word: "Ungleichverteilung", article: "die", translation: "unequal distribution", category: "Soziale Gerechtigkeit" },
  { word: "Privilegierung", article: "die", translation: "privileging (favorable treatment)", category: "Soziale Gerechtigkeit" },
  { word: "Benachteiligung", article: "die", translation: "disadvantage/discrimination", category: "Soziale Gerechtigkeit" },
  { word: "Umverteilungsdebatte", article: "die", translation: "redistribution debate", category: "Soziale Gerechtigkeit" },
  { word: "Aufstiegschance", article: "die", translation: "chance of upward mobility", category: "Soziale Gerechtigkeit" },
  { word: "Auffangnetz", article: "das", translation: "safety net", category: "Soziale Gerechtigkeit" },

  // Chancengleichheit
  { word: "Bildungschancengleichheit", article: "die", translation: "equality of educational opportunity", category: "Chancengleichheit" },
  { word: "Geschlechtergerechtigkeit", article: "die", translation: "gender equity", category: "Chancengleichheit" },
  { word: "Lohngleichheit", article: "die", translation: "pay equality", category: "Chancengleichheit" },
  { word: "Frauenquote", article: "die", translation: "gender quota", category: "Chancengleichheit" },
  { word: "Karrierebremse", article: "die", translation: "career hindrance/glass-ceiling effect", category: "Chancengleichheit" },
  { word: "Aufstiegsbarriere", article: "die", translation: "barrier to advancement", category: "Chancengleichheit" },
  { word: "Herkunftsbenachteiligung", article: "die", translation: "disadvantage due to background", category: "Chancengleichheit" },
  { word: "Zugangsbarriere", article: "die", translation: "access barrier", category: "Chancengleichheit" },
  { word: "Fördermaßnahme", article: "die", translation: "support/promotion measure", category: "Chancengleichheit" },
  { word: "Diversitätsförderung", article: "die", translation: "diversity promotion", category: "Chancengleichheit" },
  { word: "Gleichstellungspolitik", article: "die", translation: "equal-opportunity policy", category: "Chancengleichheit" },
  { word: "Inklusionsquote", article: "die", translation: "inclusion quota", category: "Chancengleichheit" },
  { word: "Barriereabbau", article: "der", translation: "removal of barriers", category: "Chancengleichheit" },
  { word: "Repräsentationslücke", article: "die", translation: "representation gap", category: "Chancengleichheit" },
  { word: "Aufstiegsgerechtigkeit", article: "die", translation: "fairness in upward mobility", category: "Chancengleichheit" },

  // Generationengerechtigkeit
  { word: "Generationenvertrag", article: "der", translation: "intergenerational contract", category: "Generationengerechtigkeit" },
  { word: "Generationenspannung", article: "die", translation: "intergenerational tension", category: "Generationengerechtigkeit" },
  { word: "Zukunftslast", article: "die", translation: "burden on the future", category: "Generationengerechtigkeit" },
  { word: "Rentenlücke", article: "die", translation: "pension gap", category: "Generationengerechtigkeit" },
  { word: "Nachhaltigkeitsprinzip", article: "das", translation: "principle of sustainability", category: "Generationengerechtigkeit" },
  { word: "Zukunftsverantwortung", article: "die", translation: "responsibility toward the future", category: "Generationengerechtigkeit" },
  { word: "Erbenlast", article: "die", translation: "burden of inheritance (metaphorical)", category: "Generationengerechtigkeit" },
  { word: "Generationenausgleich", article: "der", translation: "intergenerational balance", category: "Generationengerechtigkeit" },
  { word: "Zukunftsfähigkeit", article: "die", translation: "future viability", category: "Generationengerechtigkeit" },
  { word: "Verschuldungsgrad", article: "der", translation: "level of indebtedness", category: "Generationengerechtigkeit" },
  { word: "Nachfolgegeneration", article: "die", translation: "succeeding generation", category: "Generationengerechtigkeit" },
  { word: "Ressourcenverteilung", article: "die", translation: "distribution of resources", category: "Generationengerechtigkeit" },
  { word: "Zukunftsschuld", article: "die", translation: "debt owed to the future", category: "Generationengerechtigkeit" },
  { word: "Generationenbilanz", article: "die", translation: "generational balance sheet", category: "Generationengerechtigkeit" },
  { word: "Altersvorsorgelücke", article: "die", translation: "retirement savings gap", category: "Generationengerechtigkeit" },

  // Demografischer Wandel
  { word: "Bevölkerungsentwicklung", article: "die", translation: "population development", category: "Demografischer Wandel" },
  { word: "Geburtenrate", article: "die", translation: "birth rate", category: "Demografischer Wandel" },
  { word: "Alterspyramide", article: "die", translation: "age pyramid", category: "Demografischer Wandel" },
  { word: "Überalterung", article: "die", translation: "population aging", category: "Demografischer Wandel" },
  { word: "Bevölkerungsrückgang", article: "der", translation: "population decline", category: "Demografischer Wandel" },
  { word: "Geburtenrückgang", article: "der", translation: "declining birth rate", category: "Demografischer Wandel" },
  { word: "Bevölkerungswachstum", article: "das", translation: "population growth", category: "Demografischer Wandel" },
  { word: "Altersstruktur", article: "die", translation: "age structure", category: "Demografischer Wandel" },
  { word: "Demografieforschung", article: "die", translation: "demographic research", category: "Demografischer Wandel" },
  { word: "Bevölkerungsdichte", article: "die", translation: "population density", category: "Demografischer Wandel" },
  { word: "Fachkräftebedarf", article: "der", translation: "demand for skilled workers", category: "Demografischer Wandel" },
  { word: "Rentnerquote", article: "die", translation: "proportion of pensioners", category: "Demografischer Wandel" },
  { word: "Erwerbsbevölkerung", article: "die", translation: "working-age population", category: "Demografischer Wandel" },
  { word: "Bevölkerungsprognose", article: "die", translation: "population forecast", category: "Demografischer Wandel" },
  { word: "Generationenverhältnis", article: "das", translation: "ratio between generations", category: "Demografischer Wandel" },

  // Landflucht & ländlicher Raum
  { word: "Landflucht", article: "die", translation: "rural exodus", category: "Landflucht & ländlicher Raum" },
  { word: "Dorfsterben", article: "das", translation: "decline of villages", category: "Landflucht & ländlicher Raum" },
  { word: "Versorgungsengpass", article: "der", translation: "supply bottleneck", category: "Landflucht & ländlicher Raum" },
  { word: "Nahversorgung", article: "die", translation: "local supply/amenities", category: "Landflucht & ländlicher Raum" },
  { word: "Landbevölkerung", article: "die", translation: "rural population", category: "Landflucht & ländlicher Raum" },
  { word: "Strukturschwäche", article: "die", translation: "structural weakness (economic)", category: "Landflucht & ländlicher Raum" },
  { word: "Anbindung", article: "die", translation: "connection (transport link)", category: "Landflucht & ländlicher Raum" },
  { word: "Entvölkerung", article: "die", translation: "depopulation", category: "Landflucht & ländlicher Raum" },
  { word: "Abwanderung", article: "die", translation: "outmigration", category: "Landflucht & ländlicher Raum" },
  { word: "Regionalentwicklung", article: "die", translation: "regional development", category: "Landflucht & ländlicher Raum" },
  { word: "Provinzialität", article: "die", translation: "provincialism", category: "Landflucht & ländlicher Raum" },
  { word: "Landleben", article: "das", translation: "rural life", category: "Landflucht & ländlicher Raum" },
  { word: "Strukturförderung", article: "die", translation: "structural funding", category: "Landflucht & ländlicher Raum" },
  { word: "Provinz", article: "die", translation: "rural area/province", category: "Landflucht & ländlicher Raum" },
  { word: "Dorfgemeinschaft", article: "die", translation: "village community", category: "Landflucht & ländlicher Raum" },

  // Wohnungspolitik
  { word: "Wohnungsnot", article: "die", translation: "housing shortage", category: "Wohnungspolitik" },
  { word: "Mietendeckel", article: "der", translation: "rent cap", category: "Wohnungspolitik" },
  { word: "Sozialwohnung", article: "die", translation: "social housing unit", category: "Wohnungspolitik" },
  { word: "Wohnungsbaupolitik", article: "die", translation: "housing construction policy", category: "Wohnungspolitik" },
  { word: "Bestandsschutz", article: "der", translation: "protection of existing housing", category: "Wohnungspolitik" },
  { word: "Neubauquote", article: "die", translation: "new-build quota", category: "Wohnungspolitik" },
  { word: "Wohnungsleerstand", article: "der", translation: "housing vacancy", category: "Wohnungspolitik" },
  { word: "Wohnraumförderung", article: "die", translation: "housing support/subsidy", category: "Wohnungspolitik" },
  { word: "Obdachlosigkeit", article: "die", translation: "homelessness", category: "Wohnungspolitik" },
  { word: "Mietspiegel", article: "der", translation: "rent index", category: "Wohnungspolitik" },
  { word: "Wohnungsmarkt", article: "der", translation: "housing market", category: "Wohnungspolitik" },
  { word: "Zweckentfremdung", article: "die", translation: "misuse of housing (e.g., as vacation rental)", category: "Wohnungspolitik" },
  { word: "Baulandmangel", article: "der", translation: "shortage of building land", category: "Wohnungspolitik" },
  { word: "Wohnkosten", article: "die", translation: "housing costs", category: "Wohnungspolitik" },
  { word: "Genossenschaftswohnung", article: "die", translation: "cooperative housing unit", category: "Wohnungspolitik" },

  // Verkehrswende
  { word: "Verkehrsplanung", article: "die", translation: "transport planning", category: "Verkehrswende" },
  { word: "Mobilitätswandel", article: "der", translation: "shift in mobility patterns", category: "Verkehrswende" },
  { word: "Radverkehr", article: "der", translation: "bicycle traffic", category: "Verkehrswende" },
  { word: "Verkehrsverlagerung", article: "die", translation: "modal shift (in transport)", category: "Verkehrswende" },
  { word: "Emissionsfreiheit", article: "die", translation: "zero-emission status", category: "Verkehrswende" },
  { word: "Fußverkehr", article: "der", translation: "pedestrian traffic", category: "Verkehrswende" },
  { word: "Verkehrsberuhigung", article: "die", translation: "traffic calming", category: "Verkehrswende" },
  { word: "Mobilitätskonzept", article: "das", translation: "mobility concept", category: "Verkehrswende" },
  { word: "Pendlerverkehr", article: "der", translation: "commuter traffic", category: "Verkehrswende" },
  { word: "Verkehrsinfarkt", article: "der", translation: "traffic gridlock", category: "Verkehrswende" },
  { word: "Ladeinfrastruktur", article: "die", translation: "charging infrastructure", category: "Verkehrswende" },
  { word: "Verkehrsverbund", article: "der", translation: "transport association/network", category: "Verkehrswende" },
  { word: "Sharing-Angebot", article: "das", translation: "sharing service (car/bike)", category: "Verkehrswende" },
  { word: "Verkehrssicherheit", article: "die", translation: "traffic safety", category: "Verkehrswende" },
  { word: "Mobilitätsgarantie", article: "die", translation: "mobility guarantee", category: "Verkehrswende" },

  // Energiewende
  { word: "Energiewendepolitik", article: "die", translation: "energy-transition policy", category: "Energiewende" },
  { word: "Stromtrasse", article: "die", translation: "power transmission line", category: "Energiewende" },
  { word: "Netzausbau", article: "der", translation: "grid expansion", category: "Energiewende" },
  { word: "Speicherkapazität", article: "die", translation: "storage capacity", category: "Energiewende" },
  { word: "Energieabhängigkeit", article: "die", translation: "energy dependency", category: "Energiewende" },
  { word: "Energieversorgungssicherheit", article: "die", translation: "security of energy supply", category: "Energiewende" },
  { word: "Fördermittel", article: "die", translation: "funding/subsidies", category: "Energiewende" },
  { word: "Energiepreisentwicklung", article: "die", translation: "energy price trend", category: "Energiewende" },
  { word: "Übergangstechnologie", article: "die", translation: "transitional technology", category: "Energiewende" },
  { word: "Energiemix", article: "der", translation: "energy mix", category: "Energiewende" },
  { word: "Dezentralisierung", article: "die", translation: "decentralization", category: "Energiewende" },
  { word: "Netzstabilität", article: "die", translation: "grid stability", category: "Energiewende" },
  { word: "Ausbauziel", article: "das", translation: "expansion target", category: "Energiewende" },
  { word: "Energiearmut", article: "die", translation: "energy poverty", category: "Energiewende" },
  { word: "Umstellungsphase", article: "die", translation: "transition phase", category: "Energiewende" },

  // Ressourcenmanagement
  { word: "Ressourcenknappheit", article: "die", translation: "resource scarcity", category: "Ressourcenmanagement" },
  { word: "Rohstoffabbau", article: "der", translation: "raw material extraction", category: "Ressourcenmanagement" },
  { word: "Bestandsaufnahme", article: "die", translation: "inventory/stocktaking", category: "Ressourcenmanagement" },
  { word: "Kapazitätsplanung", article: "die", translation: "capacity planning", category: "Ressourcenmanagement" },
  { word: "Verbrauchssteuerung", article: "die", translation: "consumption control", category: "Ressourcenmanagement" },
  { word: "Ressourcenzuteilung", article: "die", translation: "resource allocation", category: "Ressourcenmanagement" },
  { word: "Vorratshaltung", article: "die", translation: "stockpiling", category: "Ressourcenmanagement" },
  { word: "Engpassmanagement", article: "das", translation: "bottleneck management", category: "Ressourcenmanagement" },
  { word: "Nutzungsgrad", article: "der", translation: "utilization rate", category: "Ressourcenmanagement" },
  { word: "Bedarfsplanung", article: "die", translation: "needs-based planning", category: "Ressourcenmanagement" },
  { word: "Ressourcenoptimierung", article: "die", translation: "resource optimization", category: "Ressourcenmanagement" },
  { word: "Verschwendungsvermeidung", article: "die", translation: "waste avoidance", category: "Ressourcenmanagement" },
  { word: "Rohstoffpreis", article: "der", translation: "raw material price", category: "Ressourcenmanagement" },
  { word: "Verteilungsschlüssel", article: "der", translation: "distribution key/formula", category: "Ressourcenmanagement" },
  { word: "Bewirtschaftung", article: "die", translation: "management/husbandry (of resources)", category: "Ressourcenmanagement" },

  // Risikomanagement
  { word: "Risikobewertung", article: "die", translation: "risk assessment", category: "Risikomanagement" },
  { word: "Risikofaktor", article: "der", translation: "risk factor", category: "Risikomanagement" },
  { word: "Absicherungsstrategie", article: "die", translation: "hedging strategy", category: "Risikomanagement" },
  { word: "Schadensbegrenzung", article: "die", translation: "damage limitation", category: "Risikomanagement" },
  { word: "Vorsichtsmaßnahme", article: "die", translation: "precautionary measure", category: "Risikomanagement" },
  { word: "Restrisiko", article: "das", translation: "residual risk", category: "Risikomanagement" },
  { word: "Risikoabschätzung", article: "die", translation: "risk estimation", category: "Risikomanagement" },
  { word: "Eintrittswahrscheinlichkeit", article: "die", translation: "probability of occurrence", category: "Risikomanagement" },
  { word: "Schadenspotenzial", article: "das", translation: "damage potential", category: "Risikomanagement" },
  { word: "Frühwarnsystem", article: "das", translation: "early warning system", category: "Risikomanagement" },
  { word: "Risikoklasse", article: "die", translation: "risk class", category: "Risikomanagement" },
  { word: "Notfallvorsorge", article: "die", translation: "emergency preparedness", category: "Risikomanagement" },
  { word: "Ausfallrisiko", article: "das", translation: "default risk", category: "Risikomanagement" },
  { word: "Gefährdungslage", article: "die", translation: "hazard situation", category: "Risikomanagement" },
  { word: "Sicherheitspuffer", article: "der", translation: "safety buffer/margin", category: "Risikomanagement" },

  // Versicherungswesen (vertieft)
  { word: "Versicherungsschutz", article: "der", translation: "insurance coverage", category: "Versicherungswesen (vertieft)" },
  { word: "Versicherungsvertrag", article: "der", translation: "insurance contract", category: "Versicherungswesen (vertieft)" },
  { word: "Risikoprüfung", article: "die", translation: "risk assessment (insurance)", category: "Versicherungswesen (vertieft)" },
  { word: "Schadensmeldung", article: "die", translation: "insurance claim report", category: "Versicherungswesen (vertieft)" },
  { word: "Schadensregulierung", article: "die", translation: "claims settlement", category: "Versicherungswesen (vertieft)" },
  { word: "Vertragslücke", article: "die", translation: "contract/coverage gap", category: "Versicherungswesen (vertieft)" },
  { word: "Beitragssatz", article: "der", translation: "contribution rate", category: "Versicherungswesen (vertieft)" },
  { word: "Deckungssumme", article: "die", translation: "coverage amount", category: "Versicherungswesen (vertieft)" },
  { word: "Versicherungsnehmer", article: "der", translation: "policyholder", category: "Versicherungswesen (vertieft)" },
  { word: "Risikogemeinschaft", article: "die", translation: "community of risk (insurance pool)", category: "Versicherungswesen (vertieft)" },
  { word: "Prämienerhöhung", article: "die", translation: "premium increase", category: "Versicherungswesen (vertieft)" },
  { word: "Versicherungsfall", article: "der", translation: "insured event", category: "Versicherungswesen (vertieft)" },
  { word: "Ausschlussklausel", article: "die", translation: "exclusion clause", category: "Versicherungswesen (vertieft)" },
  { word: "Deckungslücke", article: "die", translation: "coverage gap", category: "Versicherungswesen (vertieft)" },
  { word: "Versicherungsmakler", article: "der", translation: "insurance broker", category: "Versicherungswesen (vertieft)" },

  // Steuerpolitik
  { word: "Steuerlast", article: "die", translation: "tax burden", category: "Steuerpolitik" },
  { word: "Steuervorteil", article: "der", translation: "tax advantage", category: "Steuerpolitik" },
  { word: "Steuerreform", article: "die", translation: "tax reform", category: "Steuerpolitik" },
  { word: "Steueraufkommen", article: "das", translation: "tax revenue", category: "Steuerpolitik" },
  { word: "Steuerprogression", article: "die", translation: "progressive taxation", category: "Steuerpolitik" },
  { word: "Steuerparadies", article: "das", translation: "tax haven", category: "Steuerpolitik" },
  { word: "Steuervermeidung", article: "die", translation: "tax avoidance", category: "Steuerpolitik" },
  { word: "Steuerbelastung", article: "die", translation: "tax burden/load", category: "Steuerpolitik" },
  { word: "Vermögenssteuer", article: "die", translation: "wealth tax", category: "Steuerpolitik" },
  { word: "Erbschaftssteuer", article: "die", translation: "inheritance tax", category: "Steuerpolitik" },
  { word: "Steuervergünstigung", article: "die", translation: "tax break", category: "Steuerpolitik" },
  { word: "Steuergerechtigkeit", article: "die", translation: "tax fairness", category: "Steuerpolitik" },
  { word: "Abgabenlast", article: "die", translation: "burden of levies/duties", category: "Steuerpolitik" },
  { word: "Steuerquote", article: "die", translation: "tax ratio/rate", category: "Steuerpolitik" },
  { word: "Steuerfahndung", article: "die", translation: "tax investigation authority", category: "Steuerpolitik" },

  // Sozialversicherung
  { word: "Rentenversicherung", article: "die", translation: "pension insurance", category: "Sozialversicherung" },
  { word: "Rentenbeitrag", article: "der", translation: "pension contribution", category: "Sozialversicherung" },
  { word: "Beitragsbemessungsgrenze", article: "die", translation: "contribution assessment ceiling", category: "Sozialversicherung" },
  { word: "Krankenversicherungsbeitrag", article: "der", translation: "health insurance contribution", category: "Sozialversicherung" },
  { word: "Pflichtversicherung", article: "die", translation: "mandatory insurance", category: "Sozialversicherung" },
  { word: "Versicherungspflicht", article: "die", translation: "insurance obligation", category: "Sozialversicherung" },
  { word: "Arbeitslosengeld", article: "das", translation: "unemployment benefit", category: "Sozialversicherung" },
  { word: "Sozialversicherungsbeitrag", article: "der", translation: "social security contribution", category: "Sozialversicherung" },
  { word: "Erwerbsminderungsrente", article: "die", translation: "disability pension", category: "Sozialversicherung" },
  { word: "Rentenanspruch", article: "der", translation: "pension entitlement", category: "Sozialversicherung" },
  { word: "Umlageverfahren", article: "das", translation: "pay-as-you-go system", category: "Sozialversicherung" },
  { word: "Beitragszahler", article: "der", translation: "contributor (to social insurance)", category: "Sozialversicherung" },
  { word: "Rentenkasse", article: "die", translation: "pension fund", category: "Sozialversicherung" },
  { word: "Sozialabgabe", article: "die", translation: "social security levy", category: "Sozialversicherung" },
  { word: "Versicherungsleistung", article: "die", translation: "insurance benefit", category: "Sozialversicherung" },

  // Rentenpolitik
  { word: "Rentenniveau", article: "das", translation: "pension level", category: "Rentenpolitik" },
  { word: "Rentenalter", article: "das", translation: "retirement age", category: "Rentenpolitik" },
  { word: "Altersarmut", article: "die", translation: "old-age poverty", category: "Rentenpolitik" },
  { word: "Betriebsrente", article: "die", translation: "occupational pension", category: "Rentenpolitik" },
  { word: "Rentenerhöhung", article: "die", translation: "pension increase", category: "Rentenpolitik" },
  { word: "Frührente", article: "die", translation: "early retirement pension", category: "Rentenpolitik" },
  { word: "Rentenreform", article: "die", translation: "pension reform", category: "Rentenpolitik" },
  { word: "Rentensystem", article: "das", translation: "pension system", category: "Rentenpolitik" },
  { word: "Vorsorgeaufwand", article: "der", translation: "retirement-provision expenditure", category: "Rentenpolitik" },
  { word: "Zusatzrente", article: "die", translation: "supplementary pension", category: "Rentenpolitik" },
  { word: "Rentenanpassung", article: "die", translation: "pension adjustment", category: "Rentenpolitik" },
  { word: "Ruhestandsplanung", article: "die", translation: "retirement planning", category: "Rentenpolitik" },
  { word: "Altersgrenze", article: "die", translation: "age limit", category: "Rentenpolitik" },
  { word: "Rentenlast", article: "die", translation: "pension burden", category: "Rentenpolitik" },
  { word: "Betriebsrentenanspruch", article: "der", translation: "occupational pension entitlement", category: "Rentenpolitik" },

  // Gesundheitspolitik
  { word: "Gesundheitsversorgung", article: "die", translation: "healthcare provision", category: "Gesundheitspolitik" },
  { word: "Krankenhausfinanzierung", article: "die", translation: "hospital financing", category: "Gesundheitspolitik" },
  { word: "Ärztemangel", article: "der", translation: "shortage of doctors", category: "Gesundheitspolitik" },
  { word: "Gesundheitsreform", article: "die", translation: "healthcare reform", category: "Gesundheitspolitik" },
  { word: "Patientenrecht", article: "das", translation: "patient right", category: "Gesundheitspolitik" },
  { word: "Behandlungskosten", article: "die", translation: "treatment costs", category: "Gesundheitspolitik" },
  { word: "Zwei-Klassen-Medizin", article: "die", translation: "two-tier healthcare system", category: "Gesundheitspolitik" },
  { word: "Gesundheitsausgabe", article: "die", translation: "health expenditure", category: "Gesundheitspolitik" },
  { word: "Kassenleistung", article: "die", translation: "health-insurance-covered service", category: "Gesundheitspolitik" },
  { word: "Praxisgebühr", article: "die", translation: "practice fee (doctor's visit)", category: "Gesundheitspolitik" },
  { word: "Versorgungsqualität", article: "die", translation: "quality of care", category: "Gesundheitspolitik" },
  { word: "Klinikschließung", article: "die", translation: "hospital closure", category: "Gesundheitspolitik" },
  { word: "Landarztmangel", article: "der", translation: "shortage of rural doctors", category: "Gesundheitspolitik" },
  { word: "Gesundheitsvorsorgesystem", article: "das", translation: "preventive healthcare system", category: "Gesundheitspolitik" },
  { word: "Patientenversorgung", article: "die", translation: "patient care", category: "Gesundheitspolitik" },

  // Pflegepolitik
  { word: "Pflegebedürftige", article: "der", translation: "person in need of care", category: "Pflegepolitik" },
  { word: "Pflegeversicherung", article: "die", translation: "long-term care insurance", category: "Pflegepolitik" },
  { word: "Pflegenotstand", article: "der", translation: "care crisis", category: "Pflegepolitik" },
  { word: "Pflegegrad", article: "der", translation: "care level", category: "Pflegepolitik" },
  { word: "Hauskrankenpflege", article: "die", translation: "home care", category: "Pflegepolitik" },
  { word: "Pflegepersonal", article: "das", translation: "nursing/care staff", category: "Pflegepolitik" },
  { word: "Pflegeheimplatz", article: "der", translation: "nursing-home place", category: "Pflegepolitik" },
  { word: "Angehörigenpflege", article: "die", translation: "care by family members", category: "Pflegepolitik" },
  { word: "Pflegekräftemangel", article: "der", translation: "shortage of care workers", category: "Pflegepolitik" },
  { word: "Betreuungsschlüssel", article: "der", translation: "staff-to-patient ratio", category: "Pflegepolitik" },
  { word: "Pflegezeit", article: "die", translation: "care leave (from work)", category: "Pflegepolitik" },
  { word: "Kurzzeitpflege", article: "die", translation: "short-term/respite care", category: "Pflegepolitik" },
  { word: "Pflegeleistung", article: "die", translation: "care benefit", category: "Pflegepolitik" },
  { word: "Demenzbetreuung", article: "die", translation: "dementia care", category: "Pflegepolitik" },
  { word: "Pflegestufe", article: "die", translation: "care grade", category: "Pflegepolitik" },

  // Familienpolitik (vertieft)
  { word: "Familienförderung", article: "die", translation: "family support/subsidy", category: "Familienpolitik (vertieft)" },
  { word: "Betreuungsangebot", article: "das", translation: "childcare provision", category: "Familienpolitik (vertieft)" },
  { word: "Familienausgleich", article: "der", translation: "family equalization (benefits)", category: "Familienpolitik (vertieft)" },
  { word: "Erziehungsgeld", article: "das", translation: "parental allowance", category: "Familienpolitik (vertieft)" },
  { word: "Betreuungsplatz", article: "der", translation: "childcare place", category: "Familienpolitik (vertieft)" },
  { word: "Familienmodell", article: "das", translation: "family model", category: "Familienpolitik (vertieft)" },
  { word: "Vereinbarkeit", article: "die", translation: "work-family compatibility", category: "Familienpolitik (vertieft)" },
  { word: "Alleinerziehendenquote", article: "die", translation: "proportion of single parents", category: "Familienpolitik (vertieft)" },
  { word: "Patchworkfamilie", article: "die", translation: "blended family", category: "Familienpolitik (vertieft)" },
  { word: "Familienlastenausgleich", article: "der", translation: "family burden equalization", category: "Familienpolitik (vertieft)" },
  { word: "Kinderbetreuungskosten", article: "die", translation: "childcare costs", category: "Familienpolitik (vertieft)" },
  { word: "Elterngeldanspruch", article: "der", translation: "entitlement to parental allowance", category: "Familienpolitik (vertieft)" },
  { word: "Familienzusammenführung", article: "die", translation: "family reunification", category: "Familienpolitik (vertieft)" },
  { word: "Erziehungsverantwortung", article: "die", translation: "parenting responsibility", category: "Familienpolitik (vertieft)" },
  { word: "Familiengründung", article: "die", translation: "starting a family", category: "Familienpolitik (vertieft)" },

  // Bildungsungleichheit
  { word: "Bildungsvererbung", article: "die", translation: "inheritance of educational status", category: "Bildungsungleichheit" },
  { word: "Herkunftsfaktor", article: "der", translation: "background factor", category: "Bildungsungleichheit" },
  { word: "Schulwahl", article: "die", translation: "school choice", category: "Bildungsungleichheit" },
  { word: "Leistungsschere", article: "die", translation: "achievement gap", category: "Bildungsungleichheit" },
  { word: "Bildungsbenachteiligung", article: "die", translation: "educational disadvantage", category: "Bildungsungleichheit" },
  { word: "Förderbedarf", article: "der", translation: "need for support/remediation", category: "Bildungsungleichheit" },
  { word: "Bildungsaufstieg", article: "der", translation: "educational advancement", category: "Bildungsungleichheit" },
  { word: "Nachhilfebedarf", article: "der", translation: "need for tutoring", category: "Bildungsungleichheit" },
  { word: "Startnachteil", article: "der", translation: "initial disadvantage", category: "Bildungsungleichheit" },
  { word: "Bildungsarmut", article: "die", translation: "educational poverty", category: "Bildungsungleichheit" },
  { word: "Leistungskluft", article: "die", translation: "achievement gap", category: "Bildungsungleichheit" },
  { word: "Elternhaus", article: "das", translation: "parental home/family background", category: "Bildungsungleichheit" },
  { word: "Aufstiegsschule", article: "die", translation: "school as a path to advancement", category: "Bildungsungleichheit" },
  { word: "Bildungsvererbbarkeit", article: "die", translation: "heritability of educational outcomes", category: "Bildungsungleichheit" },
  { word: "Chancenverteilung", article: "die", translation: "distribution of opportunity", category: "Bildungsungleichheit" },

  // Digitale Kluft
  { word: "Zugangsungleichheit", article: "die", translation: "unequal access", category: "Digitale Kluft" },
  { word: "Internetzugang", article: "der", translation: "internet access", category: "Digitale Kluft" },
  { word: "Medienausstattung", article: "die", translation: "media/device equipment", category: "Digitale Kluft" },
  { word: "Digitalisierungslücke", article: "die", translation: "digitalization gap", category: "Digitale Kluft" },
  { word: "Netzabdeckung", article: "die", translation: "network coverage", category: "Digitale Kluft" },
  { word: "Onlineteilhabe", article: "die", translation: "online participation", category: "Digitale Kluft" },
  { word: "Breitbandausbau", article: "der", translation: "broadband expansion", category: "Digitale Kluft" },
  { word: "Geräteausstattung", article: "die", translation: "device equipment", category: "Digitale Kluft" },
  { word: "Medienbildung", article: "die", translation: "media literacy education", category: "Digitale Kluft" },
  { word: "Onlineferne", article: "die", translation: "disconnection from online life", category: "Digitale Kluft" },
  { word: "Technikkompetenz", article: "die", translation: "technical competence", category: "Digitale Kluft" },
  { word: "Anschlussproblem", article: "das", translation: "connectivity problem", category: "Digitale Kluft" },
  { word: "Technikferne", article: "die", translation: "unfamiliarity with technology", category: "Digitale Kluft" },
  { word: "Generationenunterschied", article: "der", translation: "generational difference (in tech use)", category: "Digitale Kluft" },
  { word: "Nutzungskompetenz", article: "die", translation: "user competence", category: "Digitale Kluft" },

  // Meinungsbildung
  { word: "Meinungsbild", article: "das", translation: "picture of public opinion", category: "Meinungsbildung" },
  { word: "Meinungsführer", article: "der", translation: "opinion leader", category: "Meinungsbildung" },
  { word: "Meinungsumfrage", article: "die", translation: "opinion poll", category: "Meinungsbildung" },
  { word: "Meinungstrend", article: "der", translation: "opinion trend", category: "Meinungsbildung" },
  { word: "Massenmeinung", article: "die", translation: "mass/popular opinion", category: "Meinungsbildung" },
  { word: "Meinungsklima", article: "das", translation: "climate of opinion", category: "Meinungsbildung" },
  { word: "Meinungsspektrum", article: "das", translation: "spectrum of opinion", category: "Meinungsbildung" },
  { word: "Standpunktwechsel", article: "der", translation: "change of standpoint", category: "Meinungsbildung" },
  { word: "Diskursverschiebung", article: "die", translation: "shift in discourse", category: "Meinungsbildung" },
  { word: "Konsensbildung", article: "die", translation: "consensus building", category: "Meinungsbildung" },
  { word: "Mehrheitsmeinung", article: "die", translation: "majority opinion", category: "Meinungsbildung" },
  { word: "Minderheitenmeinung", article: "die", translation: "minority opinion", category: "Meinungsbildung" },
  { word: "Meinungsbildungsprozess", article: "der", translation: "process of forming opinion", category: "Meinungsbildung" },
  { word: "Debattenkultur", article: "die", translation: "culture of debate", category: "Meinungsbildung" },
  { word: "Grundhaltung", article: "die", translation: "basic attitude/stance", category: "Meinungsbildung" },

  // Propaganda & Desinformation
  { word: "Fehlinformation", article: "die", translation: "misinformation", category: "Propaganda & Desinformation" },
  { word: "Falschmeldung", article: "die", translation: "fake news report", category: "Propaganda & Desinformation" },
  { word: "Hetzkampagne", article: "die", translation: "smear campaign", category: "Propaganda & Desinformation" },
  { word: "Desinformationskampagne", article: "die", translation: "disinformation campaign", category: "Propaganda & Desinformation" },
  { word: "Verschwörungstheorie", article: "die", translation: "conspiracy theory", category: "Propaganda & Desinformation" },
  { word: "Meinungsmanipulation", article: "die", translation: "manipulation of opinion", category: "Propaganda & Desinformation" },
  { word: "Faktencheck", article: "der", translation: "fact-check", category: "Propaganda & Desinformation" },
  { word: "Hetzrede", article: "die", translation: "hate speech/inflammatory speech", category: "Propaganda & Desinformation" },
  { word: "Falschbehauptung", article: "die", translation: "false claim", category: "Propaganda & Desinformation" },
  { word: "Stimmungsmache", article: "die", translation: "agitation/whipping up sentiment", category: "Propaganda & Desinformation" },
  { word: "Glaubwürdigkeitsverlust", article: "der", translation: "loss of credibility", category: "Propaganda & Desinformation" },
  { word: "Manipulationsversuch", article: "der", translation: "attempt at manipulation", category: "Propaganda & Desinformation" },
  { word: "Quellenangabe", article: "die", translation: "citation/source reference", category: "Propaganda & Desinformation" },
  { word: "Faktenlage", article: "die", translation: "factual situation", category: "Propaganda & Desinformation" },
  { word: "Vertrauenskrise", article: "die", translation: "crisis of trust", category: "Propaganda & Desinformation" },

  // Wissenschaftskommunikation
  { word: "Forschungsergebnis", article: "das", translation: "research finding", category: "Wissenschaftskommunikation" },
  { word: "Popularisierung", article: "die", translation: "popularization", category: "Wissenschaftskommunikation" },
  { word: "Fachjargon", article: "der", translation: "technical jargon", category: "Wissenschaftskommunikation" },
  { word: "Wissenstransfer", article: "der", translation: "knowledge transfer", category: "Wissenschaftskommunikation" },
  { word: "Verständlichkeit", article: "die", translation: "comprehensibility", category: "Wissenschaftskommunikation" },
  { word: "Wissensvermittler", article: "der", translation: "knowledge communicator", category: "Wissenschaftskommunikation" },
  { word: "Forschungsbericht", article: "der", translation: "research report", category: "Wissenschaftskommunikation" },
  { word: "Wissenschaftsjournalismus", article: "der", translation: "science journalism", category: "Wissenschaftskommunikation" },
  { word: "Vereinfachung", article: "die", translation: "simplification", category: "Wissenschaftskommunikation" },
  { word: "Fachpublikum", article: "das", translation: "specialist audience", category: "Wissenschaftskommunikation" },
  { word: "Laienverständnis", article: "das", translation: "layperson's understanding", category: "Wissenschaftskommunikation" },
  { word: "Erklärvideo", article: "das", translation: "explainer video", category: "Wissenschaftskommunikation" },
  { word: "Forschungsvermittlung", article: "die", translation: "research communication", category: "Wissenschaftskommunikation" },
  { word: "Expertenmeinung", article: "die", translation: "expert opinion", category: "Wissenschaftskommunikation" },
  { word: "Fachvortrag", article: "der", translation: "specialist lecture", category: "Wissenschaftskommunikation" },

  // Raumfahrttechnik
  { word: "Raumsonde", article: "die", translation: "space probe", category: "Raumfahrttechnik" },
  { word: "Raumstation", article: "die", translation: "space station", category: "Raumfahrttechnik" },
  { word: "Trägerrakete", article: "die", translation: "launch vehicle/carrier rocket", category: "Raumfahrttechnik" },
  { word: "Raumkapsel", article: "die", translation: "space capsule", category: "Raumfahrttechnik" },
  { word: "Startrampe", article: "die", translation: "launch pad", category: "Raumfahrttechnik" },
  { word: "Schwerelosigkeit", article: "die", translation: "weightlessness", category: "Raumfahrttechnik" },
  { word: "Raumfahrtprogramm", article: "das", translation: "space program", category: "Raumfahrttechnik" },
  { word: "Weltraumforschung", article: "die", translation: "space research", category: "Raumfahrttechnik" },
  { word: "Weltraummission", article: "die", translation: "space mission", category: "Raumfahrttechnik" },
  { word: "Landefähre", article: "die", translation: "lunar/landing module", category: "Raumfahrttechnik" },
  { word: "Raumanzug", article: "der", translation: "spacesuit", category: "Raumfahrttechnik" },
  { word: "Umlaufzeit", article: "die", translation: "orbital period", category: "Raumfahrttechnik" },
  { word: "Weltraumschrott", article: "der", translation: "space debris", category: "Raumfahrttechnik" },
  { word: "Andockmanöver", article: "das", translation: "docking maneuver", category: "Raumfahrttechnik" },
  { word: "Flugbahn", article: "die", translation: "flight trajectory", category: "Raumfahrttechnik" },

  // Ozeanografie
  { word: "Meeresströmung", article: "die", translation: "ocean current", category: "Ozeanografie" },
  { word: "Meeresboden", article: "der", translation: "seabed", category: "Ozeanografie" },
  { word: "Gezeitenwechsel", article: "der", translation: "changing of the tides", category: "Ozeanografie" },
  { word: "Meeresforschung", article: "die", translation: "marine research", category: "Ozeanografie" },
  { word: "Korallenriff", article: "das", translation: "coral reef", category: "Ozeanografie" },
  { word: "Meeresversauerung", article: "die", translation: "ocean acidification", category: "Ozeanografie" },
  { word: "Tiefseegraben", article: "der", translation: "deep-sea trench", category: "Ozeanografie" },
  { word: "Meeresspiegelanstieg", article: "der", translation: "sea-level rise", category: "Ozeanografie" },
  { word: "Salzgehalt", article: "der", translation: "salinity", category: "Ozeanografie" },
  { word: "Meeresökosystem", article: "das", translation: "marine ecosystem", category: "Ozeanografie" },
  { word: "Unterwasserwelt", article: "die", translation: "underwater world", category: "Ozeanografie" },
  { word: "Meeresverschmutzung", article: "die", translation: "ocean pollution", category: "Ozeanografie" },
  { word: "Wellengang", article: "der", translation: "swell/wave motion", category: "Ozeanografie" },
  { word: "Meeresbewohner", article: "der", translation: "marine creature", category: "Ozeanografie" },
  { word: "Tiefseeforschung", article: "die", translation: "deep-sea research", category: "Ozeanografie" },

  // Anthropologie
  { word: "Menschheitsgeschichte", article: "die", translation: "history of humankind", category: "Anthropologie" },
  { word: "Verwandtschaftssystem", article: "das", translation: "kinship system", category: "Anthropologie" },
  { word: "Initiationsritus", article: "das", translation: "initiation rite", category: "Anthropologie" },
  { word: "Stammesgesellschaft", article: "die", translation: "tribal society", category: "Anthropologie" },
  { word: "Feldstudie", article: "die", translation: "field study", category: "Anthropologie" },
  { word: "Kulturvergleich", article: "der", translation: "cross-cultural comparison", category: "Anthropologie" },
  { word: "Stammesstruktur", article: "die", translation: "tribal structure", category: "Anthropologie" },
  { word: "Naturvolk", article: "das", translation: "indigenous people (traditional term)", category: "Anthropologie" },
  { word: "Menschenbild", article: "das", translation: "conception of humanity", category: "Anthropologie" },
  { word: "Verhaltensforschung", article: "die", translation: "behavioral research", category: "Anthropologie" },
  { word: "Kulturvergleichung", article: "die", translation: "comparative study of cultures", category: "Anthropologie" },
  { word: "Menschheitsentwicklung", article: "die", translation: "development of humankind", category: "Anthropologie" },
  { word: "Gemeinschaftsstruktur", article: "die", translation: "community structure", category: "Anthropologie" },
  { word: "Überlebensstrategie", article: "die", translation: "survival strategy", category: "Anthropologie" },
  { word: "Menschenaffe", article: "der", translation: "great ape", category: "Anthropologie" },

  // Archäologie (vertieft)
  { word: "Ausgrabungsstätte", article: "die", translation: "excavation site", category: "Archäologie (vertieft)" },
  { word: "Fundstück", article: "das", translation: "archaeological find", category: "Archäologie (vertieft)" },
  { word: "Grabbeigabe", article: "die", translation: "grave good/burial offering", category: "Archäologie (vertieft)" },
  { word: "Bodenfund", article: "der", translation: "buried find", category: "Archäologie (vertieft)" },
  { word: "Altertumsforschung", article: "die", translation: "study of antiquity", category: "Archäologie (vertieft)" },
  { word: "Ruinenstätte", article: "die", translation: "ruin site", category: "Archäologie (vertieft)" },
  { word: "Kulturschicht", article: "die", translation: "cultural layer/stratum", category: "Archäologie (vertieft)" },
  { word: "Altersbestimmung", article: "die", translation: "dating (of artifacts)", category: "Archäologie (vertieft)" },
  { word: "Grabungsteam", article: "das", translation: "excavation team", category: "Archäologie (vertieft)" },
  { word: "Fundort", article: "der", translation: "site of discovery", category: "Archäologie (vertieft)" },
  { word: "Siedlungsspur", article: "die", translation: "trace of settlement", category: "Archäologie (vertieft)" },
  { word: "Grabkammer", article: "die", translation: "burial chamber", category: "Archäologie (vertieft)" },
  { word: "Tonscherbe", article: "die", translation: "pottery shard", category: "Archäologie (vertieft)" },
  { word: "Freilegung", article: "die", translation: "uncovering (excavation)", category: "Archäologie (vertieft)" },
  { word: "Rekonstruktionsversuch", article: "der", translation: "reconstruction attempt", category: "Archäologie (vertieft)" },

  // Religionswissenschaft
  { word: "Glaubensrichtung", article: "die", translation: "religious denomination", category: "Religionswissenschaft" },
  { word: "Glaubensbekenntnis", article: "das", translation: "creed/confession of faith", category: "Religionswissenschaft" },
  { word: "Glaubensgemeinschaft", article: "die", translation: "faith community", category: "Religionswissenschaft" },
  { word: "Religionsfreiheit", article: "die", translation: "religious freedom", category: "Religionswissenschaft" },
  { word: "Weltreligion", article: "die", translation: "world religion", category: "Religionswissenschaft" },
  { word: "Glaubenslehre", article: "die", translation: "religious doctrine", category: "Religionswissenschaft" },
  { word: "Religionsausübung", article: "die", translation: "practice of religion", category: "Religionswissenschaft" },
  { word: "Glaubensfrage", article: "die", translation: "matter of faith", category: "Religionswissenschaft" },
  { word: "Sektierertum", article: "das", translation: "sectarianism", category: "Religionswissenschaft" },
  { word: "Religionskritik", article: "die", translation: "critique of religion", category: "Religionswissenschaft" },
  { word: "Glaubenskrise", article: "die", translation: "crisis of faith", category: "Religionswissenschaft" },
  { word: "Religionszugehörigkeit", article: "die", translation: "religious affiliation", category: "Religionswissenschaft" },
  { word: "Kirchenaustritt", article: "der", translation: "formal leaving of the church", category: "Religionswissenschaft" },
  { word: "Säkularisierung", article: "die", translation: "secularization", category: "Religionswissenschaft" },
  { word: "Glaubensinhalt", article: "der", translation: "content of belief", category: "Religionswissenschaft" },

  // Logik & Argumentation
  { word: "Denkfehlerquelle", article: "die", translation: "source of a logical error", category: "Logik & Argumentation" },
  { word: "Beweiskette", article: "die", translation: "chain of evidence", category: "Logik & Argumentation" },
  { word: "Kausalschluss", article: "der", translation: "causal inference", category: "Logik & Argumentation" },
  { word: "Widerspruchsfreiheit", article: "die", translation: "consistency (logical)", category: "Logik & Argumentation" },
  { word: "Argumentationsfehler", article: "der", translation: "argumentation error", category: "Logik & Argumentation" },
  { word: "Beweislast", article: "die", translation: "burden of proof", category: "Logik & Argumentation" },
  { word: "Gedankenexperiment", article: "das", translation: "thought experiment", category: "Logik & Argumentation" },
  { word: "Schlussfolgerungsfehler", article: "der", translation: "error in reasoning", category: "Logik & Argumentation" },
  { word: "Beweisführungspflicht", article: "die", translation: "obligation to provide proof", category: "Logik & Argumentation" },
  { word: "Ursachenkette", article: "die", translation: "chain of causation", category: "Logik & Argumentation" },
  { word: "Argumentationsmuster", article: "das", translation: "argumentation pattern", category: "Logik & Argumentation" },
  { word: "Stringenz", article: "die", translation: "logical stringency/rigor", category: "Logik & Argumentation" },
  { word: "Denkregel", article: "die", translation: "rule of thought/logic", category: "Logik & Argumentation" },
  { word: "Zirkelschluss", article: "der", translation: "circular reasoning", category: "Logik & Argumentation" },
  { word: "Beweiswert", article: "der", translation: "evidentiary value", category: "Logik & Argumentation" },

  // Innovationsforschung
  { word: "Innovationskraft", article: "die", translation: "innovative strength", category: "Innovationsforschung" },
  { word: "Erfindungsreichtum", article: "der", translation: "inventiveness", category: "Innovationsforschung" },
  { word: "Innovationstreiber", article: "der", translation: "innovation driver", category: "Innovationsforschung" },
  { word: "Ideenfindung", article: "die", translation: "ideation", category: "Innovationsforschung" },
  { word: "Innovationssprung", article: "der", translation: "innovation leap", category: "Innovationsforschung" },
  { word: "Pioniergeist", article: "der", translation: "pioneering spirit", category: "Innovationsforschung" },
  { word: "Forschungsförderung", article: "die", translation: "research funding", category: "Innovationsforschung" },
  { word: "Innovationshemmnis", article: "das", translation: "innovation obstacle", category: "Innovationsforschung" },
  { word: "Erfindergeist", article: "der", translation: "inventive spirit", category: "Innovationsforschung" },
  { word: "Technologiesprung", article: "der", translation: "technological leap", category: "Innovationsforschung" },
  { word: "Innovationsfähigkeit", article: "die", translation: "capacity for innovation", category: "Innovationsforschung" },
  { word: "Pilotprojekt", article: "das", translation: "pilot project", category: "Innovationsforschung" },
  { word: "Zukunftstechnologie", article: "die", translation: "future technology", category: "Innovationsforschung" },
  { word: "Durchbruch", article: "der", translation: "breakthrough", category: "Innovationsforschung" },
  { word: "Erfindungsgabe", article: "die", translation: "gift for invention", category: "Innovationsforschung" },

  // Philosophiegeschichte
  { word: "Denkschule", article: "die", translation: "school of thought", category: "Philosophiegeschichte" },
  { word: "Philosophenschule", article: "die", translation: "philosophical school", category: "Philosophiegeschichte" },
  { word: "Weltanschauung", article: "die", translation: "worldview/philosophy of life", category: "Philosophiegeschichte" },
  { word: "Denktradition", article: "die", translation: "tradition of thought", category: "Philosophiegeschichte" },
  { word: "Vernunftglaube", article: "der", translation: "faith in reason", category: "Philosophiegeschichte" },
  { word: "Aufklärungszeit", article: "die", translation: "age of Enlightenment", category: "Philosophiegeschichte" },
  { word: "Geistesgeschichte", article: "die", translation: "intellectual history", category: "Philosophiegeschichte" },
  { word: "Denkrichtung", article: "die", translation: "intellectual direction/school", category: "Philosophiegeschichte" },
  { word: "Ideengeschichte", article: "die", translation: "history of ideas", category: "Philosophiegeschichte" },
  { word: "Philosophiestudium", article: "das", translation: "study of philosophy", category: "Philosophiegeschichte" },
  { word: "Systemdenken", article: "das", translation: "systems thinking", category: "Philosophiegeschichte" },
  { word: "Denkfreiheit", article: "die", translation: "freedom of thought", category: "Philosophiegeschichte" },
  { word: "Gedankengebäude", article: "das", translation: "intellectual framework/system of thought", category: "Philosophiegeschichte" },
  { word: "Vordenker", article: "der", translation: "visionary/intellectual pioneer", category: "Philosophiegeschichte" },
  { word: "Lehrmeinung", article: "die", translation: "doctrine/school of thought", category: "Philosophiegeschichte" },

  // Wirtschaftsgeschichte
  { word: "Handwerkstradition", article: "die", translation: "craft tradition", category: "Wirtschaftsgeschichte" },
  { word: "Zunftwesen", article: "das", translation: "guild system", category: "Wirtschaftsgeschichte" },
  { word: "Industrialisierung", article: "die", translation: "industrialization", category: "Wirtschaftsgeschichte" },
  { word: "Handelsgeschichte", article: "die", translation: "history of trade", category: "Wirtschaftsgeschichte" },
  { word: "Wirtschaftsordnung", article: "die", translation: "economic order/system", category: "Wirtschaftsgeschichte" },
  { word: "Manufaktur", article: "die", translation: "manufactory", category: "Wirtschaftsgeschichte" },
  { word: "Handelsgesellschaft", article: "die", translation: "trading company", category: "Wirtschaftsgeschichte" },
  { word: "Wirtschaftsgeschichte", article: "die", translation: "economic history", category: "Wirtschaftsgeschichte" },
  { word: "Warenverkehr", article: "der", translation: "movement of goods", category: "Wirtschaftsgeschichte" },
  { word: "Tauschhandel", article: "der", translation: "barter trade", category: "Wirtschaftsgeschichte" },
  { word: "Wirtschaftssystem", article: "das", translation: "economic system", category: "Wirtschaftsgeschichte" },
  { word: "Marktwirtschaft", article: "die", translation: "market economy", category: "Wirtschaftsgeschichte" },
  { word: "Planwirtschaft", article: "die", translation: "planned economy", category: "Wirtschaftsgeschichte" },
  { word: "Frühkapitalismus", article: "der", translation: "early capitalism", category: "Wirtschaftsgeschichte" },
  { word: "Wirtschaftsaufschwung", article: "der", translation: "economic upswing", category: "Wirtschaftsgeschichte" },

  // Berufsethik
  { word: "Berufsethos", article: "das", translation: "professional ethos", category: "Berufsethik" },
  { word: "Sorgfaltspflicht", article: "die", translation: "duty of care (professional)", category: "Berufsethik" },
  { word: "Schweigepflicht", article: "die", translation: "confidentiality obligation", category: "Berufsethik" },
  { word: "Berufsgeheimnis", article: "das", translation: "professional secret", category: "Berufsethik" },
  { word: "Loyalitätspflicht", article: "die", translation: "duty of loyalty", category: "Berufsethik" },
  { word: "Standesregel", article: "die", translation: "professional code of conduct", category: "Berufsethik" },
  { word: "Berufsehre", article: "die", translation: "professional honor", category: "Berufsethik" },
  { word: "Interessenkonfliktregelung", article: "die", translation: "conflict-of-interest regulation", category: "Berufsethik" },
  { word: "Verantwortungsübernahme", article: "die", translation: "assumption of responsibility", category: "Berufsethik" },
  { word: "Berufspflicht", article: "die", translation: "professional duty", category: "Berufsethik" },
  { word: "Fairnessgebot", article: "das", translation: "fairness requirement", category: "Berufsethik" },
  { word: "Compliance-Regel", article: "die", translation: "compliance rule", category: "Berufsethik" },
  { word: "Verhaltenskodex", article: "der", translation: "code of conduct", category: "Berufsethik" },
  { word: "Amtsverschwiegenheit", article: "die", translation: "official secrecy obligation", category: "Berufsethik" },
  { word: "Unparteilichkeit", article: "die", translation: "impartiality", category: "Berufsethik" },

  // Konsumentenrechte
  { word: "Rückgaberecht", article: "das", translation: "right of return", category: "Konsumentenrechte" },
  { word: "Umtauschrecht", article: "das", translation: "right of exchange", category: "Konsumentenrechte" },
  { word: "Mängelrüge", article: "die", translation: "complaint about defects", category: "Konsumentenrechte" },
  { word: "Verbraucherinformation", article: "die", translation: "consumer information", category: "Konsumentenrechte" },
  { word: "Garantiefall", article: "der", translation: "warranty case", category: "Konsumentenrechte" },
  { word: "Kaufbeleg", article: "der", translation: "proof of purchase", category: "Konsumentenrechte" },
  { word: "Produkthaftung", article: "die", translation: "product liability", category: "Konsumentenrechte" },
  { word: "Verbraucherzentrale", article: "die", translation: "consumer advice center", category: "Konsumentenrechte" },
  { word: "Reklamationsrecht", article: "das", translation: "right to complain", category: "Konsumentenrechte" },
  { word: "Verbraucherrechte", article: "die", translation: "consumer rights", category: "Konsumentenrechte" },
  { word: "Preisauszeichnung", article: "die", translation: "price labeling", category: "Konsumentenrechte" },
  { word: "Irreführung", article: "die", translation: "misleading (advertising)", category: "Konsumentenrechte" },
  { word: "Kleingedrucktes", article: "das", translation: "fine print", category: "Konsumentenrechte" },

  // Verhandlungspsychologie
  { word: "Verhandlungsgeschick", article: "das", translation: "negotiation skill", category: "Verhandlungspsychologie" },
  { word: "Überredungskunst", article: "die", translation: "art of persuasion", category: "Verhandlungspsychologie" },
  { word: "Verhandlungsdruck", article: "der", translation: "negotiating pressure", category: "Verhandlungspsychologie" },
  { word: "Ankereffekt", article: "der", translation: "anchoring effect", category: "Verhandlungspsychologie" },
  { word: "Verhandlungsvorteil", article: "der", translation: "negotiating advantage", category: "Verhandlungspsychologie" },
  { word: "Machtasymmetrie", article: "die", translation: "power asymmetry", category: "Verhandlungspsychologie" },
  { word: "Kompromissdruck", article: "der", translation: "pressure to compromise", category: "Verhandlungspsychologie" },
  { word: "Verhandlungsklima", article: "das", translation: "negotiating atmosphere", category: "Verhandlungspsychologie" },
  { word: "Überzeugungsstrategie", article: "die", translation: "persuasion strategy", category: "Verhandlungspsychologie" },
  { word: "Verhandlungsroutine", article: "die", translation: "negotiation routine", category: "Verhandlungspsychologie" },
  { word: "Nervenspiel", article: "das", translation: "psychological battle/game of nerves", category: "Verhandlungspsychologie" },
  { word: "Verhandlungsinstinkt", article: "der", translation: "negotiating instinct", category: "Verhandlungspsychologie" },

  // Terminologie & Fachsprache
  { word: "Fachbegriff", article: "der", translation: "technical term", category: "Terminologie & Fachsprache" },
  { word: "Fachterminologie", article: "die", translation: "specialist terminology", category: "Terminologie & Fachsprache" },
  { word: "Fachausdruck", article: "der", translation: "technical expression", category: "Terminologie & Fachsprache" },
  { word: "Begriffsklärung", article: "die", translation: "clarification of terms", category: "Terminologie & Fachsprache" },
  { word: "Fachsprache", article: "die", translation: "specialist/technical language", category: "Terminologie & Fachsprache" },
  { word: "Begriffsdefinition", article: "die", translation: "definition of a term", category: "Terminologie & Fachsprache" },
  { word: "Fachwortschatz", article: "der", translation: "specialist vocabulary", category: "Terminologie & Fachsprache" },
  { word: "Fachbuch", article: "das", translation: "specialist/technical book", category: "Terminologie & Fachsprache" },
  { word: "Begrifflichkeit", article: "die", translation: "terminology/conceptual framework", category: "Terminologie & Fachsprache" },
  { word: "Fachliteratur", article: "die", translation: "specialist literature", category: "Terminologie & Fachsprache" },
  { word: "Fachgebiet", article: "das", translation: "field of expertise", category: "Terminologie & Fachsprache" },
  { word: "Nachschlagewerk", article: "das", translation: "reference work", category: "Terminologie & Fachsprache" },

  // Wissensmanagement
  { word: "Wissensdatenbank", article: "die", translation: "knowledge database", category: "Wissensmanagement" },
  { word: "Erfahrungswissen", article: "das", translation: "experiential knowledge", category: "Wissensmanagement" },
  { word: "Wissensaustausch", article: "der", translation: "knowledge exchange", category: "Wissensmanagement" },
  { word: "Wissenslücke", article: "die", translation: "knowledge gap", category: "Wissensmanagement" },
  { word: "Wissensspeicher", article: "der", translation: "knowledge repository", category: "Wissensmanagement" },
  { word: "Erfahrungsaustausch", article: "der", translation: "exchange of experience", category: "Wissensmanagement" },
  { word: "Wissensverlust", article: "der", translation: "loss of knowledge", category: "Wissensmanagement" },
  { word: "Dokumentationspflicht", article: "die", translation: "documentation obligation", category: "Wissensmanagement" },
  { word: "Wissensaufbau", article: "der", translation: "knowledge building", category: "Wissensmanagement" },
  { word: "Best-Practice-Beispiel", article: "das", translation: "best-practice example", category: "Wissensmanagement" },
  { word: "Wissensweitergabe", article: "die", translation: "knowledge sharing/transfer", category: "Wissensmanagement" },
  { word: "Erfahrungsbericht", article: "der", translation: "experience report", category: "Wissensmanagement" },

  // Sozialethik
  { word: "Verantwortungsethik", article: "die", translation: "ethics of responsibility", category: "Sozialethik" },
  { word: "Gemeinwohlorientierung", article: "die", translation: "common-good orientation", category: "Sozialethik" },
  { word: "Nächstenliebe", article: "die", translation: "charity/love of neighbor", category: "Sozialethik" },
  { word: "Solidaritätsgedanke", article: "der", translation: "idea of solidarity", category: "Sozialethik" },
  { word: "Fürsorgeethik", article: "die", translation: "ethics of care", category: "Sozialethik" },
  { word: "Verantwortungsgefühl", article: "das", translation: "sense of responsibility", category: "Sozialethik" },
  { word: "Pflichtbewusstsein", article: "das", translation: "sense of duty", category: "Sozialethik" },
  { word: "Rücksichtnahme", article: "die", translation: "consideration for others", category: "Sozialethik" },
  { word: "Gewissenskonflikt", article: "der", translation: "conflict of conscience", category: "Sozialethik" },
  { word: "Handlungsethik", article: "die", translation: "ethics of action", category: "Sozialethik" },
  { word: "Wertekanon", article: "der", translation: "canon of values", category: "Sozialethik" },
  { word: "Gewissenhaftigkeit", article: "die", translation: "conscientiousness", category: "Sozialethik" },

  // Ausdrucksweise & Stil
  { word: "Ausdrucksweise", article: "die", translation: "manner of expression", category: "Ausdrucksweise & Stil" },
  { word: "Sprachstil", article: "der", translation: "language style", category: "Ausdrucksweise & Stil" },
  { word: "Wortgewandtheit", article: "die", translation: "verbal fluency/eloquence", category: "Ausdrucksweise & Stil" },
  { word: "Ausdruckskraft", article: "die", translation: "expressiveness", category: "Ausdrucksweise & Stil" },
  { word: "Schreibstil", article: "der", translation: "writing style", category: "Ausdrucksweise & Stil" },
  { word: "Sprachgefühl", article: "das", translation: "feel for language", category: "Ausdrucksweise & Stil" },
  { word: "Feinheit", article: "die", translation: "subtlety/nuance", category: "Ausdrucksweise & Stil" },
  { word: "Formulierungskunst", article: "die", translation: "art of phrasing", category: "Ausdrucksweise & Stil" },
  { word: "Wortschatzreichtum", article: "der", translation: "richness of vocabulary", category: "Ausdrucksweise & Stil" },
  { word: "Stilsicherheit", article: "die", translation: "stylistic assurance", category: "Ausdrucksweise & Stil" },
  { word: "Sprachwitz", article: "der", translation: "linguistic wit", category: "Ausdrucksweise & Stil" },
  { word: "Ausdrucksvermögen", article: "das", translation: "capacity for expression", category: "Ausdrucksweise & Stil" },
  { word: "Wortwitz", article: "der", translation: "play on words/verbal wit", category: "Ausdrucksweise & Stil" },
  { word: "Prägnanz", article: "die", translation: "conciseness", category: "Ausdrucksweise & Stil" },
  { word: "Formulierungshilfe", article: "die", translation: "phrasing aid", category: "Ausdrucksweise & Stil" },
  { word: "Sprachfeingefühl", article: "das", translation: "sensitivity to language nuance", category: "Ausdrucksweise & Stil" },
  { word: "Stilbruch", article: "der", translation: "stylistic break/inconsistency", category: "Ausdrucksweise & Stil" },

  // Naturphilosophie
  { word: "Naturbetrachtung", article: "die", translation: "contemplation of nature", category: "Naturphilosophie" },
  { word: "Weltordnungsprinzip", article: "das", translation: "principle of world order", category: "Naturphilosophie" },
  { word: "Naturverständnis", article: "das", translation: "understanding of nature", category: "Naturphilosophie" },
  { word: "Seinsfrage", article: "die", translation: "question of being", category: "Naturphilosophie" },
  { word: "Weltzusammenhang", article: "der", translation: "interconnectedness of the world", category: "Naturphilosophie" },
  { word: "Naturbeherrschung", article: "die", translation: "mastery over nature", category: "Naturphilosophie" },
  { word: "Kreislaufdenken", article: "das", translation: "cyclical thinking", category: "Naturphilosophie" },
  { word: "Ordnungsprinzip", article: "das", translation: "organizing principle", category: "Naturphilosophie" },
  { word: "Naturharmonie", article: "die", translation: "harmony with nature", category: "Naturphilosophie" },
  { word: "Weltvernunft", article: "die", translation: "world-reason (cosmic order)", category: "Naturphilosophie" },
  { word: "Ursachenforschung", article: "die", translation: "investigation of causes", category: "Naturphilosophie" },
  { word: "Naturzustand", article: "der", translation: "state of nature", category: "Naturphilosophie" },
  { word: "Seinsverständnis", article: "das", translation: "understanding of existence", category: "Naturphilosophie" },
  { word: "Weltgesetz", article: "das", translation: "universal law", category: "Naturphilosophie" },
  { word: "Naturordnung", article: "die", translation: "order of nature", category: "Naturphilosophie" },
  { word: "Daseinsberechtigung", article: "die", translation: "right to exist/raison d'être", category: "Naturphilosophie" },
  { word: "Wesenskern", article: "der", translation: "essential core/essence", category: "Naturphilosophie" },
];

const c1NewWords: Omit<GermanNoun, "id">[] = [
  // Astrophysik
  { word: "Sternhaufen", article: "der", translation: "star cluster", category: "Astrophysik" },
  { word: "Sternentstehung", article: "die", translation: "star formation", category: "Astrophysik" },
  { word: "Sternbewegung", article: "die", translation: "stellar motion", category: "Astrophysik" },
  { word: "Ereignishorizont", article: "der", translation: "event horizon", category: "Astrophysik" },
  { word: "Gravitationswelle", article: "die", translation: "gravitational wave", category: "Astrophysik" },
  { word: "Neutronenstern", article: "der", translation: "neutron star", category: "Astrophysik" },
  { word: "Galaxienhaufen", article: "der", translation: "galaxy cluster", category: "Astrophysik" },
  { word: "Kosmologie", article: "die", translation: "cosmology", category: "Astrophysik" },
  { word: "Urknall", article: "der", translation: "big bang", category: "Astrophysik" },
  { word: "Hintergrundstrahlung", article: "die", translation: "background radiation", category: "Astrophysik" },
  { word: "Rotverschiebung", article: "die", translation: "redshift", category: "Astrophysik" },
  { word: "Spektralanalyse", article: "die", translation: "spectral analysis", category: "Astrophysik" },
  { word: "Exoplanet", article: "der", translation: "exoplanet", category: "Astrophysik" },
  { word: "Kometenschweif", article: "der", translation: "comet's tail", category: "Astrophysik" },
  { word: "Meteoritenkrater", article: "der", translation: "meteor crater", category: "Astrophysik" },
  { word: "Astrometrie", article: "die", translation: "astrometry", category: "Astrophysik" },
  { word: "Fixstern", article: "der", translation: "fixed star", category: "Astrophysik" },
  { word: "Weltraumteleskop", article: "das", translation: "space telescope", category: "Astrophysik" },
  { word: "Himmelsmechanik", article: "die", translation: "celestial mechanics", category: "Astrophysik" },

  // Teilchenphysik
  { word: "Fermion", article: "das", translation: "fermion", category: "Teilchenphysik" },
  { word: "Boson", article: "das", translation: "boson", category: "Teilchenphysik" },
  { word: "Gluon", article: "das", translation: "gluon", category: "Teilchenphysik" },
  { word: "Neutrino", article: "das", translation: "neutrino", category: "Teilchenphysik" },
  { word: "Teilchenbeschleuniger", article: "der", translation: "particle accelerator", category: "Teilchenphysik" },
  { word: "Quantenzustand", article: "der", translation: "quantum state", category: "Teilchenphysik" },
  { word: "Quantenverschränkung", article: "die", translation: "quantum entanglement", category: "Teilchenphysik" },
  { word: "Higgsteilchen", article: "das", translation: "Higgs particle", category: "Teilchenphysik" },
  { word: "Kettenreaktion", article: "die", translation: "chain reaction", category: "Teilchenphysik" },
  { word: "Reaktorkern", article: "der", translation: "reactor core", category: "Teilchenphysik" },
  { word: "Strahlungsdosis", article: "die", translation: "radiation dose", category: "Teilchenphysik" },
  { word: "Halbwertszeit", article: "die", translation: "half-life", category: "Teilchenphysik" },
  { word: "Radionuklid", article: "das", translation: "radionuclide", category: "Teilchenphysik" },
  { word: "Teilchendetektor", article: "der", translation: "particle detector", category: "Teilchenphysik" },
  { word: "Symmetriebrechung", article: "die", translation: "symmetry breaking", category: "Teilchenphysik" },

  // Thermodynamik
  { word: "Entropie", article: "die", translation: "entropy", category: "Thermodynamik" },
  { word: "Enthalpie", article: "die", translation: "enthalpy", category: "Thermodynamik" },
  { word: "Wärmeaustausch", article: "der", translation: "heat exchange", category: "Thermodynamik" },
  { word: "Wärmeleitfähigkeit", article: "die", translation: "thermal conductivity", category: "Thermodynamik" },
  { word: "Wirkungsgrad", article: "der", translation: "efficiency (engineering)", category: "Thermodynamik" },
  { word: "Zustandsgleichung", article: "die", translation: "equation of state", category: "Thermodynamik" },
  { word: "Phasenübergang", article: "der", translation: "phase transition", category: "Thermodynamik" },
  { word: "Wärmekapazität", article: "die", translation: "heat capacity", category: "Thermodynamik" },
  { word: "Kreisprozess", article: "der", translation: "thermodynamic cycle", category: "Thermodynamik" },
  { word: "Verdampfungswärme", article: "die", translation: "heat of vaporization", category: "Thermodynamik" },
  { word: "Schmelzwärme", article: "die", translation: "heat of fusion", category: "Thermodynamik" },
  { word: "Temperaturgradient", article: "der", translation: "temperature gradient", category: "Thermodynamik" },
  { word: "Isotherme", article: "die", translation: "isotherm", category: "Thermodynamik" },
  { word: "Druckausgleich", article: "der", translation: "pressure equalization", category: "Thermodynamik" },
  { word: "Gasgleichung", article: "die", translation: "gas equation", category: "Thermodynamik" },
  { word: "Aggregatzustand", article: "der", translation: "state of matter", category: "Thermodynamik" },
  { word: "Wärmestrahlung", article: "die", translation: "thermal radiation", category: "Thermodynamik" },
  { word: "Energieerhaltungssatz", article: "der", translation: "law of conservation of energy", category: "Thermodynamik" },

  // Geologie & Mineralogie
  { word: "Erdkruste", article: "die", translation: "earth's crust", category: "Geologie & Mineralogie" },
  { word: "Erdmantel", article: "der", translation: "earth's mantle", category: "Geologie & Mineralogie" },
  { word: "Erdkern", article: "der", translation: "earth's core", category: "Geologie & Mineralogie" },
  { word: "Plattentektonik", article: "die", translation: "plate tectonics", category: "Geologie & Mineralogie" },
  { word: "Sedimentgestein", article: "das", translation: "sedimentary rock", category: "Geologie & Mineralogie" },
  { word: "Vulkanismus", article: "der", translation: "volcanism", category: "Geologie & Mineralogie" },
  { word: "Verwitterung", article: "die", translation: "weathering/erosion", category: "Geologie & Mineralogie" },
  { word: "Gesteinsschicht", article: "die", translation: "rock layer", category: "Geologie & Mineralogie" },
  { word: "Epizentrum", article: "das", translation: "earthquake epicenter", category: "Geologie & Mineralogie" },
  { word: "Bruchlinie", article: "die", translation: "fault line", category: "Geologie & Mineralogie" },
  { word: "Sedimentation", article: "die", translation: "sedimentation", category: "Geologie & Mineralogie" },
  { word: "Gesteinsbildung", article: "die", translation: "rock formation", category: "Geologie & Mineralogie" },
  { word: "Mineralvorkommen", article: "das", translation: "mineral deposit", category: "Geologie & Mineralogie" },
  { word: "Gesteinsart", article: "die", translation: "rock type", category: "Geologie & Mineralogie" },

  // Biochemie
  { word: "Enzym", article: "das", translation: "enzyme", category: "Biochemie" },
  { word: "Aminosäure", article: "die", translation: "amino acid", category: "Biochemie" },
  { word: "Nukleinsäure", article: "die", translation: "nucleic acid", category: "Biochemie" },
  { word: "Stoffwechselweg", article: "der", translation: "metabolic pathway", category: "Biochemie" },
  { word: "Zellmembran", article: "die", translation: "cell membrane", category: "Biochemie" },
  { word: "Ribosom", article: "das", translation: "ribosome", category: "Biochemie" },
  { word: "Fettsäure", article: "die", translation: "fatty acid", category: "Biochemie" },
  { word: "Peptidbindung", article: "die", translation: "peptide bond", category: "Biochemie" },
  { word: "Genexpression", article: "die", translation: "gene expression", category: "Biochemie" },
  { word: "Zellatmung", article: "die", translation: "cellular respiration", category: "Biochemie" },
  { word: "Biokatalysator", article: "der", translation: "biocatalyst", category: "Biochemie" },
  { word: "Enzymkinetik", article: "die", translation: "enzyme kinetics", category: "Biochemie" },
  { word: "Enzymaktivität", article: "die", translation: "enzyme activity", category: "Biochemie" },
  { word: "Signalkaskade", article: "die", translation: "signal cascade", category: "Biochemie" },

  // Zellbiologie
  { word: "Zellkern", article: "der", translation: "cell nucleus", category: "Zellbiologie" },
  { word: "Zellteilung", article: "die", translation: "cell division", category: "Zellbiologie" },
  { word: "Zytoplasma", article: "das", translation: "cytoplasm", category: "Zellbiologie" },
  { word: "Mitose", article: "die", translation: "mitosis", category: "Zellbiologie" },
  { word: "Meiose", article: "die", translation: "meiosis", category: "Zellbiologie" },
  { word: "Chromatin", article: "das", translation: "chromatin", category: "Zellbiologie" },
  { word: "Zellalterung", article: "die", translation: "cell senescence", category: "Zellbiologie" },
  { word: "Zellwand", article: "die", translation: "cell wall", category: "Zellbiologie" },
  { word: "Mitochondrium", article: "das", translation: "mitochondrion", category: "Zellbiologie" },
  { word: "Zellzyklus", article: "der", translation: "cell cycle", category: "Zellbiologie" },
  { word: "Zelldifferenzierung", article: "die", translation: "cell differentiation", category: "Zellbiologie" },
  { word: "Zellorganell", article: "das", translation: "cell organelle", category: "Zellbiologie" },
  { word: "Signaltransduktion", article: "die", translation: "signal transduction", category: "Zellbiologie" },
  { word: "Apoptose", article: "die", translation: "programmed cell death", category: "Zellbiologie" },
  { word: "Zellkultur", article: "die", translation: "cell culture", category: "Zellbiologie" },
  { word: "Zytoskelett", article: "das", translation: "cytoskeleton", category: "Zellbiologie" },
  { word: "Zellproliferation", article: "die", translation: "cell proliferation", category: "Zellbiologie" },

  // Mikrobiologie
  { word: "Krankheitserreger", article: "der", translation: "pathogen", category: "Mikrobiologie" },
  { word: "Bakterienkultur", article: "die", translation: "bacterial culture", category: "Mikrobiologie" },
  { word: "Antibiotikum", article: "das", translation: "antibiotic", category: "Mikrobiologie" },
  { word: "Erregervermehrung", article: "die", translation: "pathogen proliferation", category: "Mikrobiologie" },
  { word: "Virusstamm", article: "der", translation: "virus strain", category: "Mikrobiologie" },
  { word: "Sporenbildung", article: "die", translation: "spore formation", category: "Mikrobiologie" },
  { word: "Mikrobiom", article: "das", translation: "microbiome", category: "Mikrobiologie" },
  { word: "Infektionskette", article: "die", translation: "chain of infection", category: "Mikrobiologie" },
  { word: "Wirtsorganismus", article: "der", translation: "host organism", category: "Mikrobiologie" },
  { word: "Keimzahl", article: "die", translation: "germ count", category: "Mikrobiologie" },
  { word: "Sterilisation", article: "die", translation: "sterilization", category: "Mikrobiologie" },
  { word: "Nährboden", article: "der", translation: "culture medium", category: "Mikrobiologie" },
  { word: "Infektionsherd", article: "der", translation: "infection focus", category: "Mikrobiologie" },

  // Immunologie
  { word: "Antikörperbildung", article: "die", translation: "antibody formation", category: "Immunologie" },
  { word: "Antigen", article: "das", translation: "antigen", category: "Immunologie" },
  { word: "Immunantwort", article: "die", translation: "immune response", category: "Immunologie" },
  { word: "Immunisierung", article: "die", translation: "immunization", category: "Immunologie" },
  { word: "Autoimmunerkrankung", article: "die", translation: "autoimmune disease", category: "Immunologie" },
  { word: "Entzündungsherd", article: "der", translation: "inflammation focus", category: "Immunologie" },
  { word: "Abwehrzelle", article: "die", translation: "defense cell", category: "Immunologie" },
  { word: "Lymphsystem", article: "das", translation: "lymphatic system", category: "Immunologie" },
  { word: "Immunschwäche", article: "die", translation: "immunodeficiency", category: "Immunologie" },
  { word: "Impfreaktion", article: "die", translation: "vaccine reaction", category: "Immunologie" },

  // Toxikologie
  { word: "Vergiftung", article: "die", translation: "poisoning", category: "Toxikologie" },
  { word: "Grenzwert", article: "der", translation: "limit value", category: "Toxikologie" },
  { word: "Schadstoffbelastung", article: "die", translation: "pollutant exposure", category: "Toxikologie" },
  { word: "Toxizität", article: "die", translation: "toxicity", category: "Toxikologie" },
  { word: "Konzentrationsgrenze", article: "die", translation: "concentration limit", category: "Toxikologie" },
  { word: "Giftwirkung", article: "die", translation: "toxic effect", category: "Toxikologie" },
  { word: "Akkumulation", article: "die", translation: "accumulation", category: "Toxikologie" },
  { word: "Schwellenwert", article: "der", translation: "threshold value", category: "Toxikologie" },
  { word: "Aufnahmemenge", article: "die", translation: "intake amount", category: "Toxikologie" },
  { word: "Rückstandsanalyse", article: "die", translation: "residue analysis", category: "Toxikologie" },
  { word: "Nervengift", article: "das", translation: "nerve agent", category: "Toxikologie" },
  { word: "Langzeitwirkung", article: "die", translation: "long-term effect", category: "Toxikologie" },
  { word: "Entgiftung", article: "die", translation: "detoxification", category: "Toxikologie" },

  // Meteorologie
  { word: "Wetterfront", article: "die", translation: "weather front", category: "Meteorologie" },
  { word: "Hochdruckgebiet", article: "das", translation: "high-pressure area", category: "Meteorologie" },
  { word: "Tiefdruckgebiet", article: "das", translation: "low-pressure area", category: "Meteorologie" },
  { word: "Niederschlagsmenge", article: "die", translation: "amount of precipitation", category: "Meteorologie" },
  { word: "Windgeschwindigkeit", article: "die", translation: "wind speed", category: "Meteorologie" },
  { word: "Luftmasse", article: "die", translation: "air mass", category: "Meteorologie" },
  { word: "Kondensation", article: "die", translation: "condensation", category: "Meteorologie" },
  { word: "Verdunstung", article: "die", translation: "evaporation", category: "Meteorologie" },
  { word: "Atmosphärenschicht", article: "die", translation: "atmospheric layer", category: "Meteorologie" },
  { word: "Jetstream", article: "der", translation: "jet stream", category: "Meteorologie" },
  { word: "Gewitterfront", article: "die", translation: "storm front", category: "Meteorologie" },
  { word: "Orkanböe", article: "die", translation: "hurricane-force gust", category: "Meteorologie" },

  // Paläontologie
  { word: "Grabungsschicht", article: "die", translation: "excavation layer", category: "Paläontologie" },
  { word: "Aussterberate", article: "die", translation: "extinction rate", category: "Paläontologie" },
  { word: "Erdzeitalter", article: "das", translation: "geological era", category: "Paläontologie" },
  { word: "Versteinerung", article: "die", translation: "fossilization", category: "Paläontologie" },
  { word: "Evolutionstheorie", article: "die", translation: "theory of evolution", category: "Paläontologie" },
  { word: "Massenaussterben", article: "das", translation: "mass extinction", category: "Paläontologie" },
  { word: "Fossilbestand", article: "der", translation: "fossil record", category: "Paläontologie" },
  { word: "Gesteinsalter", article: "das", translation: "rock age", category: "Paläontologie" },

  // Kardiologie
  { word: "Herzrhythmusstörung", article: "die", translation: "cardiac arrhythmia", category: "Kardiologie" },
  { word: "Herzschrittmacher", article: "der", translation: "pacemaker", category: "Kardiologie" },
  { word: "Herzklappe", article: "die", translation: "heart valve", category: "Kardiologie" },
  { word: "Arterienverkalkung", article: "die", translation: "arteriosclerosis", category: "Kardiologie" },
  { word: "Herzkatheter", article: "der", translation: "cardiac catheter", category: "Kardiologie" },
  { word: "Koronararterie", article: "die", translation: "coronary artery", category: "Kardiologie" },
  { word: "Herzkreislauf", article: "der", translation: "cardiovascular system", category: "Kardiologie" },
  { word: "Herzinsuffizienz", article: "die", translation: "heart failure", category: "Kardiologie" },
  { word: "Herzoperation", article: "die", translation: "heart surgery", category: "Kardiologie" },
  { word: "Herzmuskel", article: "der", translation: "heart muscle", category: "Kardiologie" },
  { word: "Durchblutungsstörung", article: "die", translation: "circulatory disorder", category: "Kardiologie" },
  { word: "Aortenklappe", article: "die", translation: "aortic valve", category: "Kardiologie" },
  { word: "Thrombose", article: "die", translation: "thrombosis", category: "Kardiologie" },

  // Onkologie
  { word: "Strahlentherapie", article: "die", translation: "radiotherapy", category: "Onkologie" },
  { word: "Krebszelle", article: "die", translation: "cancer cell", category: "Onkologie" },
  { word: "Metastase", article: "die", translation: "metastasis", category: "Onkologie" },
  { word: "Biopsie", article: "die", translation: "biopsy", category: "Onkologie" },
  { word: "Krebsvorsorge", article: "die", translation: "cancer screening", category: "Onkologie" },
  { word: "Remission", article: "die", translation: "remission", category: "Onkologie" },
  { word: "Krebsbefund", article: "der", translation: "cancer diagnosis", category: "Onkologie" },
  { word: "Tumormarker", article: "der", translation: "tumor marker", category: "Onkologie" },
  { word: "Palliativversorgung", article: "die", translation: "palliative care", category: "Onkologie" },
  { word: "Krebsforschung", article: "die", translation: "cancer research", category: "Onkologie" },
  { word: "Frühdiagnose", article: "die", translation: "early diagnosis", category: "Onkologie" },
  { word: "Gewebeprobe", article: "die", translation: "tissue sample", category: "Onkologie" },
  { word: "Prognosefaktor", article: "der", translation: "prognostic factor", category: "Onkologie" },

  // Neurologie
  { word: "Nervenbahn", article: "die", translation: "nerve pathway", category: "Neurologie" },
  { word: "Rückenmark", article: "das", translation: "spinal cord", category: "Neurologie" },
  { word: "Hirnhautentzündung", article: "die", translation: "meningitis", category: "Neurologie" },
  { word: "Reflexbogen", article: "der", translation: "reflex arc", category: "Neurologie" },
  { word: "Muskellähmung", article: "die", translation: "muscle paralysis", category: "Neurologie" },
  { word: "Epilepsie", article: "die", translation: "epilepsy", category: "Neurologie" },
  { word: "Krampfanfall", article: "der", translation: "seizure", category: "Neurologie" },
  { word: "Hirnblutung", article: "die", translation: "brain hemorrhage", category: "Neurologie" },
  { word: "Gedächtnisstörung", article: "die", translation: "memory disorder", category: "Neurologie" },
  { word: "Nervenschädigung", article: "die", translation: "nerve damage", category: "Neurologie" },
  { word: "Gleichgewichtsorgan", article: "das", translation: "organ of balance", category: "Neurologie" },
  { word: "Bewegungsstörung", article: "die", translation: "movement disorder", category: "Neurologie" },

  // Chirurgie
  { word: "Betäubungsmittel", article: "das", translation: "anesthetic agent", category: "Chirurgie" },
  { word: "Skalpell", article: "das", translation: "scalpel", category: "Chirurgie" },
  { word: "Wundnaht", article: "die", translation: "suture", category: "Chirurgie" },
  { word: "Operationssaal", article: "der", translation: "operating room", category: "Chirurgie" },
  { word: "Transplantation", article: "die", translation: "transplantation", category: "Chirurgie" },
  { word: "Organspende", article: "die", translation: "organ donation", category: "Chirurgie" },
  { word: "Wundheilung", article: "die", translation: "wound healing", category: "Chirurgie" },
  { word: "Nachbehandlung", article: "die", translation: "aftercare", category: "Chirurgie" },
  { word: "Operationsbesteck", article: "das", translation: "surgical instruments", category: "Chirurgie" },
  { word: "Narbenbildung", article: "die", translation: "scar formation", category: "Chirurgie" },
  { word: "Vollnarkose", article: "die", translation: "general anesthesia", category: "Chirurgie" },
  { word: "Lokalanästhesie", article: "die", translation: "local anesthesia", category: "Chirurgie" },

  // Psychiatrie
  { word: "Angststörung", article: "die", translation: "anxiety disorder", category: "Psychiatrie" },
  { word: "Gesprächstherapie", article: "die", translation: "talk therapy", category: "Psychiatrie" },
  { word: "Schizophrenie", article: "die", translation: "schizophrenia", category: "Psychiatrie" },
  { word: "Zwangsstörung", article: "die", translation: "obsessive-compulsive disorder", category: "Psychiatrie" },
  { word: "Bindungsstörung", article: "die", translation: "attachment disorder", category: "Psychiatrie" },
  { word: "Verhaltenstherapie", article: "die", translation: "behavioral therapy", category: "Psychiatrie" },
  { word: "Traumabewältigung", article: "die", translation: "trauma processing", category: "Psychiatrie" },
  { word: "Belastungsstörung", article: "die", translation: "stress disorder", category: "Psychiatrie" },
  { word: "Wahnvorstellung", article: "die", translation: "delusion", category: "Psychiatrie" },
  { word: "Suchterkrankung", article: "die", translation: "addiction disorder", category: "Psychiatrie" },
  { word: "Selbstverletzung", article: "die", translation: "self-harm", category: "Psychiatrie" },
  { word: "Stimmungsschwankung", article: "die", translation: "mood swing", category: "Psychiatrie" },
  { word: "Antriebslosigkeit", article: "die", translation: "lack of drive", category: "Psychiatrie" },

  // Radiologie
  { word: "Röntgenaufnahme", article: "die", translation: "X-ray image", category: "Radiologie" },
  { word: "Computertomografie", article: "die", translation: "CT scan", category: "Radiologie" },
  { word: "Magnetresonanztomografie", article: "die", translation: "MRI", category: "Radiologie" },
  { word: "Strahlenbelastung", article: "die", translation: "radiation exposure", category: "Radiologie" },
  { word: "Kontrastmittel", article: "das", translation: "contrast agent", category: "Radiologie" },
  { word: "Bildgebung", article: "die", translation: "imaging", category: "Radiologie" },
  { word: "Schichtaufnahme", article: "die", translation: "cross-sectional image", category: "Radiologie" },
  { word: "Röntgenstrahlung", article: "die", translation: "X-ray radiation", category: "Radiologie" },

  // Orthopädie
  { word: "Bandscheibenvorfall", article: "der", translation: "herniated disc", category: "Orthopädie" },
  { word: "Gelenkentzündung", article: "die", translation: "joint inflammation", category: "Orthopädie" },
  { word: "Wirbelsäulenverkrümmung", article: "die", translation: "spinal curvature", category: "Orthopädie" },
  { word: "Kniegelenk", article: "das", translation: "knee joint", category: "Orthopädie" },
  { word: "Bänderdehnung", article: "die", translation: "ligament strain", category: "Orthopädie" },
  { word: "Prothese", article: "die", translation: "prosthesis", category: "Orthopädie" },
  { word: "Knorpelschaden", article: "der", translation: "cartilage damage", category: "Orthopädie" },
  { word: "Gelenkabnutzung", article: "die", translation: "joint wear", category: "Orthopädie" },
  { word: "Fehlstellung", article: "die", translation: "malposition", category: "Orthopädie" },

  // Dermatologie
  { word: "Hautkrankheit", article: "die", translation: "skin disease", category: "Dermatologie" },
  { word: "Neurodermitis", article: "die", translation: "atopic dermatitis", category: "Dermatologie" },
  { word: "Schuppenflechte", article: "die", translation: "psoriasis", category: "Dermatologie" },
  { word: "Muttermal", article: "das", translation: "birthmark", category: "Dermatologie" },
  { word: "Hautveränderung", article: "die", translation: "skin change", category: "Dermatologie" },
  { word: "Sonnenallergie", article: "die", translation: "sun allergy", category: "Dermatologie" },
  { word: "Hautbarriere", article: "die", translation: "skin barrier", category: "Dermatologie" },
  { word: "Hautirritation", article: "die", translation: "skin irritation", category: "Dermatologie" },

  // Gynäkologie
  { word: "Schwangerschaftsvorsorge", article: "die", translation: "prenatal care", category: "Gynäkologie" },
  { word: "Menstruationszyklus", article: "der", translation: "menstrual cycle", category: "Gynäkologie" },
  { word: "Fruchtbarkeit", article: "die", translation: "fertility", category: "Gynäkologie" },
  { word: "Geburtsvorbereitung", article: "die", translation: "birth preparation", category: "Gynäkologie" },
  { word: "Hormonhaushalt", article: "der", translation: "hormone balance", category: "Gynäkologie" },
  { word: "Wechseljahre", article: "die", translation: "menopause", category: "Gynäkologie" },
  { word: "Empfängnisverhütung", article: "die", translation: "contraception", category: "Gynäkologie" },

  // Pädiatrie
  { word: "Kinderheilkunde", article: "die", translation: "pediatrics", category: "Pädiatrie" },
  { word: "Reifeverzögerung", article: "die", translation: "developmental delay", category: "Pädiatrie" },
  { word: "Wachstumsphase", article: "die", translation: "growth phase", category: "Pädiatrie" },
  { word: "Kinderkrankheit", article: "die", translation: "childhood illness", category: "Pädiatrie" },
  { word: "Impfpflicht", article: "die", translation: "vaccination requirement", category: "Pädiatrie" },
  { word: "Frühgeburt", article: "die", translation: "premature birth", category: "Pädiatrie" },
  { word: "Neugeborenenvorsorge", article: "die", translation: "newborn checkup", category: "Pädiatrie" },

  // Anästhesiologie
  { word: "Beatmung", article: "die", translation: "ventilation", category: "Anästhesiologie" },
  { word: "Intensivstation", article: "die", translation: "intensive care unit", category: "Anästhesiologie" },
  { word: "Schmerztherapie", article: "die", translation: "pain therapy", category: "Anästhesiologie" },
  { word: "Aufwachphase", article: "die", translation: "recovery phase", category: "Anästhesiologie" },

  // Insolvenzrecht
  { word: "Insolvenzverfahren", article: "das", translation: "insolvency proceedings", category: "Insolvenzrecht" },
  { word: "Vergleichsangebot", article: "das", translation: "settlement offer", category: "Insolvenzrecht" },
  { word: "Gläubigerversammlung", article: "die", translation: "creditors' meeting", category: "Insolvenzrecht" },
  { word: "Insolvenzmasse", article: "die", translation: "bankruptcy estate", category: "Insolvenzrecht" },
  { word: "Restschuldbefreiung", article: "die", translation: "debt discharge", category: "Insolvenzrecht" },
  { word: "Gläubigerschutz", article: "der", translation: "creditor protection", category: "Insolvenzrecht" },
  { word: "Sanierungsplan", article: "der", translation: "restructuring plan", category: "Insolvenzrecht" },
  { word: "Überschuldung", article: "die", translation: "over-indebtedness", category: "Insolvenzrecht" },

  // Erbrecht
  { word: "Nachlassregelung", article: "die", translation: "estate settlement", category: "Erbrecht" },
  { word: "Pflichtteil", article: "der", translation: "compulsory portion", category: "Erbrecht" },
  { word: "Erbschein", article: "der", translation: "certificate of inheritance", category: "Erbrecht" },
  { word: "Testamentsvollstrecker", article: "der", translation: "executor", category: "Erbrecht" },
  { word: "Erbengemeinschaft", article: "die", translation: "community of heirs", category: "Erbrecht" },
  { word: "Enterbung", article: "die", translation: "disinheritance", category: "Erbrecht" },
  { word: "Erbfolge", article: "die", translation: "order of succession", category: "Erbrecht" },
  { word: "Vermächtnis", article: "das", translation: "bequest", category: "Erbrecht" },

  // Familienrecht
  { word: "Sorgerechtsstreit", article: "der", translation: "custody dispute", category: "Familienrecht" },
  { word: "Sorgerechtsübertragung", article: "die", translation: "transfer of custody", category: "Familienrecht" },
  { word: "Scheidungsfolge", article: "die", translation: "consequence of divorce", category: "Familienrecht" },
  { word: "Ehevertrag", article: "der", translation: "prenuptial agreement", category: "Familienrecht" },
  { word: "Vaterschaftsanerkennung", article: "die", translation: "acknowledgment of paternity", category: "Familienrecht" },
  { word: "Umgangsrecht", article: "das", translation: "right of access", category: "Familienrecht" },
  { word: "Vormundschaft", article: "die", translation: "guardianship", category: "Familienrecht" },
  { word: "Güterstand", article: "der", translation: "matrimonial property regime", category: "Familienrecht" },

  // Wettbewerbsrecht
  { word: "Kartellverstoß", article: "der", translation: "antitrust violation", category: "Wettbewerbsrecht" },
  { word: "Marktbeherrschung", article: "die", translation: "market dominance", category: "Wettbewerbsrecht" },
  { word: "Marktmanipulation", article: "die", translation: "market manipulation", category: "Wettbewerbsrecht" },
  { word: "Wettbewerbsverstoß", article: "der", translation: "competition law violation", category: "Wettbewerbsrecht" },
  { word: "Fusionskontrolle", article: "die", translation: "merger control", category: "Wettbewerbsrecht" },
  { word: "Marktmissbrauch", article: "der", translation: "market abuse", category: "Wettbewerbsrecht" },
  { word: "Kartellamt", article: "das", translation: "antitrust authority", category: "Wettbewerbsrecht" },

  // Urheberrecht
  { word: "Urheberrechtsverletzung", article: "die", translation: "copyright infringement", category: "Urheberrecht" },
  { word: "Nutzungsrecht", article: "das", translation: "usage right", category: "Urheberrecht" },
  { word: "Lizenzvertrag", article: "der", translation: "licensing agreement", category: "Urheberrecht" },
  { word: "Plagiatsvorwurf", article: "der", translation: "plagiarism accusation", category: "Urheberrecht" },
  { word: "Urheberschaft", article: "die", translation: "authorship", category: "Urheberrecht" },
  { word: "Vervielfältigungsrecht", article: "das", translation: "right of reproduction", category: "Urheberrecht" },

  // Patentrecht
  { word: "Patentanmeldung", article: "die", translation: "patent application", category: "Patentrecht" },
  { word: "Erfindungshöhe", article: "die", translation: "inventive step", category: "Patentrecht" },
  { word: "Patentanspruch", article: "der", translation: "patent claim", category: "Patentrecht" },
  { word: "Schutzrecht", article: "das", translation: "proprietary right", category: "Patentrecht" },
  { word: "Patentverletzung", article: "die", translation: "patent infringement", category: "Patentrecht" },
  { word: "Gebrauchsmuster", article: "das", translation: "utility model", category: "Patentrecht" },
  { word: "Patentanspruchsformulierung", article: "die", translation: "patent claim wording", category: "Patentrecht" },
  { word: "Recherchebericht", article: "der", translation: "search report", category: "Patentrecht" },
  { word: "Neuheitsschädlichkeit", article: "die", translation: "novelty-destroying prior art", category: "Patentrecht" },

  // Prozessrecht
  { word: "Beweisaufnahme", article: "die", translation: "taking of evidence", category: "Prozessrecht" },
  { word: "Klageschrift", article: "die", translation: "statement of claim", category: "Prozessrecht" },
  { word: "Indizienbeweis", article: "der", translation: "circumstantial evidence", category: "Prozessrecht" },
  { word: "Rechtsmittel", article: "das", translation: "legal remedy", category: "Prozessrecht" },
  { word: "Zeugenaussage", article: "die", translation: "witness testimony", category: "Prozessrecht" },
  { word: "Beweiswürdigung", article: "die", translation: "evaluation of evidence", category: "Prozessrecht" },
  { word: "Gerichtsverhandlung", article: "die", translation: "court hearing", category: "Prozessrecht" },
  { word: "Revisionsverfahren", article: "das", translation: "appellate review proceedings", category: "Prozessrecht" },

  // Völkerstrafrecht
  { word: "Verbrechenstatbestand", article: "der", translation: "elements of a crime", category: "Völkerstrafrecht" },
  { word: "Vertreibungspolitik", article: "die", translation: "policy of expulsion", category: "Völkerstrafrecht" },
  { word: "Auslieferungsverfahren", article: "das", translation: "extradition proceedings", category: "Völkerstrafrecht" },
  { word: "Völkerrechtsverstoß", article: "der", translation: "violation of international law", category: "Völkerstrafrecht" },
  { word: "Tribunalzuständigkeit", article: "die", translation: "tribunal jurisdiction", category: "Völkerstrafrecht" },
  { word: "Kriegsvölkerrecht", article: "das", translation: "law of armed conflict", category: "Völkerstrafrecht" },

  // Verfassungsgerichtsbarkeit
  { word: "Verfassungsbeschwerde", article: "die", translation: "constitutional complaint", category: "Verfassungsgerichtsbarkeit" },
  { word: "Normenkontrolle", article: "die", translation: "judicial review of legislation", category: "Verfassungsgerichtsbarkeit" },
  { word: "Grundrechtsverletzung", article: "die", translation: "violation of fundamental rights", category: "Verfassungsgerichtsbarkeit" },
  { word: "Gerichtsbarkeit", article: "die", translation: "jurisdiction", category: "Verfassungsgerichtsbarkeit" },
  { word: "Verfassungsauslegung", article: "die", translation: "constitutional interpretation", category: "Verfassungsgerichtsbarkeit" },
  { word: "Kompetenzüberschreitung", article: "die", translation: "exceeding one's authority", category: "Verfassungsgerichtsbarkeit" },

  // Rechtsphilosophie
  { word: "Gerechtigkeitstheorie", article: "die", translation: "theory of justice", category: "Rechtsphilosophie" },
  { word: "Naturrecht", article: "das", translation: "natural law", category: "Rechtsphilosophie" },
  { word: "Rechtspositivismus", article: "der", translation: "legal positivism", category: "Rechtsphilosophie" },
  { word: "Legitimationsgrundlage", article: "die", translation: "basis of legitimacy", category: "Rechtsphilosophie" },

  // Investmentbanking
  { word: "Investmentbank", article: "die", translation: "investment bank", category: "Investmentbanking" },
  { word: "Börsengang", article: "der", translation: "IPO/stock market listing", category: "Investmentbanking" },
  { word: "Kapitalerhöhung", article: "die", translation: "capital increase", category: "Investmentbanking" },
  { word: "Unternehmensübernahme", article: "die", translation: "corporate takeover", category: "Investmentbanking" },
  { word: "Aktienrückkauf", article: "der", translation: "share buyback", category: "Investmentbanking" },
  { word: "Zeichnungsfrist", article: "die", translation: "subscription period", category: "Investmentbanking" },
  { word: "Emissionshaus", article: "das", translation: "issuing house", category: "Investmentbanking" },
  { word: "Konsortialkredit", article: "der", translation: "syndicated loan", category: "Investmentbanking" },

  // Risikokapital
  { word: "Risikokapitalgeber", article: "der", translation: "venture capitalist", category: "Risikokapital" },
  { word: "Anschlussfinanzierung", article: "die", translation: "follow-on financing", category: "Risikokapital" },
  { word: "Beteiligungsgesellschaft", article: "die", translation: "investment company", category: "Risikokapital" },
  { word: "Gründungsphase", article: "die", translation: "founding phase", category: "Risikokapital" },
  { word: "Ausstiegsstrategie", article: "die", translation: "exit strategy", category: "Risikokapital" },
  { word: "Unternehmensbewertung", article: "die", translation: "business valuation", category: "Risikokapital" },
  { word: "Wagniskapital", article: "das", translation: "venture capital", category: "Risikokapital" },

  // Fusionen & Übernahmen
  { word: "Übernahmeangebot", article: "das", translation: "takeover offer", category: "Fusionen & Übernahmen" },
  { word: "Fusionsvertrag", article: "der", translation: "merger agreement", category: "Fusionen & Übernahmen" },
  { word: "Synergieeffekt", article: "der", translation: "synergy effect", category: "Fusionen & Übernahmen" },
  { word: "Übernahmeprämie", article: "die", translation: "takeover premium", category: "Fusionen & Übernahmen" },
  { word: "Sorgfaltsprüfung", article: "die", translation: "due diligence", category: "Fusionen & Übernahmen" },
  { word: "Feindübernahme", article: "die", translation: "hostile takeover", category: "Fusionen & Übernahmen" },
  { word: "Zusammenschluss", article: "der", translation: "merger", category: "Fusionen & Übernahmen" },

  // Derivate
  { word: "Terminkontrakt", article: "der", translation: "futures contract", category: "Derivate" },
  { word: "Optionsschein", article: "der", translation: "warrant", category: "Derivate" },
  { word: "Absicherungsgeschäft", article: "das", translation: "hedging transaction", category: "Derivate" },
  { word: "Basiswert", article: "der", translation: "underlying asset", category: "Derivate" },
  { word: "Wertpapierleihe", article: "die", translation: "securities lending", category: "Derivate" },
  { word: "Hebelwirkung", article: "die", translation: "leverage effect", category: "Derivate" },
  { word: "Terminmarkt", article: "der", translation: "futures market", category: "Derivate" },

  // Geldpolitik
  { word: "Zinssatzentscheidung", article: "die", translation: "interest rate decision", category: "Geldpolitik" },
  { word: "Offenmarktpolitik", article: "die", translation: "open market policy", category: "Geldpolitik" },
  { word: "Geldmengenwachstum", article: "das", translation: "money supply growth", category: "Geldpolitik" },
  { word: "Leitzinssenkung", article: "die", translation: "key interest rate cut", category: "Geldpolitik" },
  { word: "Devisenreserve", article: "die", translation: "foreign exchange reserve", category: "Geldpolitik" },
  { word: "Preisstabilität", article: "die", translation: "price stability", category: "Geldpolitik" },

  // Außenhandel
  { word: "Exportquote", article: "die", translation: "export ratio", category: "Außenhandel" },
  { word: "Handelsbilanzdefizit", article: "das", translation: "trade deficit", category: "Außenhandel" },
  { word: "Zollabkommen", article: "das", translation: "customs agreement", category: "Außenhandel" },
  { word: "Einfuhrbeschränkung", article: "die", translation: "import restriction", category: "Außenhandel" },
  { word: "Freihandelszone", article: "die", translation: "free trade zone", category: "Außenhandel" },
  { word: "Exportförderung", article: "die", translation: "export promotion", category: "Außenhandel" },
  { word: "Importquote", article: "die", translation: "import quota", category: "Außenhandel" },

  // Controlling
  { word: "Kostenrechnung", article: "die", translation: "cost accounting", category: "Controlling" },
  { word: "Budgetplanung", article: "die", translation: "budget planning", category: "Controlling" },
  { word: "Abweichungsanalyse", article: "die", translation: "variance analysis", category: "Controlling" },
  { word: "Kennzahlensystem", article: "das", translation: "key performance indicator system", category: "Controlling" },
  { word: "Liquiditätsplanung", article: "die", translation: "liquidity planning", category: "Controlling" },
  { word: "Rentabilitätsberechnung", article: "die", translation: "profitability calculation", category: "Controlling" },

  // Logistikmanagement
  { word: "Lieferkettenmanagement", article: "das", translation: "supply chain management", category: "Logistikmanagement" },
  { word: "Lagerbestandsführung", article: "die", translation: "inventory management", category: "Logistikmanagement" },
  { word: "Beschaffungslogistik", article: "die", translation: "procurement logistics", category: "Logistikmanagement" },
  { word: "Frachtabwicklung", article: "die", translation: "freight handling", category: "Logistikmanagement" },
  { word: "Distributionsnetzwerk", article: "das", translation: "distribution network", category: "Logistikmanagement" },
  { word: "Lieferengpass", article: "der", translation: "supply bottleneck", category: "Logistikmanagement" },

  // Personalwesen
  { word: "Personalbeschaffung", article: "die", translation: "personnel recruitment", category: "Personalwesen" },
  { word: "Nachfolgeplanung", article: "die", translation: "succession planning", category: "Personalwesen" },
  { word: "Leistungsbeurteilung", article: "die", translation: "performance appraisal", category: "Personalwesen" },
  { word: "Qualifizierungsmaßnahme", article: "die", translation: "training measure", category: "Personalwesen" },
  { word: "Fluktuationsrate", article: "die", translation: "turnover rate", category: "Personalwesen" },
  { word: "Vergütungsmodell", article: "das", translation: "compensation model", category: "Personalwesen" },
  { word: "Personalfreisetzung", article: "die", translation: "workforce reduction", category: "Personalwesen" },

  // Maschinenbau
  { word: "Getriebeübersetzung", article: "die", translation: "gear ratio", category: "Maschinenbau" },
  { word: "Werkstoffkunde", article: "die", translation: "materials science", category: "Maschinenbau" },
  { word: "Fertigungstoleranz", article: "die", translation: "manufacturing tolerance", category: "Maschinenbau" },
  { word: "Antriebswelle", article: "die", translation: "drive shaft", category: "Maschinenbau" },
  { word: "Lagerreibung", article: "die", translation: "bearing friction", category: "Maschinenbau" },
  { word: "Konstruktionszeichnung", article: "die", translation: "construction drawing", category: "Maschinenbau" },
  { word: "Verschleißfestigkeit", article: "die", translation: "wear resistance", category: "Maschinenbau" },
  { word: "Bauteilbelastung", article: "die", translation: "component load", category: "Maschinenbau" },

  // Elektrotechnik
  { word: "Stromkreislauf", article: "der", translation: "electric circuit", category: "Elektrotechnik" },
  { word: "Wechselstromgenerator", article: "der", translation: "alternator", category: "Elektrotechnik" },
  { word: "Halbleitertechnik", article: "die", translation: "semiconductor technology", category: "Elektrotechnik" },
  { word: "Schaltkreisentwurf", article: "der", translation: "circuit design", category: "Elektrotechnik" },
  { word: "Spannungsregler", article: "der", translation: "voltage regulator", category: "Elektrotechnik" },
  { word: "Schaltplan", article: "der", translation: "circuit diagram", category: "Elektrotechnik" },
  { word: "Induktivität", article: "die", translation: "inductance", category: "Elektrotechnik" },
  { word: "Widerstandsmessung", article: "die", translation: "resistance measurement", category: "Elektrotechnik" },

  // Bauingenieurwesen
  { word: "Tragwerksplanung", article: "die", translation: "structural design", category: "Bauingenieurwesen" },
  { word: "Bodengutachten", article: "das", translation: "soil survey report", category: "Bauingenieurwesen" },
  { word: "Statikberechnung", article: "die", translation: "structural calculation", category: "Bauingenieurwesen" },
  { word: "Betonfestigkeit", article: "die", translation: "concrete strength", category: "Bauingenieurwesen" },
  { word: "Fundamentplanung", article: "die", translation: "foundation planning", category: "Bauingenieurwesen" },
  { word: "Lastverteilung", article: "die", translation: "load distribution", category: "Bauingenieurwesen" },
  { word: "Bauabnahme", article: "die", translation: "building acceptance inspection", category: "Bauingenieurwesen" },

  // Verfahrenstechnik
  { word: "Destillationsanlage", article: "die", translation: "distillation plant", category: "Verfahrenstechnik" },
  { word: "Reaktionskessel", article: "der", translation: "reaction vessel", category: "Verfahrenstechnik" },
  { word: "Trennverfahren", article: "das", translation: "separation process", category: "Verfahrenstechnik" },
  { word: "Durchflussmenge", article: "die", translation: "flow rate", category: "Verfahrenstechnik" },
  { word: "Prozessleittechnik", article: "die", translation: "process control technology", category: "Verfahrenstechnik" },
  { word: "Rohstoffaufbereitung", article: "die", translation: "raw material processing", category: "Verfahrenstechnik" },

  // Luftfahrttechnik
  { word: "Triebwerksschub", article: "der", translation: "engine thrust", category: "Luftfahrttechnik" },
  { word: "Flugzeugrumpf", article: "der", translation: "aircraft fuselage", category: "Luftfahrttechnik" },
  { word: "Auftriebskraft", article: "die", translation: "lift force", category: "Luftfahrttechnik" },
  { word: "Luftwiderstand", article: "der", translation: "air resistance", category: "Luftfahrttechnik" },
  { word: "Steuerungssystem", article: "das", translation: "control system", category: "Luftfahrttechnik" },
  { word: "Landeklappe", article: "die", translation: "landing flap", category: "Luftfahrttechnik" },

  // Nanotechnologie
  { word: "Nanopartikel", article: "das", translation: "nanoparticle", category: "Nanotechnologie" },
  { word: "Oberflächenbeschichtung", article: "die", translation: "surface coating", category: "Nanotechnologie" },
  { word: "Molekülstrukturanalyse", article: "die", translation: "molecular structure analysis", category: "Nanotechnologie" },

  // Materialwissenschaft
  { word: "Materialeigenschaft", article: "die", translation: "material property", category: "Materialwissenschaft" },
  { word: "Legierungszusammensetzung", article: "die", translation: "alloy composition", category: "Materialwissenschaft" },
  { word: "Kristallgitter", article: "das", translation: "crystal lattice", category: "Materialwissenschaft" },
  { word: "Zugfestigkeit", article: "die", translation: "tensile strength", category: "Materialwissenschaft" },
  { word: "Materialermüdung", article: "die", translation: "material fatigue", category: "Materialwissenschaft" },

  // Robotik
  { word: "Roboterarm", article: "der", translation: "robotic arm", category: "Robotik" },
  { word: "Bewegungssteuerung", article: "die", translation: "motion control", category: "Robotik" },
  { word: "Sensortechnik", article: "die", translation: "sensor technology", category: "Robotik" },
  { word: "Greifmechanismus", article: "der", translation: "gripping mechanism", category: "Robotik" },
  { word: "Positioniergenauigkeit", article: "die", translation: "positioning accuracy", category: "Robotik" },
  { word: "Bahnplanung", article: "die", translation: "path planning", category: "Robotik" },

  // Automatisierungstechnik
  { word: "Regelungstechnik", article: "die", translation: "control engineering", category: "Automatisierungstechnik" },
  { word: "Prozessautomatisierung", article: "die", translation: "process automation", category: "Automatisierungstechnik" },
  { word: "Steuerungslogik", article: "die", translation: "control logic", category: "Automatisierungstechnik" },
  { word: "Rückkopplungsschleife", article: "die", translation: "feedback loop", category: "Automatisierungstechnik" },
  { word: "Anlagensteuerung", article: "die", translation: "plant control", category: "Automatisierungstechnik" },

  // Softwareentwicklung (vertieft)
  { word: "Systemarchitektur", article: "die", translation: "system architecture", category: "Softwareentwicklung (vertieft)" },
  { word: "Quellcodeverwaltung", article: "die", translation: "source code management", category: "Softwareentwicklung (vertieft)" },
  { word: "Programmierschnittstelle", article: "die", translation: "programming interface", category: "Softwareentwicklung (vertieft)" },
  { word: "Codeoptimierung", article: "die", translation: "code optimization", category: "Softwareentwicklung (vertieft)" },
  { word: "Fehlerdiagnose", article: "die", translation: "fault diagnosis", category: "Softwareentwicklung (vertieft)" },
  { word: "Codeüberprüfung", article: "die", translation: "code review", category: "Softwareentwicklung (vertieft)" },
  { word: "Testabdeckung", article: "die", translation: "test coverage", category: "Softwareentwicklung (vertieft)" },

  // Datenbanktechnik
  { word: "Datenbankabfrage", article: "die", translation: "database query", category: "Datenbanktechnik" },
  { word: "Datensatzstruktur", article: "die", translation: "record structure", category: "Datenbanktechnik" },
  { word: "Indexierungsverfahren", article: "das", translation: "indexing method", category: "Datenbanktechnik" },
  { word: "Datenbankschema", article: "das", translation: "database schema", category: "Datenbanktechnik" },
  { word: "Abfragesprache", article: "die", translation: "query language", category: "Datenbanktechnik" },

  // Netzwerktechnik
  { word: "Netzwerkprotokoll", article: "das", translation: "network protocol", category: "Netzwerktechnik" },
  { word: "Datenübertragungsrate", article: "die", translation: "data transfer rate", category: "Netzwerktechnik" },
  { word: "Netzwerktopologie", article: "die", translation: "network topology", category: "Netzwerktechnik" },
  { word: "Firewalleinstellung", article: "die", translation: "firewall setting", category: "Netzwerktechnik" },

  // Kryptographie
  { word: "Verschlüsselungsverfahren", article: "das", translation: "encryption method", category: "Kryptographie" },
  { word: "Schlüsselaustausch", article: "der", translation: "key exchange", category: "Kryptographie" },
  { word: "Hashfunktion", article: "die", translation: "hash function", category: "Kryptographie" },
  { word: "Signaturprüfung", article: "die", translation: "signature verification", category: "Kryptographie" },

  // Maschinelles Lernen
  { word: "Trainingsdatensatz", article: "der", translation: "training dataset", category: "Maschinelles Lernen" },
  { word: "Merkmalsextraktion", article: "die", translation: "feature extraction", category: "Maschinelles Lernen" },
  { word: "Modellgenauigkeit", article: "die", translation: "model accuracy", category: "Maschinelles Lernen" },
  { word: "Überanpassung", article: "die", translation: "overfitting", category: "Maschinelles Lernen" },
  { word: "Gewichtsanpassung", article: "die", translation: "weight adjustment", category: "Maschinelles Lernen" },
  { word: "Neuronennetz", article: "das", translation: "neural network", category: "Maschinelles Lernen" },

  // Linguistik
  { word: "Spracherwerbsforschung", article: "die", translation: "language acquisition research", category: "Linguistik" },
  { word: "Satzstruktur", article: "die", translation: "sentence structure", category: "Linguistik" },
  { word: "Wortbildungslehre", article: "die", translation: "morphology (word formation)", category: "Linguistik" },
  { word: "Sprachvergleich", article: "der", translation: "language comparison", category: "Linguistik" },
  { word: "Satzbauplan", article: "der", translation: "sentence construction pattern", category: "Linguistik" },
  { word: "Bedeutungsnuance", article: "die", translation: "shade of meaning", category: "Linguistik" },
  { word: "Standardsprache", article: "die", translation: "standard language", category: "Linguistik" },
  { word: "Dialektforschung", article: "die", translation: "dialectology", category: "Linguistik" },
  { word: "Sprachkontakt", article: "der", translation: "language contact", category: "Linguistik" },
  { word: "Grammatiktheorie", article: "die", translation: "grammar theory", category: "Linguistik" },

  // Semiotik
  { word: "Zeichensystem", article: "das", translation: "sign system", category: "Semiotik" },
  { word: "Bedeutungsträger", article: "der", translation: "bearer of meaning", category: "Semiotik" },
  { word: "Zeichenordnung", article: "die", translation: "sign order", category: "Semiotik" },
  { word: "Zeichendeutung", article: "die", translation: "sign interpretation", category: "Semiotik" },
  { word: "Codierungsprozess", article: "der", translation: "encoding process", category: "Semiotik" },
  { word: "Zeichenträger", article: "der", translation: "sign vehicle", category: "Semiotik" },

  // Hermeneutik
  { word: "Textauslegung", article: "die", translation: "textual interpretation", category: "Hermeneutik" },
  { word: "Sinnverstehen", article: "das", translation: "understanding of meaning", category: "Hermeneutik" },
  { word: "Deutungshorizont", article: "der", translation: "horizon of interpretation", category: "Hermeneutik" },
  { word: "Vorverständnis", article: "das", translation: "pre-understanding", category: "Hermeneutik" },
  { word: "Interpretationsansatz", article: "der", translation: "interpretive approach", category: "Hermeneutik" },
  { word: "Sinnzusammenhang", article: "der", translation: "context of meaning", category: "Hermeneutik" },

  // Literaturtheorie
  { word: "Erzählinstanz", article: "die", translation: "narrative instance", category: "Literaturtheorie" },
  { word: "Handlungsstrang", article: "der", translation: "plot line", category: "Literaturtheorie" },
  { word: "Erzählmuster", article: "das", translation: "narrative pattern", category: "Literaturtheorie" },
  { word: "Figurenkonstellation", article: "die", translation: "character constellation", category: "Literaturtheorie" },
  { word: "Gattungsmerkmal", article: "das", translation: "genre feature", category: "Literaturtheorie" },
  { word: "Erzählzeit", article: "die", translation: "narrative time", category: "Literaturtheorie" },
  { word: "Motivgeschichte", article: "die", translation: "history of a literary motif", category: "Literaturtheorie" },
  { word: "Sprachbild", article: "das", translation: "figure of speech", category: "Literaturtheorie" },

  // Argumentationstechnik (vertieft)
  { word: "Sprachgewandtheit", article: "die", translation: "verbal fluency", category: "Argumentationstechnik (vertieft)" },
  { word: "Redekunst", article: "die", translation: "art of rhetoric", category: "Argumentationstechnik (vertieft)" },
  { word: "Argumentationsstrategie", article: "die", translation: "argumentation strategy", category: "Argumentationstechnik (vertieft)" },
  { word: "Widerlegungsstrategie", article: "die", translation: "refutation strategy", category: "Argumentationstechnik (vertieft)" },
  { word: "Schlussfolgerungslogik", article: "die", translation: "logic of inference", category: "Argumentationstechnik (vertieft)" },
  { word: "Argumentationslücke", article: "die", translation: "gap in argumentation", category: "Argumentationstechnik (vertieft)" },

  // Übersetzungswissenschaft
  { word: "Übersetzungslücke", article: "die", translation: "translation gap", category: "Übersetzungswissenschaft" },
  { word: "Dolmetschtechnik", article: "die", translation: "interpreting technique", category: "Übersetzungswissenschaft" },
  { word: "Übersetzungsverfahren", article: "das", translation: "translation method", category: "Übersetzungswissenschaft" },
  { word: "Zieltextfunktion", article: "die", translation: "target text function", category: "Übersetzungswissenschaft" },
  { word: "Kulturtransfer", article: "der", translation: "cultural transfer", category: "Übersetzungswissenschaft" },
  { word: "Terminologiedatenbank", article: "die", translation: "terminology database", category: "Übersetzungswissenschaft" },

  // Kulturanthropologie
  { word: "Sippenordnung", article: "die", translation: "clan order", category: "Kulturanthropologie" },
  { word: "Ritualhandlung", article: "die", translation: "ritual act", category: "Kulturanthropologie" },
  { word: "Gesellschaftsordnung", article: "die", translation: "social order", category: "Kulturanthropologie" },
  { word: "Brauchtumspflege", article: "die", translation: "preservation of customs", category: "Kulturanthropologie" },
  { word: "Ahnenverehrung", article: "die", translation: "ancestor worship", category: "Kulturanthropologie" },
  { word: "Weltanschauungssystem", article: "das", translation: "worldview system", category: "Kulturanthropologie" },

  // Ethnologie
  { word: "Fallstudienanalyse", article: "die", translation: "case study analysis", category: "Ethnologie" },
  { word: "Volksgruppe", article: "die", translation: "ethnic group", category: "Ethnologie" },
  { word: "Siedlungsgeschichte", article: "die", translation: "settlement history", category: "Ethnologie" },
  { word: "Traditionsbewahrung", article: "die", translation: "preservation of tradition", category: "Ethnologie" },
  { word: "Sprachgruppe", article: "die", translation: "language group", category: "Ethnologie" },

  // Musiktheorie
  { word: "Harmonielehre", article: "die", translation: "music theory (harmony)", category: "Musiktheorie" },
  { word: "Tonartwechsel", article: "der", translation: "key change", category: "Musiktheorie" },
  { word: "Akkordfolge", article: "die", translation: "chord progression", category: "Musiktheorie" },
  { word: "Taktwechsel", article: "der", translation: "time signature change", category: "Musiktheorie" },
  { word: "Notenschrift", article: "die", translation: "musical notation", category: "Musiktheorie" },
  { word: "Kompositionstechnik", article: "die", translation: "composition technique", category: "Musiktheorie" },
  { word: "Klangfarbe", article: "die", translation: "timbre", category: "Musiktheorie" },
  { word: "Melodieführung", article: "die", translation: "melodic line", category: "Musiktheorie" },
  { word: "Orchestrierung", article: "die", translation: "orchestration", category: "Musiktheorie" },
  { word: "Rhythmusstruktur", article: "die", translation: "rhythmic structure", category: "Musiktheorie" },

  // Architekturtheorie
  { word: "Raumakustik", article: "die", translation: "room acoustics", category: "Architekturtheorie" },
  { word: "Fassadengestaltung", article: "die", translation: "facade design", category: "Architekturtheorie" },
  { word: "Grundrissplanung", article: "die", translation: "floor plan design", category: "Architekturtheorie" },
  { word: "Baustil", article: "der", translation: "architectural style", category: "Architekturtheorie" },
  { word: "Formensprache", article: "die", translation: "design vocabulary", category: "Architekturtheorie" },
  { word: "Lichtführung", article: "die", translation: "light design", category: "Architekturtheorie" },
  { word: "Bauornamentik", article: "die", translation: "architectural ornamentation", category: "Architekturtheorie" },
  { word: "Städtebau", article: "der", translation: "urban architecture", category: "Architekturtheorie" },

  // Filmtechnik
  { word: "Kameraführung", article: "die", translation: "camera work", category: "Filmtechnik" },
  { word: "Montagerhythmus", article: "der", translation: "editing rhythm", category: "Filmtechnik" },
  { word: "Bildaufbau", article: "der", translation: "image structure", category: "Filmtechnik" },
  { word: "Lichtsetzung", article: "die", translation: "lighting setup", category: "Filmtechnik" },
  { word: "Tonmischung", article: "die", translation: "sound mixing", category: "Filmtechnik" },
  { word: "Drehbuchstruktur", article: "die", translation: "screenplay structure", category: "Filmtechnik" },
  { word: "Einstellungsgröße", article: "die", translation: "shot size", category: "Filmtechnik" },
  { word: "Farbkorrektur", article: "die", translation: "color correction", category: "Filmtechnik" },

  // Theaterwissenschaft
  { word: "Bühnenaufbau", article: "der", translation: "stage construction", category: "Theaterwissenschaft" },
  { word: "Rollengestaltung", article: "die", translation: "character portrayal", category: "Theaterwissenschaft" },
  { word: "Inszenierungskonzept", article: "das", translation: "staging concept", category: "Theaterwissenschaft" },
  { word: "Dramaturgie", article: "die", translation: "dramaturgy", category: "Theaterwissenschaft" },
  { word: "Bühnenpräsenz", article: "die", translation: "stage presence", category: "Theaterwissenschaft" },
  { word: "Kostümbild", article: "das", translation: "costume design", category: "Theaterwissenschaft" },
  { word: "Rollenverständnis", article: "das", translation: "understanding of a role", category: "Theaterwissenschaft" },

  // Fototechnik
  { word: "Belichtungszeit", article: "die", translation: "exposure time", category: "Fototechnik" },
  { word: "Bildschärfe", article: "die", translation: "image sharpness", category: "Fototechnik" },
  { word: "Brennweite", article: "die", translation: "focal length", category: "Fototechnik" },
  { word: "Bildbearbeitung", article: "die", translation: "image editing", category: "Fototechnik" },
  { word: "Lichtempfindlichkeit", article: "die", translation: "light sensitivity", category: "Fototechnik" },
  { word: "Bildausschnitt", article: "der", translation: "image crop/framing", category: "Fototechnik" },

  // Designtheorie
  { word: "Formkontrast", article: "der", translation: "contrast of form", category: "Designtheorie" },
  { word: "Gestaltungsprinzip", article: "das", translation: "design principle", category: "Designtheorie" },
  { word: "Funktionalität", article: "die", translation: "functionality", category: "Designtheorie" },
  { word: "Materialästhetik", article: "die", translation: "material aesthetics", category: "Designtheorie" },
  { word: "Nutzerfreundlichkeit", article: "die", translation: "user-friendliness", category: "Designtheorie" },
  { word: "Designprozess", article: "der", translation: "design process", category: "Designtheorie" },
  { word: "Farbkonzept", article: "das", translation: "color concept", category: "Designtheorie" },

  // Metaphysik
  { word: "Seinsbegriff", article: "der", translation: "concept of being", category: "Metaphysik" },
  { word: "Wesensbestimmung", article: "die", translation: "determination of essence", category: "Metaphysik" },
  { word: "Ursachenlehre", article: "die", translation: "theory of causation", category: "Metaphysik" },
  { word: "Substanzbegriff", article: "der", translation: "concept of substance", category: "Metaphysik" },
  { word: "Kausalzusammenhang", article: "der", translation: "causal relationship", category: "Metaphysik" },
  { word: "Existenzbeweis", article: "der", translation: "proof of existence", category: "Metaphysik" },
  { word: "Seinsordnung", article: "die", translation: "order of being", category: "Metaphysik" },

  // Sprachphilosophie
  { word: "Bedeutungstheorie", article: "die", translation: "theory of meaning", category: "Sprachphilosophie" },
  { word: "Sprechakttheorie", article: "die", translation: "speech act theory", category: "Sprachphilosophie" },
  { word: "Referenzbegriff", article: "der", translation: "concept of reference", category: "Sprachphilosophie" },
  { word: "Sprachlogik", article: "die", translation: "logic of language", category: "Sprachphilosophie" },
  { word: "Aussagewert", article: "der", translation: "truth value of a statement", category: "Sprachphilosophie" },
  { word: "Bezeichnungsfunktion", article: "die", translation: "referential function", category: "Sprachphilosophie" },

  // Moralphilosophie
  { word: "Pflichtenlehre", article: "die", translation: "deontology", category: "Moralphilosophie" },
  { word: "Tugendethik", article: "die", translation: "virtue ethics", category: "Moralphilosophie" },
  { word: "Nutzenkalkül", article: "das", translation: "utilitarian calculus", category: "Moralphilosophie" },
  { word: "Handlungsmaxime", article: "die", translation: "maxim of action", category: "Moralphilosophie" },
  { word: "Gewissensfreiheit", article: "die", translation: "freedom of conscience", category: "Moralphilosophie" },
  { word: "Moralurteil", article: "das", translation: "moral judgment", category: "Moralphilosophie" },
  { word: "Wertehierarchie", article: "die", translation: "hierarchy of values", category: "Moralphilosophie" },

  // Politische Philosophie
  { word: "Herrschaftslegitimation", article: "die", translation: "legitimation of rule", category: "Politische Philosophie" },
  { word: "Gesellschaftsvertrag", article: "der", translation: "social contract", category: "Politische Philosophie" },
  { word: "Herrschaftsform", article: "die", translation: "form of governance", category: "Politische Philosophie" },
  { word: "Freiheitsbegriff", article: "der", translation: "concept of freedom", category: "Politische Philosophie" },
  { word: "Staatszweck", article: "der", translation: "purpose of the state", category: "Politische Philosophie" },
  { word: "Volkssouveränität", article: "die", translation: "popular sovereignty", category: "Politische Philosophie" },

  // Wissenschaftsphilosophie
  { word: "Erkenntnisgrenze", article: "die", translation: "limit of knowledge", category: "Wissenschaftsphilosophie" },
  { word: "Theorienbildung", article: "die", translation: "theory formation", category: "Wissenschaftsphilosophie" },
  { word: "Verifikationsprinzip", article: "das", translation: "verification principle", category: "Wissenschaftsphilosophie" },
  { word: "Wissenschaftsparadigma", article: "das", translation: "scientific paradigm", category: "Wissenschaftsphilosophie" },
  { word: "Erklärungsmodell", article: "das", translation: "explanatory model", category: "Wissenschaftsphilosophie" },
  { word: "Beobachtungsdaten", article: "die", translation: "observational data", category: "Wissenschaftsphilosophie" },

  // Bewusstseinsphilosophie
  { word: "Bewusstseinszustand", article: "der", translation: "state of consciousness", category: "Bewusstseinsphilosophie" },
  { word: "Selbsterkenntnis", article: "die", translation: "self-knowledge", category: "Bewusstseinsphilosophie" },
  { word: "Geist-Körper-Problem", article: "das", translation: "mind-body problem", category: "Bewusstseinsphilosophie" },
  { word: "Wahrnehmungsinhalt", article: "der", translation: "perceptual content", category: "Bewusstseinsphilosophie" },
  { word: "Ich-Bewusstsein", article: "das", translation: "self-awareness", category: "Bewusstseinsphilosophie" },
  { word: "Willensfreiheit", article: "die", translation: "free will", category: "Bewusstseinsphilosophie" },

  // Umweltrecht
  { word: "Ausnahmegenehmigung", article: "die", translation: "exemption permit", category: "Umweltrecht" },
  { word: "Umweltverträglichkeitsprüfung", article: "die", translation: "environmental impact assessment", category: "Umweltrecht" },
  { word: "Anhörungspflicht", article: "die", translation: "obligation to hold a hearing", category: "Umweltrecht" },
  { word: "Immissionsschutz", article: "der", translation: "pollution control", category: "Umweltrecht" },
  { word: "Umweltschadenshaftung", article: "die", translation: "environmental damage liability", category: "Umweltrecht" },
  { word: "Schadstoffgrenze", article: "die", translation: "pollutant limit", category: "Umweltrecht" },

  // Nachhaltigkeitsmanagement
  { word: "Nachhaltigkeitsbericht", article: "der", translation: "sustainability report", category: "Nachhaltigkeitsmanagement" },
  { word: "Umweltmanagementsystem", article: "das", translation: "environmental management system", category: "Nachhaltigkeitsmanagement" },
  { word: "Umweltzertifizierung", article: "die", translation: "environmental certification", category: "Nachhaltigkeitsmanagement" },
  { word: "CO2-Bilanz", article: "die", translation: "carbon footprint", category: "Nachhaltigkeitsmanagement" },
  { word: "Nachhaltigkeitsstrategie", article: "die", translation: "sustainability strategy", category: "Nachhaltigkeitsmanagement" },
  { word: "Umweltverantwortung", article: "die", translation: "environmental responsibility", category: "Nachhaltigkeitsmanagement" },

  // Ressourcenökonomie
  { word: "Kreislaufführung", article: "die", translation: "circular process management", category: "Ressourcenökonomie" },
  { word: "Förderkosten", article: "die", translation: "extraction costs", category: "Ressourcenökonomie" },
  { word: "Fördermenge", article: "die", translation: "extraction volume", category: "Ressourcenökonomie" },
  { word: "Verbrauchsentwicklung", article: "die", translation: "consumption trend", category: "Ressourcenökonomie" },
  { word: "Rohstoffabhängigkeit", article: "die", translation: "dependence on raw materials", category: "Ressourcenökonomie" },

  // Kreislaufwirtschaft (vertieft)
  { word: "Trennverhalten", article: "das", translation: "waste-sorting behavior", category: "Kreislaufwirtschaft (vertieft)" },
  { word: "Wiederverwertungsprozess", article: "der", translation: "recycling process", category: "Kreislaufwirtschaft (vertieft)" },
  { word: "Materialkreislauf", article: "der", translation: "material cycle", category: "Kreislaufwirtschaft (vertieft)" },
  { word: "Produktlebensdauer", article: "die", translation: "product lifespan", category: "Kreislaufwirtschaft (vertieft)" },
  { word: "Rohstoffrückgewinnung", article: "die", translation: "raw material recovery", category: "Kreislaufwirtschaft (vertieft)" },

  // Klimapolitik (vertieft)
  { word: "Zertifikatehandel", article: "der", translation: "trading of certificates", category: "Klimapolitik (vertieft)" },
  { word: "Klimaschutzziel", article: "das", translation: "climate protection target", category: "Klimapolitik (vertieft)" },
  { word: "Dekarbonisierung", article: "die", translation: "decarbonization", category: "Klimapolitik (vertieft)" },
  { word: "Minderungsziel", article: "das", translation: "mitigation target", category: "Klimapolitik (vertieft)" },
  { word: "Emissionsbudget", article: "das", translation: "emissions budget", category: "Klimapolitik (vertieft)" },

  // Energiewirtschaft
  { word: "Übertragungsnetz", article: "das", translation: "transmission grid", category: "Energiewirtschaft" },
  { word: "Stromspeicherung", article: "die", translation: "electricity storage", category: "Energiewirtschaft" },
  { word: "Energieträger", article: "der", translation: "energy source", category: "Energiewirtschaft" },
  { word: "Versorgungssicherheit", article: "die", translation: "security of supply", category: "Energiewirtschaft" },
  { word: "Kapazitätsreserve", article: "die", translation: "capacity reserve", category: "Energiewirtschaft" },
  { word: "Lastspitze", article: "die", translation: "peak load", category: "Energiewirtschaft" },
  { word: "Kraftwerksleistung", article: "die", translation: "power plant output", category: "Energiewirtschaft" },

  // Biodiversität (vertieft)
  { word: "Habitatverlust", article: "der", translation: "habitat loss", category: "Biodiversität (vertieft)" },
  { word: "Bestandserfassung", article: "die", translation: "population survey", category: "Biodiversität (vertieft)" },
  { word: "Bruterfolg", article: "der", translation: "breeding success", category: "Biodiversität (vertieft)" },
  { word: "Wanderungsroute", article: "die", translation: "migration route", category: "Biodiversität (vertieft)" },
  { word: "Feuchtgebietsschutz", article: "der", translation: "wetland protection", category: "Biodiversität (vertieft)" },

  // Automobilindustrie
  { word: "Fahrzeugentwicklung", article: "die", translation: "vehicle development", category: "Automobilindustrie" },
  { word: "Karosseriebau", article: "der", translation: "body construction", category: "Automobilindustrie" },
  { word: "Motorleistung", article: "die", translation: "engine power", category: "Automobilindustrie" },
  { word: "Zulieferkette", article: "die", translation: "supplier chain", category: "Automobilindustrie" },
  { word: "Fahrzeugelektronik", article: "die", translation: "vehicle electronics", category: "Automobilindustrie" },
  { word: "Abgasnorm", article: "die", translation: "emissions standard", category: "Automobilindustrie" },
  { word: "Serienfertigung", article: "die", translation: "series production", category: "Automobilindustrie" },
  { word: "Crashtest", article: "der", translation: "crash test", category: "Automobilindustrie" },
  { word: "Antriebsstrang", article: "der", translation: "drivetrain", category: "Automobilindustrie" },

  // Immobilienwirtschaft
  { word: "Grundstücksbewertung", article: "die", translation: "property valuation", category: "Immobilienwirtschaft" },
  { word: "Mietpreisbindung", article: "die", translation: "rent control", category: "Immobilienwirtschaft" },
  { word: "Grunderwerbsteuer", article: "die", translation: "real estate transfer tax", category: "Immobilienwirtschaft" },
  { word: "Wohnflächenberechnung", article: "die", translation: "living space calculation", category: "Immobilienwirtschaft" },
  { word: "Erschließungskosten", article: "die", translation: "development costs", category: "Immobilienwirtschaft" },
  { word: "Immobilienmakler", article: "der", translation: "real estate agent", category: "Immobilienwirtschaft" },
  { word: "Bestandsimmobilie", article: "die", translation: "existing property", category: "Immobilienwirtschaft" },
  { word: "Grundbucheintrag", article: "der", translation: "land registry entry", category: "Immobilienwirtschaft" },

  // Versicherungswesen (vertieft)
  { word: "Beitragsrückerstattung", article: "die", translation: "premium refund", category: "Versicherungswesen (vertieft)" },
  { word: "Schadenshöhe", article: "die", translation: "claim amount", category: "Versicherungswesen (vertieft)" },
  { word: "Risikoeinstufung", article: "die", translation: "risk classification", category: "Versicherungswesen (vertieft)" },
  { word: "Selbstbehalt", article: "der", translation: "deductible", category: "Versicherungswesen (vertieft)" },
  { word: "Prämienberechnung", article: "die", translation: "premium calculation", category: "Versicherungswesen (vertieft)" },
  { word: "Beitragsanpassung", article: "die", translation: "premium adjustment", category: "Versicherungswesen (vertieft)" },
  { word: "Rückversicherung", article: "die", translation: "reinsurance", category: "Versicherungswesen (vertieft)" },
  { word: "Versicherungsbetrug", article: "der", translation: "insurance fraud", category: "Versicherungswesen (vertieft)" },

  // Tourismusbranche
  { word: "Beherbergungsgewerbe", article: "das", translation: "hospitality industry", category: "Tourismusbranche" },
  { word: "Reisevermittlung", article: "die", translation: "travel brokerage", category: "Tourismusbranche" },
  { word: "Gästezufriedenheit", article: "die", translation: "guest satisfaction", category: "Tourismusbranche" },
  { word: "Auslastungsquote", article: "die", translation: "occupancy rate", category: "Tourismusbranche" },
  { word: "Destinationsmarketing", article: "das", translation: "destination marketing", category: "Tourismusbranche" },
  { word: "Pauschalreise", article: "die", translation: "package tour", category: "Tourismusbranche" },
  { word: "Übernachtungszahl", article: "die", translation: "number of overnight stays", category: "Tourismusbranche" },

  // Landwirtschaft (vertieft)
  { word: "Ernteertrag", article: "der", translation: "crop yield", category: "Landwirtschaft (vertieft)" },
  { word: "Bodenfruchtbarkeit", article: "die", translation: "soil fertility", category: "Landwirtschaft (vertieft)" },
  { word: "Fruchtfolge", article: "die", translation: "crop rotation", category: "Landwirtschaft (vertieft)" },
  { word: "Düngemitteleinsatz", article: "der", translation: "fertilizer use", category: "Landwirtschaft (vertieft)" },
  { word: "Nutztierhaltung", article: "die", translation: "livestock farming", category: "Landwirtschaft (vertieft)" },
  { word: "Anbaufläche", article: "die", translation: "cultivated area", category: "Landwirtschaft (vertieft)" },
  { word: "Pflanzenschutzmittel", article: "das", translation: "pesticide", category: "Landwirtschaft (vertieft)" },

  // Tiermedizin
  { word: "Tierheilkunde", article: "die", translation: "veterinary medicine", category: "Tiermedizin" },
  { word: "Tierseuche", article: "die", translation: "animal epidemic", category: "Tiermedizin" },
  { word: "Impfprogramm", article: "das", translation: "vaccination program", category: "Tiermedizin" },
  { word: "Artgerechtheit", article: "die", translation: "species-appropriateness", category: "Tiermedizin" },
  { word: "Tiergesundheit", article: "die", translation: "animal health", category: "Tiermedizin" },
  { word: "Zuchtauswahl", article: "die", translation: "breeding selection", category: "Tiermedizin" },

  // Verbraucherkredit
  { word: "Ratenkreditvertrag", article: "der", translation: "installment loan agreement", category: "Verbraucherkredit" },
  { word: "Effektivzinssatz", article: "der", translation: "effective interest rate", category: "Verbraucherkredit" },
  { word: "Bonitätsauskunft", article: "die", translation: "credit report", category: "Verbraucherkredit" },
  { word: "Kreditablehnung", article: "die", translation: "credit denial", category: "Verbraucherkredit" },
  { word: "Sondertilgung", article: "die", translation: "special repayment", category: "Verbraucherkredit" },

  // Girokonto
  { word: "Kontowechselservice", article: "der", translation: "account switching service", category: "Girokonto" },
  { word: "Dispositionskredit", article: "der", translation: "overdraft facility", category: "Girokonto" },
  { word: "Dauerauftragseinrichtung", article: "die", translation: "standing order setup", category: "Girokonto" },
  { word: "Kontopfändungsschutz", article: "der", translation: "account garnishment protection", category: "Girokonto" },
  { word: "Onlinebanking-Zugang", article: "der", translation: "online banking access", category: "Girokonto" },

  // Sparen & Anlegen
  { word: "Sparplanrate", article: "die", translation: "savings plan installment", category: "Sparen & Anlegen" },
  { word: "Tagesgeldkonto", article: "das", translation: "call money account", category: "Sparen & Anlegen" },
  { word: "Festgeldanlage", article: "die", translation: "fixed-term deposit", category: "Sparen & Anlegen" },
  { word: "Zinseszinseffekt", article: "der", translation: "compound interest effect", category: "Sparen & Anlegen" },
  { word: "Inflationsausgleich", article: "der", translation: "inflation adjustment", category: "Sparen & Anlegen" },

  // Zahlungsverkehr
  { word: "Zahlungsverzug", article: "der", translation: "payment default", category: "Zahlungsverkehr" },
  { word: "Lastschriftverfahren", article: "das", translation: "direct debit procedure", category: "Zahlungsverkehr" },
  { word: "Überweisungslimit", article: "das", translation: "transfer limit", category: "Zahlungsverkehr" },
  { word: "Zahlungsrückbuchung", article: "die", translation: "payment reversal", category: "Zahlungsverkehr" },

  // Diplomatie (vertieft)
  { word: "Delegationsleiter", article: "der", translation: "head of delegation", category: "Diplomatie (vertieft)" },
  { word: "Bündnispartner", article: "der", translation: "alliance partner", category: "Diplomatie (vertieft)" },
  { word: "Gesandtenstatus", article: "der", translation: "envoy status", category: "Diplomatie (vertieft)" },
  { word: "Vertragsratifizierung", article: "die", translation: "treaty ratification", category: "Diplomatie (vertieft)" },
  { word: "Botschafterernennung", article: "die", translation: "ambassador appointment", category: "Diplomatie (vertieft)" },

  // Internationale Sanktionen
  { word: "Sanktionsverstoß", article: "der", translation: "sanctions violation", category: "Internationale Sanktionen" },
  { word: "Handelsembargo", article: "das", translation: "trade embargo", category: "Internationale Sanktionen" },
  { word: "Vermögenssperre", article: "die", translation: "asset freeze", category: "Internationale Sanktionen" },
  { word: "Sanktionsliste", article: "die", translation: "sanctions list", category: "Internationale Sanktionen" },
  { word: "Sanktionsausnahme", article: "die", translation: "sanctions exemption", category: "Internationale Sanktionen" },

  // Welthandelsordnung
  { word: "Präferenzzoll", article: "der", translation: "preferential tariff", category: "Welthandelsordnung" },
  { word: "Zollunion", article: "die", translation: "customs union", category: "Welthandelsordnung" },
  { word: "Handelsstreitigkeit", article: "die", translation: "trade dispute", category: "Welthandelsordnung" },
  { word: "Ausgleichszoll", article: "der", translation: "countervailing duty", category: "Welthandelsordnung" },
  { word: "Marktzugangsverhandlung", article: "die", translation: "market access negotiation", category: "Welthandelsordnung" },

  // Entwicklungshilfe
  { word: "Entwicklungshilfeprojekt", article: "das", translation: "development aid project", category: "Entwicklungshilfe" },
  { word: "Aufbauhilfeprogramm", article: "das", translation: "reconstruction aid program", category: "Entwicklungshilfe" },
  { word: "Spendenaufkommen", article: "das", translation: "donation volume", category: "Entwicklungshilfe" },
  { word: "Hilfslieferung", article: "die", translation: "aid shipment", category: "Entwicklungshilfe" },

  // Sachversicherung
  { word: "Hausratversicherungspolice", article: "die", translation: "home contents insurance policy", category: "Sachversicherung" },
  { word: "Elementarschadenversicherung", article: "die", translation: "natural hazard insurance", category: "Sachversicherung" },
  { word: "Wertsachenklausel", article: "die", translation: "valuables clause", category: "Sachversicherung" },
  { word: "Unterversicherung", article: "die", translation: "underinsurance", category: "Sachversicherung" },
  { word: "Wiederbeschaffungswert", article: "der", translation: "replacement value", category: "Sachversicherung" },

  // Haftpflichtversicherung
  { word: "Haftpflichtdeckung", article: "die", translation: "liability coverage", category: "Haftpflichtversicherung" },
  { word: "Personenschaden", article: "der", translation: "personal injury", category: "Haftpflichtversicherung" },
  { word: "Sachschadenregulierung", article: "die", translation: "property damage settlement", category: "Haftpflichtversicherung" },
  { word: "Mitversicherter", article: "der", translation: "co-insured person", category: "Haftpflichtversicherung" },
  { word: "Deckungsausschluss", article: "der", translation: "coverage exclusion", category: "Haftpflichtversicherung" },

  // Berufsunfähigkeitsversicherung
  { word: "Berufsunfähigkeitsrente", article: "die", translation: "disability pension", category: "Berufsunfähigkeitsversicherung" },
  { word: "Risikozuschlag", article: "der", translation: "risk surcharge", category: "Berufsunfähigkeitsversicherung" },
  { word: "Karenzzeit", article: "die", translation: "waiting period (insurance)", category: "Berufsunfähigkeitsversicherung" },
  { word: "Leistungsprüfung", article: "die", translation: "benefit assessment", category: "Berufsunfähigkeitsversicherung" },

  // Lebensversicherung
  { word: "Sterbegeldversicherung", article: "die", translation: "funeral insurance", category: "Lebensversicherung" },
  { word: "Todesfallleistung", article: "die", translation: "death benefit", category: "Lebensversicherung" },
  { word: "Rückkaufswert", article: "der", translation: "surrender value", category: "Lebensversicherung" },
  { word: "Versicherungssumme", article: "die", translation: "sum insured", category: "Lebensversicherung" },
  { word: "Bezugsberechtigter", article: "der", translation: "beneficiary", category: "Lebensversicherung" },

  // NE-Metallverarbeitung
  { word: "Kupferverarbeitung", article: "die", translation: "copper processing", category: "NE-Metallverarbeitung" },
  { word: "Aluminiumlegierung", article: "die", translation: "aluminum alloy", category: "NE-Metallverarbeitung" },
  { word: "Zinnverhüttung", article: "die", translation: "tin smelting", category: "NE-Metallverarbeitung" },
  { word: "Metallschrottaufbereitung", article: "die", translation: "scrap metal processing", category: "NE-Metallverarbeitung" },

  // Stahlindustrie
  { word: "Stahlwerksbetrieb", article: "der", translation: "steel mill operation", category: "Stahlindustrie" },
  { word: "Hochofenprozess", article: "der", translation: "blast furnace process", category: "Stahlindustrie" },
  { word: "Stahlkohlenstoffgehalt", article: "der", translation: "steel carbon content", category: "Stahlindustrie" },
  { word: "Warmwalzverfahren", article: "das", translation: "hot rolling process", category: "Stahlindustrie" },
  { word: "Stahlqualitätsklasse", article: "die", translation: "steel quality grade", category: "Stahlindustrie" },

  // Chipherstellung
  { word: "Halbleiterfertigung", article: "die", translation: "semiconductor manufacturing", category: "Chipherstellung" },
  { word: "Waferbearbeitung", article: "die", translation: "wafer processing", category: "Chipherstellung" },
  { word: "Reinraumbedingung", article: "die", translation: "cleanroom condition", category: "Chipherstellung" },
  { word: "Lithografieverfahren", article: "das", translation: "lithography process", category: "Chipherstellung" },
  { word: "Ausbeuterate", article: "die", translation: "yield rate", category: "Chipherstellung" },

  // Batteriezellindustrie
  { word: "Batteriezellfertigung", article: "die", translation: "battery cell manufacturing", category: "Batteriezellindustrie" },
  { word: "Elektrodenbeschichtung", article: "die", translation: "electrode coating", category: "Batteriezellindustrie" },
  { word: "Zellformat", article: "das", translation: "cell format", category: "Batteriezellindustrie" },
  { word: "Zellfertigungslinie", article: "die", translation: "cell production line", category: "Batteriezellindustrie" },

  // Naturschutzgebiet
  { word: "Wildpflanzenbestand", article: "der", translation: "wild plant population", category: "Naturschutzgebiet" },
  { word: "Schutzgebietsverordnung", article: "die", translation: "protected area regulation", category: "Naturschutzgebiet" },
  { word: "Besucherlenkung", article: "die", translation: "visitor management (nature)", category: "Naturschutzgebiet" },
  { word: "Pflegeeingriff", article: "der", translation: "conservation intervention", category: "Naturschutzgebiet" },
  { word: "Kernzone", article: "die", translation: "core zone (protected area)", category: "Naturschutzgebiet" },

  // Wanderwesen
  { word: "Wanderwegmarkierung", article: "die", translation: "trail marking", category: "Wanderwesen" },
  { word: "Wanderroutenprofil", article: "das", translation: "hiking route profile", category: "Wanderwesen" },
  { word: "Schutzhütte", article: "die", translation: "mountain shelter", category: "Wanderwesen" },
  { word: "Wegweiser", article: "der", translation: "signpost", category: "Wanderwesen" },
  { word: "Trittsicherheit", article: "die", translation: "sure-footedness", category: "Wanderwesen" },

  // Nationalparkwesen
  { word: "Nationalparkverwaltung", article: "die", translation: "national park administration", category: "Nationalparkwesen" },
  { word: "Rangerdienst", article: "der", translation: "ranger service", category: "Nationalparkwesen" },
  { word: "Besucherzentrum", article: "das", translation: "visitor center", category: "Nationalparkwesen" },
  { word: "Wildtierbeobachtung", article: "die", translation: "wildlife observation", category: "Nationalparkwesen" },
  { word: "Naturerlebnispfad", article: "der", translation: "nature discovery trail", category: "Nationalparkwesen" },

  // Waldökologie
  { word: "Baumkronendach", article: "das", translation: "forest canopy", category: "Waldökologie" },
  { word: "Unterholzvegetation", article: "die", translation: "understory vegetation", category: "Waldökologie" },
  { word: "Totholzanteil", article: "der", translation: "deadwood proportion", category: "Waldökologie" },
  { word: "Waldrandgestaltung", article: "die", translation: "forest edge design", category: "Waldökologie" },
  { word: "Mischwaldbestand", article: "der", translation: "mixed forest stand", category: "Waldökologie" },

  // Konsularwesen
  { word: "Reisepassbeantragung", article: "die", translation: "passport application", category: "Konsularwesen" },
  { word: "Konsulatstermin", article: "der", translation: "consulate appointment", category: "Konsularwesen" },
  { word: "Notfallpass", article: "der", translation: "emergency passport", category: "Konsularwesen" },
  { word: "Konsularhilfe", article: "die", translation: "consular assistance", category: "Konsularwesen" },
  { word: "Auslandsvertretung", article: "die", translation: "foreign representation office", category: "Konsularwesen" },

  // Hochschulzulassung
  { word: "Studienplatzvergabe", article: "die", translation: "allocation of university places", category: "Hochschulzulassung" },
  { word: "Zulassungsgrenze", article: "die", translation: "admission cutoff", category: "Hochschulzulassung" },
  { word: "Zulassungsbescheid", article: "der", translation: "admission letter", category: "Hochschulzulassung" },
  { word: "Wartesemester", article: "das", translation: "waiting semester", category: "Hochschulzulassung" },
  { word: "Eignungsprüfungsverfahren", article: "das", translation: "aptitude examination procedure", category: "Hochschulzulassung" },

  // Stipendienwesen
  { word: "Stipendienbewerbung", article: "die", translation: "scholarship application", category: "Stipendienwesen" },
  { word: "Förderkriterium", article: "das", translation: "funding criterion", category: "Stipendienwesen" },
  { word: "Stipendiendauer", article: "die", translation: "scholarship duration", category: "Stipendienwesen" },
  { word: "Begabtenförderung", article: "die", translation: "gifted student support", category: "Stipendienwesen" },
  { word: "Auswahlgespräch", article: "das", translation: "selection interview", category: "Stipendienwesen" },

  // Auslandsstudium
  { word: "Auslandssemesterplanung", article: "die", translation: "study abroad planning", category: "Auslandsstudium" },
  { word: "Anerkennungsantrag", article: "der", translation: "credit recognition application", category: "Auslandsstudium" },
  { word: "Gasthochschule", article: "die", translation: "host university", category: "Auslandsstudium" },
  { word: "Sprachnachweis", article: "der", translation: "language proficiency certificate", category: "Auslandsstudium" },

  // Töpferhandwerk
  { word: "Töpferwerkstatt", article: "die", translation: "pottery workshop", category: "Töpferhandwerk" },
  { word: "Glasurbrand", article: "der", translation: "glaze firing", category: "Töpferhandwerk" },
  { word: "Glasurmischung", article: "die", translation: "glaze mixture", category: "Töpferhandwerk" },
  { word: "Tonklumpen", article: "der", translation: "clay lump", category: "Töpferhandwerk" },
  { word: "Drehtechnik", article: "die", translation: "throwing technique (pottery)", category: "Töpferhandwerk" },
  { word: "Tonmasse", article: "die", translation: "clay body", category: "Töpferhandwerk" },
  { word: "Brennofen", article: "der", translation: "kiln", category: "Töpferhandwerk" },
  { word: "Glasurauftrag", article: "der", translation: "glaze application", category: "Töpferhandwerk" },
  { word: "Drehscheibe", article: "die", translation: "potter's wheel", category: "Töpferhandwerk" },
  { word: "Formgebungstechnik", article: "die", translation: "shaping technique", category: "Töpferhandwerk" },

  // Sattlerhandwerk
  { word: "Sattlerwerkzeug", article: "das", translation: "saddler's tool", category: "Sattlerhandwerk" },
  { word: "Ledernaht", article: "die", translation: "leather seam", category: "Sattlerhandwerk" },
  { word: "Stichzange", article: "die", translation: "stitching pliers", category: "Sattlerhandwerk" },
  { word: "Ledergerbung", article: "die", translation: "leather tanning", category: "Sattlerhandwerk" },
  { word: "Sattelbaum", article: "der", translation: "saddle tree", category: "Sattlerhandwerk" },

  // Korbflechterei
  { word: "Korbflechttechnik", article: "die", translation: "basket weaving technique", category: "Korbflechterei" },
  { word: "Weidenrute", article: "die", translation: "willow rod", category: "Korbflechterei" },
  { word: "Flechtmuster", article: "das", translation: "weaving pattern", category: "Korbflechterei" },
  { word: "Korbboden", article: "der", translation: "basket base", category: "Korbflechterei" },

  // Uhrmacherhandwerk
  { word: "Uhrwerkfeder", article: "die", translation: "watch mainspring", category: "Uhrmacherhandwerk" },
  { word: "Zeigerwerk", article: "das", translation: "hand mechanism (watch)", category: "Uhrmacherhandwerk" },
  { word: "Uhrengehäuse", article: "das", translation: "watch case", category: "Uhrmacherhandwerk" },
  { word: "Räderwerk", article: "das", translation: "gear train", category: "Uhrmacherhandwerk" },
  { word: "Unruhspirale", article: "die", translation: "balance spring", category: "Uhrmacherhandwerk" },

  // Fechtsport
  { word: "Fechtdegen", article: "der", translation: "fencing epee", category: "Fechtsport" },
  { word: "Klingenspitze", article: "die", translation: "blade tip", category: "Fechtsport" },
  { word: "Trefferfläche", article: "die", translation: "target area (fencing)", category: "Fechtsport" },
  { word: "Fechtmaske", article: "die", translation: "fencing mask", category: "Fechtsport" },
  { word: "Paradeschritt", article: "der", translation: "parry step", category: "Fechtsport" },

  // Rudersport
  { word: "Ruderboot", article: "das", translation: "rowing boat", category: "Rudersport" },
  { word: "Skullwettkampf", article: "der", translation: "sculling competition", category: "Rudersport" },
  { word: "Riemenschlag", article: "der", translation: "oar stroke", category: "Rudersport" },
  { word: "Steuermannskommando", article: "das", translation: "coxswain command", category: "Rudersport" },
  { word: "Bootssteg", article: "der", translation: "boat dock", category: "Rudersport" },

  // Klettersport
  { word: "Kletterrouteneinstufung", article: "die", translation: "climbing route grading", category: "Klettersport" },
  { word: "Sicherungsgerät", article: "das", translation: "belay device", category: "Klettersport" },
  { word: "Griffleiste", article: "die", translation: "climbing hold ledge", category: "Klettersport" },
  { word: "Kletterseil", article: "das", translation: "climbing rope", category: "Klettersport" },
  { word: "Vorstiegssicherung", article: "die", translation: "lead climbing belay", category: "Klettersport" },
  { word: "Kletterroute", article: "die", translation: "climbing route", category: "Klettersport" },
  { word: "Griffweite", article: "die", translation: "hold spacing", category: "Klettersport" },
  { word: "Sicherungstechnik", article: "die", translation: "belaying technique", category: "Klettersport" },
  { word: "Kletterausrüstung", article: "die", translation: "climbing equipment", category: "Klettersport" },
  { word: "Schwierigkeitsgrad", article: "der", translation: "difficulty grade", category: "Klettersport" },

  // Bogensport
  { word: "Bogensehne", article: "die", translation: "bowstring", category: "Bogensport" },
  { word: "Zielscheibenring", article: "der", translation: "target ring (archery)", category: "Bogensport" },
  { word: "Pfeilköcher", article: "der", translation: "arrow quiver", category: "Bogensport" },
  { word: "Auszugslänge", article: "die", translation: "draw length", category: "Bogensport" },

  // Endodontie
  { word: "Zahnwurzelbehandlung", article: "die", translation: "root canal treatment", category: "Endodontie" },
  { word: "Wurzelkanalfüllung", article: "die", translation: "root canal filling", category: "Endodontie" },
  { word: "Pulpaentzündung", article: "die", translation: "pulp inflammation", category: "Endodontie" },
  { word: "Wurzelspitzenresektion", article: "die", translation: "apicoectomy", category: "Endodontie" },

  // Kieferorthopädie (vertieft)
  { word: "Zahnspangenanpassung", article: "die", translation: "braces fitting", category: "Kieferorthopädie (vertieft)" },
  { word: "Bissregulierung", article: "die", translation: "bite correction", category: "Kieferorthopädie (vertieft)" },
  { word: "Zahnfehlstellung", article: "die", translation: "tooth malposition", category: "Kieferorthopädie (vertieft)" },
  { word: "Retentionsspange", article: "die", translation: "retainer", category: "Kieferorthopädie (vertieft)" },

  // Zahnimplantologie
  { word: "Implantatbett", article: "das", translation: "implant bed", category: "Zahnimplantologie" },
  { word: "Knochenaufbau", article: "der", translation: "bone augmentation", category: "Zahnimplantologie" },
  { word: "Einheilphase", article: "die", translation: "healing phase (implant)", category: "Zahnimplantologie" },
  { word: "Implantatkrone", article: "die", translation: "implant crown", category: "Zahnimplantologie" },

  // Parodontologie (vertieft)
  { word: "Zahnfleischtaschenmessung", article: "die", translation: "periodontal pocket measurement", category: "Parodontologie (vertieft)" },
  { word: "Zahnbelagentfernung", article: "die", translation: "plaque removal", category: "Parodontologie (vertieft)" },
  { word: "Knochenabbau", article: "der", translation: "bone loss (periodontal)", category: "Parodontologie (vertieft)" },
  { word: "Zahnfleischrückgang", article: "der", translation: "gum recession", category: "Parodontologie (vertieft)" },

  // Käseherstellung
  { word: "Käseform", article: "die", translation: "cheese mold", category: "Käseherstellung" },
  { word: "Labzugabe", article: "die", translation: "rennet addition", category: "Käseherstellung" },
  { word: "Molkeabtrennung", article: "die", translation: "whey separation", category: "Käseherstellung" },
  { word: "Käserinde", article: "die", translation: "cheese rind", category: "Käseherstellung" },
  { word: "Salzbad", article: "das", translation: "brine bath", category: "Käseherstellung" },

  // Bierbrauerei
  { word: "Braugerste", article: "die", translation: "brewing barley", category: "Bierbrauerei" },
  { word: "Hopfendosierung", article: "die", translation: "hop dosage", category: "Bierbrauerei" },
  { word: "Würzekochung", article: "die", translation: "wort boiling", category: "Bierbrauerei" },
  { word: "Läuterbottich", article: "der", translation: "lauter tun", category: "Bierbrauerei" },
  { word: "Maischbottich", article: "der", translation: "mash tun", category: "Bierbrauerei" },

  // Weinherstellung
  { word: "Traubenlese", article: "die", translation: "grape harvest", category: "Weinherstellung" },
  { word: "Mostgärung", article: "die", translation: "must fermentation", category: "Weinherstellung" },
  { word: "Fassreifung", article: "die", translation: "barrel aging", category: "Weinherstellung" },
  { word: "Tanningehalt", article: "der", translation: "tannin content", category: "Weinherstellung" },
  { word: "Verschnittanteil", article: "der", translation: "blending proportion (wine)", category: "Weinherstellung" },

  // Spirituosenherstellung
  { word: "Kupferbrennkessel", article: "der", translation: "copper still kettle", category: "Spirituosenherstellung" },
  { word: "Brennblase", article: "die", translation: "pot still", category: "Spirituosenherstellung" },
  { word: "Alkoholgehaltmessung", article: "die", translation: "alcohol content measurement", category: "Spirituosenherstellung" },
  { word: "Lagerfass", article: "das", translation: "aging cask", category: "Spirituosenherstellung" },

  // Verlagswesen
  { word: "Redaktionsschluss", article: "der", translation: "editorial deadline", category: "Verlagswesen" },
  { word: "Auflagenhöhe", article: "die", translation: "print run size", category: "Verlagswesen" },
  { word: "Manuskriptprüfung", article: "die", translation: "manuscript review", category: "Verlagswesen" },
  { word: "Lektoratsarbeit", article: "die", translation: "editorial work", category: "Verlagswesen" },
  { word: "Vertriebsrechte", article: "die", translation: "distribution rights", category: "Verlagswesen" },
  { word: "Druckvorlage", article: "die", translation: "print template", category: "Verlagswesen" },
  { word: "Verlagsvertrag", article: "der", translation: "publishing contract", category: "Verlagswesen" },

  // Journalismus
  { word: "Nachrichtenrecherche", article: "die", translation: "news research", category: "Journalismus" },
  { word: "Quellenprüfung", article: "die", translation: "source verification", category: "Journalismus" },
  { word: "Redaktionskonferenz", article: "die", translation: "editorial meeting", category: "Journalismus" },
  { word: "Meinungsjournalismus", article: "der", translation: "opinion journalism", category: "Journalismus" },
  { word: "Redaktionsgeheimnis", article: "das", translation: "editorial confidentiality", category: "Journalismus" },
  { word: "Informantenschutz", article: "der", translation: "source protection", category: "Journalismus" },
  { word: "Schlagzeilenwahl", article: "die", translation: "headline choice", category: "Journalismus" },

  // Rundfunk & Fernsehen
  { word: "Sendeplan", article: "der", translation: "broadcast schedule", category: "Rundfunk & Fernsehen" },
  { word: "Einschaltquote", article: "die", translation: "viewer ratings", category: "Rundfunk & Fernsehen" },
  { word: "Übertragungstechnik", article: "die", translation: "broadcast technology", category: "Rundfunk & Fernsehen" },
  { word: "Moderationsstil", article: "der", translation: "presentation style", category: "Rundfunk & Fernsehen" },
  { word: "Programmgestaltung", article: "die", translation: "programming design", category: "Rundfunk & Fernsehen" },
  { word: "Sendezeit", article: "die", translation: "airtime", category: "Rundfunk & Fernsehen" },

  // Werbeindustrie
  { word: "Konsumentenansprache", article: "die", translation: "consumer appeal", category: "Werbeindustrie" },
  { word: "Werbeetat", article: "der", translation: "advertising budget", category: "Werbeindustrie" },
  { word: "Markenauftritt", article: "der", translation: "brand presence", category: "Werbeindustrie" },
  { word: "Kampagnenplanung", article: "die", translation: "campaign planning", category: "Werbeindustrie" },
  { word: "Werbeverbot", article: "das", translation: "advertising ban", category: "Werbeindustrie" },
  { word: "Slogankreation", article: "die", translation: "slogan creation", category: "Werbeindustrie" },
  { word: "Anzeigenschaltung", article: "die", translation: "ad placement", category: "Werbeindustrie" },

  // Einzelhandel
  { word: "Sortimentsgestaltung", article: "die", translation: "product range design", category: "Einzelhandel" },
  { word: "Kundenlaufweg", article: "der", translation: "customer flow path", category: "Einzelhandel" },
  { word: "Warenpräsentation", article: "die", translation: "merchandise presentation", category: "Einzelhandel" },
  { word: "Regalplatzierung", article: "die", translation: "shelf placement", category: "Einzelhandel" },
  { word: "Ladenschlusszeit", article: "die", translation: "store closing time", category: "Einzelhandel" },
  { word: "Umsatzsteigerung", article: "die", translation: "sales increase", category: "Einzelhandel" },
  { word: "Kassenabrechnung", article: "die", translation: "cash register reconciliation", category: "Einzelhandel" },

  // Telekommunikation
  { word: "Bandbreitenbedarf", article: "der", translation: "bandwidth requirement", category: "Telekommunikation" },
  { word: "Datenpaket", article: "das", translation: "data package", category: "Telekommunikation" },
  { word: "Übertragungsgeschwindigkeit", article: "die", translation: "transmission speed", category: "Telekommunikation" },
  { word: "Funkfrequenz", article: "die", translation: "radio frequency", category: "Telekommunikation" },
  { word: "Netzausfall", article: "der", translation: "network outage", category: "Telekommunikation" },
  { word: "Anbieterwechsel", article: "der", translation: "provider switch", category: "Telekommunikation" },
  { word: "Signalstärke", article: "die", translation: "signal strength", category: "Telekommunikation" },

  // Bäckereihandwerk (vertieft)
  { word: "Zwiebackfertigung", article: "die", translation: "rusk production", category: "Bäckereihandwerk (vertieft)" },
  { word: "Teigführung", article: "die", translation: "dough proofing management", category: "Bäckereihandwerk (vertieft)" },
  { word: "Gärschrank", article: "der", translation: "proofing cabinet", category: "Bäckereihandwerk (vertieft)" },
  { word: "Brotlaibform", article: "die", translation: "bread loaf shape", category: "Bäckereihandwerk (vertieft)" },
  { word: "Sauerteigansatz", article: "der", translation: "sourdough starter", category: "Bäckereihandwerk (vertieft)" },

  // Konditorhandwerk
  { word: "Konditormasse", article: "die", translation: "confectioner's mixture", category: "Konditorhandwerk" },
  { word: "Fondantüberzug", article: "der", translation: "fondant coating", category: "Konditorhandwerk" },
  { word: "Tortenboden", article: "der", translation: "cake base", category: "Konditorhandwerk" },
  { word: "Zuckergussverzierung", article: "die", translation: "icing decoration", category: "Konditorhandwerk" },
  { word: "Pralinenform", article: "die", translation: "praline mold", category: "Konditorhandwerk" },

  // Fleischerhandwerk
  { word: "Fleischereifachverkauf", article: "der", translation: "butcher shop retail", category: "Fleischerhandwerk" },
  { word: "Wursthülle", article: "die", translation: "sausage casing", category: "Fleischerhandwerk" },
  { word: "Knochensäge", article: "die", translation: "bone saw", category: "Fleischerhandwerk" },
  { word: "Räucherspan", article: "der", translation: "smoking wood chip", category: "Fleischerhandwerk" },
  { word: "Pökelsalz", article: "das", translation: "curing salt", category: "Fleischerhandwerk" },
  { word: "Fleischreifung", article: "die", translation: "meat aging", category: "Fleischerhandwerk" },
  { word: "Zerlegetechnik", article: "die", translation: "cutting technique", category: "Fleischerhandwerk" },
  { word: "Räucherverfahren", article: "das", translation: "smoking process", category: "Fleischerhandwerk" },
  { word: "Wurstherstellung", article: "die", translation: "sausage making", category: "Fleischerhandwerk" },
  { word: "Fleischqualität", article: "die", translation: "meat quality", category: "Fleischerhandwerk" },

  // Fischereihandwerk
  { word: "Fischfilettechnik", article: "die", translation: "fish filleting technique", category: "Fischereihandwerk" },
  { word: "Räucherfisch", article: "der", translation: "smoked fish", category: "Fischereihandwerk" },
  { word: "Netzreparatur", article: "die", translation: "net repair", category: "Fischereihandwerk" },
  { word: "Fanggerät", article: "das", translation: "fishing gear", category: "Fischereihandwerk" },

  // Augenheilkunde (vertieft)
  { word: "Netzhautuntersuchung", article: "die", translation: "retinal examination", category: "Augenheilkunde (vertieft)" },
  { word: "Hornhauttransplantation", article: "die", translation: "corneal transplant", category: "Augenheilkunde (vertieft)" },
  { word: "Sehnervenschädigung", article: "die", translation: "optic nerve damage", category: "Augenheilkunde (vertieft)" },
  { word: "Linsentrübung", article: "die", translation: "lens clouding (cataract)", category: "Augenheilkunde (vertieft)" },
  { word: "Tränenkanalverstopfung", article: "die", translation: "tear duct blockage", category: "Augenheilkunde (vertieft)" },

  // Hals-Nasen-Ohrenheilkunde
  { word: "Trommelfellriss", article: "der", translation: "eardrum rupture", category: "Hals-Nasen-Ohrenheilkunde" },
  { word: "Nebenhöhlenentzündung", article: "die", translation: "sinus inflammation", category: "Hals-Nasen-Ohrenheilkunde" },
  { word: "Stimmbandknoten", article: "der", translation: "vocal cord nodule", category: "Hals-Nasen-Ohrenheilkunde" },
  { word: "Ohrgeräuschbehandlung", article: "die", translation: "tinnitus treatment", category: "Hals-Nasen-Ohrenheilkunde" },
  { word: "Mandelentzündung", article: "die", translation: "tonsillitis", category: "Hals-Nasen-Ohrenheilkunde" },

  // Dermatologie (vertieft)
  { word: "Hautbiopsie", article: "die", translation: "skin biopsy", category: "Dermatologie (vertieft)" },
  { word: "Pigmentstörung", article: "die", translation: "pigmentation disorder", category: "Dermatologie (vertieft)" },
  { word: "Hautausschlag", article: "der", translation: "skin rash", category: "Dermatologie (vertieft)" },
  { word: "Ekzembehandlung", article: "die", translation: "eczema treatment", category: "Dermatologie (vertieft)" },

  // Orthopädie (vertieft)
  { word: "Gelenkspiegelung", article: "die", translation: "joint arthroscopy", category: "Orthopädie (vertieft)" },
  { word: "Kreuzbandriss", article: "der", translation: "cruciate ligament tear", category: "Orthopädie (vertieft)" },
  { word: "Fußfehlstellung", article: "die", translation: "foot malposition", category: "Orthopädie (vertieft)" },
  { word: "Hüftgelenkersatz", article: "der", translation: "hip joint replacement", category: "Orthopädie (vertieft)" },

  // Maschinenbau (vertieft)
  { word: "Zahnradfräsung", article: "die", translation: "gear milling", category: "Maschinenbau (vertieft)" },
  { word: "Kugellagerpassung", article: "die", translation: "ball bearing fit", category: "Maschinenbau (vertieft)" },
  { word: "Wellenverbindung", article: "die", translation: "shaft coupling", category: "Maschinenbau (vertieft)" },
  { word: "Werkstückausrichtung", article: "die", translation: "workpiece alignment", category: "Maschinenbau (vertieft)" },
  { word: "Fräsbahn", article: "die", translation: "milling path", category: "Maschinenbau (vertieft)" },

  // Elektrotechnik (vertieft)
  { word: "Schaltkreisdesign", article: "das", translation: "circuit design", category: "Elektrotechnik (vertieft)" },
  { word: "Isolationsprüfung", article: "die", translation: "insulation testing", category: "Elektrotechnik (vertieft)" },
  { word: "Leiterbahnführung", article: "die", translation: "trace routing", category: "Elektrotechnik (vertieft)" },
  { word: "Potentialausgleich", article: "der", translation: "equipotential bonding", category: "Elektrotechnik (vertieft)" },
  { word: "Spannungswandlung", article: "die", translation: "voltage conversion", category: "Elektrotechnik (vertieft)" },

  // Sanitärtechnik (vertieft)
  { word: "Rohrleitungsverlegung", article: "die", translation: "pipe laying", category: "Sanitärtechnik (vertieft)" },
  { word: "Muffenverbindung", article: "die", translation: "socket joint (pipe)", category: "Sanitärtechnik (vertieft)" },
  { word: "Siphonreinigung", article: "die", translation: "trap cleaning", category: "Sanitärtechnik (vertieft)" },
  { word: "Heizkreislaufregelung", article: "die", translation: "heating circuit control", category: "Sanitärtechnik (vertieft)" },

  // Klimatechnik
  { word: "Lüftungskanalplanung", article: "die", translation: "ventilation duct planning", category: "Klimatechnik" },
  { word: "Kältemittelkreislauf", article: "der", translation: "refrigerant circuit", category: "Klimatechnik" },
  { word: "Luftfeuchtigkeitsregelung", article: "die", translation: "humidity control", category: "Klimatechnik" },
  { word: "Wärmetauscherreinigung", article: "die", translation: "heat exchanger cleaning", category: "Klimatechnik" },

  // Falknerei
  { word: "Falknerhandschuh", article: "der", translation: "falconer's glove", category: "Falknerei" },
  { word: "Beizvogel", article: "der", translation: "falconry bird", category: "Falknerei" },
  { word: "Federkleidpflege", article: "die", translation: "plumage care", category: "Falknerei" },
  { word: "Jagdflugtraining", article: "das", translation: "hunting flight training", category: "Falknerei" },

  // Imkerei (vertieft)
  { word: "Bienenstockrahmen", article: "der", translation: "beehive frame", category: "Imkerei (vertieft)" },
  { word: "Honigschleuder", article: "die", translation: "honey extractor", category: "Imkerei (vertieft)" },
  { word: "Wabenbau", article: "der", translation: "honeycomb construction", category: "Imkerei (vertieft)" },
  { word: "Bienenkönigin", article: "die", translation: "queen bee", category: "Imkerei (vertieft)" },
  { word: "Schwarmverhinderung", article: "die", translation: "swarm prevention", category: "Imkerei (vertieft)" },

  // Fallenstellerei
  { word: "Falltürkonstruktion", article: "die", translation: "trap door construction", category: "Fallenstellerei" },
  { word: "Wildköder", article: "der", translation: "game bait", category: "Fallenstellerei" },
  { word: "Fangeisen", article: "das", translation: "trap iron", category: "Fallenstellerei" },

  // Trüffelsuche
  { word: "Trüffelhundausbildung", article: "die", translation: "truffle dog training", category: "Trüffelsuche" },
  { word: "Fundstellenmarkierung", article: "die", translation: "find-spot marking", category: "Trüffelsuche" },
  { word: "Trüffelernte", article: "die", translation: "truffle harvest", category: "Trüffelsuche" },

  // Papierfalttechnik
  { word: "Faltsequenz", article: "die", translation: "folding sequence", category: "Papierfalttechnik" },
  { word: "Faltdiagramm", article: "das", translation: "folding diagram", category: "Papierfalttechnik" },
  { word: "Kranichfigur", article: "die", translation: "crane figure (origami)", category: "Papierfalttechnik" },
  { word: "Papierschöpfung", article: "die", translation: "papermaking (scooping)", category: "Papierfalttechnik" },

  // Kalligrafie
  { word: "Kalligrafiefeder", article: "die", translation: "calligraphy nib", category: "Kalligrafie" },
  { word: "Tuscheansatz", article: "der", translation: "ink stroke start", category: "Kalligrafie" },
  { word: "Schriftduktus", article: "der", translation: "handwriting ductus", category: "Kalligrafie" },
  { word: "Schreibwinkel", article: "der", translation: "writing angle", category: "Kalligrafie" },
  { word: "Kalligrafiestift", article: "der", translation: "calligraphy pen", category: "Kalligrafie" },
  { word: "Schriftzugentwurf", article: "der", translation: "lettering design", category: "Kalligrafie" },
  { word: "Federhaltung", article: "die", translation: "pen grip", category: "Kalligrafie" },
  { word: "Tintenfluss", article: "der", translation: "ink flow", category: "Kalligrafie" },
  { word: "Buchstabenform", article: "die", translation: "letterform", category: "Kalligrafie" },

  // Modellbau
  { word: "Modellbaukleber", article: "der", translation: "model glue", category: "Modellbau" },
  { word: "Spritzgussteil", article: "das", translation: "injection-molded part", category: "Modellbau" },
  { word: "Maßstabsverkleinerung", article: "die", translation: "scale reduction", category: "Modellbau" },
  { word: "Fernsteuerungsmodul", article: "das", translation: "remote control module", category: "Modellbau" },
  { word: "Modellbauanleitung", article: "die", translation: "model building instructions", category: "Modellbau" },
  { word: "Maßstabsverhältnis", article: "das", translation: "scale ratio", category: "Modellbau" },
  { word: "Modellteilklebung", article: "die", translation: "model part gluing", category: "Modellbau" },
  { word: "Bausatzteil", article: "das", translation: "kit part", category: "Modellbau" },
  { word: "Lackierschritt", article: "der", translation: "painting step", category: "Modellbau" },

  // Numismatik
  { word: "Münzsammlungsalbum", article: "das", translation: "coin collection album", category: "Numismatik" },
  { word: "Prägestempel", article: "der", translation: "minting die", category: "Numismatik" },
  { word: "Münzrand", article: "der", translation: "coin edge", category: "Numismatik" },
  { word: "Erhaltungsgrad", article: "der", translation: "grade of preservation (coins)", category: "Numismatik" },
  { word: "Münzprägung", article: "die", translation: "coin minting", category: "Numismatik" },
  { word: "Münzsammlung", article: "die", translation: "coin collection", category: "Numismatik" },
  { word: "Prägejahr", article: "das", translation: "minting year", category: "Numismatik" },
  { word: "Münzzustand", article: "der", translation: "coin condition", category: "Numismatik" },
  { word: "Münzkatalog", article: "der", translation: "coin catalog", category: "Numismatik" },

  // Schmuckherstellung
  { word: "Perlenknüpftechnik", article: "die", translation: "bead knotting technique", category: "Schmuckherstellung" },
  { word: "Fassungsgröße", article: "die", translation: "setting size (jewelry)", category: "Schmuckherstellung" },
  { word: "Kettengliedverbindung", article: "die", translation: "chain link connection", category: "Schmuckherstellung" },
  { word: "Steinfassungstechnik", article: "die", translation: "stone-setting technique", category: "Schmuckherstellung" },
  { word: "Goldschmiedeflamme", article: "die", translation: "goldsmith's torch flame", category: "Schmuckherstellung" },

  // Seifenherstellung
  { word: "Fettverseifung", article: "die", translation: "fat saponification", category: "Seifenherstellung" },
  { word: "Ölmischverhältnis", article: "das", translation: "oil mixing ratio", category: "Seifenherstellung" },
  { word: "Verseifungswert", article: "der", translation: "saponification value", category: "Seifenherstellung" },
  { word: "Duftölzugabe", article: "die", translation: "fragrance oil addition", category: "Seifenherstellung" },
  { word: "Seifensiedeverfahren", article: "das", translation: "soap-making process", category: "Seifenherstellung" },
  { word: "Duftölzusatz", article: "der", translation: "fragrance oil additive", category: "Seifenherstellung" },
  { word: "Fettsäurezusammensetzung", article: "die", translation: "fatty acid composition", category: "Seifenherstellung" },
  { word: "Aushärtungsdauer", article: "die", translation: "curing duration", category: "Seifenherstellung" },

  // Kerzenherstellung
  { word: "Kerzendochtzentrierung", article: "die", translation: "candle wick centering", category: "Kerzenherstellung" },
  { word: "Wachsschmelztemperatur", article: "die", translation: "wax melting temperature", category: "Kerzenherstellung" },
  { word: "Kerzengussform", article: "die", translation: "candle casting mold", category: "Kerzenherstellung" },
  { word: "Farbpigmentzugabe", article: "die", translation: "color pigment addition", category: "Kerzenherstellung" },
  { word: "Bienenwachsverarbeitung", article: "die", translation: "beeswax processing", category: "Kerzenherstellung" },
  { word: "Dochtstärke", article: "die", translation: "wick thickness", category: "Kerzenherstellung" },
  { word: "Wachsgussform", article: "die", translation: "wax casting mold", category: "Kerzenherstellung" },
  { word: "Kerzenbrenndauer", article: "die", translation: "candle burn time", category: "Kerzenherstellung" },

  // Filzherstellung
  { word: "Filzwollart", article: "die", translation: "felting wool type", category: "Filzherstellung" },
  { word: "Nadelfilztechnik", article: "die", translation: "needle felting technique", category: "Filzherstellung" },
  { word: "Verfilzungsgrad", article: "der", translation: "degree of felting", category: "Filzherstellung" },

  // Segelflugsport
  { word: "Segelflugzeugstart", article: "der", translation: "glider takeoff", category: "Segelflugsport" },
  { word: "Thermikaufwind", article: "der", translation: "thermal updraft", category: "Segelflugsport" },
  { word: "Windenschlepp", article: "der", translation: "winch launch", category: "Segelflugsport" },
  { word: "Gleitverhältnis", article: "das", translation: "glide ratio", category: "Segelflugsport" },

  // Fallschirmsport
  { word: "Fallschirmpackung", article: "die", translation: "parachute packing", category: "Fallschirmsport" },
  { word: "Absprunghöhe", article: "die", translation: "jump altitude", category: "Fallschirmsport" },
  { word: "Freifallphase", article: "die", translation: "freefall phase", category: "Fallschirmsport" },
  { word: "Fallschirmleinenschlag", article: "der", translation: "parachute line twist", category: "Fallschirmsport" },

  // Drachenflugsport
  { word: "Drachenfluggurt", article: "der", translation: "hang glider harness", category: "Drachenflugsport" },
  { word: "Steuerbügel", article: "der", translation: "control bar", category: "Drachenflugsport" },
  { word: "Startlaufstrecke", article: "die", translation: "launch run distance", category: "Drachenflugsport" },

  // Ballonfahrsport
  { word: "Ballonhülle", article: "die", translation: "balloon envelope", category: "Ballonfahrsport" },
  { word: "Brennerdüse", article: "die", translation: "burner nozzle", category: "Ballonfahrsport" },
  { word: "Korbbesatzung", article: "die", translation: "basket crew", category: "Ballonfahrsport" },
  { word: "Auftriebssteuerung", article: "die", translation: "lift control", category: "Ballonfahrsport" },

  // Curlingsport
  { word: "Curlingstein", article: "der", translation: "curling stone", category: "Curlingsport" },
  { word: "Eisbahnreibung", article: "die", translation: "ice sheet friction", category: "Curlingsport" },
  { word: "Wischtechnik", article: "die", translation: "sweeping technique (curling)", category: "Curlingsport" },
  { word: "Zielhaus", article: "das", translation: "house (curling target)", category: "Curlingsport" },

  // Bobsport
  { word: "Bobschlittenbesatzung", article: "die", translation: "bobsled crew", category: "Bobsport" },
  { word: "Startschub", article: "der", translation: "push start", category: "Bobsport" },
  { word: "Kufenstellung", article: "die", translation: "runner position", category: "Bobsport" },

  // Skeletonsport
  { word: "Skeletonschlitten", article: "der", translation: "skeleton sled", category: "Skeletonsport" },
  { word: "Bauchlage", article: "die", translation: "prone position", category: "Skeletonsport" },
  { word: "Eiskanalkurve", article: "die", translation: "ice track curve", category: "Skeletonsport" },

  // Eisstocksport
  { word: "Eisstockschießen", article: "das", translation: "ice stock sport", category: "Eisstocksport" },
  { word: "Stockgleitfläche", article: "die", translation: "stock sliding surface", category: "Eisstocksport" },
  { word: "Weitenwertung", article: "die", translation: "distance scoring", category: "Eisstocksport" },

  // Druckgrafik
  { word: "Kupferstichplatte", article: "die", translation: "copper engraving plate", category: "Druckgrafik" },
  { word: "Radiernadel", article: "die", translation: "etching needle", category: "Druckgrafik" },
  { word: "Lithografiestein", article: "der", translation: "lithography stone", category: "Druckgrafik" },
  { word: "Holzschnittwerkzeug", article: "das", translation: "woodcut tool", category: "Druckgrafik" },
  { word: "Druckfarbenauftrag", article: "der", translation: "ink application", category: "Druckgrafik" },

  // Glasbläserei
  { word: "Glasschmelzofen", article: "der", translation: "glass melting furnace", category: "Glasbläserei" },
  { word: "Blaspfeife", article: "die", translation: "blowpipe", category: "Glasbläserei" },
  { word: "Glastropfen", article: "der", translation: "glass gob", category: "Glasbläserei" },
  { word: "Kühlofen", article: "der", translation: "annealing oven", category: "Glasbläserei" },

  // Mosaikkunst
  { word: "Mosaiksteinchen", article: "das", translation: "mosaic tessera", category: "Mosaikkunst" },
  { word: "Fugenmörtel", article: "der", translation: "grout", category: "Mosaikkunst" },
  { word: "Legetechnik", article: "die", translation: "laying technique (mosaic)", category: "Mosaikkunst" },
  { word: "Musterentwurf", article: "der", translation: "pattern design", category: "Mosaikkunst" },

  // Textilfärbetechnik
  { word: "Batikfärbung", article: "die", translation: "batik dyeing", category: "Textilfärbetechnik" },
  { word: "Wachsreservierung", article: "die", translation: "wax resist", category: "Textilfärbetechnik" },
  { word: "Färbebad", article: "das", translation: "dye bath", category: "Textilfärbetechnik" },
  { word: "Musterbindungstechnik", article: "die", translation: "tie-dye binding technique", category: "Textilfärbetechnik" },

  // Wasserversorgungstechnik
  { word: "Zisternenreinigung", article: "die", translation: "cistern cleaning", category: "Wasserversorgungstechnik" },
  { word: "Wasserwerkspumpe", article: "die", translation: "waterworks pump", category: "Wasserversorgungstechnik" },
  { word: "Rohrnetzberechnung", article: "die", translation: "pipe network calculation", category: "Wasserversorgungstechnik" },
  { word: "Druckminderungsventil", article: "das", translation: "pressure reducing valve", category: "Wasserversorgungstechnik" },

  // Abwassertechnik
  { word: "Kläranlagenbetrieb", article: "der", translation: "sewage plant operation", category: "Abwassertechnik" },
  { word: "Belebtschlammverfahren", article: "das", translation: "activated sludge process", category: "Abwassertechnik" },
  { word: "Vorklärbecken", article: "das", translation: "primary settling tank", category: "Abwassertechnik" },
  { word: "Faulgasgewinnung", article: "die", translation: "biogas recovery", category: "Abwassertechnik" },

  // Abfallwirtschaft (vertieft)
  { word: "Deponieabdichtung", article: "die", translation: "landfill sealing", category: "Abfallwirtschaft (vertieft)" },
  { word: "Sickerwasserableitung", article: "die", translation: "leachate drainage", category: "Abfallwirtschaft (vertieft)" },
  { word: "Wertstoffsortierung", article: "die", translation: "recyclable sorting", category: "Abfallwirtschaft (vertieft)" },

  // Altlastensanierung
  { word: "Bodenprobenentnahme", article: "die", translation: "soil sample collection", category: "Altlastensanierung" },
  { word: "Schadstoffkonzentration", article: "die", translation: "pollutant concentration", category: "Altlastensanierung" },
  { word: "Bodenaustauschverfahren", article: "das", translation: "soil replacement method", category: "Altlastensanierung" },

  // Sportmanagement
  { word: "Vereinsführung", article: "die", translation: "club management", category: "Sportmanagement" },
  { word: "Sponsorenvertrag", article: "der", translation: "sponsorship contract", category: "Sportmanagement" },
  { word: "Ticketverkauf", article: "der", translation: "ticket sales", category: "Sportmanagement" },
  { word: "Vermarktungsrechte", article: "die", translation: "marketing rights", category: "Sportmanagement" },
  { word: "Spielerwechsel", article: "der", translation: "player transfer", category: "Sportmanagement" },
  { word: "Wettkampfkalender", article: "der", translation: "competition calendar", category: "Sportmanagement" },
  { word: "Trainingslager", article: "das", translation: "training camp", category: "Sportmanagement" },

  // Eventmanagement
  { word: "Veranstaltungsplanung", article: "die", translation: "event planning", category: "Eventmanagement" },
  { word: "Locationauswahl", article: "die", translation: "venue selection", category: "Eventmanagement" },
  { word: "Ablaufplan", article: "der", translation: "schedule/run of show", category: "Eventmanagement" },
  { word: "Cateringservice", article: "der", translation: "catering service", category: "Eventmanagement" },
  { word: "Besucherstrom", article: "der", translation: "visitor flow", category: "Eventmanagement" },
  { word: "Bühnentechnik", article: "die", translation: "stage technology", category: "Eventmanagement" },
  { word: "Genehmigungspflicht", article: "die", translation: "permit requirement", category: "Eventmanagement" },

  // Spieleindustrie
  { word: "Spielentwicklung", article: "die", translation: "game development", category: "Spieleindustrie" },
  { word: "Spielmechanik", article: "die", translation: "game mechanics", category: "Spieleindustrie" },
  { word: "Charakterdesign", article: "das", translation: "character design", category: "Spieleindustrie" },
  { word: "Spielbalance", article: "die", translation: "game balance", category: "Spieleindustrie" },
  { word: "Levelgestaltung", article: "die", translation: "level design", category: "Spieleindustrie" },
  { word: "Spielerbindung", article: "die", translation: "player retention", category: "Spieleindustrie" },
  { word: "Wettkampfmodus", article: "der", translation: "competitive mode", category: "Spieleindustrie" },

  // Bergbau
  { word: "Erzabbau", article: "der", translation: "ore mining", category: "Bergbau" },
  { word: "Grubenbetrieb", article: "der", translation: "mine operation", category: "Bergbau" },
  { word: "Lagerstättenerkundung", article: "die", translation: "deposit exploration", category: "Bergbau" },
  { word: "Tagebau", article: "der", translation: "open-pit mining", category: "Bergbau" },
  { word: "Bergbausicherheit", article: "die", translation: "mining safety", category: "Bergbau" },
  { word: "Fördertechnik", article: "die", translation: "extraction technology", category: "Bergbau" },

  // Schifffahrt
  { word: "Frachtschiff", article: "das", translation: "cargo ship", category: "Schifffahrt" },
  { word: "Schiffsanlegestelle", article: "die", translation: "ship berth", category: "Schifffahrt" },
  { word: "Ladekapazität", article: "die", translation: "loading capacity", category: "Schifffahrt" },
  { word: "Seeweg", article: "der", translation: "sea route", category: "Schifffahrt" },
  { word: "Schiffsroute", article: "die", translation: "shipping route", category: "Schifffahrt" },
  { word: "Containerumschlag", article: "der", translation: "container handling", category: "Schifffahrt" },
  { word: "Frachtvertrag", article: "der", translation: "freight contract", category: "Schifffahrt" },

  // Luftfahrtwirtschaft
  { word: "Fluggesellschaft", article: "die", translation: "airline", category: "Luftfahrtwirtschaft" },
  { word: "Codesharing-Abkommen", article: "das", translation: "codeshare agreement", category: "Luftfahrtwirtschaft" },
  { word: "Flugverspätung", article: "die", translation: "flight delay", category: "Luftfahrtwirtschaft" },
  { word: "Bodenabfertigung", article: "die", translation: "ground handling", category: "Luftfahrtwirtschaft" },
  { word: "Passagieraufkommen", article: "das", translation: "passenger volume", category: "Luftfahrtwirtschaft" },
  { word: "Flugsicherung", article: "die", translation: "air traffic control", category: "Luftfahrtwirtschaft" },

  // Zollwesen
  { word: "Zollabfertigung", article: "die", translation: "customs clearance", category: "Zollwesen" },
  { word: "Einfuhrzoll", article: "der", translation: "import duty", category: "Zollwesen" },
  { word: "Warenkontrolle", article: "die", translation: "goods inspection", category: "Zollwesen" },
  { word: "Zollerklärung", article: "die", translation: "customs declaration", category: "Zollwesen" },
  { word: "Schmuggelbekämpfung", article: "die", translation: "anti-smuggling enforcement", category: "Zollwesen" },
  { word: "Zolltarif", article: "der", translation: "customs tariff", category: "Zollwesen" },

  // Seilbahntechnik
  { word: "Seilbahnkabine", article: "die", translation: "cable car cabin", category: "Seilbahntechnik" },
  { word: "Tragseilkontrolle", article: "die", translation: "support cable inspection", category: "Seilbahntechnik" },
  { word: "Stützenkonstruktion", article: "die", translation: "pylon construction", category: "Seilbahntechnik" },
  { word: "Talstation", article: "die", translation: "valley station", category: "Seilbahntechnik" },

  // Beschneiungstechnik
  { word: "Schneekanonenbetrieb", article: "der", translation: "snow cannon operation", category: "Beschneiungstechnik" },
  { word: "Kunstschneeverteilung", article: "die", translation: "artificial snow distribution", category: "Beschneiungstechnik" },
  { word: "Beschneiungsanlage", article: "die", translation: "snowmaking system", category: "Beschneiungstechnik" },

  // Skiliftbetrieb
  { word: "Liftbügelklemme", article: "die", translation: "ski lift bar clamp", category: "Skiliftbetrieb" },
  { word: "Förderbandantrieb", article: "der", translation: "conveyor belt drive", category: "Skiliftbetrieb" },
  { word: "Sesselabstand", article: "der", translation: "chair spacing (lift)", category: "Skiliftbetrieb" },

  // Lawinensicherung
  { word: "Lawinensprengung", article: "die", translation: "avalanche blasting", category: "Lawinensicherung" },
  { word: "Schneedeckenuntersuchung", article: "die", translation: "snowpack examination", category: "Lawinensicherung" },
  { word: "Lawinenwarnstufe", article: "die", translation: "avalanche warning level", category: "Lawinensicherung" },
  { word: "Verschüttetensuche", article: "die", translation: "buried victim search", category: "Lawinensicherung" },

  // Orgelbau
  { word: "Orgelpfeifenstimmung", article: "die", translation: "organ pipe tuning", category: "Orgelbau" },
  { word: "Balganlage", article: "die", translation: "bellows system", category: "Orgelbau" },
  { word: "Registerzug", article: "der", translation: "organ stop", category: "Orgelbau" },
  { word: "Windladenkonstruktion", article: "die", translation: "windchest construction", category: "Orgelbau" },

  // Geigenbau
  { word: "Geigenlack", article: "der", translation: "violin varnish", category: "Geigenbau" },
  { word: "Klangholzauswahl", article: "die", translation: "tonewood selection", category: "Geigenbau" },
  { word: "Saitenspannung", article: "die", translation: "string tension", category: "Geigenbau" },
  { word: "Stegposition", article: "die", translation: "bridge position (violin)", category: "Geigenbau" },

  // Klavierbau
  { word: "Klavierstimmung", article: "die", translation: "piano tuning", category: "Klavierbau" },
  { word: "Hammerkopfhärte", article: "die", translation: "hammer head hardness", category: "Klavierbau" },
  { word: "Resonanzbodenriss", article: "der", translation: "soundboard crack", category: "Klavierbau" },
  { word: "Mechanikjustierung", article: "die", translation: "action adjustment", category: "Klavierbau" },

  // Trommelbau
  { word: "Trommelfellbespannung", article: "die", translation: "drumhead tensioning", category: "Trommelbau" },
  { word: "Spannreifen", article: "der", translation: "tension hoop", category: "Trommelbau" },
  { word: "Kesselmaterial", article: "das", translation: "drum shell material", category: "Trommelbau" },

  // Schokoladenherstellung
  { word: "Trüffelpralinenherstellung", article: "die", translation: "truffle praline making", category: "Schokoladenherstellung" },
  { word: "Temperierverfahren", article: "das", translation: "tempering process (chocolate)", category: "Schokoladenherstellung" },
  { word: "Kakaobohnenröstung", article: "die", translation: "cocoa bean roasting", category: "Schokoladenherstellung" },
  { word: "Conchierdauer", article: "die", translation: "conching duration", category: "Schokoladenherstellung" },

  // Kaffeerösterei
  { word: "Kaffeeröstprofil", article: "das", translation: "coffee roast profile", category: "Kaffeerösterei" },
  { word: "Bohnenauslese", article: "die", translation: "bean selection", category: "Kaffeerösterei" },
  { word: "Röstgradbestimmung", article: "die", translation: "roast level determination", category: "Kaffeerösterei" },
  { word: "Extraktionszeit", article: "die", translation: "extraction time", category: "Kaffeerösterei" },

  // Teeherstellung
  { word: "Teeblattfermentation", article: "die", translation: "tea leaf fermentation", category: "Teeherstellung" },
  { word: "Welkprozess", article: "der", translation: "withering process (tea)", category: "Teeherstellung" },
  { word: "Rollverfahren", article: "das", translation: "rolling process (tea)", category: "Teeherstellung" },

  // Essigherstellung
  { word: "Essigsäurebildung", article: "die", translation: "acetic acid formation", category: "Essigherstellung" },
  { word: "Gärungsessig", article: "der", translation: "fermented vinegar", category: "Essigherstellung" },
  { word: "Mutterbildung", article: "die", translation: "mother formation (vinegar)", category: "Essigherstellung" },

  // Puppenspiel
  { word: "Handpuppenführung", article: "die", translation: "hand puppet manipulation", category: "Puppenspiel" },
  { word: "Marionettenfaden", article: "der", translation: "marionette string", category: "Puppenspiel" },
  { word: "Schattenspielfigur", article: "die", translation: "shadow play figure", category: "Puppenspiel" },
  { word: "Bühnenvorhang", article: "der", translation: "stage curtain", category: "Puppenspiel" },

  // Bauchrednerkunst
  { word: "Bauchrednerpuppe", article: "die", translation: "ventriloquist dummy", category: "Bauchrednerkunst" },
  { word: "Lippensynchronisation", article: "die", translation: "lip synchronization", category: "Bauchrednerkunst" },
  { word: "Stimmwerfen", article: "das", translation: "voice throwing", category: "Bauchrednerkunst" },

  // Jonglierkunst
  { word: "Jongliermuster", article: "das", translation: "juggling pattern", category: "Jonglierkunst" },
  { word: "Keulenwurf", article: "der", translation: "club throw", category: "Jonglierkunst" },
  { word: "Ballkaskade", article: "die", translation: "ball cascade", category: "Jonglierkunst" },

  // Zirkuskunst
  { word: "Einradbalance", article: "die", translation: "unicycle balance", category: "Zirkuskunst" },
  { word: "Trapezschwung", article: "der", translation: "trapeze swing", category: "Zirkuskunst" },
  { word: "Seiltänzerbalance", article: "die", translation: "tightrope walker balance", category: "Zirkuskunst" },
  { word: "Netzabsicherung", article: "die", translation: "net safety (circus)", category: "Zirkuskunst" },

  // Weinbau
  { word: "Weinbergterrasse", article: "die", translation: "vineyard terrace", category: "Weinbau" },
  { word: "Rebschnitt", article: "der", translation: "vine pruning", category: "Weinbau" },
  { word: "Laubarbeit", article: "die", translation: "leaf work (viticulture)", category: "Weinbau" },
  { word: "Weinlesetermin", article: "der", translation: "harvest date", category: "Weinbau" },
  { word: "Weinlese", article: "die", translation: "grape harvest", category: "Weinbau" },
  { word: "Rebsorte", article: "die", translation: "grape variety", category: "Weinbau" },
  { word: "Gärungsprozess", article: "der", translation: "fermentation process", category: "Weinbau" },
  { word: "Weinausbau", article: "der", translation: "wine aging", category: "Weinbau" },
  { word: "Tanninstruktur", article: "die", translation: "tannin structure", category: "Weinbau" },
  { word: "Weinlagerung", article: "die", translation: "wine storage", category: "Weinbau" },
  { word: "Anbaugebiet", article: "das", translation: "wine-growing region", category: "Weinbau" },

  // Hopfenanbau
  { word: "Hopfengarten", article: "der", translation: "hop garden", category: "Hopfenanbau" },
  { word: "Rankgerüst", article: "das", translation: "climbing frame (hops)", category: "Hopfenanbau" },
  { word: "Doldenreife", article: "die", translation: "cone ripeness", category: "Hopfenanbau" },

  // Rübenanbau
  { word: "Zuckerrübenernte", article: "die", translation: "sugar beet harvest", category: "Rübenanbau" },
  { word: "Rübenverladung", article: "die", translation: "beet loading", category: "Rübenanbau" },
  { word: "Zuckergehaltmessung", article: "die", translation: "sugar content measurement", category: "Rübenanbau" },

  // Hanfanbau
  { word: "Hanffaseraufbereitung", article: "die", translation: "hemp fiber processing", category: "Hanfanbau" },
  { word: "Röstverfahren", article: "das", translation: "retting process (hemp)", category: "Hanfanbau" },
  { word: "Samenertrag", article: "der", translation: "seed yield", category: "Hanfanbau" },

  // Alpakazucht
  { word: "Alpakawollschur", article: "die", translation: "alpaca wool shearing", category: "Alpakazucht" },
  { word: "Herdenführung", article: "die", translation: "herd management", category: "Alpakazucht" },
  { word: "Faserqualität", article: "die", translation: "fiber quality", category: "Alpakazucht" },

  // Straußenzucht
  { word: "Straußenfarmbetrieb", article: "der", translation: "ostrich farm operation", category: "Straußenzucht" },
  { word: "Federngewinnung", article: "die", translation: "feather harvesting", category: "Straußenzucht" },
  { word: "Bruteivermarktung", article: "die", translation: "hatching egg marketing", category: "Straußenzucht" },

  // Schneckenzucht
  { word: "Schneckenzuchtanlage", article: "die", translation: "snail farming facility", category: "Schneckenzucht" },
  { word: "Häuschenbildung", article: "die", translation: "shell formation (snails)", category: "Schneckenzucht" },
  { word: "Mastzeitraum", article: "der", translation: "fattening period", category: "Schneckenzucht" },

  // Wachtelzucht
  { word: "Wachtelvoliere", article: "die", translation: "quail aviary", category: "Wachtelzucht" },
  { word: "Wachteleierverpackung", article: "die", translation: "quail egg packaging", category: "Wachtelzucht" },
  { word: "Kükenaufzucht", article: "die", translation: "chick rearing", category: "Wachtelzucht" },

  // Segelmacherhandwerk
  { word: "Segelnaht", article: "die", translation: "sail seam", category: "Segelmacherhandwerk" },
  { word: "Segellattentasche", article: "die", translation: "sail batten pocket", category: "Segelmacherhandwerk" },
  { word: "Persenning", article: "die", translation: "boat cover canvas", category: "Segelmacherhandwerk" },
  { word: "Reffvorrichtung", article: "die", translation: "reefing device", category: "Segelmacherhandwerk" },

  // Bootsbauerhandwerk
  { word: "Bootsrumpflackierung", article: "die", translation: "hull varnishing", category: "Bootsbauerhandwerk" },
  { word: "Kielaufbau", article: "der", translation: "keel construction", category: "Bootsbauerhandwerk" },
  { word: "Plankenbeplankung", article: "die", translation: "hull planking", category: "Bootsbauerhandwerk" },
  { word: "Ruderblatt", article: "das", translation: "rudder blade", category: "Bootsbauerhandwerk" },

  // Takelage
  { word: "Takelagearbeit", article: "die", translation: "rigging work", category: "Takelage" },
  { word: "Wantenverspannung", article: "die", translation: "shroud tensioning", category: "Takelage" },
  { word: "Blockrolle", article: "die", translation: "pulley block", category: "Takelage" },

  // Ankertechnik
  { word: "Ankerkettenglied", article: "das", translation: "anchor chain link", category: "Ankertechnik" },
  { word: "Ankerwinde", article: "die", translation: "anchor winch", category: "Ankertechnik" },
  { word: "Ankergrund", article: "der", translation: "anchoring ground", category: "Ankertechnik" },

  // Steinmetzhandwerk
  { word: "Grabsteininschrift", article: "die", translation: "gravestone inscription", category: "Steinmetzhandwerk" },
  { word: "Meißelführung", article: "die", translation: "chisel guidance", category: "Steinmetzhandwerk" },
  { word: "Natursteinbearbeitung", article: "die", translation: "natural stone processing", category: "Steinmetzhandwerk" },
  { word: "Poliergrad", article: "der", translation: "polish grade", category: "Steinmetzhandwerk" },

  // Glockengießerei
  { word: "Glockengussform", article: "die", translation: "bell casting mold", category: "Glockengießerei" },
  { word: "Klangprobe", article: "die", translation: "sound test (bell)", category: "Glockengießerei" },
  { word: "Bronzelegierung", article: "die", translation: "bronze alloy", category: "Glockengießerei" },

  // Zinngießerhandwerk
  { word: "Zinngussform", article: "die", translation: "pewter casting mold", category: "Zinngießerhandwerk" },
  { word: "Legierungsverhältnis", article: "das", translation: "alloy ratio", category: "Zinngießerhandwerk" },
  { word: "Ziselierarbeit", article: "die", translation: "chasing work (metal)", category: "Zinngießerhandwerk" },

  // Hufschmiedehandwerk
  { word: "Hufeisenform", article: "die", translation: "horseshoe shape", category: "Hufschmiedehandwerk" },
  { word: "Beschlagtermin", article: "der", translation: "shoeing appointment", category: "Hufschmiedehandwerk" },
  { word: "Hufpflege", article: "die", translation: "hoof care", category: "Hufschmiedehandwerk" },

  // Kranbetrieb
  { word: "Kranauslegerlänge", article: "die", translation: "crane boom length", category: "Kranbetrieb" },
  { word: "Lastmomentbegrenzung", article: "die", translation: "load moment limitation", category: "Kranbetrieb" },
  { word: "Hakenflasche", article: "die", translation: "hook block", category: "Kranbetrieb" },
  { word: "Einweiserzeichen", article: "das", translation: "signaler sign (crane)", category: "Kranbetrieb" },

  // Erdbautechnik
  { word: "Baggerschaufelbreite", article: "die", translation: "excavator bucket width", category: "Erdbautechnik" },
  { word: "Grabentiefe", article: "die", translation: "trench depth", category: "Erdbautechnik" },
  { word: "Verbauplatte", article: "die", translation: "shoring plate", category: "Erdbautechnik" },
  { word: "Grabenverbau", article: "der", translation: "trench shoring", category: "Erdbautechnik" },

  // Betonbautechnik
  { word: "Schalungsplatte", article: "die", translation: "formwork panel", category: "Betonbautechnik" },
  { word: "Bewehrungsplan", article: "der", translation: "reinforcement plan", category: "Betonbautechnik" },
  { word: "Betonrüttelung", article: "die", translation: "concrete vibration", category: "Betonbautechnik" },
  { word: "Nachbehandlungsdauer", article: "die", translation: "curing period", category: "Betonbautechnik" },

  // Gerüstbautechnik
  { word: "Gerüstverankerung", article: "die", translation: "scaffold anchoring", category: "Gerüstbautechnik" },
  { word: "Bordbrett", article: "das", translation: "toe board (scaffolding)", category: "Gerüstbautechnik" },
  { word: "Standfußplatte", article: "die", translation: "base plate (scaffold)", category: "Gerüstbautechnik" },

  // Getreidelagerung
  { word: "Silobefüllung", article: "die", translation: "silo filling", category: "Getreidelagerung" },
  { word: "Feuchtigkeitsmessgerät", article: "das", translation: "moisture meter", category: "Getreidelagerung" },
  { word: "Belüftungssteuerung", article: "die", translation: "aeration control", category: "Getreidelagerung" },
  { word: "Kornkäferbekämpfung", article: "die", translation: "grain weevil control", category: "Getreidelagerung" },

  // Erntetechnik
  { word: "Mähdrescherschneidwerk", article: "das", translation: "combine harvester cutting unit", category: "Erntetechnik" },
  { word: "Dreschtrommel", article: "die", translation: "threshing drum", category: "Erntetechnik" },
  { word: "Strohschwad", article: "das", translation: "straw swath", category: "Erntetechnik" },
  { word: "Kornverlust", article: "der", translation: "grain loss", category: "Erntetechnik" },

  // Bewässerungstechnik
  { word: "Bewässerungsanlage", article: "die", translation: "irrigation system", category: "Bewässerungstechnik" },
  { word: "Tropfschlauch", article: "der", translation: "drip tube", category: "Bewässerungstechnik" },
  { word: "Beregnungsintensität", article: "die", translation: "sprinkling intensity", category: "Bewässerungstechnik" },

  // Düngetechnik
  { word: "Düngerstreuer", article: "der", translation: "fertilizer spreader", category: "Düngetechnik" },
  { word: "Ausbringmenge", article: "die", translation: "application rate", category: "Düngetechnik" },
  { word: "Nährstoffanalyse", article: "die", translation: "nutrient analysis", category: "Düngetechnik" },

  // Verwaltungswesen
  { word: "Aktenführung", article: "die", translation: "file management", category: "Verwaltungswesen" },
  { word: "Antragsbearbeitung", article: "die", translation: "application processing", category: "Verwaltungswesen" },
  { word: "Vorgangsnummer", article: "die", translation: "case reference number", category: "Verwaltungswesen" },
  { word: "Amtshilfe", article: "die", translation: "administrative assistance", category: "Verwaltungswesen" },
  { word: "Fristverlängerung", article: "die", translation: "deadline extension", category: "Verwaltungswesen" },
  { word: "Bearbeitungsfrist", article: "die", translation: "processing deadline", category: "Verwaltungswesen" },
  { word: "Formularpflicht", article: "die", translation: "form requirement", category: "Verwaltungswesen" },
  { word: "Verwaltungsvorschrift", article: "die", translation: "administrative regulation", category: "Verwaltungswesen" },

  // Steuerverwaltung
  { word: "Steuerveranlagung", article: "die", translation: "tax assessment", category: "Steuerverwaltung" },
  { word: "Steuerprüfung", article: "die", translation: "tax audit", category: "Steuerverwaltung" },
  { word: "Steuerbescheid", article: "der", translation: "tax notice", category: "Steuerverwaltung" },
  { word: "Steuernachzahlung", article: "die", translation: "back tax payment", category: "Steuerverwaltung" },
  { word: "Abschreibungsmöglichkeit", article: "die", translation: "depreciation option", category: "Steuerverwaltung" },
  { word: "Veranlagungszeitraum", article: "der", translation: "assessment period", category: "Steuerverwaltung" },
  { word: "Vorsteuerabzug", article: "der", translation: "input tax deduction", category: "Steuerverwaltung" },

  // Diplomatisches Protokoll
  { word: "Verhandlungsprotokoll", article: "das", translation: "negotiation record", category: "Diplomatisches Protokoll" },
  { word: "Amtsantritt", article: "der", translation: "taking of office", category: "Diplomatisches Protokoll" },
  { word: "Empfangszeremonie", article: "die", translation: "reception ceremony", category: "Diplomatisches Protokoll" },
  { word: "Akkreditierung", article: "die", translation: "accreditation", category: "Diplomatisches Protokoll" },
  { word: "Rangordnung", article: "die", translation: "order of precedence", category: "Diplomatisches Protokoll" },
  { word: "Beglaubigungsschreiben", article: "das", translation: "letter of credence", category: "Diplomatisches Protokoll" },
  { word: "Höflichkeitsbesuch", article: "der", translation: "courtesy visit", category: "Diplomatisches Protokoll" },

  // Militärwesen
  { word: "Truppenstationierung", article: "die", translation: "troop deployment", category: "Militärwesen" },
  { word: "Aufklärungsmission", article: "die", translation: "reconnaissance mission", category: "Militärwesen" },
  { word: "Befehlskette", article: "die", translation: "chain of command", category: "Militärwesen" },
  { word: "Rüstungsindustrie", article: "die", translation: "arms industry", category: "Militärwesen" },
  { word: "Manöverübung", article: "die", translation: "military exercise/maneuver", category: "Militärwesen" },
  { word: "Wehrpflicht", article: "die", translation: "conscription", category: "Militärwesen" },
  { word: "Militärstrategie", article: "die", translation: "military strategy", category: "Militärwesen" },

  // Gerontologie
  { word: "Altersvorsorgeplanung", article: "die", translation: "retirement planning", category: "Gerontologie" },
  { word: "Altersschwäche", article: "die", translation: "infirmity of old age", category: "Gerontologie" },
  { word: "Altersgebrechen", article: "das", translation: "age-related ailment", category: "Gerontologie" },
  { word: "Seniorenbetreuung", article: "die", translation: "elderly care", category: "Gerontologie" },
  { word: "Demenzerkrankung", article: "die", translation: "dementia illness", category: "Gerontologie" },
  { word: "Mobilitätseinschränkung", article: "die", translation: "mobility limitation", category: "Gerontologie" },

  // Rehabilitation
  { word: "Anschlussheilbehandlung", article: "die", translation: "follow-up rehabilitation treatment", category: "Rehabilitation" },
  { word: "Belastbarkeitsgrenze", article: "die", translation: "stress tolerance limit", category: "Rehabilitation" },
  { word: "Belastungserprobung", article: "die", translation: "stress test (rehab)", category: "Rehabilitation" },
  { word: "Funktionstraining", article: "das", translation: "functional training", category: "Rehabilitation" },
  { word: "Genesungsprozess", article: "der", translation: "recovery process", category: "Rehabilitation" },
  { word: "Erwerbsfähigkeit", article: "die", translation: "capacity to work", category: "Rehabilitation" },

  // Feuerwehrwesen (vertieft)
  { word: "Feuerlöschzugausrückung", article: "die", translation: "fire truck deployment", category: "Feuerwehrwesen (vertieft)" },
  { word: "Atemschutzgerätträger", article: "der", translation: "breathing apparatus wearer", category: "Feuerwehrwesen (vertieft)" },
  { word: "Löschangriffsplanung", article: "die", translation: "fire attack planning", category: "Feuerwehrwesen (vertieft)" },
  { word: "Brandausbreitungsrichtung", article: "die", translation: "fire spread direction", category: "Feuerwehrwesen (vertieft)" },

  // Luftrettung
  { word: "Rettungshubschraubereinsatz", article: "der", translation: "rescue helicopter mission", category: "Luftrettung" },
  { word: "Windeneinsatz", article: "der", translation: "winch operation", category: "Luftrettung" },
  { word: "Landeplatzsicherung", article: "die", translation: "landing zone securing", category: "Luftrettung" },

  // Bergrettung
  { word: "Bergrettungstrupp", article: "der", translation: "mountain rescue team", category: "Bergrettung" },
  { word: "Seilbergung", article: "die", translation: "rope rescue", category: "Bergrettung" },
  { word: "Lawinenverschütteter", article: "der", translation: "avalanche victim", category: "Bergrettung" },

  // Wasserrettung
  { word: "Wasserrettungsboot", article: "das", translation: "water rescue boat", category: "Wasserrettung" },
  { word: "Strömungsrettung", article: "die", translation: "swift water rescue", category: "Wasserrettung" },
  { word: "Tauchereinsatzleiter", article: "der", translation: "diving mission commander", category: "Wasserrettung" },

  // Fernverkehrslogistik
  { word: "Sattelschlepperführerschein", article: "der", translation: "semi-trailer truck license", category: "Fernverkehrslogistik" },
  { word: "Ladungssicherungsnetz", article: "das", translation: "cargo securing net", category: "Fernverkehrslogistik" },
  { word: "Lenkzeitenkontrolle", article: "die", translation: "driving time control", category: "Fernverkehrslogistik" },
  { word: "Frachtbrief", article: "der", translation: "waybill", category: "Fernverkehrslogistik" },

  // Hafenlogistik
  { word: "Containerumschlagplatz", article: "der", translation: "container transshipment yard", category: "Hafenlogistik" },
  { word: "Kranbrückenverladung", article: "die", translation: "gantry crane loading", category: "Hafenlogistik" },
  { word: "Zollabfertigungsstelle", article: "die", translation: "customs clearance point", category: "Hafenlogistik" },
  { word: "Containerverladung", article: "die", translation: "container loading", category: "Hafenlogistik" },
  { word: "Kranbetrieb", article: "der", translation: "crane operation", category: "Hafenlogistik" },
  { word: "Terminalabfertigung", article: "die", translation: "terminal handling", category: "Hafenlogistik" },
  { word: "Zolllager", article: "das", translation: "customs warehouse", category: "Hafenlogistik" },
  { word: "Verschiffungstermin", article: "der", translation: "shipping date", category: "Hafenlogistik" },

  // Paketlogistik
  { word: "Paketsortieranlage", article: "die", translation: "parcel sorting facility", category: "Paketlogistik" },
  { word: "Zustellbezirk", article: "der", translation: "delivery district", category: "Paketlogistik" },
  { word: "Sendungsverfolgungsnummer", article: "die", translation: "tracking number", category: "Paketlogistik" },

  // Kühllogistik
  { word: "Frostschutzverpackung", article: "die", translation: "frost protection packaging", category: "Kühllogistik" },
  { word: "Temperaturabweichungsmeldung", article: "die", translation: "temperature deviation alert", category: "Kühllogistik" },
  { word: "Kühlaggregat", article: "das", translation: "refrigeration unit", category: "Kühllogistik" },
  { word: "Kühlkettenüberwachung", article: "die", translation: "cold chain monitoring", category: "Kühllogistik" },
  { word: "Temperaturprotokoll", article: "das", translation: "temperature log", category: "Kühllogistik" },
  { word: "Kühlcontainer", article: "der", translation: "refrigerated container", category: "Kühllogistik" },
  { word: "Tiefkühltransport", article: "der", translation: "frozen goods transport", category: "Kühllogistik" },

  // Turmuhrenbau
  { word: "Turmuhrmechanismus", article: "der", translation: "tower clock mechanism", category: "Turmuhrenbau" },
  { word: "Läutewerk", article: "das", translation: "chiming mechanism", category: "Turmuhrenbau" },
  { word: "Zeigerstellung", article: "die", translation: "hand setting (clock)", category: "Turmuhrenbau" },

  // Mühlenbau
  { word: "Windmühlenflügel", article: "der", translation: "windmill sail", category: "Mühlenbau" },
  { word: "Mahlgangstein", article: "der", translation: "millstone", category: "Mühlenbau" },
  { word: "Getreideschütte", article: "die", translation: "grain hopper", category: "Mühlenbau" },
  { word: "Windrichtungsanpassung", article: "die", translation: "wind direction adjustment", category: "Mühlenbau" },

  // Wassermühlentechnik
  { word: "Wasserradschaufel", article: "die", translation: "waterwheel blade", category: "Wassermühlentechnik" },
  { word: "Mühlbachzulauf", article: "der", translation: "millrace inflow", category: "Wassermühlentechnik" },
  { word: "Stauwehr", article: "das", translation: "weir", category: "Wassermühlentechnik" },

  // Kunstschmiedehandwerk
  { word: "Schmiedeesse", article: "die", translation: "forge hearth", category: "Kunstschmiedehandwerk" },
  { word: "Ambosshorn", article: "das", translation: "anvil horn", category: "Kunstschmiedehandwerk" },
  { word: "Schmiedezange", article: "die", translation: "forging tongs", category: "Kunstschmiedehandwerk" },
  { word: "Glühfarbe", article: "die", translation: "heat color (forging)", category: "Kunstschmiedehandwerk" },

  // Bienenzuchtausrüstung
  { word: "Imkerschleier", article: "der", translation: "beekeeper veil", category: "Bienenzuchtausrüstung" },
  { word: "Smokerbrennstoff", article: "der", translation: "smoker fuel (beekeeping)", category: "Bienenzuchtausrüstung" },
  { word: "Ablegerbildung", article: "die", translation: "nucleus colony formation", category: "Bienenzuchtausrüstung" },

  // Seidenraupenzucht
  { word: "Seidenraupenzucht", article: "die", translation: "silkworm farming", category: "Seidenraupenzucht" },
  { word: "Kokonverarbeitung", article: "die", translation: "cocoon processing", category: "Seidenraupenzucht" },
  { word: "Maulbeerblattfütterung", article: "die", translation: "mulberry leaf feeding", category: "Seidenraupenzucht" },

  // Perlenzucht
  { word: "Perlmuttschicht", article: "die", translation: "nacre layer", category: "Perlenzucht" },
  { word: "Zuchtmuschelbehälter", article: "der", translation: "pearl oyster cage", category: "Perlenzucht" },
  { word: "Impfkerntechnik", article: "die", translation: "nucleation technique (pearls)", category: "Perlenzucht" },

  // Algenzucht
  { word: "Algenzuchtbecken", article: "das", translation: "algae cultivation tank", category: "Algenzucht" },
  { word: "Nährstofflösungsdosierung", article: "die", translation: "nutrient solution dosing", category: "Algenzucht" },
  { word: "Biomasseertrag", article: "der", translation: "biomass yield", category: "Algenzucht" },

  // Gourmetküche
  { word: "Trüffelaroma", article: "das", translation: "truffle aroma", category: "Gourmetküche" },
  { word: "Sousvidegarung", article: "die", translation: "sous-vide cooking", category: "Gourmetküche" },
  { word: "Reduktionssauce", article: "die", translation: "reduction sauce", category: "Gourmetküche" },
  { word: "Tellergestaltung", article: "die", translation: "plating design", category: "Gourmetküche" },
  { word: "Aromenkombination", article: "die", translation: "flavor combination", category: "Gourmetküche" },

  // Fermentationsküche
  { word: "Fermentationsgefäß", article: "das", translation: "fermentation vessel", category: "Fermentationsküche" },
  { word: "Milchsäuregärung", article: "die", translation: "lactic acid fermentation", category: "Fermentationsküche" },
  { word: "Kimchiwürzung", article: "die", translation: "kimchi seasoning", category: "Fermentationsküche" },
  { word: "Gärtopf", article: "der", translation: "fermenting crock", category: "Fermentationsküche" },

  // Molekularküche
  { word: "Molekularküchentechnik", article: "die", translation: "molecular gastronomy technique", category: "Molekularküche" },
  { word: "Sphärifizierung", article: "die", translation: "spherification", category: "Molekularküche" },
  { word: "Schaumbildner", article: "der", translation: "foam agent", category: "Molekularküche" },

  // Streetfoodgastronomie
  { word: "Streetfoodwagen", article: "der", translation: "street food cart", category: "Streetfoodgastronomie" },
  { word: "Foodtruckstandort", article: "der", translation: "food truck location", category: "Streetfoodgastronomie" },
  { word: "Imbissauslage", article: "die", translation: "snack bar display", category: "Streetfoodgastronomie" },

  // Weinsommelierwesen
  { word: "Sommelierverkostung", article: "die", translation: "sommelier tasting", category: "Weinsommelierwesen" },
  { word: "Geschmacksnote", article: "die", translation: "tasting note", category: "Weinsommelierwesen" },
  { word: "Dekantiervorgang", article: "der", translation: "decanting process", category: "Weinsommelierwesen" },
  { word: "Ausbaustil", article: "der", translation: "aging style (wine)", category: "Weinsommelierwesen" },

  // Baristahandwerk
  { word: "Baristaschulung", article: "die", translation: "barista training", category: "Baristahandwerk" },
  { word: "Milchschaumtextur", article: "die", translation: "milk foam texture", category: "Baristahandwerk" },
  { word: "Latteartmuster", article: "das", translation: "latte art pattern", category: "Baristahandwerk" },
  { word: "Espressodruck", article: "der", translation: "espresso pressure", category: "Baristahandwerk" },

  // Barkeeperhandwerk
  { word: "Cocktailshaker", article: "der", translation: "cocktail shaker", category: "Barkeeperhandwerk" },
  { word: "Zutatendosierung", article: "die", translation: "ingredient dosing", category: "Barkeeperhandwerk" },
  { word: "Garniturtechnik", article: "die", translation: "garnish technique", category: "Barkeeperhandwerk" },

  // Brotkultur
  { word: "Brotsommelierverkostung", article: "die", translation: "bread sommelier tasting", category: "Brotkultur" },
  { word: "Krumenstruktur", article: "die", translation: "crumb structure", category: "Brotkultur" },
  { word: "Backhandwerkstradition", article: "die", translation: "baking craft tradition", category: "Brotkultur" },

  // Wüstenkunde
  { word: "Sanddünenbildung", article: "die", translation: "sand dune formation", category: "Wüstenkunde" },
  { word: "Oasenbewässerung", article: "die", translation: "oasis irrigation", category: "Wüstenkunde" },
  { word: "Trockenheitsanpassung", article: "die", translation: "drought adaptation", category: "Wüstenkunde" },
  { word: "Sandsturmwarnung", article: "die", translation: "sandstorm warning", category: "Wüstenkunde" },

  // Gletscherkunde
  { word: "Gletscherspaltenrettung", article: "die", translation: "crevasse rescue", category: "Gletscherkunde" },
  { word: "Eisdickenmessung", article: "die", translation: "ice thickness measurement", category: "Gletscherkunde" },
  { word: "Firnschneegrenze", article: "die", translation: "firn line", category: "Gletscherkunde" },
  { word: "Gletscherrückgang", article: "der", translation: "glacier retreat", category: "Gletscherkunde" },

  // Korallenriffkunde
  { word: "Korallenriffbleiche", article: "die", translation: "coral reef bleaching", category: "Korallenriffkunde" },
  { word: "Riffwiederaufbau", article: "der", translation: "reef restoration", category: "Korallenriffkunde" },
  { word: "Symbiosealge", article: "die", translation: "symbiotic algae", category: "Korallenriffkunde" },

  // Mangrovenkunde
  { word: "Mangrovenwurzelnetz", article: "das", translation: "mangrove root network", category: "Mangrovenkunde" },
  { word: "Gezeitenüberflutung", article: "die", translation: "tidal flooding", category: "Mangrovenkunde" },
  { word: "Küstenschutzfunktion", article: "die", translation: "coastal protection function", category: "Mangrovenkunde" },

  // Vulkanologie
  { word: "Vulkanausbruchsvorhersage", article: "die", translation: "volcanic eruption forecast", category: "Vulkanologie" },
  { word: "Magmakammerdruck", article: "der", translation: "magma chamber pressure", category: "Vulkanologie" },
  { word: "Aschewolkenausbreitung", article: "die", translation: "ash cloud dispersal", category: "Vulkanologie" },
  { word: "Lavastromgeschwindigkeit", article: "die", translation: "lava flow speed", category: "Vulkanologie" },
  { word: "Vulkanausbruch", article: "der", translation: "volcanic eruption", category: "Vulkanologie" },
  { word: "Magmakammer", article: "die", translation: "magma chamber", category: "Vulkanologie" },
  { word: "Aschewolke", article: "die", translation: "ash cloud", category: "Vulkanologie" },
  { word: "Lavastrom", article: "der", translation: "lava flow", category: "Vulkanologie" },
  { word: "Eruptionsvorhersage", article: "die", translation: "eruption prediction", category: "Vulkanologie" },

  // Seismologie (vertieft)
  { word: "Erdbebenherdtiefe", article: "die", translation: "earthquake hypocenter depth", category: "Seismologie (vertieft)" },
  { word: "Nachbebenserie", article: "die", translation: "aftershock sequence", category: "Seismologie (vertieft)" },
  { word: "Bebenmagnitudenskala", article: "die", translation: "earthquake magnitude scale", category: "Seismologie (vertieft)" },

  // Tsunamikunde
  { word: "Tsunamifrühwarnsystem", article: "das", translation: "tsunami early warning system", category: "Tsunamikunde" },
  { word: "Wellenlaufzeit", article: "die", translation: "wave travel time", category: "Tsunamikunde" },
  { word: "Küstenwarnbake", article: "die", translation: "coastal warning beacon", category: "Tsunamikunde" },

  // Permafrostforschung
  { word: "Permafrostauftauung", article: "die", translation: "permafrost thaw", category: "Permafrostforschung" },
  { word: "Bodeneisgehalt", article: "der", translation: "ground ice content", category: "Permafrostforschung" },
  { word: "Tauwassersee", article: "der", translation: "thermokarst lake", category: "Permafrostforschung" },

  // Wildtierdressur
  { word: "Trüffelschweinausbildung", article: "die", translation: "truffle pig training", category: "Wildtierdressur" },
  { word: "Zirkustierdressur", article: "die", translation: "circus animal training", category: "Wildtierdressur" },
  { word: "Belohnungsreiztraining", article: "das", translation: "reward stimulus training", category: "Wildtierdressur" },

  // Diensthundewesen
  { word: "Diensthundeausbildung", article: "die", translation: "police dog training", category: "Diensthundewesen" },
  { word: "Fährtensuche", article: "die", translation: "tracking search", category: "Diensthundewesen" },
  { word: "Schutzhundeprüfung", article: "die", translation: "protection dog test", category: "Diensthundewesen" },
  { word: "Sprengstoffspürhund", article: "der", translation: "explosive detection dog", category: "Diensthundewesen" },

  // Assistenzhundewesen
  { word: "Blindenführhundausbildung", article: "die", translation: "guide dog training", category: "Assistenzhundewesen" },
  { word: "Signalhundetraining", article: "das", translation: "hearing dog training", category: "Assistenzhundewesen" },
  { word: "Halterbindung", article: "die", translation: "handler bonding", category: "Assistenzhundewesen" },

  // Tiergestützte Therapie
  { word: "Therapiepferdeeinsatz", article: "der", translation: "therapy horse use", category: "Tiergestützte Therapie" },
  { word: "Streicheltiergehege", article: "das", translation: "petting animal enclosure", category: "Tiergestützte Therapie" },
  { word: "Vertrauensaufbau", article: "der", translation: "trust building", category: "Tiergestützte Therapie" },

  // Zootierpflege
  { word: "Zootierpflegerausbildung", article: "die", translation: "zookeeper training", category: "Zootierpflege" },
  { word: "Gehegereinigung", article: "die", translation: "enclosure cleaning", category: "Zootierpflege" },
  { word: "Fütterungsplan", article: "der", translation: "feeding schedule", category: "Zootierpflege" },
  { word: "Verhaltensbereicherung", article: "die", translation: "behavioral enrichment", category: "Zootierpflege" },

  // Aquaristik (vertieft)
  { word: "Aquarianerbecken", article: "das", translation: "aquarist tank", category: "Aquaristik (vertieft)" },
  { word: "Wasserwertmessung", article: "die", translation: "water parameter measurement", category: "Aquaristik (vertieft)" },
  { word: "Bepflanzungskonzept", article: "das", translation: "planting concept (aquarium)", category: "Aquaristik (vertieft)" },

  // Terraristik (vertieft)
  { word: "Terrarienklimasteuerung", article: "die", translation: "terrarium climate control", category: "Terraristik (vertieft)" },
  { word: "Häutungsproblem", article: "das", translation: "shedding problem", category: "Terraristik (vertieft)" },
  { word: "Beleuchtungsspektrum", article: "das", translation: "lighting spectrum", category: "Terraristik (vertieft)" },

  // Vogelhaltung (vertieft)
  { word: "Vogelvoliereneinrichtung", article: "die", translation: "aviary furnishing", category: "Vogelhaltung (vertieft)" },
  { word: "Gefiederkontrolle", article: "die", translation: "plumage check", category: "Vogelhaltung (vertieft)" },
  { word: "Handaufzuchtvogel", article: "der", translation: "hand-reared bird", category: "Vogelhaltung (vertieft)" },

  // Stadtplanung
  { word: "Flächennutzungsplan", article: "der", translation: "land use plan", category: "Stadtplanung" },
  { word: "Bebauungsdichte", article: "die", translation: "building density", category: "Stadtplanung" },
  { word: "Verkehrsanbindung", article: "die", translation: "transport connection", category: "Stadtplanung" },
  { word: "Wohnraumdichte", article: "die", translation: "housing density", category: "Stadtplanung" },
  { word: "Verdichtungsgebiet", article: "das", translation: "densification zone", category: "Stadtplanung" },
  { word: "Innenstadtgestaltung", article: "die", translation: "city center design", category: "Stadtplanung" },
  { word: "Bauleitplanung", article: "die", translation: "urban land-use planning", category: "Stadtplanung" },

  // Wasserwirtschaft
  { word: "Trinkwasserversorgung", article: "die", translation: "drinking water supply", category: "Wasserwirtschaft" },
  { word: "Abwasserreinigung", article: "die", translation: "wastewater treatment", category: "Wasserwirtschaft" },
  { word: "Wasserentnahme", article: "die", translation: "water abstraction", category: "Wasserwirtschaft" },
  { word: "Grundwasserspiegel", article: "der", translation: "groundwater level", category: "Wasserwirtschaft" },
  { word: "Wasserqualität", article: "die", translation: "water quality", category: "Wasserwirtschaft" },
  { word: "Bewässerungssystem", article: "das", translation: "irrigation system", category: "Wasserwirtschaft" },
  { word: "Hochwasserschutz", article: "der", translation: "flood protection", category: "Wasserwirtschaft" },

  // Abfallwirtschaft
  { word: "Müllverbrennung", article: "die", translation: "waste incineration", category: "Abfallwirtschaft" },
  { word: "Entsorgungskonzept", article: "das", translation: "disposal concept", category: "Abfallwirtschaft" },
  { word: "Deponiekapazität", article: "die", translation: "landfill capacity", category: "Abfallwirtschaft" },
  { word: "Sondermüllentsorgung", article: "die", translation: "hazardous waste disposal", category: "Abfallwirtschaft" },
  { word: "Abfalltrennung", article: "die", translation: "waste separation", category: "Abfallwirtschaft" },
  { word: "Sammelquote", article: "die", translation: "collection rate", category: "Abfallwirtschaft" },

  // Qualitätsmanagement
  { word: "Qualitätssicherungssystem", article: "das", translation: "quality assurance system", category: "Qualitätsmanagement" },
  { word: "Zertifizierungsprozess", article: "der", translation: "certification process", category: "Qualitätsmanagement" },
  { word: "Abnahmeprotokoll", article: "das", translation: "acceptance protocol", category: "Qualitätsmanagement" },
  { word: "Prüfverfahren", article: "das", translation: "testing procedure", category: "Qualitätsmanagement" },
  { word: "Konformitätsbewertung", article: "die", translation: "conformity assessment", category: "Qualitätsmanagement" },
  { word: "Reklamationsquote", article: "die", translation: "complaint rate", category: "Qualitätsmanagement" },
  { word: "Prozessnorm", article: "die", translation: "process standard", category: "Qualitätsmanagement" },

  // Arbeitssicherheit
  { word: "Unfallverhütung", article: "die", translation: "accident prevention", category: "Arbeitssicherheit" },
  { word: "Gefährdungsbeurteilung", article: "die", translation: "risk assessment (workplace)", category: "Arbeitssicherheit" },
  { word: "Schutzausrüstung", article: "die", translation: "protective equipment", category: "Arbeitssicherheit" },
  { word: "Betriebsanweisung", article: "die", translation: "operating instructions", category: "Arbeitssicherheit" },
  { word: "Unfallmeldung", article: "die", translation: "accident report", category: "Arbeitssicherheit" },
  { word: "Arbeitsschutzvorschrift", article: "die", translation: "occupational safety regulation", category: "Arbeitssicherheit" },

  // Versicherungsmathematik
  { word: "Sterbetafel", article: "die", translation: "mortality table", category: "Versicherungsmathematik" },
  { word: "Risikomodellierung", article: "die", translation: "risk modeling", category: "Versicherungsmathematik" },
  { word: "Rückstellungsberechnung", article: "die", translation: "reserve calculation", category: "Versicherungsmathematik" },
  { word: "Schadenswahrscheinlichkeit", article: "die", translation: "probability of loss", category: "Versicherungsmathematik" },
  { word: "Prämiengestaltung", article: "die", translation: "premium structuring", category: "Versicherungsmathematik" },

  // Konfliktmediation
  { word: "Verhandlungsführungstechnik", article: "die", translation: "negotiation technique", category: "Konfliktmediation" },
  { word: "Konfliktlösungsschritt", article: "der", translation: "conflict resolution step", category: "Konfliktmediation" },
  { word: "Mediationsverfahren", article: "das", translation: "mediation procedure", category: "Konfliktmediation" },
  { word: "Deeskalationsstrategie", article: "die", translation: "de-escalation strategy", category: "Konfliktmediation" },

  // Teamentwicklung
  { word: "Teambuildingübung", article: "die", translation: "team building exercise", category: "Teamentwicklung" },
  { word: "Rollenklärung", article: "die", translation: "role clarification", category: "Teamentwicklung" },
  { word: "Gruppendynamikanalyse", article: "die", translation: "group dynamics analysis", category: "Teamentwicklung" },

  // Organisationsentwicklung
  { word: "Kulturwandelprozess", article: "der", translation: "culture change process", category: "Organisationsentwicklung" },
  { word: "Changemanagementprozess", article: "der", translation: "change management process", category: "Organisationsentwicklung" },
  { word: "Unternehmenskulturwandel", article: "der", translation: "corporate culture shift", category: "Organisationsentwicklung" },

  // Businesscoaching
  { word: "Coachingsitzung", article: "die", translation: "coaching session", category: "Businesscoaching" },
  { word: "Zielvereinbarungsgespräch", article: "das", translation: "goal-setting talk", category: "Businesscoaching" },
  { word: "Reflexionsfrage", article: "die", translation: "reflective question", category: "Businesscoaching" },

  // Orthopädietechnik
  { word: "Prothesenwartung", article: "die", translation: "prosthesis maintenance", category: "Orthopädietechnik" },
  { word: "Schaftformgebung", article: "die", translation: "socket shaping (prosthetics)", category: "Orthopädietechnik" },
  { word: "Gangschulung", article: "die", translation: "gait training", category: "Orthopädietechnik" },
  { word: "Orthesenkonstruktion", article: "die", translation: "orthosis construction", category: "Orthopädietechnik" },
  { word: "Prothesenanpassung", article: "die", translation: "prosthesis fitting", category: "Orthopädietechnik" },
  { word: "Orthesenversorgung", article: "die", translation: "orthosis fitting", category: "Orthopädietechnik" },
  { word: "Gangschule", article: "die", translation: "gait training", category: "Orthopädietechnik" },
  { word: "Maßanfertigung", article: "die", translation: "custom fitting", category: "Orthopädietechnik" },
  { word: "Prothesenbelastungstest", article: "der", translation: "prosthesis load test", category: "Orthopädietechnik" },

  // Hörakustik
  { word: "Hörgeräteanpassung", article: "die", translation: "hearing aid fitting", category: "Hörakustik" },
  { word: "Otoplastikabdruck", article: "der", translation: "earmold impression", category: "Hörakustik" },
  { word: "Verstärkungseinstellung", article: "die", translation: "amplification setting", category: "Hörakustik" },

  // Augenoptik (vertieft)
  { word: "Kontaktlinsenanpassung", article: "die", translation: "contact lens fitting", category: "Augenoptik (vertieft)" },
  { word: "Brillenglasschliff", article: "der", translation: "lens grinding", category: "Augenoptik (vertieft)" },
  { word: "Fassungsauswahl", article: "die", translation: "frame selection", category: "Augenoptik (vertieft)" },

  // Reha-Technik
  { word: "Rollstuhlanpassung", article: "die", translation: "wheelchair fitting", category: "Reha-Technik" },
  { word: "Sitzschalenbau", article: "der", translation: "seat shell construction", category: "Reha-Technik" },
  { word: "Sitzdruckmessung", article: "die", translation: "seat pressure measurement", category: "Reha-Technik" },

  // Schachsport
  { word: "Schachturniermodus", article: "der", translation: "chess tournament format", category: "Schachsport" },
  { word: "Zeitkontrollregel", article: "die", translation: "time control rule", category: "Schachsport" },
  { word: "Eröffnungsvariante", article: "die", translation: "opening variation", category: "Schachsport" },
  { word: "Turmendspiel", article: "das", translation: "rook endgame", category: "Schachsport" },

  // Pokersport
  { word: "Pokerblattbewertung", article: "die", translation: "poker hand evaluation", category: "Pokersport" },
  { word: "Einsatzrunde", article: "die", translation: "betting round", category: "Pokersport" },
  { word: "Bluffstrategie", article: "die", translation: "bluffing strategy", category: "Pokersport" },

  // Bridgesport
  { word: "Bridgekartenverteilung", article: "die", translation: "bridge card distribution", category: "Bridgesport" },
  { word: "Reizverlauf", article: "der", translation: "bidding sequence (bridge)", category: "Bridgesport" },
  { word: "Punktezählung", article: "die", translation: "point counting", category: "Bridgesport" },

  // Skatsport
  { word: "Skattischordnung", article: "die", translation: "skat table order", category: "Skatsport" },
  { word: "Trumpfkartenwertung", article: "die", translation: "trump card valuation", category: "Skatsport" },
  { word: "Reizwertberechnung", article: "die", translation: "bid value calculation", category: "Skatsport" },

  // Modelleisenbahnbau
  { word: "Modelleisenbahnsteuerung", article: "die", translation: "model railway control", category: "Modelleisenbahnbau" },
  { word: "Gleisanlagenplanung", article: "die", translation: "track layout planning", category: "Modelleisenbahnbau" },
  { word: "Landschaftsgestaltung", article: "die", translation: "landscape design (model)", category: "Modelleisenbahnbau" },

  // Diorambau
  { word: "Dioramabau", article: "der", translation: "diorama construction", category: "Diorambau" },
  { word: "Geländemodellierung", article: "die", translation: "terrain modeling", category: "Diorambau" },
  { word: "Miniaturfigurenbemalung", article: "die", translation: "miniature figure painting", category: "Diorambau" },

  // Tabletopspiel
  { word: "Tabletopspielfeld", article: "das", translation: "tabletop game field", category: "Tabletopspiel" },
  { word: "Regelwerkinterpretation", article: "die", translation: "rulebook interpretation", category: "Tabletopspiel" },
  { word: "Würfelwurfmodifikator", article: "der", translation: "dice roll modifier", category: "Tabletopspiel" },

  // Brettspielentwicklung
  { word: "Brettspielentwicklung", article: "die", translation: "board game development", category: "Brettspielentwicklung" },
  { word: "Spielmechanikbalance", article: "die", translation: "game mechanic balance", category: "Brettspielentwicklung" },
  { word: "Prototypentest", article: "der", translation: "prototype testing", category: "Brettspielentwicklung" },

  // Bauphysik
  { word: "Fassadendämmung", article: "die", translation: "facade insulation", category: "Bauphysik" },
  { word: "Wärmebrückenberechnung", article: "die", translation: "thermal bridge calculation", category: "Bauphysik" },
  { word: "Schallschutzmaßnahme", article: "die", translation: "soundproofing measure", category: "Bauphysik" },
  { word: "Feuchteschutznachweis", article: "der", translation: "moisture protection proof", category: "Bauphysik" },

  // Immobilienbewertung
  { word: "Bodenrichtwertkarte", article: "die", translation: "land value map", category: "Immobilienbewertung" },
  { word: "Ertragswertverfahren", article: "das", translation: "income capitalization method", category: "Immobilienbewertung" },
  { word: "Vergleichswertermittlung", article: "die", translation: "comparative value assessment", category: "Immobilienbewertung" },

  // Grundbuchwesen
  { word: "Grundbucheintragung", article: "die", translation: "land registry entry", category: "Grundbuchwesen" },
  { word: "Belastungsvermerk", article: "der", translation: "encumbrance note", category: "Grundbuchwesen" },
  { word: "Auflassungsvormerkung", article: "die", translation: "priority notice of conveyance", category: "Grundbuchwesen" },

  // Baugenehmigungswesen
  { word: "Bauantragsverfahren", article: "das", translation: "building permit procedure", category: "Baugenehmigungswesen" },
  { word: "Bebauungsplanauflage", article: "die", translation: "zoning plan condition", category: "Baugenehmigungswesen" },
  { word: "Nutzungsänderungsantrag", article: "der", translation: "change-of-use application", category: "Baugenehmigungswesen" },

  // Denkmalpflege
  { word: "Denkmallistung", article: "die", translation: "heritage listing", category: "Denkmalpflege" },
  { word: "Restaurierungsplan", article: "der", translation: "restoration plan", category: "Denkmalpflege" },
  { word: "Bausubstanzuntersuchung", article: "die", translation: "building fabric inspection", category: "Denkmalpflege" },
  { word: "Fassadenrekonstruktion", article: "die", translation: "facade reconstruction", category: "Denkmalpflege" },

  // Kunstrestaurierung
  { word: "Gemäldereinigung", article: "die", translation: "painting cleaning", category: "Kunstrestaurierung" },
  { word: "Firnisabnahme", article: "die", translation: "varnish removal", category: "Kunstrestaurierung" },
  { word: "Retuschiertechnik", article: "die", translation: "retouching technique", category: "Kunstrestaurierung" },
  { word: "Leinwandspannung", article: "die", translation: "canvas tensioning", category: "Kunstrestaurierung" },

  // Buchrestaurierung
  { word: "Buchrestaurierungswerkstatt", article: "die", translation: "book restoration workshop", category: "Buchrestaurierung" },
  { word: "Einbandreparatur", article: "die", translation: "binding repair", category: "Buchrestaurierung" },
  { word: "Papierentsäuerung", article: "die", translation: "paper deacidification", category: "Buchrestaurierung" },

  // Möbelrestaurierung
  { word: "Möbelrestaurierungstechnik", article: "die", translation: "furniture restoration technique", category: "Möbelrestaurierung" },
  { word: "Furnierablösung", article: "die", translation: "veneer detachment", category: "Möbelrestaurierung" },
  { word: "Politurauftrag", article: "der", translation: "polish application", category: "Möbelrestaurierung" },

  // Raumfahrttechnik (vertieft)
  { word: "Weltraumschrottverfolgung", article: "die", translation: "space debris tracking", category: "Raumfahrttechnik (vertieft)" },
  { word: "Hitzeschildbelastung", article: "die", translation: "heat shield stress", category: "Raumfahrttechnik (vertieft)" },
  { word: "Nutzlastverkleidung", article: "die", translation: "payload fairing", category: "Raumfahrttechnik (vertieft)" },
  { word: "Umlaufbahnkorrektur", article: "die", translation: "orbit correction", category: "Raumfahrttechnik (vertieft)" },
  { word: "Raketenantrieb", article: "der", translation: "rocket propulsion", category: "Raumfahrttechnik (vertieft)" },
  { word: "Schubkrafteinheit", article: "die", translation: "thrust unit", category: "Raumfahrttechnik (vertieft)" },
  { word: "Umlaufgeschwindigkeit", article: "die", translation: "orbital velocity", category: "Raumfahrttechnik (vertieft)" },
  { word: "Flugbahnkorrektur", article: "die", translation: "trajectory correction", category: "Raumfahrttechnik (vertieft)" },
  { word: "Landemanöver", article: "das", translation: "landing maneuver", category: "Raumfahrttechnik (vertieft)" },
  { word: "Satellitenbahn", article: "die", translation: "satellite orbit", category: "Raumfahrttechnik (vertieft)" },
  { word: "Wiedereintrittsphase", article: "die", translation: "re-entry phase", category: "Raumfahrttechnik (vertieft)" },

  // Satellitentechnik
  { word: "Satellitenempfangsanlage", article: "die", translation: "satellite receiving system", category: "Satellitentechnik" },
  { word: "Übertragungsverzögerung", article: "die", translation: "transmission delay", category: "Satellitentechnik" },
  { word: "Bodenstationsantenne", article: "die", translation: "ground station antenna", category: "Satellitentechnik" },

  // Planetenerkundung
  { word: "Fahrzeugsteuerung", article: "die", translation: "rover vehicle control", category: "Planetenerkundung" },
  { word: "Bohrkernentnahme", article: "die", translation: "core sample extraction", category: "Planetenerkundung" },
  { word: "Atmosphärenanalyse", article: "die", translation: "atmosphere analysis", category: "Planetenerkundung" },

  // Astronomie (vertieft)
  { word: "Sternwartenteleskop", article: "das", translation: "observatory telescope", category: "Astronomie (vertieft)" },
  { word: "Lichtjahrmessung", article: "die", translation: "light-year measurement", category: "Astronomie (vertieft)" },
  { word: "Sternbildkatalog", article: "der", translation: "constellation catalog", category: "Astronomie (vertieft)" },

  // Wachsverarbeitung
  { word: "Wachsblockschmelzung", article: "die", translation: "wax block melting", category: "Wachsverarbeitung" },
  { word: "Wachstuchherstellung", article: "die", translation: "wax cloth production", category: "Wachsverarbeitung" },
  { word: "Wachsziehtechnik", article: "die", translation: "wax pulling technique", category: "Wachsverarbeitung" },

  // Kompostierungstechnik
  { word: "Kompostierungsprozess", article: "der", translation: "composting process", category: "Kompostierungstechnik" },
  { word: "Rotteverlauf", article: "der", translation: "decomposition progress", category: "Kompostierungstechnik" },
  { word: "Wurmkompostbehälter", article: "der", translation: "worm compost bin", category: "Kompostierungstechnik" },

  // Regenwassernutzung
  { word: "Regenwassernutzungsanlage", article: "die", translation: "rainwater harvesting system", category: "Regenwassernutzung" },
  { word: "Zisternenkapazität", article: "die", translation: "cistern capacity", category: "Regenwassernutzung" },
  { word: "Filtrationsstufe", article: "die", translation: "filtration stage", category: "Regenwassernutzung" },

  // Permakultur
  { word: "Permakulturbeet", article: "das", translation: "permaculture bed", category: "Permakultur" },
  { word: "Mischkulturplanung", article: "die", translation: "companion planting design", category: "Permakultur" },
  { word: "Bodenaufbauschicht", article: "die", translation: "soil building layer", category: "Permakultur" },

  // Baumpflegehandwerk
  { word: "Baumkletterausrüstung", article: "die", translation: "tree climbing equipment", category: "Baumpflegehandwerk" },
  { word: "Kroneneinkürzung", article: "die", translation: "crown reduction", category: "Baumpflegehandwerk" },
  { word: "Totholzentfernung", article: "die", translation: "deadwood removal", category: "Baumpflegehandwerk" },
  { word: "Baumstatikbewertung", article: "die", translation: "tree stability assessment", category: "Baumpflegehandwerk" },

  // Gartenlandschaftsbau
  { word: "Rasenmähroboterprogrammierung", article: "die", translation: "robotic mower programming", category: "Gartenlandschaftsbau" },
  { word: "Terrassenverlegung", article: "die", translation: "patio laying", category: "Gartenlandschaftsbau" },
  { word: "Pflasterarbeitsplan", article: "der", translation: "paving work plan", category: "Gartenlandschaftsbau" },

  // Heckenpflege
  { word: "Heckenschnitttermin", article: "der", translation: "hedge trimming date", category: "Heckenpflege" },
  { word: "Formschnitttechnik", article: "die", translation: "topiary technique", category: "Heckenpflege" },
  { word: "Wachstumsrichtungslenkung", article: "die", translation: "growth direction guidance", category: "Heckenpflege" },

  // Gartenteichbau
  { word: "Teichfolienabdichtung", article: "die", translation: "pond liner sealing", category: "Gartenteichbau" },
  { word: "Pumpenkreislaufplanung", article: "die", translation: "pump circuit planning", category: "Gartenteichbau" },
  { word: "Algenbekämpfungsmittel", article: "das", translation: "algae control agent", category: "Gartenteichbau" },

  // Fördertechnik
  { word: "Fördertechnikwartung", article: "die", translation: "conveyor system maintenance", category: "Fördertechnik" },
  { word: "Palettierroboterprogrammierung", article: "die", translation: "palletizing robot programming", category: "Fördertechnik" },
  { word: "Sortieranlagensteuerung", article: "die", translation: "sorting system control", category: "Fördertechnik" },

  // Hydrauliktechnik
  { word: "Hydraulikzylinderdichtung", article: "die", translation: "hydraulic cylinder seal", category: "Hydrauliktechnik" },
  { word: "Druckspeichervolumen", article: "das", translation: "accumulator volume", category: "Hydrauliktechnik" },
  { word: "Ölviskositätsklasse", article: "die", translation: "oil viscosity grade", category: "Hydrauliktechnik" },
  { word: "Pumpenleistung", article: "die", translation: "pump performance", category: "Hydrauliktechnik" },
  { word: "Hydraulikflüssigkeit", article: "die", translation: "hydraulic fluid", category: "Hydrauliktechnik" },
  { word: "Druckventil", article: "das", translation: "pressure valve", category: "Hydrauliktechnik" },
  { word: "Zylinderhub", article: "der", translation: "cylinder stroke", category: "Hydrauliktechnik" },
  { word: "Leckageverlust", article: "der", translation: "leakage loss", category: "Hydrauliktechnik" },

  // Pneumatiktechnik
  { word: "Druckluftkompressorwartung", article: "die", translation: "air compressor maintenance", category: "Pneumatiktechnik" },
  { word: "Ventilschaltzeit", article: "die", translation: "valve switching time", category: "Pneumatiktechnik" },
  { word: "Luftfilterelement", article: "das", translation: "air filter element", category: "Pneumatiktechnik" },
  { word: "Druckluftversorgung", article: "die", translation: "compressed air supply", category: "Pneumatiktechnik" },
  { word: "Kompressorleistung", article: "die", translation: "compressor performance", category: "Pneumatiktechnik" },
  { word: "Ventilsteuerung", article: "die", translation: "valve control", category: "Pneumatiktechnik" },
  { word: "Luftfeuchtigkeitsabscheidung", article: "die", translation: "air moisture separation", category: "Pneumatiktechnik" },

  // Robotertechnik (vertieft)
  { word: "Robotergreiferwechsel", article: "der", translation: "robot gripper change", category: "Robotertechnik (vertieft)" },
  { word: "Bahnplanungsalgorithmus", article: "der", translation: "path planning algorithm", category: "Robotertechnik (vertieft)" },
  { word: "Kollisionsvermeidung", article: "die", translation: "collision avoidance", category: "Robotertechnik (vertieft)" },

  // Gastronomie (vertieft)
  { word: "Geschmacksharmonie", article: "die", translation: "harmony of flavors", category: "Gastronomie (vertieft)" },
  { word: "Speisenfolge", article: "die", translation: "course sequence", category: "Gastronomie (vertieft)" },
  { word: "Röstgrad", article: "der", translation: "roast level", category: "Gastronomie (vertieft)" },
  { word: "Aromenvielfalt", article: "die", translation: "variety of aromas", category: "Gastronomie (vertieft)" },
  { word: "Zubereitungsart", article: "die", translation: "method of preparation", category: "Gastronomie (vertieft)" },
  { word: "Küchenhierarchie", article: "die", translation: "kitchen hierarchy", category: "Gastronomie (vertieft)" },
  { word: "Menüzusammenstellung", article: "die", translation: "menu composition", category: "Gastronomie (vertieft)" },
  { word: "Weinbegleitung", article: "die", translation: "wine pairing", category: "Gastronomie (vertieft)" },

  // Textilindustrie
  { word: "Stoffveredelung", article: "die", translation: "fabric finishing", category: "Textilindustrie" },
  { word: "Stoffbahn", article: "die", translation: "fabric width/length", category: "Textilindustrie" },
  { word: "Textilverarbeitung", article: "die", translation: "textile processing", category: "Textilindustrie" },
  { word: "Modekollektion", article: "die", translation: "fashion collection", category: "Textilindustrie" },
  { word: "Färbeverfahren", article: "das", translation: "dyeing process", category: "Textilindustrie" },
  { word: "Gewebeart", article: "die", translation: "type of weave", category: "Textilindustrie" },
  { word: "Konfektionsgröße", article: "die", translation: "clothing size", category: "Textilindustrie" },

  // Innenarchitektur
  { word: "Raumkonzept", article: "das", translation: "spatial concept", category: "Innenarchitektur" },
  { word: "Möblierungsplan", article: "der", translation: "furnishing plan", category: "Innenarchitektur" },
  { word: "Materialauswahl", article: "die", translation: "material selection", category: "Innenarchitektur" },
  { word: "Wohnraumaufteilung", article: "die", translation: "living space layout", category: "Innenarchitektur" },
  { word: "Beleuchtungskonzept", article: "das", translation: "lighting concept", category: "Innenarchitektur" },
  { word: "Farbharmonie", article: "die", translation: "color harmony", category: "Innenarchitektur" },

  // Produktmanagement
  { word: "Produktdifferenzierung", article: "die", translation: "product differentiation", category: "Produktmanagement" },
  { word: "Markteinführung", article: "die", translation: "market launch", category: "Produktmanagement" },
  { word: "Produktpositionierung", article: "die", translation: "product positioning", category: "Produktmanagement" },
  { word: "Funktionsumfang", article: "der", translation: "feature set", category: "Produktmanagement" },
  { word: "Nutzerfeedback", article: "das", translation: "user feedback", category: "Produktmanagement" },
  { word: "Produktroadmap", article: "die", translation: "product roadmap", category: "Produktmanagement" },

  // Markenmanagement
  { word: "Markenidentität", article: "die", translation: "brand identity", category: "Markenmanagement" },
  { word: "Markenkern", article: "der", translation: "brand core", category: "Markenmanagement" },
  { word: "Markenversprechen", article: "das", translation: "brand promise", category: "Markenmanagement" },
  { word: "Markenimage", article: "das", translation: "brand image", category: "Markenmanagement" },
  { word: "Markenbekanntheit", article: "die", translation: "brand awareness", category: "Markenmanagement" },
  { word: "Markenwert", article: "der", translation: "brand value", category: "Markenmanagement" },

  // Gewürzhandwerk
  { word: "Gewürzmischungskomposition", article: "die", translation: "spice blend composition", category: "Gewürzhandwerk" },
  { word: "Mahlgradfeinheit", article: "die", translation: "grinding fineness", category: "Gewürzhandwerk" },
  { word: "Röstaromenentwicklung", article: "die", translation: "roasted aroma development", category: "Gewürzhandwerk" },

  // Senfherstellung
  { word: "Senfkornmahlung", article: "die", translation: "mustard seed grinding", category: "Senfherstellung" },
  { word: "Würzrezeptur", article: "die", translation: "seasoning recipe", category: "Senfherstellung" },
  { word: "Schärfegradbestimmung", article: "die", translation: "heat level determination", category: "Senfherstellung" },

  // Konservierungshandwerk
  { word: "Sauerkrautgärung", article: "die", translation: "sauerkraut fermentation", category: "Konservierungshandwerk" },
  { word: "Einweckglasverschluss", article: "der", translation: "canning jar seal", category: "Konservierungshandwerk" },
  { word: "Salzlakenrezeptur", article: "die", translation: "brine recipe", category: "Konservierungshandwerk" },

  // Konfitürenherstellung
  { word: "Marmeladeneinkochung", article: "die", translation: "jam boiling down", category: "Konfitürenherstellung" },
  { word: "Geliermittelzugabe", article: "die", translation: "pectin addition", category: "Konfitürenherstellung" },
  { word: "Fruchtstückgröße", article: "die", translation: "fruit piece size", category: "Konfitürenherstellung" },

  // Skisprungsport
  { word: "Skisprungschanzenprofil", article: "das", translation: "ski jump hill profile", category: "Skisprungsport" },
  { word: "Anlaufgeschwindigkeit", article: "die", translation: "approach speed (ski jump)", category: "Skisprungsport" },
  { word: "Flugstilbewertung", article: "die", translation: "flight style scoring", category: "Skisprungsport" },

  // Biathlonsport
  { word: "Biathlonschießstand", article: "der", translation: "biathlon shooting range", category: "Biathlonsport" },
  { word: "Strafrunde", article: "die", translation: "penalty loop", category: "Biathlonsport" },
  { word: "Gewehrriemeneinstellung", article: "die", translation: "rifle sling adjustment", category: "Biathlonsport" },

  // Langlaufsport
  { word: "Langlaufskiwachsung", article: "die", translation: "cross-country ski waxing", category: "Langlaufsport" },
  { word: "Klassikstiltechnik", article: "die", translation: "classic style technique", category: "Langlaufsport" },
  { word: "Skatingschritt", article: "der", translation: "skating step", category: "Langlaufsport" },

  // Freestyleskisport
  { word: "Freestyleskisprungvariation", article: "die", translation: "freestyle ski jump variation", category: "Freestyleskisport" },
  { word: "Buckelpistenfahrt", article: "die", translation: "mogul run", category: "Freestyleskisport" },
  { word: "Grabmanöver", article: "das", translation: "grab maneuver (freestyle)", category: "Freestyleskisport" },

  // Wasserballsport
  { word: "Wasserballtorwurf", article: "der", translation: "water polo goal shot", category: "Wasserballsport" },
  { word: "Beintretentechnik", article: "die", translation: "eggbeater kick technique", category: "Wasserballsport" },
  { word: "Freiwurflinie", article: "die", translation: "free throw line (water polo)", category: "Wasserballsport" },

  // Synchronschwimmen
  { word: "Synchronschwimmfigur", article: "die", translation: "synchronized swimming figure", category: "Synchronschwimmen" },
  { word: "Musikchoreografie", article: "die", translation: "music choreography", category: "Synchronschwimmen" },
  { word: "Nasenklammerbefestigung", article: "die", translation: "nose clip attachment", category: "Synchronschwimmen" },

  // Wasserspringen
  { word: "Kunstspringerabsprung", article: "der", translation: "diver's takeoff", category: "Wasserspringen" },
  { word: "Rotationsanzahl", article: "die", translation: "number of rotations", category: "Wasserspringen" },
  { word: "Eintauchwinkel", article: "der", translation: "entry angle (diving)", category: "Wasserspringen" },

  // Freiwasserschwimmen
  { word: "Freiwasserstreckenmarkierung", article: "die", translation: "open water course marking", category: "Freiwasserschwimmen" },
  { word: "Strömungsausnutzung", article: "die", translation: "current utilization", category: "Freiwasserschwimmen" },
  { word: "Neoprenanzugpflicht", article: "die", translation: "wetsuit requirement", category: "Freiwasserschwimmen" },

  // Wellnessbehandlung
  { word: "Kryotherapiekammer", article: "die", translation: "cryotherapy chamber", category: "Wellnessbehandlung" },
  { word: "Aromaölmischung", article: "die", translation: "aroma oil blend", category: "Wellnessbehandlung" },
  { word: "Wärmekammertemperatur", article: "die", translation: "heat chamber temperature", category: "Wellnessbehandlung" },
  { word: "Massagestrichrichtung", article: "die", translation: "massage stroke direction", category: "Wellnessbehandlung" },

  // Alternativmedizin
  { word: "Schröpfkopfansatz", article: "der", translation: "cupping application", category: "Alternativmedizin" },
  { word: "Akupunkturnadeltiefe", article: "die", translation: "acupuncture needle depth", category: "Alternativmedizin" },
  { word: "Homöopathiepotenzierung", article: "die", translation: "homeopathic potentization", category: "Alternativmedizin" },

  // Ayurvedapraxis
  { word: "Ayurvedaölbehandlung", article: "die", translation: "ayurvedic oil treatment", category: "Ayurvedapraxis" },
  { word: "Doshabestimmung", article: "die", translation: "dosha determination", category: "Ayurvedapraxis" },
  { word: "Kräuterpastenauftrag", article: "der", translation: "herbal paste application", category: "Ayurvedapraxis" },

  // Reflexzonentherapie
  { word: "Reflexzonenmassagepunkt", article: "der", translation: "reflexology point", category: "Reflexzonentherapie" },
  { word: "Fußsohlenkarte", article: "die", translation: "sole map (reflexology)", category: "Reflexzonentherapie" },
  { word: "Druckintensitätsregulierung", article: "die", translation: "pressure intensity regulation", category: "Reflexzonentherapie" },

  // Tätowierhandwerk
  { word: "Tätowierpigmentwahl", article: "die", translation: "tattoo pigment choice", category: "Tätowierhandwerk" },
  { word: "Nadelmaschinenwartung", article: "die", translation: "needle machine maintenance", category: "Tätowierhandwerk" },
  { word: "Schablonenübertragung", article: "die", translation: "stencil transfer", category: "Tätowierhandwerk" },
  { word: "Nachpflegeanweisung", article: "die", translation: "aftercare instruction", category: "Tätowierhandwerk" },

  // Piercinghandwerk
  { word: "Piercingschmuckwahl", article: "die", translation: "piercing jewelry choice", category: "Piercinghandwerk" },
  { word: "Einstichwinkel", article: "der", translation: "piercing insertion angle", category: "Piercinghandwerk" },
  { word: "Abheilungszeit", article: "die", translation: "healing time", category: "Piercinghandwerk" },

  // Kosmetikstudio
  { word: "Konturierungstechnik", article: "die", translation: "contouring technique", category: "Kosmetikstudio" },
  { word: "Wimpernverlängerung", article: "die", translation: "eyelash extension", category: "Kosmetikstudio" },
  { word: "Hautanalysegerät", article: "das", translation: "skin analysis device", category: "Kosmetikstudio" },

  // Nageldesign
  { word: "Nagelmodellagegel", article: "das", translation: "nail modeling gel", category: "Nageldesign" },
  { word: "Feilenkörnung", article: "die", translation: "file grit (nail)", category: "Nageldesign" },
  { word: "Nagelhautbehandlung", article: "die", translation: "cuticle treatment", category: "Nageldesign" },

  // Zollverwaltung
  { word: "Zollagerverwaltung", article: "die", translation: "customs warehouse management", category: "Zollverwaltung" },
  { word: "Einfuhrabgabenbescheid", article: "der", translation: "import duty notice", category: "Zollverwaltung" },
  { word: "Präferenznachweis", article: "der", translation: "preference certificate", category: "Zollverwaltung" },
  { word: "Warenursprungserklärung", article: "die", translation: "certificate of origin declaration", category: "Zollverwaltung" },

  // Außenhandelsfinanzierung
  { word: "Akkreditivabwicklung", article: "die", translation: "letter of credit processing", category: "Außenhandelsfinanzierung" },
  { word: "Exportkreditversicherung", article: "die", translation: "export credit insurance", category: "Außenhandelsfinanzierung" },
  { word: "Zahlungsbedingungsklausel", article: "die", translation: "payment terms clause", category: "Außenhandelsfinanzierung" },

  // Speditionswesen
  { word: "Speditionsauftragserfassung", article: "die", translation: "freight order entry", category: "Speditionswesen" },
  { word: "Frachtraumbuchung", article: "die", translation: "cargo space booking", category: "Speditionswesen" },
  { word: "Sammelgutversand", article: "der", translation: "consolidated freight shipping", category: "Speditionswesen" },
  { word: "Frachtabfertigung", article: "die", translation: "cargo processing", category: "Speditionswesen" },
  { word: "Transportauftrag", article: "der", translation: "transport order", category: "Speditionswesen" },
  { word: "Lieferschein", article: "der", translation: "delivery note", category: "Speditionswesen" },
  { word: "Lagerlogistik", article: "die", translation: "warehouse logistics", category: "Speditionswesen" },
  { word: "Routenoptimierung", article: "die", translation: "route optimization", category: "Speditionswesen" },
  { word: "Zustellzeitfenster", article: "das", translation: "delivery time window", category: "Speditionswesen" },

  // Lagerlogistik
  { word: "Kommissionierscanner", article: "der", translation: "picking scanner", category: "Lagerlogistik" },
  { word: "Kommissionierungsweg", article: "der", translation: "picking route", category: "Lagerlogistik" },
  { word: "Regalbediengerät", article: "das", translation: "stacker crane", category: "Lagerlogistik" },

  // Notariatswesen
  { word: "Notariatsurkundenerstellung", article: "die", translation: "notarial deed drafting", category: "Notariatswesen" },
  { word: "Beglaubigungsvermerk", article: "der", translation: "certification note", category: "Notariatswesen" },
  { word: "Testamentsverwahrung", article: "die", translation: "will custody", category: "Notariatswesen" },
  { word: "Notarurkunde", article: "die", translation: "notarial deed", category: "Notariatswesen" },
  { word: "Beurkundungspflicht", article: "die", translation: "notarization requirement", category: "Notariatswesen" },
  { word: "Vollmachtserteilung", article: "die", translation: "granting of power of attorney", category: "Notariatswesen" },
  { word: "Unterschriftsbeglaubigung", article: "die", translation: "signature certification", category: "Notariatswesen" },
  { word: "Vertragsbeurkundung", article: "die", translation: "contract notarization", category: "Notariatswesen" },

  // Erbrechtspraxis
  { word: "Erbauseinandersetzungsvertrag", article: "der", translation: "estate division agreement", category: "Erbrechtspraxis" },
  { word: "Pflichtteilsergänzungsanspruch", article: "der", translation: "compulsory portion supplement claim", category: "Erbrechtspraxis" },
  { word: "Nachlassverzeichnis", article: "das", translation: "estate inventory", category: "Erbrechtspraxis" },

  // Markenrecht
  { word: "Markenanmeldeverfahren", article: "das", translation: "trademark registration procedure", category: "Markenrecht" },
  { word: "Widerspruchsfrist", article: "die", translation: "opposition period", category: "Markenrecht" },
  { word: "Markenlöschungsverfahren", article: "das", translation: "trademark cancellation procedure", category: "Markenrecht" },
  { word: "Markenanmeldung", article: "die", translation: "trademark application", category: "Markenrecht" },
  { word: "Verwechslungsgefahr", article: "die", translation: "likelihood of confusion", category: "Markenrecht" },
  { word: "Markeneintragung", article: "die", translation: "trademark registration", category: "Markenrecht" },
  { word: "Kennzeichnungskraft", article: "die", translation: "distinctiveness (trademark)", category: "Markenrecht" },
  { word: "Markenlöschung", article: "die", translation: "trademark cancellation", category: "Markenrecht" },

  // Vereinswesen
  { word: "Imkervereinsversammlung", article: "die", translation: "beekeeping club meeting", category: "Vereinswesen" },
  { word: "Satzungsänderungsantrag", article: "der", translation: "bylaw amendment motion", category: "Vereinswesen" },
  { word: "Kassenprüferbericht", article: "der", translation: "auditor's report (club)", category: "Vereinswesen" },
  { word: "Mitgliederversammlungsprotokoll", article: "das", translation: "members' meeting minutes", category: "Vereinswesen" },

  // Feuerwerkstechnik
  { word: "Feuerwerkskörperzündung", article: "die", translation: "firework ignition", category: "Feuerwerkstechnik" },
  { word: "Effektbatterie", article: "die", translation: "effect battery (fireworks)", category: "Feuerwerkstechnik" },
  { word: "Sicherheitsabstandsberechnung", article: "die", translation: "safety distance calculation", category: "Feuerwerkstechnik" },

  // Schaustellergewerbe
  { word: "Kirmesfahrgeschäftaufbau", article: "der", translation: "fairground ride assembly", category: "Schaustellergewerbe" },
  { word: "Standplatzvergabe", article: "die", translation: "stall allocation", category: "Schaustellergewerbe" },
  { word: "Zuckerwattemaschine", article: "die", translation: "cotton candy machine", category: "Schaustellergewerbe" },

  // Freizeitparkbetrieb
  { word: "Vergnügungsparkfahrsicherheit", article: "die", translation: "amusement park ride safety", category: "Freizeitparkbetrieb" },
  { word: "Warteschlangenmanagement", article: "das", translation: "queue management", category: "Freizeitparkbetrieb" },
  { word: "Achterbahnstreckenprüfung", article: "die", translation: "roller coaster track inspection", category: "Freizeitparkbetrieb" },

  // Kegelsport
  { word: "Kegelbahnpflege", article: "die", translation: "bowling lane maintenance", category: "Kegelsport" },
  { word: "Kegelaufstellautomat", article: "der", translation: "pin setting machine", category: "Kegelsport" },
  { word: "Vollholzkegel", article: "der", translation: "wooden pin", category: "Kegelsport" },

  // Dartsport
  { word: "Dartscheibenaufhängung", article: "die", translation: "dartboard mounting", category: "Dartsport" },
  { word: "Wurflinienabstand", article: "der", translation: "throw line distance", category: "Dartsport" },
  { word: "Doppelfeldtreffer", article: "der", translation: "double field hit", category: "Dartsport" },

  // Billardsport
  { word: "Billardqueuespitze", article: "die", translation: "cue tip (billiards)", category: "Billardsport" },
  { word: "Stoßwinkelberechnung", article: "die", translation: "shot angle calculation", category: "Billardsport" },
  { word: "Bandenreflexion", article: "die", translation: "cushion reflection", category: "Billardsport" },

  // Tischtennissport
  { word: "Tischtennisschlägerbelag", article: "der", translation: "table tennis rubber", category: "Tischtennissport" },
  { word: "Rückhandtechnik", article: "die", translation: "backhand technique", category: "Tischtennissport" },
  { word: "Aufschlagvariation", article: "die", translation: "serve variation", category: "Tischtennissport" },

  // Rechenzentrumsbetrieb
  { word: "Serverclusterauslastung", article: "die", translation: "server cluster load", category: "Rechenzentrumsbetrieb" },
  { word: "Kühlleistungsbedarf", article: "der", translation: "cooling capacity demand", category: "Rechenzentrumsbetrieb" },
  { word: "Notstromaggregat", article: "das", translation: "backup generator", category: "Rechenzentrumsbetrieb" },
  { word: "Redundanzkonzept", article: "das", translation: "redundancy concept", category: "Rechenzentrumsbetrieb" },

  // Netzwerksicherheit
  { word: "Netzwerkpaketanalyse", article: "die", translation: "network packet analysis", category: "Netzwerksicherheit" },
  { word: "Eindringlingserkennung", article: "die", translation: "intrusion detection", category: "Netzwerksicherheit" },
  { word: "Verschlüsselungsprotokoll", article: "das", translation: "encryption protocol", category: "Netzwerksicherheit" },

  // Datenbankadministration
  { word: "Datenbankreplikation", article: "die", translation: "database replication", category: "Datenbankadministration" },
  { word: "Indexoptimierung", article: "die", translation: "index optimization", category: "Datenbankadministration" },
  { word: "Sicherungsintervall", article: "das", translation: "backup interval", category: "Datenbankadministration" },

  // Cloudinfrastruktur
  { word: "Containerorchestrierung", article: "die", translation: "container orchestration", category: "Cloudinfrastruktur" },
  { word: "Skalierungsrichtlinie", article: "die", translation: "scaling policy", category: "Cloudinfrastruktur" },
  { word: "Lastverteilungsalgorithmus", article: "der", translation: "load balancing algorithm", category: "Cloudinfrastruktur" },

  // Marktforschung
  { word: "Marktforschungsinstitut", article: "das", translation: "market research institute", category: "Marktforschung" },
  { word: "Stichprobenerhebung", article: "die", translation: "sample survey", category: "Marktforschung" },
  { word: "Panelbefragung", article: "die", translation: "panel survey", category: "Marktforschung" },
  { word: "Kaufentscheidungsprozess", article: "der", translation: "purchase decision process", category: "Marktforschung" },
  { word: "Zielgruppendefinition", article: "die", translation: "target group definition", category: "Marktforschung" },
  { word: "Umfrageergebnis", article: "das", translation: "survey result", category: "Marktforschung" },
  { word: "Datenerhebungsmethode", article: "die", translation: "data collection method", category: "Marktforschung" },

  // Verhandlungspsychologie
  { word: "Angebotsspanne", article: "die", translation: "offer range", category: "Verhandlungspsychologie" },
  { word: "Kompromissformel", article: "die", translation: "compromise formula", category: "Verhandlungspsychologie" },
  { word: "Schlichtungsangebot", article: "das", translation: "mediation offer", category: "Verhandlungspsychologie" },
  { word: "Zugeständnisbereitschaft", article: "die", translation: "willingness to make concessions", category: "Verhandlungspsychologie" },
  { word: "Einigungsdruck", article: "der", translation: "pressure to reach agreement", category: "Verhandlungspsychologie" },
  { word: "Preisnachlass", article: "der", translation: "price discount", category: "Verhandlungspsychologie" },

  // Führungskompetenz
  { word: "Führungsspanne", article: "die", translation: "span of control", category: "Führungskompetenz" },
  { word: "Weisungsbefugnis", article: "die", translation: "authority to instruct", category: "Führungskompetenz" },
  { word: "Zielvereinbarung", article: "die", translation: "agreed objective", category: "Führungskompetenz" },
  { word: "Teamdynamik", article: "die", translation: "team dynamics", category: "Führungskompetenz" },
  { word: "Entscheidungsfreudigkeit", article: "die", translation: "decisiveness", category: "Führungskompetenz" },
  { word: "Personalverantwortung", article: "die", translation: "staff responsibility", category: "Führungskompetenz" },
  { word: "Verantwortungsübertragung", article: "die", translation: "delegation of responsibility", category: "Führungskompetenz" },

  // Unternehmenskultur
  { word: "Betriebsklimaverbesserung", article: "die", translation: "improvement of workplace atmosphere", category: "Unternehmenskultur" },
  { word: "Betriebsvereinbarung", article: "die", translation: "company agreement", category: "Unternehmenskultur" },
  { word: "Unternehmensidentität", article: "die", translation: "corporate identity", category: "Unternehmenskultur" },
  { word: "Mitarbeitermotivation", article: "die", translation: "employee motivation", category: "Unternehmenskultur" },
  { word: "Anerkennungskultur", article: "die", translation: "culture of recognition", category: "Unternehmenskultur" },
  { word: "Loyalitätsbindung", article: "die", translation: "loyalty bond", category: "Unternehmenskultur" },

  // Karriereplanung
  { word: "Karriereverlauf", article: "der", translation: "career path", category: "Karriereplanung" },
  { word: "Laufbahnentwicklung", article: "die", translation: "career development", category: "Karriereplanung" },
  { word: "Zertifikatslehrgang", article: "der", translation: "certificate course", category: "Karriereplanung" },
  { word: "Kompetenzprofil", article: "das", translation: "competency profile", category: "Karriereplanung" },
  { word: "Weiterbildungsangebot", article: "das", translation: "further training offer", category: "Karriereplanung" },
  { word: "Stellenprofil", article: "das", translation: "job profile", category: "Karriereplanung" },

  // Arbeitspsychologie
  { word: "Arbeitsüberlastung", article: "die", translation: "work overload", category: "Arbeitspsychologie" },
  { word: "Zeitdruck", article: "der", translation: "time pressure", category: "Arbeitspsychologie" },
  { word: "Pausenregelung", article: "die", translation: "break policy", category: "Arbeitspsychologie" },
  { word: "Regenerationsbedarf", article: "der", translation: "need for recovery", category: "Arbeitspsychologie" },
  { word: "Rollenkonflikt", article: "der", translation: "role conflict", category: "Arbeitspsychologie" },
  { word: "Selbstwirksamkeit", article: "die", translation: "self-efficacy", category: "Arbeitspsychologie" },

  // Konversationsdesign
  { word: "Chatbotdialoggestaltung", article: "die", translation: "chatbot dialog design", category: "Konversationsdesign" },
  { word: "Sprachassistentenbefehl", article: "der", translation: "voice assistant command", category: "Konversationsdesign" },
  { word: "Nutzerintentionserkennung", article: "die", translation: "user intent recognition", category: "Konversationsdesign" },

  // Maschinelles Lernen (vertieft)
  { word: "Trainingsdatensatzaufbereitung", article: "die", translation: "training dataset preparation", category: "Maschinelles Lernen (vertieft)" },
  { word: "Modellüberanpassung", article: "die", translation: "model overfitting", category: "Maschinelles Lernen (vertieft)" },
  { word: "Hyperparameteroptimierung", article: "die", translation: "hyperparameter optimization", category: "Maschinelles Lernen (vertieft)" },

  // Computervision
  { word: "Bildklassifizierungsalgorithmus", article: "der", translation: "image classification algorithm", category: "Computervision" },
  { word: "Objekterkennungsrate", article: "die", translation: "object detection rate", category: "Computervision" },
  { word: "Kantenerkennungsfilter", article: "der", translation: "edge detection filter", category: "Computervision" },

  // Spracherkennungstechnik
  { word: "Spracherkennungsmodul", article: "das", translation: "speech recognition module", category: "Spracherkennungstechnik" },
  { word: "Akzentanpassung", article: "die", translation: "accent adaptation", category: "Spracherkennungstechnik" },
  { word: "Hintergrundgeräuschfilterung", article: "die", translation: "background noise filtering", category: "Spracherkennungstechnik" },

  // Genomforschung
  { word: "Genomsequenzierung", article: "die", translation: "genome sequencing", category: "Genomforschung" },
  { word: "Genabschnittanalyse", article: "die", translation: "gene segment analysis", category: "Genomforschung" },
  { word: "Genschereneinsatz", article: "der", translation: "gene scissors use (CRISPR)", category: "Genomforschung" },

  // Impfstoffforschung
  { word: "Impfstoffwirksamkeitsstudie", article: "die", translation: "vaccine efficacy study", category: "Impfstoffforschung" },
  { word: "Immunantwortmessung", article: "die", translation: "immune response measurement", category: "Impfstoffforschung" },
  { word: "Zulassungsverfahren", article: "das", translation: "approval procedure", category: "Impfstoffforschung" },
  { word: "Impfstoffentwicklung", article: "die", translation: "vaccine development", category: "Impfstoffforschung" },
  { word: "Antigenpräsentation", article: "die", translation: "antigen presentation", category: "Impfstoffforschung" },
  { word: "Wirksamkeitsstudie", article: "die", translation: "efficacy study", category: "Impfstoffforschung" },
  { word: "Zulassungsstudie", article: "die", translation: "approval study", category: "Impfstoffforschung" },
  { word: "Auffrischungsimpfung", article: "die", translation: "booster vaccination", category: "Impfstoffforschung" },

  // Stammzellenforschung
  { word: "Stammzellenforschungsansatz", article: "der", translation: "stem cell research approach", category: "Stammzellenforschung" },
  { word: "Zelldifferenzierungsprozess", article: "der", translation: "cell differentiation process", category: "Stammzellenforschung" },
  { word: "Gewebekultivierung", article: "die", translation: "tissue cultivation", category: "Stammzellenforschung" },

  // Transplantationsmedizin
  { word: "Organtransplantationswarteliste", article: "die", translation: "organ transplant waiting list", category: "Transplantationsmedizin" },
  { word: "Abstoßungsreaktion", article: "die", translation: "rejection reaction", category: "Transplantationsmedizin" },
  { word: "Gewebeverträglichkeit", article: "die", translation: "tissue compatibility", category: "Transplantationsmedizin" },

  // Photovoltaiktechnik
  { word: "Zellverschaltungsart", article: "die", translation: "cell interconnection type", category: "Photovoltaiktechnik" },
  { word: "Modulausrichtung", article: "die", translation: "panel orientation", category: "Photovoltaiktechnik" },
  { word: "Wechselrichterleistung", article: "die", translation: "inverter power", category: "Photovoltaiktechnik" },
  { word: "Einspeisevergütung", article: "die", translation: "feed-in tariff", category: "Photovoltaiktechnik" },

  // Windkrafttechnik (vertieft)
  { word: "Rotorblattfertigung", article: "die", translation: "rotor blade manufacturing", category: "Windkrafttechnik (vertieft)" },
  { word: "Getriebeölwechsel", article: "der", translation: "gearbox oil change", category: "Windkrafttechnik (vertieft)" },
  { word: "Turbinennabenhöhe", article: "die", translation: "turbine hub height", category: "Windkrafttechnik (vertieft)" },

  // Geothermietechnik
  { word: "Geothermiebohrung", article: "die", translation: "geothermal drilling", category: "Geothermietechnik" },
  { word: "Erdwärmesondenlänge", article: "die", translation: "geothermal probe length", category: "Geothermietechnik" },
  { word: "Thermalwassernutzung", article: "die", translation: "thermal water usage", category: "Geothermietechnik" },

  // Wasserstofftechnik
  { word: "Wasserstoffelektrolyseur", article: "der", translation: "hydrogen electrolyzer", category: "Wasserstofftechnik" },
  { word: "Brennstoffzellenstapel", article: "der", translation: "fuel cell stack", category: "Wasserstofftechnik" },
  { word: "Tankdrucküberwachung", article: "die", translation: "tank pressure monitoring", category: "Wasserstofftechnik" },

  // Zeitungsjournalismus
  { word: "Zeitungsredaktionskonferenz", article: "die", translation: "newspaper editorial meeting", category: "Zeitungsjournalismus" },
  { word: "Schlagzeilenformulierung", article: "die", translation: "headline wording", category: "Zeitungsjournalismus" },
  { word: "Leserbriefspalte", article: "die", translation: "letters to the editor column", category: "Zeitungsjournalismus" },
  { word: "Auflagenzahl", article: "die", translation: "circulation figure", category: "Zeitungsjournalismus" },

  // Rundfunkjournalismus
  { word: "Fernsehmoderatorentraining", article: "das", translation: "TV presenter training", category: "Rundfunkjournalismus" },
  { word: "Sendeplanung", article: "die", translation: "broadcast scheduling", category: "Rundfunkjournalismus" },
  { word: "Livesendungsregie", article: "die", translation: "live broadcast direction", category: "Rundfunkjournalismus" },

  // Recherchejournalismus
  { word: "Investigativrecherche", article: "die", translation: "investigative research", category: "Recherchejournalismus" },
  { word: "Quellenschutzpflicht", article: "die", translation: "source protection obligation", category: "Recherchejournalismus" },
  { word: "Faktencheckverfahren", article: "das", translation: "fact-checking process", category: "Recherchejournalismus" },

  // Podcastproduktion
  { word: "Podcastfolgenplanung", article: "die", translation: "podcast episode planning", category: "Podcastproduktion" },
  { word: "Tonschnittbearbeitung", article: "die", translation: "audio editing", category: "Podcastproduktion" },
  { word: "Hörerbindung", article: "die", translation: "listener retention", category: "Podcastproduktion" },

  // Übersetzungswesen
  { word: "Übersetzerhonorarabrechnung", article: "die", translation: "translator fee billing", category: "Übersetzungswesen" },
  { word: "Übersetzungsgedächtnis", article: "das", translation: "translation memory", category: "Übersetzungswesen" },
  { word: "Lektoratsdurchgang", article: "der", translation: "editing pass", category: "Übersetzungswesen" },

  // Dolmetscherwesen
  { word: "Simultandolmetscherkabine", article: "die", translation: "simultaneous interpreter booth", category: "Dolmetscherwesen" },
  { word: "Konsekutivdolmetschtechnik", article: "die", translation: "consecutive interpreting technique", category: "Dolmetscherwesen" },
  { word: "Verdolmetschungsqualität", article: "die", translation: "interpreting quality", category: "Dolmetscherwesen" },

  // Gebärdensprachwesen
  { word: "Gebärdensprachdolmetscher", article: "der", translation: "sign language interpreter", category: "Gebärdensprachwesen" },
  { word: "Handformbedeutung", article: "die", translation: "handshape meaning", category: "Gebärdensprachwesen" },
  { word: "Mimikausdruckskomponente", article: "die", translation: "facial expression component", category: "Gebärdensprachwesen" },

  // Untertitelung
  { word: "Untertitelungssoftware", article: "die", translation: "subtitling software", category: "Untertitelung" },
  { word: "Einblendzeitpunkt", article: "der", translation: "display timing", category: "Untertitelung" },
  { word: "Zeichenanzahlbegrenzung", article: "die", translation: "character count limit", category: "Untertitelung" },

  // Binnenschifffahrtstechnik
  { word: "Schleusenkammerhöhe", article: "die", translation: "lock chamber height", category: "Binnenschifffahrtstechnik" },
  { word: "Frachtkahnbeladung", article: "die", translation: "barge loading", category: "Binnenschifffahrtstechnik" },
  { word: "Fahrrinnentiefe", article: "die", translation: "navigation channel depth", category: "Binnenschifffahrtstechnik" },

  // Seeschifffahrtstechnik
  { word: "Containerschiffsstauplan", article: "der", translation: "container ship stowage plan", category: "Seeschifffahrtstechnik" },
  { word: "Ballastwasseraustausch", article: "der", translation: "ballast water exchange", category: "Seeschifffahrtstechnik" },
  { word: "Lotsenübernahme", article: "die", translation: "pilot boarding", category: "Seeschifffahrtstechnik" },

  // Fährbetrieb
  { word: "Fährverbindungsplan", article: "der", translation: "ferry connection schedule", category: "Fährbetrieb" },
  { word: "Autodeckbeladung", article: "die", translation: "car deck loading", category: "Fährbetrieb" },
  { word: "Überfahrtszeit", article: "die", translation: "crossing time", category: "Fährbetrieb" },
  { word: "Fährverbindung", article: "die", translation: "ferry connection", category: "Fährbetrieb" },
  { word: "Anlegemanöver", article: "das", translation: "docking maneuver (ferry)", category: "Fährbetrieb" },
  { word: "Fahrzeugdeck", article: "das", translation: "vehicle deck", category: "Fährbetrieb" },
  { word: "Überfahrtzeit", article: "die", translation: "crossing time", category: "Fährbetrieb" },

  // Küstenwache
  { word: "Küstenwacheinsatzboot", article: "das", translation: "coast guard patrol boat", category: "Küstenwache" },
  { word: "Seenotrettungskreuzer", article: "der", translation: "sea rescue cruiser", category: "Küstenwache" },
  { word: "Havariemeldung", article: "die", translation: "accident report (maritime)", category: "Küstenwache" },

  // Eisenbahnbetrieb (vertieft)
  { word: "Lokführerausbildungsdauer", article: "die", translation: "train driver training duration", category: "Eisenbahnbetrieb (vertieft)" },
  { word: "Stellwerksbedienung", article: "die", translation: "signal box operation", category: "Eisenbahnbetrieb (vertieft)" },
  { word: "Gleisbettinstandhaltung", article: "die", translation: "track bed maintenance", category: "Eisenbahnbetrieb (vertieft)" },
  { word: "Zugsicherungssystem", article: "das", translation: "train protection system", category: "Eisenbahnbetrieb (vertieft)" },

  // U-Bahn-Bautechnik
  { word: "U-Bahn-Tunnelbohrung", article: "die", translation: "subway tunnel boring", category: "U-Bahn-Bautechnik" },
  { word: "Bahnsteigtürabsicherung", article: "die", translation: "platform screen door safety", category: "U-Bahn-Bautechnik" },
  { word: "Taktfahrplanverdichtung", article: "die", translation: "schedule frequency increase", category: "U-Bahn-Bautechnik" },

  // Straßenbahnbetrieb
  { word: "Straßenbahnoberleitungsspannung", article: "die", translation: "tram overhead line voltage", category: "Straßenbahnbetrieb" },
  { word: "Weichenstellung", article: "die", translation: "switch setting (tram)", category: "Straßenbahnbetrieb" },
  { word: "Fahrgastzähleinrichtung", article: "die", translation: "passenger counting device", category: "Straßenbahnbetrieb" },

  // Fernbusbetrieb
  { word: "Fernbuslinienplanung", article: "die", translation: "coach line planning", category: "Fernbusbetrieb" },
  { word: "Gepäckraumkapazität", article: "die", translation: "luggage compartment capacity", category: "Fernbusbetrieb" },
  { word: "Haltestellenanbindung", article: "die", translation: "stop connectivity", category: "Fernbusbetrieb" },

  // Figurentheater
  { word: "Marionettentheatervorstellung", article: "die", translation: "marionette theater performance", category: "Figurentheater" },
  { word: "Bühnenbildentwurf", article: "der", translation: "stage design draft", category: "Figurentheater" },
  { word: "Requisitenbau", article: "der", translation: "prop making", category: "Figurentheater" },

  // Improvisationstheater
  { word: "Improvisationstheaterübung", article: "die", translation: "improv theater exercise", category: "Improvisationstheater" },
  { word: "Statusspielszene", article: "die", translation: "status play scene", category: "Improvisationstheater" },
  { word: "Publikumsvorschlag", article: "der", translation: "audience suggestion", category: "Improvisationstheater" },

  // Kabarettkunst
  { word: "Kabaretttextentwurf", article: "der", translation: "cabaret script draft", category: "Kabarettkunst" },
  { word: "Sozialkritikelement", article: "das", translation: "social criticism element", category: "Kabarettkunst" },
  { word: "Programmpremiere", article: "die", translation: "show premiere (cabaret)", category: "Kabarettkunst" },

  // Comedyhandwerk
  { word: "Pointentiming", article: "das", translation: "punchline timing (comedy)", category: "Comedyhandwerk" },
  { word: "Publikumseinbindung", article: "die", translation: "audience engagement (comedy)", category: "Comedyhandwerk" },
  { word: "Programmentwicklung", article: "die", translation: "set development (comedy)", category: "Comedyhandwerk" },

  // Fassbinderhandwerk
  { word: "Fassbindergesellenprüfung", article: "die", translation: "cooper's journeyman exam", category: "Fassbinderhandwerk" },
  { word: "Daubenzuschnitt", article: "der", translation: "stave cutting (barrel)", category: "Fassbinderhandwerk" },
  { word: "Reifenspannung", article: "die", translation: "hoop tensioning (barrel)", category: "Fassbinderhandwerk" },

  // Korbmacherhandwerk
  { word: "Korbmachermeisterbrief", article: "der", translation: "master basket maker certificate", category: "Korbmacherhandwerk" },
  { word: "Rutenverarbeitung", article: "die", translation: "rod processing (basketry)", category: "Korbmacherhandwerk" },

  // Bürstenbinderhandwerk
  { word: "Bürstenbindertechnik", article: "die", translation: "brush making technique", category: "Bürstenbinderhandwerk" },
  { word: "Borstenbündelung", article: "die", translation: "bristle bundling", category: "Bürstenbinderhandwerk" },
  { word: "Stielverleimung", article: "die", translation: "handle gluing (brush)", category: "Bürstenbinderhandwerk" },

  // Seilerhandwerk
  { word: "Seilereidrehmaschine", article: "die", translation: "rope-making machine", category: "Seilerhandwerk" },
  { word: "Hanffaserzwirnung", article: "die", translation: "hemp fiber twisting", category: "Seilerhandwerk" },
  { word: "Seilstärkenberechnung", article: "die", translation: "rope thickness calculation", category: "Seilerhandwerk" },

  // Kürschnerhandwerk
  { word: "Kürschnerfellzuschnitt", article: "der", translation: "furrier pelt cutting", category: "Kürschnerhandwerk" },
  { word: "Pelznaht", article: "die", translation: "fur seam", category: "Kürschnerhandwerk" },
  { word: "Haarrichtungsanpassung", article: "die", translation: "fur direction matching", category: "Kürschnerhandwerk" },

  // Handschuhmacherhandwerk
  { word: "Handschuhmacherlederauswahl", article: "die", translation: "glovemaker leather selection", category: "Handschuhmacherhandwerk" },
  { word: "Fingerlingsnaht", article: "die", translation: "finger stall seam", category: "Handschuhmacherhandwerk" },

  // Hutmacherhandwerk
  { word: "Hutmacherformblock", article: "der", translation: "hat blocking form", category: "Hutmacherhandwerk" },
  { word: "Filzhutdämpfung", article: "die", translation: "felt hat steaming", category: "Hutmacherhandwerk" },
  { word: "Krempenbiegung", article: "die", translation: "brim shaping", category: "Hutmacherhandwerk" },

  // Schuhmacherhandwerk
  { word: "Schuhmacherleistenanpassung", article: "die", translation: "shoemaker last fitting", category: "Schuhmacherhandwerk" },
  { word: "Sohlennaht", article: "die", translation: "sole stitching", category: "Schuhmacherhandwerk" },
  { word: "Absatzerneuerung", article: "die", translation: "heel replacement", category: "Schuhmacherhandwerk" },

  // Chemie (vertieft)
  { word: "Molekülbindung", article: "die", translation: "molecular bond", category: "Chemie (vertieft)" },
  { word: "Reaktionsgleichung", article: "die", translation: "reaction equation", category: "Chemie (vertieft)" },
  { word: "Säure-Base-Reaktion", article: "die", translation: "acid-base reaction", category: "Chemie (vertieft)" },
  { word: "Oxidationsstufe", article: "die", translation: "oxidation state", category: "Chemie (vertieft)" },
  { word: "Reaktionsgeschwindigkeit", article: "die", translation: "reaction rate", category: "Chemie (vertieft)" },
  { word: "Löslichkeitsgrenze", article: "die", translation: "solubility limit", category: "Chemie (vertieft)" },
  { word: "Kristallisationsprozess", article: "der", translation: "crystallization process", category: "Chemie (vertieft)" },
  { word: "Molekülmasse", article: "die", translation: "molecular mass", category: "Chemie (vertieft)" },
  { word: "Verbindungsklasse", article: "die", translation: "class of compounds", category: "Chemie (vertieft)" },
  { word: "Elektronenkonfiguration", article: "die", translation: "electron configuration", category: "Chemie (vertieft)" },

  // Mathematik (vertieft)
  { word: "Gleichungssystem", article: "das", translation: "system of equations", category: "Mathematik (vertieft)" },
  { word: "Funktionsverlauf", article: "der", translation: "function curve", category: "Mathematik (vertieft)" },
  { word: "Ableitungsregel", article: "die", translation: "differentiation rule", category: "Mathematik (vertieft)" },
  { word: "Integralrechnung", article: "die", translation: "integral calculus", category: "Mathematik (vertieft)" },
  { word: "Wahrscheinlichkeitsverteilung", article: "die", translation: "probability distribution", category: "Mathematik (vertieft)" },
  { word: "Vektorraum", article: "der", translation: "vector space", category: "Mathematik (vertieft)" },
  { word: "Matrixmultiplikation", article: "die", translation: "matrix multiplication", category: "Mathematik (vertieft)" },
  { word: "Grenzwertberechnung", article: "die", translation: "limit calculation", category: "Mathematik (vertieft)" },
  { word: "Varianzanalyse", article: "die", translation: "variance analysis (statistics)", category: "Mathematik (vertieft)" },

  // Informatik (Theorie)
  { word: "Algorithmuskomplexität", article: "die", translation: "algorithm complexity", category: "Informatik (Theorie)" },
  { word: "Datenstruktur", article: "die", translation: "data structure", category: "Informatik (Theorie)" },
  { word: "Berechenbarkeit", article: "die", translation: "computability", category: "Informatik (Theorie)" },
  { word: "Zustandsautomat", article: "der", translation: "state machine", category: "Informatik (Theorie)" },
  { word: "Rekursionstiefe", article: "die", translation: "recursion depth", category: "Informatik (Theorie)" },
  { word: "Sortierverfahren", article: "das", translation: "sorting method", category: "Informatik (Theorie)" },
  { word: "Laufzeitanalyse", article: "die", translation: "runtime analysis", category: "Informatik (Theorie)" },

  // Betriebssysteme
  { word: "Betriebssystemkern", article: "der", translation: "operating system kernel", category: "Betriebssysteme" },
  { word: "Prozessverwaltung", article: "die", translation: "process management", category: "Betriebssysteme" },
  { word: "Arbeitsspeichernutzung", article: "die", translation: "memory usage", category: "Betriebssysteme" },
  { word: "Dateisystemstruktur", article: "die", translation: "file system structure", category: "Betriebssysteme" },
  { word: "Systemaufruf", article: "der", translation: "system call", category: "Betriebssysteme" },
  { word: "Treiberinstallation", article: "die", translation: "driver installation", category: "Betriebssysteme" },

  // IT-Sicherheit (vertieft)
  { word: "Angriffsvektor", article: "der", translation: "attack vector", category: "IT-Sicherheit (vertieft)" },
  { word: "Penetrationstest", article: "der", translation: "penetration test", category: "IT-Sicherheit (vertieft)" },
  { word: "Zugriffskontrolle", article: "die", translation: "access control", category: "IT-Sicherheit (vertieft)" },
  { word: "Schwachstellenanalyse", article: "die", translation: "vulnerability analysis", category: "IT-Sicherheit (vertieft)" },
  { word: "Authentifizierungsverfahren", article: "das", translation: "authentication method", category: "IT-Sicherheit (vertieft)" },
  { word: "Verschlüsselungsstärke", article: "die", translation: "encryption strength", category: "IT-Sicherheit (vertieft)" },
  { word: "Datenintegrität", article: "die", translation: "data integrity", category: "IT-Sicherheit (vertieft)" },

  // Antiquitätenhandel
  { word: "Antiquitätenhändlerauge", article: "das", translation: "antique dealer's eye", category: "Antiquitätenhandel" },
  { word: "Provenienzrecherche", article: "die", translation: "provenance research", category: "Antiquitätenhandel" },
  { word: "Wertermittlungsgutachten", article: "das", translation: "valuation report", category: "Antiquitätenhandel" },

  // Kunstauktionswesen
  { word: "Auktionshausschätzung", article: "die", translation: "auction house appraisal", category: "Kunstauktionswesen" },
  { word: "Gebotsschritt", article: "der", translation: "bid increment", category: "Kunstauktionswesen" },
  { word: "Zuschlagspreis", article: "der", translation: "hammer price", category: "Kunstauktionswesen" },

  // Philatelie
  { word: "Briefmarkensammlungsalbum", article: "das", translation: "stamp collection album", category: "Philatelie" },
  { word: "Zähnungsprüfung", article: "die", translation: "perforation check", category: "Philatelie" },
  { word: "Wasserzeichenerkennung", article: "die", translation: "watermark detection", category: "Philatelie" },
  { word: "Briefmarkensammlung", article: "die", translation: "stamp collection", category: "Philatelie" },
  { word: "Sonderausgabe", article: "die", translation: "special edition (stamps)", category: "Philatelie" },
  { word: "Zähnung", article: "die", translation: "perforation (stamps)", category: "Philatelie" },
  { word: "Stempelabdruck", article: "der", translation: "postmark", category: "Philatelie" },
  { word: "Sammlermappe", article: "die", translation: "collector's album", category: "Philatelie" },

  // Autogrammsammlung
  { word: "Autogrammechtheit", article: "die", translation: "autograph authenticity", category: "Autogrammsammlung" },
  { word: "Widmungstext", article: "der", translation: "dedication text", category: "Autogrammsammlung" },
  { word: "Sammlerwertsteigerung", article: "die", translation: "collector value increase", category: "Autogrammsammlung" },

  // Schornsteinfegerhandwerk
  { word: "Kaminkehrergesellenwanderung", article: "die", translation: "chimney sweep journeyman travel", category: "Schornsteinfegerhandwerk" },
  { word: "Rußablagerung", article: "die", translation: "soot deposit", category: "Schornsteinfegerhandwerk" },
  { word: "Zugmessung", article: "die", translation: "draft measurement (chimney)", category: "Schornsteinfegerhandwerk" },

  // Glaserhandwerk
  { word: "Glaserzuschnittwerkzeug", article: "das", translation: "glazier cutting tool", category: "Glaserhandwerk" },
  { word: "Fensterkittung", article: "die", translation: "window puttying", category: "Glaserhandwerk" },
  { word: "Isolierglasherstellung", article: "die", translation: "insulated glass production", category: "Glaserhandwerk" },

  // Parkettlegerhandwerk
  { word: "Parkettlegermustertechnik", article: "die", translation: "parquet laying pattern technique", category: "Parkettlegerhandwerk" },
  { word: "Holzfeuchtemessung", article: "die", translation: "wood moisture measurement", category: "Parkettlegerhandwerk" },
  { word: "Versiegelungsauftrag", article: "der", translation: "sealing application", category: "Parkettlegerhandwerk" },

  // Raumausstatterhandwerk
  { word: "Raumausstatterstoffauswahl", article: "die", translation: "upholsterer fabric selection", category: "Raumausstatterhandwerk" },
  { word: "Polsterpolsterung", article: "die", translation: "upholstery padding", category: "Raumausstatterhandwerk" },
  { word: "Gardinenaufhängung", article: "die", translation: "curtain hanging", category: "Raumausstatterhandwerk" },

  // Zauberkunst
  { word: "Zauberkunststückablauf", article: "der", translation: "magic trick sequence", category: "Zauberkunst" },
  { word: "Fingerfertigkeitstraining", article: "das", translation: "sleight of hand training", category: "Zauberkunst" },
  { word: "Verschwindetrick", article: "der", translation: "vanishing trick", category: "Zauberkunst" },
  { word: "Kartentrickvariation", article: "die", translation: "card trick variation", category: "Zauberkunst" },
  { word: "Zaubertrick", article: "der", translation: "magic trick", category: "Zauberkunst" },
  { word: "Fingerfertigkeit", article: "die", translation: "manual dexterity", category: "Zauberkunst" },
  { word: "Ablenkungsmanöver", article: "das", translation: "diversion maneuver", category: "Zauberkunst" },
  { word: "Requisitenkasten", article: "der", translation: "prop box", category: "Zauberkunst" },

  // Bühnenhypnose
  { word: "Hypnosetranceeinleitung", article: "die", translation: "hypnotic trance induction", category: "Bühnenhypnose" },
  { word: "Suggestionsformel", article: "die", translation: "suggestion formula", category: "Bühnenhypnose" },
  { word: "Rückführungstechnik", article: "die", translation: "deinduction technique", category: "Bühnenhypnose" },

  // Mentalmagie
  { word: "Gedankenleserzugtechnik", article: "die", translation: "mentalism reading technique", category: "Mentalmagie" },
  { word: "Kaltlesungsmethode", article: "die", translation: "cold reading method", category: "Mentalmagie" },
  { word: "Vorhersagetrick", article: "der", translation: "prediction trick", category: "Mentalmagie" },

  // Straßenkunst
  { word: "Bauchladenverkaufsstand", article: "der", translation: "vending tray stand", category: "Straßenkunst" },
  { word: "Passantenansprache", article: "die", translation: "passerby engagement", category: "Straßenkunst" },
  { word: "Hutgeldsammlung", article: "die", translation: "tip hat collection", category: "Straßenkunst" },

  // Höhlenforschung
  { word: "Höhlenforschungsausrüstung", article: "die", translation: "caving equipment", category: "Höhlenforschung" },
  { word: "Höhlenbelüftungssystem", article: "das", translation: "cave ventilation system", category: "Höhlenforschung" },
  { word: "Höhlensystemkartierung", article: "die", translation: "cave system mapping", category: "Höhlenforschung" },
  { word: "Sedimentgesteinsschicht", article: "die", translation: "sedimentary rock layer", category: "Höhlenforschung" },
  { word: "Tropfsteinbildung", article: "die", translation: "stalactite formation", category: "Höhlenforschung" },
  { word: "Höhlensystem", article: "das", translation: "cave system", category: "Höhlenforschung" },
  { word: "Karsterscheinung", article: "die", translation: "karst phenomenon", category: "Höhlenforschung" },
  { word: "Höhlenexpedition", article: "die", translation: "cave expedition", category: "Höhlenforschung" },

  // Ozeanografie (vertieft)
  { word: "Meeresströmungsforschung", article: "die", translation: "ocean current research", category: "Ozeanografie (vertieft)" },
  { word: "Tiefseetauchgang", article: "der", translation: "deep sea dive", category: "Ozeanografie (vertieft)" },
  { word: "Strömungsmessboje", article: "die", translation: "current measuring buoy", category: "Ozeanografie (vertieft)" },
  { word: "Sedimentablagerung", article: "die", translation: "sediment deposit", category: "Ozeanografie (vertieft)" },
  { word: "Meeresströmungsmuster", article: "das", translation: "ocean current pattern", category: "Ozeanografie (vertieft)" },
  { word: "Kontinentalschelf", article: "der", translation: "continental shelf", category: "Ozeanografie (vertieft)" },
  { word: "Wasserschichtung", article: "die", translation: "water stratification", category: "Ozeanografie (vertieft)" },
  { word: "Gezeitenhub", article: "der", translation: "tidal range", category: "Ozeanografie (vertieft)" },
  { word: "Meeresbodenkartierung", article: "die", translation: "seabed mapping", category: "Ozeanografie (vertieft)" },

  // Polarforschung
  { word: "Polarforschungsstation", article: "die", translation: "polar research station", category: "Polarforschung" },
  { word: "Eisbohrkernanalyse", article: "die", translation: "ice core analysis", category: "Polarforschung" },
  { word: "Packeisgrenze", article: "die", translation: "pack ice boundary", category: "Polarforschung" },

  // Regenwaldforschung
  { word: "Regenwaldbaumkronenforschung", article: "die", translation: "rainforest canopy research", category: "Regenwaldforschung" },
  { word: "Artenvielfaltserfassung", article: "die", translation: "biodiversity survey", category: "Regenwaldforschung" },
  { word: "Abholzungsrate", article: "die", translation: "deforestation rate", category: "Regenwaldforschung" },

  // Bibliothekswesen (vertieft)
  { word: "Bibliotheksbestandskatalogisierung", article: "die", translation: "library holdings cataloging", category: "Bibliothekswesen (vertieft)" },
  { word: "Signaturvergabe", article: "die", translation: "call number assignment", category: "Bibliothekswesen (vertieft)" },
  { word: "Fernleihantrag", article: "der", translation: "interlibrary loan request", category: "Bibliothekswesen (vertieft)" },

  // Archivwesen
  { word: "Archivbestandsverzeichnis", article: "das", translation: "archive holdings register", category: "Archivwesen" },
  { word: "Findbucherstellung", article: "die", translation: "finding aid creation", category: "Archivwesen" },
  { word: "Aktenschließung", article: "die", translation: "file closure (archive)", category: "Archivwesen" },

  // Museumswesen
  { word: "Museumsdepotverwaltung", article: "die", translation: "museum storage management", category: "Museumswesen" },
  { word: "Ausstellungskonzeption", article: "die", translation: "exhibition conception", category: "Museumswesen" },
  { word: "Exponatbeschriftung", article: "die", translation: "exhibit labeling", category: "Museumswesen" },
  { word: "Museumsführung", article: "die", translation: "museum tour", category: "Museumswesen" },
  { word: "Ausstellungsstück", article: "das", translation: "exhibit", category: "Museumswesen" },
  { word: "Sammlungsbestand", article: "der", translation: "collection holdings", category: "Museumswesen" },
  { word: "Leihgabe", article: "die", translation: "loan (museum item)", category: "Museumswesen" },
  { word: "Restaurierungsarbeit", article: "die", translation: "restoration work", category: "Museumswesen" },
  { word: "Vitrinenaufbau", article: "der", translation: "display case setup", category: "Museumswesen" },
  { word: "Provenienzforschung", article: "die", translation: "provenance research", category: "Museumswesen" },

  // Stadtgeschichtsforschung
  { word: "Stadtarchivbenutzerordnung", article: "die", translation: "city archive usage rules", category: "Stadtgeschichtsforschung" },
  { word: "Quellenedition", article: "die", translation: "source edition", category: "Stadtgeschichtsforschung" },
  { word: "Stadtchronikeintrag", article: "der", translation: "town chronicle entry", category: "Stadtgeschichtsforschung" },

  // Zirkusbetrieb
  { word: "Zirkuszeltaufbau", article: "der", translation: "circus tent setup", category: "Zirkusbetrieb" },
  { word: "Manegeneinlage", article: "die", translation: "ring act (circus)", category: "Zirkusbetrieb" },
  { word: "Artistengarderobe", article: "die", translation: "performer dressing room", category: "Zirkusbetrieb" },

  // Feuershow
  { word: "Feuerspuckerölauswahl", article: "die", translation: "fire eater oil choice", category: "Feuershow" },
  { word: "Fackeldrehung", article: "die", translation: "torch spinning", category: "Feuershow" },
  { word: "Sicherheitsdeckenbereitschaft", article: "die", translation: "safety blanket readiness", category: "Feuershow" },

  // Breakdancekunst
  { word: "Breakdancemoveeinstudierung", article: "die", translation: "breakdance move rehearsal", category: "Breakdancekunst" },
  { word: "Bodenrotation", article: "die", translation: "floor spin", category: "Breakdancekunst" },
  { word: "Freezehaltung", article: "die", translation: "freeze pose (breakdance)", category: "Breakdancekunst" },

  // Beatboxkunst
  { word: "Beatboxrhythmustechnik", article: "die", translation: "beatboxing rhythm technique", category: "Beatboxkunst" },
  { word: "Lippenschnalzlaut", article: "der", translation: "lip click sound", category: "Beatboxkunst" },
  { word: "Atemtechnikkontrolle", article: "die", translation: "breath technique control", category: "Beatboxkunst" },

  // Wurmzucht
  { word: "Kompostwurmzucht", article: "die", translation: "compost worm farming", category: "Wurmzucht" },
  { word: "Substratfeuchtigkeit", article: "die", translation: "substrate moisture", category: "Wurmzucht" },
  { word: "Wurmhumusernte", article: "die", translation: "worm castings harvest", category: "Wurmzucht" },

  // Pilzzucht
  { word: "Speisepilzsubstratmischung", article: "die", translation: "edible mushroom substrate mix", category: "Pilzzucht" },
  { word: "Myzelwachstum", article: "das", translation: "mycelium growth", category: "Pilzzucht" },
  { word: "Fruchtkörperbildung", article: "die", translation: "fruiting body formation", category: "Pilzzucht" },

  // Sprossenzucht
  { word: "Kressezuchtschale", article: "die", translation: "cress growing tray", category: "Sprossenzucht" },
  { word: "Keimdauerberechnung", article: "die", translation: "germination time calculation", category: "Sprossenzucht" },
  { word: "Sprossengläserreinigung", article: "die", translation: "sprout jar cleaning", category: "Sprossenzucht" },

  // Blechblasinstrumentenbau
  { word: "Trompetenmundstückgröße", article: "die", translation: "trumpet mouthpiece size", category: "Blechblasinstrumentenbau" },
  { word: "Ventilzuggeschmeidigkeit", article: "die", translation: "valve slide smoothness", category: "Blechblasinstrumentenbau" },
  { word: "Schalltrichterweite", article: "die", translation: "bell width (brass)", category: "Blechblasinstrumentenbau" },

  // Holzblasinstrumentenbau
  { word: "Klarinettenrohrblatt", article: "das", translation: "clarinet reed", category: "Holzblasinstrumentenbau" },
  { word: "Klappenmechanik", article: "die", translation: "key mechanism (woodwind)", category: "Holzblasinstrumentenbau" },
  { word: "Bohrungsdurchmesser", article: "der", translation: "bore diameter", category: "Holzblasinstrumentenbau" },

  // Akkordeonbau
  { word: "Akkordeonbalgfaltung", article: "die", translation: "accordion bellows folding", category: "Akkordeonbau" },
  { word: "Knopfgriffanordnung", article: "die", translation: "button layout", category: "Akkordeonbau" },
  { word: "Stimmzungenblock", article: "der", translation: "reed block (accordion)", category: "Akkordeonbau" },

  // Gitarrenbau
  { word: "Gitarrensteghöhe", article: "die", translation: "guitar bridge height", category: "Gitarrenbau" },
  { word: "Bundstäbcheneinlage", article: "die", translation: "fret wire inlay", category: "Gitarrenbau" },
  { word: "Decklackierung", article: "die", translation: "top varnishing (guitar)", category: "Gitarrenbau" },

  // Gastwirtschaftswesen
  { word: "Brauereigasthausbewirtung", article: "die", translation: "brewery pub service", category: "Gastwirtschaftswesen" },
  { word: "Zapfhahnreinigung", article: "die", translation: "tap cleaning", category: "Gastwirtschaftswesen" },
  { word: "Schankraumgestaltung", article: "die", translation: "taproom design", category: "Gastwirtschaftswesen" },

  // Berghüttenbewirtschaftung
  { word: "Hüttenwirtstradition", article: "die", translation: "mountain hut innkeeper tradition", category: "Berghüttenbewirtschaftung" },
  { word: "Materialseilbahntransport", article: "der", translation: "supply cable car transport", category: "Berghüttenbewirtschaftung" },
  { word: "Übernachtungslagerbelegung", article: "die", translation: "dormitory bed occupancy", category: "Berghüttenbewirtschaftung" },

  // Campingplatzbetrieb
  { word: "Campingplatzrezeption", article: "die", translation: "campsite reception", category: "Campingplatzbetrieb" },
  { word: "Stellplatzvergabe", article: "die", translation: "pitch allocation", category: "Campingplatzbetrieb" },
  { word: "Sanitäranlagenwartung", article: "die", translation: "sanitary facility maintenance", category: "Campingplatzbetrieb" },

  // Kellereiwirtschaft
  { word: "Weinkellereigärkontrolle", article: "die", translation: "winery fermentation control", category: "Kellereiwirtschaft" },
  { word: "Flaschenabfüllanlage", article: "die", translation: "bottling plant", category: "Kellereiwirtschaft" },
  { word: "Etikettierungsvorschrift", article: "die", translation: "labeling regulation", category: "Kellereiwirtschaft" },

  // Destilleriewesen
  { word: "Destillerieanlagenreinigung", article: "die", translation: "distillery equipment cleaning", category: "Destilleriewesen" },
  { word: "Fasslagerungsklima", article: "das", translation: "cask storage climate", category: "Destilleriewesen" },
  { word: "Abfüllstärkeberechnung", article: "die", translation: "bottling strength calculation", category: "Destilleriewesen" },

  // Kleinbrauereiwesen
  { word: "Braumeisterrezeptentwicklung", article: "die", translation: "brewmaster recipe development", category: "Kleinbrauereiwesen" },
  { word: "Craftbiersortenvielfalt", article: "die", translation: "craft beer variety", category: "Kleinbrauereiwesen" },
  { word: "Flaschengärungsdruck", article: "der", translation: "bottle conditioning pressure", category: "Kleinbrauereiwesen" },

  // Optik
  { word: "Lichtbrechung", article: "die", translation: "refraction of light", category: "Optik" },
  { word: "Linsenschliff", article: "der", translation: "lens grinding", category: "Optik" },
  { word: "Brennpunkt", article: "der", translation: "focal point", category: "Optik" },
  { word: "Spiegelreflexion", article: "die", translation: "mirror reflection", category: "Optik" },
  { word: "Lichtbeugung", article: "die", translation: "light diffraction", category: "Optik" },
  { word: "Polarisationsfilter", article: "der", translation: "polarizing filter", category: "Optik" },
  { word: "Bildvergrößerung", article: "die", translation: "image magnification", category: "Optik" },

  // Akustik
  { word: "Schallwellenausbreitung", article: "die", translation: "propagation of sound waves", category: "Akustik" },
  { word: "Klangdämpfung", article: "die", translation: "sound damping", category: "Akustik" },
  { word: "Schallpegel", article: "der", translation: "sound level", category: "Akustik" },
  { word: "Resonanzfrequenz", article: "die", translation: "resonance frequency", category: "Akustik" },
  { word: "Schallschutz", article: "der", translation: "sound insulation", category: "Akustik" },
  { word: "Echoortung", article: "die", translation: "echolocation", category: "Akustik" },
  { word: "Tonhöhe", article: "die", translation: "pitch", category: "Akustik" },

  // Elektromagnetismus
  { word: "Magnetfeldstärke", article: "die", translation: "magnetic field strength", category: "Elektromagnetismus" },
  { word: "Elektronenfluss", article: "der", translation: "flow of electrons", category: "Elektromagnetismus" },
  { word: "Induktionsspule", article: "die", translation: "induction coil", category: "Elektromagnetismus" },
  { word: "Feldlinienverlauf", article: "der", translation: "field line pattern", category: "Elektromagnetismus" },
  { word: "Ladungsträger", article: "der", translation: "charge carrier", category: "Elektromagnetismus" },
  { word: "Stromstärke", article: "die", translation: "electric current strength", category: "Elektromagnetismus" },

  // Festkörperphysik
  { word: "Kristallstruktur", article: "die", translation: "crystal structure", category: "Festkörperphysik" },
  { word: "Gitterschwingung", article: "die", translation: "lattice vibration", category: "Festkörperphysik" },
  { word: "Bandlücke", article: "die", translation: "band gap", category: "Festkörperphysik" },
  { word: "Leitfähigkeitsmessung", article: "die", translation: "conductivity measurement", category: "Festkörperphysik" },
  { word: "Materialdefekt", article: "der", translation: "material defect", category: "Festkörperphysik" },

  // Astronomie
  { word: "Sternbild", article: "das", translation: "constellation", category: "Astronomie" },
  { word: "Planetenbahn", article: "die", translation: "planetary orbit", category: "Astronomie" },
  { word: "Mondphase", article: "die", translation: "lunar phase", category: "Astronomie" },
  { word: "Himmelskörper", article: "der", translation: "celestial body", category: "Astronomie" },
  { word: "Sonnenaktivität", article: "die", translation: "solar activity", category: "Astronomie" },
  { word: "Teleskopauflösung", article: "die", translation: "telescope resolution", category: "Astronomie" },
  { word: "Sternenkarte", article: "die", translation: "star chart", category: "Astronomie" },

  // Jagdhundezucht
  { word: "Trüffelhundezuchtlinie", article: "die", translation: "truffle dog breeding line", category: "Jagdhundezucht" },
  { word: "Wesenstestbewertung", article: "die", translation: "temperament test evaluation", category: "Jagdhundezucht" },
  { word: "Zuchtzulassungsprüfung", article: "die", translation: "breeding approval test", category: "Jagdhundezucht" },

  // Pferderennsport
  { word: "Rennpferdegalopptraining", article: "das", translation: "racehorse gallop training", category: "Pferderennsport" },
  { word: "Starterboxöffnung", article: "die", translation: "starting gate opening", category: "Pferderennsport" },
  { word: "Jockeygewichtskontrolle", article: "die", translation: "jockey weight check", category: "Pferderennsport" },

  // Springreitsport
  { word: "Springreitparcoursaufbau", article: "der", translation: "show jumping course design", category: "Springreitsport" },
  { word: "Hindernisabwurfzählung", article: "die", translation: "rail knockdown count", category: "Springreitsport" },

  // Dressurreitsport
  { word: "Dressurreitprüfungslektion", article: "die", translation: "dressage test movement", category: "Dressurreitsport" },
  { word: "Piaffetakt", article: "der", translation: "piaffe rhythm", category: "Dressurreitsport" },
  { word: "Sitzhilfeeinsatz", article: "die", translation: "seat aid application", category: "Dressurreitsport" },

  // Westernreitsport
  { word: "Westernreitsattelanpassung", article: "die", translation: "western saddle fitting", category: "Westernreitsport" },
  { word: "Rindertreibtechnik", article: "die", translation: "cattle herding technique", category: "Westernreitsport" },

  // Voltigiersport
  { word: "Voltigiergurtbefestigung", article: "die", translation: "vaulting surcingle attachment", category: "Voltigiersport" },
  { word: "Longenführung", article: "die", translation: "lunge line handling", category: "Voltigiersport" },
  { word: "Pflichtübungsablauf", article: "der", translation: "compulsory exercise sequence", category: "Voltigiersport" },

  // Polosport
  { word: "Polospielfeldgröße", article: "die", translation: "polo field size", category: "Polosport" },
  { word: "Schlägerlängenanpassung", article: "die", translation: "mallet length adjustment", category: "Polosport" },
  { word: "Chukkerdauer", article: "die", translation: "chukka duration", category: "Polosport" },

  // Radrennsport (vertieft)
  { word: "Rennradübersetzungswahl", article: "die", translation: "road bike gear ratio choice", category: "Radrennsport (vertieft)" },
  { word: "Windschattenposition", article: "die", translation: "drafting position", category: "Radrennsport (vertieft)" },
  { word: "Etappenzeitfahren", article: "das", translation: "stage time trial", category: "Radrennsport (vertieft)" },

  // Mountainbikesport
  { word: "Mountainbikefederwegeinstellung", article: "die", translation: "mountain bike suspension travel setting", category: "Mountainbikesport" },
  { word: "Trailabschnittsschwierigkeit", article: "die", translation: "trail section difficulty", category: "Mountainbikesport" },

  // BMX-Sport
  { word: "BMX-Rampensprungtechnik", article: "die", translation: "BMX ramp jump technique", category: "BMX-Sport" },
  { word: "Pedalgriffigkeit", article: "die", translation: "pedal grip", category: "BMX-Sport" },

  // Fitnessstudiotechnik
  { word: "Rudergerätewiderstandseinstellung", article: "die", translation: "rowing machine resistance setting", category: "Fitnessstudiotechnik" },
  { word: "Kraftgerätepolsterung", article: "die", translation: "weight machine padding", category: "Fitnessstudiotechnik" },
  { word: "Trainingsplanperiodisierung", article: "die", translation: "training plan periodization", category: "Fitnessstudiotechnik" },

  // Boulderhallenbetrieb
  { word: "Klettergurtsicherungspunkt", article: "der", translation: "climbing harness attachment point", category: "Boulderhallenbetrieb" },
  { word: "Griffschraubensicherung", article: "die", translation: "climbing hold bolt securing", category: "Boulderhallenbetrieb" },
  { word: "Absturzmattenpolsterung", article: "die", translation: "crash pad padding", category: "Boulderhallenbetrieb" },

  // Trampolinhallenbetrieb
  { word: "Trampolinhallensprungfeld", article: "das", translation: "trampoline park jump area", category: "Trampolinhallenbetrieb" },
  { word: "Netzspannungsjustierung", article: "die", translation: "net tension adjustment", category: "Trampolinhallenbetrieb" },

  // Lasertagbetrieb
  { word: "Lasertagwestensensor", article: "der", translation: "laser tag vest sensor", category: "Lasertagbetrieb" },
  { word: "Spielfeldparcoursaufbau", article: "der", translation: "game field course setup", category: "Lasertagbetrieb" },

  // Escaperoombetrieb
  { word: "Escaperoomrätseldesign", article: "das", translation: "escape room puzzle design", category: "Escaperoombetrieb" },
  { word: "Hinweismechanismus", article: "der", translation: "clue mechanism", category: "Escaperoombetrieb" },
  { word: "Zeitlimitanzeige", article: "die", translation: "time limit display", category: "Escaperoombetrieb" },

  // Bowlingcenterbetrieb
  { word: "Bowlingbahnölmuster", article: "das", translation: "bowling lane oil pattern", category: "Bowlingcenterbetrieb" },
  { word: "Kugelrücklaufmechanismus", article: "der", translation: "ball return mechanism", category: "Bowlingcenterbetrieb" },
  { word: "Pinsettermechanik", article: "die", translation: "pinsetter mechanics", category: "Bowlingcenterbetrieb" },
  { word: "Schuhverleihstation", article: "die", translation: "shoe rental station", category: "Bowlingcenterbetrieb" },

  // Organische Chemie
  { word: "Kohlenstoffverbindung", article: "die", translation: "carbon compound", category: "Organische Chemie" },
  { word: "Alkoholgruppe", article: "die", translation: "alcohol group (chemistry)", category: "Organische Chemie" },
  { word: "Doppelbindung", article: "die", translation: "double bond", category: "Organische Chemie" },
  { word: "Molekülkette", article: "die", translation: "molecular chain", category: "Organische Chemie" },
  { word: "Syntheseweg", article: "der", translation: "synthesis route", category: "Organische Chemie" },
  { word: "Ringstruktur", article: "die", translation: "ring structure", category: "Organische Chemie" },
  { word: "Polymerisation", article: "die", translation: "polymerization", category: "Organische Chemie" },

  // Anorganische Chemie
  { word: "Salzbildung", article: "die", translation: "salt formation", category: "Anorganische Chemie" },
  { word: "Metalloxid", article: "das", translation: "metal oxide", category: "Anorganische Chemie" },
  { word: "Ionenbindung", article: "die", translation: "ionic bond", category: "Anorganische Chemie" },
  { word: "Säuregehalt", article: "der", translation: "acidity level", category: "Anorganische Chemie" },
  { word: "Reinsubstanz", article: "die", translation: "pure substance", category: "Anorganische Chemie" },
  { word: "Legierungsverfahren", article: "das", translation: "alloying process", category: "Anorganische Chemie" },

  // Haushaltstechnik
  { word: "Küchenmaschine", article: "die", translation: "food processor", category: "Haushaltstechnik" },
  { word: "Geschirrspülprogramm", article: "das", translation: "dishwasher program", category: "Haushaltstechnik" },
  { word: "Waschmaschineneinstellung", article: "die", translation: "washing machine setting", category: "Haushaltstechnik" },
  { word: "Standby-Verbrauch", article: "der", translation: "standby power consumption", category: "Haushaltstechnik" },
  { word: "Haushaltsgerät", article: "das", translation: "household appliance", category: "Haushaltstechnik" },
  { word: "Fernbedienungssteuerung", article: "die", translation: "remote control operation", category: "Haushaltstechnik" },

  // Gartenbau (vertieft)
  { word: "Bodenbeschaffenheit", article: "die", translation: "soil condition", category: "Gartenbau (vertieft)" },
  { word: "Pflanzenveredelung", article: "die", translation: "plant grafting", category: "Gartenbau (vertieft)" },
  { word: "Beetplanung", article: "die", translation: "garden bed planning", category: "Gartenbau (vertieft)" },
  { word: "Rückschnitttechnik", article: "die", translation: "pruning technique", category: "Gartenbau (vertieft)" },
  { word: "Kompostierung", article: "die", translation: "composting", category: "Gartenbau (vertieft)" },
  { word: "Schädlingsbefall", article: "der", translation: "pest infestation", category: "Gartenbau (vertieft)" },

  // Heimwerken
  { word: "Werkzeugkoffer", article: "der", translation: "toolbox", category: "Heimwerken" },
  { word: "Dübelbohrung", article: "die", translation: "drilling for a wall plug", category: "Heimwerken" },
  { word: "Wandverkleidung", article: "die", translation: "wall cladding", category: "Heimwerken" },
  { word: "Renovierungsaufwand", article: "der", translation: "renovation effort", category: "Heimwerken" },
  { word: "Materialbedarf", article: "der", translation: "material requirement", category: "Heimwerken" },
  { word: "Schraubverbindung", article: "die", translation: "screw connection", category: "Heimwerken" },

  // Zahnmedizin
  { word: "Zahnfleischentzündung", article: "die", translation: "gum inflammation", category: "Zahnmedizin" },
  { word: "Wurzelbehandlung", article: "die", translation: "root canal treatment", category: "Zahnmedizin" },
  { word: "Zahnstein", article: "der", translation: "dental tartar", category: "Zahnmedizin" },
  { word: "Zahnspange", article: "die", translation: "dental braces", category: "Zahnmedizin" },
  { word: "Zahnfüllung", article: "die", translation: "dental filling", category: "Zahnmedizin" },
  { word: "Kieferorthopädie", article: "die", translation: "orthodontics", category: "Zahnmedizin" },
  { word: "Zahnersatz", article: "der", translation: "dental prosthesis", category: "Zahnmedizin" },

  // Augenheilkunde
  { word: "Sehschärfe", article: "die", translation: "visual acuity", category: "Augenheilkunde" },
  { word: "Netzhautablösung", article: "die", translation: "retinal detachment", category: "Augenheilkunde" },
  { word: "Fehlsichtigkeit", article: "die", translation: "visual impairment", category: "Augenheilkunde" },
  { word: "Augeninnendruck", article: "der", translation: "intraocular pressure", category: "Augenheilkunde" },
  { word: "Hornhautverkrümmung", article: "die", translation: "astigmatism", category: "Augenheilkunde" },
  { word: "Sehnervschädigung", article: "die", translation: "optic nerve damage", category: "Augenheilkunde" },

  // HNO-Heilkunde
  { word: "Hörschädigung", article: "die", translation: "hearing impairment", category: "HNO-Heilkunde" },
  { word: "Mittelohrentzündung", article: "die", translation: "middle ear infection", category: "HNO-Heilkunde" },
  { word: "Gleichgewichtsstörung", article: "die", translation: "balance disorder", category: "HNO-Heilkunde" },
  { word: "Stimmbandentzündung", article: "die", translation: "vocal cord inflammation", category: "HNO-Heilkunde" },
  { word: "Nasennebenhöhlenentzündung", article: "die", translation: "sinusitis", category: "HNO-Heilkunde" },
  { word: "Hörgerät", article: "das", translation: "hearing aid", category: "HNO-Heilkunde" },

  // Physiotherapie (vertieft)
  { word: "Gelenkmobilisation", article: "die", translation: "joint mobilization", category: "Physiotherapie (vertieft)" },
  { word: "Rumpfstabilisation", article: "die", translation: "core stabilization", category: "Physiotherapie (vertieft)" },
  { word: "Bewegungsübung", article: "die", translation: "movement exercise", category: "Physiotherapie (vertieft)" },
  { word: "Haltungskorrektur", article: "die", translation: "posture correction", category: "Physiotherapie (vertieft)" },
  { word: "Dehnungsübung", article: "die", translation: "stretching exercise", category: "Physiotherapie (vertieft)" },
  { word: "Reizstrombehandlung", article: "die", translation: "electrical stimulation therapy", category: "Physiotherapie (vertieft)" },

  // Bankwesen
  { word: "Kontoführungsgebühr", article: "die", translation: "account management fee", category: "Bankwesen" },
  { word: "Kreditlinie", article: "die", translation: "credit line", category: "Bankwesen" },
  { word: "Überweisungsauftrag", article: "der", translation: "transfer order", category: "Bankwesen" },
  { word: "Sollzins", article: "der", translation: "debit interest rate", category: "Bankwesen" },
  { word: "Kontoauszug", article: "der", translation: "bank statement", category: "Bankwesen" },
  { word: "Bonitätsprüfung", article: "die", translation: "creditworthiness check", category: "Bankwesen" },
  { word: "Bankvollmacht", article: "die", translation: "bank power of attorney", category: "Bankwesen" },

  // Angeln
  { word: "Angelrute", article: "die", translation: "fishing rod", category: "Angeln" },
  { word: "Köderauswahl", article: "die", translation: "bait selection", category: "Angeln" },
  { word: "Fangquote", article: "die", translation: "catch quota", category: "Angeln" },
  { word: "Schonzeit", article: "die", translation: "closed season", category: "Angeln" },
  { word: "Angelschein", article: "der", translation: "fishing license", category: "Angeln" },
  { word: "Fischbestand", article: "der", translation: "fish stock", category: "Angeln" },

  // Jagdwesen
  { word: "Jagdrevier", article: "das", translation: "hunting ground", category: "Jagdwesen" },
  { word: "Wildbestand", article: "der", translation: "game population", category: "Jagdwesen" },
  { word: "Jagdschein", article: "der", translation: "hunting license", category: "Jagdwesen" },
  { word: "Treibjagd", article: "die", translation: "battue hunt", category: "Jagdwesen" },
  { word: "Wilderei", article: "die", translation: "poaching", category: "Jagdwesen" },
  { word: "Jagdhund", article: "der", translation: "hunting dog", category: "Jagdwesen" },

  // Sammelleidenschaft
  { word: "Sammlerstück", article: "das", translation: "collector's item", category: "Sammelleidenschaft" },
  { word: "Echtheitszertifikat", article: "das", translation: "certificate of authenticity", category: "Sammelleidenschaft" },
  { word: "Wertsteigerung", article: "die", translation: "increase in value", category: "Sammelleidenschaft" },
  { word: "Erhaltungszustand", article: "der", translation: "state of preservation", category: "Sammelleidenschaft" },
  { word: "Sammlerwert", article: "der", translation: "collector value", category: "Sammelleidenschaft" },
  { word: "Raritätenwert", article: "der", translation: "rarity value", category: "Sammelleidenschaft" },

  // Bahnverkehr
  { word: "Schienennetz", article: "das", translation: "rail network", category: "Bahnverkehr" },
  { word: "Fahrplanänderung", article: "die", translation: "timetable change", category: "Bahnverkehr" },
  { word: "Gleisanlage", article: "die", translation: "track system", category: "Bahnverkehr" },
  { word: "Bahnsteigkante", article: "die", translation: "platform edge", category: "Bahnverkehr" },
  { word: "Zugverspätung", article: "die", translation: "train delay", category: "Bahnverkehr" },
  { word: "Streckenausbau", article: "der", translation: "rail line expansion", category: "Bahnverkehr" },
  { word: "Signalanlage", article: "die", translation: "signaling system", category: "Bahnverkehr" },

  // Straßenverkehr (vertieft)
  { word: "Verkehrsdichte", article: "die", translation: "traffic density", category: "Straßenverkehr (vertieft)" },
  { word: "Ausweichmanöver", article: "das", translation: "evasive maneuver", category: "Straßenverkehr (vertieft)" },
  { word: "Vorfahrtsregel", article: "die", translation: "right-of-way rule", category: "Straßenverkehr (vertieft)" },
  { word: "Unfallschwerpunkt", article: "der", translation: "accident black spot", category: "Straßenverkehr (vertieft)" },
  { word: "Tempolimit", article: "das", translation: "speed limit", category: "Straßenverkehr (vertieft)" },
  { word: "Verkehrsleitsystem", article: "das", translation: "traffic management system", category: "Straßenverkehr (vertieft)" },

  // Vertragsrecht (vertieft)
  { word: "Kaufvertragsklausel", article: "die", translation: "purchase contract clause", category: "Vertragsrecht (vertieft)" },
  { word: "Nachbesserungspflicht", article: "die", translation: "obligation to remedy defects", category: "Vertragsrecht (vertieft)" },
  { word: "Kündigungsklausel", article: "die", translation: "termination clause", category: "Vertragsrecht (vertieft)" },
  { word: "Gewährleistungsanspruch", article: "der", translation: "warranty claim", category: "Vertragsrecht (vertieft)" },
  { word: "Vertragsauflösung", article: "die", translation: "contract dissolution", category: "Vertragsrecht (vertieft)" },
  { word: "Nebenabrede", article: "die", translation: "side agreement", category: "Vertragsrecht (vertieft)" },
  { word: "Vertragsstörung", article: "die", translation: "breach/disruption of contract", category: "Vertragsrecht (vertieft)" },
  { word: "Vertragsverstoß", article: "der", translation: "breach of contract", category: "Vertragsrecht (vertieft)" },

  // Kreditwesen
  { word: "Immobiliendarlehen", article: "das", translation: "mortgage loan", category: "Kreditwesen" },
  { word: "Tilgungsrate", article: "die", translation: "repayment installment", category: "Kreditwesen" },
  { word: "Zinsbindung", article: "die", translation: "interest rate fixing period", category: "Kreditwesen" },
  { word: "Kreditausfall", article: "der", translation: "loan default", category: "Kreditwesen" },
  { word: "Beleihungswert", article: "der", translation: "mortgage lending value", category: "Kreditwesen" },
  { word: "Restschuld", article: "die", translation: "remaining debt", category: "Kreditwesen" },
  { word: "Bürgschaftsvertrag", article: "der", translation: "guarantee contract", category: "Kreditwesen" },

  // Wahlsystem
  { word: "Wahlmanipulation", article: "die", translation: "election manipulation", category: "Wahlsystem" },
  { word: "Stimmenauszählung", article: "die", translation: "vote counting", category: "Wahlsystem" },
  { word: "Wahlkreisgrenze", article: "die", translation: "constituency boundary", category: "Wahlsystem" },
  { word: "Briefwahlunterlagen", article: "die", translation: "postal voting documents", category: "Wahlsystem" },
  { word: "Wahlprüfung", article: "die", translation: "election review", category: "Wahlsystem" },
  { word: "Wahlfälschung", article: "die", translation: "election fraud", category: "Wahlsystem" },
  { word: "Stimmenthaltung", article: "die", translation: "abstention", category: "Wahlsystem" },

  // Demografie
  { word: "Bevölkerungsstatistik", article: "die", translation: "population statistics", category: "Demografie" },
  { word: "Geburtendefizit", article: "das", translation: "birth deficit", category: "Demografie" },
  { word: "Lebenserwartungsanstieg", article: "der", translation: "rise in life expectancy", category: "Demografie" },
  { word: "Geburtenüberschuss", article: "der", translation: "birth surplus", category: "Demografie" },
  { word: "Bevölkerungsschwund", article: "der", translation: "population decline", category: "Demografie" },
  { word: "Zuwanderungsrate", article: "die", translation: "immigration rate", category: "Demografie" },
  { word: "Erwerbsquote", article: "die", translation: "employment rate", category: "Demografie" },

  // Dachhandwerk
  { word: "Dachdeckung", article: "die", translation: "roofing", category: "Dachhandwerk" },
  { word: "Dachrinne", article: "die", translation: "gutter", category: "Dachhandwerk" },
  { word: "Dämmschicht", article: "die", translation: "insulation layer", category: "Dachhandwerk" },
  { word: "Dachstuhl", article: "der", translation: "roof truss", category: "Dachhandwerk" },
  { word: "Ziegelverlegung", article: "die", translation: "tile laying", category: "Dachhandwerk" },
  { word: "Dachneigung", article: "die", translation: "roof pitch", category: "Dachhandwerk" },

  // Elektroinstallation
  { word: "Kabelverlegung", article: "die", translation: "cable laying", category: "Elektroinstallation" },
  { word: "Sicherungskasten", article: "der", translation: "fuse box", category: "Elektroinstallation" },
  { word: "Steckdosenanschluss", article: "der", translation: "outlet connection", category: "Elektroinstallation" },
  { word: "Erdungsanlage", article: "die", translation: "grounding system", category: "Elektroinstallation" },
  { word: "Stromlaufplan", article: "der", translation: "circuit diagram", category: "Elektroinstallation" },
  { word: "Leitungsschutz", article: "der", translation: "cable protection", category: "Elektroinstallation" },

  // Sanitärtechnik
  { word: "Rohrverlegung", article: "die", translation: "pipe laying", category: "Sanitärtechnik" },
  { word: "Abflussverstopfung", article: "die", translation: "drain blockage", category: "Sanitärtechnik" },
  { word: "Warmwasserbereitung", article: "die", translation: "hot water preparation", category: "Sanitärtechnik" },
  { word: "Heizungsanlage", article: "die", translation: "heating system", category: "Sanitärtechnik" },
  { word: "Wasserdruckprüfung", article: "die", translation: "water pressure test", category: "Sanitärtechnik" },
  { word: "Rohrdurchmesser", article: "der", translation: "pipe diameter", category: "Sanitärtechnik" },

  // Unterhaltungselektronik
  { word: "Bildschirmauflösung", article: "die", translation: "screen resolution", category: "Unterhaltungselektronik" },
  { word: "Akkulaufzeit", article: "die", translation: "battery life", category: "Unterhaltungselektronik" },
  { word: "Kopfhörerbuchse", article: "die", translation: "headphone jack", category: "Unterhaltungselektronik" },
  { word: "Prozessorleistung", article: "die", translation: "processor performance", category: "Unterhaltungselektronik" },
  { word: "Ladegeschwindigkeit", article: "die", translation: "charging speed", category: "Unterhaltungselektronik" },
  { word: "Anschlussbuchse", article: "die", translation: "connection port", category: "Unterhaltungselektronik" },
  { word: "Bildwiederholrate", article: "die", translation: "refresh rate", category: "Unterhaltungselektronik" },

  // Innenausbau
  { word: "Innenausbauplanung", article: "die", translation: "interior fit-out planning", category: "Innenausbau" },
  { word: "Bodenbelag", article: "der", translation: "flooring", category: "Innenausbau" },
  { word: "Deckenverkleidung", article: "die", translation: "ceiling cladding", category: "Innenausbau" },
  { word: "Türzargeneinbau", article: "der", translation: "door frame installation", category: "Innenausbau" },
  { word: "Trockenbauwand", article: "die", translation: "drywall partition", category: "Innenausbau" },
  { word: "Estrichverlegung", article: "die", translation: "screed laying", category: "Innenausbau" },

  // Archäologie (vertieft)
  { word: "Ausgrabungsschicht", article: "die", translation: "excavation layer", category: "Archäologie (vertieft)" },
  { word: "Fundstückkatalogisierung", article: "die", translation: "artifact cataloging", category: "Archäologie (vertieft)" },
  { word: "Datierungsmethode", article: "die", translation: "dating method", category: "Archäologie (vertieft)" },
  { word: "Bodenradarmessung", article: "die", translation: "ground-penetrating radar survey", category: "Archäologie (vertieft)" },
  { word: "Fundschichtabfolge", article: "die", translation: "stratigraphic sequence", category: "Archäologie (vertieft)" },
  { word: "Ruinenkomplex", article: "der", translation: "ruin complex", category: "Archäologie (vertieft)" },

  // Religionswissenschaft
  { word: "Glaubensspaltung", article: "die", translation: "religious schism", category: "Religionswissenschaft" },
  { word: "Ritualvorschrift", article: "die", translation: "ritual prescription", category: "Religionswissenschaft" },
  { word: "Ordensregel", article: "die", translation: "monastic rule", category: "Religionswissenschaft" },
  { word: "Heilsgeschichte", article: "die", translation: "salvation history", category: "Religionswissenschaft" },
  { word: "Erlösungsvorstellung", article: "die", translation: "concept of salvation", category: "Religionswissenschaft" },
  { word: "Pilgerreise", article: "die", translation: "pilgrimage", category: "Religionswissenschaft" },
  { word: "Religionsgründer", article: "der", translation: "founder of a religion", category: "Religionswissenschaft" },

  // Logik (vertieft)
  { word: "Deduktionsschluss", article: "der", translation: "deductive inference", category: "Logik (vertieft)" },
  { word: "Induktionsschluss", article: "der", translation: "inductive inference", category: "Logik (vertieft)" },
  { word: "Prämissensatz", article: "der", translation: "set of premises", category: "Logik (vertieft)" },
  { word: "Beweisschritt", article: "der", translation: "proof step", category: "Logik (vertieft)" },
  { word: "Aussagenverknüpfung", article: "die", translation: "logical connective", category: "Logik (vertieft)" },
  { word: "Analogieschluss", article: "der", translation: "argument by analogy", category: "Logik (vertieft)" },

  // Innovationsforschung
  { word: "Erfindungsprozess", article: "der", translation: "invention process", category: "Innovationsforschung" },
  { word: "Ideenskizze", article: "die", translation: "concept sketch", category: "Innovationsforschung" },
  { word: "Innovationsgrad", article: "der", translation: "degree of innovation", category: "Innovationsforschung" },
  { word: "Prototypenentwicklung", article: "die", translation: "prototype development", category: "Innovationsforschung" },
  { word: "Markttauglichkeit", article: "die", translation: "market readiness", category: "Innovationsforschung" },
  { word: "Innovationsförderung", article: "die", translation: "innovation promotion", category: "Innovationsforschung" },

  // Konzertveranstaltung
  { word: "Bühnenlicht", article: "das", translation: "stage lighting", category: "Konzertveranstaltung" },
  { word: "Soundcheck", article: "der", translation: "sound check", category: "Konzertveranstaltung" },
  { word: "Backstagebereich", article: "der", translation: "backstage area", category: "Konzertveranstaltung" },
  { word: "Konzertkarte", article: "die", translation: "concert ticket", category: "Konzertveranstaltung" },
  { word: "Zugabe", article: "die", translation: "encore", category: "Konzertveranstaltung" },
  { word: "Tourneeplanung", article: "die", translation: "tour planning", category: "Konzertveranstaltung" },
  { word: "Bandbesetzung", article: "die", translation: "band lineup", category: "Konzertveranstaltung" },

  // Bibliothekswesen
  { word: "Bibliotheksbestand", article: "der", translation: "library holdings", category: "Bibliothekswesen" },
  { word: "Ausleihfrist", article: "die", translation: "loan period", category: "Bibliothekswesen" },
  { word: "Katalogisierung", article: "die", translation: "cataloging", category: "Bibliothekswesen" },
  { word: "Signaturenordnung", article: "die", translation: "call number system", category: "Bibliothekswesen" },
  { word: "Archivbestand", article: "der", translation: "archive holdings", category: "Bibliothekswesen" },
  { word: "Digitalisierungsprojekt", article: "das", translation: "digitization project", category: "Bibliothekswesen" },

  // Zirkuswesen
  { word: "Zirkusartistik", article: "die", translation: "circus artistry", category: "Zirkuswesen" },
  { word: "Trapezakt", article: "der", translation: "trapeze act", category: "Zirkuswesen" },
  { word: "Manegenauftritt", article: "der", translation: "ring performance", category: "Zirkuswesen" },
  { word: "Jonglierkunst", article: "die", translation: "art of juggling", category: "Zirkuswesen" },
  { word: "Zirkuszelt", article: "das", translation: "circus tent", category: "Zirkuswesen" },

  // Freizeitpark
  { word: "Freizeitparkattraktion", article: "die", translation: "amusement park attraction", category: "Freizeitpark" },
  { word: "Wartezeitmanagement", article: "das", translation: "queue time management", category: "Freizeitpark" },
  { word: "Fahrgeschäftsicherheit", article: "die", translation: "ride safety", category: "Freizeitpark" },
  { word: "Besucherandrang", article: "der", translation: "visitor rush", category: "Freizeitpark" },
  { word: "Themenbereich", article: "der", translation: "theme area", category: "Freizeitpark" },

  // Brauwesen
  { word: "Braukessel", article: "der", translation: "brewing kettle", category: "Brauwesen" },
  { word: "Hopfengabe", article: "die", translation: "hop addition", category: "Brauwesen" },
  { word: "Malzschrot", article: "das", translation: "crushed malt", category: "Brauwesen" },
  { word: "Gärtank", article: "der", translation: "fermentation tank", category: "Brauwesen" },
  { word: "Brauverfahren", article: "das", translation: "brewing process", category: "Brauwesen" },
  { word: "Reifungszeit", article: "die", translation: "maturation time", category: "Brauwesen" },

  // Schmuckhandwerk
  { word: "Edelsteinschliff", article: "der", translation: "gemstone cut", category: "Schmuckhandwerk" },
  { word: "Goldschmiedearbeit", article: "die", translation: "goldsmithing work", category: "Schmuckhandwerk" },
  { word: "Fassungstechnik", article: "die", translation: "setting technique", category: "Schmuckhandwerk" },
  { word: "Legierungsgehalt", article: "der", translation: "alloy content", category: "Schmuckhandwerk" },
  { word: "Gravurmuster", article: "das", translation: "engraving pattern", category: "Schmuckhandwerk" },

  // Uhrmacherei
  { word: "Uhrwerkmechanik", article: "die", translation: "watch movement mechanics", category: "Uhrmacherei" },
  { word: "Ganggenauigkeit", article: "die", translation: "timekeeping accuracy", category: "Uhrmacherei" },
  { word: "Zifferblattgestaltung", article: "die", translation: "dial design", category: "Uhrmacherei" },
  { word: "Federzugkraft", article: "die", translation: "spring tension", category: "Uhrmacherei" },
  { word: "Uhrgehäuse", article: "das", translation: "watch case", category: "Uhrmacherei" },

  // Sportwissenschaft (vertieft)
  { word: "Wettkampfrichter", article: "der", translation: "competition referee", category: "Sportwissenschaft (vertieft)" },
  { word: "Bewegungsanalyse", article: "die", translation: "movement analysis", category: "Sportwissenschaft (vertieft)" },
  { word: "Trainingsperiodisierung", article: "die", translation: "training periodization", category: "Sportwissenschaft (vertieft)" },
  { word: "Ausdauerleistung", article: "die", translation: "endurance performance", category: "Sportwissenschaft (vertieft)" },
  { word: "Regenerationsmethode", article: "die", translation: "recovery method", category: "Sportwissenschaft (vertieft)" },
  { word: "Taktikschulung", article: "die", translation: "tactical training", category: "Sportwissenschaft (vertieft)" },

  // Schreinerhandwerk
  { word: "Holzverbindung", article: "die", translation: "wood joint", category: "Schreinerhandwerk" },
  { word: "Hobelbank", article: "die", translation: "workbench", category: "Schreinerhandwerk" },
  { word: "Furnierarbeit", article: "die", translation: "veneer work", category: "Schreinerhandwerk" },
  { word: "Holzmaserung", article: "die", translation: "wood grain", category: "Schreinerhandwerk" },
  { word: "Schleiftechnik", article: "die", translation: "sanding technique", category: "Schreinerhandwerk" },
  { word: "Zapfenverbindung", article: "die", translation: "mortise and tenon joint", category: "Schreinerhandwerk" },

  // Schmiedehandwerk
  { word: "Schmiedefeuer", article: "das", translation: "forge fire", category: "Schmiedehandwerk" },
  { word: "Amboss", article: "der", translation: "anvil", category: "Schmiedehandwerk" },
  { word: "Härtungsverfahren", article: "das", translation: "hardening process", category: "Schmiedehandwerk" },
  { word: "Metallverformung", article: "die", translation: "metal shaping", category: "Schmiedehandwerk" },
  { word: "Glühtemperatur", article: "die", translation: "annealing temperature", category: "Schmiedehandwerk" },

  // Verpackungsindustrie
  { word: "Verpackungsdesign", article: "das", translation: "packaging design", category: "Verpackungsindustrie" },
  { word: "Materialstärke", article: "die", translation: "material thickness", category: "Verpackungsindustrie" },
  { word: "Versiegelungsverfahren", article: "das", translation: "sealing method", category: "Verpackungsindustrie" },
  { word: "Transportverpackung", article: "die", translation: "shipping packaging", category: "Verpackungsindustrie" },
  { word: "Verpackungsgröße", article: "die", translation: "packaging size", category: "Verpackungsindustrie" },

  // Druckindustrie
  { word: "Druckauflage", article: "die", translation: "print run", category: "Druckindustrie" },
  { word: "Farbtrennung", article: "die", translation: "color separation", category: "Druckindustrie" },
  { word: "Druckplattenherstellung", article: "die", translation: "printing plate production", category: "Druckindustrie" },
  { word: "Papierqualität", article: "die", translation: "paper quality", category: "Druckindustrie" },
  { word: "Drucktechnik", article: "die", translation: "printing technique", category: "Druckindustrie" },

  // Entwicklungspsychologie (vertieft)
  { word: "Entwicklungsmeilenstein", article: "der", translation: "developmental milestone", category: "Entwicklungspsychologie (vertieft)" },
  { word: "Bindungsverhalten", article: "das", translation: "attachment behavior", category: "Entwicklungspsychologie (vertieft)" },
  { word: "Spracherwerbsphase", article: "die", translation: "language acquisition phase", category: "Entwicklungspsychologie (vertieft)" },
  { word: "Sozialisationsprozess", article: "der", translation: "socialization process", category: "Entwicklungspsychologie (vertieft)" },
  { word: "Reifungsprozess", article: "der", translation: "maturation process", category: "Entwicklungspsychologie (vertieft)" },

  // Notfallmedizin
  { word: "Wiederbelebungsmaßnahme", article: "die", translation: "resuscitation measure", category: "Notfallmedizin" },
  { word: "Rettungseinsatz", article: "der", translation: "emergency response operation", category: "Notfallmedizin" },
  { word: "Erstversorgung", article: "die", translation: "first response care", category: "Notfallmedizin" },
  { word: "Triagesystem", article: "das", translation: "triage system", category: "Notfallmedizin" },
  { word: "Schockzustand", article: "der", translation: "state of shock", category: "Notfallmedizin" },
  { word: "Reanimationsteam", article: "das", translation: "resuscitation team", category: "Notfallmedizin" },
  { word: "Rettungswagen", article: "der", translation: "ambulance", category: "Notfallmedizin" },

  // Labormedizin
  { word: "Blutprobenanalyse", article: "die", translation: "blood sample analysis", category: "Labormedizin" },
  { word: "Laborbefund", article: "der", translation: "lab result", category: "Labormedizin" },
  { word: "Probenentnahme", article: "die", translation: "sample collection", category: "Labormedizin" },
  { word: "Referenzwert", article: "der", translation: "reference value", category: "Labormedizin" },
  { word: "Analysegerät", article: "das", translation: "analysis device", category: "Labormedizin" },
  { word: "Testverfahren", article: "das", translation: "testing procedure", category: "Labormedizin" },

  // Forensik
  { word: "Tatortuntersuchung", article: "die", translation: "crime scene investigation", category: "Forensik" },
  { word: "Fasernachweis", article: "der", translation: "fiber evidence", category: "Forensik" },
  { word: "Fingerabdruckanalyse", article: "die", translation: "fingerprint analysis", category: "Forensik" },
  { word: "Obduktionsbefund", article: "der", translation: "autopsy finding", category: "Forensik" },
  { word: "DNA-Abgleich", article: "der", translation: "DNA matching", category: "Forensik" },
  { word: "Indizienkette", article: "die", translation: "chain of circumstantial evidence", category: "Forensik" },
  { word: "Tathergangsrekonstruktion", article: "die", translation: "crime reconstruction", category: "Forensik" },

  // Pharmakologie (vertieft)
  { word: "Wirkstoffdosierung", article: "die", translation: "active ingredient dosage", category: "Pharmakologie (vertieft)" },
  { word: "Nebenwirkungsprofil", article: "das", translation: "side effect profile", category: "Pharmakologie (vertieft)" },
  { word: "Wechselwirkungsrisiko", article: "das", translation: "interaction risk", category: "Pharmakologie (vertieft)" },
  { word: "Dosierungsanleitung", article: "die", translation: "dosage instructions", category: "Pharmakologie (vertieft)" },
  { word: "Wirkstoffforschung", article: "die", translation: "active ingredient research", category: "Pharmakologie (vertieft)" },
  { word: "Verträglichkeitsprüfung", article: "die", translation: "tolerability testing", category: "Pharmakologie (vertieft)" },

  // Kriminologie (vertieft)
  { word: "Tätermotiv", article: "das", translation: "offender's motive", category: "Kriminologie (vertieft)" },
  { word: "Rückfallgefahr", article: "die", translation: "risk of reoffending", category: "Kriminologie (vertieft)" },
  { word: "Straftatbestand", article: "der", translation: "criminal offense element", category: "Kriminologie (vertieft)" },
  { word: "Verurteilungsquote", article: "die", translation: "conviction rate", category: "Kriminologie (vertieft)" },
  { word: "Opferentschädigung", article: "die", translation: "victim compensation", category: "Kriminologie (vertieft)" },
  { word: "Bewährungsauflage", article: "die", translation: "probation condition", category: "Kriminologie (vertieft)" },

  // Physiologie (vertieft)
  { word: "Zellstoffwechsel", article: "der", translation: "cellular metabolism", category: "Physiologie (vertieft)" },
  { word: "Hormonausschüttung", article: "die", translation: "hormone release", category: "Physiologie (vertieft)" },
  { word: "Muskelkontraktion", article: "die", translation: "muscle contraction", category: "Physiologie (vertieft)" },
  { word: "Verdauungsprozess", article: "der", translation: "digestive process", category: "Physiologie (vertieft)" },
  { word: "Atmungsfrequenz", article: "die", translation: "respiratory rate", category: "Physiologie (vertieft)" },
  { word: "Reflexreaktion", article: "die", translation: "reflex reaction", category: "Physiologie (vertieft)" },
  { word: "Körpertemperaturregelung", article: "die", translation: "body temperature regulation", category: "Physiologie (vertieft)" },

  // Botanik (vertieft)
  { word: "Blattstruktur", article: "die", translation: "leaf structure", category: "Botanik (vertieft)" },
  { word: "Wurzelsystem", article: "das", translation: "root system", category: "Botanik (vertieft)" },
  { word: "Bestäubungsvorgang", article: "der", translation: "pollination process", category: "Botanik (vertieft)" },
  { word: "Samenverbreitung", article: "die", translation: "seed dispersal", category: "Botanik (vertieft)" },
  { word: "Pflanzenwachstum", article: "das", translation: "plant growth", category: "Botanik (vertieft)" },
  { word: "Blütenaufbau", article: "der", translation: "flower structure", category: "Botanik (vertieft)" },
  { word: "Chlorophyllgehalt", article: "der", translation: "chlorophyll content", category: "Botanik (vertieft)" },

  // Zoologie (vertieft)
  { word: "Tierverhalten", article: "das", translation: "animal behavior", category: "Zoologie (vertieft)" },
  { word: "Revierverhalten", article: "das", translation: "territorial behavior", category: "Zoologie (vertieft)" },
  { word: "Paarungsritual", article: "das", translation: "mating ritual", category: "Zoologie (vertieft)" },
  { word: "Beutefangverhalten", article: "das", translation: "predatory behavior", category: "Zoologie (vertieft)" },
  { word: "Wanderverhalten", article: "das", translation: "migratory behavior", category: "Zoologie (vertieft)" },
  { word: "Nestbauverhalten", article: "das", translation: "nest-building behavior", category: "Zoologie (vertieft)" },
  { word: "Rudelstruktur", article: "die", translation: "pack structure", category: "Zoologie (vertieft)" },

  // Gewürzkunde
  { word: "Gewürzmischung", article: "die", translation: "spice blend", category: "Gewürzkunde" },
  { word: "Schärfegrad", article: "der", translation: "level of spiciness", category: "Gewürzkunde" },
  { word: "Aromaintensität", article: "die", translation: "aroma intensity", category: "Gewürzkunde" },
  { word: "Kräuteranbau", article: "der", translation: "herb cultivation", category: "Gewürzkunde" },
  { word: "Trocknungsverfahren", article: "das", translation: "drying method", category: "Gewürzkunde" },
  { word: "Würzsauce", article: "die", translation: "seasoning sauce", category: "Gewürzkunde" },

  // Möbeldesign
  { word: "Möbelstil", article: "der", translation: "furniture style", category: "Möbeldesign" },
  { word: "Sitzkomfort", article: "der", translation: "seating comfort", category: "Möbeldesign" },
  { word: "Holzverarbeitung", article: "die", translation: "woodworking", category: "Möbeldesign" },
  { word: "Polsterung", article: "die", translation: "upholstery", category: "Möbeldesign" },
  { word: "Beschlagtechnik", article: "die", translation: "hardware/fittings technique", category: "Möbeldesign" },
  { word: "Stauraumlösung", article: "die", translation: "storage solution", category: "Möbeldesign" },

  // Ernährungswissenschaft (vertieft)
  { word: "Nährstoffzusammensetzung", article: "die", translation: "nutrient composition", category: "Ernährungswissenschaft (vertieft)" },
  { word: "Verdauungsgeschwindigkeit", article: "die", translation: "digestion speed", category: "Ernährungswissenschaft (vertieft)" },
  { word: "Portionsgröße", article: "die", translation: "portion size", category: "Ernährungswissenschaft (vertieft)" },
  { word: "Stoffwechselrate", article: "die", translation: "metabolic rate", category: "Ernährungswissenschaft (vertieft)" },
  { word: "Ballaststoffanteil", article: "der", translation: "fiber content", category: "Ernährungswissenschaft (vertieft)" },
  { word: "Verzehrempfehlung", article: "die", translation: "consumption recommendation", category: "Ernährungswissenschaft (vertieft)" },
  { word: "Kalorienverbrauch", article: "der", translation: "calorie expenditure", category: "Ernährungswissenschaft (vertieft)" },

  // Lebensmittelsicherheit
  { word: "Zusatzstoffkennzeichnung", article: "die", translation: "additive labeling", category: "Lebensmittelsicherheit" },
  { word: "Hygienestandard", article: "der", translation: "hygiene standard", category: "Lebensmittelsicherheit" },
  { word: "Kühlkette", article: "die", translation: "cold chain", category: "Lebensmittelsicherheit" },
  { word: "Haltbarkeitsdatum", article: "das", translation: "expiration date", category: "Lebensmittelsicherheit" },
  { word: "Rückrufaktion", article: "die", translation: "product recall", category: "Lebensmittelsicherheit" },
  { word: "Keimbelastung", article: "die", translation: "microbial contamination", category: "Lebensmittelsicherheit" },
  { word: "Lebensmittelkontrolle", article: "die", translation: "food inspection", category: "Lebensmittelsicherheit" },

  // Achtsamkeit & Wohlbefinden (vertieft)
  { word: "Fitnessprogramm", article: "das", translation: "fitness program", category: "Achtsamkeit & Wohlbefinden (vertieft)" },
  { word: "Entspannungstechnik", article: "die", translation: "relaxation technique", category: "Achtsamkeit & Wohlbefinden (vertieft)" },
  { word: "Atemübung", article: "die", translation: "breathing exercise", category: "Achtsamkeit & Wohlbefinden (vertieft)" },
  { word: "Schlafqualität", article: "die", translation: "sleep quality", category: "Achtsamkeit & Wohlbefinden (vertieft)" },
  { word: "Stressbewältigungsstrategie", article: "die", translation: "stress-coping strategy", category: "Achtsamkeit & Wohlbefinden (vertieft)" },
  { word: "Ruhepuls", article: "der", translation: "resting heart rate", category: "Achtsamkeit & Wohlbefinden (vertieft)" },

  // Zwischenmenschliche Beziehungen (vertieft2)
  { word: "Zärtlichkeitsbedürfnis", article: "das", translation: "need for affection", category: "Zwischenmenschliche Beziehungen (vertieft2)" },
  { word: "Eifersuchtsgefühl", article: "das", translation: "feeling of jealousy", category: "Zwischenmenschliche Beziehungen (vertieft2)" },
  { word: "Kommunikationsmuster", article: "das", translation: "communication pattern", category: "Zwischenmenschliche Beziehungen (vertieft2)" },
  { word: "Versöhnungsgeste", article: "die", translation: "gesture of reconciliation", category: "Zwischenmenschliche Beziehungen (vertieft2)" },
  { word: "Vertrautheitsgefühl", article: "das", translation: "sense of familiarity", category: "Zwischenmenschliche Beziehungen (vertieft2)" },
  { word: "Versöhnungsbereitschaft", article: "die", translation: "willingness to reconcile", category: "Zwischenmenschliche Beziehungen (vertieft2)" },

  // Antike Geschichte
  { word: "Herrschaftsdynastie", article: "die", translation: "ruling dynasty", category: "Antike Geschichte" },
  { word: "Sklavenaufstand", article: "der", translation: "slave revolt", category: "Antike Geschichte" },
  { word: "Legionärstruppe", article: "die", translation: "legionary troop", category: "Antike Geschichte" },
  { word: "Tempelanlage", article: "die", translation: "temple complex", category: "Antike Geschichte" },
  { word: "Stadtstaatverfassung", article: "die", translation: "city-state constitution", category: "Antike Geschichte" },
  { word: "Eroberungsfeldzug", article: "der", translation: "conquest campaign", category: "Antike Geschichte" },

  // Mittelalterliche Geschichte
  { word: "Lehnswesen", article: "das", translation: "feudal system", category: "Mittelalterliche Geschichte" },
  { word: "Ritterorden", article: "der", translation: "order of knights", category: "Mittelalterliche Geschichte" },
  { word: "Klostergemeinschaft", article: "die", translation: "monastic community", category: "Mittelalterliche Geschichte" },
  { word: "Zunftordnung", article: "die", translation: "guild regulations", category: "Mittelalterliche Geschichte" },
  { word: "Burgbelagerung", article: "die", translation: "castle siege", category: "Mittelalterliche Geschichte" },
  { word: "Leibeigenschaft", article: "die", translation: "serfdom", category: "Mittelalterliche Geschichte" },

  // Renaissance & Humanismus
  { word: "Weltbürgertum", article: "das", translation: "cosmopolitanism", category: "Renaissance & Humanismus" },
  { word: "Bildungsideal", article: "das", translation: "educational ideal", category: "Renaissance & Humanismus" },
  { word: "Antikenrezeption", article: "die", translation: "reception of antiquity", category: "Renaissance & Humanismus" },
  { word: "Gelehrtenzirkel", article: "der", translation: "circle of scholars", category: "Renaissance & Humanismus" },
  { word: "Buchdruckerkunst", article: "die", translation: "art of printing", category: "Renaissance & Humanismus" },

  // Industrialisierung (vertieft)
  { word: "Fabrikarbeiterschaft", article: "die", translation: "factory workforce", category: "Industrialisierung (vertieft)" },
  { word: "Fließbandarbeit", article: "die", translation: "assembly line work", category: "Industrialisierung (vertieft)" },
  { word: "Maschinensturm", article: "der", translation: "machine-breaking revolt", category: "Industrialisierung (vertieft)" },
  { word: "Fabrikordnung", article: "die", translation: "factory regulations", category: "Industrialisierung (vertieft)" },
  { word: "Wanderarbeiterschaft", article: "die", translation: "migrant workforce", category: "Industrialisierung (vertieft)" },
  { word: "Eisenbahnbau", article: "der", translation: "railway construction", category: "Industrialisierung (vertieft)" },

  // Literarische Gattungen
  { word: "Heldenepos", article: "das", translation: "heroic epic", category: "Literarische Gattungen" },
  { word: "Schelmenroman", article: "der", translation: "picaresque novel", category: "Literarische Gattungen" },
  { word: "Bildungsroman", article: "der", translation: "coming-of-age novel", category: "Literarische Gattungen" },
  { word: "Kurzgeschichtenband", article: "der", translation: "short story collection", category: "Literarische Gattungen" },
  { word: "Versdrama", article: "das", translation: "verse drama", category: "Literarische Gattungen" },
  { word: "Briefroman", article: "der", translation: "epistolary novel", category: "Literarische Gattungen" },

  // Malereitechnik
  { word: "Pinselführung", article: "die", translation: "brushwork", category: "Malereitechnik" },
  { word: "Farbauftrag", article: "der", translation: "paint application", category: "Malereitechnik" },
  { word: "Leinwandgrund", article: "der", translation: "canvas ground", category: "Malereitechnik" },
  { word: "Hell-Dunkel-Kontrast", article: "der", translation: "chiaroscuro contrast", category: "Malereitechnik" },
  { word: "Perspektivkonstruktion", article: "die", translation: "perspective construction", category: "Malereitechnik" },
  { word: "Farbmischung", article: "die", translation: "color mixing", category: "Malereitechnik" },

  // Bildhauerei
  { word: "Steinmetzarbeit", article: "die", translation: "stonemasonry work", category: "Bildhauerei" },
  { word: "Gussverfahren", article: "das", translation: "casting process", category: "Bildhauerei" },
  { word: "Materialwahl", article: "die", translation: "choice of material", category: "Bildhauerei" },
  { word: "Reliefarbeit", article: "die", translation: "relief work", category: "Bildhauerei" },
  { word: "Skulpturenpark", article: "der", translation: "sculpture park", category: "Bildhauerei" },

  // Kunstgeschichte (Epochen)
  { word: "Genrebild", article: "das", translation: "genre painting", category: "Kunstgeschichte (Epochen)" },
  { word: "Stillleben", article: "das", translation: "still life", category: "Kunstgeschichte (Epochen)" },
  { word: "Historienmalerei", article: "die", translation: "history painting", category: "Kunstgeschichte (Epochen)" },
  { word: "Selbstbildnis", article: "das", translation: "self-portrait", category: "Kunstgeschichte (Epochen)" },
  { word: "Vanitasmotiv", article: "das", translation: "vanitas motif", category: "Kunstgeschichte (Epochen)" },

  // Filmgenre & Erzähltechnik
  { word: "Kameraschwenk", article: "der", translation: "camera pan", category: "Filmgenre & Erzähltechnik" },
  { word: "Rückblende", article: "die", translation: "flashback", category: "Filmgenre & Erzähltechnik" },
  { word: "Cliffhanger", article: "der", translation: "cliffhanger", category: "Filmgenre & Erzähltechnik" },
  { word: "Erzählwendepunkt", article: "der", translation: "narrative turning point", category: "Filmgenre & Erzähltechnik" },
  { word: "Erzählperspektivwechsel", article: "der", translation: "shift in narrative perspective", category: "Filmgenre & Erzähltechnik" },
  { word: "Auflösungsszene", article: "die", translation: "resolution scene", category: "Filmgenre & Erzähltechnik" },

  // Musikindustrie
  { word: "Songtextzeile", article: "die", translation: "song lyric line", category: "Musikindustrie" },
  { word: "Plattenvertrag", article: "der", translation: "record deal", category: "Musikindustrie" },
  { word: "Tantiemenabrechnung", article: "die", translation: "royalty statement", category: "Musikindustrie" },
  { word: "Musikvertrieb", article: "der", translation: "music distribution", category: "Musikindustrie" },
  { word: "Albumveröffentlichung", article: "die", translation: "album release", category: "Musikindustrie" },
  { word: "Streamingzahl", article: "die", translation: "streaming count", category: "Musikindustrie" },

  // Leichtathletik
  { word: "Streckenrekord", article: "der", translation: "course record", category: "Leichtathletik" },
  { word: "Staffelübergabe", article: "die", translation: "relay handover", category: "Leichtathletik" },
  { word: "Anlaufbeschleunigung", article: "die", translation: "run-up acceleration", category: "Leichtathletik" },
  { word: "Sprungtechnik", article: "die", translation: "jumping technique", category: "Leichtathletik" },
  { word: "Wurfweite", article: "die", translation: "throwing distance", category: "Leichtathletik" },
  { word: "Startblock", article: "der", translation: "starting block", category: "Leichtathletik" },

  // Mannschaftssportarten
  { word: "Torwarttechnik", article: "die", translation: "goalkeeping technique", category: "Mannschaftssportarten" },
  { word: "Abseitsregel", article: "die", translation: "offside rule", category: "Mannschaftssportarten" },
  { word: "Spielzugvariante", article: "die", translation: "play variation", category: "Mannschaftssportarten" },
  { word: "Ballbesitzquote", article: "die", translation: "possession rate", category: "Mannschaftssportarten" },
  { word: "Manndeckung", article: "die", translation: "man-to-man marking", category: "Mannschaftssportarten" },
  { word: "Auswechselspieler", article: "der", translation: "substitute player", category: "Mannschaftssportarten" },

  // Schwimmsport
  { word: "Beckenrand", article: "der", translation: "pool edge", category: "Schwimmsport" },
  { word: "Schwimmtechnik", article: "die", translation: "swimming technique", category: "Schwimmsport" },
  { word: "Wendetechnik", article: "die", translation: "turn technique", category: "Schwimmsport" },
  { word: "Streckenschwimmen", article: "das", translation: "distance swimming", category: "Schwimmsport" },
  { word: "Startsprung", article: "der", translation: "start dive", category: "Schwimmsport" },

  // Wintersport
  { word: "Pistenpräparierung", article: "die", translation: "slope grooming", category: "Wintersport" },
  { word: "Schneequalität", article: "die", translation: "snow quality", category: "Wintersport" },
  { word: "Abfahrtsstrecke", article: "die", translation: "downhill course", category: "Wintersport" },
  { word: "Skibindung", article: "die", translation: "ski binding", category: "Wintersport" },
  { word: "Loipenspur", article: "die", translation: "cross-country ski trail", category: "Wintersport" },
  { word: "Lawinengefahr", article: "die", translation: "avalanche danger", category: "Wintersport" },

  // Einkaufswesen
  { word: "Lieferantenauswahl", article: "die", translation: "supplier selection", category: "Einkaufswesen" },
  { word: "Bestellmenge", article: "die", translation: "order quantity", category: "Einkaufswesen" },
  { word: "Preisverhandlung", article: "die", translation: "price negotiation", category: "Einkaufswesen" },
  { word: "Einkaufsstrategie", article: "die", translation: "purchasing strategy", category: "Einkaufswesen" },
  { word: "Rahmenvertrag", article: "der", translation: "framework agreement", category: "Einkaufswesen" },
  { word: "Bedarfsermittlung", article: "die", translation: "needs assessment", category: "Einkaufswesen" },
  { word: "Ausschreibungsverfahren", article: "das", translation: "tender procedure", category: "Einkaufswesen" },

  // Fertigungstechnik
  { word: "Fertigungsablauf", article: "der", translation: "production sequence", category: "Fertigungstechnik" },
  { word: "Losgröße", article: "die", translation: "batch size", category: "Fertigungstechnik" },
  { word: "Werkstückspannung", article: "die", translation: "workpiece clamping", category: "Fertigungstechnik" },
  { word: "Maschinenauslastung", article: "die", translation: "machine utilization", category: "Fertigungstechnik" },
  { word: "Fertigungstiefe", article: "die", translation: "vertical integration depth", category: "Fertigungstechnik" },
  { word: "Ausschussrate", article: "die", translation: "rejection rate", category: "Fertigungstechnik" },

  // Unternehmensberatung
  { word: "Projektauftrag", article: "der", translation: "project mandate", category: "Unternehmensberatung" },
  { word: "Beratungsleistung", article: "die", translation: "consulting service", category: "Unternehmensberatung" },
  { word: "Umsetzungsplan", article: "der", translation: "implementation plan", category: "Unternehmensberatung" },
  { word: "Ist-Analyse", article: "die", translation: "current-state analysis", category: "Unternehmensberatung" },
  { word: "Handlungsempfehlung", article: "die", translation: "recommendation for action", category: "Unternehmensberatung" },
  { word: "Beratungshonorar", article: "das", translation: "consulting fee", category: "Unternehmensberatung" },

  // IT-Berufe
  { word: "Systemadministration", article: "die", translation: "system administration", category: "IT-Berufe" },
  { word: "Anwendungsentwicklung", article: "die", translation: "application development", category: "IT-Berufe" },
  { word: "Serverwartung", article: "die", translation: "server maintenance", category: "IT-Berufe" },
  { word: "Nutzerbetreuung", article: "die", translation: "user support", category: "IT-Berufe" },
  { word: "Projektdokumentation", article: "die", translation: "project documentation", category: "IT-Berufe" },
  { word: "Schnittstellenentwicklung", article: "die", translation: "interface development", category: "IT-Berufe" },

  // Fahrzeugtechnik (vertieft)
  { word: "Kupplungsbetätigung", article: "die", translation: "clutch operation", category: "Fahrzeugtechnik (vertieft)" },
  { word: "Bremskraftverstärker", article: "der", translation: "brake booster", category: "Fahrzeugtechnik (vertieft)" },
  { word: "Federungssystem", article: "das", translation: "suspension system", category: "Fahrzeugtechnik (vertieft)" },
  { word: "Reifenprofil", article: "das", translation: "tire tread", category: "Fahrzeugtechnik (vertieft)" },
  { word: "Kraftstoffeinspritzung", article: "die", translation: "fuel injection", category: "Fahrzeugtechnik (vertieft)" },
  { word: "Achsvermessung", article: "die", translation: "wheel alignment", category: "Fahrzeugtechnik (vertieft)" },
  { word: "Zündzeitpunkt", article: "der", translation: "ignition timing", category: "Fahrzeugtechnik (vertieft)" },

  // Segelsport
  { word: "Segeltrimm", article: "der", translation: "sail trim", category: "Segelsport" },
  { word: "Kielkonstruktion", article: "die", translation: "keel construction", category: "Segelsport" },
  { word: "Windrichtungsänderung", article: "die", translation: "change in wind direction", category: "Segelsport" },
  { word: "Regattastrecke", article: "die", translation: "regatta course", category: "Segelsport" },
  { word: "Bootsmanöver", article: "das", translation: "boat maneuver", category: "Segelsport" },

  // Reitsport
  { word: "Reitweise", article: "die", translation: "riding style", category: "Reitsport" },
  { word: "Sattelanpassung", article: "die", translation: "saddle fitting", category: "Reitsport" },
  { word: "Zügelführung", article: "die", translation: "rein handling", category: "Reitsport" },
  { word: "Dressurprüfung", article: "die", translation: "dressage test", category: "Reitsport" },
  { word: "Springparcours", article: "der", translation: "show jumping course", category: "Reitsport" },
  { word: "Pferdehaltung", article: "die", translation: "horse keeping", category: "Reitsport" },

  // Ballsportarten (Schläger)
  { word: "Schlagtechnik", article: "die", translation: "stroke technique", category: "Ballsportarten (Schläger)" },
  { word: "Rückhandschlag", article: "der", translation: "backhand stroke", category: "Ballsportarten (Schläger)" },
  { word: "Aufschlagvariante", article: "die", translation: "serve variation", category: "Ballsportarten (Schläger)" },
  { word: "Netzspiel", article: "das", translation: "net play", category: "Ballsportarten (Schläger)" },
  { word: "Ballrotation", article: "die", translation: "ball spin", category: "Ballsportarten (Schläger)" },
  { word: "Satzgewinn", article: "der", translation: "set win", category: "Ballsportarten (Schläger)" },

  // Kampfsport
  { word: "Kampfrichterentscheidung", article: "die", translation: "referee's decision", category: "Kampfsport" },
  { word: "Gürtelgrad", article: "der", translation: "belt rank", category: "Kampfsport" },
  { word: "Falltechnik", article: "die", translation: "falling technique", category: "Kampfsport" },
  { word: "Trainingspartner", article: "der", translation: "training partner", category: "Kampfsport" },
  { word: "Wettkampfgewichtsklasse", article: "die", translation: "competition weight class", category: "Kampfsport" },

  // Geografie (physisch)
  { word: "Gebirgsbildung", article: "die", translation: "mountain formation", category: "Geografie (physisch)" },
  { word: "Flusslauf", article: "der", translation: "river course", category: "Geografie (physisch)" },
  { word: "Küstenlinie", article: "die", translation: "coastline", category: "Geografie (physisch)" },
  { word: "Vegetationszone", article: "die", translation: "vegetation zone", category: "Geografie (physisch)" },
  { word: "Landschaftsform", article: "die", translation: "landscape form", category: "Geografie (physisch)" },
  { word: "Höhenlinie", article: "die", translation: "contour line", category: "Geografie (physisch)" },
  { word: "Talsenke", article: "die", translation: "valley basin", category: "Geografie (physisch)" },

  // Geografie (human)
  { word: "Bevölkerungsverteilung", article: "die", translation: "population distribution", category: "Geografie (human)" },
  { word: "Siedlungsmuster", article: "das", translation: "settlement pattern", category: "Geografie (human)" },
  { word: "Wirtschaftsraum", article: "der", translation: "economic region", category: "Geografie (human)" },
  { word: "Verkehrsknotenpunkt", article: "der", translation: "transport hub", category: "Geografie (human)" },
  { word: "Grenzverlauf", article: "der", translation: "border course", category: "Geografie (human)" },
  { word: "Landnutzung", article: "die", translation: "land use", category: "Geografie (human)" },

  // Metallurgie
  { word: "Legierungsmetall", article: "das", translation: "alloying metal", category: "Metallurgie" },
  { word: "Legierungshärte", article: "die", translation: "alloy hardness", category: "Metallurgie" },
  { word: "Erzverarbeitung", article: "die", translation: "ore processing", category: "Metallurgie" },
  { word: "Gussform", article: "die", translation: "casting mold", category: "Metallurgie" },
  { word: "Metallreinheit", article: "die", translation: "metal purity", category: "Metallurgie" },
  { word: "Walzverfahren", article: "das", translation: "rolling process", category: "Metallurgie" },

  // Glasindustrie
  { word: "Glasherstellung", article: "die", translation: "glass production", category: "Glasindustrie" },
  { word: "Schmelztemperatur", article: "die", translation: "melting temperature", category: "Glasindustrie" },
  { word: "Glasveredelung", article: "die", translation: "glass refinement", category: "Glasindustrie" },
  { word: "Formgebungsverfahren", article: "das", translation: "molding process", category: "Glasindustrie" },
  { word: "Glasdicke", article: "die", translation: "glass thickness", category: "Glasindustrie" },

  // Papierindustrie
  { word: "Papierherstellung", article: "die", translation: "paper manufacturing", category: "Papierindustrie" },
  { word: "Zellstoffgewinnung", article: "die", translation: "pulp extraction", category: "Papierindustrie" },
  { word: "Papierdicke", article: "die", translation: "paper thickness", category: "Papierindustrie" },
  { word: "Recyclingpapier", article: "das", translation: "recycled paper", category: "Papierindustrie" },
  { word: "Papierveredelung", article: "die", translation: "paper finishing", category: "Papierindustrie" },

  // Wetterkunde (vertieft)
  { word: "Wolkenformation", article: "die", translation: "cloud formation", category: "Wetterkunde (vertieft)" },
  { word: "Niederschlagsart", article: "die", translation: "type of precipitation", category: "Wetterkunde (vertieft)" },
  { word: "Luftdruckunterschied", article: "der", translation: "air pressure difference", category: "Wetterkunde (vertieft)" },
  { word: "Wettersatellit", article: "der", translation: "weather satellite", category: "Wetterkunde (vertieft)" },
  { word: "Sturmwarnung", article: "die", translation: "storm warning", category: "Wetterkunde (vertieft)" },
  { word: "Temperaturschwankung", article: "die", translation: "temperature fluctuation", category: "Wetterkunde (vertieft)" },

  // Imkerei
  { word: "Bienenvolk", article: "das", translation: "bee colony", category: "Imkerei" },
  { word: "Honigwabe", article: "die", translation: "honeycomb", category: "Imkerei" },
  { word: "Bienenstock", article: "der", translation: "beehive", category: "Imkerei" },
  { word: "Königinnenzucht", article: "die", translation: "queen bee breeding", category: "Imkerei" },
  { word: "Honigernte", article: "die", translation: "honey harvest", category: "Imkerei" },
  { word: "Bienensterben", article: "das", translation: "bee die-off", category: "Imkerei" },

  // Käsehandwerk
  { word: "Käseherstellung", article: "die", translation: "cheese making", category: "Käsehandwerk" },
  { word: "Käsereifung", article: "die", translation: "cheese aging", category: "Käsehandwerk" },
  { word: "Milchsäurebakterium", article: "das", translation: "lactic acid bacterium", category: "Käsehandwerk" },
  { word: "Käselaib", article: "der", translation: "wheel of cheese", category: "Käsehandwerk" },
  { word: "Rindenbildung", article: "die", translation: "rind formation", category: "Käsehandwerk" },

  // Bäckerhandwerk
  { word: "Brotteig", article: "der", translation: "bread dough", category: "Bäckerhandwerk" },
  { word: "Backtemperatur", article: "die", translation: "baking temperature", category: "Bäckerhandwerk" },
  { word: "Krustenbildung", article: "die", translation: "crust formation", category: "Bäckerhandwerk" },
  { word: "Sauerteigkultur", article: "die", translation: "sourdough culture", category: "Bäckerhandwerk" },
  { word: "Backofentemperatur", article: "die", translation: "oven temperature", category: "Bäckerhandwerk" },
  { word: "Mehlsorte", article: "die", translation: "type of flour", category: "Bäckerhandwerk" },

  // Gesangstechnik
  { word: "Stimmumfang", article: "der", translation: "vocal range", category: "Gesangstechnik" },
  { word: "Atemstütze", article: "die", translation: "breath support (singing)", category: "Gesangstechnik" },
  { word: "Tonansatz", article: "der", translation: "vocal attack", category: "Gesangstechnik" },
  { word: "Stimmlage", article: "die", translation: "vocal register", category: "Gesangstechnik" },
  { word: "Gesangsausbildung", article: "die", translation: "vocal training", category: "Gesangstechnik" },
  { word: "Chorgesang", article: "der", translation: "choral singing", category: "Gesangstechnik" },

  // Tanzkunst
  { word: "Tanzchoreografie", article: "die", translation: "dance choreography", category: "Tanzkunst" },
  { word: "Schrittfolge", article: "die", translation: "step sequence", category: "Tanzkunst" },
  { word: "Bewegungsausdruck", article: "der", translation: "expressive movement", category: "Tanzkunst" },
  { word: "Paartanz", article: "der", translation: "partner dance", category: "Tanzkunst" },
  { word: "Tanzstil", article: "der", translation: "dance style", category: "Tanzkunst" },
  { word: "Körperspannung", article: "die", translation: "body tension", category: "Tanzkunst" },

  // Puppentheater
  { word: "Marionettenspiel", article: "das", translation: "puppet performance", category: "Puppentheater" },
  { word: "Fadenführung", article: "die", translation: "string handling (puppetry)", category: "Puppentheater" },
  { word: "Handpuppenspiel", article: "das", translation: "hand puppet performance", category: "Puppentheater" },
  { word: "Figurenbau", article: "der", translation: "puppet construction", category: "Puppentheater" },

  // Comickunst
  { word: "Comicstrip", article: "der", translation: "comic strip", category: "Comickunst" },
  { word: "Sprechblase", article: "die", translation: "speech bubble", category: "Comickunst" },
  { word: "Bildabfolge", article: "die", translation: "panel sequence", category: "Comickunst" },
  { word: "Zeichenstil", article: "der", translation: "drawing style", category: "Comickunst" },
  { word: "Comicheft", article: "das", translation: "comic book", category: "Comickunst" },
  { word: "Panelaufteilung", article: "die", translation: "panel layout", category: "Comickunst" },

  // Geometrie
  { word: "Kegelform", article: "die", translation: "cone shape", category: "Geometrie" },
  { word: "Flächeninhalt", article: "der", translation: "surface area", category: "Geometrie" },
  { word: "Winkelmessung", article: "die", translation: "angle measurement", category: "Geometrie" },
  { word: "Körpervolumen", article: "das", translation: "solid volume", category: "Geometrie" },
  { word: "Symmetrieachse", article: "die", translation: "axis of symmetry", category: "Geometrie" },
  { word: "Kreisumfang", article: "der", translation: "circle circumference", category: "Geometrie" },
  { word: "Raumdiagonale", article: "die", translation: "space diagonal", category: "Geometrie" },

  // Algebra
  { word: "Zahlenfolge", article: "die", translation: "number sequence", category: "Algebra" },
  { word: "Termumformung", article: "die", translation: "term transformation", category: "Algebra" },
  { word: "Nullstellenberechnung", article: "die", translation: "root calculation", category: "Algebra" },
  { word: "Polynomgrad", article: "der", translation: "polynomial degree", category: "Algebra" },
  { word: "Bruchrechnung", article: "die", translation: "fraction arithmetic", category: "Algebra" },
  { word: "Exponentialfunktion", article: "die", translation: "exponential function", category: "Algebra" },

  // Genetik (vertieft2)
  { word: "Erbgutveränderung", article: "die", translation: "genetic alteration", category: "Genetik (vertieft2)" },
  { word: "Vererbungsmuster", article: "das", translation: "inheritance pattern", category: "Genetik (vertieft2)" },
  { word: "Genmutation", article: "die", translation: "gene mutation", category: "Genetik (vertieft2)" },
  { word: "Erbanlage", article: "die", translation: "genetic disposition", category: "Genetik (vertieft2)" },
  { word: "Genkartierung", article: "die", translation: "gene mapping", category: "Genetik (vertieft2)" },
  { word: "Zwillingsforschung", article: "die", translation: "twin research", category: "Genetik (vertieft2)" },

  // Mechanik
  { word: "Impulsübertragung", article: "die", translation: "impulse transfer", category: "Mechanik" },
  { word: "Reibungskraft", article: "die", translation: "friction force", category: "Mechanik" },
  { word: "Hebelgesetz", article: "das", translation: "law of the lever", category: "Mechanik" },
  { word: "Schwingungsdauer", article: "die", translation: "oscillation period", category: "Mechanik" },
  { word: "Trägheitsmoment", article: "das", translation: "moment of inertia", category: "Mechanik" },
  { word: "Federkonstante", article: "die", translation: "spring constant", category: "Mechanik" },
  { word: "Beschleunigungskraft", article: "die", translation: "acceleration force", category: "Mechanik" },

  // Reiseplanung (vertieft)
  { word: "Reisebüroberatung", article: "die", translation: "travel agency consultation", category: "Reiseplanung (vertieft)" },
  { word: "Visumantrag", article: "der", translation: "visa application", category: "Reiseplanung (vertieft)" },
  { word: "Gepäckabfertigung", article: "die", translation: "baggage handling", category: "Reiseplanung (vertieft)" },
  { word: "Reiseversicherung", article: "die", translation: "travel insurance", category: "Reiseplanung (vertieft)" },
  { word: "Umbuchungsgebühr", article: "die", translation: "rebooking fee", category: "Reiseplanung (vertieft)" },
  { word: "Reiserouteplanung", article: "die", translation: "itinerary planning", category: "Reiseplanung (vertieft)" },

  // Hotelgewerbe
  { word: "Zimmerreinigung", article: "die", translation: "room cleaning", category: "Hotelgewerbe" },
  { word: "Rezeptionsdienst", article: "der", translation: "reception service", category: "Hotelgewerbe" },
  { word: "Zimmerausstattung", article: "die", translation: "room amenities", category: "Hotelgewerbe" },
  { word: "Buchungsbestätigung", article: "die", translation: "booking confirmation", category: "Hotelgewerbe" },
  { word: "Stornierungsbedingung", article: "die", translation: "cancellation condition", category: "Hotelgewerbe" },
  { word: "Zimmerkategorie", article: "die", translation: "room category", category: "Hotelgewerbe" },

  // Restaurantbetrieb
  { word: "Speisekartengestaltung", article: "die", translation: "menu design", category: "Restaurantbetrieb" },
  { word: "Tischreservierung", article: "die", translation: "table reservation", category: "Restaurantbetrieb" },
  { word: "Serviceablauf", article: "der", translation: "service sequence", category: "Restaurantbetrieb" },
  { word: "Küchenorganisation", article: "die", translation: "kitchen organization", category: "Restaurantbetrieb" },
  { word: "Wareneinsatz", article: "der", translation: "cost of goods used", category: "Restaurantbetrieb" },
  { word: "Gästebewertung", article: "die", translation: "guest review", category: "Restaurantbetrieb" },

  // Fuhrparkverwaltung
  { word: "Flottenmanagement", article: "das", translation: "fleet management", category: "Fuhrparkverwaltung" },
  { word: "Wartungsintervall", article: "das", translation: "maintenance interval", category: "Fuhrparkverwaltung" },
  { word: "Kilometerstand", article: "der", translation: "mileage reading", category: "Fuhrparkverwaltung" },
  { word: "Fahrzeugauslastung", article: "die", translation: "vehicle utilization", category: "Fuhrparkverwaltung" },
  { word: "Tankkartenverwaltung", article: "die", translation: "fuel card management", category: "Fuhrparkverwaltung" },

  // Restaurierungshandwerk
  { word: "Möbelrestaurierung", article: "die", translation: "furniture restoration", category: "Restaurierungshandwerk" },
  { word: "Gemälderestaurierung", article: "die", translation: "painting restoration", category: "Restaurierungshandwerk" },
  { word: "Konservierungsmethode", article: "die", translation: "conservation method", category: "Restaurierungshandwerk" },
  { word: "Alterungsspur", article: "die", translation: "trace of aging", category: "Restaurierungshandwerk" },
  { word: "Originalsubstanz", article: "die", translation: "original substance", category: "Restaurierungshandwerk" },

  // Musikpädagogik
  { word: "Notenblattgestaltung", article: "die", translation: "sheet music layout", category: "Musikpädagogik" },
  { word: "Instrumentalunterricht", article: "der", translation: "instrumental lessons", category: "Musikpädagogik" },
  { word: "Gehörbildung", article: "die", translation: "ear training", category: "Musikpädagogik" },
  { word: "Übungsplan", article: "der", translation: "practice schedule", category: "Musikpädagogik" },
  { word: "Vorspieltermin", article: "der", translation: "recital date", category: "Musikpädagogik" },

  // Fahrausbildung
  { word: "Fahrschulunterricht", article: "der", translation: "driving lessons", category: "Fahrausbildung" },
  { word: "Theorieprüfung", article: "die", translation: "theory test", category: "Fahrausbildung" },
  { word: "Fahrpraxis", article: "die", translation: "driving practice", category: "Fahrausbildung" },
  { word: "Fahrlehrerqualifikation", article: "die", translation: "driving instructor qualification", category: "Fahrausbildung" },
  { word: "Parkiervorgang", article: "der", translation: "parking maneuver", category: "Fahrausbildung" },

  // Sprachunterricht
  { word: "Sprachkursniveau", article: "das", translation: "language course level", category: "Sprachunterricht" },
  { word: "Vokabeltraining", article: "das", translation: "vocabulary training", category: "Sprachunterricht" },
  { word: "Aussprachefehler", article: "der", translation: "pronunciation error", category: "Sprachunterricht" },
  { word: "Sprachpartner", article: "der", translation: "language exchange partner", category: "Sprachunterricht" },
  { word: "Grammatikübung", article: "die", translation: "grammar exercise", category: "Sprachunterricht" },

  // Schulwesen (vertieft)
  { word: "Notendurchschnitt", article: "der", translation: "grade point average", category: "Schulwesen (vertieft)" },
  { word: "Notenschlüssel", article: "der", translation: "grading scale", category: "Schulwesen (vertieft)" },
  { word: "Klassenwiederholung", article: "die", translation: "grade repetition", category: "Schulwesen (vertieft)" },
  { word: "Schulabschlussprüfung", article: "die", translation: "final school exam", category: "Schulwesen (vertieft)" },
  { word: "Unterrichtsausfall", article: "der", translation: "class cancellation", category: "Schulwesen (vertieft)" },
  { word: "Lehrplaninhalt", article: "der", translation: "curriculum content", category: "Schulwesen (vertieft)" },

  // Feuerwehrwesen
  { word: "Feuerwehreinsatz", article: "der", translation: "fire department operation", category: "Feuerwehrwesen" },
  { word: "Löschwasserversorgung", article: "die", translation: "firefighting water supply", category: "Feuerwehrwesen" },
  { word: "Brandausbreitung", article: "die", translation: "fire spread", category: "Feuerwehrwesen" },
  { word: "Rettungsleiter", article: "die", translation: "rescue ladder", category: "Feuerwehrwesen" },
  { word: "Alarmierungssystem", article: "das", translation: "alerting system", category: "Feuerwehrwesen" },
  { word: "Atemschutzgerät", article: "das", translation: "breathing apparatus", category: "Feuerwehrwesen" },

  // Polizeiwesen
  { word: "Streifendienst", article: "der", translation: "patrol duty", category: "Polizeiwesen" },
  { word: "Ermittlungsverfahren", article: "das", translation: "investigation procedure", category: "Polizeiwesen" },
  { word: "Personenkontrolle", article: "die", translation: "identity check", category: "Polizeiwesen" },
  { word: "Festnahmeprotokoll", article: "das", translation: "arrest report", category: "Polizeiwesen" },
  { word: "Einsatzleitung", article: "die", translation: "operations command", category: "Polizeiwesen" },
  { word: "Verkehrsüberwachung", article: "die", translation: "traffic surveillance", category: "Polizeiwesen" },

  // Strafvollzug
  { word: "Haftbedingung", article: "die", translation: "prison condition", category: "Strafvollzug" },
  { word: "Resozialisierungsmaßnahme", article: "die", translation: "rehabilitation measure", category: "Strafvollzug" },
  { word: "Vollzugslockerung", article: "die", translation: "prison privilege easing", category: "Strafvollzug" },
  { word: "Freigang", article: "der", translation: "day release", category: "Strafvollzug" },
  { word: "Gefängnisordnung", article: "die", translation: "prison regulations", category: "Strafvollzug" },
  { word: "Strafvollstreckung", article: "die", translation: "execution of sentence", category: "Strafvollzug" },

  // Katastrophenschutz
  { word: "Katastrophenschutzplan", article: "der", translation: "disaster protection plan", category: "Katastrophenschutz" },
  { word: "Evakuierungsroute", article: "die", translation: "evacuation route", category: "Katastrophenschutz" },
  { word: "Rettungskette", article: "die", translation: "chain of survival", category: "Katastrophenschutz" },
  { word: "Krisenstab", article: "der", translation: "crisis management team", category: "Katastrophenschutz" },
  { word: "Warnmeldung", article: "die", translation: "warning alert", category: "Katastrophenschutz" },
  { word: "Zivilschutzübung", article: "die", translation: "civil defense drill", category: "Katastrophenschutz" },

  // Kunststoffindustrie
  { word: "Kunststoffgranulat", article: "das", translation: "plastic granulate", category: "Kunststoffindustrie" },
  { word: "Spritzgussverfahren", article: "das", translation: "injection molding process", category: "Kunststoffindustrie" },
  { word: "Formteilherstellung", article: "die", translation: "molded part production", category: "Kunststoffindustrie" },
  { word: "Kunststoffrecycling", article: "das", translation: "plastic recycling", category: "Kunststoffindustrie" },
  { word: "Polymereigenschaft", article: "die", translation: "polymer property", category: "Kunststoffindustrie" },
  { word: "Extrusionsverfahren", article: "das", translation: "extrusion process", category: "Kunststoffindustrie" },

  // Klebstoffindustrie
  { word: "Klebstoffaushärtung", article: "die", translation: "adhesive curing", category: "Klebstoffindustrie" },
  { word: "Haftvermittler", article: "der", translation: "adhesion promoter", category: "Klebstoffindustrie" },
  { word: "Klebeverbindung", article: "die", translation: "bonded joint", category: "Klebstoffindustrie" },
  { word: "Verklebungsfläche", article: "die", translation: "bonding surface", category: "Klebstoffindustrie" },
  { word: "Klebstoffviskosität", article: "die", translation: "adhesive viscosity", category: "Klebstoffindustrie" },

  // Lack- & Beschichtungstechnik
  { word: "Farbdeckkraft", article: "die", translation: "paint opacity", category: "Lack- & Beschichtungstechnik" },
  { word: "Lackierverfahren", article: "das", translation: "painting/coating process", category: "Lack- & Beschichtungstechnik" },
  { word: "Trocknungsdauer", article: "die", translation: "drying time", category: "Lack- & Beschichtungstechnik" },
  { word: "Schichtdicke", article: "die", translation: "coating thickness", category: "Lack- & Beschichtungstechnik" },
  { word: "Grundierungsauftrag", article: "der", translation: "primer application", category: "Lack- & Beschichtungstechnik" },
  { word: "Korrosionsschutzschicht", article: "die", translation: "anti-corrosion layer", category: "Lack- & Beschichtungstechnik" },

  // Reinigungsindustrie
  { word: "Reinigungsmittelkonzentration", article: "die", translation: "cleaning agent concentration", category: "Reinigungsindustrie" },
  { word: "Fleckentfernung", article: "die", translation: "stain removal", category: "Reinigungsindustrie" },
  { word: "Desinfektionsmittel", article: "das", translation: "disinfectant", category: "Reinigungsindustrie" },
  { word: "Reinigungsintervall", article: "das", translation: "cleaning interval", category: "Reinigungsindustrie" },
  { word: "Hygienevorschrift", article: "die", translation: "hygiene regulation", category: "Reinigungsindustrie" },
  { word: "Gebäudereinigung", article: "die", translation: "building cleaning", category: "Reinigungsindustrie" },

  // Solartechnik
  { word: "Solarzellenwirkungsgrad", article: "der", translation: "solar cell efficiency", category: "Solartechnik" },
  { word: "Photovoltaikanlage", article: "die", translation: "photovoltaic system", category: "Solartechnik" },
  { word: "Sonneneinstrahlung", article: "die", translation: "solar irradiation", category: "Solartechnik" },
  { word: "Solarmodulausrichtung", article: "die", translation: "solar panel orientation", category: "Solartechnik" },
  { word: "Energieertrag", article: "der", translation: "energy yield", category: "Solartechnik" },

  // Windenergie
  { word: "Rotorblattlänge", article: "die", translation: "rotor blade length", category: "Windenergie" },
  { word: "Windgeschwindigkeitsmessung", article: "die", translation: "wind speed measurement", category: "Windenergie" },
  { word: "Turmhöhe", article: "die", translation: "tower height", category: "Windenergie" },
  { word: "Windparkplanung", article: "die", translation: "wind farm planning", category: "Windenergie" },
  { word: "Offshoreanlage", article: "die", translation: "offshore facility", category: "Windenergie" },

  // Batterietechnik
  { word: "Batteriezellenchemie", article: "die", translation: "battery cell chemistry", category: "Batterietechnik" },
  { word: "Ladezyklus", article: "der", translation: "charging cycle", category: "Batterietechnik" },
  { word: "Energiedichte", article: "die", translation: "energy density", category: "Batterietechnik" },
  { word: "Akkudegradation", article: "die", translation: "battery degradation", category: "Batterietechnik" },
  { word: "Zellbalancing", article: "das", translation: "cell balancing", category: "Batterietechnik" },
  { word: "Batteriemanagementsystem", article: "das", translation: "battery management system", category: "Batterietechnik" },

  // Gebäudetechnik
  { word: "Wärmepumpeneffizienz", article: "die", translation: "heat pump efficiency", category: "Gebäudetechnik" },
  { word: "Lüftungsanlage", article: "die", translation: "ventilation system", category: "Gebäudetechnik" },
  { word: "Klimatisierungssystem", article: "das", translation: "air conditioning system", category: "Gebäudetechnik" },
  { word: "Gebäudeleittechnik", article: "die", translation: "building management technology", category: "Gebäudetechnik" },
  { word: "Wärmerückgewinnung", article: "die", translation: "heat recovery", category: "Gebäudetechnik" },
  { word: "Dämmwert", article: "der", translation: "insulation value", category: "Gebäudetechnik" },

  // Gebäudereinigung (vertieft)
  { word: "Fassadenreinigung", article: "die", translation: "facade cleaning", category: "Gebäudereinigung (vertieft)" },
  { word: "Fensterputzausrüstung", article: "die", translation: "window cleaning equipment", category: "Gebäudereinigung (vertieft)" },
  { word: "Höhenarbeit", article: "die", translation: "work at height", category: "Gebäudereinigung (vertieft)" },
  { word: "Reinigungsplan", article: "der", translation: "cleaning schedule", category: "Gebäudereinigung (vertieft)" },

  // Umzugswesen
  { word: "Umzugsplanung", article: "die", translation: "moving planning", category: "Umzugswesen" },
  { word: "Möbeltransport", article: "der", translation: "furniture transport", category: "Umzugswesen" },
  { word: "Verpackungsmaterial", article: "das", translation: "packing material", category: "Umzugswesen" },
  { word: "Ummeldepflicht", article: "die", translation: "re-registration requirement", category: "Umzugswesen" },
  { word: "Einlagerung", article: "die", translation: "storage", category: "Umzugswesen" },

  // Bestattungswesen
  { word: "Bestattungsart", article: "die", translation: "type of burial", category: "Bestattungswesen" },
  { word: "Urnenbeisetzung", article: "die", translation: "urn burial", category: "Bestattungswesen" },
  { word: "Grabpflege", article: "die", translation: "grave maintenance", category: "Bestattungswesen" },
  { word: "Sterbeurkunde", article: "die", translation: "death certificate", category: "Bestattungswesen" },
  { word: "Nachlassverwaltung", article: "die", translation: "estate administration", category: "Bestattungswesen" },

  // Hochzeitsbranche
  { word: "Hochzeitsplanung", article: "die", translation: "wedding planning", category: "Hochzeitsbranche" },
  { word: "Trauzeremonie", article: "die", translation: "wedding ceremony", category: "Hochzeitsbranche" },
  { word: "Trauzeugenwahl", article: "die", translation: "choice of witness (wedding)", category: "Hochzeitsbranche" },
  { word: "Brautkleidanprobe", article: "die", translation: "wedding dress fitting", category: "Hochzeitsbranche" },
  { word: "Hochzeitslocation", article: "die", translation: "wedding venue", category: "Hochzeitsbranche" },

  // Kinderbetreuung
  { word: "Kinderbetreuungsangebot", article: "das", translation: "childcare provision", category: "Kinderbetreuung" },
  { word: "Erzieherausbildung", article: "die", translation: "childcare worker training", category: "Kinderbetreuung" },
  { word: "Krippenplatz", article: "der", translation: "daycare slot", category: "Kinderbetreuung" },
  { word: "Eingewöhnungsphase", article: "die", translation: "settling-in period", category: "Kinderbetreuung" },
  { word: "Spielgruppenleitung", article: "die", translation: "playgroup leadership", category: "Kinderbetreuung" },

  // Gebäudesicherheit
  { word: "Blitzableiter", article: "der", translation: "lightning rod", category: "Gebäudesicherheit" },
  { word: "Brandschutztür", article: "die", translation: "fire door", category: "Gebäudesicherheit" },
  { word: "Rauchmelderpflicht", article: "die", translation: "smoke detector requirement", category: "Gebäudesicherheit" },
  { word: "Fluchtwegkennzeichnung", article: "die", translation: "escape route signage", category: "Gebäudesicherheit" },
  { word: "Einbruchschutz", article: "der", translation: "burglary protection", category: "Gebäudesicherheit" },
  { word: "Sicherheitsschleuse", article: "die", translation: "security airlock", category: "Gebäudesicherheit" },

  // Sicherheitsdienst
  { word: "Kameraüberwachung", article: "die", translation: "camera surveillance", category: "Sicherheitsdienst" },
  { word: "Zutrittskontrolle", article: "die", translation: "access control", category: "Sicherheitsdienst" },
  { word: "Wachpersonal", article: "das", translation: "security personnel", category: "Sicherheitsdienst" },
  { word: "Objektschutz", article: "der", translation: "site security", category: "Sicherheitsdienst" },
  { word: "Sicherheitskonzept", article: "das", translation: "security concept", category: "Sicherheitsdienst" },

  // Postwesen
  { word: "Paketzustellung", article: "die", translation: "parcel delivery", category: "Postwesen" },
  { word: "Briefsortierung", article: "die", translation: "mail sorting", category: "Postwesen" },
  { word: "Sendungsverfolgung", article: "die", translation: "shipment tracking", category: "Postwesen" },
  { word: "Frankierung", article: "die", translation: "postage/franking", category: "Postwesen" },
  { word: "Postfachanmietung", article: "die", translation: "PO box rental", category: "Postwesen" },

  // Pflanzenzüchtung
  { word: "Pflanzenzucht", article: "die", translation: "plant breeding", category: "Pflanzenzüchtung" },
  { word: "Sortenschutz", article: "der", translation: "plant variety protection", category: "Pflanzenzüchtung" },
  { word: "Kreuzungsverfahren", article: "das", translation: "crossbreeding method", category: "Pflanzenzüchtung" },
  { word: "Ertragsstabilität", article: "die", translation: "yield stability", category: "Pflanzenzüchtung" },
  { word: "Resistenzzüchtung", article: "die", translation: "resistance breeding", category: "Pflanzenzüchtung" },

  // Tierzucht
  { word: "Zuchtlinie", article: "die", translation: "breeding line", category: "Tierzucht" },
  { word: "Kreuzungspartner", article: "der", translation: "breeding partner", category: "Tierzucht" },
  { word: "Abstammungsnachweis", article: "der", translation: "pedigree certificate", category: "Tierzucht" },
  { word: "Zuchterfolg", article: "der", translation: "breeding success", category: "Tierzucht" },
  { word: "Rasseeigenschaft", article: "die", translation: "breed characteristic", category: "Tierzucht" },
  { word: "Zuchtverband", article: "der", translation: "breeding association", category: "Tierzucht" },

  // Viehwirtschaft
  { word: "Weidewirtschaft", article: "die", translation: "pasture farming", category: "Viehwirtschaft" },
  { word: "Stallhaltung", article: "die", translation: "barn keeping", category: "Viehwirtschaft" },
  { word: "Futtermittelzusammensetzung", article: "die", translation: "feed composition", category: "Viehwirtschaft" },
  { word: "Milchleistung", article: "die", translation: "milk yield", category: "Viehwirtschaft" },
  { word: "Weidefläche", article: "die", translation: "grazing area", category: "Viehwirtschaft" },

  // Forstwesen
  { word: "Forstwirtschaft", article: "die", translation: "forestry", category: "Forstwesen" },
  { word: "Holzeinschlag", article: "der", translation: "timber harvesting", category: "Forstwesen" },
  { word: "Aufforstungsprojekt", article: "das", translation: "reforestation project", category: "Forstwesen" },
  { word: "Waldbestand", article: "der", translation: "forest stock", category: "Forstwesen" },
  { word: "Forstschädling", article: "der", translation: "forest pest", category: "Forstwesen" },
  { word: "Baumfällung", article: "die", translation: "tree felling", category: "Forstwesen" },

  // Fischereiwesen
  { word: "Fangmethode", article: "die", translation: "fishing method", category: "Fischereiwesen" },
  { word: "Netzausrüstung", article: "die", translation: "net equipment", category: "Fischereiwesen" },
  { word: "Fischzucht", article: "die", translation: "fish farming", category: "Fischereiwesen" },
  { word: "Überfischung", article: "die", translation: "overfishing", category: "Fischereiwesen" },
  { word: "Fangsaison", article: "die", translation: "fishing season", category: "Fischereiwesen" },

  // Hardwareentwicklung
  { word: "Prozessorarchitektur", article: "die", translation: "processor architecture", category: "Hardwareentwicklung" },
  { word: "Platinenlayout", article: "das", translation: "circuit board layout", category: "Hardwareentwicklung" },
  { word: "Bauteiltoleranz", article: "die", translation: "component tolerance", category: "Hardwareentwicklung" },
  { word: "Wärmeableitung", article: "die", translation: "heat dissipation", category: "Hardwareentwicklung" },
  { word: "Chipfertigung", article: "die", translation: "chip manufacturing", category: "Hardwareentwicklung" },
  { word: "Signalverarbeitung", article: "die", translation: "signal processing", category: "Hardwareentwicklung" },

  // UX-Design
  { word: "Benutzeroberflächengestaltung", article: "die", translation: "user interface design", category: "UX-Design" },
  { word: "Bedienkomfort", article: "der", translation: "ease of use", category: "UX-Design" },
  { word: "Interaktionsmuster", article: "das", translation: "interaction pattern", category: "UX-Design" },
  { word: "Nutzertest", article: "der", translation: "user test", category: "UX-Design" },
  { word: "Navigationsstruktur", article: "die", translation: "navigation structure", category: "UX-Design" },
  { word: "Klickpfad", article: "der", translation: "click path", category: "UX-Design" },

  // Cloud-Technologie
  { word: "Cloudspeicherung", article: "die", translation: "cloud storage", category: "Cloud-Technologie" },
  { word: "Serverkapazität", article: "die", translation: "server capacity", category: "Cloud-Technologie" },
  { word: "Datensicherung", article: "die", translation: "data backup", category: "Cloud-Technologie" },
  { word: "Rechenzentrumskapazität", article: "die", translation: "data center capacity", category: "Cloud-Technologie" },
  { word: "Virtualisierungstechnik", article: "die", translation: "virtualization technology", category: "Cloud-Technologie" },
  { word: "Skalierbarkeit", article: "die", translation: "scalability", category: "Cloud-Technologie" },

  // Kryptowährungen
  { word: "Blockchainstruktur", article: "die", translation: "blockchain structure", category: "Kryptowährungen" },
  { word: "Transaktionsgebühr", article: "die", translation: "transaction fee", category: "Kryptowährungen" },
  { word: "Kryptowallet", article: "das", translation: "crypto wallet", category: "Kryptowährungen" },
  { word: "Mining-Verfahren", article: "das", translation: "mining process", category: "Kryptowährungen" },
  { word: "Kurswertschwankung", article: "die", translation: "exchange rate fluctuation", category: "Kryptowährungen" },

  // Bekleidungsdetails
  { word: "Nahtverarbeitung", article: "die", translation: "seam finishing", category: "Bekleidungsdetails" },
  { word: "Knopflochstich", article: "der", translation: "buttonhole stitch", category: "Bekleidungsdetails" },
  { word: "Stoffmusterung", article: "die", translation: "fabric pattern", category: "Bekleidungsdetails" },
  { word: "Passform", article: "die", translation: "fit (clothing)", category: "Bekleidungsdetails" },
  { word: "Kragenform", article: "die", translation: "collar shape", category: "Bekleidungsdetails" },
  { word: "Ärmellänge", article: "die", translation: "sleeve length", category: "Bekleidungsdetails" },

  // Schuhhandwerk
  { word: "Schuhsohle", article: "die", translation: "shoe sole", category: "Schuhhandwerk" },
  { word: "Absatzhöhe", article: "die", translation: "heel height", category: "Schuhhandwerk" },
  { word: "Lederverarbeitung", article: "die", translation: "leather processing", category: "Schuhhandwerk" },
  { word: "Schuhweite", article: "die", translation: "shoe width", category: "Schuhhandwerk" },
  { word: "Sohlenprofil", article: "das", translation: "sole tread pattern", category: "Schuhhandwerk" },

  // Friseurhandwerk
  { word: "Haarstruktur", article: "die", translation: "hair structure", category: "Friseurhandwerk" },
  { word: "Haarschnitttechnik", article: "die", translation: "hair cutting technique", category: "Friseurhandwerk" },
  { word: "Farbverlauf", article: "der", translation: "color gradient", category: "Friseurhandwerk" },
  { word: "Haarpflegeprodukt", article: "das", translation: "hair care product", category: "Friseurhandwerk" },
  { word: "Föhntechnik", article: "die", translation: "blow-drying technique", category: "Friseurhandwerk" },

  // Kosmetikbranche
  { word: "Hautanalyse", article: "die", translation: "skin analysis", category: "Kosmetikbranche" },
  { word: "Behandlungsablauf", article: "der", translation: "treatment procedure", category: "Kosmetikbranche" },
  { word: "Pflegeprodukt", article: "das", translation: "skincare product", category: "Kosmetikbranche" },
  { word: "Massagegriff", article: "der", translation: "massage technique/grip", category: "Kosmetikbranche" },
  { word: "Anwendungsdauer", article: "die", translation: "treatment duration", category: "Kosmetikbranche" },

  // Campingwesen
  { word: "Zeltaufbau", article: "der", translation: "tent setup", category: "Campingwesen" },
  { word: "Schlafsackfüllung", article: "die", translation: "sleeping bag insulation", category: "Campingwesen" },
  { word: "Campingplatzausstattung", article: "die", translation: "campsite facilities", category: "Campingwesen" },
  { word: "Rucksackgewicht", article: "das", translation: "backpack weight", category: "Campingwesen" },
  { word: "Wanderausrüstung", article: "die", translation: "hiking gear", category: "Campingwesen" },
  { word: "Lagerfeuerstelle", article: "die", translation: "campfire site", category: "Campingwesen" },

  // Tauchsport
  { word: "Tauchausrüstung", article: "die", translation: "diving equipment", category: "Tauchsport" },
  { word: "Sauerstoffflasche", article: "die", translation: "oxygen tank", category: "Tauchsport" },
  { word: "Tauchtiefe", article: "die", translation: "diving depth", category: "Tauchsport" },
  { word: "Dekompressionszeit", article: "die", translation: "decompression time", category: "Tauchsport" },
  { word: "Tauchgang", article: "der", translation: "dive", category: "Tauchsport" },

  // Luftsportarten
  { word: "Flugdrachensteuerung", article: "die", translation: "kite/hang glider control", category: "Luftsportarten" },
  { word: "Fallschirmöffnung", article: "die", translation: "parachute deployment", category: "Luftsportarten" },
  { word: "Thermikausnutzung", article: "die", translation: "thermal utilization (gliding)", category: "Luftsportarten" },
  { word: "Landeanflug", article: "der", translation: "landing approach", category: "Luftsportarten" },
  { word: "Windfenster", article: "das", translation: "wind window (paragliding)", category: "Luftsportarten" },

  // Radsport
  { word: "Radrahmengeometrie", article: "die", translation: "bike frame geometry", category: "Radsport" },
  { word: "Übersetzungsverhältnis", article: "das", translation: "gear ratio (bike)", category: "Radsport" },
  { word: "Trittfrequenz", article: "die", translation: "pedaling cadence", category: "Radsport" },
  { word: "Fahrradwartung", article: "die", translation: "bicycle maintenance", category: "Radsport" },
  { word: "Streckenprofil", article: "das", translation: "course profile", category: "Radsport" },
  { word: "Windschattenfahren", article: "das", translation: "drafting/slipstreaming", category: "Radsport" },

  // Orchesterwesen
  { word: "Notenblattseite", article: "die", translation: "sheet music page", category: "Orchesterwesen" },
  { word: "Dirigierstab", article: "der", translation: "conductor's baton", category: "Orchesterwesen" },
  { word: "Instrumentengruppe", article: "die", translation: "instrument section", category: "Orchesterwesen" },
  { word: "Probenplan", article: "der", translation: "rehearsal schedule", category: "Orchesterwesen" },
  { word: "Konzertsaalakustik", article: "die", translation: "concert hall acoustics", category: "Orchesterwesen" },
  { word: "Orchesteraufstellung", article: "die", translation: "orchestra seating layout", category: "Orchesterwesen" },

  // Opernwesen
  { word: "Opernaufführung", article: "die", translation: "opera performance", category: "Opernwesen" },
  { word: "Arienstruktur", article: "die", translation: "aria structure", category: "Opernwesen" },
  { word: "Bühnenorchester", article: "das", translation: "pit orchestra", category: "Opernwesen" },
  { word: "Librettotext", article: "der", translation: "libretto text", category: "Opernwesen" },
  { word: "Gesangspartie", article: "die", translation: "vocal part", category: "Opernwesen" },

  // Ballettkunst
  { word: "Balletttechnik", article: "die", translation: "ballet technique", category: "Ballettkunst" },
  { word: "Spitzentanz", article: "der", translation: "pointe dance", category: "Ballettkunst" },
  { word: "Choreografieentwurf", article: "der", translation: "choreography draft", category: "Ballettkunst" },
  { word: "Balletttraining", article: "das", translation: "ballet training", category: "Ballettkunst" },
  { word: "Bühnenkostüm", article: "das", translation: "stage costume", category: "Ballettkunst" },

  // Kabarett & Comedy
  { word: "Kabarettprogramm", article: "das", translation: "cabaret show", category: "Kabarett & Comedy" },
  { word: "Pointensetzung", article: "die", translation: "punchline delivery", category: "Kabarett & Comedy" },
  { word: "Bühnenauftritt", article: "der", translation: "stage appearance", category: "Kabarett & Comedy" },
  { word: "Publikumsreaktion", article: "die", translation: "audience reaction", category: "Kabarett & Comedy" },
  { word: "Improvisationstheater", article: "das", translation: "improv theater", category: "Kabarett & Comedy" },

  // Ermittlungsarbeit
  { word: "Verhörtechnik", article: "die", translation: "interrogation technique", category: "Ermittlungsarbeit" },
  { word: "Zeugenschutzprogramm", article: "das", translation: "witness protection program", category: "Ermittlungsarbeit" },
  { word: "Observationseinsatz", article: "der", translation: "surveillance operation", category: "Ermittlungsarbeit" },
  { word: "Ermittlungsakte", article: "die", translation: "investigation file", category: "Ermittlungsarbeit" },
  { word: "Fahndungsaufruf", article: "der", translation: "wanted appeal", category: "Ermittlungsarbeit" },
  { word: "Verdachtsmoment", article: "das", translation: "element of suspicion", category: "Ermittlungsarbeit" },

  // Gerichtswesen (vertieft)
  { word: "Gerichtsurteil", article: "das", translation: "court ruling", category: "Gerichtswesen (vertieft)" },
  { word: "Richterspruch", article: "der", translation: "judge's verdict", category: "Gerichtswesen (vertieft)" },
  { word: "Anklagepunkt", article: "der", translation: "count of indictment", category: "Gerichtswesen (vertieft)" },
  { word: "Verteidigungsstrategie", article: "die", translation: "defense strategy", category: "Gerichtswesen (vertieft)" },
  { word: "Schöffengericht", article: "das", translation: "lay judges' court", category: "Gerichtswesen (vertieft)" },
  { word: "Prozessakte", article: "die", translation: "trial file", category: "Gerichtswesen (vertieft)" },

  // Anwaltswesen
  { word: "Anwaltskanzlei", article: "die", translation: "law firm", category: "Anwaltswesen" },
  { word: "Mandantengespräch", article: "das", translation: "client consultation", category: "Anwaltswesen" },
  { word: "Honorarvereinbarung", article: "die", translation: "fee agreement", category: "Anwaltswesen" },
  { word: "Schriftsatz", article: "der", translation: "legal brief", category: "Anwaltswesen" },
  { word: "Fallakte", article: "die", translation: "case file", category: "Anwaltswesen" },
  { word: "Rechtsberatung", article: "die", translation: "legal advice", category: "Anwaltswesen" },

  // Seismologie
  { word: "Erdbebenmessung", article: "die", translation: "earthquake measurement", category: "Seismologie" },
  { word: "Bebenstärke", article: "die", translation: "earthquake magnitude", category: "Seismologie" },
  { word: "Erdbebenwarnung", article: "die", translation: "earthquake warning", category: "Seismologie" },
  { word: "Nachbeben", article: "das", translation: "aftershock", category: "Seismologie" },
  { word: "Erdbebensicherheit", article: "die", translation: "earthquake safety", category: "Seismologie" },

  // Glaziologie
  { word: "Gletscherschmelze", article: "die", translation: "glacier melt", category: "Glaziologie" },
  { word: "Eisschicht", article: "die", translation: "ice layer", category: "Glaziologie" },
  { word: "Gletscherbewegung", article: "die", translation: "glacier movement", category: "Glaziologie" },
  { word: "Permafrostboden", article: "der", translation: "permafrost soil", category: "Glaziologie" },
  { word: "Eiskernbohrung", article: "die", translation: "ice core drilling", category: "Glaziologie" },

  // Amateurastronomie
  { word: "Sternwartebetrieb", article: "der", translation: "observatory operation", category: "Amateurastronomie" },
  { word: "Fernrohrjustierung", article: "die", translation: "telescope alignment", category: "Amateurastronomie" },
  { word: "Sternbeobachtung", article: "die", translation: "stargazing", category: "Amateurastronomie" },
  { word: "Himmelsdurchmusterung", article: "die", translation: "sky survey", category: "Amateurastronomie" },
  { word: "Lichtverschmutzung", article: "die", translation: "light pollution", category: "Amateurastronomie" },

  // Veranstaltungstechnik
  { word: "Bühnentechnikbetrieb", article: "der", translation: "stage technology operation", category: "Veranstaltungstechnik" },
  { word: "Tonanlage", article: "die", translation: "sound system", category: "Veranstaltungstechnik" },
  { word: "Lichtsteuerpult", article: "das", translation: "lighting control console", category: "Veranstaltungstechnik" },
  { word: "Nebelmaschine", article: "die", translation: "fog machine", category: "Veranstaltungstechnik" },
  { word: "Rigging", article: "das", translation: "rigging (event technology)", category: "Veranstaltungstechnik" },
  { word: "Bühnenaufbauzeit", article: "die", translation: "stage build time", category: "Veranstaltungstechnik" },

  // Messewesen
  { word: "Messestandkonzept", article: "das", translation: "trade show booth concept", category: "Messewesen" },
  { word: "Ausstellerverzeichnis", article: "das", translation: "exhibitor directory", category: "Messewesen" },
  { word: "Standfläche", article: "die", translation: "booth space", category: "Messewesen" },
  { word: "Messeauftritt", article: "der", translation: "trade show presence", category: "Messewesen" },
  { word: "Fachbesucher", article: "der", translation: "trade visitor", category: "Messewesen" },

  // Konferenzwesen
  { word: "Konferenzraumbuchung", article: "die", translation: "conference room booking", category: "Konferenzwesen" },
  { word: "Tagesordnungspunkt", article: "der", translation: "agenda item", category: "Konferenzwesen" },
  { word: "Simultanübersetzung", article: "die", translation: "simultaneous translation", category: "Konferenzwesen" },
  { word: "Redezeitbegrenzung", article: "die", translation: "speaking time limit", category: "Konferenzwesen" },
  { word: "Teilnehmerliste", article: "die", translation: "participant list", category: "Konferenzwesen" },
  { word: "Sitzungsprotokoll", article: "das", translation: "meeting minutes", category: "Konferenzwesen" },

  // Vortragswesen
  { word: "Podiumsdiskussion", article: "die", translation: "panel discussion", category: "Vortragswesen" },
  { word: "Vortragsstruktur", article: "die", translation: "presentation structure", category: "Vortragswesen" },
  { word: "Redemanuskript", article: "das", translation: "speech manuscript", category: "Vortragswesen" },
  { word: "Fragerunde", article: "die", translation: "Q&A session", category: "Vortragswesen" },
  { word: "Vortragshonorar", article: "das", translation: "speaking fee", category: "Vortragswesen" },

  // Wasserversorgung
  { word: "Trinkwasseraufbereitung", article: "die", translation: "drinking water treatment", category: "Wasserversorgung" },
  { word: "Rohrleitungsnetz", article: "das", translation: "pipeline network", category: "Wasserversorgung" },
  { word: "Wasserzähler", article: "der", translation: "water meter", category: "Wasserversorgung" },
  { word: "Druckminderer", article: "der", translation: "pressure reducer", category: "Wasserversorgung" },
  { word: "Wasserversorgungsnetz", article: "das", translation: "water supply network", category: "Wasserversorgung" },

  // Stromversorgung
  { word: "Stromnetzausfall", article: "der", translation: "power grid outage", category: "Stromversorgung" },
  { word: "Verteilernetz", article: "das", translation: "distribution grid", category: "Stromversorgung" },
  { word: "Spannungsschwankung", article: "die", translation: "voltage fluctuation", category: "Stromversorgung" },
  { word: "Stromtarif", article: "der", translation: "electricity tariff", category: "Stromversorgung" },
  { word: "Netzbetreiber", article: "der", translation: "grid operator", category: "Stromversorgung" },

  // Gasversorgung
  { word: "Gasleitungsanschluss", article: "der", translation: "gas line connection", category: "Gasversorgung" },
  { word: "Gasdruckregelung", article: "die", translation: "gas pressure regulation", category: "Gasversorgung" },
  { word: "Erdgasspeicher", article: "der", translation: "natural gas storage", category: "Gasversorgung" },
  { word: "Gaszähleranzeige", article: "die", translation: "gas meter reading", category: "Gasversorgung" },

  // Fernwärmeversorgung
  { word: "Fernwärmenetz", article: "das", translation: "district heating network", category: "Fernwärmeversorgung" },
  { word: "Heizkraftwerk", article: "das", translation: "combined heat and power plant", category: "Fernwärmeversorgung" },
  { word: "Wärmeverlust", article: "der", translation: "heat loss", category: "Fernwärmeversorgung" },
  { word: "Anschlussleistung", article: "die", translation: "connected load", category: "Fernwärmeversorgung" },
  { word: "Fernwärmeleitung", article: "die", translation: "district heating pipe", category: "Fernwärmeversorgung" },

  // Bergsteigen
  { word: "Bergführerqualifikation", article: "die", translation: "mountain guide qualification", category: "Bergsteigen" },
  { word: "Gipfelbesteigung", article: "die", translation: "summit ascent", category: "Bergsteigen" },
  { word: "Seilschaftstechnik", article: "die", translation: "roped climbing technique", category: "Bergsteigen" },
  { word: "Höhenkrankheit", article: "die", translation: "altitude sickness", category: "Bergsteigen" },
  { word: "Wetterumschwung", article: "der", translation: "sudden weather change", category: "Bergsteigen" },
  { word: "Biwakplatz", article: "der", translation: "bivouac site", category: "Bergsteigen" },

  // Kanusport
  { word: "Wildwasserstrecke", article: "die", translation: "whitewater stretch", category: "Kanusport" },
  { word: "Paddeltechnik", article: "die", translation: "paddling technique", category: "Kanusport" },
  { word: "Stromschnelle", article: "die", translation: "rapid (river)", category: "Kanusport" },
  { word: "Kentertraining", article: "das", translation: "capsize training", category: "Kanusport" },
  { word: "Flussabschnitt", article: "der", translation: "river section", category: "Kanusport" },

  // Surfsport
  { word: "Surfbrettform", article: "die", translation: "surfboard shape", category: "Surfsport" },
  { word: "Brandungswelle", article: "die", translation: "breaking wave", category: "Surfsport" },
  { word: "Strömungsverhalten", article: "das", translation: "current behavior", category: "Surfsport" },
  { word: "Balanceübung", article: "die", translation: "balance exercise", category: "Surfsport" },
  { word: "Gezeitenabhängigkeit", article: "die", translation: "tidal dependency", category: "Surfsport" },

  // Golfsport
  { word: "Golfschlägerwahl", article: "die", translation: "golf club selection", category: "Golfsport" },
  { word: "Abschlagstechnik", article: "die", translation: "tee-off technique", category: "Golfsport" },
  { word: "Platzgestaltung", article: "die", translation: "course design", category: "Golfsport" },
  { word: "Handicapberechnung", article: "die", translation: "handicap calculation", category: "Golfsport" },
  { word: "Grünpflege", article: "die", translation: "green maintenance", category: "Golfsport" },

  // Aquaristik
  { word: "Aquarienbepflanzung", article: "die", translation: "aquarium planting", category: "Aquaristik" },
  { word: "Wasserwerte", article: "die", translation: "water parameters", category: "Aquaristik" },
  { word: "Aquarienfilter", article: "der", translation: "aquarium filter", category: "Aquaristik" },
  { word: "Fischbesatz", article: "der", translation: "fish stocking", category: "Aquaristik" },
  { word: "Beckengröße", article: "die", translation: "tank size", category: "Aquaristik" },

  // Vogelzucht
  { word: "Vogelkäfiggröße", article: "die", translation: "birdcage size", category: "Vogelzucht" },
  { word: "Gefiederpflege", article: "die", translation: "feather care", category: "Vogelzucht" },
  { word: "Brutverhalten", article: "das", translation: "nesting behavior", category: "Vogelzucht" },
  { word: "Vogelfutterart", article: "die", translation: "type of bird feed", category: "Vogelzucht" },
  { word: "Legeleistung", article: "die", translation: "egg-laying performance", category: "Vogelzucht" },

  // Terraristik
  { word: "Terrarienklima", article: "das", translation: "terrarium climate", category: "Terraristik" },
  { word: "Reptilienhaltung", article: "die", translation: "reptile keeping", category: "Terraristik" },
  { word: "Häutungsprozess", article: "der", translation: "molting process", category: "Terraristik" },
  { word: "Bodengrundwahl", article: "die", translation: "substrate choice", category: "Terraristik" },
  { word: "Temperaturgefälle", article: "das", translation: "temperature gradient (terrarium)", category: "Terraristik" },

  // Haustierhaltung (vertieft)
  { word: "Hundeerziehung", article: "die", translation: "dog training", category: "Haustierhaltung (vertieft)" },
  { word: "Katzenklo", article: "das", translation: "litter box", category: "Haustierhaltung (vertieft)" },
  { word: "Tierarztbesuch", article: "der", translation: "vet visit", category: "Haustierhaltung (vertieft)" },
  { word: "Futterumstellung", article: "die", translation: "diet change (pets)", category: "Haustierhaltung (vertieft)" },
  { word: "Wesenstest", article: "der", translation: "temperament test (dogs)", category: "Haustierhaltung (vertieft)" },

  // Getränkekunde
  { word: "Bierverkostung", article: "die", translation: "beer tasting", category: "Getränkekunde" },
  { word: "Kaffeeröstung", article: "die", translation: "coffee roasting", category: "Getränkekunde" },
  { word: "Teeaufguss", article: "der", translation: "tea infusion", category: "Getränkekunde" },
  { word: "Cocktailrezeptur", article: "die", translation: "cocktail recipe", category: "Getränkekunde" },
  { word: "Spirituosenherstellung", article: "die", translation: "spirits production", category: "Getränkekunde" },
  { word: "Destillationsapparat", article: "der", translation: "distillation apparatus", category: "Getränkekunde" },

  // Süßwarenherstellung
  { word: "Schokoladenherstellung", article: "die", translation: "chocolate making", category: "Süßwarenherstellung" },
  { word: "Kakaogehalt", article: "der", translation: "cocoa content", category: "Süßwarenherstellung" },
  { word: "Zuckerkristallisation", article: "die", translation: "sugar crystallization", category: "Süßwarenherstellung" },
  { word: "Pralinenfüllung", article: "die", translation: "praline filling", category: "Süßwarenherstellung" },
  { word: "Konditoreiware", article: "die", translation: "confectionery goods", category: "Süßwarenherstellung" },

  // Handelsgeschichte
  { word: "Gewürzhandel", article: "der", translation: "spice trade", category: "Handelsgeschichte" },
  { word: "Seidenstraße", article: "die", translation: "Silk Road", category: "Handelsgeschichte" },
  { word: "Karawanenweg", article: "der", translation: "caravan route", category: "Handelsgeschichte" },
  { word: "Kolonialware", article: "die", translation: "colonial goods", category: "Handelsgeschichte" },
  { word: "Handelskompanie", article: "die", translation: "trading company (historical)", category: "Handelsgeschichte" },

  // Zunftwesen
  { word: "Zunftmeister", article: "der", translation: "guild master", category: "Zunftwesen" },
  { word: "Gesellenwanderung", article: "die", translation: "journeyman travel tradition", category: "Zunftwesen" },
  { word: "Zunftzeichen", article: "das", translation: "guild emblem", category: "Zunftwesen" },
  { word: "Handwerksordnung", article: "die", translation: "craft guild regulations", category: "Zunftwesen" },

  // Kommunikationstechnik
  { word: "Satellitenkommunikation", article: "die", translation: "satellite communication", category: "Kommunikationstechnik" },
  { word: "Frequenzband", article: "das", translation: "frequency band", category: "Kommunikationstechnik" },
  { word: "Datenkompression", article: "die", translation: "data compression", category: "Kommunikationstechnik" },
  { word: "Übertragungskanal", article: "der", translation: "transmission channel", category: "Kommunikationstechnik" },
  { word: "Signaldämpfung", article: "die", translation: "signal attenuation", category: "Kommunikationstechnik" },

  // Schiffstechnik
  { word: "Antriebsleistung", article: "die", translation: "drive power", category: "Schiffstechnik" },
  { word: "Rumpfform", article: "die", translation: "hull shape", category: "Schiffstechnik" },
  { word: "Ballastwasser", article: "das", translation: "ballast water", category: "Schiffstechnik" },
  { word: "Schiffsstabilität", article: "die", translation: "ship stability", category: "Schiffstechnik" },
  { word: "Propellerwirkungsgrad", article: "der", translation: "propeller efficiency", category: "Schiffstechnik" },

  // Maschinenelemente
  { word: "Getriebeschaltung", article: "die", translation: "gear shifting", category: "Maschinenelemente" },
  { word: "Wellenlager", article: "das", translation: "shaft bearing", category: "Maschinenelemente" },
  { word: "Zahnradübersetzung", article: "die", translation: "gear ratio", category: "Maschinenelemente" },
  { word: "Dichtungsring", article: "der", translation: "sealing ring", category: "Maschinenelemente" },
  { word: "Schraubensicherung", article: "die", translation: "screw locking device", category: "Maschinenelemente" },

  // Qualitätsprüfung
  { word: "Prüfstandmessung", article: "die", translation: "test bench measurement", category: "Qualitätsprüfung" },
  { word: "Toleranzbereich", article: "der", translation: "tolerance range", category: "Qualitätsprüfung" },
  { word: "Messunsicherheit", article: "die", translation: "measurement uncertainty", category: "Qualitätsprüfung" },
  { word: "Prüfprotokoll", article: "das", translation: "test report", category: "Qualitätsprüfung" },
  { word: "Kalibrierung", article: "die", translation: "calibration", category: "Qualitätsprüfung" },

  // Ausweiswesen
  { word: "Passfoto", article: "das", translation: "passport photo", category: "Ausweiswesen" },
  { word: "Meldebescheinigung", article: "die", translation: "registration certificate", category: "Ausweiswesen" },
  { word: "Ausweisverlust", article: "der", translation: "loss of ID", category: "Ausweiswesen" },
  { word: "Passgültigkeit", article: "die", translation: "passport validity", category: "Ausweiswesen" },
  { word: "Wohnsitzanmeldung", article: "die", translation: "residence registration", category: "Ausweiswesen" },

  // Staatsangehörigkeitsrecht
  { word: "Einbürgerungsverfahren", article: "das", translation: "naturalization procedure", category: "Staatsangehörigkeitsrecht" },
  { word: "Doppelstaatsbürgerschaft", article: "die", translation: "dual citizenship", category: "Staatsangehörigkeitsrecht" },
  { word: "Aufenthaltstitel", article: "der", translation: "residence permit", category: "Staatsangehörigkeitsrecht" },
  { word: "Einbürgerungstest", article: "der", translation: "citizenship test", category: "Staatsangehörigkeitsrecht" },
  { word: "Staatsangehörigkeitsnachweis", article: "der", translation: "proof of citizenship", category: "Staatsangehörigkeitsrecht" },

  // Asylrecht
  { word: "Anhörungstermin", article: "der", translation: "hearing appointment", category: "Asylrecht" },
  { word: "Fluchtgrund", article: "der", translation: "reason for fleeing", category: "Asylrecht" },
  { word: "Abschiebungsandrohung", article: "die", translation: "deportation threat", category: "Asylrecht" },
  { word: "Duldungsstatus", article: "der", translation: "toleration status", category: "Asylrecht" },
  { word: "Erstaufnahmeeinrichtung", article: "die", translation: "initial reception center", category: "Asylrecht" },

  // Integrationspolitik
  { word: "Integrationskurs", article: "der", translation: "integration course", category: "Integrationspolitik" },
  { word: "Spracherwerbsförderung", article: "die", translation: "language acquisition support", category: "Integrationspolitik" },
  { word: "Anerkennungsverfahren", article: "das", translation: "recognition procedure (qualifications)", category: "Integrationspolitik" },
  { word: "Arbeitsmarktintegration", article: "die", translation: "labor market integration", category: "Integrationspolitik" },
  { word: "Beratungsangebot", article: "das", translation: "counseling service", category: "Integrationspolitik" },

  // Rentenversicherung
  { word: "Wartezeitregelung", article: "die", translation: "qualifying period rule", category: "Rentenversicherung" },
  { word: "Beitragsjahr", article: "das", translation: "contribution year", category: "Rentenversicherung" },
  { word: "Versorgungsausgleich", article: "der", translation: "pension equalization (divorce)", category: "Rentenversicherung" },
  { word: "Altersrente", article: "die", translation: "old-age pension", category: "Rentenversicherung" },
  { word: "Hinterbliebenenrente", article: "die", translation: "survivor pension", category: "Rentenversicherung" },
  { word: "Rentenbeitragssatz", article: "der", translation: "pension contribution rate", category: "Rentenversicherung" },

  // Krankenversicherung (vertieft)
  { word: "Krankengeldanspruch", article: "der", translation: "sick pay entitlement", category: "Krankenversicherung (vertieft)" },
  { word: "Behandlungskostenerstattung", article: "die", translation: "treatment cost reimbursement", category: "Krankenversicherung (vertieft)" },
  { word: "Zusatzversicherung", article: "die", translation: "supplementary insurance", category: "Krankenversicherung (vertieft)" },
  { word: "Wahltarif", article: "der", translation: "optional insurance tariff", category: "Krankenversicherung (vertieft)" },
  { word: "Versichertenkarte", article: "die", translation: "insurance card", category: "Krankenversicherung (vertieft)" },

  // Arbeitslosenversicherung
  { word: "Arbeitslosenmeldung", article: "die", translation: "unemployment registration", category: "Arbeitslosenversicherung" },
  { word: "Vermittlungsvorschlag", article: "der", translation: "job placement offer", category: "Arbeitslosenversicherung" },
  { word: "Sperrzeit", article: "die", translation: "benefit suspension period", category: "Arbeitslosenversicherung" },
  { word: "Bezugsdauer", article: "die", translation: "benefit duration", category: "Arbeitslosenversicherung" },
  { word: "Eingliederungszuschuss", article: "der", translation: "integration subsidy", category: "Arbeitslosenversicherung" },

  // Familienleistungen
  { word: "Elterngeldantrag", article: "der", translation: "parental allowance application", category: "Familienleistungen" },
  { word: "Kindergeldanspruch", article: "der", translation: "child benefit entitlement", category: "Familienleistungen" },
  { word: "Erziehungszeit", article: "die", translation: "parental leave period", category: "Familienleistungen" },
  { word: "Betreuungsgeld", article: "das", translation: "childcare allowance", category: "Familienleistungen" },
  { word: "Alleinerziehendenzuschlag", article: "der", translation: "single-parent supplement", category: "Familienleistungen" },

  // Baustellenbetrieb
  { word: "Bodenverdichtung", article: "die", translation: "soil compaction", category: "Baustellenbetrieb" },
  { word: "Baugrubensicherung", article: "die", translation: "excavation pit securing", category: "Baustellenbetrieb" },
  { word: "Gerüstbau", article: "der", translation: "scaffolding construction", category: "Baustellenbetrieb" },
  { word: "Baustellenlogistik", article: "die", translation: "construction site logistics", category: "Baustellenbetrieb" },
  { word: "Bauzeitplan", article: "der", translation: "construction schedule", category: "Baustellenbetrieb" },
  { word: "Baustofflieferung", article: "die", translation: "building material delivery", category: "Baustellenbetrieb" },

  // Betonbau
  { word: "Betonmischung", article: "die", translation: "concrete mix", category: "Betonbau" },
  { word: "Bewehrungsstahl", article: "der", translation: "reinforcing steel", category: "Betonbau" },
  { word: "Schalungsbau", article: "der", translation: "formwork construction", category: "Betonbau" },
  { word: "Aushärtungszeit", article: "die", translation: "curing time", category: "Betonbau" },
  { word: "Betondeckung", article: "die", translation: "concrete cover", category: "Betonbau" },

  // Maurerhandwerk
  { word: "Mauerwerksverband", article: "der", translation: "masonry bond", category: "Maurerhandwerk" },
  { word: "Fugenverfüllung", article: "die", translation: "joint filling", category: "Maurerhandwerk" },
  { word: "Ziegelstein", article: "der", translation: "brick", category: "Maurerhandwerk" },
  { word: "Mörtelmischung", article: "die", translation: "mortar mix", category: "Maurerhandwerk" },
  { word: "Wanddicke", article: "die", translation: "wall thickness", category: "Maurerhandwerk" },

  // Fensterbau
  { word: "Fensterrahmenmontage", article: "die", translation: "window frame installation", category: "Fensterbau" },
  { word: "Verglasungsart", article: "die", translation: "glazing type", category: "Fensterbau" },
  { word: "Dichtungsprofil", article: "das", translation: "sealing profile", category: "Fensterbau" },
  { word: "Beschlagsystem", article: "das", translation: "window hardware system", category: "Fensterbau" },
  { word: "Wärmedurchgangskoeffizient", article: "der", translation: "thermal transmittance coefficient", category: "Fensterbau" },

  // Nahverkehr
  { word: "Fahrgastraum", article: "der", translation: "passenger compartment", category: "Nahverkehr" },
  { word: "Taktfahrplan", article: "der", translation: "clock-face timetable", category: "Nahverkehr" },
  { word: "Umsteigemöglichkeit", article: "die", translation: "transfer option", category: "Nahverkehr" },
  { word: "Haltestellenabstand", article: "der", translation: "stop spacing", category: "Nahverkehr" },
  { word: "Bordcomputer", article: "der", translation: "onboard computer (transit)", category: "Nahverkehr" },
  { word: "Liniennetz", article: "das", translation: "route network", category: "Nahverkehr" },

  // Stadtverkehr
  { word: "Parkraumbewirtschaftung", article: "die", translation: "parking space management", category: "Stadtverkehr" },
  { word: "Verkehrsinsel", article: "die", translation: "traffic island", category: "Stadtverkehr" },
  { word: "Radwegausbau", article: "der", translation: "bike lane expansion", category: "Stadtverkehr" },
  { word: "Einbahnstraßenregelung", article: "die", translation: "one-way street regulation", category: "Stadtverkehr" },
  { word: "Ampelschaltung", article: "die", translation: "traffic light sequencing", category: "Stadtverkehr" },

  // Parkraumwesen
  { word: "Parkhausauslastung", article: "die", translation: "parking garage occupancy", category: "Parkraumwesen" },
  { word: "Schrankenanlage", article: "die", translation: "barrier system", category: "Parkraumwesen" },
  { word: "Parkscheinautomat", article: "der", translation: "parking ticket machine", category: "Parkraumwesen" },
  { word: "Kurzzeitparkplatz", article: "der", translation: "short-term parking space", category: "Parkraumwesen" },

  // Mobilitätsdienste
  { word: "Carsharing-Angebot", article: "das", translation: "car-sharing offer", category: "Mobilitätsdienste" },
  { word: "Mietwagenrückgabe", article: "die", translation: "rental car return", category: "Mobilitätsdienste" },
  { word: "Fahrdienstvermittlung", article: "die", translation: "ride-hailing service", category: "Mobilitätsdienste" },
  { word: "Ladesäulennetz", article: "das", translation: "charging station network", category: "Mobilitätsdienste" },
  { word: "Elektrorollerverleih", article: "der", translation: "e-scooter rental", category: "Mobilitätsdienste" },

  // Biotechnologie (vertieft2)
  { word: "Zellkulturmedium", article: "das", translation: "cell culture medium", category: "Biotechnologie (vertieft2)" },
  { word: "Fermentationsprozess", article: "der", translation: "fermentation process", category: "Biotechnologie (vertieft2)" },
  { word: "Proteinreinigung", article: "die", translation: "protein purification", category: "Biotechnologie (vertieft2)" },
  { word: "Gentransfer", article: "der", translation: "gene transfer", category: "Biotechnologie (vertieft2)" },
  { word: "Bioreaktorbetrieb", article: "der", translation: "bioreactor operation", category: "Biotechnologie (vertieft2)" },
  { word: "Enzymproduktion", article: "die", translation: "enzyme production", category: "Biotechnologie (vertieft2)" },

  // Medizintechnik
  { word: "Bildgebungsverfahren", article: "das", translation: "imaging procedure", category: "Medizintechnik" },
  { word: "Implantatmaterial", article: "das", translation: "implant material", category: "Medizintechnik" },
  { word: "Überwachungsmonitor", article: "der", translation: "monitoring display", category: "Medizintechnik" },
  { word: "Medizinproduktzulassung", article: "die", translation: "medical device approval", category: "Medizintechnik" },
  { word: "Sterilisationsverfahren", article: "das", translation: "sterilization procedure", category: "Medizintechnik" },

  // Landtechnik
  { word: "Erntemaschine", article: "die", translation: "harvesting machine", category: "Landtechnik" },
  { word: "Saatgutauswahl", article: "die", translation: "seed selection", category: "Landtechnik" },
  { word: "Bodenbearbeitung", article: "die", translation: "soil tillage", category: "Landtechnik" },
  { word: "Bewässerungstechnik", article: "die", translation: "irrigation technology", category: "Landtechnik" },
  { word: "Mähdrescherleistung", article: "die", translation: "combine harvester output", category: "Landtechnik" },
  { word: "Traktorleistung", article: "die", translation: "tractor power", category: "Landtechnik" },

  // Gewächshausanbau
  { word: "Gewächshausklima", article: "das", translation: "greenhouse climate", category: "Gewächshausanbau" },
  { word: "Substratmischung", article: "die", translation: "substrate mix", category: "Gewächshausanbau" },
  { word: "Belichtungsdauer", article: "die", translation: "lighting duration", category: "Gewächshausanbau" },
  { word: "Nährstofflösung", article: "die", translation: "nutrient solution", category: "Gewächshausanbau" },
  { word: "Ertragssteigerung", article: "die", translation: "yield increase", category: "Gewächshausanbau" },

  // Ökolandbau
  { word: "Bioanbau", article: "der", translation: "organic farming", category: "Ökolandbau" },
  { word: "Zertifizierungsstelle", article: "die", translation: "certification body", category: "Ökolandbau" },
  { word: "Fruchtwechsel", article: "der", translation: "crop rotation", category: "Ökolandbau" },
  { word: "Kompostwirtschaft", article: "die", translation: "composting practice", category: "Ökolandbau" },
  { word: "Nützlingseinsatz", article: "der", translation: "use of beneficial insects", category: "Ökolandbau" },

  // Direktvermarktung
  { word: "Hofladenverkauf", article: "der", translation: "farm shop sales", category: "Direktvermarktung" },
  { word: "Wochenmarktstand", article: "der", translation: "farmers market stall", category: "Direktvermarktung" },
  { word: "Regionalvermarktung", article: "die", translation: "regional marketing", category: "Direktvermarktung" },
  { word: "Erzeugerpreis", article: "der", translation: "producer price", category: "Direktvermarktung" },
  { word: "Abokiste", article: "die", translation: "subscription produce box", category: "Direktvermarktung" },

  // Rechtschreibung (vertieft)
  { word: "Silbentrennung", article: "die", translation: "syllable division", category: "Rechtschreibung (vertieft)" },
  { word: "Zeichensetzungsregel", article: "die", translation: "punctuation rule", category: "Rechtschreibung (vertieft)" },
  { word: "Großschreibungsregel", article: "die", translation: "capitalization rule", category: "Rechtschreibung (vertieft)" },
  { word: "Fremdwortschreibung", article: "die", translation: "spelling of loanwords", category: "Rechtschreibung (vertieft)" },
  { word: "Kommaregelung", article: "die", translation: "comma rule", category: "Rechtschreibung (vertieft)" },

  // Grammatikunterricht
  { word: "Satzgliedfunktion", article: "die", translation: "sentence element function", category: "Grammatikunterricht" },
  { word: "Zeitformbildung", article: "die", translation: "tense formation", category: "Grammatikunterricht" },
  { word: "Fallendung", article: "die", translation: "case ending", category: "Grammatikunterricht" },
  { word: "Konjunktivgebrauch", article: "der", translation: "use of subjunctive", category: "Grammatikunterricht" },
  { word: "Satzbauübung", article: "die", translation: "sentence-building exercise", category: "Grammatikunterricht" },

  // Schreibkompetenz
  { word: "Textsortenmerkmal", article: "das", translation: "text type feature", category: "Schreibkompetenz" },
  { word: "Gliederungsstruktur", article: "die", translation: "outline structure", category: "Schreibkompetenz" },
  { word: "Textbaustein", article: "der", translation: "text block/template", category: "Schreibkompetenz" },
  { word: "Textüberarbeitung", article: "die", translation: "text revision", category: "Schreibkompetenz" },
  { word: "Argumentaufbau", article: "der", translation: "argument construction", category: "Schreibkompetenz" },

  // Lesekompetenz
  { word: "Lesestrategie", article: "die", translation: "reading strategy", category: "Lesekompetenz" },
  { word: "Textverständnisfrage", article: "die", translation: "reading comprehension question", category: "Lesekompetenz" },
  { word: "Sinnentnahme", article: "die", translation: "extraction of meaning", category: "Lesekompetenz" },
  { word: "Lesegeschwindigkeit", article: "die", translation: "reading speed", category: "Lesekompetenz" },
  { word: "Textmarkierung", article: "die", translation: "text highlighting", category: "Lesekompetenz" },

  // Fußballwesen
  { word: "Feldspieler", article: "der", translation: "field player", category: "Fußballwesen" },
  { word: "Trainerwechsel", article: "der", translation: "coaching change", category: "Fußballwesen" },
  { word: "Ligatabelle", article: "die", translation: "league table", category: "Fußballwesen" },
  { word: "Vereinswappen", article: "das", translation: "club crest", category: "Fußballwesen" },
  { word: "Fanverhalten", article: "das", translation: "fan behavior", category: "Fußballwesen" },
  { word: "Transferperiode", article: "die", translation: "transfer window", category: "Fußballwesen" },

  // Basketballwesen
  { word: "Korbwurf", article: "der", translation: "basketball shot", category: "Basketballwesen" },
  { word: "Ballkontrolle", article: "die", translation: "ball control", category: "Basketballwesen" },
  { word: "Spielzugtaktik", article: "die", translation: "play tactic", category: "Basketballwesen" },
  { word: "Foulgrenze", article: "die", translation: "foul limit", category: "Basketballwesen" },
  { word: "Verlängerungsspiel", article: "das", translation: "overtime game", category: "Basketballwesen" },

  // Baseballwesen
  { word: "Schlagmann", article: "der", translation: "batter (baseball)", category: "Baseballwesen" },
  { word: "Wurfarm", article: "der", translation: "pitching arm", category: "Baseballwesen" },
  { word: "Spielfeldbegrenzung", article: "die", translation: "field boundary", category: "Baseballwesen" },
  { word: "Inningszahl", article: "die", translation: "number of innings", category: "Baseballwesen" },

  // Eishockeywesen
  { word: "Eishockeyschläger", article: "der", translation: "hockey stick", category: "Eishockeywesen" },
  { word: "Bandengrenze", article: "die", translation: "rink boards boundary", category: "Eishockeywesen" },
  { word: "Powerplaysituation", article: "die", translation: "power play situation", category: "Eishockeywesen" },
  { word: "Torschussstatistik", article: "die", translation: "shots-on-goal statistics", category: "Eishockeywesen" },
  { word: "Eisfläche", article: "die", translation: "ice surface", category: "Eishockeywesen" },

  // Modellflugsport
  { word: "Segelfliegen", article: "das", translation: "gliding (sport)", category: "Modellflugsport" },
  { word: "Modellflugzeugbau", article: "der", translation: "model aircraft building", category: "Modellflugsport" },
  { word: "Fernsteuerungssignal", article: "das", translation: "remote control signal", category: "Modellflugsport" },
  { word: "Flugstabilität", article: "die", translation: "flight stability", category: "Modellflugsport" },
  { word: "Landeplatzwahl", article: "die", translation: "landing site choice", category: "Modellflugsport" },

  // Drohnentechnik
  { word: "Drohnensteuerung", article: "die", translation: "drone control", category: "Drohnentechnik" },
  { word: "Flugzeitbegrenzung", article: "die", translation: "flight time limit", category: "Drohnentechnik" },
  { word: "Kameradrohne", article: "die", translation: "camera drone", category: "Drohnentechnik" },
  { word: "Flugverbotszone", article: "die", translation: "no-fly zone", category: "Drohnentechnik" },
  { word: "Drohnenakku", article: "der", translation: "drone battery", category: "Drohnentechnik" },

  // Modelleisenbahn
  { word: "Modelleisenbahnanlage", article: "die", translation: "model railway layout", category: "Modelleisenbahn" },
  { word: "Gleisplan", article: "der", translation: "track plan", category: "Modelleisenbahn" },
  { word: "Modelllandschaft", article: "die", translation: "model landscape", category: "Modelleisenbahn" },
  { word: "Steuerungselektronik", article: "die", translation: "control electronics", category: "Modelleisenbahn" },

  // Brett- & Kartenspiele
  { word: "Kartenspielregel", article: "die", translation: "card game rule", category: "Brett- & Kartenspiele" },
  { word: "Spielzuganzahl", article: "die", translation: "number of moves", category: "Brett- & Kartenspiele" },
  { word: "Würfelwurf", article: "der", translation: "dice roll", category: "Brett- & Kartenspiele" },
  { word: "Spielfigur", article: "die", translation: "game piece", category: "Brett- & Kartenspiele" },
  { word: "Punktestand", article: "der", translation: "score standing", category: "Brett- & Kartenspiele" },

  // Buchbinderhandwerk
  { word: "Buchbindung", article: "die", translation: "bookbinding", category: "Buchbinderhandwerk" },
  { word: "Einbandgestaltung", article: "die", translation: "cover design", category: "Buchbinderhandwerk" },
  { word: "Seitenfalzung", article: "die", translation: "page folding", category: "Buchbinderhandwerk" },
  { word: "Buchrücken", article: "der", translation: "book spine", category: "Buchbinderhandwerk" },
  { word: "Papierschnitt", article: "der", translation: "paper cutting", category: "Buchbinderhandwerk" },

  // Papierkunst
  { word: "Origamifaltung", article: "die", translation: "origami folding", category: "Papierkunst" },
  { word: "Papierschnitttechnik", article: "die", translation: "paper cutting technique", category: "Papierkunst" },
  { word: "Faltmuster", article: "das", translation: "fold pattern", category: "Papierkunst" },
  { word: "Papierfestigkeit", article: "die", translation: "paper strength", category: "Papierkunst" },

  // Handarbeit
  { word: "Stricktechnik", article: "die", translation: "knitting technique", category: "Handarbeit" },
  { word: "Maschenanzahl", article: "die", translation: "stitch count", category: "Handarbeit" },
  { word: "Häkelmuster", article: "das", translation: "crochet pattern", category: "Handarbeit" },
  { word: "Stickfaden", article: "der", translation: "embroidery thread", category: "Handarbeit" },
  { word: "Nähmaschineneinstellung", article: "die", translation: "sewing machine setting", category: "Handarbeit" },
  { word: "Wolldicke", article: "die", translation: "yarn thickness", category: "Handarbeit" },

  // Wohnkomfort
  { word: "Kaminfeuer", article: "das", translation: "fireplace fire", category: "Wohnkomfort" },
  { word: "Raumtemperaturregelung", article: "die", translation: "room temperature control", category: "Wohnkomfort" },
  { word: "Fußbodenheizung", article: "die", translation: "underfloor heating", category: "Wohnkomfort" },
  { word: "Lichtsteuerung", article: "die", translation: "lighting control", category: "Wohnkomfort" },
  { word: "Raumluftqualität", article: "die", translation: "indoor air quality", category: "Wohnkomfort" },

  // Balkon & Terrasse
  { word: "Balkonbepflanzung", article: "die", translation: "balcony planting", category: "Balkon & Terrasse" },
  { word: "Terrassenüberdachung", article: "die", translation: "patio roofing", category: "Balkon & Terrasse" },
  { word: "Sichtschutzelement", article: "das", translation: "privacy screen element", category: "Balkon & Terrasse" },
  { word: "Outdoormöbel", article: "das", translation: "outdoor furniture", category: "Balkon & Terrasse" },
  { word: "Pflanzkübel", article: "der", translation: "planter", category: "Balkon & Terrasse" },

  // Schwimmbadtechnik
  { word: "Poolwasserpflege", article: "die", translation: "pool water maintenance", category: "Schwimmbadtechnik" },
  { word: "Chlorgehalt", article: "der", translation: "chlorine level", category: "Schwimmbadtechnik" },
  { word: "Poolfilter", article: "der", translation: "pool filter", category: "Schwimmbadtechnik" },
  { word: "Beckenabdeckung", article: "die", translation: "pool cover", category: "Schwimmbadtechnik" },
  { word: "Wassertemperaturregelung", article: "die", translation: "water temperature control", category: "Schwimmbadtechnik" },

  // Wellnessbereich
  { word: "Saunaaufguss", article: "der", translation: "sauna infusion", category: "Wellnessbereich" },
  { word: "Dampfbadklima", article: "das", translation: "steam bath climate", category: "Wellnessbereich" },
  { word: "Ruhebereich", article: "der", translation: "relaxation area", category: "Wellnessbereich" },
  { word: "Massageliege", article: "die", translation: "massage table", category: "Wellnessbereich" },
  { word: "Wellnessangebot", article: "das", translation: "wellness offering", category: "Wellnessbereich" },

  // Luftfracht
  { word: "Frachtflugzeug", article: "das", translation: "cargo aircraft", category: "Luftfracht" },
  { word: "Ladeeinheit", article: "die", translation: "loading unit", category: "Luftfracht" },
  { word: "Frachtraumkapazität", article: "die", translation: "cargo hold capacity", category: "Luftfracht" },
  { word: "Luftfrachtbrief", article: "der", translation: "air waybill", category: "Luftfracht" },
  { word: "Expresszustellung", article: "die", translation: "express delivery", category: "Luftfracht" },

  // Gefahrguttransport
  { word: "Gefahrgutkennzeichnung", article: "die", translation: "hazardous materials labeling", category: "Gefahrguttransport" },
  { word: "Gefahrstoffklasse", article: "die", translation: "hazard class", category: "Gefahrguttransport" },
  { word: "Sicherheitsdatenblatt", article: "das", translation: "safety data sheet", category: "Gefahrguttransport" },
  { word: "Transportgenehmigung", article: "die", translation: "transport permit", category: "Gefahrguttransport" },
  { word: "Havariemanagement", article: "das", translation: "incident management (transport)", category: "Gefahrguttransport" },

  // Notfallmanagement
  { word: "Notrufzentrale", article: "die", translation: "emergency call center", category: "Notfallmanagement" },
  { word: "Einsatzkoordination", article: "die", translation: "operations coordination", category: "Notfallmanagement" },
  { word: "Meldekette", article: "die", translation: "reporting chain", category: "Notfallmanagement" },
  { word: "Lagebild", article: "das", translation: "situation overview", category: "Notfallmanagement" },
  { word: "Alarmierungskette", article: "die", translation: "alert chain", category: "Notfallmanagement" },

  // Gesundheitsvorsorge
  { word: "Impfzentrum", article: "das", translation: "vaccination center", category: "Gesundheitsvorsorge" },
  { word: "Gesundheitsvorsorgeplan", article: "der", translation: "preventive health plan", category: "Gesundheitsvorsorge" },
  { word: "Gesundheitscheck", article: "der", translation: "health check", category: "Gesundheitsvorsorge" },
  { word: "Vorsorgevollmacht", article: "die", translation: "healthcare power of attorney", category: "Gesundheitsvorsorge" },
  { word: "Präventionsangebot", article: "das", translation: "prevention offering", category: "Gesundheitsvorsorge" },

  // Epidemiologie
  { word: "Epidemieverlauf", article: "der", translation: "epidemic course", category: "Epidemiologie" },
  { word: "Infektionsrate", article: "die", translation: "infection rate", category: "Epidemiologie" },
  { word: "Ausbruchsherd", article: "der", translation: "outbreak source", category: "Epidemiologie" },
  { word: "Erregerübertragung", article: "die", translation: "pathogen transmission", category: "Epidemiologie" },
  { word: "Kontaktnachverfolgung", article: "die", translation: "contact tracing", category: "Epidemiologie" },

  // Public Health (vertieft)
  { word: "Bevölkerungsgesundheit", article: "die", translation: "population health", category: "Public Health (vertieft)" },
  { word: "Gesundheitskampagne", article: "die", translation: "health campaign", category: "Public Health (vertieft)" },
  { word: "Gesundheitsförderung", article: "die", translation: "health promotion", category: "Public Health (vertieft)" },
  { word: "Gesundheitsdatenbank", article: "die", translation: "health database", category: "Public Health (vertieft)" },

  // Vermögensverwaltung
  { word: "Vermögensverwalter", article: "der", translation: "asset manager", category: "Vermögensverwaltung" },
  { word: "Portfoliostreuung", article: "die", translation: "portfolio diversification", category: "Vermögensverwaltung" },
  { word: "Renditeerwartung", article: "die", translation: "return expectation", category: "Vermögensverwaltung" },
  { word: "Vermögensaufbau", article: "der", translation: "wealth accumulation", category: "Vermögensverwaltung" },
  { word: "Depotgebühr", article: "die", translation: "custody account fee", category: "Vermögensverwaltung" },
  { word: "Anlagehorizont", article: "der", translation: "investment horizon", category: "Vermögensverwaltung" },

  // Investmentfonds
  { word: "Fondsmanagement", article: "das", translation: "fund management", category: "Investmentfonds" },
  { word: "Ausschüttungsquote", article: "die", translation: "payout ratio", category: "Investmentfonds" },
  { word: "Fondsvolumen", article: "das", translation: "fund volume", category: "Investmentfonds" },
  { word: "Sondervermögen", article: "das", translation: "special asset fund", category: "Investmentfonds" },
  { word: "Verwaltungsgebühr", article: "die", translation: "management fee", category: "Investmentfonds" },

  // Börsenwesen
  { word: "Aktienindex", article: "der", translation: "stock index", category: "Börsenwesen" },
  { word: "Handelsvolumen", article: "das", translation: "trading volume", category: "Börsenwesen" },
  { word: "Kurschwankung", article: "die", translation: "price fluctuation", category: "Börsenwesen" },
  { word: "Börsenaufsicht", article: "die", translation: "stock exchange regulator", category: "Börsenwesen" },
  { word: "Handelsaussetzung", article: "die", translation: "trading suspension", category: "Börsenwesen" },
  { word: "Insiderhandel", article: "der", translation: "insider trading", category: "Börsenwesen" },

  // Buchhaltung
  { word: "Buchführungspflicht", article: "die", translation: "bookkeeping obligation", category: "Buchhaltung" },
  { word: "Kontenrahmen", article: "der", translation: "chart of accounts", category: "Buchhaltung" },
  { word: "Bilanzsumme", article: "die", translation: "balance sheet total", category: "Buchhaltung" },
  { word: "Erfolgsrechnung", article: "die", translation: "income statement", category: "Buchhaltung" },
  { word: "Rechnungsabgrenzung", article: "die", translation: "accrual accounting", category: "Buchhaltung" },

  // Kirchenwesen
  { word: "Kirchengemeinde", article: "die", translation: "parish community", category: "Kirchenwesen" },
  { word: "Gottesdienstordnung", article: "die", translation: "order of worship", category: "Kirchenwesen" },
  { word: "Kirchenmusik", article: "die", translation: "church music", category: "Kirchenwesen" },
  { word: "Glockengeläut", article: "das", translation: "bell ringing", category: "Kirchenwesen" },
  { word: "Kirchensteuer", article: "die", translation: "church tax", category: "Kirchenwesen" },

  // Klosterleben
  { word: "Klosterregel", article: "die", translation: "monastic rule", category: "Klosterleben" },
  { word: "Schweigegelübde", article: "das", translation: "vow of silence", category: "Klosterleben" },
  { word: "Klausurbereich", article: "der", translation: "cloistered area", category: "Klosterleben" },
  { word: "Ordensgemeinschaft", article: "die", translation: "religious order community", category: "Klosterleben" },
  { word: "Klostertagesordnung", article: "die", translation: "monastery daily schedule", category: "Klosterleben" },

  // Spirituelle Praxis
  { word: "Meditationsübung", article: "die", translation: "meditation exercise", category: "Spirituelle Praxis" },
  { word: "Atemmeditation", article: "die", translation: "breath meditation", category: "Spirituelle Praxis" },
  { word: "Innenschau", article: "die", translation: "introspection", category: "Spirituelle Praxis" },
  { word: "Erleuchtungserfahrung", article: "die", translation: "enlightenment experience", category: "Spirituelle Praxis" },
  { word: "Gebetshaltung", article: "die", translation: "prayer posture", category: "Spirituelle Praxis" },

  // Yogapraxis
  { word: "Yogastellung", article: "die", translation: "yoga pose", category: "Yogapraxis" },
  { word: "Atemrhythmus", article: "der", translation: "breathing rhythm", category: "Yogapraxis" },
  { word: "Dehnfähigkeit", article: "die", translation: "flexibility", category: "Yogapraxis" },
  { word: "Yogamatte", article: "die", translation: "yoga mat", category: "Yogapraxis" },
  { word: "Körperwahrnehmung", article: "die", translation: "body awareness", category: "Yogapraxis" },

  // Stadionwesen
  { word: "Zuschauerkapazität", article: "die", translation: "spectator capacity", category: "Stadionwesen" },
  { word: "Rasenpflege", article: "die", translation: "turf maintenance", category: "Stadionwesen" },
  { word: "Flutlichtanlage", article: "die", translation: "floodlight system", category: "Stadionwesen" },
  { word: "Stadionsicherheit", article: "die", translation: "stadium security", category: "Stadionwesen" },
  { word: "Tribünenplatz", article: "der", translation: "grandstand seat", category: "Stadionwesen" },

  // Sportmedizin
  { word: "Dopingkontrolle", article: "die", translation: "doping control", category: "Sportmedizin" },
  { word: "Verletzungsrisiko", article: "das", translation: "injury risk", category: "Sportmedizin" },
  { word: "Belastungssteuerung", article: "die", translation: "load management (training)", category: "Sportmedizin" },
  { word: "Muskelfaserriss", article: "der", translation: "muscle fiber tear", category: "Sportmedizin" },
  { word: "Rehabilitationstraining", article: "das", translation: "rehabilitation training", category: "Sportmedizin" },

  // Sporternährung
  { word: "Wettkampfernährung", article: "die", translation: "competition nutrition", category: "Sporternährung" },
  { word: "Proteinzufuhr", article: "die", translation: "protein intake", category: "Sporternährung" },
  { word: "Elektrolythaushalt", article: "der", translation: "electrolyte balance", category: "Sporternährung" },
  { word: "Kohlenhydratspeicher", article: "der", translation: "carbohydrate storage", category: "Sporternährung" },
  { word: "Flüssigkeitshaushalt", article: "der", translation: "fluid balance", category: "Sporternährung" },

  // Fitnesstraining
  { word: "Kraftausdauer", article: "die", translation: "strength endurance", category: "Fitnesstraining" },
  { word: "Muskelaufbautraining", article: "das", translation: "muscle-building training", category: "Fitnesstraining" },
  { word: "Trainingsintensität", article: "die", translation: "training intensity", category: "Fitnesstraining" },
  { word: "Wiederholungszahl", article: "die", translation: "repetition count", category: "Fitnesstraining" },
  { word: "Aufwärmphase", article: "die", translation: "warm-up phase", category: "Fitnesstraining" },

  // Militärausbildung
  { word: "Truppenübungsplatz", article: "der", translation: "military training ground", category: "Militärausbildung" },
  { word: "Grundausbildung", article: "die", translation: "basic training", category: "Militärausbildung" },
  { word: "Manöverplanung", article: "die", translation: "maneuver planning", category: "Militärausbildung" },
  { word: "Waffenübung", article: "die", translation: "weapons drill", category: "Militärausbildung" },
  { word: "Kommandostruktur", article: "die", translation: "command structure", category: "Militärausbildung" },

  // Nachrichtendienstwesen
  { word: "Nachrichtendienst", article: "der", translation: "intelligence service", category: "Nachrichtendienstwesen" },
  { word: "Informationsbeschaffung", article: "die", translation: "information gathering", category: "Nachrichtendienstwesen" },
  { word: "Geheimhaltungsstufe", article: "die", translation: "classification level", category: "Nachrichtendienstwesen" },
  { word: "Spionageabwehr", article: "die", translation: "counterintelligence", category: "Nachrichtendienstwesen" },
  { word: "Agentenring", article: "der", translation: "spy ring", category: "Nachrichtendienstwesen" },

  // Grenzschutz
  { word: "Grenzsicherungsanlage", article: "die", translation: "border security installation", category: "Grenzschutz" },
  { word: "Grenzübergangsstelle", article: "die", translation: "border crossing point", category: "Grenzschutz" },
  { word: "Passkontrolle", article: "die", translation: "passport control", category: "Grenzschutz" },
  { word: "Schleusungskriminalität", article: "die", translation: "human smuggling crime", category: "Grenzschutz" },

  // Friedenssicherung
  { word: "Friedensmission", article: "die", translation: "peacekeeping mission", category: "Friedenssicherung" },
  { word: "Waffenstillstandsabkommen", article: "das", translation: "ceasefire agreement", category: "Friedenssicherung" },
  { word: "Truppenrückzug", article: "der", translation: "troop withdrawal", category: "Friedenssicherung" },
  { word: "Entwaffnungsprogramm", article: "das", translation: "disarmament program", category: "Friedenssicherung" },
  { word: "Blauhelmtruppe", article: "die", translation: "UN peacekeeping troops", category: "Friedenssicherung" },

  // Computertechnik
  { word: "Prozessorkern", article: "der", translation: "processor core", category: "Computertechnik" },
  { word: "Arbeitsspeichermodul", article: "das", translation: "RAM module", category: "Computertechnik" },
  { word: "Grafikkartenleistung", article: "die", translation: "graphics card performance", category: "Computertechnik" },
  { word: "Prozessorkühlung", article: "die", translation: "processor cooling", category: "Computertechnik" },
  { word: "Bootvorgang", article: "der", translation: "boot process", category: "Computertechnik" },
  { word: "Datenträger", article: "der", translation: "storage medium", category: "Computertechnik" },

  // Heimnetzwerk
  { word: "Netzwerkkabel", article: "das", translation: "network cable", category: "Heimnetzwerk" },
  { word: "Routerkonfiguration", article: "die", translation: "router configuration", category: "Heimnetzwerk" },
  { word: "WLAN-Reichweite", article: "die", translation: "Wi-Fi range", category: "Heimnetzwerk" },
  { word: "Netzwerkfreigabe", article: "die", translation: "network share", category: "Heimnetzwerk" },
  { word: "Verbindungsabbruch", article: "der", translation: "connection dropout", category: "Heimnetzwerk" },

  // Softwarelizenzierung
  { word: "Lizenzschlüsselverwaltung", article: "die", translation: "license key management", category: "Softwarelizenzierung" },
  { word: "Nutzungsbedingung", article: "die", translation: "terms of use", category: "Softwarelizenzierung" },
  { word: "Open-Source-Lizenz", article: "die", translation: "open source license", category: "Softwarelizenzierung" },
  { word: "Aktivierungsschlüssel", article: "der", translation: "activation key", category: "Softwarelizenzierung" },
  { word: "Abonnementmodell", article: "das", translation: "subscription model", category: "Softwarelizenzierung" },

  // Softwarefehlerbehebung
  { word: "Fehlermeldung", article: "die", translation: "error message", category: "Softwarefehlerbehebung" },
  { word: "Absturzursache", article: "die", translation: "crash cause", category: "Softwarefehlerbehebung" },
  { word: "Updateinstallation", article: "die", translation: "update installation", category: "Softwarefehlerbehebung" },
  { word: "Kompatibilitätsproblem", article: "das", translation: "compatibility issue", category: "Softwarefehlerbehebung" },
  { word: "Systemwiederherstellung", article: "die", translation: "system restore", category: "Softwarefehlerbehebung" },

  // Lokomotivtechnik
  { word: "Zugkraftmessung", article: "die", translation: "traction force measurement", category: "Lokomotivtechnik" },
  { word: "Druckluftbremse", article: "die", translation: "air brake (train)", category: "Lokomotivtechnik" },
  { word: "Achslast", article: "die", translation: "axle load", category: "Lokomotivtechnik" },
  { word: "Stromabnehmer", article: "der", translation: "pantograph", category: "Lokomotivtechnik" },
  { word: "Rangierbetrieb", article: "der", translation: "shunting operation", category: "Lokomotivtechnik" },

  // Tunnelbau
  { word: "Tunnelbohrung", article: "die", translation: "tunnel boring", category: "Tunnelbau" },
  { word: "Tunnelauskleidung", article: "die", translation: "tunnel lining", category: "Tunnelbau" },
  { word: "Vortriebsgeschwindigkeit", article: "die", translation: "tunneling advance rate", category: "Tunnelbau" },
  { word: "Tunnelbelüftung", article: "die", translation: "tunnel ventilation", category: "Tunnelbau" },
  { word: "Gebirgsdruck", article: "der", translation: "rock pressure", category: "Tunnelbau" },

  // Brückenbau
  { word: "Brückenpfeiler", article: "der", translation: "bridge pier", category: "Brückenbau" },
  { word: "Tragfähigkeitsberechnung", article: "die", translation: "load-bearing capacity calculation", category: "Brückenbau" },
  { word: "Spannbetonträger", article: "der", translation: "prestressed concrete girder", category: "Brückenbau" },
  { word: "Brückeninspektion", article: "die", translation: "bridge inspection", category: "Brückenbau" },
  { word: "Fahrbahnbelag", article: "der", translation: "road surface (bridge)", category: "Brückenbau" },

  // Erdbau
  { word: "Dammschüttung", article: "die", translation: "embankment construction", category: "Erdbau" },
  { word: "Böschungswinkel", article: "der", translation: "slope angle", category: "Erdbau" },
  { word: "Aushubmenge", article: "die", translation: "excavation volume", category: "Erdbau" },
  { word: "Bodenklasse", article: "die", translation: "soil classification", category: "Erdbau" },
  { word: "Verdichtungsgrad", article: "der", translation: "compaction degree", category: "Erdbau" },

  // Erwachsenenbildung (vertieft)
  { word: "Alphabetisierungskurs", article: "der", translation: "literacy course", category: "Erwachsenenbildung (vertieft)" },
  { word: "Weiterbildungsträger", article: "der", translation: "further education provider", category: "Erwachsenenbildung (vertieft)" },
  { word: "Lernzielkontrolle", article: "die", translation: "learning objective assessment", category: "Erwachsenenbildung (vertieft)" },
  { word: "Bildungsurlaub", article: "der", translation: "educational leave", category: "Erwachsenenbildung (vertieft)" },
  { word: "Fernstudiengang", article: "der", translation: "distance learning program", category: "Erwachsenenbildung (vertieft)" },

  // Hochschuldidaktik
  { word: "Seminarleitung", article: "die", translation: "seminar facilitation", category: "Hochschuldidaktik" },
  { word: "Vorlesungsverzeichnis", article: "das", translation: "course catalog", category: "Hochschuldidaktik" },
  { word: "Modulhandbuch", article: "das", translation: "module handbook", category: "Hochschuldidaktik" },
  { word: "Studienleistung", article: "die", translation: "academic credit", category: "Hochschuldidaktik" },
  { word: "Betreuungsverhältnis", article: "das", translation: "supervision relationship (thesis)", category: "Hochschuldidaktik" },

  // Berufspädagogik
  { word: "Ausbildungsvertrag", article: "der", translation: "apprenticeship contract", category: "Berufspädagogik" },
  { word: "Praxisanleitung", article: "die", translation: "practical instruction", category: "Berufspädagogik" },
  { word: "Berufsschulpflicht", article: "die", translation: "vocational school obligation", category: "Berufspädagogik" },
  { word: "Ausbildungsbetrieb", article: "der", translation: "training company", category: "Berufspädagogik" },
  { word: "Gesellenprüfung", article: "die", translation: "journeyman exam", category: "Berufspädagogik" },

  // Grundschulpädagogik
  { word: "Klassenraumgestaltung", article: "die", translation: "classroom design", category: "Grundschulpädagogik" },
  { word: "Sprachförderung", article: "die", translation: "language support", category: "Grundschulpädagogik" },
  { word: "Lernrückstand", article: "der", translation: "learning gap", category: "Grundschulpädagogik" },
  { word: "Elterngespräch", article: "das", translation: "parent-teacher conversation", category: "Grundschulpädagogik" },
  { word: "Einschulungsuntersuchung", article: "die", translation: "school entry examination", category: "Grundschulpädagogik" },

  // Fahrradtechnik
  { word: "Fahrradrahmenmaterial", article: "das", translation: "bike frame material", category: "Fahrradtechnik" },
  { word: "Bremsbelag", article: "der", translation: "brake pad", category: "Fahrradtechnik" },
  { word: "Kettenschaltung", article: "die", translation: "chain gear shifter", category: "Fahrradtechnik" },
  { word: "Speichenspannung", article: "die", translation: "spoke tension", category: "Fahrradtechnik" },
  { word: "Reifendruck", article: "der", translation: "tire pressure", category: "Fahrradtechnik" },

  // Motorradtechnik
  { word: "Motorradlenker", article: "der", translation: "motorcycle handlebar", category: "Motorradtechnik" },
  { word: "Fahrwerksabstimmung", article: "die", translation: "suspension tuning", category: "Motorradtechnik" },
  { word: "Auspuffanlage", article: "die", translation: "exhaust system", category: "Motorradtechnik" },
  { word: "Schräglagenfreiheit", article: "die", translation: "lean angle clearance", category: "Motorradtechnik" },
  { word: "Motorleistungskurve", article: "die", translation: "engine power curve", category: "Motorradtechnik" },

  // Rennradsport
  { word: "Sattelposition", article: "die", translation: "saddle position", category: "Rennradsport" },
  { word: "Windschlüpfigkeit", article: "die", translation: "aerodynamic efficiency", category: "Rennradsport" },
  { word: "Etappensieg", article: "der", translation: "stage win", category: "Rennradsport" },
  { word: "Fluchtgruppe", article: "die", translation: "breakaway group", category: "Rennradsport" },
  { word: "Spurtstärke", article: "die", translation: "sprint strength", category: "Rennradsport" },

  // Geländefahrsport
  { word: "Geländewagen", article: "der", translation: "off-road vehicle", category: "Geländefahrsport" },
  { word: "Bodenfreiheit", article: "die", translation: "ground clearance", category: "Geländefahrsport" },
  { word: "Traktionskontrolle", article: "die", translation: "traction control", category: "Geländefahrsport" },
  { word: "Geländestrecke", article: "die", translation: "off-road course", category: "Geländefahrsport" },
  { word: "Differenzialsperre", article: "die", translation: "differential lock", category: "Geländefahrsport" },

  // Stadtgrün
  { word: "Fassadenbegrünung", article: "die", translation: "green facade", category: "Stadtgrün" },
  { word: "Blühstreifen", article: "der", translation: "flowering strip", category: "Stadtgrün" },
  { word: "Stadtbaumbestand", article: "der", translation: "urban tree population", category: "Stadtgrün" },
  { word: "Parkanlagepflege", article: "die", translation: "park maintenance", category: "Stadtgrün" },
  { word: "Grünflächenamt", article: "das", translation: "parks department", category: "Stadtgrün" },

  // Spielplatzgestaltung
  { word: "Spielplatzgerät", article: "das", translation: "playground equipment", category: "Spielplatzgestaltung" },
  { word: "Fallschutzbelag", article: "der", translation: "fall protection surface", category: "Spielplatzgestaltung" },
  { word: "Spielplatzabgrenzung", article: "die", translation: "playground boundary", category: "Spielplatzgestaltung" },
  { word: "Spielgeräteprüfung", article: "die", translation: "playground equipment inspection", category: "Spielplatzgestaltung" },

  // Stadtinfrastruktur
  { word: "Straßenbeleuchtung", article: "die", translation: "street lighting", category: "Stadtinfrastruktur" },
  { word: "Kanalisationsnetz", article: "das", translation: "sewer network", category: "Stadtinfrastruktur" },
  { word: "Gehwegausbau", article: "der", translation: "sidewalk construction", category: "Stadtinfrastruktur" },
  { word: "Straßenschild", article: "das", translation: "street sign", category: "Stadtinfrastruktur" },
  { word: "Müllabfuhrplan", article: "der", translation: "garbage collection schedule", category: "Stadtinfrastruktur" },

  // Kommunalpolitik
  { word: "Bürgerbeteiligungsverfahren", article: "das", translation: "citizen participation process", category: "Kommunalpolitik" },
  { word: "Ratssitzung", article: "die", translation: "council meeting", category: "Kommunalpolitik" },
  { word: "Gemeindehaushalt", article: "der", translation: "municipal budget", category: "Kommunalpolitik" },
  { word: "Bürgerentscheid", article: "der", translation: "citizens' referendum", category: "Kommunalpolitik" },
  { word: "Ortsbeirat", article: "der", translation: "local advisory council", category: "Kommunalpolitik" },

  // Sportbekleidung
  { word: "Trikotdesign", article: "das", translation: "jersey design", category: "Sportbekleidung" },
  { word: "Funktionsstoff", article: "der", translation: "performance fabric", category: "Sportbekleidung" },
  { word: "Schweißableitung", article: "die", translation: "moisture wicking", category: "Sportbekleidung" },
  { word: "Sohlendämpfung", article: "die", translation: "sole cushioning", category: "Sportbekleidung" },
  { word: "Kompressionswirkung", article: "die", translation: "compression effect (sportswear)", category: "Sportbekleidung" },

  // Wintersportausrüstung
  { word: "Skiwachs", article: "das", translation: "ski wax", category: "Wintersportausrüstung" },
  { word: "Bindungseinstellung", article: "die", translation: "binding adjustment", category: "Wintersportausrüstung" },
  { word: "Helmpolsterung", article: "die", translation: "helmet padding", category: "Wintersportausrüstung" },
  { word: "Snowboardkante", article: "die", translation: "snowboard edge", category: "Wintersportausrüstung" },
  { word: "Schneekettenpflicht", article: "die", translation: "snow chain requirement", category: "Wintersportausrüstung" },

  // Outdoorausrüstung
  { word: "Zeltplane", article: "die", translation: "tarp/tent tarpaulin", category: "Outdoorausrüstung" },
  { word: "Trekkingstock", article: "der", translation: "trekking pole", category: "Outdoorausrüstung" },
  { word: "Wasserfilterpatrone", article: "die", translation: "water filter cartridge", category: "Outdoorausrüstung" },
  { word: "Isomatte", article: "die", translation: "sleeping mat", category: "Outdoorausrüstung" },
  { word: "Gaskartusche", article: "die", translation: "gas canister", category: "Outdoorausrüstung" },

  // Angelausrüstung
  { word: "Angelhaken", article: "der", translation: "fishing hook", category: "Angelausrüstung" },
  { word: "Schnurstärke", article: "die", translation: "line strength", category: "Angelausrüstung" },
  { word: "Rollenbremse", article: "die", translation: "reel drag/brake", category: "Angelausrüstung" },
  { word: "Kunstköder", article: "der", translation: "lure", category: "Angelausrüstung" },
  { word: "Angelkoffer", article: "der", translation: "tackle box", category: "Angelausrüstung" },

  // Zierfischzucht
  { word: "Zuchtaquarium", article: "das", translation: "breeding aquarium", category: "Zierfischzucht" },
  { word: "Laichverhalten", article: "das", translation: "spawning behavior", category: "Zierfischzucht" },
  { word: "Aufzuchtbecken", article: "das", translation: "rearing tank", category: "Zierfischzucht" },
  { word: "Wassertemperaturschwankung", article: "die", translation: "water temperature fluctuation", category: "Zierfischzucht" },

  // Bonsaikunst
  { word: "Bonsaiformung", article: "die", translation: "bonsai shaping", category: "Bonsaikunst" },
  { word: "Bonsaidraht", article: "der", translation: "bonsai wire", category: "Bonsaikunst" },
  { word: "Wurzelschnitt", article: "der", translation: "root pruning", category: "Bonsaikunst" },
  { word: "Blattreduktion", article: "die", translation: "leaf reduction", category: "Bonsaikunst" },

  // Weinliebhaberei
  { word: "Weinregalgestaltung", article: "die", translation: "wine rack design", category: "Weinliebhaberei" },
  { word: "Korkenzieherqualität", article: "die", translation: "corkscrew quality", category: "Weinliebhaberei" },
  { word: "Dekantierzeit", article: "die", translation: "decanting time", category: "Weinliebhaberei" },
  { word: "Weinetikett", article: "das", translation: "wine label", category: "Weinliebhaberei" },

  // Zigarrenkultur
  { word: "Zigarrenbandbeurteilung", article: "die", translation: "cigar band assessment", category: "Zigarrenkultur" },
  { word: "Humidorfeuchtigkeit", article: "die", translation: "humidor humidity", category: "Zigarrenkultur" },
  { word: "Deckblattqualität", article: "die", translation: "wrapper leaf quality", category: "Zigarrenkultur" },
  { word: "Rauchdauer", article: "die", translation: "smoking duration", category: "Zigarrenkultur" },

  // Pfeifenkultur
  { word: "Pfeifentabakmischung", article: "die", translation: "pipe tobacco blend", category: "Pfeifenkultur" },
  { word: "Stopftechnik", article: "die", translation: "tamping technique", category: "Pfeifenkultur" },
  { word: "Pfeifenkopfmaterial", article: "das", translation: "pipe bowl material", category: "Pfeifenkultur" },
  { word: "Abbrandverhalten", article: "das", translation: "burn behavior", category: "Pfeifenkultur" },

  // Datenschutzrecht
  { word: "Datenschutzbeauftragter", article: "der", translation: "data protection officer", category: "Datenschutzrecht" },
  { word: "Datenverarbeitungszweck", article: "der", translation: "purpose of data processing", category: "Datenschutzrecht" },
  { word: "Datenverarbeitungsvertrag", article: "der", translation: "data processing agreement", category: "Datenschutzrecht" },
  { word: "Löschungsanspruch", article: "der", translation: "right to erasure", category: "Datenschutzrecht" },
  { word: "Datenpanne", article: "die", translation: "data breach", category: "Datenschutzrecht" },
  { word: "Verarbeitungsverzeichnis", article: "das", translation: "record of processing activities", category: "Datenschutzrecht" },

  // Produkthaftungsrecht
  { word: "Produkthaftungsanspruch", article: "der", translation: "product liability claim", category: "Produkthaftungsrecht" },
  { word: "Fabrikationsfehler", article: "der", translation: "manufacturing defect", category: "Produkthaftungsrecht" },
  { word: "Instruktionsfehler", article: "der", translation: "instruction defect", category: "Produkthaftungsrecht" },
  { word: "Rückrufpflicht", article: "die", translation: "recall obligation", category: "Produkthaftungsrecht" },
  { word: "Haftungsausschluss", article: "der", translation: "liability exclusion", category: "Produkthaftungsrecht" },

  // Mietrecht
  { word: "Mietvertragsklausel", article: "die", translation: "lease clause", category: "Mietrecht" },
  { word: "Nebenkostenabrechnung", article: "die", translation: "utility cost statement", category: "Mietrecht" },
  { word: "Räumungsklage", article: "die", translation: "eviction lawsuit", category: "Mietrecht" },
  { word: "Mietminderung", article: "die", translation: "rent reduction", category: "Mietrecht" },
  { word: "Kautionsrückzahlung", article: "die", translation: "deposit refund", category: "Mietrecht" },

  // Grundstücksrecht
  { word: "Erbbaurecht", article: "das", translation: "heritable building right", category: "Grundstücksrecht" },
  { word: "Wegerecht", article: "das", translation: "right of way", category: "Grundstücksrecht" },
  { word: "Grunddienstbarkeit", article: "die", translation: "land easement", category: "Grundstücksrecht" },
  { word: "Nießbrauchrecht", article: "das", translation: "usufruct right", category: "Grundstücksrecht" },
  { word: "Grenzbebauung", article: "die", translation: "boundary construction", category: "Grundstücksrecht" },

  // Nachlassrecht
  { word: "Erbauseinandersetzung", article: "die", translation: "estate settlement dispute", category: "Nachlassrecht" },
  { word: "Testamentseröffnung", article: "die", translation: "reading of the will", category: "Nachlassrecht" },
  { word: "Nachlassinsolvenz", article: "die", translation: "estate insolvency", category: "Nachlassrecht" },
  { word: "Pflichtteilsergänzung", article: "die", translation: "supplementary compulsory portion", category: "Nachlassrecht" },
  { word: "Erbausschlagung", article: "die", translation: "renunciation of inheritance", category: "Nachlassrecht" },

  // Gesellschaftsrecht
  { word: "Gesellschafterversammlung", article: "die", translation: "shareholders' meeting", category: "Gesellschaftsrecht" },
  { word: "Stammkapital", article: "das", translation: "share capital", category: "Gesellschaftsrecht" },
  { word: "Geschäftsführerhaftung", article: "die", translation: "managing director liability", category: "Gesellschaftsrecht" },
  { word: "Satzungsänderung", article: "die", translation: "amendment of articles", category: "Gesellschaftsrecht" },
  { word: "Firmenbucheintrag", article: "der", translation: "commercial register entry", category: "Gesellschaftsrecht" },

  // Arbeitsrecht (vertieft2)
  { word: "Betriebsübergang", article: "der", translation: "transfer of business", category: "Arbeitsrecht (vertieft2)" },
  { word: "Abmahnung", article: "die", translation: "formal warning (employment)", category: "Arbeitsrecht (vertieft2)" },
  { word: "Betriebsratswahl", article: "die", translation: "works council election", category: "Arbeitsrecht (vertieft2)" },
  { word: "Aufhebungsvertrag", article: "der", translation: "termination agreement", category: "Arbeitsrecht (vertieft2)" },
  { word: "Kündigungsschutzklage", article: "die", translation: "unfair dismissal lawsuit", category: "Arbeitsrecht (vertieft2)" },

  // Mikroökonomie (vertieft)
  { word: "Marktzugangsbarriere", article: "die", translation: "market entry barrier", category: "Mikroökonomie (vertieft)" },
  { word: "Wettbewerbsintensität", article: "die", translation: "competitive intensity", category: "Mikroökonomie (vertieft)" },
  { word: "Grenznutzen", article: "der", translation: "marginal utility", category: "Mikroökonomie (vertieft)" },
  { word: "Angebotskurve", article: "die", translation: "supply curve", category: "Mikroökonomie (vertieft)" },
  { word: "Nachfragekurve", article: "die", translation: "demand curve", category: "Mikroökonomie (vertieft)" },
  { word: "Konsumentenrente", article: "die", translation: "consumer surplus", category: "Mikroökonomie (vertieft)" },

  // Makroökonomie (vertieft)
  { word: "Konjunkturprognose", article: "die", translation: "economic forecast", category: "Makroökonomie (vertieft)" },
  { word: "Bruttoinlandsproduktwachstum", article: "das", translation: "GDP growth", category: "Makroökonomie (vertieft)" },
  { word: "Arbeitslosenquote", article: "die", translation: "unemployment rate", category: "Makroökonomie (vertieft)" },
  { word: "Fiskalpolitik", article: "die", translation: "fiscal policy", category: "Makroökonomie (vertieft)" },
  { word: "Handelsüberschuss", article: "der", translation: "trade surplus", category: "Makroökonomie (vertieft)" },

  // Betriebswirtschaftslehre
  { word: "Prozesskostenrechnung", article: "die", translation: "process costing", category: "Betriebswirtschaftslehre" },
  { word: "Deckungsbeitragsrechnung", article: "die", translation: "contribution margin accounting", category: "Betriebswirtschaftslehre" },
  { word: "Investitionsrechnung", article: "die", translation: "investment appraisal", category: "Betriebswirtschaftslehre" },
  { word: "Break-even-Punkt", article: "der", translation: "break-even point", category: "Betriebswirtschaftslehre" },
  { word: "Amortisationsdauer", article: "die", translation: "payback period", category: "Betriebswirtschaftslehre" },

  // Wirtschaftsgeschichte (vertieft)
  { word: "Zahlungsbilanzdefizit", article: "das", translation: "balance of payments deficit", category: "Wirtschaftsgeschichte (vertieft)" },
  { word: "Goldstandard", article: "der", translation: "gold standard", category: "Wirtschaftsgeschichte (vertieft)" },
  { word: "Weltwirtschaftskrise", article: "die", translation: "global economic crisis", category: "Wirtschaftsgeschichte (vertieft)" },
  { word: "Marktwirtschaftsordnung", article: "die", translation: "market economy system", category: "Wirtschaftsgeschichte (vertieft)" },

  // Agrarlogistik
  { word: "Getreidespeicher", article: "der", translation: "grain silo", category: "Agrarlogistik" },
  { word: "Erntemenge", article: "die", translation: "harvest quantity", category: "Agrarlogistik" },
  { word: "Lagerhaltungskosten", article: "die", translation: "storage costs", category: "Agrarlogistik" },
  { word: "Erntetransport", article: "der", translation: "harvest transport", category: "Agrarlogistik" },
  { word: "Qualitätsklassifizierung", article: "die", translation: "quality classification", category: "Agrarlogistik" },

  // Rohstoffhandel
  { word: "Rohstoffbörse", article: "die", translation: "commodity exchange", category: "Rohstoffhandel" },
  { word: "Terminkurs", article: "der", translation: "futures price", category: "Rohstoffhandel" },
  { word: "Lieferverzug", article: "der", translation: "delivery delay", category: "Rohstoffhandel" },
  { word: "Rohstoffindex", article: "der", translation: "commodity index", category: "Rohstoffhandel" },
  { word: "Preisabsicherung", article: "die", translation: "price hedging", category: "Rohstoffhandel" },

  // Edelmetallwesen
  { word: "Edelmetallhandel", article: "der", translation: "precious metals trading", category: "Edelmetallwesen" },
  { word: "Feingehalt", article: "der", translation: "fineness (precious metals)", category: "Edelmetallwesen" },
  { word: "Barrenware", article: "die", translation: "bullion", category: "Edelmetallwesen" },
  { word: "Prägestätte", article: "die", translation: "mint", category: "Edelmetallwesen" },
  { word: "Goldreserve", article: "die", translation: "gold reserve", category: "Edelmetallwesen" },

  // Energierohstoffe
  { word: "Erdölförderung", article: "die", translation: "oil extraction", category: "Energierohstoffe" },
  { word: "Bohrinsel", article: "die", translation: "drilling rig", category: "Energierohstoffe" },
  { word: "Raffinerieprozess", article: "der", translation: "refining process", category: "Energierohstoffe" },
  { word: "Erdölvorkommen", article: "das", translation: "oil deposit", category: "Energierohstoffe" },
  { word: "Pipelinekapazität", article: "die", translation: "pipeline capacity", category: "Energierohstoffe" },

  // Chorwesen
  { word: "Chorprobe", article: "die", translation: "choir rehearsal", category: "Chorwesen" },
  { word: "Stimmgruppe", article: "die", translation: "voice section", category: "Chorwesen" },
  { word: "Repertoirewahl", article: "die", translation: "repertoire selection", category: "Chorwesen" },
  { word: "Chorleiter", article: "der", translation: "choir conductor", category: "Chorwesen" },
  { word: "Auftrittstermin", article: "der", translation: "performance date", category: "Chorwesen" },

  // Blasmusikwesen
  { word: "Blaskapelle", article: "die", translation: "brass band", category: "Blasmusikwesen" },
  { word: "Notenpult", article: "das", translation: "music stand", category: "Blasmusikwesen" },
  { word: "Marschmusik", article: "die", translation: "march music", category: "Blasmusikwesen" },
  { word: "Instrumentenpflege", article: "die", translation: "instrument maintenance", category: "Blasmusikwesen" },
  { word: "Vereinsmusiker", article: "der", translation: "club musician", category: "Blasmusikwesen" },

  // Brauchtumspflege
  { word: "Volkstanzgruppe", article: "die", translation: "folk dance group", category: "Brauchtumspflege" },
  { word: "Trachtenverein", article: "der", translation: "traditional costume club", category: "Brauchtumspflege" },
  { word: "Volksfestumzug", article: "der", translation: "folk festival parade", category: "Brauchtumspflege" },
  { word: "Regionalbrauch", article: "der", translation: "regional custom", category: "Brauchtumspflege" },

  // Weihnachtsbräuche
  { word: "Weihnachtsmarktstand", article: "der", translation: "Christmas market stall", category: "Weihnachtsbräuche" },
  { word: "Adventskranzschmückung", article: "die", translation: "Advent wreath decoration", category: "Weihnachtsbräuche" },
  { word: "Plätzchenbacken", article: "das", translation: "cookie baking", category: "Weihnachtsbräuche" },
  { word: "Geschenkeeinkauf", article: "der", translation: "gift shopping", category: "Weihnachtsbräuche" },
  { word: "Krippenaufbau", article: "der", translation: "nativity scene setup", category: "Weihnachtsbräuche" },

  // Kfz-Wesen
  { word: "Kfz-Versicherung", article: "die", translation: "car insurance", category: "Kfz-Wesen" },
  { word: "Hauptuntersuchung", article: "die", translation: "vehicle inspection (TÜV)", category: "Kfz-Wesen" },
  { word: "Zulassungsstelle", article: "die", translation: "vehicle registration office", category: "Kfz-Wesen" },
  { word: "Kennzeichenreservierung", article: "die", translation: "license plate reservation", category: "Kfz-Wesen" },
  { word: "Fahrzeugschein", article: "der", translation: "vehicle registration document", category: "Kfz-Wesen" },

  // Kfz-Reparatur
  { word: "Werkstatttermin", article: "der", translation: "garage appointment", category: "Kfz-Reparatur" },
  { word: "Ersatzteilbeschaffung", article: "die", translation: "spare parts procurement", category: "Kfz-Reparatur" },
  { word: "Kostenvoranschlag", article: "der", translation: "cost estimate", category: "Kfz-Reparatur" },
  { word: "Motorschaden", article: "der", translation: "engine damage", category: "Kfz-Reparatur" },
  { word: "Lackschaden", article: "der", translation: "paint damage", category: "Kfz-Reparatur" },

  // Autohandel
  { word: "Gebrauchtwagenpreis", article: "der", translation: "used car price", category: "Autohandel" },
  { word: "Fahrzeughistorie", article: "die", translation: "vehicle history", category: "Autohandel" },
  { word: "Probefahrt", article: "die", translation: "test drive", category: "Autohandel" },
  { word: "Inzahlungnahme", article: "die", translation: "trade-in", category: "Autohandel" },
  { word: "Restwert", article: "der", translation: "residual value", category: "Autohandel" },

  // Fahrzeugfinanzierung
  { word: "Leasingrate", article: "die", translation: "leasing installment", category: "Fahrzeugfinanzierung" },
  { word: "Anzahlungshöhe", article: "die", translation: "down payment amount", category: "Fahrzeugfinanzierung" },
  { word: "Finanzierungsangebot", article: "das", translation: "financing offer", category: "Fahrzeugfinanzierung" },
  { word: "Restschuldversicherung", article: "die", translation: "payment protection insurance", category: "Fahrzeugfinanzierung" },

  // Sensortechnik
  { word: "Lichtschranke", article: "die", translation: "light barrier/sensor", category: "Sensortechnik" },
  { word: "Näherungssensor", article: "der", translation: "proximity sensor", category: "Sensortechnik" },
  { word: "Messwertaufnahme", article: "die", translation: "measurement data acquisition", category: "Sensortechnik" },
  { word: "Sensorkalibrierung", article: "die", translation: "sensor calibration", category: "Sensortechnik" },
  { word: "Auflösungsvermögen", article: "das", translation: "resolution capability", category: "Sensortechnik" },

  // Elektromotorentechnik
  { word: "Antriebsmotor", article: "der", translation: "drive motor", category: "Elektromotorentechnik" },
  { word: "Drehmomentkurve", article: "die", translation: "torque curve", category: "Elektromotorentechnik" },
  { word: "Wicklungswiderstand", article: "der", translation: "winding resistance", category: "Elektromotorentechnik" },
  { word: "Rotorposition", article: "die", translation: "rotor position", category: "Elektromotorentechnik" },
  { word: "Motorsteuerung", article: "die", translation: "motor control", category: "Elektromotorentechnik" },

  // Dolmetschwesen
  { word: "Verhandlungsdolmetscher", article: "der", translation: "negotiation interpreter", category: "Dolmetschwesen" },
  { word: "Konsekutivdolmetschen", article: "das", translation: "consecutive interpreting", category: "Dolmetschwesen" },
  { word: "Flüsterdolmetschen", article: "das", translation: "whispered interpreting", category: "Dolmetschwesen" },
  { word: "Dolmetscherkabine", article: "die", translation: "interpreter booth", category: "Dolmetschwesen" },
  { word: "Sprachmittlerqualifikation", article: "die", translation: "interpreter qualification", category: "Dolmetschwesen" },

  // Untertitelung & Synchronisation
  { word: "Untertitelerstellung", article: "die", translation: "subtitle creation", category: "Untertitelung & Synchronisation" },
  { word: "Synchronsprecher", article: "der", translation: "dubbing voice actor", category: "Untertitelung & Synchronisation" },
  { word: "Lippensynchronität", article: "die", translation: "lip sync", category: "Untertitelung & Synchronisation" },
  { word: "Übersetzungstempo", article: "das", translation: "translation pace", category: "Untertitelung & Synchronisation" },
  { word: "Sprachfassung", article: "die", translation: "language version (film)", category: "Untertitelung & Synchronisation" },

  // Lexikografie
  { word: "Wörterbucheintrag", article: "der", translation: "dictionary entry", category: "Lexikografie" },
  { word: "Bedeutungsangabe", article: "die", translation: "meaning definition", category: "Lexikografie" },
  { word: "Stichwortliste", article: "die", translation: "headword list", category: "Lexikografie" },
  { word: "Aussprachehinweis", article: "der", translation: "pronunciation guide", category: "Lexikografie" },
  { word: "Wortschatzerweiterung", article: "die", translation: "vocabulary expansion", category: "Lexikografie" },

  // Typografie
  { word: "Schriftartendesign", article: "das", translation: "typeface design", category: "Typografie" },
  { word: "Zeilenabstand", article: "der", translation: "line spacing", category: "Typografie" },
  { word: "Schriftgröße", article: "die", translation: "font size", category: "Typografie" },
  { word: "Satzspiegel", article: "der", translation: "type area (page layout)", category: "Typografie" },
  { word: "Buchstabenabstand", article: "der", translation: "letter spacing", category: "Typografie" },

  // Baurecht
  { word: "Baugenehmigungsverfahren", article: "das", translation: "building permit process", category: "Baurecht" },
  { word: "Bebauungsplanänderung", article: "die", translation: "zoning plan amendment", category: "Baurecht" },
  { word: "Abstandsflächenregelung", article: "die", translation: "setback distance rule", category: "Baurecht" },
  { word: "Nachbarschaftsbeschwerde", article: "die", translation: "neighbor complaint", category: "Baurecht" },
  { word: "Baumangel", article: "der", translation: "construction defect", category: "Baurecht" },

  // Denkmalschutz
  { word: "Denkmalschutzauflage", article: "die", translation: "heritage protection requirement", category: "Denkmalschutz" },
  { word: "Sanierungspflicht", article: "die", translation: "renovation obligation", category: "Denkmalschutz" },
  { word: "Substanzerhaltung", article: "die", translation: "preservation of substance", category: "Denkmalschutz" },
  { word: "Denkmalliste", article: "die", translation: "heritage register", category: "Denkmalschutz" },
  { word: "Fassadenschutz", article: "der", translation: "facade protection", category: "Denkmalschutz" },

  // Wohnungseigentumsrecht
  { word: "Wohnungseigentümerversammlung", article: "die", translation: "homeowners' association meeting", category: "Wohnungseigentumsrecht" },
  { word: "Sondereigentum", article: "das", translation: "individual ownership (condo)", category: "Wohnungseigentumsrecht" },
  { word: "Gemeinschaftseigentum", article: "das", translation: "common property (condo)", category: "Wohnungseigentumsrecht" },
  { word: "Hausgeldabrechnung", article: "die", translation: "maintenance fee statement", category: "Wohnungseigentumsrecht" },
  { word: "Instandhaltungsrücklage", article: "die", translation: "maintenance reserve fund", category: "Wohnungseigentumsrecht" },

  // Vermessungswesen
  { word: "Grundstücksteilung", article: "die", translation: "land subdivision", category: "Vermessungswesen" },
  { word: "Katasteramt", article: "das", translation: "land registry office", category: "Vermessungswesen" },
  { word: "Grenzvermessung", article: "die", translation: "boundary survey", category: "Vermessungswesen" },
  { word: "Höhenvermessung", article: "die", translation: "elevation survey", category: "Vermessungswesen" },
  { word: "Flurkarte", article: "die", translation: "cadastral map", category: "Vermessungswesen" },

  // Glaskunst
  { word: "Glasbläserkunst", article: "die", translation: "glassblowing art", category: "Glaskunst" },
  { word: "Schmelzofentemperatur", article: "die", translation: "furnace temperature (glass)", category: "Glaskunst" },
  { word: "Farbglaseinschluss", article: "der", translation: "colored glass inclusion", category: "Glaskunst" },
  { word: "Glaskühlung", article: "die", translation: "glass annealing", category: "Glaskunst" },

  // Keramikkunst
  { word: "Töpferscheibe", article: "die", translation: "pottery wheel", category: "Keramikkunst" },
  { word: "Tonaufbereitung", article: "die", translation: "clay preparation", category: "Keramikkunst" },
  { word: "Brennkurve", article: "die", translation: "firing curve", category: "Keramikkunst" },
  { word: "Glasurrezeptur", article: "die", translation: "glaze recipe", category: "Keramikkunst" },
  { word: "Scherbenfarbe", article: "die", translation: "clay body color", category: "Keramikkunst" },

  // ÖPNV-Technik
  { word: "Fahrgastinformationssystem", article: "das", translation: "passenger information system", category: "ÖPNV-Technik" },
  { word: "Ticketautomat", article: "der", translation: "ticket machine", category: "ÖPNV-Technik" },
  { word: "Fahrscheinkontrolle", article: "die", translation: "ticket inspection", category: "ÖPNV-Technik" },
  { word: "Anschlusssicherung", article: "die", translation: "connection guarantee (transit)", category: "ÖPNV-Technik" },
  { word: "Betriebshof", article: "der", translation: "transit depot", category: "ÖPNV-Technik" },

  // Seilbahnwesen
  { word: "Seilbahnstation", article: "die", translation: "cable car station", category: "Seilbahnwesen" },
  { word: "Gondelkapazität", article: "die", translation: "gondola capacity", category: "Seilbahnwesen" },
  { word: "Tragseilspannung", article: "die", translation: "carrying cable tension", category: "Seilbahnwesen" },
  { word: "Bergstation", article: "die", translation: "mountain station", category: "Seilbahnwesen" },

  // Aufzugstechnik
  { word: "Aufzugswartung", article: "die", translation: "elevator maintenance", category: "Aufzugstechnik" },
  { word: "Fahrkorb", article: "der", translation: "elevator car", category: "Aufzugstechnik" },
  { word: "Fangvorrichtung", article: "die", translation: "safety catch device (elevator)", category: "Aufzugstechnik" },
  { word: "Schachtgrube", article: "die", translation: "elevator shaft pit", category: "Aufzugstechnik" },
  { word: "Personenaufzug", article: "der", translation: "passenger elevator", category: "Aufzugstechnik" },

  // Musiktheorie (vertieft)
  { word: "Notenwertlehre", article: "die", translation: "note value theory", category: "Musiktheorie (vertieft)" },
  { word: "Kontrapunktregel", article: "die", translation: "counterpoint rule", category: "Musiktheorie (vertieft)" },
  { word: "Modulationsverfahren", article: "das", translation: "modulation technique", category: "Musiktheorie (vertieft)" },
  { word: "Kadenzformel", article: "die", translation: "cadence formula", category: "Musiktheorie (vertieft)" },
  { word: "Intervallverhältnis", article: "das", translation: "interval relationship", category: "Musiktheorie (vertieft)" },

  // Regiekunst
  { word: "Bühnenraumaufteilung", article: "die", translation: "stage space division", category: "Regiekunst" },
  { word: "Regiekonzept", article: "das", translation: "directorial concept", category: "Regiekunst" },
  { word: "Schauspielführung", article: "die", translation: "actor direction", category: "Regiekunst" },
  { word: "Rollendeutung", article: "die", translation: "interpretation of a role", category: "Regiekunst" },
  { word: "Probenprozess", article: "der", translation: "rehearsal process", category: "Regiekunst" },

  // Filmproduktion
  { word: "Drehortsuche", article: "die", translation: "location scouting", category: "Filmproduktion" },
  { word: "Produktionsablaufplan", article: "der", translation: "production schedule", category: "Filmproduktion" },
  { word: "Castingverfahren", article: "das", translation: "casting process", category: "Filmproduktion" },
  { word: "Budgetkalkulation", article: "die", translation: "budget calculation", category: "Filmproduktion" },
  { word: "Drehgenehmigung", article: "die", translation: "filming permit", category: "Filmproduktion" },

  // Buchmarkt
  { word: "Verlagsprogramm", article: "das", translation: "publishing program", category: "Buchmarkt" },
  { word: "Neuerscheinung", article: "die", translation: "new release (book)", category: "Buchmarkt" },
  { word: "Bestsellerliste", article: "die", translation: "bestseller list", category: "Buchmarkt" },
  { word: "Buchhandelsvertreter", article: "der", translation: "book trade representative", category: "Buchmarkt" },
  { word: "Vorschauexemplar", article: "das", translation: "advance reading copy", category: "Buchmarkt" },

  // Zwangsvollstreckung
  { word: "Gerichtsvollzieher", article: "der", translation: "bailiff", category: "Zwangsvollstreckung" },
  { word: "Pfändungsbeschluss", article: "der", translation: "garnishment order", category: "Zwangsvollstreckung" },
  { word: "Zwangsversteigerung", article: "die", translation: "foreclosure auction", category: "Zwangsvollstreckung" },
  { word: "Vollstreckungstitel", article: "der", translation: "enforcement order", category: "Zwangsvollstreckung" },
  { word: "Lohnpfändung", article: "die", translation: "wage garnishment", category: "Zwangsvollstreckung" },

  // Schuldnerwesen
  { word: "Schuldnerberatung", article: "die", translation: "debt counseling", category: "Schuldnerwesen" },
  { word: "Überschuldungsgrad", article: "der", translation: "degree of over-indebtedness", category: "Schuldnerwesen" },
  { word: "Ratenzahlungsplan", article: "der", translation: "installment payment plan", category: "Schuldnerwesen" },
  { word: "Privatinsolvenz", article: "die", translation: "personal bankruptcy", category: "Schuldnerwesen" },
  { word: "Gläubigerforderung", article: "die", translation: "creditor's claim", category: "Schuldnerwesen" },

  // Verbraucherverträge
  { word: "Verbraucherschutzklage", article: "die", translation: "consumer protection lawsuit", category: "Verbraucherverträge" },
  { word: "Widerrufsbelehrung", article: "die", translation: "cancellation notice", category: "Verbraucherverträge" },
  { word: "Fernabsatzvertrag", article: "der", translation: "distance selling contract", category: "Verbraucherverträge" },
  { word: "Vertragsklauselwerk", article: "das", translation: "set of contract clauses", category: "Verbraucherverträge" },
  { word: "Vertragsbindung", article: "die", translation: "contractual commitment", category: "Verbraucherverträge" },

  // Kundenservice
  { word: "Reklamationsbearbeitung", article: "die", translation: "complaint processing", category: "Kundenservice" },
  { word: "Servicehotline", article: "die", translation: "service hotline", category: "Kundenservice" },
  { word: "Kundenzufriedenheitsindex", article: "der", translation: "customer satisfaction index", category: "Kundenservice" },
  { word: "Beschwerdemanagement", article: "das", translation: "complaint management", category: "Kundenservice" },
  { word: "Serviceleistung", article: "die", translation: "service performance", category: "Kundenservice" },

  // Müllereiwesen
  { word: "Getreidemühle", article: "die", translation: "grain mill", category: "Müllereiwesen" },
  { word: "Mahlgrad", article: "der", translation: "grinding degree", category: "Müllereiwesen" },
  { word: "Mehlausbeute", article: "die", translation: "flour yield", category: "Müllereiwesen" },
  { word: "Kleieanteil", article: "der", translation: "bran content", category: "Müllereiwesen" },

  // Zuckerindustrie
  { word: "Zuckerrübenverarbeitung", article: "die", translation: "sugar beet processing", category: "Zuckerindustrie" },
  { word: "Raffinationsgrad", article: "der", translation: "refining degree", category: "Zuckerindustrie" },
  { word: "Melasseertrag", article: "der", translation: "molasses yield", category: "Zuckerindustrie" },
  { word: "Zuckergehalt", article: "der", translation: "sugar content", category: "Zuckerindustrie" },

  // Speiseölproduktion
  { word: "Ölmühlenbetrieb", article: "der", translation: "oil mill operation", category: "Speiseölproduktion" },
  { word: "Kaltpressverfahren", article: "das", translation: "cold-press method", category: "Speiseölproduktion" },
  { word: "Filtrationsschritt", article: "der", translation: "filtration step", category: "Speiseölproduktion" },
  { word: "Rauchpunkt", article: "der", translation: "smoke point", category: "Speiseölproduktion" },

  // Molkereiwesen
  { word: "Milchverarbeitungsbetrieb", article: "der", translation: "dairy processing plant", category: "Molkereiwesen" },
  { word: "Pasteurisierungsverfahren", article: "das", translation: "pasteurization process", category: "Molkereiwesen" },
  { word: "Fettgehaltmessung", article: "die", translation: "fat content measurement", category: "Molkereiwesen" },
  { word: "Milchabholung", article: "die", translation: "milk collection", category: "Molkereiwesen" },
  { word: "Molkeverwertung", article: "die", translation: "whey utilization", category: "Molkereiwesen" },

  // Meteorologie (vertieft)
  { word: "Wettervorhersagemodell", article: "das", translation: "weather forecast model", category: "Meteorologie (vertieft)" },
  { word: "Klimadatensatz", article: "der", translation: "climate dataset", category: "Meteorologie (vertieft)" },
  { word: "Simulationsrechnung", article: "die", translation: "simulation calculation", category: "Meteorologie (vertieft)" },
  { word: "Messstation", article: "die", translation: "measuring station", category: "Meteorologie (vertieft)" },
  { word: "Wetterballon", article: "der", translation: "weather balloon", category: "Meteorologie (vertieft)" },

  // Geophysik
  { word: "Erdmagnetfeld", article: "das", translation: "Earth's magnetic field", category: "Geophysik" },
  { word: "Gesteinsmagnetismus", article: "der", translation: "rock magnetism", category: "Geophysik" },
  { word: "Schwerefeldmessung", article: "die", translation: "gravity field measurement", category: "Geophysik" },
  { word: "Erdkrustenbewegung", article: "die", translation: "crustal movement", category: "Geophysik" },
  { word: "Erdbebenwellenausbreitung", article: "die", translation: "seismic wave propagation", category: "Geophysik" },

  // Bodenkunde
  { word: "Bodenschichtaufbau", article: "der", translation: "soil layer structure", category: "Bodenkunde" },
  { word: "Humusgehalt", article: "der", translation: "humus content", category: "Bodenkunde" },
  { word: "Bodennährstoffgehalt", article: "der", translation: "soil nutrient content", category: "Bodenkunde" },
  { word: "Bodenerosion", article: "die", translation: "soil erosion", category: "Bodenkunde" },
  { word: "Ackerbodenqualität", article: "die", translation: "arable soil quality", category: "Bodenkunde" },

  // Klimatologie (vertieft)
  { word: "Wolkenklassifikation", article: "die", translation: "cloud classification", category: "Klimatologie (vertieft)" },
  { word: "Klimazonenverschiebung", article: "die", translation: "climate zone shift", category: "Klimatologie (vertieft)" },
  { word: "Niederschlagsmuster", article: "das", translation: "precipitation pattern", category: "Klimatologie (vertieft)" },
  { word: "Temperaturmittel", article: "das", translation: "temperature average", category: "Klimatologie (vertieft)" },
];

export const NOUNS_BY_LEVEL: Record<Level, GermanNoun[]> = {
  a1: a1Words.map((n, i) => ({ id: `a1-${i}`, ...n })),
  a2: [...a1Words, ...a2NewWords].map((n, i) => ({ id: `a2-${i}`, ...n })),
  b1: [...a1Words, ...a2NewWords, ...b1NewWords].map((n, i) => ({ id: `b1-${i}`, ...n })),
  b2: [...a1Words, ...a2NewWords, ...b1NewWords, ...b2NewWords].map((n, i) => ({ id: `b2-${i}`, ...n })),
  c1: [...a1Words, ...a2NewWords, ...b1NewWords, ...b2NewWords, ...c1NewWords].map((n, i) => ({ id: `c1-${i}`, ...n })),
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
