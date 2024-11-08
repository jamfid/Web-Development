var numeroCitazioneCorrente;
var nCitazione;
var nAutore;
var numeroRegolaCorrente;
var nTitoloRegola;
var nRegola;
var nIndietroRegola;
var nAvantiRegola;
var nPedone;
var nTorre;
var nCavallo;
var nAlfiere;
var nDonna;
var nRe;
var nNomePezzo;
var nDescrizionePezzo;
var numeroDomandaCorrente;
var nDomanda;
var nVero;
var nFalso;
var nPulsantiTest;
var nCominciaIlTest;
var vero;
var falso;
var punteggio;
var citazioni = [

  {
    citazione: "Gli scacchi, come l'amore e la musica, hanno il potere di rendere \
    gli uomini felici.",
    autore: "Siegbert Tarrasch"
  },
  {
    citazione: "Anche la partita a scacchi non finisce con una vincita o con una \
    perdita. Finisce quando i pezzi bianchi e quelli neri vengono tolti dalla scacchiera \
    e rimessi nella scatola. Rimane allora qualcosa di diverso dalla vittoria o \
    dalla sconfitta – rimane il ricordo di una trama che è stata tessuta, di una \
    melodia che è stata suonata.",
    autore: "Ernst Jünger"
  },
  {
    citazione: "Gli scacchi richiedono una strategia trasparente: io so quello che \
    hai tu e tu sai quello che ho io; non so quello che stai pensando, ma almeno \
    so quali sono le tue risorse.",
    autore: "Garri Kimoviç Kasparov"
  },
  {
    citazione: "Gli scacchi somigliano alla pallacanestro: i giocatori si passano \
    la palla finché non trovano un varco, proprio come in un attacco che porta al matto.",
    autore: "Bobby Fisher"
  },
  {
    citazione: "Non sono mai riuscito a capire gli scacchi. C'è troppa scienza per \
    essere un gioco, e c'è troppo gioco per essere scienza.",
    autore: "Emanuel Lasker"
  }
]
var regole = [
  {
    titolo: "Da dove iniziare?",
    regola: "Il gioco degli scacchi è noto per essere complesso ed impegnativo: \
    basti pensare che esistono più mosse possibili in una sola partita che atomi nell'intero \
    universo! Ma non farti intimorire: per cominiciare basta tenere a mente poche \
    regole di base. Vai avanti appena sei pronto per scoprirle."
  },
  {
    titolo: "1. La scacchiera",
    regola: "Gli scacchi si giocano su una tavola, detta \"scacchiera\", formata \
    da 64 quadratini, detti \"case\", alternativamente di colore chiaro e scuro. \
    Ogni riga verticale (\"colonna\") è indicata con una lettera dell'alfabeto dalla \
    \"a\" alla \"h\", mentre ogni riga orizzontale (\"traversa\") da un numero da \
    1 a 8. Ogni casa ha quindi un nome univoco, dato dall'unione della traversa \
    e della colonna a cui appartiene (ad es. \"e4\")."
  },
  {
    titolo: "2. I pezzi",
    regola: "Ciascuno dei due giocatori ha a disposizione un \"esercito\", fatto \
    di \"pezzi\" diversi per forma e funzione. Ogni schieramento ha un colore \
    distintivo: poiché solitamente uno è più chiaro e l'altro è più scuro, ci si \
    riferisce ai giocatori con i nomi \"bianco\" e \"nero\". All'inizio del gioco \
    ciascun pezzo occupa sempre una casa predefinita."
  },
  {
    titolo: "3. I turni, il movimento, la cattura",
    regola: "I pezzi possono muoversi su una casa della scacchiera seguendo regole \
    diverse a seconda del tipo a cui appartengono. Ad eccezione del Cavallo, ogni \
    pezzo non può, per raggiungere una casa, attraversare case già occupate da altri \
    pezzi. Tuttavia, quando la casa di arrivo è occupata da un pezzo avversario, \
    è possibile \"catturarlo\" sostituendosi ad esso. Ad ogni turno, un giocatore \
    può muovere solo un pezzo – fa eccezione una mossa speciale chiamata \"arrocco\". \
    Il turno del giocatore termina quando ha effettuato la sua mossa. Per convenzione, \
    il primo a muovere è il bianco."
  },
  {
    titolo: "4. Lo scacco",
    regola: "Un solo pezzo non può mai esser catturato direttamente: il re. Quando \
    il re è \"minacciato\" – ovvero un pezzo avversario è mosso su una casa che \
    gli consentirebbe di catturarlo alla mossa successiva – si trova \"sotto scacco\" \
    ed il difensore è obbligato, nel turno immediatamente successivo, a \"rimuovere\" \
    lo scacco, ovvero a fare in modo che il re non possa essere catturato. Ci sono \
    due modi per rimuovere uno scacco: muovere il re su una casa non minacciata \
    oppure interporre un pezzo a sua difesa. Se il difensore non ha modo di rimuovere \
    lo scacco, lo scacco è \"matto\": il re non ha più via di scampo e la partita \
    è terminata."
  },
  {
    titolo: "5. L'obiettivo",
    regola: "Ricorda: lo scopo del gioco non è catturare il maggior numero di pezzi \
    avversari, ma fare scacco matto!"
  }
]
var pezzi = {

  Donna: "La donna è il pezzo più potente del gioco: può muoversi su qualunque casa della \
  stessa traversa, della stessa colonna o della stessa diagonale in cui si trova, \
  ovvero combina i movimenti dell'alfiere e della torre. Non lasciartela catturare \
  facilmente!",

  Torre: "La torre può muoversi su qualunque casa della stessa traversa o della stessa \
  colonna in cui si trova. La torre è anche coinvolta in una mossa speciale chiamata \"arrocco\". \
  L'arrocco consiste nel contemporaneo spostamento di re ed una delle due torri \
  lungo la traversa che condividono nella loro posizione iniziale. Il re si muove \
  di due case a destra oppure di due case a sinistra. La torre (quella verso cui \
  il re si è mosso) si muove invece nella casa immediatamente a sinistra del re (se il re \
  si è mosso a destra) o nella casa immediatamente alla sua destra (se il re si è mosso a sinistra). \
  L'arrocco può essere effettuato solo una volta e a patto che: 1) re e torre \
  coinvolta non siano mai stati mossi nel corso della partita; 2) non ci siano \
  altri pezzi tra re e torre; 3) il re non si trovi sotto scacco né sulla casa \
  di arrivo né in ciascuna di quelle che attraversa. Ricorda: l'arrocco è una delle \
  migliori armi che puoi usare per difendere il tuo re!",

 Cavallo: "Il cavallo si muove sulle case più vicine che non appartengano né alla sua colonna \
  né alla sua traversa né alla sua diagonale. Il suo movimento ha una ben riconoscibile \
  forma a \"L\": uno spostamento orizzontale di due case ed uno verticale di una \
  casa, o viceversa. Il cavallo è anche l'unico pezzo in grado di \"saltare\", ovvero di \
  muoversi su una casa anche se per raggiungerla deve attraversare case già occupate da altri pezzi.",

  Alfiere: "L'alfiere si muove su qualunque casa della stessa diagonale in cui si trova. \
  L'alfiere è l'unico pezzo a non cambiare mai colore della casa: per questo si \
  distinguono un alfiere \"campochiaro\" ed un alfiere \"camposcuro\".",

 Pedone: "Il pedone è il pezzo meno potente del gioco, ma è anche quello dal movimento \
  più complesso: 1) Alla sua prima mossa, può muoversi di una o di due case in avanti \
  (a scelta del giocatore) sulla stessa colonna in cui si trova. Nelle mosse successive \
  può muoversi solo di una casa in avanti; 2) Il pedone è l\'unico pezzo a catturare \
  diversamente da come si muove: cattura solo pezzi avversari che si trovino nelle \
  case poste diagonalmente in avanti rispetto alla casa in cui si trova; 3) Quando \
  un pedone si muove di due case in avanti e viene a trovarsi in adiacenza ad un \
  pedone avversario, quest\'ultimo può (solo nel turno immediatamente successivo) \
  catturarlo come se fosse avanzato di una sola casa. Questa mossa è nota col nome \
  di \"presa en passant\"; 4) Quando il pedone raggiunge l\'ultima traversa (quella \
  in direzione opposta alla posizione di partenza) è \"promosso\", ovvero assume le \
  capacità di un qualsiasi altro pezzo (donna, cavallo, torre alfiere) a scelta del giocatore.",

  Re: "Il re è il pezzo più importante della partita: il tuo scopo è difenderlo dai \
  tentativi di scacco del tuo avversario. Ma attenzione: anche il re può muoversi (di una \
  sola casa in qualunque direzione) e catturare come ogni altro pezzo! Quel che il re \
  non può mai fare è dare scacco: non può mai essere mosso, infatti, su una casa \
  adiacente a quella in cui si trova il re avversario."
}
var domande;
var archivioDomande = [

  {
    domanda: "Un pedone può essere \"promosso\" solo se raggiunge l'ultima traversa davanti a sé.",
    valore: true
  },
  {
    domanda: "Il re può essere catturato come ogni altro pezzo.",
    valore: false
  },
  {
    domanda: "L'alfiere campochiaro può catturare l'alfiere camposcuro avversario.",
    valore: false
  },
  {
    domanda: "L'arrocco non si può effettuare se il re è stato mosso dalla sua posizione iniziale.",
    valore: true
  },
  {
    domanda: "La donna può mangiare più di un pezzo alla volta.",
    valore: false
  },
  {
    domanda: "Qualsiasi pezzo può muoversi su una casa anche attraversando case già occupate.",
    valore: false
  },
  {
    domanda: "Il cavallo può \"saltare\".",
    valore: true
  },
  {
    domanda: "La presa \"en passant\" è valida in qualsiasi momento della partita.",
    valore: false
  },
  {
    domanda: "Il pedone cattura diversamente da come si muove.",
    valore: true
  },
  {
    domanda: "Se il re è sotto scacco, il difensore è obbligato a rimuovere lo scacco.",
    valore: true
  },
  {
    domanda: "Vince il giocatore che cattura più pezzi.",
    valore: false
  },
  {
    domanda: "Le traverse della scacchiera sono indicate da numeri da 1 a 8.",
    valore: true
  },
  {
    domanda: "Il movimento della donna è la somma dei movimenti di tutti gli altri pezzi.",
    valore: false
  },
  {
    domanda: "Al suo primo spostamento, il pedone deve muoversi di due case in avanti.",
    valore: false
  },
  {
    domanda: "L'arrocco è una mossa difensiva.",
    valore: true
  },
  {
    domanda: "Ad eccezione dell'arrocco, ogni giocatore può muovere un solo pezzo per turno.",
    valore: true
  },
  {
    domanda: "Lo scacco può essere rimosso solo muovendo il re su una casa non minacciata.",
    valore: false
  },
  {
    domanda: "Lo scacco va dichiarato ad alta voce.",
    valore: false
  },
  {
    domanda: "La torre è più potente del pedone.",
    valore: true
  },
  {
    domanda: "Il pezzo da cui dipende la partita è la donna.",
    valore: false
  },
  {
    domanda: "Per convenzione, comincia a muovere il nero.",
    valore: false
  },
  {
    domanda: "Lo scacco matto si verifica quando non c'è più modo di evitare che \
    il re venga catturato al turno successivo.",
    valore: true
  },
  {
    domanda: "Il re non può catturare altri pezzi.",
    valore: false
  },
  {
    domanda: "All'inizio del gioco, ogni pezzo occupa sempre la stessa casa.",
    valore: true
  },
  {
    domanda: "L'alfiere non può muoversi in diagonale.",
    valore: false
  },
  {
    domanda: "Lo scacco si verifica quando il re è minacciato.",
    valore: true
  },
  {
    domanda: "La partita termina quando la donna viene catturata.",
    valore: false
  },
  {
    domanda: "Il pedone non può dare scacco al re.",
    valore: false
  },
  {
    domanda: "Lo scacco matto determina la fine della partita.",
    valore: true
  },
  {
    domanda: "Il movimento del cavallo ha una singolare forma a \"L\".",
    valore: true
  },
  {
    domanda: "La torre cattura diversamente da come si muove.",
    valore: false
  },
  {
    domanda: "Un pezzo avversario può essere catturato muovendo un proprio pezzo \
    nella casa in cui si trova.",
    valore: true
  }
]

