var commandeIdConfirmation = new URLSearchParams(document.location.search).get("commandeIdConfirmation");

document.getElementById("orderId").innerText = commandeIdConfirmation;