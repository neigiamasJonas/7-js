// vienos eilutes komentaras //

/*

KINTAMIEJI

INICIAVIMO BUDAS:
const - default iniciavimo budas
let - antraninis budas inicijuoti, kai zinome, kad reiksme turi keistis
var - pats seniausias, bet geriau NENAUDOTI, jei rupi saugumas

DUOMENU TIPAS
number (skaicius) - 
string (tekstas) - 
Boolean (logine reiksme) - true/false
array (masyvas, sarasas, matrica*)
*/

const luckyNumber = 22;
console.log('Lucky number', luckyNumber);

let pinigine = 0;
console.log('Pinigine', pinigine);
pinigine = 5;
console.log('Pinigine', pinigine);

const Petras = 123;
const vardas = 'Petras';
console.log(vardas);

const pasisveikinimas = 'Laba diena, ' + vardas + '.';
console.log(pasisveikinimas);

console.log('Laba diena, ' + vardas + '.');


const arVedes = true;
const arTuriVaiku = false;
const arMeluojaDelVaiku = true;

console.log('Ar vedes?', arVedes);
console.log('Ar turi vaiku?', arTuriVaiku);
console.log('Ar meluoja?', arMeluojaDelVaiku);

console.log(1, 2, 3, 4);

console.log(2+2*2);
console.log('2+2*2');

const pazymiai = [10, 8, 6, 4, 2];
console.log('pazymiai', pazymiai);

const studentuVardai = ['Petras', 'Maryte', 'Jonas', 'Ona'];
console.log('studentu vardai', studentuVardai);

// UZDUOTYS //

// Kintamuju inicijavimas //

const pirmasSkaicius = 2;
console.log('Pirmas skaicius', pirmasSkaicius);

const antrasSkaicius = 4;
console.log('Antras skaicius', antrasSkaicius);

const treciasSkaicius = 7;
console.log('Trecias skaicius', treciasSkaicius);


const pirmasZodis = 'Kas';
console.log('Pirmas zodis', pirmasZodis);

const antrasZodis = 'Ravi';
console.log('Antras zodis', antrasZodis);

const treciasZodis = 'Siena';
console.log('Trecias zodis', treciasZodis);


const pirmoSarNr = [1,3,5,7,10];
console.log('Pirmo saraso numeriai', pirmoSarNr);
pirmoSarNr[0]="1";
pirmoSarNr[1]="3";
pirmoSarNr[2]="5";
pirmoSarNr[3]="7";
pirmoSarNr[4]="9";


const antroSarNr = [2,4,6,8,9];
console.log('Antro saraso numeriai', antroSarNr);

const trecioSarNr = [12,34,56,78,910];
console.log('Trecio saraso numeriai', trecioSarNr);


const pirmoSarZodziai = ['Kas','turi','paskolinti','geltona','flomasteri'];
console.log('Pirmo saraso zodiai', pirmoSarZodziai);

const antroSarZodziai = ['Kodel','tu','klausi','jeigu','zinai'];
console.log('Antro saraso zodiai', antroSarZodziai);

const trecioSarZodziai = ['Kiek','tau','kartu','reiks','kartoti'];
console.log('Trecio saraso zodiai', trecioSarZodziai);

// Veiksmai su kintamaisiais //

// 1 //
const visuSkaiciuSuma = 'suma'
console.log('Visu skaiciu suma =', pirmasSkaicius + antrasSkaicius + treciasSkaicius);

// 2 //
const zodziaiSuTarpais = 'zodiai su tarpais'
console.log('Zodiai su tarpais -', pirmasZodis, antrasZodis, treciasZodis);

// 3 //