function gLoad () {

  // Gestore dell'evento window.onload.

  try {
    nCitazione = document.getElementById("citazione");
    nAutore = document.getElementById('autore');
    nIndietroCitazione = document.getElementById("indietroCitazione");
    nAvantiCitazione = document.getElementById("avantiCitazione");
    nTitoloRegola = document.getElementById("titoloRegola");
    nRegola = document.getElementById("regola");
    nIndietroRegola = document.getElementById("indietroRegola");
    nAvantiRegola = document.getElementById("avantiRegola");
    nPedone = document.getElementById("pedone");
    nTorre = document.getElementById("torre");
    nCavallo = document.getElementById("cavallo");
    nAlfiere = document.getElementById("alfiere");
    nDonna = document.getElementById("donna");
    nRe = document.getElementById("re");
    nNomePezzo = document.getElementById("nomePezzo")
    nDescrizionePezzo = document.getElementById("descrizionePezzo");
    nDomanda = document.getElementById("domanda");
    nVero = document.getElementById("vero");
    nFalso = document.getElementById("falso");
    nPulsantiTest = document.getElementById("pulsantiTest");
    nNuovoTest = document.getElementById("nuovoTest");
    numeroCitazioneCorrente = 0;
    scriviCitazione(numeroCitazioneCorrente);
    cambiaCitazioneInAutomatico();
    numeroRegolaCorrente = 0;
    scriviRegola(numeroRegolaCorrente);
    mostraPulsanteNuovoTest();
    nIndietroRegola.onclick = gClickIndietro;
    nAvantiRegola.onclick = gClickAvanti;
    nPedone.onmouseover = gPedone;
    nPedone.onmouseout = rimuoviDescrizionePezzo;
    nTorre.onmouseover = gTorre;
    nTorre.onmouseout = rimuoviDescrizionePezzo;
    nCavallo.onmouseover = gCavallo;
    nCavallo.onmouseout = rimuoviDescrizionePezzo;
    nAlfiere.onmouseover = gAlfiere;
    nAlfiere.onmouseout = rimuoviDescrizionePezzo;
    nDonna.onmouseover = gDonna;
    nDonna.onmouseout = rimuoviDescrizionePezzo;
    nRe.onmouseover = gRe;
    nRe.onmouseout = rimuoviDescrizionePezzo;
  }
  catch (e) {
      alert("gLoad" + e);
  }
}

