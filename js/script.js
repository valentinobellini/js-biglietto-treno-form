// Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero. Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// - il prezzo del biglietto è definito in base ai km (0.21 € al km)
// - va applicato uno sconto del 20% per i minorenni
// - va applicato uno sconto del 40% per gli over 65.
// - L’output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.




//selezioniamo gli elementi del DOM
const distanceInput = document.getElementById("distance");
const ageInput = document.getElementById("age");
const ticketForm = document.getElementById("ticketForm");
const resultsDiv = document.getElementById("results");

// gestione evento click button
ticketForm.addEventListener("submit", (event) => {
    event.preventDefault();

    // converto i valori degli input in numeri
    const distance = parseInt(distanceInput.value);
    const age = parseInt(ageInput.value);

    console.log("Distanza in km ", distance, "Età ", age);

    // definisco il prezzo del biglietto
    let price = distance * 0.21;

    console.log("Prezzo intero: €", parseInt(price.toFixed(2)));

    // verifico se l'età del cliente permette lo sconto
    let discount = 0;

    // se l'età del cliente è inferiore a 18 applica sconto 20%
    if (ageInput.value < 18) {
        discount = price * 0.20
        // se l'età del cliente è superiore a 65 applica sconto 40%
    } else if (ageInput.value > 65) {
        discount = price * 0.40
    } else { discount = 0 }

    let finalPrice = price - discount;


    console.log("Ammontare sconto: € ", discount.toFixed(2));

    console.log("Totale: € ", finalPrice.toFixed(2));


    //stampo i risultati in pagina
    resultsDiv.innerHTML = `
    <p>Prezzo intero: €${price.toFixed(2)}</p>
    <p>Sconto: €${discount.toFixed(2)}</p>
    <p>Prezzo finale: €${finalPrice.toFixed(2)}</p>
    `;
});





