// OBIEKTY
// inspiracja z https://medium.com/@mayordesigns/demystifying-the-almighty-object-in-javascript-83937951809f 
// tworzenie obiektów możliwe jest na kilka sposobów:
// 1. przez użycie literału obiektowego

let student = {
  firstName: "Roheem",
  lastName: "Olayemi",
  age: 26,
  job: 'coder',
  githubProfile: 'Tekcoder',
  hobbies: ['reading', 'travelling'],
  isMarried: true,
  aspirations: ['To work in Google', 'To work in Microsoft','To work in Amazon'
  ]
}

// 2. przez funkcję konstruktora i utworzenie nowej instancji:
function Coder(name, surname, height, age) {
  this.name = name;
  this.surname = surname;
  this.height = height;
  this.age = age;
}
// w nowej instancji argumenty są konkretnymi wartościami dla właściwości z konstruktora:
let coder = new Coder('Adam', 'Nowak', 175, 32);
console.log(coder);
// zwraca cały nowy obiekt:
/*
Coder { name: 'Adam', surname: 'Nowak', height: 175, age: 32 }
*/

// 3. przez użycie funkcji Object.create:
// obiekt prototypowy z właściwościami i ich wartościami:
let programmer = Object.create(Object.prototype,
{
  firstname: {
    value: 'Roman',
    enumerable: true,
    writable: true,
    configurable: true
  },
  lastname: {
    value: 'Gracz',
    enumerable: true,
    writable: true,
    configurable: true
  },
  height: {
    value: 176,
    enumerable: true,
    writable: true,
    configurable: true
  },
  age: {
   value: 26,
   enumerable: true,
   writable: true,
   configurable: true
  }
})
console.log(programmer); // zwraca cały obiekt:
/*
{ firstname: 'Roman', lastname: 'Gracz', height: 176, age: 26 }
*/
// domyślnie właściwości 'enumerable', 'writable' oraz 'configurable' są ukryte

// 4. przez użycie klas ES6:
// najpierw klasa konstruktora
class jsMaster {
  constructor(firstname, lastname, height, age) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.height = height;
    this.age = age;
  }
}
// potem nowy obiekt:
let geek = new jsMaster("Jan", "Kowalski", 191, 38);
console.log(geek); // zwraca cały obiekt
/*
jsMaster {
  firstname: 'Jan',
  lastname: 'Kowalski',
  height: 191,
  age: 38
}
*/
// do którego można się dostać:
geek.firstname; // zwraca: 'Jan'


// dostęp do wartości obeiktu przez zapis z kropką:
student.job; // zwraca: 'coder'

// dostęp do wartości przez użycie nawiasu kwadratowego:
student['isMarried']; // zwraca: true
// UWAGA - tu właściwość musi być użyta z cudzysłowiem!

// jeśli wartości są umieszczone w tablicy:
student.aspirations;
// zwraca kompletną tablicę (tu: wszystkie trzy wartości)
student.aspirations[2]; //zwraca tylko wartość o indeksie 2, tu: 'To work in Amazon'

// dodawanie nowych właściwości z wartościami do obiektu:
student.favoriteFood = 'pizza';
// sprawdźmy, czy faktycznie dodaliśmy to do całości:
student.favoriteFood; // zwraca: 'pizza'
// cały obiekt:
console.log(student);
/* zwraca cały obiekt:
{
  firstName: 'Roheem',
  lastName: 'Olayemi',
  age: 26,
  job: 'coder',
  githubProfile: 'Tekcoder',
  hobbies: [ 'reading', 'travelling' ],
  isMarried: true,
  aspirations: [ 'To work in Google', 'To work in Microsoft', 'To work in Amazon' ],
  favoriteFood: 'pizza'
}
razem z później dopisaną pizzą
*/