window.onload = gLoad;

/**/function scriviMessaggio (messaggio, nGenitore) {

  // Crea un nuovo nodo di testo associandolo quale figlio di un nodo
  // nell'albero DOM.

/**/  var nodoTesto = document.createTextNode(messaggio);
/**/  if (nGenitore.childNodes.length == 0) {
/**/    nGenitore.appendChild(nodoTesto);
/**/  } else {
/**/    nGenitore.replaceChild(nodoTesto, nGenitore.firstChild);
/**/  }
/**/}

// -------------------------------CITAZIONI-------------------------------------

function scriviCitazione (i) {

  // Inserisce una citazione nel nodo nCitazione.

  scriviMessaggio(citazioni[i].citazione, nCitazione);
  scriviMessaggio(citazioni[i].autore, nAutore);
}

function cambiaCitazioneInAutomatico () {

  // Mostra in automatico la citazione successiva.

  try {
    if (numeroCitazioneCorrente == citazioni.length - 1) {
          numeroCitazioneCorrente = 0;
        } else {
          numeroCitazioneCorrente++;
        }
    scriviCitazione(numeroCitazioneCorrente);
    setTimeout(cambiaCitazioneInAutomatico, 8000);
  } catch (e) {
    alert("cambiaCitazioneInAutomatico" + e);
  }
}

