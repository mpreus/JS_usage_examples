// OBIEKTY 

// inspiracja z https://medium.com/@mayordesigns/demystifying-the-almighty-object-in-javascript-83937951809f 

// obiekty wewnątrz nawiasów klamrowych przechowują dane (właściwości obiektu) w postaci par 'nazwa_właściwości: wartość' oddzielonych przecinkami


// I TWORZENIE OBIEKTÓW
// tworzenie obiektów możliwe jest na kilka sposobów:
// 1. przez użycie literału obiektowego, czyli wpisanie wprost całości:
let student = {
  firstName: "Marian",
  lastName: "Wracz",
  age: 23,
  job: 'coder',
  githubProfile: 'wraczCoder',
  hobbies: ['czytanie', 'podróżowanie'],
  isMarried: true,
  aspirations: ['pracować w Google', 'pracować jak najmniej']
}

// możliwe jest też utworzenie nowego pustego obiektu w ten sposób:
let pupil = {};
console.log(pupil); // zwraca pusty obiekt: {}
// i dopiero teraz wpisywanie do niego zawartości, co możliwe jest przez proste przypisanie ze znakiem '=' 
pupil.name = 'Piotr';
pupil.surname = 'Zalewski';
console.log(pupil); // zwraca cały obiekt: { name: 'Piotr', surname: 'Zalewski' }

// 2. przez funkcję konstruktora i utworzenie nowej instancji:
function Coder(name, surname, YearsOfExperience, height, age) {
  this.name = name;
  this.surname = surname;
  this.YearsOfExperience = YearsOfExperience;
  this.height = height;
  this.age = age;
}
// nazwę funkcji konstruktora zwyczajowo piszemy z wielkiej litery
// w nowej instancji argumenty są konkretnymi wartościami dla właściwości z konstruktora:
let coder1 = new Coder('Adam', 'Nowak', 7, 175, 32);
let coder2 = new Coder('Zuzanna', 'Tirak', 4, 169, 34);
// kolejność wpisywania wartości musi ściśle odpowiadać kolejności zdefiniowanych właściwości
console.log(coder1);
// zwraca cały nowy obiekt:
/*
Coder { name: 'Adam', surname: 'Nowak', YearsOfExperience: 7, height: 175, age: 32 }
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
   value: 29,
   enumerable: true,
   writable: true,
   configurable: true
  }
})
console.log(programmer); // zwraca cały obiekt:
/*
{ firstname: 'Roman', lastname: 'Gracz', height: 176, age: 29 }
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
// jak widać nowa instancja klasy nie musi mieć nazwy związanej z klasą konstruktora
console.log(geek); // zwraca cały obiekt:
/*
jsMaster {
  firstname: 'Jan',
  lastname: 'Kowalski',
  height: 191,
  age: 38
}
*/


// II DOSTĘP DO DANYCH
// dostęp do konkretnych wartości obiektu możliwy jest na dwa sposoby
// 1. przez zapis z kropką:
console.log(geek.firstname); // zwraca: 'Jan'
console.log(student.job); // zwraca: 'coder'

// 2. przez użycie nawiasu kwadratowego:
console.log( student['isMarried'] ); // zwraca: true
// UWAGA - tu właściwość musi być użyta z cudzysłowiem!

// 3. jeśli wartości są umieszczone w tablicy:
console.log(student.aspirations);
// zwraca kompletną tablicę (tu: obie wartości):
/*
[ 'pracować w Google', 'pracować jak najmniej' ]
*/
console.log( student.aspirations[1] ); 
// powyższe zwraca tylko wartość o indeksie 1, czyli tu: 'pracować jak najmniej'

/*
UWAGA - jeśli spróbujemy odwołąć się do właściwości nie istniejącęj, np. dla studenta z pierwszego przykładu:
*/
console.log(student.hasChildren); // zwraca: undefined

