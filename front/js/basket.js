// création du panier dans le localStorage

function saveBasket(basket){
    localStorage.setItem("basket", JSON.stringify(basket));
}
// prend les informations du panier dans le localStorage
function getBasket(){
    let basket = localStorage.getItem("basket");
    if (basket == null){
    
       return [];
    
    }
    else if (document.readyState =="complete" && (panier == undefined || panier.length == 0)){
        alert("Votre panier est vide :( Rendez-vous sur la page d'accueil pour admirer notre catalogue :)")
    }
        else {
        return JSON.parse(basket)
    }
}

// ajoute un produit au panier
//prend le panier existant et cherche si il y a des produits existants avec l'id et la couleur du produit qu'on essaie d'ajouter
//si oui on va modifier le nombre du produit existant en ajoutant le nombre de produits qu'on essaie d'ajouter
// si non on ajoute le produit entier
//sauvegarde du panier
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

//fonction qui calcule le montant total du panier
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