// --------------------------------REGOLE---------------------------------------

function scriviRegola (i) {

  // Inserisce una regola nel nodo nRegola.

  scriviMessaggio(regole[i].titolo, nTitoloRegola);
  scriviMessaggio(regole[i].regola, nRegola);
}

function gClickAvanti () {

  // Inserisce nel nodo nRegola la regola successiva a quella visualizzata.

  try {
    if (numeroRegolaCorrente == regole.length - 1) {
      numeroRegolaCorrente = 0;
    } else {
      numeroRegolaCorrente++;
    }
    scriviRegola(numeroRegolaCorrente);
  } catch (e) {
    alert("gClickAvanti" + e);
  }
}

function gClickIndietro () {

// Inserisce nel nodo nRegola la regola precedente a quella visualizzata.

  try {
    if (numeroRegolaCorrente == 0) {
      numeroRegolaCorrente = regole.length - 1;
    } else {
      numeroRegolaCorrente--;
    }
    scriviRegola(numeroRegolaCorrente);
  } catch (e) {
    alert("gClickIndietro" + e);
  }
}

// ---------------------------------PEZZI---------------------------------------

function rimuoviFigli(nGenitore) {

  // Rimuove i figli da un nodo.

  while (nGenitore.firstChild) {
    nGenitore.removeChild(nGenitore.firstChild)
  }
}

