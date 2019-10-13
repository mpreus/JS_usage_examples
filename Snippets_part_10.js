/*
W części 10:

[1] Jak dostosować do regionu świata, gdzie strona jest używana sposób wyświetlania bardzo dużej liczby
[2] Jak zamienić wielowyrazowy string w tablicę składającą się z poszczególnych wyrazów
[3] Jak pobrać z tablicy tylko unikalne elementy, tzn. jeśli któreś powtarzają się - pobrać każdy tylko raz
[4] Jak odfiltrować z tablicy wskazane elementy i pozostawić w niej tylko pozostałe
[5] Jak uzyskać połączenie dwóch tablic tak, by w wynikowej znalazły się elementy z obu tablicy, ale nie powtarzały się
[6] Jak uzyskać takie połączenie dwóch tablic, aby z wynikowej wykluczyć elementy powtarzające się czy to w jednej, czy w drugiej z tablic
[7] Jak uporządkować alfabetycznie wszystkie litery w stringu
*/

// [1] Jak dostosować do regionu świata, gdzie strona jest używana sposób wyświetlania bardzo dużej liczby
const toDecimalMark = number => number.toLocaleString('tr-TR');
toDecimalMark(65432145678.949505); 
// dla parametru 'es-ES' zwraca: '65.432.145.678,95'
// dla parametru 'pl-PL' zwraca: '65 432 145 678,95'
// dla parametru 'en-US' zwraca: '65,432,145,678.95'
// dla parametru 'tr-TR' zwraca: '65.432.145.678,95'
// skąd wziąć te parametry - z oznaczeń regionów używanych w deklaracjach języka i kraju dla html
// ISO 639-1 defines abbreviations for languages.
// https://www.w3schools.com/tags/ref_language_codes.asp


// [2] Jak zamienić wielowyrazowy string w tablicę składającą się z poszczególnych wyrazów
const wordsArray = (str, pattern = /[^a-zA-Z-]+/) => str.split(pattern).filter(Boolean);
// jako argumenty: 1) string, który chcemy zamienić na tablicę oraz 2) wzór wg którego chcemy to zrobić
// we wzorze: wyrażenie regularne, obejmujące litery małe i duże, w tym powtarzające się
wordsArray('Nie ma portfeli tu, 1 bo to jest, to jest mięsny sklep');
// zwraca: [ 'Nie', 'ma', 'portfeli', 'tu', 'bo', 'to', 'jest', 'to', 'jest', 'mi', 'sny', 'sklep']
/* widaż, że jedynka w środku zdania została zignorowana 
i że zwykłe wyrażenie regularne nie radzi sobie z polskimi znakami diakrytycznym */
wordsArray('All characters except those 3with 44 special meaning.');
// tu już nie ma niespodzianek - wszystkie 'nie-litery' zostały zignorowane; zwraca: 
/*
['All', 'characters', 'except', 'those', 'with', 'special', 'meaning']
*/


// [3] Jak pobrać z tablicy tylko unikalne elementy, tzn. jeśli któreś powtarzają się - pobrać każdy tylko raz
const uniqueElements = arr => [...new Set(arr)];
// jednowargumentowe wyrażenie funkcyjne zwracające tablicę z nową instancją 'Set()' od przekazywanej tablicy
// Warto przypomnieć, ze 'Set()' jest to zbiór (kolekcja) unikalnych elementów dowolnego rodzaju, tzn. w jednym zbiorze mogą być stringi, liczby, tablice, ale żaden z nich nie może się powtarzać
uniqueElements([1, 2, 3, 1, 4, 5, 4]); 
// zwraca tablicę: [ 1, 2, 3, 4, 5 ]
uniqueElements([2, 2, 2, 2, 2, [], 22, 'rad']);
// zwraca: [ 2, [], 22, 'rad' ]


// [4] Jak odfiltrować z tablicy wskazane elementy i pozostawić w niej tylko pozostałe
const arrayWithoutElems = (arr, ...args) => arr.filter(v => !args.includes(v));
arrayWithoutElems([1, 3, 'hope', 63, 'is', 4, 'important'], 63, 1, 3, 4 );
// zwraca tablicę pozbawioną wskazanych elementów (bez względu na kolejność ich wskazania): [ 'hope', 'is', 'important' ]


// [5] Jak uzyskać połączenie dwóch tablic tak, by w wynikowej znalazły się elementy z obu tablicy, ale nie powtarzały się
const union = (arrA, arrB) => Array.from(new Set([...arrA, ...arrB]));
// tworzymy więc tablicę z nowej instancji 'Set()' tworzonej z połączenia dwóch tablic
union([1, 2, 3, 4, 5], [4, 5, 'Ala']);
// zwraca: [ 1, 2, 3, 4, 5, 'Ala' ]
// gdzie z drugiej tablicy jest tylko string 'Ala', bo pozostałe występują już w pierwszej


// [6] Jak uzyskać takie połączenie dwóch tablic, aby z wynikowej wykluczyć elementy powtarzające się czy to w jednej, czy w drugiej z tablic
const newArrayFromDiff = (arr1, arr2) => [...new Set([...arr1.filter(v => !arr2.includes(v)), ...arr2.filter(v => !arr1.includes(v)) ]) ];
// tworzymy nową instancję Set() z przefiltrowanej tablicy pierwszej (tak, aby nie było w niej elementów takich jak w tablicy drugiej) i przefiltrowanej tablicy drugiej (tak, aby nie było w niej elementów takich jak w tablicy pierwszej)
// w przykładzie użyjemy tego samego zbioru, co poprzedni, by zobaczyć różnice w działaniu
newArrayFromDiff([1, 2, 3, 4, 5], [4, 5, 'Ala']);
// zwraca: [ 1, 2, 3, 'Ala' ]
// elementy 4 i 6 występują w obu tablicach, dlatego w wynikowej ich nie ma 


// [7] Jak uporządkować alfabetycznie wszystkie litery w stringu
const sortCharactersInString = str => [...str].sort((a, b) => a.localeCompare(b)).join('');
// metoda 'localeCompare()' porównuje lokalnie stringi i zwraca liczbę odpowiadającą wynikowi porównania, np. dla liter 'a' i 'b': a.localeCompare(b) zwraca -1 (lub inną ujemną liczbę)
// jeśli string na którym działamy poprzedza alfabetycznie string w argumencie - liczba ujemna, jeśli jest odwrotnie - dodatnie, jeśli są tożsame - zero
sortCharactersInString('alfabet'); // zwraca: 'aabeflt'
sortCharactersInString('alfanumerycznie'); // zwraca: 'aaceefilmnnruyz'
sortCharactersInString('1lf5bet'); // zwraca: '15beflt' bo domyślnie cyfry poprzedzają litery
sortCharactersInString('Alfannumerycznie Tego Nie Przetworzysz'); 
// ponieważ domyślnie wielkość liter nie ma znaczenia, zwraca: aaceeeeefgiilmnnNNooprrrsttuwyyzzzz' gdzie jednak widać, że litery małe poprzedzają wielkie




