// Voglio calcolare quanti anni ho

/*
    richiedo anno di nascita
    devo conoscere l'anno corrente (2023)
    calcolo la differenza tra anno corrente ed anno di nascita
    e mostro l'eta calcolata
*/

let annoDiNascita = prompt('Inserisci il tuo anno di nascita');
const annoDiNascitaNumero = parseInt(annoDiNascita);

const annoCorrente = 2023;
const eta = annoCorrente - annoDiNascitaNumero;

document.getElementById('eta').innerHTML = `La tua età è di: ${eta} anni`;