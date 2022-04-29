

var panier = getBasket();
console.log(panier);

for (let i in panier) {
 
console.log(panier[i].id);
    fetch('http://localhost:3000/api/products/' + panier[i].id)
        .then(function(res){
             if (res.ok){
                return res.json();
                 }
        
        })
        .then(function(data) {
            panier[i].name = data.name;
            panier[i].price = data.price;
            panier[i].imageUrl = data.imageUrl;
            panier[i].altTxt = data.altTxt;
            voirPanier(i);
         
        })
    }
var basketContent = getBasket();
 var sectionItemsBasketRecap = document.getElementById("cart__items")

function articleProduitPanier(product){
    articlePanier =  document.createElement("article");
    cart__items.appendChild(articlePanier);
    articlePanier.setAttribute("data-id",product.id);
    articlePanier.setAttribute("data-color",product.color);
    articlePanier.classList.add("cart__item")
    nodeParent = articlePanier;
 }

 function divProduitPanier(endOfClass){
    newDiv = document.createElement("div")
    nodeParent.appendChild(newDiv)
    newDiv.classList.add(nodeParent.className + endOfClass)
    nodeParent = newDiv
 }

function imgProduitPanier(product) {   
    imgProduit = document.createElement("img");
    nodeParent.appendChild(imgProduit)
    imgProduit.setAttribute("src",product.imageUrl);
    imgProduit.setAttribute("alt",product.altTxt);
}

function titreProduitPanier(product){
    titreProduit = document.createElement("h2");
    nodeParent.appendChild(titreProduit);
    titreProduit.textContent = product.name;
}

function descriptionProduitPanier(index, text){
    paragrapheProduitPanier = document.createElement("p");
    nodeParent.appendChild(paragrapheProduitPanier);
    paragrapheProduitPanier.textContent = text;
}

function inputQteProduitPanier(product){
    inputQuantity = document.createElement("input");
    nodeParent.appendChild(inputQuantity);
    inputQuantity.setAttribute("type","number");
    inputQuantity.className= "itemQuantity";
    inputQuantity.setAttribute("name","itemQuantity");
    inputQuantity.setAttribute("min","1");
    inputQuantity.setAttribute("max","100");
    inputQuantity.value = product.numberof;
}

function additionPrixProduitsPanier(product){
    prixTotal = 0;
    qteTotale = 0;
    
    for (let i in panier){
        prixTotal += product.price * panier[i].numberof;
        qteTotale += panier[i].numberof;
    }

    document.getElementById("totalQuantity").innerText = qteTotale;
}

