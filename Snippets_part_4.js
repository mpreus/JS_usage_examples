/* W części 4:

[1] Jak spłaszczyć tablicę z tablicami zagnieżdżonymi do jednego poziomu, zachowując wszystkie wartości (rekurencyjnie, czyli stopniowo zmniejszając poziomy zagnieżdżenia)
[2] [2] Jak spłaszczyć tablicę z tablicami zagnieżdżonymi o podaną liczbę poziomów
[3] Jak przypisać wartości domyślne wszystkim właściwościom (kluczom) w obiekcie wyjściowym, nawet jeśli są niezdefiniowane czy występują wielokrotnie
[4] Jak wstrzymać wykonanie funkcji do czasu wykonanie wszystkich innych zaplanowanych czynności
[5] Jak zamienić miarę kątową ze stopni na radiany
[6] Jak automatycznie wskazać które elementy tablicy nie występują w innej tablicy
[7] Jak automatycznie wskazać które elementy tablicy nie występują w innej tablicy, po zastosowaniu wobec niej określonej funkcji
[8] Jak wyodrębnić elementy tablicy zgodnie z funkcją porównującą ją z drugą tablicą
[9] Jak automatycznie utworzyć tablicę składającą się z poszczególnych cyfr zadanej liczby
[10] Jak obliczyć odległość między dwoma punktami, dysponując ich współrzędnymi
*/


// [1] Jak spłaszczyć tablicę z tablicami zagnieżdżonymi do jednego poziomu, zachowując wszystkie wartości (rekurencyjnie, czyli stopniowo zmniejszając poziomy zagnieżdżenia)
const deepFlatten = arr => [].concat(...arr.map(v => (Array.isArray(v) ? deepFlatten(v) : v)));
// w jednoargumentowym wyrażeniu funkcyjnym zwracamy tablicę do której wrzucamy kolejne elementy tablicy początkowej zmapowane w ten sposób, że dla każdego elementu sprawdzamy czy jest on tablicą (wówczas likwiduje zagnieżdżenie, wydobywając wartość elementu), czy nie jest tablicą (wówczas wrzucamy wartość tego element)
deepFlatten([ 1, [2], [ [3], 4 ], 5, [6] ]); 
// otrzymamy zwykłą tablicę (jednopoziomową): [ 1, 2, 3, 4, 5, 6 ]
/* Podobnie można spłaszczyć tablicę z zagnieżdżonymi tablicami 
tylko o określony poziom, np. o jeden lub dwa
*/

// [2] Jak spłaszczyć tablicę z tablicami zagnieżdżonymi o podaną liczbę poziomów
const flatten = (arr1, depth = 1) => arr1.reduce((a, v) => a.concat(depth > 1 && Array.isArray(v) ? flatten(v, depth -1) : v), []);
flatten([1, [2], 3, 4]); // zwraca: [ 1, 2, 3, 4 ]
flatten([1, [2, [3, [4, 5], 6], 7], 8]); // zwraca tablicę o jeden poziom mniej zagnieżdżoną niż ta pierwotna: [ 1, 2, [ 3, [ 4, 5 ], 6 ], 7, 8 ]
/* gdyby w wyrażeniu funkcyjnym 'flatten()' zmienić wartość drugiego argumentu na depth = 3, 
w obu przykładach otrzymalibyśmy zwykłe tablice jednego poziomu */


// [3] Jak przypisać wartości domyślne wszystkim właściwościom (kluczom) w obiekcie wyjściowym, nawet jeśli są niezdefiniowane czy występują wielokrotnie
const defaults = (obj, ...defs) => Object.assign( {}, obj, ...defs.reverse(), obj );
// tworzy jeden obiekt wyjściowy z parami 'klucz: wartość', przyjmując wszystkie klucze bez względu na ich liczbę, biorąc wartość z pierwszego wystąpienia danego klucza
defaults( {a: 1, y: 5}, {b: null}, {b: 2}, {a: undefined}, {a: 'type'}, {y: undefined}, {c: 0});
// zwraca: { a: 1, y: 5, c: 0, b: null }


// [4] Jak wstrzymać wykonanie funkcji do czasu wykonanie wszystkich innych zaplanowanych czynności
const defer = (fn, ...args) => setTimeout(fn, 1000, ...args);
// dwuargumentowe (funkcja i reszta argumentów) wyrażenie funkcyjne zwracające po określonym czasie funkcję oraz (bezzwłocznie) pozostałe argumenty
defer(console.log, 'a'), console.log('b'), console.log("Czekamy..."), console.log("...i jeszcze");
// zwraca najpierw 'b', komunikat: 'Czekamy...' i kolejny: '...i jeszcze', a po jednej sekundzie 'a'
// UWAGA - dla prawidłowego ustawienia kolejności, jako drugi argument w setTimeout wystarczy wstawić '1', bo taka zwłoka wystarczy dla samego ustawienia kolejności


// [5] Jak zamienić miarę kątową ze stopni na radiany
const degreesToRads = deg => (deg * Math.PI) / 180.0;
degreesToRads(90.0) // zwraca: 1.5707963267948966
// Jeden radian jest kątem o wierzchołku w środku okręgu, wyznaczonym przez łuk o długości równej promieniowi okręgu.


