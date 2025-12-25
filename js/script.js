// VARIABILI GLOBALI //
let numeroDaIndovinare;
let conteggioTentativi = 0;

// GENERIAMO UN NUMERO CASUALE DA 1 A 100 //
function generaNumero() {
    return Math.floor(Math.random() * 100) + 1;
}

// INIZIALIZZIAMO IL GIOCO ALL'AVVIO //
function inizializzaGioco() {
    numeroDaIndovinare = generaNumero();
    conteggioTentativi = 0;
    document.getElementById('messaggio').textContent = '';
    document.getElementById('tentativi').textContent = 'Tentativi: 0';
    document.getElementById('tentativo').value = '';
    document.getElementById('tentativo').disabled = false;
    console.log('Numero segreto:', numeroDaIndovinare); // Per test
}

// FUNZIONE PRINCIPALE CHE CONTROLLA I TENTATIVI //
function controllaTentativo() {
    // Prende il valore inserito dall'utente
    const input = document.getElementById('tentativo');
    const numeroUtente = parseInt(input.value);

    // Controlla che sia un numero valido
    if (isNaN(numeroUtente) || numeroUtente < 1 || numeroUtente > 100) {
        mostraMessaggio('Inserisci un numero tra 1 e 100!', '');
        return;
    }

    // Aumenta il conteggio dei tentativi
    conteggioTentativi++;
    document.getElementById('tentativi').textContent = 'Tentativi: ' + conteggioTentativi;

    // Confronta il numero con quello da indovinare
    if (numeroUtente === numeroDaIndovinare) {
        mostraMessaggio('🎉 Corretto! Hai indovinato in ' + conteggioTentativi + ' tentativi!', 'corretto');
        input.disabled = true;
    } else if (numeroUtente > numeroDaIndovinare) {
        mostraMessaggio('📉 Troppo alto! Prova con un numero più piccolo.', 'troppo-alto');
    } else {
        mostraMessaggio('📈 Troppo basso! Prova con un numero più grande.', 'troppo-basso');
    }

    // Pulisce l'input per il prossimo tentativo
    input.value = '';
    input.focus();
}

// Funzione per mostrare i messaggi
function mostraMessaggio(testo, classe) {
    const elementoMessaggio = document.getElementById('messaggio');
    elementoMessaggio.textContent = testo;
    elementoMessaggio.className = classe;
}

// Funzione per iniziare una nuova partita
function nuovaPartita() {
    inizializzaGioco();
}

// Permette di premere Invio per inviare il tentativo
document.getElementById('tentativo').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        controllaTentativo();
    }
});

// Avvia il gioco quando la pagina si carica
inizializzaGioco();