function voirPanier(i) {
    articleProduitPanier(i);
    divProduitPanier("__img");
    imgProduitPanier(panier[i]);
    nodeParent = articlePanier;
    divProduitPanier("__content");
    divProduitPanier("__description");
    titreProduitPanier(panier[i]);
    descriptionProduitPanier(i, panier[i].color);
    descriptionProduitPanier(i, new Intl.NumberFormat('fr-FR', {
        style: 'currency',
        currency: 'EUR'
    }) .format (panier[i].price));
    nodeParent = document.getElementsByClassName("cart__item__content")[i];
    divProduitPanier("__settings");
    divProduitPanier("__quantity");
    descriptionProduitPanier(i, "Qté: ");
    inputQteProduitPanier(panier[i]);
 
}

 function divContenuProduitPanier(product){
    
    couleurProduit = document.createElement("p");
    divContenuDescription.appendChild(couleurProduit);
    couleurProduit.textContent = product.color;
    prixProduit = document.createElement("p");
    divContenuDescription.appendChild(prixProduit);
    prixProduit.textContent = product.price;

    divContenuSettings = document.createElement("div");
    divContenu.appendChild(divContenuSettings);
    divContenuSettings.setAttribute("class", "cart__item__content__settings");

    divContenuSettingsQuantity = document.createElement("div");
    divContenuSettings.appendChild(divContenuSettingsQuantity);
    divContenuSettingsQuantity.setAttribute("class", "cart__item__content__settings__quantity");

    textQuantity = document.createElement("p");
    divContenuSettingsQuantity.appendChild(textQuantity);
    textQuantity.textContent = "Qté : ";
    inputQuantity = document.createElement("input");
    divContenuSettingsQuantity.appendChild(inputQuantity);
    inputQuantity.setAttribute("type","number")
    inputQuantity.setAttribute("class","itemQuantity")
    inputQuantity.setAttribute("name","itemQuantity")
    inputQuantity.setAttribute("min","1")
    inputQuantity.setAttribute("max","100")
    inputQuantity.setAttribute("value", product.numberof)

    divContenuSettingsDelete = document.createElement("div");
    divContenuSettings.appendChild(divContenuSettingsDelete);
    divContenuSettingsDelete.setAttribute("class", "cart__item__content__settings__delete");
    textDelete = document.createElement("p");
    divContenuSettingsDelete.appendChild(textDelete);
    textDelete.textContent = "Supprimer";


 }
 
 function nouvelArticle(){
     articleSection = document.createElement("article")
     lienSection.appendChild(articleSection)
     }
 
 function nouvelleImg(product){
     imgSection = document.createElement("img");
     articleSection.appendChild(imgSection);
     imgSection.setAttribute("src",product.imageUrl);
     imgSection.setAttribute("alt",product.altTxt);
 
 }
 
 function nouveauTitreProduit(product){
     titreSection = document.createElement("h3");
     articleSection.appendChild(titreSection);
     titreSection.classList.add('productName');
     titreSection.textContent = product.name;
 }
 
 function nouvelleDescription(product){
     descriptionSection = document.createElement("p");
     articleSection.appendChild(descriptionSection);
     descriptionSection.classList.add('productDescription');
     descriptionSection.textContent = product.description;
 }

 /*

var panier = getBasket();
console.log(panier);

for (let i in panier) {
 
console.log(panier[i].id);
    fetch('http://localhost:3000/api/products/' + panier[i].id)
        .then(function(res){
             if (res.ok){
                return res.json();
                 }
        
        })
        .then(function(data) {
            panier[i].name = data.name;
            panier[i].price = data.price;
            panier[i].imageUrl = data.imageUrl;
            panier[i].altTxt = data.altTxt;
            articleProduitPanier(panier[i]);
         
        })
    }
var basketContent = getBasket();
 var sectionItemsBasketRecap = document.getElementById("cart__items")

function articleProduitPanier(product){
    articlePanier =  document.createElement("article");
    cart__items.appendChild(articlePanier);
    articlePanier.setAttribute("data-id",product.id);
    articlePanier.setAttribute("data-color",product.color);
    articlePanier.setAttribute("class","cart__item");
      divImg =  document.createElement("div");
    articlePanier.appendChild(divImg);
    divImg.setAttribute("class", "cart__item__img");
    imgProduit = document.createElement("img");
    divImg.appendChild(imgProduit);
    imgProduit.setAttribute("src",product.imageUrl);
    imgProduit.setAttribute("alt",product.altTxt);
 
    divContenu =  document.createElement("div");
    articlePanier.appendChild(divContenu);
    divContenu.setAttribute("class", "cart__item__content");
  
    divContenuDescription =  document.createElement("div");
    divContenu.appendChild(divContenuDescription);
    divContenuDescription.setAttribute("class", "cart__item__content__description");

    titreProduit = document.createElement("h2");
    divContenuDescription.appendChild(titreProduit);
    titreProduit.textContent = product.name;
    couleurProduit = document.createElement("p");
    divContenuDescription.appendChild(couleurProduit);
    couleurProduit.textContent = product.color;
    prixProduit = document.createElement("p");
    divContenuDescription.appendChild(prixProduit);
    prixProduit.textContent = product.price;

    divContenuSettings = document.createElement("div");
    divContenu.appendChild(divContenuSettings);
    divContenuSettings.setAttribute("class", "cart__item__content__settings");

    divContenuSettingsQuantity = document.createElement("div");
    divContenuSettings.appendChild(divContenuSettingsQuantity);
    divContenuSettingsQuantity.setAttribute("class", "cart__item__content__settings__quantity");

    textQuantity = document.createElement("p");
    divContenuSettingsQuantity.appendChild(textQuantity);
    textQuantity.textContent = "Qté : ";
    inputQuantity = document.createElement("input");
    divContenuSettingsQuantity.appendChild(inputQuantity);
    inputQuantity.setAttribute("type","number")
    inputQuantity.setAttribute("class","itemQuantity")
    inputQuantity.setAttribute("name","itemQuantity")
    inputQuantity.setAttribute("min","1")
    inputQuantity.setAttribute("max","100")
    inputQuantity.setAttribute("value", product.numberof)

    divContenuSettingsDelete = document.createElement("div");
    divContenuSettings.appendChild(divContenuSettingsDelete);
    divContenuSettingsDelete.setAttribute("class", "cart__item__content__settings__delete");
    textDelete = document.createElement("p");
    divContenuSettingsDelete.appendChild(textDelete);
    textDelete.textContent = "Supprimer";
 }

 function divImgProduitPanier(product){
    divImg =  document.createElement("div");
    articlePanier.appendChild(divImg);
    divImg.setAttribute("class", "cart__item__img");
    imgProduit = document.createElement("img");
    divImg.appendChild(imgProduit);
    imgProduit.setAttribute("src",product.imageUrl);
    imgProduit.setAttribute("alt",product.altTxt);
   
 }
 
 function divContenuProduitPanier(product){
    divContenu =  document.createElement("div");
    articlePanier.appendChild(divContenu);
    divContenu.setAttribute("class", "cart__item__content");
    divContenuDescription =  document.createElement("div");
    divContenu.appendChild(divContenuDescription);
    divContenuDescription.setAttribute("class", "cart__item__content__description");

    titreProduit = document.createElement("h2");
    divContenuDescription.appendChild(titreProduit);
    titreProduit.textContent = product.name;
    couleurProduit = document.createElement("p");
    divContenuDescription.appendChild(couleurProduit);
    couleurProduit.textContent = product.color;
    prixProduit = document.createElement("p");
    divContenuDescription.appendChild(prixProduit);
    prixProduit.textContent = product.price;

    divContenuSettings = document.createElement("div");
    divContenu.appendChild(divContenuSettings);
    divContenuSettings.setAttribute("class", "cart__item__content__settings");

    divContenuSettingsQuantity = document.createElement("div");
    divContenuSettings.appendChild(divContenuSettingsQuantity);
    divContenuSettingsQuantity.setAttribute("class", "cart__item__content__settings__quantity");

    textQuantity = document.createElement("p");
    divContenuSettingsQuantity.appendChild(textQuantity);
    textQuantity.textContent = "Qté : ";
    inputQuantity = document.createElement("input");
    divContenuSettingsQuantity.appendChild(inputQuantity);
    inputQuantity.setAttribute("type","number")
    inputQuantity.setAttribute("class","itemQuantity")
    inputQuantity.setAttribute("name","itemQuantity")
    inputQuantity.setAttribute("min","1")
    inputQuantity.setAttribute("max","100")
    inputQuantity.setAttribute("value", product.price)

    divContenuSettingsDelete = document.createElement("div");
    divContenuSettings.appendChild(divContenuSettingsDelete);
    divContenuSettingsDelete.setAttribute("class", "cart__item__content__settings__delete");
    textDelete = document.createElement("p");
    divContenuSettingsDelete.appendChild(textDelete);
    textDelete.textContent = "Supprimer";


 }
 
 function nouvelArticle(){
     articleSection = document.createElement("article")
     lienSection.appendChild(articleSection)
     }
 
 function nouvelleImg(product){
     imgSection = document.createElement("img");
     articleSection.appendChild(imgSection);
     imgSection.setAttribute("src",product.imageUrl);
     imgSection.setAttribute("alt",product.altTxt);
 
 }
 
 function nouveauTitreProduit(product){
     titreSection = document.createElement("h3");
     articleSection.appendChild(titreSection);
     titreSection.classList.add('productName');
     titreSection.textContent = product.name;
 }
 
 function nouvelleDescription(product){
     descriptionSection = document.createElement("p");
     articleSection.appendChild(descriptionSection);
     descriptionSection.classList.add('productDescription');
     descriptionSection.textContent = product.description;
 }

*/

