

var panier = getBasket();
console.log(panier);
//boucle qui appelle l'API pour chaque élément du panier
for (let i in panier) {
 
console.log(panier[i].id);
    //appelle l'API pour chaque élément du panier selon l'ID
    fetch('http://localhost:3000/api/products/' + panier[i].id)
        .then(function(res){
             if (res.ok){
                return res.json();
                 }
        
        })
        //affectation des attributs de l'API à chaque produit du panier correspondant + création des articles du panier dans le DOM
        .then(function(data) {
            panier[i].name = data.name;
            panier[i].price = data.price;
            panier[i].imageUrl = data.imageUrl;
            panier[i].altTxt = data.altTxt;

            voirPanier(i);
         
        })
    }
var insertionMessageErreur = document.getElementById("cart__items");
function messageErreur(){
    getBasket();
    if (document.readyState =="complete" && (panier == undefined || panier.length == 0)){
        alert("Votre panier est vide :( Rendez-vous sur la page d'accueil pour admirer notre catalogue :)")
    }
}

messageErreur();

function articleProduitPanier(product){
    articlePanier =  document.createElement("article");
    cart__items.appendChild(articlePanier);
    articlePanier.setAttribute("data-id",product.id);
    articlePanier.setAttribute("data-color",product.color);
    articlePanier.classList.add("cart__item")
    nodeParent = articlePanier;
 }
//création de la balise <div> qui saisit comme argument le nom de la classe 
 function divProduitPanier(endOfClass){
    divProduit = document.createElement("div");
    nodeParent.appendChild(divProduit);
    divProduit.classList.add(nodeParent.className + endOfClass);
    nodeParent = divProduit;
 }
//création de la balise <img> qui saisit le contenu de l'attribut imgUrl et altTxt correspondant au produit dans l'aPI
function imgProduitPanier(product) {   
    imgProduit = document.createElement("img");
    nodeParent.appendChild(imgProduit)
    imgProduit.setAttribute("src",product.imageUrl);
    imgProduit.setAttribute("alt",product.altTxt);
}
//création de la balise <h2> qui saisit le contenu de l'attribut name correspondant au produit dans l'aPI
function titreProduitPanier(product){
    titreProduit = document.createElement("h2");
    nodeParent.appendChild(titreProduit);
    titreProduit.textContent = product.name;
}
//création des balises <p> dans le DOM, cas spécifique pour la suppression qui va appeler la fonction correspondante
function descriptionProduitPanier(index, text){
    paragrapheProduitPanier = document.createElement("p");
    nodeParent.appendChild(paragrapheProduitPanier);
    paragrapheProduitPanier.textContent = text;

    if (paragrapheProduitPanier.closest("div").className=="cart__item__content__settings__delete"){
        paragrapheProduitPanier.classList.add("deleteItem");
        paragrapheProduitPanier.onclick = function(){
            enleverProduitPanier(index, this);
            
        }
    }
}
//fonction qui enlève un produit du tableau panier, et stocke le résultat dans le localStorage + supprime les éléments DOM associés + recalcule le panier
function enleverProduitPanier(index, element){
    if (panier.length ==1){
        panier = [];
    }
    else {
        panier.splice(index, 1)
    }
    localStorage.cart = JSON.stringify(panier);
    element.closest("article").remove();
    getBasket();
    additionPrixProduitsPanier()
}
//fonction qui crée un input avec les bonnes classes, attributs, appel de la fonction qui va ajouter les produits ajoutés ou enlevés au panier quand on les change
function inputQteProduitPanier(product){
    inputQuantity = document.createElement("input");
    nodeParent.appendChild(inputQuantity);
    inputQuantity.setAttribute("type","number");
    inputQuantity.className= "itemQuantity";
    inputQuantity.setAttribute("name","itemQuantity");
    inputQuantity.setAttribute("min","1");
    inputQuantity.setAttribute("max","100");
    inputQuantity.value = product.numberof;
    additionPrixProduitsPanier();

    inputQuantity.onchange = function(){
        miseAJourQtePanier(product, this);
        additionPrixProduitsPanier();
    }
    
}
//fonction qui récupère les valeurs prix et quantités pour chaque produit dans le localStorage et assignation du résultat aux éléments DOM
function additionPrixProduitsPanier(){
    prixTotal = 0;
    qteTotale = 0;
    
    for (let i in panier){
        prixTotal += panier[i].price * panier[i].numberof;
        qteTotale += panier[i].numberof;
    }
    console.log(qteTotale);
    console.log(prixTotal);

    document.getElementById("totalQuantity").innerText = qteTotale;
    document.getElementById("totalPrice").innerText = prixTotal;

    console.log(panier);
}
//fonction mise à jour du panier selon la valeur de l'input, va modifier la donnée numberof du produit dans le localStorage
function miseAJourQtePanier(anyProduct, input){
    anyProduct.numberof = parseInt(input.value);
    localStorage.cart = JSON.stringify(panier);
}
//pour chaque produit du panier, afficher :
function voirPanier(i) {
    //DOM <article>
    articleProduitPanier(panier[i]);
    //DOM <img>
    divProduitPanier("__img");
    //pour chaque produit du panier, assigner l'image correspondante depuis l'API
    imgProduitPanier(panier[i]);
    //déclarer l'élément article comme parent 
    nodeParent = articlePanier;
    //DOM <div class ="cart__item__content">
    divProduitPanier("__content");
    //DOM <div class ="cart__item__description">
    divProduitPanier("__description");
    //pour chaque produit du panier, assigner le titre/nom correspondant depuis l'API
    titreProduitPanier(panier[i]);
    //DOM <p class = "color">
    descriptionProduitPanier(i, panier[i].color);
    //DOM <p class = "price"> + formattage du prix en euros
    descriptionProduitPanier(i, new Intl.NumberFormat('fr-FR', {
        style: 'currency',
        currency: 'EUR'
        }) 
        .format (panier[i].price));
    //déclare <div class ="cart__item__content"> de chaque produit comme parent
    nodeParent = document.getElementsByClassName("cart__item__content")[i];
    //DOM <div class ="cart__item__content__settings">
    divProduitPanier("__settings");
    //DOM <div class ="cart__item__content__quantity">
    divProduitPanier("__quantity");
    //DOM <p> quantité
    descriptionProduitPanier(i, "Qté: ");
    //DOM <input> quantité
    inputQteProduitPanier(panier[i]);
    //déclare <div class ="cart__item__content__settings"> de chaque produit comme parent
    nodeParent = document.getElementsByClassName("cart__item__content__settings")[i];
    //DOM <div class = "cart__item__content__settings__delete">
    divProduitPanier("__delete");
    descriptionProduitPanier(i, "Supprimer", "delete");
    
    
}

