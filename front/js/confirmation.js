//isolation de l'élément orderId dans l'url de la page confirmation.js
var orderId = new URLSearchParams(document.location.search).get("orderId")

//DOM numéro de commande
document.getElementById("orderId").innerText = orderId