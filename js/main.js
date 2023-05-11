// Visualizzare in pagina 5 numeri casuali.
// Da lì parte un timer di 30 secondi.
// Dopo 30 secondi i numeri scompaiono e l’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.


// VARIABILI GLOBALI
const buttonPlay = document.getElementById("button-play");
const container = document.getElementById("container");
let clock;

// aggiungo azione al click
buttonPlay.addEventListener("click",

function numeriCasuali (){ 
    
    // liberare container
    container.innerHTML = ""

    // creare array numeri casuali
    const arrayNum = arrayRamdomNumber (1, 100, 5);
    console.log(arrayNum)

        for (i = 0; i < 5; i++){
            // const square = createElement("div", "square")
            const square = createElement ("span", "number")
            container.append(square);
            // square.append(span)
            square.innerHTML = arrayNum[i]
        } 
    }

    
    

    )
    
    setTimeout(
        function(){
            container.classList.add("hidden")
        },
        5000
    )


// ********************** FUNZIONI ************************

// FUNZIONI CREA ELEMENTO
function createElement (tag, nameClassAdd){
    const newElement = document.createElement(tag);
    newElement.classList.add(nameClassAdd);
    return newElement
}


// FUNZIONA CREA ARRAY DI NUMERI CASUALI
function arrayRamdomNumber(min, max, lunghezzaArray){
    const arrayInt = [];

    
    while (arrayInt.length < lunghezzaArray){
        // creare numero random
        const nuovoNum = numeriRandom (min, max);

        // se il numero random creato non è presente nell'array fai push
        if (!arrayInt.includes(nuovoNum)){
            arrayInt.push(nuovoNum);
        }
    }
    return arrayInt    
}

// FUNZIONE NUMERI CASUALI
function numeriRandom (numMin, numMax){
    return Math.floor(Math.random() * (numMax - numMin +1) + numMin);
}

// // FUNZIONE PER AGGIUNGERE CLASSE
// function addClass (elementToAdd, classAdd){
//     elementToAdd.classList.add(classAdd)
// }