// III Modyfikowanie obiektów
// 1. do obiektu już utworzonego można dodawać kolejne pary 'właściwość: wartość'
// dodawanie nowych właściwości z wartościami do obiektu:
student.favoriteFood = 'pizza';
// sprawdźmy, czy faktycznie dodaliśmy to do całości:
console.log(student.favoriteFood); // zwraca: 'pizza'
// cały obiekt:
console.log(student);
/* zwraca cały obiekt:
{
  firstName: 'Marian',
  lastName: 'Wracz',
  age: 23,
  job: 'coder',
  githubProfile: 'wraczCoder',
  hobbies: [ 'reading', 'travelling' ],
  isMarried: true,
  aspirations: [ 'pracować w Google', pracować jak najmniej ],
  favoriteFood: 'pizza'
}
a więc razem z później dopisaną pizzą
*/

// 2. modyfikowanie wartości istniejącej już właściwości przez nadpisanie (ponowne przypisanie wartości);
student.hobbies = ['music', 'sightseeing'];
student.age = 19;
console.log(student); // zwraca cały obiekt z nowymi wartościami:
/*
{
  firstName: 'Marian',
  lastName: 'Wracz',
  age: 19,
  job: 'coder',
  githubProfile: 'wraczCoder',
  hobbies: [ 'music', 'sightseeing' ],
  isMarried: true,
  aspirations: [ 'pracować w Google', 'pracować jak najmniej' ],
  favoriteFood: 'pizza'
}
*/
// aby zmodyfikować tylko jedą wartość z wielu, np. w tablicy 'hobbies', gdzie jest ['music', sightseeing], podajemy indeks zmienianego elementu:
student.hobbies[1] = 'spanie'
console.log(student.hobbies); // zwraca:
// [ 'music', 'spanie' ]

// 3. usuwanie właściwości obiektu możliwe jest dzięki 'delete':
delete student.age;
delete student.job;
console.log(student); // zwraca obiekt bez tych właściwości:
/*
{
  firstName: 'Marian',
  lastName: 'Wracz',
  githubProfile: 'wraczCoder',
  hobbies: [ 'music', 'spanie' ],
  isMarried: true,
  aspirations: [ 'pracować w Google', 'pracować jak najmniej' ],
  favoriteFood: 'pizza'
}
*/
// pdwołanie się do nich - próba ich pobrania - zwróci 'undefined':
console.log(student.job); //zwraca: undefined

// 3. sprawdzenie czy dana właściwość w obiekcie istnieje możliwe jest przez:
console.log( 'job' in student); // zwraca: false
console.log( 'hobbies' in student); // zwraca: true 
// UWAGA - nazwa sprawdzanej właściwości w cudzysłowie

// można też sprawdzić jakie w ogóle dany obiekt posiada nazwy właściwości (wszystkie od razu) przez 'Object.keys(nazwaObiektu)':
console.log( Object.keys(student) );
// co zwraca tablicę z samymi nazwami właściwości tu:
/*
['firstName', 'lastName', 'githubProfile', 'hobbies', 'isMarried', 'aspirations', 'favoriteFood']
*/

// 4. przekopiowanie własciwości z jednego obiektu do drugiego możliwe jest przez 'Object.assign(objDoKtóregoKopiujemy, objZKtóregoKopiujemy)':
let myFirstObject = {
  firstName: "Jarek",
  lastName: "Banach",
  age: 43,
  job: 'pisarz',
  hobbies: ['czytanie', 'pisanie', 'grafika'],
  isMarried: true,
  aspirations: ['nagroda Nike', 'nagroda Kościelskich']
}
let mySecondObject = {
  hasChildren: 3
}
// poniższy zapis wskazuje: do pierwszego argumentu dodaj (przekopiuj) własciwości drugiego argumentu:
Object.assign(myFirstObject, mySecondObject);
console.log(myFirstObject); // zwraca obiekt z dodatkową właściwością:
/*
{
  firstName: 'Jarek',
  lastName: 'Banach',
  age: 43,
  job: 'pisarz',
  hobbies: [ 'czytanie', 'pisanie', 'grafika' ],
  isMarried: true,
  aspirations: [ 'nagroda Nike', 'nagroda Kościelskich' ],
  hasChildren: 3
}
*/
// podczas gdy ten drugi pozostaje niezmieniony:
console.log(mySecondObject); // zwraca: { hasChildren: 3 }
