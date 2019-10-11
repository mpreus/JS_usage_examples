/*
W części 9

[1] Jak sprawdzić czy dwa obiekty zawierają te same pary 'klucz: wartość'
[2] Jak znaleźć największą liczbę w tablicy (lub kilka największych liczb w zbiorze)
[3] Jak znaleźć najmniejszą liczbę w tablicy (lub kilka najmniejszych liczb w zbiorze)
[4] Jak wygenerować przypadkową liczbę ze wskazanego zakresu
[5] Jak wygenerować przypadkową liczbę ze wskazanego zakresu
[6] Jak wygenerować tablicę ze wskazaną liczbą liczb całkowitych w ramach zdefiniowanego zakresu
[7] Jak zaokrąglić liczbę zmiennoprzecinkową do określonego miejsca po przecinku
[8] Jak pobrać przypadkową liczbę z podanej tablicy
*/


// [1] Jak sprawdzić czy dwa obiekty zawierają te same pary 'klucz: wartość'
const objMatch = (obj, source) => Object.keys(source).every(key => obj.hasOwnProperty(key) && obj[key] === source[key]);
// funkcja zwraca iloczyn logiczny dwóch wyrażeń: 1) wszystkie klucze obiektu źródłowego 'source' czy mają takie same jak w 'obj' oraz 2) czy wartości przypisane do tych kluczy są takie same
// zadeklarujmy dwa obiekty (kolejność kluczy nie ma znaczenia):
let objA = {age: 25, hair: "long", beard: true},
    objB = {hair: 'long', beard: true, age: 25};
objMatch(objA, objB); // zwraca: true
// dla innej pary obiektów:
let obj1 = {age: '25', hair: "long", beard: true},
    obj2 = {hair: 'long', beard: true, age: 25};
objMatch(obj1, obj2); // zwraca: false
// w obj1 podaliśmy wartość 'age' jako string i to wystarczy by obiekty nie były sobie równe


// [2] Jak znaleźć największą liczbę w tablicy (lub kilka największych liczb w zbiorze)
const biggestNumber = (arr, n) => [...arr].sort((a, b) => b - a).slice(0, n);
// dwuargumentowe wyrażenie funkcyjne: 1) tablica, 2) liczba określająca ile największych liczb ze zbioru chcemy zwrócić
// metoda 'sort()' przyjmuje tu funkcję sortującą 'od największej'
// a zwrócić mamy 'n' liczb z tablicy posortowanej malejąco, czyli od największej
// zwróćmy więc liczbę największą:
biggestNumber([1, 2, 3, 4, 5], 1); // zwraca: [ 5 ]

// lub trzy największe z zbioru:
biggestNumber([11, 25, 32, 14, 5, 44, 92, 22], 3); // zwraca: [ 92, 44, 32 ]
// UWAGA - jesli n >= arr.length funkcja zwraca całą tablicę posortowaną malejąco (od największych)
biggestNumber([11, 25, 32, 14, 5, 44, 92, 22], 9); 
// UWAGA - jeśli n < 0 funkcja zwraca tablicę posortowaną bez ostsnich (tu: namniejszych) |n| liczb
biggestNumber([11, 25, 32, 14, 5, 44, 92, 22], -2); 
// zwraca: [ 92, 44, 32, 25, 22, 14 ], czyli bez 11 i 5

// [3] Jak znaleźć najmniejszą liczbę w tablicy (lub kilka najmniejszych liczb w zbiorze)
const smallestNumber = (arr, n) => [...arr].sort((a, b) => a - b).slice(0, n);
// metoda 'sort()' przyjmuje tu funkcję sortującą 'od najmniejszej'
smallestNumber([1, 2, 3, 4, 5], 1); // zwraca: [ 1 ]
smallestNumber([11, 25, 32, 14, 5, 44, 92, 22], 3); // zwraca: [ 5, 11, 14 ]
// jesli n >= arr.length zwraca całą tablicę posortowaną rosnąco (od najmniejszych)
smallestNumber([11, 25, 32, 14, 5, 44, 92, 22], 9); 
smallestNumber([11, 25, 32, 14, 5, 44, 92, 22], -2); 
// zwraca: [ 5, 11, 14, 22, 25, 32 ], czyli bez 44 i 92


// [4] Jak wygenerować przypadkową liczbę ze wskazanego zakresu
const randomNumberInRange = (min, max) => Math.random() * (max - min) + min;
randomNumberInRange(2, 5); 
// zwraca przypadkową liczbę (zmiennoprzecinkową) z podanego zakresu
// np.: 3.084283356764249


// [5] Jak wygenerować przypadkową liczbę całkowitą ze wskazanego zakresu
const randomIntegerInRange = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
// argumentami są granice zakresu
randomIntegerInRange(0, 9); // zwraca np.: 5, albo 9, albo... (z zakresu od 0 do 9)
randomIntegerInRange(-15, 19); // z zakresu od -15 do 19


// [6] Jak wygenerować tablicę ze wskazaną liczbą liczb całkowitych w ramach zdefiniowanego zakresu
const randomIntArrayInRange = (min, max, n) => Array.from({length: n}, () => Math.floor(Math.random() * (max - min + 1)) + min);
// argumentami są granice zakresu i liczba elementów tablicy do wygenerowania
randomIntArrayInRange(11, 66, 3); // zwraca trójelementową tablicę z liczbami z zakresu od 11 do 66, np.: [ 60, 14, 52 ]
randomIntArrayInRange(-9, 66, 7);
// zwraca siedmioelementową tablicę z liczbami z zakresu od -9 do 66
// np.: [ 57,  2, -7, 64, 10, 45, 19 ]


// [7] Jak zaokrąglić liczbę zmiennoprzecinkową do określonego miejsca po przecinku
const roundNumber = (number, decimals) => Number(`${Math.round(`${number}e${decimals}`)}e-${decimals}`);
// argument 'number' to liczba do zaokrąglenia, a 'decimals' to porządana liczba miejsc po przecinku
roundNumber(4.234132283423026, 4); // zwraca: 4.2341
roundNumber(2.909561747325356, 2); // zwraca: 2.91
roundNumber(2.909561747325356, 0); // zwraca: 3

// z wbudowaną metodą Math.round() jest też prosta metoda dla dwóch miejsc po przecinku:
const roundMyNumber = (number) => Math.round(number * 100) / 100;
// ponieważ korzystamy z obiektu 'Math'
roundMyNumber(22.830482752); // zwraca: 22.83
roundMyNumber(43.839482752); // zwraca: 43.84

// wcześniej w tym celu używano metody najprostrzej z możliwych:
const toRoundTheNumber = (number, n) => Number(number.toFixed(n));
// konstruktor 'Number' ma za zadanie upewnić się, że rezultat będzie pełnoprawną liczbą (bez tego, metoda 'toFixed()' zwraca string, np.: '1.24')
toRoundTheNumber(1.2385678, 2); // zwraca: 1.24
toRoundTheNumber(99.237745678, 4); // zwraca: 99.2377


// [8] Jak pobrać przypadkową liczbę z podanej tablicy
const sampleNumber = arr => arr[Math.floor(Math.random() * arr.length)];
// zwracamy tu element tablicy z indeksem powstałym z wygenerowanej liczby pomnożonej przez długość tablicy i zaokrąglonej w dół do liczby całkowitej
sampleNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);
// zwraca np.: 0, albo: 6
sampleNumber([1, 2, 5, 6, 7, 8]);



