function average(list) {
    let sum = 0;
    for (const item of list) {          // const ITEM(paima is listo) of LIST //
        sum += item;
    }

    return sum / list.length
}

const rez = average([10, 2, 4, 6])
console.log(rez);

// average paprastas apskaiciavimas

/*

CLASS: savybiu ir metodu (rinkinys) junginys/grupe.

Savybe: - kintamieji (info);
Metodai - funkcionalumas.

Klases - receptura;
Objektas - pagal receptura pagamintas konkretus/apciuopiamas dalykas;

Constructor yra metodas!



*/

// class Bankomatas {
//     constructor (street, color) {
//         this.gatve = street;
//         this.spalva = color;
//         this.ijungtas = false;
//         this.pinigai = 0;
        
//     }
    
//     ijungtas() {
//         this.ijungtas = true;

//     }

//     isjungtas() {
//         this.ijungtas = false;

//     }
// }

// const bankomatas1 = new Bankomatas('Didzioji g. 2', 'red')

// const bankomatas2 = new Bankomatas('Mazoji g. 2', 'blue')

// console.log(bankomatas1);
// console.log(bankomatas2);

// bankomatas2.ijungtas();
// bankomatas2.isjungtas();

// // console.log(bankomatas1.spalva);
// // console.log(bankomatas1.gatve);

// console.log(bankomatas1);
// console.log(bankomatas2);

class Bankomatas {
    constructor(street, color) {
        this.street = street;
        this.color = color;
        this.turnedOn = false;
        this.money = 0;
    }

    switchOn() {
        this.turnedOn = true;
        console.log(`${this.street}: bankomatas ijungtas`);
    }

    switchOff() {
        this.turnedOn = false;
        console.log(`${this.street}: bankomatas isjungtas`);
    }

    cashIn(money) {
        if (!this.turnedOn) {
            console.log(this.street, 'Panasu, jog nera elektros... ⚡⚡⚡');
            return;
        }
        if (typeof money !== 'number'
            || !isFinite(money)) {
            console.log(this.street, 'Nepanasu i tikra piniga 😡');
            return;
        }
        if (money <= 0) {
            console.log(this.street, 'Minusiniu pinigu neegzistuoja 😡');
            return;
        }

        this.money += money;
        console.log(`${this.street}: inesta ${money} pinigu.`);
    }

    cashOut(money) {
        if (!this.turnedOn) {
            console.log(this.street, 'Panasu, jog nera elektros... ⚡⚡⚡');
            return;
        }
        if (typeof money !== 'number'
            || !isFinite(money)) {
            console.log(this.street, 'Nepanasu i tikra piniga 😡');
            return;
        }
        if (money <= 0) {
            console.log(this.street, 'Minusiniu pinigu neegzistuoja 😡');
            return;
        }
        if (this.money < money) {
            console.log(this.street, 'Bankomate siuo metu nera tokios sumos 😭');
            return;
        }

        this.money -= money;
        console.log(`${this.street}: isgryninta ${money} pinigu.`);
    }

    status() {
        console.log(`${this.street}: siuo metu pinigu likutis yra ${this.money}`);
    }
}

const bankomatas1 = new Bankomatas('Didzioji g. 2', 'red');
const bankomatas2 = new Bankomatas('Mazoji g. 3', 'blue');

bankomatas1.switchOn();
bankomatas2.switchOn();

bankomatas1.cashIn(true);
bankomatas1.cashIn(5);
bankomatas2.cashIn(777);
bankomatas1.cashIn(5);
bankomatas1.cashIn(5);
bankomatas2.cashIn(3);

bankomatas1.cashOut(9);
bankomatas2.cashOut(9);
bankomatas1.cashOut(9);
bankomatas2.cashOut(9);

bankomatas1.status();
bankomatas2.status();