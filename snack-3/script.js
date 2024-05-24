const biciclette = [
    { nome: "Pinarello Dogma", peso: 6.8 },
    { nome: "Cervelo R5", peso: 6.5 },
    { nome: "Specialized Tarmac", peso: 6.6 },
    { nome: "Trek Emonda", peso: 6.7 },
    { nome: "Cannondale SuperSix", peso: 6.4 }
    ];

// trovo la bicicletta più leggera iterando fra gli elementi dell'array
    let biciLeggera = biciclette[0]
for (let index = 0; index < biciclette.length; index++) {
    if(biciclette[index].peso<biciLeggera.peso)
        biciLeggera = biciclette[index]
}

console.log(biciLeggera)

//destrutturo l'array assegnando alle variabili nomeBiciLeggera e pesoBiciLeggera le proprietà dell'oggetto biciLeggera
const {nomeBiciLeggera, pesoBiciLeggera} = biciLeggera

//console.log con template literals
console.log(`La bicicletta più leggera è la ${nomeBiciLeggera}, con un peso di ${pesoBiciLeggera}kg`)