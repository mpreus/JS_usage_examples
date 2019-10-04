// [1] Jak sprawdzić, czy wyrażenie funkcyjne spełnia jakieś proste kryterium dla wszytskich elementów tablicy:
const all = (arr, fn = Bollean) => arr.every(fn);
/* 'all' powyżej, to funkcja z dwoma argumentami: tablicą i boolean */
// w sprawdzeniach ponieżej też takie dwa argumenty, w tym zmienna (argument funkcji 'x' lub 'i'), reprezentująca elementy tablicy 
all([2, 3, 4, 5], x => x < 9);     // true
all([4, 5, 8, 77], i => i > 12);   // false


// [2] Jak sprawdzić, czy wszystkie elementy tablicy są jednakowe (równe sobie);
// wyrażenie funkcyjne jednoargumentowe, porównujące każdy element z pierwszym
const allEqual = array => array.every(val => val === array[0]);
// w sprawdzeniu poniżej proste tablice
allEqual([1, 1, 1, 1]);  // true
allEqual([2, 2, 3, 4]);  // false


// [3] Jak zmienić elementy tablic wewnętrznych (zagnieżdżonych) na stringi rozdzielone przecinkami (lub innym separatowem)
const arrayToCSV = (arr1, delimiter = ', ') => arr1.map(v => v.map(x => `"${x}"`).join(delimiter)).join('\n');
// powyżej argument 'delimiter' ustala znak rozdzielenia (tu: przecinek i spacja), a drugi 'join' ze znakiem '\n' dzieli wynik na kolejne linie wg kolejnych tablic wewnętrznych (zagnieżdżonych);
// dla poniższego przykładu z trzema tablicami zagnieżdżonymi...
arrayToCSV([ ['a', 'b', '1'], ['c', 'd', '2'], ['e', 'f', '3'] ]);
// ...rezultatem jest:
/*
`"a", "b", "1"
"c", "d", "2"
"e", "f", "3"`
*/
// z kolei w poniższym przykładzie dodajemy po przecinku argument, zmieniający znak rozdzielający:
arrayToCSV([ ['1', 'a', 'b'], ['2', 'c', 'd']], '; ');
// rezultatem jest więc:
/*
`"1"; "a"; "b"
"2"; "c"; "d"`
*/


// [4] Jak zamienić elementy tablicy w kolejne punkty listy i umieścić na stronie
/* Weźmy dwuargumentowe wyrażenie funkcyjne: (1) tablica z elementami do 'wylistowania' i (2) identyfikator listy;
niech to wyrażenie zwraca element do którego wstawimy listę (najlepiej 'ul' o określonym 'id'), a następnie jako treść tego elementu niech w pętli wstawia każdy z elementów tablicy jako 'li';
gdzie join('') usuwa przecinki rozdzielające elementy w tablicy */
const arrayToHtmlList = (arr2, listID) => 
  (el => (
    (el = document.querySelector('#' + listID)),
    (el.innerHTML += arr2.map(item => `<li>${item}</li>`).join(''))
  ))(); // wyrażenie funkcyjne jest samowywołujące, tzn. uruchamia się samo
// dla przykładu wywołanie z dowolną tablicą (zakomentowane z uwagi na brak konkrentego odniesienia i wywoływane błędy, co uniemożliwia wykonywanie kolejnych przykładów):
// arrayToHtmlList(['komputer', 'krzesło', 'biurko', 'kubek'], 'myListID');
// Dokładnie taki działający przykład w folderze 'list-from-array'


// [5] Jak policzyć średnią arytmetyczną z liczb umieszczonych w tablicy:
// wyrażenie funkcyjne jednoargumentowe (!) posługujące się wbudowaną metodą 'reduce()' z argumentem początkowym zero:
const average = (...nums) => nums.reduce((acc, val) => acc + val, 0 ) / nums.length;
// w przykładzie poniżej zastosowano operator rozproszenia
average(...[1, 33, 5]); // daje 13
// a tu nie:
average(1, 3, 5); // daje 3


// [6] Jak policzyć średnią arytmetyczną ze zbioru, na którego elementach najpierw wykonujemy jakąć funkcję
// wyrażenie funkcyjne dwuargumentowe: (1) tablica, (2) funkcja
// całość ma zwrócić średnią zmapowanych przez funkcję elementów tablicy 'arr3'
const averageBy = (arr3, fn) => {
  return arr3.map(typeof fn === 'function' ? fn : val => val[fn]).reduce((acc, val) => acc + val, 0) / arr3.length;
} 
// w poniższym przykładzie z każdego obiektu weź do obliczeń wartość klucza 'n'
averageBy([{n: 4}, {n: 2}, {n: 8}, {n: 6}], o => o.n); // daje 5
// w każdym takim obiekcie liczba kluczy ze swoimi wartościami może być więcej - drugi argument to funkcja wskazująca, wartość jakiego klucza wziąć do obliczeń

