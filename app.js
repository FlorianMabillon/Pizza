let nbrPizza;
let typePizza;
let prixPizza;
let remise;
let totalPrix;

typePizza = 'Fromage';
nbrPizza = 6;

if (typePizza === 'Reine'){
    prixPizza = 10;
} else if (typePizza === 'Calzone'){
    prixPizza = 9;
} else if (typePizza === 'Fromage'){
    prixPizza = 8;
} else{
    prixPizza = 0 ;
}

if (nbrPizza <= 5){
    remise = 0;
} else if(nbrPizza > 5 && nbrPizza <= 10){
    remise = 2;
} else if (nbrPizza > 10){
    remise = 10;
}
totalPrix = prixPizza * nbrPizza - remise

document.getElementById('commande__p__nbrPizza').textContent = `Vous avez commandé ${nbrPizza} pizzas`;
document.getElementById('commande__p__typePizza').textContent = `Type de pizza commandée: ${typePizza}`;
document.getElementById('commande__p__prixPizza').textContent = `Valeur unitaire: ${prixPizza}`;
document.getElementById('commande__p__remise').textContent = `Remise: ${remise}`;
document.getElementById('commande__p__totalPrix').textContent = `Total à payer: ${totalPrix}`;