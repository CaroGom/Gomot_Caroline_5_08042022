
var maSection = document.getElementById("items");


function nouveauLien(product){
   lienSection =  document.createElement("a");
   items.appendChild(lienSection);
   lienSection.setAttribute("href","./product.html?id="+product._id);
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

// appeler l'API

fetch('http://localhost:3000/api/products')
.then(function(res){
    if (res.ok){
        return res.json();
    }
})
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

