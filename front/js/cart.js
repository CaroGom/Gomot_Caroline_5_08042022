

var panier = console.log(getBasket());
console.log(panier);
for (let i in panier) {
 

    fetch('http://localhost:3000/api/products' + panier[i]._id)
        .then(function(res){
             if (res.ok){
                return res.json();
                 }
        
        })
        .then(function(data) {
            basket[i].name = data.name;
            basket[i].price = data.price;
            basket[i].imageUrl = data.imageUrl;
            basket[i].altTxt = data.altTxt;
   
         
        })
    }
var basketContent = getBasket();
 var sectionItemsBasketRecap = document.getElementById("cart__items")

function articleProduitPanier(product){
    articlePanier =  document.createElement("article");
    cart__items.appendChild(articlePanier);
    articlePanier.setAttribute("data-id",product._id);
    articlePanier.setAttribute("data-color",product.color);
    articlePanier.setAttribute("class","cart__item");
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

