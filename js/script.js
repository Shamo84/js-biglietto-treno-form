var euroKm = 0.21;


// PULSANTE GENERA
var genera = document.getElementById('genera');
genera.addEventListener("click",
  function () {
    var nomeCognome = document.getElementById('nome').value;
    console.log(nomeCognome);
    var km = parseInt(document.getElementById('km').value);
    console.log(km);
    var fasciaEta = document.getElementById('fascia_eta').value;
    console.log(fasciaEta);

    if (nomeCognome.length == 0 || isNaN(km) || km <= 0 ) {
      alert("controlla i dati inseriti!");
    } else {
      document.getElementById('nome_passeggero').innerHTML = nomeCognome;
      var prezzoBiglietto = km * euroKm;

      if (fasciaEta == "minorenne") {
        document.getElementById('tariffa').innerHTML = ("tariffa ridotta");
        prezzoBiglietto = prezzoBiglietto * 0.8;
      } else if (fasciaEta == "over65") {
        document.getElementById('tariffa').innerHTML = ("sconto silver");
        prezzoBiglietto = prezzoBiglietto * 0.6;
      } else {
        document.getElementById('tariffa').innerHTML = ("biglietto standard");
      }

      var carrozza = Math.floor(Math.random() * 9 + 1 );
      document.getElementById('carrozza').innerHTML = carrozza;
      var cp = Math.floor(Math.random() * 10000 + 90000 );
      document.getElementById('codice_cp').innerHTML = cp;
      document.getElementById('costo_biglietto').innerHTML = prezzoBiglietto.toFixed(2) + ' €';
      document.getElementById('ticket').classList.remove("hidden");
      document.getElementById('ticket').classList.add("display");
    }
  }
)

// PULSANTE ANNULLA
var annulla = document.getElementById('annulla');
annulla.addEventListener("click",
  function () {
  document.getElementById('ticket').classList.remove("display");
  document.getElementById('ticket').classList.add("hidden");
  document.getElementById('nome').value = ("");
  document.getElementById('km').value = ("");
  document.getElementById('nome_passeggero').innerHTML = ("");
  document.getElementById('tariffa').innerHTML = ("");
  document.getElementById('carrozza').innerHTML = ("");
  document.getElementById('codice_cp').innerHTML = ("");
  document.getElementById('costo_biglietto').innerHTML = ("");
  }
)