// w poniższym przykładzie drugi argument nie jest funkcją:
averageBy([{n: 4}, {n: 2}, {n: 8}, {n: 6}], 'n'); // też daje 5

// w poniższym przykładzie funkcja przemnaża każdą wartość przez wartość Pi i dopiero liczy średnią
averageBy([{n: 4}, {n: 1}, {n: 4}, {n: 3}], o => o.n * Math.PI); // daje 6


// [7] Jak rozdzielić elementy tablicy na dwie grupy, bazując na wartościach innej tablicy (tzw. filtrującej).
/* Jeśli element tablicy filtrującej jest 'true', to odpowiadający mu (wartość indeksu) element tablicy z istotną zawartością należeć będzie do pierwszej grupy, a w innym przypadku, należeć będzie do drugiej grupy
*/
/* Mamy wyrażenie funkcyjne dwuargumentowe: (1) tablica z zawartością, (2) tablica filtrująca, 
zwracające redukcję, która dla każdego elementu 'acc' sprawdza, czy jest 'true' (i wrzuca go do pierwszej tablicy), czy jest 'false' (i wrzuca go do drugiej tablicy) */
const bifurcate = (arr4, filter) => {
  return arr4.reduce((acc, val, i) => (acc[filter[i] ? 0 : 1].push(val), acc), [ [], [] ]);
}
// w poniższym przykładzie mamy dwie tablice: (1) z wartościami, (2) z ich klasyfikacją
bifurcate(['orange', 'apple', 'plum', 'tomato', 'pear'], 
          [true, true, true, false, true]);
// daje: [ [ 'orange', 'apple', 'plum', 'pear' ], [ 'tomato' ] ]
// czyli dwie tablice zagnieżdżone, gdzie w pierwszej są elementy skalsyfikowane jako prawdziwe, a w drugiej pozostałe

// dla poniższego przykładu...
bifurcate(['2', '3', '4', '-1', '5'], 
          [true, true, true, false, true]);
// mamy rezultat: [ [ '2', '3', '4', '5' ], [ '-1' ] ]

// jesli pamiętamy, że liczba 1 ma watrość 'true', a liczba 0 to 'false', można ich użyć jako klasyfikatorów:
bifurcate(['orange', 'green', 'yellow', 'black', 'blue'], 
          [1, 1, 1, 0, 1]);
// co daje: [ [ 'orange', 'green', 'yellow', 'blue' ], [ 'black' ] ]


// [8] Jak rozdzielić elementy tablicy na dwie grupy w oparciu o wskazane wyrażenie funkcyjne
/* Jeśli wyrażenie funkcyjne zwraca 'true', element jest wstawiany do pierwszej grupy, jeśli nie, będzie przydzileony do grupy drugiej */
const bifurcateBy = (arr5, fn) => {
  return arr5.reduce((acc, val, i) => (acc[fn(val, i) ? 0 : 1].push(val), acc), [ [], [] ]);
}
// w poniższym przykładzie rozdzielenie polega na sprawdzeniu, czy pierwszą literą elementu jast litera 'b'
bifurcateBy(['cafe', 'bar', 'restaurant', 'bistro', 'shop'], x => x[0] === 'b');
// co daje: [ [ 'bar', 'bistro' ], [ 'cafe', 'restaurant', 'shop' ] ]

// rozdzielenie polega na sprawdzeniu, czy element jest dłuższy niż 4 znaki
bifurcateBy(['cafe', 'bar', 'restaurant', 'bistro', 'shop'], x => x.length > 4);
// co daje: [ [ 'restaurant', 'bistro' ], [ 'cafe', 'bar', 'shop' ] 

// czy liczba jest większa od 4:
bifurcateBy([11, 23, 1, 8, 9], x => x > 4);
// co daje: [ [ 11, 23, 8, 9 ], [ 1 ] ]

// czy liczba jest podzielna przez 3:
bifurcateBy([12, 23, 1, 8, 9], x => x % 3 === 0);
// co daje: [ [ 12, 9 ], [ 23, 1, 8 ] ]

// czy liczba jest całkowita:
bifurcateBy([11, 23.4, 1, 8, 9], x => Number.isInteger(x));
// co daje: [ [ 11, 1, 8, 9 ], [ 23.4 ] ]










