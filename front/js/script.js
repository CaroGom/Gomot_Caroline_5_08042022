//saisie de l'élément <section id="items">
var maSection = document.getElementById("items");

//fonction de création de balise <a> enfant de <section>
function nouveauLien(product){
   lienSection =  document.createElement("a");
   items.appendChild(lienSection);
   lienSection.setAttribute("href","./product.html?id="+product._id+"");
}
//fonction de création de balise <article> enfant de <a>
function nouvelArticle(){
    articleSection = document.createElement("article")
    lienSection.appendChild(articleSection)
    }
//fonction de création de balise <img> enfant de <section>, attributs correspondant dans l'API pour src et alt
function nouvelleImg(product){
    imgSection = document.createElement("img");
    articleSection.appendChild(imgSection);
    imgSection.setAttribute("src",product.imageUrl);
    imgSection.setAttribute("alt",product.altTxt);

}
//fonction de création de balise <h3> enfant de <article> avec nom de classe et contenu
function nouveauTitreProduit(product){
    titreSection = document.createElement("h3");
    articleSection.appendChild(titreSection);
    titreSection.classList.add('productName');
    titreSection.textContent = product.name;
}
//fonction de création de balise <p> enfant de <article> avec nom de classe et contenu
function nouvelleDescription(product){
    descriptionSection = document.createElement("p");
    articleSection.appendChild(descriptionSection);
    descriptionSection.classList.add('productDescription');
    descriptionSection.textContent = product.description;
}

// appeler l'API

fetch('http://localhost:3000/api/products')
.then(function(res){
    if (res.ok){
        return res.json();
    }
})
//boucle pour chaque produit/tableau de l'API, effectuer les fonctions listées
.then(function(data) {
    for (let i in data) {
        nouveauLien(data[i])
        nouvelArticle(data[i])
        nouvelleImg(data[i])
        nouveauTitreProduit(data[i])
        nouvelleDescription(data[i])
        
    }
})




.catch(function(err){
    //Une erreur est survenue
});

