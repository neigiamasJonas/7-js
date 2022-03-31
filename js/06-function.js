// Visi mokiniai turi tik 4 pazymius ir reikia suskaiciuoti ju vidurki //

const petras = [10, 4, 8, 2];
const maryte = [5, 9, 7, 6];
const jonas = [7, 7, 8, 2];
const ona = [1, 5, 7, 10];

let petroSuma = 0;
petroSuma += petras[0];
petroSuma += petras[1];
petroSuma += petras[2];
petroSuma += petras[3];

const petroKiekis = petras.length;
const petroVidurkis = petroSuma / petras.length
console.log('Petras:', petroVidurkis);


let marytesSuma = 0;
marytesSuma += maryte[0];
marytesSuma += maryte[1];
marytesSuma += maryte[2];
marytesSuma += maryte[3];

const marytesKiekis = maryte.length;
const marytesVidurkis = marytesSuma / maryte.length
console.log('Maryte:', marytesVidurkis);

let jonoSuma = 0;
jonoSuma += jonas[0];
jonoSuma += jonas[1];
jonoSuma += jonas[2];
jonoSuma += jonas[3];

const jonoKiekis = jonas.length;
const jonoVidurkis = jonoSuma / jonas.length
console.log('Jonas:', jonoVidurkis);

let onosSuma = 0;
onosSuma += ona[0];
onosSuma += ona[1];
onosSuma += ona[2];
onosSuma += ona[3];

const onosKiekis = ona.length;
const onosVidurkis = onosSuma / ona.length
console.log('Ona:', onosVidurkis);

console.log('------------------------------------------');

const petras1 = [10, 4, 8, 2];
const maryte1 = [5, 9, 7, 6];
const jonas1 = [7, 7, 8, 2];
const ona1 = [1, 5, 7, 10];

function vidurkis(pazymiuSarasas) {
    let pazymiuSuma = 0;
    pazymiuSuma += pazymiuSarasas[0];
    pazymiuSuma += pazymiuSarasas[1];
    pazymiuSuma += pazymiuSarasas[2];
    pazymiuSuma += pazymiuSarasas[3];
    return pazymiuSuma / pazymiuSarasas.length;
}

const petro1Vidurkis = vidurkis(petras1);
console.log('Petras:', petro1Vidurkis);

const marytes1Vidurkis = vidurkis(maryte1);
console.log('Maryte:', marytes1Vidurkis);

const jono1Vidurkis = vidurkis(jonas1);
console.log('Jonas:', jono1Vidurkis);

const onos1Vidurkis = vidurkis(ona1);
console.log('Ona:', onos1Vidurkis);

console.log('---------------------------------------------');

/*
Funkcija gauna varda ir turi grazinti sakini:
"Vardo pirma raide yra [V] ir vardas sudarytas is [5] raidziu."
*/

function vardoAnalize(name) {
    return `Vardo "${name}" pirma raide yra ${name[0]} ir vardas sudarytas is ${name.length} raidziu.`;
}

const petroVardas = vardoAnalize('Petras');
console.log(petroVardas);

const marytesVardas = vardoAnalize('Maryte');
console.log(marytesVardas);

const onosVardas = vardoAnalize('Ona');
console.log(onosVardas);

/*
Funkcija gauna du skaicius ir turi grazinti lygti su sprendimu, pvz.:
2 + 2 = 4
*/

function suma(a, b) {
    return `${a} + ${b} = ${a + b}`;
}

const s1 = suma(2, 3);
console.log(s1);

const s2 = suma(0.1, 0.2);
console.log(s2);

const s3 = suma(-88, -11);
console.log(s3);