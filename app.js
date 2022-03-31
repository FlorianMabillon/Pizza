let nbrPizza;
let slcPizza;
let typePizza = document.getElementById('slcPizza');
let prixPizza;
let remise;
let totalPrix;



typePizza.addEventListener('change', pizzaSelect);

function pizzaSelect(){
    slcPizza = typePizza.value;
    console.log(slcPizza);
}

switch(typePizza){
    case 'Reine':
        prixPizza = 10;
        break;
    case 'Calzone':
        prixPizza = 9;
        break
    case 'Fromage':
        prixPizza = 8;
        break
    default : 
        prixPizza = 0;
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