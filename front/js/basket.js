//----- 1. Afficher les produits du panier et leurs caractéristiques, faire les totaux de prix et quantité, gérer les modifications et suppression -----

//Accès aux élements du DOM
const cartItems = document.getElementById("cart__items")

//Récupération des informations du panier contenues dans localStorage
let cartArray
if (localStorage.length !=0) { cartArray = JSON.parse(localStorage.cart)}

//Déclaration des variables globales
let newArticle
let nodeParent
let totalPrice = 0
let totalQuantity = 0

//Affichage d'un message d'alerte au chargement de la page si le panier est vide ou inexistant
document.onreadystatechange = function () {
    if (document.readyState == 'complete' && (cartArray == undefined || cartArray.length == 0)) {
        alert("Votre panier est vide!\nVeuillez sélectionner vos articles et les ajouter au panier avant de remplir le formulaire pour transmettre votre commande.")
    }
}

//Affichage du panier
for (let i in cartArray) {
    //Requête sur l'API pour récupérer les informations de chaque produit du panier
    fetch("http://localhost:3000/api/products/" + cartArray[i]._id)
        //Si la requête aboutie, parser les données .json contenues dans le body de la réponse en objet JS
        .then(function (response) {
            if (response.ok) {
                return response.json()
            }
        })
        .then(function (data) {
            cartArray[i].name = data.name
            cartArray[i].price = data.price
            cartArray[i].imageUrl = data.imageUrl
            cartArray[i].altTxt = data.altTxt
            viewCart(i)
            //Calcul des totaux prix et quantité
            updateTotalPriceAndQuantity()
        })
        //En cas d'erreur, affichage du message correspondant dans la console
        .catch(function (err) {
            console.log(err.message)
        })
}




function saveBasket(basket){
    localStorage.setItem("basket", JSON.stringify(basket));
}

function getBasket(){
    let basket = localStorage.getItem("basket");
    if (basket == null){
       return [];
    
    }
    else {
        return JSON.parse(basket)
    }
}


function addBasket(product){
    let basket = getBasket();
    let foundProduct = basket.find (p => p.id == product.id && p.color == product.color)
    console.log(foundProduct);
        if (foundProduct != undefined){
            foundProduct.numberof += product.numberof;
        }
        else {
        
            basket.push(product);
        }
    
    saveBasket(basket);
}

/*
function addBasket(product){
    let basket = getBasket();
    let foundProduct = basket.find (p => p.id == product.id, p.colors == product.colors)
        if (foundProduct != undefined){
            foundProduct.numberof++;
        }
        else {
            product.numberof = 1;
            basket.push(product);
        }
    
    saveBasket(basket);
}

*/

function removeFromBasket(product){
    let basket = getBasket();
    basket = basket.filter(p => p.id != product.id);
    saveBasket(basket);
}

function changeQuantity(product, numberof){
    let basket = getBasket();
    let foundProduct = basket.find (p => p.id == product.id)
        if (foundProduct != undefined){
            foundProduct.numberof += numberof;
            if(foundProduct.numberof <= 0){
                removeFromBasket(foundProduct);
            }
            else{
                saveBasket(basket);
            }
        } 
}

function getNumberProduct(){
    let basket = getBasket();
    let number = 0;
    for (let product of basket){
        number += product.numberof;
    }
    return number;
}

function getTotalPrice(){
    let basket = getBasket();
    let total = 0;
    for (let product of basket){
        total += product.numberof * product.price;
    }
    return total;

}