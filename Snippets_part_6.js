/*
W części 6

[1] [9 Oct] Jak dodać jedną tablicę (np. 'arr2') do innej (np. 'arr1') na jej końcu
[2] Jak wyczyścić tablicę przypisaną do 'const'
[3] Jak zwrócić elementy tablicy, które po zastosowaniu wobec każdego z nich określonej funkcji, istnieją jednocześnie 
(po zastosowaniu wobec każdego z nich określonej funkcji) w drugiej tablicy 
[4] Jak sprawdzić, który ciąg znaków w określonym stringu jest najdłuższy
[5] Jak sprawdzić czy dane słowo jest anagramem innego słowa (czyli zawierają te same litery w innej kolejności)
[6] [15 Oct] Jak sprawdzić czy wprowadzony argument jest iterowalny jak tablica
*/


// [1] Jak dodać jedną tablicę (np. 'arr2') do innej (np. 'arr1') na jej końcu
const arr1 = [1, 2, 3, 4];
const arr2 = [5, 6, 7, 8];

// na końcu 'arr1' dostawiamy 'arr2':
const bigArray1 = [1, 2, 3, 4, ...arr2];
console.log(bigArray1); // zwraca: [ 1, 2, 3, 4, 5, 6, 7, 8]
// lub:
const bigArray2 = [...arr1, ...arr2]; // zwraca to samo
bigArray2; // zwraca: [ 1, 2, 3, 4, 5, 6, 7, 8]
// podobnie, zmieniając kolejność, można wstawić 'arr1' na końcu 'arr2':
const bigArray3 = [...arr2, ...arr1];
bigArray3; // zwraca: [ 5, 6, 7, 8, 1, 2, 3, 4]


// [2] Jak wyczyścić tablicę przypisaną do 'const'
// zmiennych (stałych) przypisanych do 'const' nie można zmienić przypisując co innego, ale takie zmienne (stałe) można modyfikować
const arr3 = ['Alina', 'Olek', 'Aleksandra', 'Arkadiusz'];

arr3.length = 0;
console.log(arr3); // teraz zwraca pustą tablicę: []
// można też dopisać coś do takiej tablicy:
arr3.push(2); arr3.push(3);
arr3 // zwraca: [ 2, 3 ]


// [3] Jak zwrócić elementy tablicy, które po zastosowaniu wobec każdego z nich określonej funkcji, istnieją jednocześnie (po zastosowaniu wobec każdego z nich określonej funkcji) w drugiej tablicy 
const commonElemsByFn = (arrA, arrB, fn) => {
  const setOfElems = new Set(arrB.map(fn));
  return arrA.filter(x => setOfElems.has(fn(x)));
};
// funkcja z tablicy 'arrB' tworzy zestaw elementów (instancja obiektu 'set') i stosuje na jego elementach funkcję 'fn'
// następnie zwraca tablicę z takimi elementami 'arrA', które po zastosowaniu na nich funkcji 'fn' wytrzymują porównanie z zestawem utworzonym z 'arrB' 
commonElemsByFn([2.1, 1.2, 3.3], [2.3, 3.4, 4.1], Math.floor);
// zwraca: [ 2.1, 3.3 ]
// ponieważ zostaną zredukowane do (odpowiednio): 2 i 3, które to wartości po zredukowaniu występują w obu tablicach


// [4] Jak sprawdzić, który ciąg znaków w określonym stringu jest najdłuższy
let stringA = "mając dowolne zdanie lub dłuższy ciąg znaków chcemy znaleść najdłuższy wyraz i wiedzieć z ilu się składa znaków";
// dla określonego stringu zwróć najdłuższy wyraz i jego liczbę znaków
function longestWord(str) {
  let words = str.split(' '), // string wprowadzany w argumencie funckji rozdzielamy na słowa (części) wg spacji między nimi
      maxLength = 0,   // wartość początkowa największej długości
      word = '';       // wartość początkowa najdłuższego ciągu znaków
  for (let i = 0; i < words.length; i++) {
// dla każdego stringu jeśli jest dłuższy od największej długości...
    if (words[i].length > maxLength) {
        word = words[i];      // ...przypisz go do najdłuższego ciągu znaków...
        maxLength = words[i].length; // ...i wpisz jego długość jako największą długość
    }
  }
  return [word, maxLength]; // wynik zwróć w formie dwuelementowej tablicy
}
longestWord(stringA); // zwraca: [ 'najdłuższy', 10 ]
longestWord('niesamowity ciąg znaków'); // zwraca: [ 'niesamowity', 11 ]


// [5] Jak sprawdzić czy dane słowo jest anagramem innego słowa (czyli zawierają te same litery w innej kolejności)
// bierzemy pod uwagę dwa stringi (z założenia mają tę samą długość, ale najprawdopodobniej poprzestawiane litery)
const ifIsAnagram = (str1, str2) => {
  const normalize = str => str.toLowerCase()
  .replace(/[^a-z0-9]/gi, '')
  .split('')
  .sort()
  .join('');
// powyżej do stałej 'normalize' przypisujemy wyrażenie funkcyjne, które wykonuje kolejno wskazane metody, gdzie pierwsza zamienia string na same małe litery, a druga zamienia na nieprzerwany ciąg znaków składających się z małych liter i cyfr
  return normalize(str1) === normalize(str2);
};
ifIsAnagram('iceman', 'cinema'); // zwraca: true
ifIsAnagram('laktoza', 'zalotka'); // zwraca: true
ifIsAnagram('kino', 'kara'); // zwraca: false


// [6] Jak sprawdzić czy wprowadzony argument jest iterowalny jak tablica
const isArrayLike = obj => obj != null && typeof obj[Symbol.iterator] === 'function';
isArrayLike('jakiś string'); // zwraca: true
isArrayLike(NaN); // zwraca: false
isArrayLike(undefined); // zwraca: false







