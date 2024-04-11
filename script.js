var map = L.map('map').setView([41.90484308781728, 12.551093793845274], 6);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

function crea(){
    for(let i of comuni){
        let marker = L.marker([i.coordinate.lat, i.coordinate.lon]).bindPopup(`<b>${i.nome}</b><br>${i.abitanti} abitanti`).addTo(map);
    }
}

crea();


const ctx = document.getElementById('myChart');

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: posti(),
      datasets: [{
        label: 'Numero di abitanti',
        data: dati(),
        borderWidth: 1
      }]
    },
    options: {
        plugins: {
            title: {
                display: true,
                text: 'Top 10 città italiane per popolazione',
                padding: {
                    top: 10,
                    bottom: 30
                }
            }
        }
    }
  });

function posti(){
    let nome = [];
    for(let i = 0; i<comuni.length; i++){
        nome[i] = comuni[i].nome;
    }
    return nome;
}

function dati(){
    let dati = [];
    for(let i = 0; i<comuni.length; i++){
        dati[i] = comuni[i].abitanti;
    }
    return dati;
}