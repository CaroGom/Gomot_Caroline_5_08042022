




function saveBasket(basket){
    localStorage.setItem("basket", JSON.stringify(basket));
}

function getBasket(){
    let basket = localStorage.getItem("basket");
    if (basket == null){
       return [];
    
    }
    else {
        return JSON.parse(basket)
    }
}


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

/*
function addBasket(product){
    let basket = getBasket();
    let foundProduct = basket.find (p => p.id == product.id, p.colors == product.colors)
        if (foundProduct != undefined){
            foundProduct.numberof++;
        }
        else {
            product.numberof = 1;
            basket.push(product);
        }
    
    saveBasket(basket);
}

*/

function removeFromBasket(product){
    let basket = getBasket();
    basket = basket.filter(p => p.id != product.id);
    saveBasket(basket);
}

function changeQuantity(product, numberof){
    let basket = getBasket();
    let foundProduct = basket.find (p => p.id == product.id)
        if (foundProduct != undefined){
            foundProduct.numberof += numberof;
            if(foundProduct.numberof <= 0){
                removeFromBasket(foundProduct);
            }
            else{
                saveBasket(basket);
            }
        } 
}

function getNumberProduct(){
    let basket = getBasket();
    let number = 0;
    for (let product of basket){
        number += product.numberof;
    }
    return number;
}

function getTotalPrice(){
    let basket = getBasket();
    let total = 0;
    for (let product of basket){
        total += product.numberof * product.price;
    }
    return total;

}