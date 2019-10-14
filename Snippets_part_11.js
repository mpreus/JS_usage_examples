/*
W części 11:

[1] Jak odciąć z końca stringu taką liczbę znaków, by string miał pożądaną długość
[2] Jak przekonwertować wartość w liczbę całkowitą obsługiwaną przez JS
[3] Jak zwrócić wszystkie elementy tablicy poza ściśle zdefiniowanymi (np. jako niepotrzebne)
[4] [15 Oct] Jak odwrócić kolejność liter w stringu:
*/

// [1] Jak odciąć z końca stringu taką liczbę znaków, by string miał pożądaną długość
// sprawdzamy czy długość stringu 'str' jest dłuższa niż wskazana liczba znaków 'n', która ma zostać zwrócona
// zwróć string obcięty do wskazanej długości, dodaj na końcu stringu trójkropek
const truncateString = (str, numberOfChar) => str.length > numberOfChar ? str.slice(0, numberOfChar ) + '...' : str;
truncateString('macierz', 5); // zwraca: 'macie...'
// jest tu wskazane 5 znaków + trójkropek

// dodanie trójkropka jest opcjonalne i zwiększa długość stringu, ale wystarczy zrezygnować z funkcji dodawania:
const truncateString1 = (str, numberOfChar1) => str.length > numberOfChar1 ? str.slice(0, numberOfChar1 ) : str;
truncateString1('macierz', 3); // zwraca: 'mac'

// opcja: wskazanie w wyrażeniu funkcyjnym liczbę znaków jaka ma pozostać wraz z trójkropkiem:
const truncateString2 = (str, numberOfChar2) => str.length > numberOfChar2 ? str.slice(0, numberOfChar2 > 3 ? numberOfChar2 - 3 : numberOfChar2) + '...' : str;
truncateString2('magistrant', 4); //zwraca: 'm...'
// są tu wskazane 4 znak wraz z trójkropkiem


// [2] Jak przekonwertować wartość w liczbę całkowitą obsługiwaną przez JS
const toSafeInteger = num => Math.round(Math.max(Math.min(num, Number.MAX_SAFE_INTEGER), Number.MIN_SAFE_INTEGER));
// znajduje najbliższą bezpieczną wartość
toSafeInteger(3.35); // zwraca: 3
toSafeInteger('3.95'); // też zwraca liczbę: 4
toSafeInteger(Infinity); // zwraca największą dopuszczalną liczbę w JS: 9007199254740991
// warto wiedzieć:
Number.MAX_SAFE_INTEGER; // zwraca właśnie powyższą liczbę (2^53 - 1), czyli: Math.pow(2, 53) - 1;
Number.MIN_SAFE_INTEGER; // zwraca: -9007199254740991


// [3] Jak zwrócić wszystkie elementy tablicy poza ściśle zdefiniowanymi (np. jako niepotrzebne)
const excludeRedundantElems = fn => (...args) => !fn(...args);
// spośród zbioru argumentów wykluczamy elementy zdefiniowane przez funkcję

// wykluczmy np. liczby parzyste
let myFirstArray = [1, 2, 3, 4, 5, 6, 7, 8]; 
myFirstArray.filter(excludeRedundantElems(n => n % 2 === 0));
// zwraca: [ 1, 3, 5, 7 ]

// wykluczmy z tablicy wszystkie liczby:
let mySecondArray = ['Adam', 1, 2, 3, "Waldemar", 'Jadwiga', true, 33];
mySecondArray.filter(excludeRedundantElems(m => typeof m === 'number'));
// zwraca: [ 'Adam', 'Waldemar', 'Jadwiga', true ]


// [4] Jak odwrócić kolejność liter w stringu:
const reverseString = str => [...str].reverse().join('');
let stringToTest = 'kwatermistrzostwo'
reverseString(stringToTest);
// zwraca: 'owtsozrtsimretawk'

// opcja: rozdzielić litery odwróconego stringu przecinkami (i spacją dla lepszej czytelności):
const reverseStringWithComas = str => [...str].reverse().join(', ');
reverseStringWithComas(stringToTest);
// zwraca: 'o, w, t, s, o, z, r, t, s, i, m, r, e, t, a, w, k'
// to jednak wciąż jeden string

// jak wrzucić litery w odwrócej kolejności do tablicy, jako jej elementy
const reverseStringWithComasToArray = str => Array.from([...str].reverse().join(''));
// to nie trzeba żadnego separatora w 'join()', ponieważ 'Array.from()' sama go wstawia
reverseStringWithComasToArray(stringToTest);
// zwraca tablicę z poszczególnymi literami: 
// ['o', 'w', 't', 's', 'o', 'z', 'r', 't', 's', 'i', 'm', 'r', 'e', 't', 'a', 'w', 'k']
// Ważne - metoda 'Array.from()' jako argument przyjmuje obiekty iterowalne - podobne do tablicy, mające właściwość 'length'















