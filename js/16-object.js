/*
OBJECT
*/

/*Mokiniai (array): 
     - mokinys (???):
            - varda (string),
            - pazymius (array),
            - kontaktini asmeni (???):
                - varda (string),
                - telefona (number).
    */

// const students2 = ['Petras', 'Maryte', 'Jonas', ' Ona'];
// const marks = [[10, 8, 7], [10, 7, 4], [10, 6], [10, 5]];
// const contactName = ['P.P', 'M.M', 'J.J', 'O.O']

// const studentIndex = 0;
// console.log('Vardas:', students2[studentIndex]);
// console.log('Pazymiai', marks[studentIndex]);
// console.log('Kontaktas', contactName[studentIndex]);
// taip nedarayti !!! pasirinktas netinkamas duomenu reprezentavimo tipas (gali susimaisyti jei bent viena elemente esancia dali istrynus)


// KAIP DARYTI

// const students22 = [
//     ['Petras', [10, 6], ['P.P', 111]],
//     ['Maryte', [10, 7], ['M.M', 222]],
//     ['Jonas', [10, 8, 9], ['J.J', 333]],
//     ['Ona', [10, 9], ['O.O', 444]],
// ];

// const index = 0;
// const student = students[index];
// const studentName = students[0];
// const studentMarks = students[1];
// const studentConatactPerson = student[2];
// const studentContactPersonName = studentConatactPerson[0];
// const studentContactPersonNr = studentConatactPerson[2];

// console.log(studentName);
// console.log(studentMarks);
// console.log(studentConatactPerson);
// console.log(studentContactPersonName);
// console.log(studentContactPersonNr);

 // key: name / value: petras //

const students = [
    {
        name: 'Petras',
        marks: [10, 6],
        contact: {
            name: 'P.P',
            phone: '111',
            address: {
                city: 'Vilnius',
                street: 'Street'
            },
        },               
    },
    {
        name: 'Maryte',
        marks: [10, 7],
        contact: {
            name: 'M.M',
            phone: '222',
            address: {
                city: 'Vilnius',
                street: 'Street'
            },
        },      
    },
    {
        name: 'Jonas',
        marks: [10, 3],
        contact: {
            name: 'J.J',
            phone: '333',
            address: {
                city: 'Vilnius',
                street: 'Street'
            },
        },      
    },
    {
        name: 'Ona',
        marks: [10, 6, 4],
        contact: {
            name: 'O.O',
            phone: '444',
            address: {
                city: 'Vilnius',
                street: 'Street'
            },
        },      
    },
];

const studentIndex = 0;
const student = students[studentIndex];
const name = student.name;                  // ['name'] //
const marks = student.marks;                // ['marks'] //
const contact = student.contact;
const contactName = contact.name;           // student.contact.name (galima ir taip trumpint)//
const contactNr = contact.phone;
const contactCity = student.contact.address.city;



console.log(name);
console.log(marks);
console.log(contactName);
console.log(contactNr);
console.log(contactCity);