function scriviDescrizionePezzo (nomePezzo) {

  // Inserisce la descrizione di un pezzo nel nodo nDescrizionePezzo.

    scriviMessaggio(pezzi[nomePezzo], nDescrizionePezzo);
    scriviMessaggio(nomePezzo, nNomePezzo)
}

function rimuoviDescrizionePezzo () {

// Rimuove la descrizione di un pezzo dal nodo nDescrizionePezzo.

  try {
    rimuoviFigli(nDescrizionePezzo);
    rimuoviFigli(nNomePezzo);
  } catch (e) {
    alert("rimuoviDescrizionePezzo" + e);
  }
}

function gPedone () {

  // Inserisce la descrizione del pedone nel nodo nDescrizionePezzo.

  try {
    scriviDescrizionePezzo("Pedone");
  } catch (e) {
    alert("gPedone" + e)
  }
}

function gTorre () {

  // Inserisce la descrizione della torre nel nodo nDescrizionePezzo.

  try {
    scriviDescrizionePezzo("Torre");
  } catch (e) {
    alert("gTorre" + e)
  }
}

function gCavallo () {

  // Inserisce la descrizione del cavallo nel nodo nDescrizionePezzo.

  try {
    scriviDescrizionePezzo("Cavallo");
  } catch (e) {
    alert("gCavallo" + e)
  }
}

function gAlfiere () {

  // Inserisce la descrizione dell'alfiere nel nodo nDescrizionePezzo.

  try {
    scriviDescrizionePezzo("Alfiere");
  } catch (e) {
    alert("gAlfiere" + e)
  }
}

function gDonna () {

  // Inserisce la descrizione della donna nel nodo nDescrizionePezzo.

  try {
    scriviDescrizionePezzo("Donna");
  } catch (e) {
    alert("gDonna" + e)
  }
}

function gRe () {

// Inserisce la descrizione del re nel nodo nDescrizionePezzo.

  try {
    scriviDescrizionePezzo("Re");
  } catch (e) {
    alert("gRe" + e)
  }
}

// ----------------------------------TEST---------------------------------------

function mostraPulsanteNuovoTest () {

  // Mostra in corrispondenza del nodo nPulsantiTest il pulsante "Nuovo Test".

  try {
    nuovoTest = document.createElement("input");
    nuovoTest.type = "button";
    nuovoTest.value = "Nuovo Test";
    nuovoTest.setAttribute("class", "pulsante");
    nuovoTest.onclick = gNuovoTest;
    if (nPulsantiTest.childNodes.length == 0) {
      nPulsantiTest.appendChild(nuovoTest);
    } else {
      nPulsantiTest.replaceChild(nuovoTest, nPulsantiTest.firstChild);
    }
  } catch (e) {
    alert("mostraPulsanteNuovoTest" + e);
  }
}

