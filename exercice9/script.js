/*************************************************
 * EXERCICE 9 - Panier interactif (avec clics)
 * Notions : addEventListener, fonctions avec param,
 *           mise à jour de l'état global et du DOM
 *************************************************/

/* --- Correction Exercice 1 - Variables & infos de base --- */

const shopName = "Ma Boutique JS";
const city = "Lyon";
let isOpen = true;
let productCount = 3;
let slogan = "Des goodies pour développeurs passionnés !";

console.log("Bienvenue dans " + shopName + " située à " + city);
console.log("Slogan :", slogan);

if (isOpen) {
  console.log("La boutique est ouverte.");
} else {
  console.log("La boutique est fermée.");
}

const taglineElement = document.querySelector(".site-tagline");
if (taglineElement) {
  taglineElement.textContent = `Bienvenue dans ${shopName} à ${city} 👋`;
}

const yearSpan = document.getElementById("year");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

/* --- Correction Exercice 2 - Chaînes de caractères & messages --- */

let welcomeMessage =
  "Bienvenue dans " + shopName + " située à " + city + " !";
let welcomeMessage2 = `Bienvenue dans ${shopName} à ${city} !`;

let sloganLength = slogan.length;
let sloganUppercase = slogan.toUpperCase();
let sloganModified = slogan.replace("goodies", "trésors");

console.log("welcomeMessage :", welcomeMessage);
console.log("welcomeMessage2 :", welcomeMessage2);
console.log("Longueur du slogan :", sloganLength);
console.log("Slogan en majuscules :", sloganUppercase);
console.log("Slogan modifié :", sloganModified);

const cartMessageElementEx2 = document.getElementById("cart-message");
if (cartMessageElementEx2) {
  cartMessageElementEx2.textContent =
    sloganModified + ` (${sloganLength} caractères dans le slogan original)`;
}

/* --- Correction Exercice 3 - Nombres & calculs --- */

let priceHTExample = 20;
const TVA = 0.2;

let priceTTCExample = priceHTExample + priceHTExample * TVA;
console.log("Prix HT d'exemple :", priceHTExample);
console.log("Prix TTC d'exemple :", priceTTCExample);

let salesCount = 0;
salesCount++;
console.log("Nombre de ventes après incrémentation :", salesCount);

/* --- Correction Exercice 4 - Fonctions de prix --- */

function calculatePriceTTC(priceHT) {
  return priceHT + priceHT * TVA;
}

function formatPrice(price) {
  return price.toFixed(2) + " €";
}

const testPrice1 = calculatePriceTTC(10);
const testPrice2 = calculatePriceTTC(19.99);

console.log("Test 1 TTC formaté :", formatPrice(testPrice1));
console.log("Test 2 TTC formaté :", formatPrice(testPrice2));

/* --- Correction Exercice 5 - Produit vedette (DOM, sans objets) --- */

let featuredProductName = "T-shirt Code & Chill";
let featuredProductPriceHT = 19.99;
let featuredProductDescription = "Parfait pour coder confortablement.";
let featuredProductImage = "images/tshirt-code-chill.jpg";

const productList = document.getElementById("product-list");

function createFeaturedProductCard() {
  const article = document.createElement("article");
  article.classList.add("product-card");

  const img = document.createElement("img");
  img.src = featuredProductImage;
  img.alt = featuredProductName;
  img.classList.add("product-image");

  const title = document.createElement("h3");
  title.textContent = featuredProductName;
  title.classList.add("product-title");

  const priceElt = document.createElement("p");
  const priceTTC = calculatePriceTTC(featuredProductPriceHT);
  priceElt.textContent = formatPrice(priceTTC);
  priceElt.classList.add("product-price");

  const desc = document.createElement("p");
  desc.textContent = featuredProductDescription;
  desc.classList.add("product-description");

  article.appendChild(img);
  article.appendChild(title);
  article.appendChild(priceElt);
  article.appendChild(desc);

  return article;
}

if (productList) {
  productList.innerHTML = "";
  const card = createFeaturedProductCard();
  productList.appendChild(card);
}

/* --- Correction Exercice 6 - Tableaux simples & console --- */

const productNames = ["T-shirt JS", "Mug Debug", "Sticker Bug Free"];
const productPricesHT = [19.99, 9.99, 2.5];

console.log("Nombre de produits (tableaux simples) :", productNames.length);

function displayProductsInConsole() {
  for (let i = 0; i < productNames.length; i++) {
    const name = productNames[i];
    const priceHT = productPricesHT[i];
    const priceTTC = calculatePriceTTC(priceHT);
    const formattedPrice = formatPrice(priceTTC);

    console.log(`${i + 1} - ${name} — ${formattedPrice} TTC`);
  }
}

displayProductsInConsole();

