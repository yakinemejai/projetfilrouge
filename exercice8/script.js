/*************************************************
 * EXERCICE 7 - Tableau d'objets & affichage DOM
 * Notions : objets, tableau d'objets, for...of,
 *           DOM dynamique, réutilisation fonctions
 *************************************************/

/* --- Correction Exercices 1 à 6 --- */
/* (Même base que l'exercice 6) */

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

let priceHTExample = 20;
const TVA = 0.2;

let priceTTCExample = priceHTExample + priceHTExample * TVA;
console.log("Prix HT d'exemple :", priceHTExample);
console.log("Prix TTC d'exemple :", priceTTCExample);

let salesCount = 0;
salesCount++;
console.log("Nombre de ventes après incrémentation :", salesCount);

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

const productNames = ["T-shirt JS", "Mug Debug", "Sticker Bug Free"];
const productPricesHT = [19.99, 9.99, 2.5];

console.log("Nombre de produits :", productNames.length);

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

/* --- Nouveautés Exercice 7 --- */
/* Tableau d'objets & affichage DOM de tous les produits */

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

console.log("Exercice 7 chargé ✅");







// - Définir `cartItemCount = 0`
let cartItemCount = 0;

// - Définir `cartTotal = 0`
let cartTotal = 0; 

// - Récupérer les éléments du DOM :

//   - `cartCountHeader` ← élément avec id `"cart-count"`
cartCountHeader = document.getElementById("cart-count");

//   - `cartTotalHeader` ← élément avec id `"cart-total"`
cartTotalHeader = document.getElementById("cart-total");

//   - `cartCountAside` ← élément avec id `"cart-count-aside"`
cartCountAside = document.getElementById("cart-count-aside");

//   - `cartTotalAside` ← élément avec id `"cart-total-aside"`
cartTotalAside = document.getElementById("cart-total-aside");

//   - `cartMessage` ← élément avec id `"cart-message"`
cartMessage = document.getElementById("cart-message");



// - Définir la fonction `getCartMessage(total)` :
function getCartMessage(total) {
    if (total ===0) {
    return "panier vide";
}
    else if (total <50) {
        return "contine ainsi";
    }
else {
    //   - sinon → retourner message livraison offerte
 return "livrason offerte 🤪";
}
}
getCartMessage(cartTotal);
//   - si `total === 0` → retourner message panier vide



// - Définir la fonction `updateCartDisplay()` :
function updateCartDisplay(params) {
   //   - mettre à jour le texte des éléments du header avec `cartItemCount` et `formatPrice(cartCountHeader)`
cartCountHeader.textContent = cartItemCount;
cartTotalHeader.textContent = formatPrice(cartTotal);

//   - mettre à jour le texte des éléments de l’aside avec `cartItemCount` et `formatPrice(cartTotal)`
cartCountAside.textContent = cartItemCount;
cartTotalAside.textContent = getCartMessage(cartTotal);
//   - mettre à jour le texte du message en appelant `getCartMessage(cartTotal)`
cartMessage.textContent = getCartMessage(cartTotal); 
}

// - Tester :
//   - changer `cartItemCount` et `cartTotal`
cartTotal = 71; 
cartItemCount = 2;
//   - appeler `updateCartDisplay()`
updateCartDisplay();
//   - répéter pour différents cas (0, < 50, >= 50)
