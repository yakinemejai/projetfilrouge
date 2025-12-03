/*************************************************
 * EXERCICE 4 - Fonctions de prix
 * Notions : function, paramètres, return, toFixed
 *************************************************/

/* --- Correction Exercice 1, 2 & 3 --- */

const shopName = "Ma Boutique JS";
const city = "Lyon";
let isOpen = true;
let productCount = 3;
let slogan = "Des goodies pour développeurs passionnés !";

const taglineElement = document.querySelector(".site-tagline");
if (taglineElement) {
  taglineElement.textContent =
    "Bienvenue dans " + shopName + " à " + city + " 👋";
}

const yearSpan = document.getElementById("year");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

let welcomeMessage =
  "Bienvenue dans " + shopName + " située à " + city + " !";
let welcomeMessage2 = `Bienvenue dans ${shopName} à ${city} !`;
let sloganLength = slogan.length;
let sloganUppercase = slogan.toUpperCase();
let sloganModified = slogan.replace("goodies", "trésors");

const TVA = 0.2;
let examplePriceHT = 20;
let examplePriceTTC = examplePriceHT + examplePriceHT * TVA;
let salesCount = 2;

/* --- Nouveautés Exercice 4 --- */

// Fonction qui calcule un prix TTC à partir d'un prix HT
function calculatePriceTTC(priceHT) {
  return priceHT + priceHT * TVA;
}

// Fonction qui formate un prix en "xx,xx €"
function formatPrice(price) {
  return price.toFixed(2).replace(".", ",") + " €";
}

// Tests dans la console
console.log("Prix TTC pour 10€ HT :", formatPrice(calculatePriceTTC(10)));
console.log(
  "Prix TTC pour 19,99€ HT :",
  formatPrice(calculatePriceTTC(19.99))
);

/* --- Rendu visuel Exo 4 --- */

const cartMessageElement = document.getElementById("cart-message");
if (cartMessageElement) {
  cartMessageElement.textContent =
    "Les fonctions de calcul et de formatage des prix sont prêtes ✅";
}

console.log("Exercice 4 chargé ✅");

















// - Créer des variables pour :
//   nom du produit (featuredProductName), prix HT (featuredProductPriceHT), description (featuredProductDescription), image (featuredProductImage)
let featuredProductName = "sac";
let featuredProductPriceHT = 40.99;
let featuredProductDescription = "Sac pratique et élégant, idéal pour un usage quotidien.";
let featuredProductImage = "https://www.oberthur.fr/23466-thickbox_default/sac-a-dos-ordinateur-156-lady-bradford.jpg";
// - Récupérer la section HTML où afficher le produit
//   (indice : utilisez une méthode du DOM qui sélectionne un élément par son id)

const productList = document.getElementById("product-list");


// - Définir une fonction (createFeaturedProductCard()) qui :
function createFeaturedProductCard() {


//     • crée un conteneur pour la carte  

let card = document.createElement("article");
//       (indice : il existe une méthode du DOM pour créer un élément HTML)
//     • crée une image :
let image = document.createElement("img");

//         - lui donner la source de l'image
// (indice : pensez aux propriétés des balises <img>) 
image.src = featuredProductImage;
//     
//     • crée un titre et lui mettre le nom du produit  
//       (indice : une propriété permet d’écrire du texte dans un élément)
let titre = document.createElement("h1");
titre.textContent = featuredProductName
//     • calcule le prix TTC en utilisant la fonction vue dans l’exercice précédent
//       (indice : vous avez déjà une fonction qui fait un calcul à partir du prix HT)
let priceTtc = calculatePriceTTC(featuredProductPriceHT);
//     • formate ce prix TTC avec la fonction prévue pour ça
let format = formatPrice(priceTtc); 
//     • crée un paragraphe pour af ficher le prix TTC
let paragrapheprice = document.createElement("p");
paragrapheprice.textContent = format;
//     • crée un autre paragraphe pour la description
let paragraphedesc = document.createElement("p");
paragraphedesc.textContent=featuredProductDescription;
//     • assemble tous les éléments dans le conteneur
//       (indice : pensez à une méthode qui ajoute un enfant dans un élément)
card.appendChild(image);
card.appendChild(titre);
card.appendChild(paragraphedesc);
card.appendChild(paragrapheprice);
productList.appendChild(card);
//     • retourne ce conteneur
return card; 
}
// - Avant d’afficher la carte, vider ce qu’il y a déjà dans la section
//   (indice : il existe une propriété qui permet de supprimer tout le contenu HTML d’un élément)
productList.innerHTML = ""; 
// - Appeler la fonction pour créer la carte
createFeaturedProductCard();

// - Ajouter le résultat dans la section prévue
//   (indice : même méthode que pour assembler les éléments dans la carte)