// [6] Jak automatycznie wskazać które elementy tablicy nie występują w innej tablicy
// dwuargumentowe wyrażenie funkcyjne, zwracające wynik filtrowania (tablicę) wskazujący ten element pierwszej tablicy ('a'), którego nie ma w drugiej ('b')
const arrayDiff = (a, b) => {
  // ustanawiamy nową instancję obiektu 'Set()' z wartością 'b'
  const s = new Set(b);
  // filtrujemy tablicę 'a' tak, aby dla każdego jej elementu sprawdzić, że nie ma go w drugiej
  return a.filter(x => !s.has(x));
}
// obiekt Set() to kolekcja wartości, przyjmująca dowolne elementy, w tym inne obiekty, ale każdy element może występować w nim tylko raz!
arrayDiff([1, 2, 3, 4, 5], [2, 4, 6, 7, 8])
// zwraca: [ 1, 3, 5 ]
// metoda 'has(value)' zwraca 'true'/'false' w zależności od tego czy dana wartość występuje w danym Set() czy nie


// [7] Jak automatycznie wskazać które elementy tablicy nie występują w innej tablicy, po zastosowaniu wobec niej określonej funkcji
// trójargumentowe wyrażenie funkcyjne (pierwsze dwa to zbiory do porównania, a trzecim jest funkcja)
const arrayDiffByFn = (a, b, fn) => {
  const v = new Set(b.map(fn)); 
// nowa instancja zawierająca drugi (zmapowany) zbiór
// filtrujemy tablicę 'a' tak, aby dla każdego jej elementu sprawdzić, że nie ma go w drugiej:
  return a.filter( x => !v.has(fn(x)) );
}
arrayDiffByFn([2.1, 3.2, 5.6], [2.3, 3.9, 7], Math.floor);
// zwraca: 5.6, bo tylko ten element pierwszej tablicy, po jego zaokrągleniu w dół, nie znajduje odpowiednika w drugiej tablicy 
arrayDiffByFn([2.1, 3.2, 5.6], [2.3, 3.9, 7], z => z); 
// zwraca: pierwszą tablicę, bo funkcja 'de facto' nic nie robi
// podobnie dla zbioru obiektów:
arrayDiffByFn([{x: 2}, {x: 1}], [{x: 1}], w => w.x );
// zwraca: [{x: 2}]


// [8] Jak wyodrębnić elementy tablicy zgodnie z funkcją porównującą ją z drugą tablicą
const arrayDiffWith = (arr2, arr3, comp) => arr2.filter(a => arr3.findIndex(b => comp(a, b)) === -1);
// wyrażenie funkcyjne zwraca wynik przefiltrowania tablicy pierwszej pod kątem wykluczenie istnienia (wartość: -1) indeksów takich elementów w tablicy drugiej, które nie istnieją w tablicy pierwszej
arrayDiffWith([1, 1.2, 1.5, 3, 0], [1.9, 3, 0], (a, b) => Math.round(a) === Math.round(b));
// zwraca: [1, 1.2]
// powyżej w pierszej tablicy 1.5 zaokrągli sie do 2 i w drugiej 1.9 tak samo
// tak więc w tablicy drugiej nie ma tych zwróconych elementów 
/* 
UWAGA - Math.round(x) zaokrągla parametr do liczby całkowitej w dół, jeśli wartość po przecinku nie osiąga połówki, i w górę jesli ją osiąga lub przekracza: 
Math.round(2.9) zwróci 3 
*/


// [9] Jak automatycznie utworzyć tablicę składającą się z poszczególnych cyfr zadanej liczby
const digitize = n => [...`${n}`].map(i => parseInt(i));
// dla zadanej liczby 'n' zwróć tablicę składającą się z wszystkich cyfr tej liczby
// parsowanie całości tablicy zapewni, że będą to liczby
// bez tego będą to jednocyfrowe stringi
digitize(54321); // zwraca: [ 5, 4, 3, 2, 1 ]
digitize(456789543); 
// zwraca: [ 4, 5, 6, 7, 8, 9, 5, 4, 3 ]


// [10] Jak obliczyć odległość między dwoma punktami, dysponując ich współrzędnymi
const distance = (x0, y0, x1, y1) => Math.hypot(x1 - x0, y1 - y0);
distance(1, 1, 2, 2); // zwraca: 1.4142
// w przykładzie wszystkie boki są równe, więc odleglość między punktem x0-y0 a x1-y1 będzie równa przekątnej kwadratu o jednostkowej długości boku, czyli pierwiastek kwadratowy z 2
// inne dane:
distance(1, 2, 3, 3); // zwraca: 2.2360
/*
JavaScriptowa metoda Math.hypot() zwraca pierwiastek kwadratowy z sumy kwadratów argumentów - długość przeciwprostokątnej w trójkącie prostokątnym
*/

/* 
UWAGA - jednosekundowa zwłoka z zadania 3 będzie rozpoczynała sie po wykonaniu wszystkich przykładów w danym pliku, występujących po zdefiniowaniu: 
const defer = (fn, ...args) => setTimeout(fn, 1000, ...args);
*/







