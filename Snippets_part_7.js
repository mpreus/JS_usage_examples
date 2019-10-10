/*
W części 7

[1] Jak zaimplementować funkcję na każdym elemencie tablicy, począwszy od ostatniego (od prawej)
[2] Jak zaimplementować funkcję na każdej właściwości obiektu
[3] Jak pozyskać (i zapisać) nazwę funckji
[4] Jak pozyskać wartość stylu CSS zastosowanego do konkretnego elementu
[5] Jak sprawdzić, czy dane element strony (html) ma przypisaną określoną klasę
[6] Jak zwrócić pierwszy element z tablicy
[7] Jak sprawdzić indeksy określonego elementu tablicy nawet jeśli występuje w tablicy wielokrotnie
[8] Jak usunąc z tablicy kilka ostatnich elementów
[9] Jak utworzyć tablicę zawierającą elementy wspólne dwóch innych tablic
*/


// [1] Jak zaimplementować funkcję na każdym elemencie tablicy, począwszy od ostatniego (od prawej)
const forEachFromRight = (arr, callback) => arr.reverse().forEach(callback);
// kolejne metody zastosowane na tablicy: 'reverse()' - odwróć kolejność oraz 'forEach()' - dla każdego wykonaj przekazywaną w wywołaniu funkcję
let arrNumb = [1, 2, 3, 4, 5];
forEachFromRight(arrNumb, val => console.log(val * 1.5) );
// zwraca kolejne, odrębne wartości w odwróconej kolejności: 7.5, 6, 4.5, 3, 1.5
// warto zauważyć, że w pierwotnej tablicy odwrócona jest kolejność elementów
arrNumb; // zwraca tablicę: [ 5, 4, 3, 2, 1 ]

// odwróceniu kolejności elementów w pierwotnej tablicy można zapobiec poprzedzając zastosowane metody, metodą 'slice(0)' - z zerem, aby niczego nie usuwać:
const forEachFromRightbis = (arr, callback) => arr.slice(0).reverse().forEach(callback);
let arrNumbers = [11, 12, 13, 14, 15];
forEachFromRightbis(arrNumbers, val => console.log(val + 1) );
// zwraca kolejne, odrębne wartości w odwróconej kolejności: 16, 15, 14, 13, 12
arrNumbers; // zwraca tablicę pierwotną: [ 11, 12, 13, 14, 15 ]


// [2] Jak zaimplementować funkcję na każdej właściwości obiektu
const forEachProp = (obj, fn) => Object.keys(obj).forEach(key => fn(obj[key], key, obj));
// samo 'Object.keys(obj)' zwraca tablicę z kluczami obiektu (tu: [name, age, status])
// na niej wykonujemy kolejne metody - dla każdego klucza obiektu zastosuj funkcję trójargumentową
forEachProp({name: 'Mike', age: 22, status: 'active'}, value => console.log(value));
// zwraca kolejne wartości z kluczy: 'Mike', 22, 'active'
// przykład ten tylko wyświetla w konsoli te wartości, ale pokazuje to, że można tak zastosować inne funkcje:
const forEachPropBis = (obj, fn) => Object.keys(obj).forEach(key => fn(obj[key], key, obj));
forEachPropBis({h: 30, w: 22, l: 100}, value => console.log(value * 2));
// zwraca kolejne wartości pomnożone przez 2: 60, 44, 200


// [3] Jak pozyskać (i zapisać) nazwę funckji
const functionName = fn => (console.log(fn.name), fn);
functionName(Math.max); // zwraca: [Function: max]
functionName(Math.round); // zwraca: [Function: round]
functionName(parseInt); 


// [4] Jak pozyskać wartość stylu CSS zastosowanego do konkretnego elementu
const getStyle = (el, ruleName) => getComputedStyle(el)[ruleName];
/* wykomentowane ze względu na niemożność uruchomienia poza przeglądarką internetową
getStyle(document.querySelector('h1'), 'font-size');
*/
// wklejone do konsoli w przeglądarce internetowej (przy otwartej dowolnej stronie) pokaże wielkość nagłówka strony
// w moim przypadku: 44px


// [5] Jak sprawdzić, czy dane element strony (html) ma przypisaną określoną klasę
const hasThisClass = (el, className) => el.classList.contains(className);
/* wykomentowane ze względu na niemożność uruchomienia poza przeglądarką internetową
hasThisClass(document.querySelector('.container p'), 'header-meta');
*/
// wklejone do konsoli w przeglądarce internetowej (przy otwartej dowolnej stronie) pokaże 'true' lub 'false', potwierdzając lub zaprzeczając istnieniu wskazanej klasy przypisanej do wyszukanego elementu
// w moim przypadku zwróciło: true


// [6] Jak zwrócić pierwszy element z tablicy
const headElem = array => array[0];
headElem([2, 4, 6, 8, 10]); // zwraca: 2


// [7] Jak sprawdzić indeksy określonego elementu tablicy nawet jeśli występuje w tablicy wielokrotnie
const indexOfAllValues = (arr, val) => arr.reduce((acc, el, idx) => (el === val ? [...acc, idx] : acc), []);
// zwróci wszystkie indeksy w formie tablicy (jeśli wskazany element występuje raz lub więcej razy), albo pustą tablicę
indexOfAllValues([1, 2, 3, 1, 4, 5, 6, 7], 1); 
// zwraca tablicę indeksów wartości '1': [ 0, 3 ]
const indexOfAllValues1 = (arr, val) => arr.reduce((acc, el, idx) => (el === val ? [...acc, idx] : acc), []);
indexOfAllValues1([1, 2, 3, 1, 4, 5, 6, 7], 4); // zwraca: [ 4 ]
const indexOfAllValues2 = (arr, val) => arr.reduce((acc, el, idx) => (el === val ? [...acc, idx] : acc), []);
indexOfAllValues2([1, 2, 3, 1, 4, 5, 6, 7], 8); // zwraca: []


// [8] Jak usunąc z tablicy kilka ostatnich elementów
const lastElemsRemove = arr => arr.slice(0, -1);
// w metodzie 'slice()' ujemny drugi parametr wskazuje ile (licząc od końca) elementów usunąć
lastElemsRemove(['q', 'w', 'e', 'r', 't', 'y']);
// zwraca tablicę pomniejszoną o jeden (ostatni) element: [ 'q', 'w', 'e', 'r', 't' ]

const lastElemsRemove1 = arr => arr.slice(0, -3);
lastElemsRemove1(['q', 'w', 'e', 'r', 't', 'y']);
// zwraca tablicę pomniejszoną o trzy (ostatnie) elementy: [ 'q', 'w', 'e' ]


// [9] Jak utworzyć tablicę zawierającą elementy wspólne dwóch innych tablic
const commonElemsArray = (arrA, arrB) => {
// tworzymy nową instancję zbioru z elementami tablicy 
  const setOfElems = new Set(arrB);
  return arrA.filter(x => setOfElems.has(x));
};
commonElemsArray([1, 2, 3, 4, 5], [3, 4, 5, 6, 7, 8]); 
// zwraca: [ 3, 4, 5 ]
commonElemsArray(['Ida', 'Ada', 'Adam', 'Al', 'Ola'], ['Ola', 'Darek', 'Piotr', 'Ida']); 
// zwraca: [ 'Ida', 'Ola' ]
// kolejność występowania elementów w tablicach nie ma znaczenia
commonElemsArray([], []); // zwraca pustą tablicę




