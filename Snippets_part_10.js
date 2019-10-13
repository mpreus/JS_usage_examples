/*
W części 10:

[1] Jak dostosować do regionu świata, gdzie strona jest używana sposób wyświetlania bardzo dużej liczby
[2] Jak zamienić wielowyrazowy string w tablicę składającą się z poszczególnych wyrazów

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


//





