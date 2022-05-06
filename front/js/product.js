//requête fetch 

fetch('http://localhost:3000/api/products')
.then(function(res){
    if (res.ok){
        return res.json();
    }
})
//dans l'url de la page, extraction de l'id
//selon l'id, isoler dans l'API le produit en question
//appliquer les fonctions listées avec les informations du produit en question dans l'API
.then(function(data) {
   
    var urlIndex = data.findIndex(product => product._id == urlId)
    console.log(urlIndex);
    var selectedItem = data[urlIndex];
    console.log(selectedItem);
      titrePageProduit(selectedItem)
      imageProduit(selectedItem)
      titreProduit(selectedItem)
      prixProduit(selectedItem)
      descriptionProduit(selectedItem)
      couleursProduit(selectedItem)
})

//récupération de l'id dans l'url de la page
var urlId = new URLSearchParams(document.location.search).get("id")
console.log(urlId);

//sélection de la div avec la classe item__img
var divProduit = document.querySelector("article > .item__img");
//fonction de création de la balise <img> enfant de <div class="item__img"> avec attributs src et alt correspondants depuis l'API
function imageProduit(product){
    imgProduct = document.createElement("img");
    divProduit.appendChild(imgProduct);
    imgProduct.setAttribute("src", product.imageUrl);
    imgProduct.setAttribute("alt", product.altTxt);

}

//sélection de la balise <title>
var titrePage = document.querySelector("title");
//fonction de modification de la balise <title> selon les informations correspondantes dans l'API
function titrePageProduit(product){
  urlId.indexOf(product._id);
  if (urlId == product._id){
 titrePage.textContent = product.name;
  console.log(product._id, urlId)}
  else{
    titrePage.textContent = "Non";
  } 

}
//sélection du <h1 id="title">
var produitH1 = document.querySelector("#title");
//fonction de modification de la balise <h1> selon les infos correspondantes dans l'API
function titreProduit(product){
    produitH1.textContent = product.name;
}

//sélection de la balise <span id="price">
var produitPrixSpan = document.querySelector("#price");
//fonction de modification de la balise <span id="price"> selon les infos correspondantes dans l'API
function prixProduit(product){
    produitPrixSpan.textContent =product.price;
}

//sélection de la balise <p id="description">
var produitDescriptionP = document.querySelector("#description");
//fonction de modification de la balise <p id="description"> selon les infos correspondantes dans l'API
function descriptionProduit(product){
    produitDescriptionP.textContent = product.description;
}

//sélection de la balise <input id="colors">
var couleursSelectTag = document.querySelector("#colors");
//fonction de création de balises <option> enfants de <input> avec attribut value et contenu pour chaque élément color du tableau du produit dans l'API
function couleursProduit(product){
    for (let color of product.colors){
    console.log(color)
    colorProduct = document.createElement("option")
    couleursSelectTag.appendChild(colorProduct);
    colorProduct.setAttribute("value", color)
    colorProduct.textContent = color;
    }
}

//déclaration du panier = un tableau vide
var panierArray = [];
//sélection de l'élément colors dans le DOM 
var colors = document.getElementById("colors");
//sélection de l'élément quantity dans le DOM 
var quantity = document.getElementById("quantity");

//variable qui regroupe l'event onclick 
//event : dans une variable prend l'id depuis l'url, la couleur depuis la value de l'input colors, le nombre depuis la valeur de l'input quantity et transformation de cette valeur string en number
//appel de la fonction addBasket() de basket.js avec en argument la variable juste créée
//appel de la fonction getBasket() de basket.js vide pour avoir le panier à jour
var btnCartAdd = document.getElementById("addToCart").addEventListener("click", function() {
    var selectedProductInfo = {id : urlId, color : colors.value, numberof : parseInt(quantity.value)};
    console.log(selectedProductInfo);
    
    addBasket(selectedProductInfo);
    getBasket();
    var produitsPanier = console.log(getBasket());
    alert("Vous avez dans votre panier" + " "+ produitsPanier);

});



