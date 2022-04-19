//fetch and DOM insertions

fetch('http://localhost:3000/api/products')
.then(function(res){
    if (res.ok){
        return res.json();
    }
})
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

//setting up the id recuperation in page url
var urlId = new URLSearchParams(document.location.search).get("id")
console.log(urlId);

//getting image div, insertion of img in DOM with src and alt attributes from selectedItem
var divProduit = document.querySelector("article > .item__img");

function imageProduit(product){
    imgProduct = document.createElement("img");
    divProduit.appendChild(imgProduct);
    imgProduct.setAttribute("src", product.imageUrl);
    imgProduct.setAttribute("alt", product.altTxt);

}

//getting title tag, insertion of selectedItem .name in tag
var titrePage = document.querySelector("title");

function titrePageProduit(product){
  urlId.indexOf(product._id);
  if (urlId == product._id){
 titrePage.textContent = product.name;
  console.log(product._id, urlId)}
  else{
    titrePage.textContent = "Non";
  } 

}
//getting the product h1 title tag, inserting of selectedItem .name in tag
var produitH1 = document.querySelector("#title");

function titreProduit(product){
    produitH1.textContent = product.name;
}

//getting the product price span tag, inserting the selectedItem .price in tag
var produitPrixSpan = document.querySelector("#price");

function prixProduit(product){
    produitPrixSpan.textContent =product.price;
}

//getting the product description p tag, inserting the selectedItem .description in tag
var produitDescriptionP = document.querySelector("#description");

function descriptionProduit(product){
    produitDescriptionP.textContent = product.description;
}

//getting the color select tag, inserting option tags in the DOM, for of loop to repeat according to color array in SelectedItem
var couleursSelectTag = document.querySelector("#colors");

function couleursProduit(product){
    for (let color of product.colors){
    console.log(color)
    colorProduct = document.createElement("option")
    couleursSelectTag.appendChild(colorProduct);
    colorProduct.setAttribute("value", color)
    colorProduct.textContent = color;
    }
}

//Putting products in the basket