/*
LOOP: for, while, for-in, for-of, foreach, ...
*/

const pazymiai = [10, 2, 8, 4, 6];
let suma = 0;


// FOR //

for (let i1 = 0; i1 < pazymiai.length; i1++) {
    const pazymys = pazymiai[i1];
    suma += pazymys;

    console.log(`${i1}) pazymys ${pazymys} [${suma}]`);
}

const vidurkis = suma / pazymiai.length;
console.log('Vidurkis:', vidurkis);

// while //

let sumaWhile = 0;
let i2 = 0;

while(i2 < pazymiai.length) {
    const pazymys = pazymiai[i2];
    sumaWhile += pazymys;

    console.log(`${i2}) pazymys ${pazymys} [${sumaWhile}]`);
    i2++;

}// FOR-OF // 

console.log('-----------');
let sumaForOf = 0;
let i3 = 0;
for (const pazymys of pazymiai) {
    sumaForOf += pazymys;
    console.log(`${i3++}) pazymys ${pazymys} [${sumaForOf}]`);
}



// For each //
console.log("---------------------------------");
let sumaForEach = 0;

pazymiai.forEach ((a, b, c)=> {
    console.log(a, b, c);               // a=pazymys, b=index, c=masyvo skaiciai
})
console.log("---------------------------------");

console.log('-----------');
let sumaForEach1 = 0;
pazymiai.forEach((pazymys, i4) => {
    sumaForEach1 += pazymys;
    console.log(`${i4}) pazymys ${pazymys} [${sumaForEach1}]`);
});