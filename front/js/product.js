/*fetch('http://localhost:3000/api/products')
.then(function(res){
    if (res.ok){
        return res.json();
    }
})
.then(function(data) {
    for (let i in data){
    imageProduit(data[i])
    nouveauTitre(data[i])
    }
})
var divProduit = document.querySelector("article > .item__img");
function imageProduit(product){
  imgProduct = document.createElement("img");
  divProduit.appendChild(imgProduct);
  imgProduct.setAttribute("src",product.imgUrl);
}

var pageUrl = window.location.href;
console.log(pageUrl);
var titrePage = document.querySelector("title");

function nouveauTitre(product){
  if (pageUrl.indexOf("id="+product._id)){
    titrePage.textContent = product.name;}
  else{
    titrePage.textContent = Non;
  } 
}


var str = "./product.html?id=107fb5b75607497b96722bda5b504926";

var url = new URL(str);

var urlId = url.searchParams.get("id");

console.log(urlId);
*/