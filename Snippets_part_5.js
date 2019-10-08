// W części 5:

// [1] Jak utworzyć tablicę z kilku elementów pierwotnej tablicy pozostałych po usunięciu z jej LEWEJ strony n elementów
// [2] Jak utworzyć tablicę z kilku elementów pierwotnej tablicy pozostałych po usunięciu z jej PRAWEJ strony n elementów
// [3] Jak usuwać elementy z PRAWEJ strony tablicy (od końca) aż do zwrócenia przez określoną funkcję 'true'
// [4] Jak wycinać elementy z tablicy, aż do spełnienia funkcyjnego warunku 'true'
// [5] Jak sprawdzić czy element nadrzędny zawiera dany element podrzędny
// [6] Jak usunąć powtarzające się elementy z tablicy (i zostawić te, które występują tylko raz)
// [7] Jak zwrócić pierwszy klucz (z obiektu) spełniający określoną funkcję
// [8] Jak zwrócić ostatni element tablicy spełniający określoną funkcję


// [1] Jak utworzyć tablicę z kilku elementów pierwotnej tablicy pozostałych po usunięciu z jej LEWEJ strony n elementów
const newArrayFromLeft = (arr1, n) => arr1.slice(n);
// argumenty to: tablica i n - liczba elementów
// usuńmy z przykładowej tablicy 3 elementy: 
newArrayFromLeft([1, 2, 3, 4, 5], 3); // zwraca: [ 4, 5 ]
// ...albo tylko 1:
newArrayFromLeft([9, 11, 2, 3, 4, 5], 1); // zwraca: [ 11, 2, 3, 4, 5 ]
// jeśli liczba usuwanych elementów zrówna się (lub przekroczy) z liczbą elementów tablicy pierwotnej, wynikiem będzie pusta tablica:
newArrayFromLeft([1, 2, 3, 4, 5, 6], 6); // zwraca: []


// [2] Jak utworzyć tablicę z kilku elementów pierwotnej tablicy pozostałych po usunięciu z jej PRAWEJ strony n elementów
const newArrayFromRight = (arr2, n) => arr2.slice(0, -n);
// usuńmy 3 elementy z prawej strony:
newArrayFromRight([1, 2, 3, 4, 5], 3); // zwraca: [ 1, 2 ]
// ...albo jeden:
newArrayFromRight([9, 11, 2, 3, 4, 5], 1); // zwraca: [ 9, 11, 2, 3, 4 ]
newArrayFromRight([1, 2, 3, 4, 5, 6], 6); // zwraca: []


// [3] Jak usuwać elementy z PRAWEJ strony tablicy (od końca) aż do zwrócenia przez określoną funkcję 'true'
const newArrayFromRigthUntil = (arr3, func) => {
// aż do spełnienia warunku by długość zbioru > 0 
// i jednocześnie funkcja 
  while ( arr3.length > 0 && !func(arr3[arr3.length - 1]) ) 
  arr3 = arr3.slice(0, -1);
  return arr3;
}
// z zadanej tablicy wycinajmy elementy z prawej, aż po lewej zostanie n elementów
newArrayFromRigthUntil([1, 2, 3, 4, 5, 6, 7], n => n < 3); 
// zwraca: [ 1, 2 ] bo wycinaliśmy aż zostały 2 elementy
newArrayFromRigthUntil([1, 2, 3, 4, 5, 6, 7], n => n < 6); 
// zwraca: [ 1, 2, 3, 4, 5 ] bo wycinaliśmy aż zostało 5 elementów


// [4] Jak wycinać elementy z tablicy, aż do spełnienia funkcyjnego warunku 'true'
const newArrayUntil = (arr4, func) => {
  while ( arr4.length > 0 && !func(arr4[0]) )
    arr4 = arr4.slice(1); // wycinaj zawsze po jednym elemencie
  return arr4;
}
// dla przykładowej tablicy wycinaj elementy aż ich wartość zrówna się z 3:
newArrayUntil([0, 1, 2, 3, 4, 5, 6, 7], n => n >= 3);
// zwraca: [ 3, 4, 5, 6, 7 ]
newArrayUntil([1, 2, 3, 4, 5, 6, 7], n => n >= 6);
// zwraca: [ 6, 7 ]


// [5] Jak sprawdzić czy element nadrzędny zawiera dany element podrzędny
const elementContains = (parent, child) => parent !== child && parent.contains(child);
//
elementContains(document.querySelector('head'), document.querySelector('title')); 
// zwraca: true
elementContains(document.querySelector('body'), document.querySelector('body')); 
// zwraca: false, bo elementy są jednakowe


// [6] Jak usunąć powtarzające się elementy z tablicy (i zostawić te, które występują tylko raz)
const filterForUniqueOnly = arr5 => arr5.filter(i => arr5.indexOf(i) === arr5.lastIndexOf(i));
// jednoargumentowe wyrażenie (tablica) zwraca tak przefiltrowaną tablicę, by dla każdego i porównać indeks i z tablicy z ostatnim indeksem i
filterForUniqueOnly([1, 2, 2, 3, 4, 5, 5, 5, 6]);
// zwraca: [ 1, 3, 4, 6 ]
// sprawdza się też przy eliminowaniu stringów:
filterForUniqueOnly(['da', 'dar', 'da', 'dur', 'dir', 'dir', 'da']);
// zwraca: [ 'dar', 'dur' ], bo pozostałe elementy występują wielokrotnie


// [7] Jak zwrócić pierwszy klucz (z obiektu) spełniający określoną funkcję
const findFirstElem = (obj, fn) => Object.keys(obj).find(key => fn(obj[key], key, obj));
// wyrażenie dwuargumentowe (obiekt i funkcja), zwracające z obiektu znaleziony wśród kluczy, taki klucz, by spełniał warunek określony funkcją 
findFirstElem(
  {
    barney: {age: 36, active: true},
    fred: {age: 40, active: false},
    pebbles: {age:1, active: true}
  },
  o => o['active']
);
// zwraca: 'barney'


// [8] Jak zwrócić ostatni element tablicy spełniający określoną funkcję
const findLastElem = (arr6, fn) => arr6.filter(fn).pop();
// metoda arr.pop() usuwa ostatni element z tablicy zwracając go
const arr6 = [1, 2, 3, 4, 5];
// przefiltruj i zwróć ostatni
findLastElem(arr6, n => n % 2 === 1);
// zwraca: 5, bo to ostatni element spełniający warunek
findLastElem([1, 2, 3, 4, 5], n => n % 2 === 0);
// zwraca: 4, bo to ostatni element spełniający warunek


 