var errorMessage = document.createElement("p");
if (panier == 0){
    errorMessage.textContent = "Votre panier est vide !";
    errorMessage.style.fontSize ="32px";
    errorMessage.style.textAlign ="center";
}
//établissement des éléments du formulaires avec des booléens qui les établissent comme non valides par défaut
var results = {
    firstName : false,
    lastName : false,
    address : false,
    city : false, 
    email : false,
}
//fonction de vérification du formulaire avec regex qui énonce les conditions de validité et un event qui va intervenir à chaque changement de l'élément
function verificationForm(element){
    var regex
    element.onchange = function () {
        switch(element){
            case firstName :
            case lastName :
                regex = /[A-ZÀ-Ÿa-z- ']$/
                break
            case address :
            case city :
                regex = /[0-9A-ZÀ-Ÿa-z-, ']$/
                break
            case email :
                regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                break
        }
    //test des éléments par les standards juste énoncés dans le regex
    results[element.name] = regex.test(element.value)
        if (!results[element.name]){
            document.getElementById(element.id + "ErrorMsg").innerText = "Format invalide";
        }
        else {
            document.getElementById(element.id + "ErrorMsg").innerText = "";
        }
    }
}
//appel de la fonction de vérification du form avec chaque élément de results
verificationForm(firstName);
verificationForm(lastName);
verificationForm(address);
verificationForm(city);
verificationForm(email);
//tableau qui va regrouper les ID des produits présents dans le panier
var idListePanier = [];
//fonction qui va push les ID des produits du panier dans le tableau qu'on vient de créer
function creerIdListePanier(){
    for (let i in panier){
        idListePanier.push(panier[i].id);
        console.log(idListePanier);
    }
}

//fonction pour créer les infos nécessaires pour envoyer la commande : formulaire rempli + ID des produits 
let infosCommandePanier 
function creerInfosCommandePanier () {
    infosCommandePanier ={ 
        contact:  {
        firstName : firstName.value,
        lastName : lastName.value,
        address : address.value,
        city : city.value,
        email : email.value,
    },
    products: idListePanier
    }
}

console.log(infosCommandePanier);

//ajout d'un évènement submit au formulaire + empêcher le submit auto 
//+ appel de la fonction de génération des id depuis les produits du panier
//+ appel de la fonction de génération d'un objet qui regroupe les infos du formulaire et les ID générés par la fonction précédente
document.querySelector(".cart__order__form").addEventListener("submit", function (event){
    event.preventDefault();
    creerIdListePanier();
    creerInfosCommandePanier();
    console.log(infosCommandePanier);
    //si il y a des id dans le tableau, que les résultats des tests regex sont ok
    if (idListePanier != 0 && Object.values(results).every(value => value == true)){
        //requête de l'API méthode POST, déclaration headers
        fetch("http://localhost:3000/api/products/order", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(infosCommandePanier),
        })
        //fichier json API
            .then(function (response) {
                if (response.ok) {
                    return response.json()
                }
            })
        //requête du contenu de l'API + nettoyage du localStorage + création de l'URL de confirmation de commande avec le numero de commande
        .then(function (data) {
                console.log(data.orderId)
                localStorage.clear()
                document.location.href = "confirmation.html?orderId=" + data.orderId
            })
            //message d'erreur fetch
            .catch(function (err) {
                console.log(err.message)
            })
        }
    //message d'erreur formulaire
     else if (!Object.values(results).every(value => value == true)) {
        alert("Le formulaire n'est pas complet ou bien n'est pas rempli correctement.")
     }
})
        



