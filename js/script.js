/* 
TRACCIA:

Visualizzare in pagina 5 numeri casuali.
Da lì parte un timer di 30 secondi.
Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati. */

//TODO FAR SPARIRE I NUMERI DENTRO I DIV E CONFRONTARLI CON QUELLI INSERITI DALL'UTENTE

let numbersDisplay = document.querySelector("#numberDisplay");

let randomNumbers = [];


let divNumberContainer = "";

let userNumbers = [];


let check = true;





randomInt(5 , randomNumbers);
console.log(randomInt(5 , randomNumbers));



for(let i =0; i < randomNumbers.length; i++) {

    divNumberContainer = document.createElement("div");
    console.log(divNumberContainer)
    divNumberContainer.classList.add("numberContainer" , "d-flex" , "justify-content-center" , "align-items-center" , "fs-1");
    divNumberContainer.style.width = `calc(100% / ${randomNumbers.length})`
    numbersDisplay.appendChild(divNumberContainer);
    divNumberContainer.innerHTML = randomNumbers[i];

}

setTimeout(clearNumbers , 30000)
setTimeout(userInput , 30000)




console.log(userNumbers)







//? SEZIONE DEDICATA ALLE FUNZIONI

/**
 * Funzione che genera numeri casuali(tanti quanti il primo parametro passato e mai uguali) e li inserisce in un array indicato con il secondo parametro
 * @param {Int} howMuch 
 * @param {Array} where 
 */
function randomInt(howMuch,where){
    while(check){
        let randomInt = Math.floor(Math.random() * (howMuch - 1) + 1);
        console.log(randomInt)
        randomNumbers.push(randomInt);

        /* if(!randomNumbers.includes(randomInt)){
            randomNumbers.push(randomInt);
        } */

        if(where.length == howMuch){
            check = false;
        }
    }
    
    
    return randomNumbers;
}

/* funzione che chiede cinque numeri all'utente con cinque prompt diversi e li inserisce in un array */
function userInput(){
    for(let i = 0; i < randomNumbers.length ; i++){
        let userIntInput = parseInt(prompt("inserisci un numero che era mostrato precedentemente: ").trim());
        userNumbers.push(userIntInput);
    }
};

/* funzione che cancella l'innerhtml per ogni item della nodeList */
function clearNumbers(){
    let divNumber = document.querySelectorAll(".numberContainer")
    console.log(divNumber)
    for(let i = 0; i < divNumber.length; i++){
        divNumber[i].innerHTML = ""
    }
    
}