function gNuovoTest () {

  // Inizia un nuovo Test.

  try {
    numeroDomandaCorrente = 0;
    punteggio = 0;
    creaDomande();
    scriviDomanda(numeroDomandaCorrente);
    mostraPulsanteConferma();
  } catch (e) {
    alert("gNuovoTest" + e)
  }
}

function creaDomande () {

  // Aggiunge all'array domande 10 elementi random dell'array
  // archivioDomande.

  domande = [];
  for (i = 0; i < 10; i++) {
    nuovoIndice = Math.floor(Math.random() * (archivioDomande.length - 1));
    while (domande.includes(archivioDomande[nuovoIndice])) {
      nuovoIndice = Math.floor(Math.random() * (archivioDomande.length - 1));
    } domande.push(archivioDomande[nuovoIndice]);
  }
}

function scriviDomanda (i) {

  // Inserisce una domanda nel nodo nDomanda.

  rimuoviFigli(nDomanda);
  scriviMessaggio(domande[i]["domanda"], nDomanda);
  creaRisposte();
}

function creaRisposte () {

  // Inserisce nel nodo nRisposta due radio button associati alle risposte
  // "Vero"  e "Falso".

  rimuoviFigli(nVero);
  rimuoviFigli(nFalso);
  vero = document.createElement("input");
  vero.name = "radio";
  vero.type = "radio";
  vero.class = "radio";
  vero.checked = false;
  falso = document.createElement("input");
  falso.name = "radio";
  falso.type = "radio";
  falso.class = "radio";
  falso.checked = false;
  scriviMessaggio("Vero", nVero);
  scriviMessaggio("Falso", nFalso);
  nVero.insertBefore(vero, nVero.firstChild);
  nFalso.insertBefore(falso, nFalso.firstChild);
}

function mostraPulsanteConferma () {

  // Mostra in corrispondenza del nodo nPulsantiTest il pulsante "Conferma".

  conferma = document.createElement("input");
  conferma.type = "button";
  conferma.value = "Conferma";
  conferma.setAttribute("class", "pulsante");
  conferma.onclick = gConferma;
  nPulsantiTest.replaceChild(conferma, nPulsantiTest.firstChild);
}

function gConferma () {

  // Mostra la domanda successiva, aggiornando il punteggio ad ogni domanda e
  // mostrando l'esito alla fine del test.

  try {
    if (numeroDomandaCorrente == domande.length - 1) {
      aggiornaPunteggio();
      scriviMessaggio(calcolaEsito(), nDomanda);
      mostraPulsanteNuovoTest();
      rimuoviFigli(nVero);
      rimuoviFigli(nFalso);
    } else {
      aggiornaPunteggio();
      numeroDomandaCorrente++;
      scriviDomanda(numeroDomandaCorrente);
    }
  } catch (e) {
    alert("gConferma" + e);
  }
}

function aggiornaPunteggio () {

  // Aumenta di +1 il valore del punteggio per ogni risposta corretta.

  if (vero.checked && domande[numeroDomandaCorrente].valore) {
    punteggio++;
  } else if (falso.checked && !(domande[numeroDomandaCorrente].valore)) {
    punteggio++;
  }
}

function calcolaEsito () {

  // Restituisce l'esito del test.

  if (punteggio == 0) {
    esito = "Non hai risposto correttamente a nessuna domanda. Ripassa con noi e \
    riprovaci più tardi!"
  } else if (punteggio == 1) {
    esito = "Hai risposto correttamente ad una domanda su 10. Ripassa con noi e \
    riprovaci più tardi!"
  } else {
    esito = "Hai risposto correttamente a " + punteggio + " domande su 10."
    if (punteggio < 6) {
      esito += " Sei sulla buona strada! Ripassa con noi e riprovaci più tardi!"
    } else {
      esito += " Ottimo lavoro! Adesso hai tutto quel che serve per iniziare a giocare."
    }
  } return esito;
}
