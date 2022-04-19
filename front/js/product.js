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
})

//setting up the id recuperation in page url
var urlId = new URLSearchParams(document.location.search).get("id")
console.log(urlId);

//getting image div, insertion of img in DOM
var divProduit = document.querySelector("article > .item__img");

function imageProduit(product){
    imgProduct = document.createElement("img");
    divProduit.appendChild(imgProduct);
    imgProduct.setAttribute("src", product.imageUrl);
    imgProduct.setAttribute("alt", product.altTxt);

}

//getting title tag, insertion of selectedItem title in tag
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

var produitH1 = document.querySelector("h1");

function titreProduit(product){
    produitH1.textContent = product.name;
}