// VARIABILI GLOBALI //
let numeroDaIndovinare;
let conteggioTentativi = 0;

// GENERIAMO UN NUMERO CASUALE DA 1 A 100 //
function generaNumero() {
    return Math.floor(Math.random() * 100) + 1;
}