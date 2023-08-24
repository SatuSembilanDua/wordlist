// ==UserScript==
// @name         Skribbl.io Word Guesser
// @namespace    http://skribbl.io/
// @version      0.5
// @description  Just a skribbl.io Word Guesser
// @author       tdmarl
// @license      MIT
// @match        https://skribbl.io/
// @icon         https://www.google.com/s2/favicons?sz=64&domain=skribbl.io
// @grant        GM_setValue
// @grant        GM_getValue
// @grant        GM.getValue
// @grant        GM.setValue
// ==/UserScript==

(function() {
	'use strict';

	class WordSleuth {
		constructor() {
			this.MywordList = [
			"ABBA", "Abraham Lincoln", "abstract", "abyss", "AC/DC", "accident", "accordion", "ace", "acid", "acne", "acorn", "action", "actor", "addiction", "addition", "Adidas", "adorable", "adult", "advertisement", "Africa", "afro", "afterlife", "air", "air conditioner", "airbag", "aircraft", "airplane", "airport", "Aladdin", "alarm", "albatross", "alcohol", "alien", "allergy", "alley", "alligator", "almond", "alpaca", "ambulance", "America", "Amsterdam", "anaconda", "anchor", "Android", "angel", "Angelina Jolie", "anglerfish", "angry", "Angry Birds", "animation", "anime", "ant", "Antarctica", "anteater", "antelope", "antenna", "anthill", "antivirus", "Anubis", "anvil", "apartment", "apocalypse", "applause", "apple", "apple pie", "apple seed", "apricot", "aquarium", "arch", "archaeologist", "archer", "architect", "Argentina", "aristocrat", "arm", "armadillo", "armor", "armpit", "arrow", "ash", "Asia", "assassin", "assault", "Asterix", "asteroid", "astronaut", "asymmetry", "athlete", "Atlantis", "atom", "attic", "Audi", "audience", "Australia", "autograph", "avocado", "axe", "baboon", "baby", "back pain", "backbone", "backflip", "backpack", "bacon", "bad", "badger", "bag", "bagel", "bagpipes", "baguette", "bait", "bakery", "baklava", "balance", "balcony", "bald", "ball", "ballerina", "ballet", "balloon", "Bambi", "bamboo", "banana", "Band-Aid", "bandage", "bandana", "banjo", "bank", "banker", "bar", "Barack Obama", "barbarian", "barbecue", "barbed wire", "barber", "barcode", "bark", "barn", "barrel", "Bart Simpson", "bartender", "base", "basement", "basket", "basketball", "bat", "bathroom", "bathtub", "Batman", "battery", "battle", "battleship", "bayonet", "bazooka", "beach", "beak", "bean", "bean bag", "beanie", "beanstalk", "bear", "bear trap", "beatbox", "beaver", "bed", "bed bug", "bed sheet", "bedtime", "bee", "beef", "beer", "beet", "Beethoven", "beetle", "bell", "bell pepper", "bellow", "belly", "belly button", "below", "belt", "bench", "betray", "Bible", "bicycle", "Big Ben", "bill", "Bill Gates", "billiards", "bingo", "binoculars", "biology", "birch", "bird", "bird bath", "birthday", "biscuit", "Bitcoin", "bite", "black", "Black Friday", "black hole", "blackberry", "blacksmith", "blanket", "bleach", "blender", "blimp", "blind", "blindfold", "blizzard", "blood", "blowfish", "blue", "blueberry", "blush", "BMW", "BMX", "boar", "board", "boat", "bobsled", "bodyguard", "boil", "bomb", "Bomberman", "booger", "book", "bookmark", "bookshelf", "boomerang", "boots", "border", "bottle", "bot", "bottle flip", "bounce", "bouquet", "bouncer", "bow", "bowl", "bowling", "box", "boy", "bracelet", "braces", "brain", "brain freeze", "brainwash", "branch", "brand", "Brazil", "bread", "breakfast", "breakdance", "breath", "brick", "bricklayer", "bride", "bridge", "broadcast", "broccoli", "broken heart", "bronze", "broom", "broomstick", "brownie", "Bruce Lee", "bruise", "brunette", "brush", "bubble", "bubble gum", "bucket", "Bugs Bunny", "bug spray", "building", "bulge", "bull", "bulldozer", "bullet", "bumper", "bungee jumping", "bunk bed", "bunny", "burglar", "burp", "burrito", "bus", "bus driver", "bus stop", "butcher", "butler", "butt cheeks", "butter", "butterfly", "button", "cab driver", "cabin", "cabinet", "cactus", "cage", "cake", "calendar", "camel", "camera", "campfire", "camping", "can", "can opener", "Canada", "canary", "canal", "candle", "canister", "cannon", "canyon", "cap", "cape", "cappuccino", "Capricorn", "captain", "Captain America", "car wash", "cardboard", "carnival", "carnivore", "carpenter", "carpet", "carrot", "cartoon", "cash", "casino", "cast", "cat", "Cat Woman", "catalog", "catapult", "caterpillar", "catfish", "cathedral", "cauldron", "cauliflower", "cave", "caveman", "caviar", "ceiling", "ceiling fan", "celebrate", "celebrity", "cell", "cell phone", "cello", "cement", "centaur", "centipede", "Cerberus", "chain", "chainsaw", "chair", "chalk", "chameleon", "champagne", "champion", "chandelier", "charger", "Charlie Chaplin", "cheek", "cheeks", "cheerleader", "cheese", "cheeseburger", "cheesecake", "cheetah", "chef", "chemical", "cherry", "cherry blossom", "chess", "chest", "chest hair", "chestnut", "chestplate", "chew", "Chewbacca", "chicken", "chihuahua", "child", "chime", "chimney", "chimpanzee", "chin", "China", "Chinatown", "chinchilla", "chocolate", "chopsticks", "Christmas", "Chrome", "Chuck Norris", "church", "cicada", "cigarette", "cinema", "circle", "circus", "clap", "clarinet", "classroom", "claw", "clay", "clean", "clickbait", "cliff", "climb", "cloak", "clock", "cloth", "clothes hanger", "cloud", "clover", "clown", "clownfish", "coach", "coal", "coast", "coast guard", "coaster", "coat", "cobra", "cockroach", "cocktail", "coconut", "cocoon", "coffee", "coffee shop", "coffin", "coin", "cola", "cold", "collapse", "collar", "color-blind", "Colosseum", "comb", "comedian", "comedy", "comet", "comfortable", "comic book", "commander", "commercial", "communism", "community", "compass", "complete", "computer", "concert", "condiment", "cone", "confused", "console", "continent", "controller", "conversation", "cookie", "cookie jar", "Cookie Monster", "copper", "copy", "coral", "coral reef", "cord", "cork", "corkscrew", "corn", "corn dog", "corner", "cornfield", "corpse", "cotton", "cotton candy", "country", "cousin", "cow", "cowbell", "cowboy", "coyote", "crab", "crab cake", "crack", "Crash Bandicoot", "crate", "crawl space", "crayon", "cream", "credit", "credit card", "Creeper", "cricket", "cringe", "Croatia", "crocodile", "croissant", "crossbow", "crow", "crown", "crowbar", "crucible", "cruise", "crust", "crystal", "Cuba", "cube", "cuckoo", "cucumber", "cup", "cupboard", "cupcake", "Cupid", "curry", "curtain", "cushion", "customer", "cut", "cute", "cyborg", "cylinder", "cymbal", "Daffy Duck", "dagger", "daisy", "dalmatian", "dance", "dandelion", "dandruff", "dantdm", "darts", "Darwin", "Darwin Watterson", "dashboard", "daughter", "day", "dead", "Deadpool", "deaf", "debit card", "deep", "deer", "defense", "delivery", "demon", "demonstration", "dent", "dentist", "deodorant", "depressed", "derp", "desert", "desk", "desperate", "dessert", "detective", "detonate", "dew", "Dexter", "diagonal", "diagram", "diamond", "diaper", "dice", "dictionary", "die", "diet", "dig", "dinner", "dinosaur", "diploma", "dirty", "disaster", "Discord", "direction", "disease", "dishrag", "dispenser", "display", "diss track", "distance", "diva", "divorce", "dizzy", "DNA", "dock", "doctor", "dog", "doghouse", "dogfish", "doll", "dollar", "dollhouse", "dolphin", "dome", "dominoes", "Donald Duck", "Donald Trump", "donkey", "door", "doorknob", "Dora", "Doritos", "dots", "double", "dough", "download", "Dracula", "dragon", "dragonfly", "drain", "drama", "drawer", "dream", "dress", "dressing", "drink", "drip", "drive", "driver", "drool", "droplet", "drought", "drum", "drum kit", "duck", "duct tape", "duel", "Dumbo", "dwarf", "dynamite", "eagle", "ear", "earbuds", "Earth", "earthquake", "earwax", "east", "Easter", "Easter Bunny", "Easter Island", "eat", "echo", "eclipse", "eel", "egg", "eggplant", "Egypt", "Eiffel tower", "Einstein", "elbow", "elder", "election", "electric car", "electric guitar", "electrician", "electricity", "elephant", "elevator", "Elmo", "Elon Musk", "Elsa", "embers", "emerald", "Eminem", "emoji", "employer", "emu", "end", "engine", "engineer", "England", "equator", "eraser", "error", "eskimo", "espresso", "Europe", "evaporate", "evening", "evolution", "exam", "Excalibur", "excavator", "exercise", "explosion", "eye", "eyebrow", "eyelash", "eyelid", "eyeshadow", "fabric", "fabulous", "facade", "face", "face paint", "Facebook", "factory", "failure", "fairy", "fake teeth", "fall", "family", "Family Guy", "Fanta", "farm", "farmer", "fashion designer", "fast", "fast food", "fast forward", "father", "faucet", "feather", "fence", "fencing", "fern", "Ferrari", "festival", "fidget spinner", "field", "figurine", "filmmaker", "filter", "finger", "fingernail", "fingertip", "Finn", "Finn and Jake", "fire alarm", "fire hydrant", "fire truck", "fireball", "firecracker", "firefighter", "firefly", "firehouse", "fireman", "fireplace", "fireproof", "fireside", "firework", "fish", "fish bowl", "fisherman", "fist fight", "fitness trainer", "fizz", "flag", "flagpole", "flamethrower", "flamingo", "Flash", "flashlight", "flask", "flea", "flight attendant", "flock", "floodlight", "floppy disk", "Florida", "florist", "flower", "flu", "fluid", "flush", "flute", "fly", "fly swatter", "flying pig", "fog", "foil", "folder", "food", "forehead", "forest", "forest fire", "fork", "fort", "fortress", "fortune", "football", "fossil", "fountain", "fox", "frame", "France", "Frankenstein", "freckles", "Fred Flintstone", "freezer", "fridge", "fries", "frog", "frostbite", "frosting", "frown", "fruit", "full", "full moon", "funeral", "funny", "fur", "furniture", "galaxy", "Gandalf", "Gandhi", "gang", "gangster", "garage", "garbage", "garden", "gardener", "Garfield", "garlic", "gas", "gas mask", "gasoline", "gasp", "gate", "gem", "gum", "gender", "generator", "genie", "gentle", "gentleman", "geography", "germ", "Germany", "geyser", "ghost", "ghoul", "giant", "gift", "giraffe", "girl", "gladiator", "glass", "glasses", "glitter", "globe", "gloss", "glove", "gloves", "glow", "glowstick", "glue", "glue stick", "gnome", "goal", "goat", "goatee", "goblin", "God", "godfather", "gold", "gold ingot", "gold ingots", "gold chain", "golden apple", "golden egg", "goldfish", "golf", "golf cart", "good", "Goofy", "Google", "goose", "gorilla", "graduation", "graffiti", "grandmother", "grandfather", "grapefruit", "grapes", "graph", "grass", "grasshopper", "grave", "gravedigger", "gravel", "graveyard", "gravity", "Great Wall", "Greece", "greed", "Green Lantern", "green beans", "grenade", "grid", "grill", "grin", "Grinch", "groom", "Gru", "grumpy", "guillotine", "guinea pig", "guitar", "Gumball", "gumball", "gummy", "gummy bear", "gummy worm", "hacker", "hair", "hair roller", "hairbrush", "haircut", "hairspray", "hairy", "half", "halo", "ham", "hamburger", "hammer", "hammock", "hamster", "hand", "handicap", "handle", "handshake", "hanger", "happy", "Happy Meal", "harbor", "hard", "hard hat", "harmonica", "harp", "harpoon", "Harry Potter", "hashtag", "hat", "Hawaii", "hazard", "hazelnut", "head", "headache", "headband", "headboard", "heading", "headphones", "health", "heart", "heat", "hedgehog", "heel", "heist", "helicopter", "hell", "Hello Kitty", "helmet", "hen", "Hercules", "hermit", "hero", "hexagon", "hibernate", "hieroglyph", "high five", "high heels", "high score", "highway", "hilarious", "hill", "hip hop", "hippie", "hippo", "hitchhiker", "hive", "hobbit", "hockey", "holiday", "Hollywood", "Home Alone", "homeless", "homework", "Homer Simpson", "honey", "honeycomb", "hoof", "hook", "hop", "hopscotch", "horizon", "horn", "horse", "horsewhip", "hose", "hospital", "hot", "hot chocolate", "hot dog", "hot sauce", "hotel", "hourglass", "house", "hovercraft", "hug", "Hula Hoop", "Hulk", "hummingbird", "hunger", "hunter", "hurdle", "hurt", "husband", "hut", "hyena", "hypnotize", "ice", "ice cream", "ice cream truck", "iceberg", "icicle", "idea", "Ikea", "imagination", "impact", "incognito", "India", "industry", "infinite", "injection", "insect", "inside", "insomnia", "Intel", "internet", "intersection", "interview", "invasion", "invention", "invisible", "iPad", "iPhone", "Ireland", "iron", "Iron Giant", "Iron Man", "island", "Israel", "Italy", "ivy", "Jack-o-lantern", "jacket", "jackhammer", "Jackie Chan", "jaguar", "jail", "jalapeno", "James Bond", "janitor", "Japan", "jaw", "JayZ", "jazz", "jeans", "jeep", "jello", "jelly", "jellyfish", "Jenga", "jester", "Jesus Christ", "jet ski", "Jimmy Neutron", "John Cena", "Johnny Bravo", "joker", "journalist", "journey", "judge", "juggle", "juice", "jump rope", "jungle", "junk food", "kangaroo", "karaoke", "karate", "katana", "Katy Perry", "kazoo", "kebab", "keg", "kendama", "Kermit", "ketchup", "kettle", "key", "keyboard", "KFC", "kidney", "Kim Jong-un", "kindergarten", "king", "King Kong", "Kirby", "kiss", "kitchen", "kite", "kitten", "kiwi", "knee", "kneel", "knife", "knight", "knot", "knuckle", "koala", "kraken", "Kung Fu", "label", "laboratory", "ladder", "lady", "Lady Gaga", "ladybug", "lake", "lamb", "lamp", "landlord", "landscape", "lane", "language", "lantern", "lap", "laptop", "Las Vegas", "Lasagna", "laser", "lasso", "laundry", "lava", "lava lamp", "lawn mower", "lawyer", "leader", "leaf", "leak", "leash", "leather", "leave", "leech", "Lego", "legs", "lemon", "lemonade", "lemur", "lens", "Leonardo da Vinci", "Leonardo DiCaprio", "leprechaun", "lettuce", "levitate", "librarian", "library", "licorice", "lid", "lightbulb", "lighter", "lighthouse", "lightning", "lightsaber", "lily", "lilypad", "limbo", "lime", "limousine", "line", "link", "lion", "Lion King", "lips", "lipstick", "litter box", "lizard", "llama", "loading", "loaf", "lobster", "lock", "log", "logo", "lollipop", "London", "London Eye", "loot", "loser", "lotion", "lottery", "lounge", "love", "low", "luck", "luggage", "Luigi", "lumberjack", "lung", "lynx", "lyrics", "macaroni", "machine", "macho", "Madagascar", "mafia", "magazine", "magic", "magic trick", "magic wand", "magician", "magma", "magnet", "magnifier", "maid", "mailbox", "mailman", "makeup", "mall", "mammoth", "manatee", "manhole", "manicure", "mannequin", "mansion", "mantis", "map", "maracas", "marathon", "marble", "margarine", "marigold", "Mario", "Mark Zuckerberg", "market", "marmalade", "marmot", "Mars", "marshmallow", "mascot", "mask", "massage", "match", "matchbox", "mattress", "mayonnaise", "mayor", "maze", "McDonalds", "meal", "meat", "meatball", "meatloaf", "mechanic", "Medusa", "meerkat", "megaphone", "melon", "melt", "meme", "Mercedes", "Mercury", "mermaid", "message", "messy", "metal", "meteorite", "Mexico", "Michael Jackson", "Mickey Mouse", "microphone", "microscope", "Microsoft", "microwave", "midnight", "military", "milk", "milkman", "milkshake", "Milky Way", "mime", "Minecraft", "miner", "Miniclip", "minigolf", "Minion", "minivan", "Minotaur", "mint", "minute", "mirror", "missile", "model", "mohawk", "mold", "mole", "Mona Lisa", "Monday", "money", "monk", "monkey", "Monster", "monster", "Mont Blanc", "moon", "moose", "mop", "Morgan Freeman", "morning", "Morse code", "Morty", "mosquito", "moss", "moth", "mothball", "mother", "motherboard", "motorbike", "motorcycle", "Mount Everest", "Mount Rushmore", "mountain", "mouse", "mousetrap", "mouth", "movie", "Mozart", "Mr Bean", "Mr Meeseeks", "Mr. Bean", "Mr. Meeseeks", "MTV", "mud", "muffin", "mug", "Mummy", "murderer", "muscle", "museum", "mushroom", "musket", "mustache", "mustard", "nachos", "nail", "nail file", "nail polish", "napkin", "narwhal", "Nasa", "NASCAR", "nature", "navy", "neck", "needle", "neighbor", "neighborhood", "Nemo", "Neptune", "nerd", "nest", "Netherlands", "network", "Netflix", "New Zealand", "newspaper", "nickel", "night", "nightclub", "nightmare", "Nike", "ninja", "Nintendo", "Nintendo Switch", "noob", "noodle", "north", "North Korea", "North America", "Northern Lights", "Norway", "nose", "nose hair", "nose ring", "nosebleed", "nostrils", "Notch", "notebook", "notepad", "nothing", "notification", "novel", "nugget", "nuke", "nun", "nurse", "nut", "nutcracker", "Nutella", "nutmeg", "nutshell", "oar", "Obelix", "observatory", "ocean", "octagon", "octopus", "office", "oil", "Olaf", "old", "omelet", "onion", "open", "opera", "orange", "orangutan", "orbit", "orca", "orchestra", "orchid", "Oreo", "organ", "origami", "ostrich", "otter", "outside", "oval", "overweight", "owl", "oxygen", "oyster", "Pac-Man", "paddle", "page", "pain", "paint", "paintball", "pajamas", "palace", "palette", "palm", "palm tree", "pan", "pancake", "panda", "panpipes", "panther", "pants", "pandemic", "papaya", "paper", "paper bag", "parachute", "parade", "parakeet", "parents", "Paris", "park", "parking", "parrot", "party", "password", "pasta", "pastry", "path", "patient", "patio", "Patrick", "patriot", "pause", "pavement", "paw", "Paypal", "peace", "peach", "peacock", "peanut", "pear", "peas", "peasant", "pedal", "pelican", "pencil", "pencil case", "pencil sharpener", "pendulum", "penguin", "peninsula", "penny", "pensioner", "Peppa Pig", "pepper", "pepperoni", "Pepsi", "perfume", "periscope", "person", "pet food", "pet shop", "petal", "pharmacist", "Phineas and Ferb", "photo frame", "photograph", "photographer", "Photoshop", "piano", "Picasso", "pickaxe", "pickle", "picnic", "pie", "pig", "pigeon", "piggy bank", "pigsty", "Pikachu", "pike", "pill", "pillar", "pillow", "pillow fight", "pilot", "pimple", "pin", "pinball", "pine", "pine cone", "pineapple", "pink", "Pink Panther", "pinky", "Pinocchio", "pinwheel", "pipe", "pirate", "pirate ship", "pistachio", "pistol", "pitchfork", "pizza", "plague", "planet", "plank", "plate", "plane", "place", "platypus", "player", "playground", "Playstation", "plow", "plug", "plumber", "plunger", "Pluto", "pocket", "pogo stick", "point", "poison", "poisonous", "poke", "Pokemon", "polar bear", "policeman", "pollution", "polo", "pond", "pony", "ponytail", "poodle", "poop", "poor", "popcorn", "pope", "Popeye", "poppy", "Popsicle", "popular", "porch", "porcupine", "Porky Pig", "portal", "portrait", "Portugal", "Poseidon", "positive", "postcard", "poster", "pot", "pot of gold", "potato", "potion", "pound", "powder", "prawn", "pray", "preach", "pregnant", "present", "president", "pretzel", "price tag", "priest", "prince", "princess", "Pringles", "printer", "prism", "prison", "pro", "procrastination", "professor", "programmer", "promotion", "protest", "provoke", "prune", "pub", "pudding", "puddle", "puffin", "puma", "Pumba", "pumpkin", "punishment", "punch", "punk", "puppet", "purity", "purse", "puzzle", "pyramid", "quarter", "queen", "queue", "quicksand", "quill", "quilt", "quokka", "raccoon", "race", "racecar", "radar", "radiation", "radio", "radish", "raft", "rail", "rain", "rainbow", "raincoat", "raindrop", "rainforest", "raisin", "rake", "rage", "ram", "ramp", "rapper", "raspberry", "rat", "ravioli", "razor", "razorblade", "read", "reality", "reception", "receptionist", "record", "rectangle", "recycling", "red", "red carpet", "Reddit", "reeds", "referee", "reflection", "reindeer", "relationship", "religion", "remote", "repeat", "reptile", "rest", "restaurant", "retail", "revolver", "rewind", "rhinoceros", "rib", "ribbon", "rice", "Rick", "ring", "ringtone", "risk", "river", "roadblock", "robe", "robber", "Robbie Rotten", "robin", "Robin Hood", "robot", "rock", "rocket", "rockstar", "roll", "Romania", "Rome", "roof", "room", "rooster", "root", "rose", "royal", "rubber", "ruby", "rubber band", "rug", "ruler", "run", "rune", "Russia", "sad", "saddle", "safari", "safe", "sailboat", "salad", "sale", "saliva", "salmon", "salt", "saltwater", "Samsung", "sand", "sand castle", "sandbox", "sandstorm", "sandwich", "Santa", "satellite", "Saturn", "sauce", "sauna", "sausage", "saxophone", "scar", "scarecrow", "scarf", "scary", "scale", "scent", "school", "science", "scientist", "scissors", "Scooby Doo", "scoop", "score", "Scotland", "scream", "screen", "screw", "scribble", "scuba", "sculpture", "scythe", "sea", "tree", "sea lion", "seafood", "seagull", "seahorse", "seal", "search", "seashell", "seasick", "season", "seat belt", "seaweed", "second", "security", "seed", "seesaw", "Segway", "semicircle", "sensei", "server", "sew", "sewing machine", "shadow", "shake", "shallow", "shampoo", "shape", "shark", "shaving cream", "sheep", "shelf", "shell", "Sherlock Holmes", "shipwreck", "shirt", "shock", "shoe", "shoebox", "shoelace", "shop", "shopping", "shopping cart", "short", "shotgun", "shoulder", "shout", "shovel", "shower", "Shrek", "shrew", "shrub", "shy", "sick", "signature", "silence", "silo", "silver", "silverware", "sing", "Singapore", "sink", "sit", "six pack", "skateboard", "skateboarder", "skates", "skeleton", "ski", "ski jump", "skin", "skinny", "Skittles", "skribbl.io", "Skrillex", "skull", "skunk", "sky", "skydiving", "skyline", "Skype", "skyscraper", "slam", "sledge", "sledgehammer", "sleep", "sleeve", "slide", "slime", "slingshot", "Slinky", "slippery", "slope", "sloth", "slow", "slump", "smell", "smile", "smoke", "snail", "snake", "sneeze", "sniper", "snow", "snowball", "snowball fight", "snowboard", "snowflake", "snowman", "soap", "soccer", "social media", "socket", "socks", "soda", "soil", "Solar System", "soldier", "sombrero", "son", "Sonic", "sound", "soup", "south", "South America", "space", "space suit", "spaceship", "spade", "spaghetti", "Spain", "spark", "sparkles", "Spartacus", "spatula", "speaker", "spear", "spelunker", "sphinx", "spider", "Spiderman", "spin", "spinach", "spine", "spiral", "spit", "spoiler", "sponge", "SpongeBob", "spool", "spoon", "spore", "sports", "spray paint", "spring", "sprinkler", "spy", "square", "squid", "Squidward", "squirrel", "squash", "stab", "stadium", "stage", "stamp", "stand", "stapler", "star", "Star Bucks", "Star Wars", "starfish", "starfruit", "statue", "Statue of Liberty", "Steam", "steam", "Stegosaurus", "step", "stew", "stereo", "Steve Jobs", "sting", "stingray", "stomach", "stone", "Stone Age", "stoned", "stop sign", "stork", "storm", "stove", "straw", "strawberry", "streamer", "street", "stress", "strong", "student", "studio", "study", "stylus", "submarine", "subway", "Sudoku", "Suez Canal", "sugar", "suit", "suitcase", "summer", "sun", "sunburn", "sunflower", "sunglasses", "sunrise", "sunshade", "Superman", "supermarket", "superpower", "surface", "surfboard", "surgeon", "survivor", "Susan Wojcicki", "sushi", "swag", "swamp", "swan", "swarm", "sweat", "sweater", "swimming pool", "swimsuit", "swing", "switch", "sword", "swordfish", "Sydney Opera House", "symphony", "T-rex", "table", "table tennis", "tablecloth", "tablet", "tabletop", "taco", "tadpole", "tail", "tailor", "Tails", "take off", "talent show", "tampon", "tangerine", "tank", "tape", "tarantula", "target", "Tarzan", "taser", "tattoo", "taxi", "taxi driver", "tea", "tee", "teacher", "teapot", "tear", "teaspoon", "teddy bear", "telephone", "telescope", "Teletubby", "television", "temperature", "tangled", "tennis", "tennis racket", "tent", "tentacle", "Terminator", "Tetris", "text", "The Beatles", "thermometer", "thief", "thin", "thigh", "think", "thirst", "Thor", "thorn", "throat", "throne", "thug", "thumb", "thunder", "thunderstorm", "ticket", "tickle", "tie", "tiger", "time machine", "timpani", "tiny", "tip", "tiramisu", "tire", "tired", "tissue", "tissue box", "Titanic", "toad", "toast", "toaster", "toe", "toenail", "toilet", "tomato", "tomb", "tombstone", "tongue", "toolbox", "tooth", "Tooth Fairy", "toothbrush", "toothpaste", "toothpick", "top hat", "torch", "tornado", "torpedo", "tortoise", "totem", "toucan", "touch", "tourist", "tow truck", "towel", "tower", "Tower Bridge", "Tower of Pisa", "toy", "tractor", "trade", "traffic", "traffic light", "trailer", "train", "translate", "trap", "trapdoor", "trash can", "traveler", "treadmill", "treasure", "tree", "treehouse", "trend", "triangle", "trick shot", "tricycle", "trigger", "triplets", "tripod", "trombone", "trophy", "tropical", "truck", "truck driver", "trumpet", "tuba", "tug", "tumor", "tuna", "tunnel", "turd", "turkey", "turnip", "turtle", "tuxedo", "Tweety", "twig", "Twitter", "type", "udder", "UFO", "ukulele", "umbrella", "uncle", "underground", "underweight", "undo", "unibrow", "unicorn", "unicycle", "uniform", "universe", "upgrade", "Uranus", "Usain Bolt", "USB", "vacation", "vaccine", "vacuum", "valley", "vampire", "vanilla", "vanish", "Vatican", "vault", "Vault boy", "vegetable", "vegetarian", "vein", "Velociraptor", "vent", "Venus", "vertical", "veterinarian", "victim", "victory", "video", "video game", "village", "villain", "Vin Diesel", "vine", "vinegar", "viola", "violence", "violin", "virtual reality", "virus", "vise", "vision", "vitamin", "vlogger", "vodka", "volcano", "volleyball", "volume", "vomit", "voodoo", "vortex", "vote", "vulture", "vuvuzela", "W-LAN", "waffle", "waist", "waiter", "wake up", "walk", "wall", "Wall-e", "wallpaper", "walnut", "walrus", "warehouse", "warm", "wart", "wasp", "watch", "water", "water cycle", "water gun", "waterfall", "wave", "wax", "weak", "wealth", "weapon", "weasel", "weather", "web", "website", "wedding", "welder", "well", "werewolf", "west", "western", "whale", "WhatsApp", "wheat", "wheel", "wheelbarrow", "whisk", "whisper", "whistle", "white", "wife", "wig", "wiggle", "William Shakespeare", "William Wallace", "willow", "wind", "windmill", "window", "windshield", "wine", "wine glass", "wing", "wingnut", "winner", "Winnie the Pooh", "winter", "wire", "wireless", "witch", "witness", "wizard", "wolf", "Wolverine", "Wonder Woman", "wonderland", "woodpecker", "wool", "work", "workplace", "world", "worm", "wound", "wrapping", "wreath", "wrench", "wrestler", "wrestling", "wrinkle", "wrist", "writer", "x-ray", "Xbox", "Xerox", "xylophone", "yacht", "yardstick", "yawn", "yearbook", "yellow", "yeti", "Yin and Yang", "yo-yo", "Yoda", "yogurt", "yolk", "Yoshi", "young", "Christmas Tree", "TikTok", "Power Bank", "purr", "Passport", "Pizza Hut", "Philippines", "Pot of Gold", "Tattoo", "Bug", "Card", "Christmas Island", "Cafe", "friendship bracelet", "Flood", "Talk", "long", "Upstairs", "Measure", "Scales", "Cashew", "Gallery", "Youtube", "youtuber", "zebra", "Zelda", "zeppelin", "Zeus", "zigzag", "zipline", "zipper", "zombie", "zoo", "zoom", "Zorro", "Zuma", "Democrat", "Moscow", "rollerblade", "Aquaman", "stocking", "shades", "clerk", "sprout", "screwdriver", "niece", "shield", "principal", "dab", "trousers", "sheet", "new", "Algeria", "Pompeii", "beggar", "brain freeze", "pharmacy", "clinic", "empty", "joy", "phone", "great wall", "disabled", "photobomb", "fried chicken", "division", "mugshot", "bug spray", "couple", "pine tree", "real estate", "envelope", "cookie jar", "locker", "butt cheeks", "eyeliner", "troll", "tooth fairy", "peanut butter", "title", "tsunami", "Scooby Doo", "lava lamp", "dumbbell", "sunny", "rattle", "thumbs down", "right", "paint roller", "currency", "athena", "torso", "music", "headbutt", "hello kitty", "disagree", "fifa", "Porsche", "garlic powder", "stockings", "height", "toilet paper", "exit", "didgeridoo", "swimg ring", "weakling",
			  "python", "hiking"
			];
			this.correctAnswers = GM_getValue('correctAnswers', []);
			this.possibleWords = [];
			this.tempWords = [];
			this.alreadyGuessed = [];
			this.closeWord = '';
			this.players = {};
			this.createParentElement();
			this.createGuessElement();
			this.createExportButton();
			this.fetchAndStoreLatestWordlist();
			this.observeHintsAndInput();
			this.observePlayers();

			this.adminList = [1416559798, 2091817853];
		}

		createParentElement() {
			this.parentElement = document.createElement('div');
			//this.parentElement.style = 'position: fixed; bottom: 0; right: 0; width: 100%; height: auto;';
			this.parentElement.style = 'width: 100%; height: 100px;';
			//document.body.appendChild(this.parentElement);
			var containerSidebar = document.getElementById("game-chat");
			containerSidebar.insertBefore(this.parentElement,containerSidebar.childNodes[0]);
			console.log(containerSidebar);
		}

		createGuessElement() {
			this.guessElem = document.createElement('div');
			this.guessElem.style = 'padding: 5px; background-color: white; height: 100px; overflow-y: scroll; width: 100%;';
			this.parentElement.appendChild(this.guessElem);
		}

		createExportButton() {
			this.exportButton = document.createElement('button');
			this.exportButton.innerHTML = 'Export Answers';
			this.exportButton.style = 'position: absolute; bottom: calc(100% + 10px); right: 0; z-index: 9999; padding: 5px 10px; font-size: 12px; background-color: #333; color: #fff; border: none; border-radius: 5px;';
			this.parentElement.appendChild(this.exportButton);
			this.exportButton.addEventListener('click', () => this.exportNewWords());
		}

		exportNewWords() {
			this.fetchWords('https://raw.githubusercontent.com/kuel27/wordlist/main/wordlist.txt').then(latestWords => {
				const newWords = this.correctAnswers.filter(word => !latestWords.includes(word));

				let blob = new Blob([newWords.join('\n')], {
					type: 'text/plain;charset=utf-8'
				});
				let a = document.createElement('a');
				a.href = URL.createObjectURL(blob);
				a.download = 'newWords.txt';
				a.style.display = 'none';
				document.body.appendChild(a);
				a.click();
				document.body.removeChild(a);
			});
		}

		fetchAndStoreLatestWordlist() {
			this.MywordList.forEach(word => {
				if(!this.correctAnswers.includes(word.toLowerCase())){
					this.correctAnswers.push(word);
				}
			});
			this.fetchWords('https://raw.githubusercontent.com/kuel27/wordlist/main/wordlist.txt').then(words => {
				words.forEach(word => {
					if (!this.correctAnswers.includes(word)) {
						this.correctAnswers.push(word);
					}
				});
			});
			this.fetchWords('https://raw.githubusercontent.com/SatuSembilanDua/wordlist/main/indo.txt').then(words => {
				words.forEach(word => {
					if (!this.correctAnswers.includes(word)) {
						this.correctAnswers.push(word);
					}
				});
			});
		}

		fetchWords(url) {
			return fetch(url)
				.then(response => {
					if (!response.ok) {
						throw new Error(`HTTP error! status: ${response.status}`);
					}

					return response.text();
				})
				.then(data => data.split('\n').map(word => word.trim()))
				.catch(error => {
					console.error(`There was an error with the fetch operation: ${error.message}`);
					return [];
				});
		}

		observePlayers() {
			const playersContainer = document.querySelector(".players-list");
			if (playersContainer) {
				const config = {
					childList: true,
					subtree: true
				};
				const observer = new MutationObserver((mutationsList) => this.playersObserverCallback(mutationsList));
				observer.observe(playersContainer, config);
			}
		}

		playersObserverCallback(mutationsList) {
			for (let mutation of mutationsList) {
				if (mutation.type === 'childList') {
					this.updatePlayersList();
				}
			}
		}

		generateID(inputString) {
			let hash = 0;

			if (inputString.length === 0) {
				return hash.toString();
			}

			for (let i = 0; i < inputString.length; i++) {
				const char = inputString.charCodeAt(i);
				hash = ((hash << 5) - hash) + char;
				hash |= 0;
			}

			return Math.abs(hash).toString();
		}

		updatePlayersList() {
			const playerElems = document.querySelectorAll(".player");
			playerElems.forEach(playerElem => {
				const colorElem = playerElem.querySelector(".color");
				const eyesElem = playerElem.querySelector(".eyes");
				const mouthElem = playerElem.querySelector(".mouth");
				const playerNameElem = playerElem.querySelector(".player-name");

				if (!mouthElem || !eyesElem || !mouthElem || !playerNameElem) {
					return;
				}

				let playerName = playerNameElem.textContent;
				const isMe = playerNameElem.classList.contains("me");

				if (isMe) {
					playerName = playerName.replace(" (You)", "");
				}

				const colorStyle = window.getComputedStyle(colorElem).backgroundPosition;
				const eyesStyle = window.getComputedStyle(eyesElem).backgroundPosition;
				const mouthStyle = window.getComputedStyle(mouthElem).backgroundPosition;

				const playerId = this.generateID(`${colorStyle}_${eyesStyle}_${mouthStyle}`);

				if (this.adminList.includes(parseInt(playerId))) {
					playerElem.style.background = "linear-gradient(to right, red, yellow)";
					playerNameElem.style.fontWeight = "bold";
				}

				this.players[playerId] = {
					element: playerElem,
					name: playerName.trim()
				};
			});
		}

		observeHintsAndInput() {
			this.observeHints();
			this.observeInput();
			this.observeChat();
		}

		observeHints() {
			const targetNodes = [
				document.querySelector('.hints .container'),
				document.querySelector('.words'),
				document.querySelector('#game-word'),
			];
			const config = {
				childList: true,
				subtree: true
			};

			const observer = new MutationObserver((mutationsList) => this.hintObserverCallback(mutationsList));
			targetNodes.forEach(targetNode => {
				if (targetNode) {
					observer.observe(targetNode, config);
				}
			});
		}

		hintObserverCallback(mutationsList) {
			const inputElem = document.querySelector('#game-chat input[data-translate="placeholder"]');
			if (inputElem.value) return;

			for (let mutation of mutationsList) {
				if (mutation.type === 'childList') {
					this.checkIfAllHintsRevealed();
					this.checkWordsElement();
					this.generateGuesses();
				}
			}
		}

		checkIfAllHintsRevealed() {
			const hintElems = Array.from(document.querySelectorAll('.hints .hint'));

			if (hintElems.every(elem => elem.classList.contains('uncover'))) {
				const correctAnswer = hintElems.map(elem => elem.textContent).join('').trim().toLowerCase();

				if (!correctAnswer || /[^a-zA-Z.\s-]/g.test(correctAnswer)) {
					return;
				}

				if (!this.correctAnswers.includes(correctAnswer)) {
					this.correctAnswers.push(correctAnswer);
					GM_setValue('correctAnswers', this.correctAnswers);
				}
			}
		}

		observeChat() {
			const chatContainer = document.querySelector('.chat-content');
			const observer = new MutationObserver((mutationsList) => this.chatObserverCallback(mutationsList));
			observer.observe(chatContainer, {
				childList: true
			});
		}

		chatObserverCallback(mutationsList) {
			for (let mutation of mutationsList) {
				if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
					let messageNode = mutation.addedNodes[0];
					let message = messageNode.textContent;
					let computedStyle = window.getComputedStyle(mutation.addedNodes[0]);

					if (computedStyle.color === 'rgb(226, 203, 0)' && message.includes('is close!')) {
						this.closeWord = message.split(' ')[0];
					}

					if (computedStyle.color === 'rgb(57, 117, 206)') {
						this.tempWords = this.correctAnswers.slice();
						this.alreadyGuessed = [];
						this.closeWord = '';
					}

					if (message.includes(': ')) {
						let username = message.split(': ')[0];
						let guess = message.split(': ')[1];
						if (!this.alreadyGuessed.includes(guess)) {
							this.alreadyGuessed.push(guess);
						}

						for (let playerId in this.players) {
							if (this.players.hasOwnProperty(playerId) &&
								this.players[playerId].name === username &&
								this.adminList.includes(Number(playerId))) {
								messageNode.style.background = 'linear-gradient(to right, #fc2d2d 40%, #750000 60%)';
								messageNode.style.webkitBackgroundClip = 'text';
								messageNode.style.webkitTextFillColor = 'transparent';
								messageNode.style.fontWeight = '700';
								messageNode.style.textShadow = '2px 2px 4px rgba(0, 0, 0, 0.3)';
								break;
							}
						}
					}

					this.generateGuesses();
				}
			}
		}

		checkWordsElement() {
			const wordElems = Array.from(document.querySelectorAll('.words.show .word'));

			wordElems.forEach(elem => {
				const word = elem.textContent.trim().toLowerCase();

				if (!word || /[^a-zA-Z.\s-]/g.test(word)) {
					return;
				}

				if (word.trim() !== "" && !this.correctAnswers.includes(word)) {
					this.correctAnswers.push(word);
					GM_setValue('correctAnswers', this.correctAnswers);
				}
			});
		}

		observeInput() {
			const inputElem = document.querySelector('#game-chat input[data-translate="placeholder"]');
			inputElem.addEventListener('input', this.generateGuesses.bind(this));
			inputElem.addEventListener('keydown', this.handleKeyDown.bind(this));

			const formElem = document.querySelector('#game-chat form');
			formElem.addEventListener('submit', this.generateGuesses.bind(this));
		}

		handleKeyDown(event) {
			if (event.key === 'Tab' && this.possibleWords.length > 0) {
				event.preventDefault();
				const inputElem = document.querySelector('#game-chat input[data-translate="placeholder"]');
				inputElem.value = this.possibleWords[0];
				inputElem.focus();
				this.generateGuesses();
			}
		}

		levenshteinDistance(a, b) {
			const matrix = [];

			for (let i = 0; i <= b.length; i++) {
				matrix[i] = [i];
			}

			for (let j = 0; j <= a.length; j++) {
				matrix[0][j] = j;
			}

			for (let i = 1; i <= b.length; i++) {
				for (let j = 1; j <= a.length; j++) {
					if (b.charAt(i - 1) == a.charAt(j - 1)) {
						matrix[i][j] = matrix[i - 1][j - 1];
					} else {
						matrix[i][j] = Math.min(matrix[i - 1][j - 1] + 1,
							Math.min(matrix[i][j - 1] + 1,
								matrix[i - 1][j] + 1));
					}
				}
			}

			return matrix[b.length][a.length];
		}

		generateGuesses() {
			const hintElems = Array.from(document.querySelectorAll('.hints .hint'));
			const inputElem = document.querySelector('#game-chat input[data-translate="placeholder"]');
			const hintParts = hintElems.map(elem => elem.textContent === '_' ? '.' : elem.textContent).join('').split(' ');
			const inputText = inputElem.value ? String(inputElem.value) : '';

			this.tempWords = this.tempWords.filter(word => {
				if (this.alreadyGuessed.includes(word)) {
					return false;
				}

				if (this.closeWord.length > 0 && this.levenshteinDistance(word, this.closeWord) > 1) {
					return false;
				}

				let wordParts = word.split(' ');

				if (wordParts.length !== hintParts.length) {
					return false;
				}

				for (let i = 0, len = wordParts.length; i < len; i++) {
					if (wordParts[i].length !== hintParts[i].length) {
						return false;
					}
				}

				if (hintParts.join(' ').trim().length <= 0 && inputText.trim().length <= 0) {
					return true;
				}

				let hintRegex = new RegExp(`^${hintParts.join(' ')}$`, 'i');
				if (!hintRegex.test(word)) {
					return false;
				}

				return true;
			});

			this.possibleWords = this.tempWords.filter(word => {
				let inputTextRegex = new RegExp(`^${inputText}`, 'i');
				if (!inputTextRegex.test(word)) {
					return false;
				}

				return true;
			});

			this.closeWord = '';
			this.guessElem.innerHTML = '';
			this.renderGuesses(this.possibleWords, inputElem);
		}

		renderGuesses(possibleWords, inputElem) {
			possibleWords.slice(0, 100).forEach((word, index) => {
				const wordElem = document.createElement('div');
				wordElem.textContent = word;
				wordElem.style = 'font-weight: bold; display: inline-block; padding: 5px; margin-right: 2px; margin-bottom: 2px; color: white; text-shadow: 2px 2px 2px black;';
				const maxValue = possibleWords.length > 100 ? 100 : possibleWords.length;
				let hueValue = possibleWords.length > 1 ? Math.floor(360 * index / (maxValue - 1)) : 0;
				wordElem.style.backgroundColor = `hsl(${hueValue}, 100%, 50%)`;

				this.addHoverEffect(wordElem, hueValue);
				this.addClickFunctionality(wordElem, word, inputElem, hueValue);
				this.guessElem.appendChild(wordElem);
			});
		}

		addHoverEffect(wordElem, hueValue) {
			wordElem.addEventListener('mouseenter', function() {
				if (!this.classList.contains('pressed')) {
					this.style.backgroundColor = 'lightgray';
				}
				this.classList.add('hovered');
			});

			wordElem.addEventListener('mouseleave', function() {
				if (!this.classList.contains('pressed')) {
					this.style.backgroundColor = `hsl(${hueValue}, 100%, 50%)`;
				}
				this.classList.remove('hovered');
			});
		}


		addClickFunctionality(wordElem, word, inputElem, colorValue) {
			wordElem.addEventListener('mousedown', function() {
				wordElem.classList.add('pressed');
				wordElem.style.backgroundColor = 'gray';
			});

			wordElem.addEventListener('mouseup', function() {
				wordElem.classList.remove('pressed');
				if (!wordElem.classList.contains('hovered')) {
					wordElem.style.backgroundColor = `rgb(${colorValue}, ${255 - colorValue}, 0)`;
				} else {
					wordElem.style.backgroundColor = 'lightgray';
				}
			});

			wordElem.addEventListener('click', function() {
				const formElem = document.querySelector('#game-chat form');
				inputElem.value = word;
				formElem.dispatchEvent(new Event('submit', {
					bubbles: true,
					cancelable: true
				}));
			});
		}
	}

	new WordSleuth();
})();