// - Créer une variable pour le nom de la boutique
const shopName = "l'art d'aujourd'hui";

// - Créer une variable pour la ville
const city = "lyon";
// - Créer une variable booléenne pour savoir si la boutique est ouverte
let isOpen = true;
// - Créer une variable pour le nombre de produits
let productCount = 7;
// - Créer une variable pour le slogan
const slogan = "Des goodies pour développeurs passionnés !";

// - Afficher un message de bienvenue dans la console
const bienvenue = "bonjour ";
console.log(bienvenue);
// - Afficher le slogan dans la console
console.log(slogan);

// - Selon la variable qui indique si la boutique est ouverte :
//   - afficher dans la console un message “ouverte”
console.log("c'est ouvert");










// nouveaute exo 2

// - Partir du slogan déjà créé à l’exercice 1
// - Créer un premier message de bienvenue en collant du texte et des variables
//   (indice : utiliser l’opérateur pour concaténer des chaînes)

let welcomeMessage1 = bienvenue +"chez " + shopName;

// - Créer un deuxième message de bienvenue en utilisant une autre syntaxe
//   qui permet d’injecter des variables dans une chaîne
//   (indice : pensez au gabarit de chaîne avec ${...})
let welcomeMessage2 =`${bienvenue} chez ${shopName}`;
console.log(welcomeMessage2);


// - Calculer la longueur du slogan
let welcomeMessageLentgh = welcomeMessage1.length;
console.log(welcomeMessageLentgh);

// - Créer une version en majuscules du slogan
let welcomeMessageuppercase = welcomeMessage1.toUpperCase();
console.log(welcomeMessageuppercase);


// - Créer une version du slogan où un mot est remplacé par un autre
//   (indice : il existe une méthode pour remplacer une partie d’un texte)

let welcomeMessagereplace = welcomeMessage1.replace("chez", "a");
console.log(welcomeMessagereplace);

// - Afficher les deux messages, la longueur, la version majuscule
//   et la version modifiée dans la console








