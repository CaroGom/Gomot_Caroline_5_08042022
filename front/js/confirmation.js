var commandeIdConfirmation = new URLSearchParams(document.location.search).get("order");

document.getElementById("orderId").innerText = commandeIdConfirmation;