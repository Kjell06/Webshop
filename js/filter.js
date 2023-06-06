let allcategoriecard = document.getElementsByClassName("categoriecard");
let filters = document.getElementsByClassName("filter");
let cards = document.getElementsByClassName("card");

for(let i = 0; i < filters.length; i++){
    filters[i].checked = true;
}


filters[0].onchange = function(){
let filter = document.getElementById("checkbox-Nike");
filter.onchange = function () {
    if(filter.checked === true){
        for (let i = 0; i < cards.length; i++) {
            if (cards[i].dataset.category === "Nike") {
                cards[i].style.display = "block";
            }
        }
    }

    else{
        for (let i = 0; i <cards.length; i++) {
            if (cards[i].dataset.category === "Nike") {
                cards[i].style.display = "none";
            }
        }
    }
}
}

filters[1].onchange = function(){
let filter = document.getElementById("checkbox-Adidas");
filter.onchange = function () {
    if (filter.checked === true) {
        for (let i = 0; i < cards.length; i++) {
            if (cards[i].dataset.category === "Adidas") {
                cards[i].style.display = "block";
            }
        }
    }
    else {
        for (let i = 0; i <cards.length; i++) {
            if (cards[i].dataset.category === "Adidas") {
                cards[i].style.display = "none";
            }
        }
    }
}
}


filters[2].onchange = function(){
let filter = document.getElementById("checkbox-PMELegend");
filter.onchange = function () {
    if (filter.checked === true) {
        for (let i = 0; i <cards.length; i++) {
            if (cards[i].dataset.category === "PME-Legend") {
                cards[i].style.display = "block";
            }
        }
    }
    else {
        for (let i = 0; i <cards.length; i++) {
            if (cards[i].dataset.category === "PME-Legend") {
                cards[i].style.display = "none";
            }
        }
    }
}
}