/* --- Correction Exercice 7 - Tableau d'objets & affichage DOM --- */
const products = [
  {
    id: 1,
    name: "T-shirt JS",
    priceHT: 19.99,
    description: "T-shirt confortable pour développeurs JavaScript.",
    image: "https://images.unsplash.com/photo-1561347981-969c80cf4463?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 2,
    name: "Mug Debug",
    priceHT: 9.99,
    description: "Mug pour déboguer avec du café ☕.",
    image: "https://images.unsplash.com/photo-1639755507638-e34150b56db2?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 3,
    name: "Sticker Bug Free",
    priceHT: 2.5,
    description: "Un sticker pour célébrer les bugs corrigés.",
    image: "https://images.unsplash.com/photo-1662389943678-df7f58b730e8?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  }
];

const productListSection = document.getElementById("product-list");

// ⚠️ createProductCard sera redéfinie plus bas pour ajouter le bouton
function createProductCard(product) {
  const article = document.createElement("article");
  article.classList.add("product-card");

  const img = document.createElement("img");
  img.src = product.image;
  img.alt = product.name;
  img.classList.add("product-image");

  const title = document.createElement("h3");
  title.textContent = product.name;
  title.classList.add("product-title");

  const priceElt = document.createElement("p");
  const priceTTC = calculatePriceTTC(product.priceHT);
  priceElt.textContent = formatPrice(priceTTC);
  priceElt.classList.add("product-price");

  const desc = document.createElement("p");
  desc.textContent = product.description;
  desc.classList.add("product-description");

  article.appendChild(img);
  article.appendChild(title);
  article.appendChild(priceElt);
  article.appendChild(desc);

  return article;
}

function displayProductsInPage() {
  if (!productListSection) return;

  productListSection.innerHTML = "";

  for (const product of products) {
    const card = createProductCard(product);
    productListSection.appendChild(card);
  }
}

displayProductsInPage();

/* --- Correction Exercice 8 - Panier & conditions (sans clic) --- */

let cartItemCount = 0;
let cartTotal = 0;

function generateCartMessage(total) {
  if (total === 0) {
    return "Votre panier est vide.";
  } else if (total < 50) {
    return "Ajoutez encore des produits pour profiter de la livraison offerte à partir de 50 €.";
  } else {
    return "Livraison offerte 🎉 Merci pour votre commande !";
  }
}

const cartCountElement = document.getElementById("cart-count");
const cartTotalElement = document.getElementById("cart-total");
const cartMessageElement = document.getElementById("cart-message");


const cartCountAsideElement = document.getElementById("cart-count-aside");
const cartTotalAsideElement = document.getElementById("cart-total-aside");

function updateCartDisplay() {
  // Header
  if (cartCountElement) {
    cartCountElement.textContent = cartItemCount.toString();
  }

  if (cartTotalElement) {
    cartTotalElement.textContent = formatPrice(cartTotal);
  }

  // Message (aside)
  if (cartMessageElement) {
    cartMessageElement.textContent = generateCartMessage(cartTotal);
  }

  // Aside
  if (cartCountAsideElement) {
    cartCountAsideElement.textContent = cartItemCount.toString();
  }

  if (cartTotalAsideElement) {
    cartTotalAsideElement.textContent = formatPrice(cartTotal);
  }
}

/*************************************************
 * Nouveautés EXERCICE 9 - Panier interactif
 * Objectif : ajouter des produits au panier avec
 *            un clic sur un bouton
 *************************************************/

// 1) Réinitialiser le panier au démarrage de l'exo 9
cartItemCount = 0;
cartTotal = 0;
updateCartDisplay();

/**
 * 2) Fonction qui ajoute un produit au panier
 * - reçoit un produit
 * - calcule son prix TTC
 * - met à jour le total et le nombre d'articles
 * - met à jour l'affichage grâce à updateCartDisplay()
 */
function addToCart(product) {
  const priceTTC = calculatePriceTTC(product.priceHT);
  cartTotal += priceTTC;
  cartItemCount++;
  updateCartDisplay();
}

/**
 * 3) Nouvelle version de createProductCard :
 *    on ajoute juste un bouton "Ajouter au panier"
 *    et on branche le clic sur addToCart(product).
 */
function createProductCard(product) {
  const article = document.createElement("article");
  article.classList.add("product-card");

  const img = document.createElement("img");
  img.src = product.image;
  img.alt = product.name;
  img.classList.add("product-image");

  const title = document.createElement("h3");
  title.textContent = product.name;
  title.classList.add("product-title");

  const priceElt = document.createElement("p");
  const priceTTC = calculatePriceTTC(product.priceHT);
  priceElt.textContent = formatPrice(priceTTC);
  priceElt.classList.add("product-price");

  const desc = document.createElement("p");
  desc.textContent = product.description;
  desc.classList.add("product-description");

  const button = document.createElement("button");
  button.textContent = "Ajouter au panier";
  button.classList.add("btn-add"); // correspond à ta classe CSS

  button.addEventListener("click", function () {
    addToCart(product);
  });

  article.appendChild(img);
  article.appendChild(title);
  article.appendChild(priceElt);
  article.appendChild(desc);
  article.appendChild(button);

  return article;
}   

/**
 * 4) Réutiliser displayProductsInPage()
 *    avec la nouvelle createProductCard
 */
function displayProductsInPage() {
  if (!productListSection) return;

  productListSection.innerHTML = "";

  for (const product of products) {
    const card = createProductCard(product);
    productListSection.appendChild(card);
  }
}

// 5) Initialisation finale
displayProductsInPage();
updateCartDisplay();

console.log("Exercice 9 simplifié chargé ✅");









