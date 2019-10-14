/*
W części 8

[1] Jak wstawić string po jakimś elemencie strony internetowej
[2] Jak wstawić string przed jakimś elementem strony internetowej
[3] Jak sprawdzić czy testowany kod uruchamiamy w przeglądarce, czy poza nią (np. w środowisku Node)
[4] Jak sprawdzić czy posiadany string składa się wyłącznie z małych liter (lowercase)
[5] Jak sprawdzić czy posiadany string składa się wyłącznie z WIELKICH liter (uppercase)
[6] Jak sprawdzić czy posiadana wartość jest liczbą
[7] Jak sprawdzić czy posiadana wartość jest obiektem
[8] Jak sprawdzić czy posiadana wartość jest stringiem
[9] Jak sprawdzić czy posiadana wartość jest niezdefiniowana
*/


// [1] Jak wstawić string po jakimś elemencie strony internetowej
const insertAfter = (el, htmlString) => el.insertAdjacentHTML('afterend', htmlString);
// 'el' to element strony po którym wstawiamy swój własny (dodatkowy)
// metoda 'insertAdjacentHTML()' parsuje wskazany tekst do HTML lub XML i wstawia wynikający z niego węzeł struktury do drzewa DOM
// metoda 'insertAdjacentHTML()' jest znacznie szybsza od 'innerHTML', bo nie parsuje ponownie elementu na którym jest używana
// wenątrz nawiasu metody 'insertAdjacentHTML()' podaje się najpierw pozycję, a potem tekst do wstawienia ('afterend': by wstawić ZA elementem; 'beforebegin': PRZED samym elementem; 'afterbegin': wewnątrz elementu - przed jego pierwszym potomkiem; 'beforeend': wewnątrz elementu - po jego ostatnim potomku)
/* poniższy przykład zastosowania (wywołanie) jest zakomentowany, ponieważ nie ma tu konstekstu przeglądarki, co powoduje błąd; Aby przykład zadziałał, wystarczy użyć go w konsoli przeglądarki z otwartą dowolną stroną internetową. Poniżej zastosowane 'id' zostało użyte w jednej z podstron developer.mozilla.org */
/*
insertAfter(document.getElementById('Visualization_of_position_names'), '<p>akapit wstawiony po wskazanym elemencie struktury DOM</p>');
*/


// [2] Jak wstawić string przed jakimś elementem strony internetowej
const insertBefore = (el, htmlString) => el.insertAdjacentHTML('beforebegin', htmlString);
// dokładnie takie samo dwuargumentowe wyrażenie funkcyjne
// jedyną różnicą jest wskazanie innego miejsca w DOM - PRZED elementem o id='anyExistingId'
/*
insertBefore(document.getElementById('anyExistingId'), '<h3>Quite new headline</h3>');
*/
// wykomentowane z tego samego powodu


// [3] Jak sprawdzić czy testowany kod uruchamiamy w przeglądarce, czy poza nią (np. w środowisku Node)
const isBrowser = () => ![typeof window, typeof document].includes('undefined');
// wywołanie w przeglądarce zwraca: true, zaś w środowisku Node zwraca: false
isBrowser();


// [4] Jak sprawdzić czy posiadany string składa się wyłącznie z małych liter (lowercase)
const isLowerCase = str => str === str.toLowerCase();
isLowerCase('asd333&&fghjk'); // zwraca: true
isLowerCase('AdfgAh'); // zwraca: false
// wystarczy jeden znak


// [5] Jak sprawdzić czy posiadany string składa się wyłącznie z WIELKICH liter (uppercase)
const isUpperCase = str => str === str.toUpperCase();
isUpperCase('asdfghj444k'); // zwraca: false
isUpperCase('ADDD'); // zwraca: true
// każdy znak musi być napisany wielką literą


// [6] Jak sprawdzić czy posiadana wartość jest liczbą
const isNumber = (n) => {
  return !isNaN(parseFloat(n)) && isFinite(n);
}
// funkcja zwraca 'true' jeśli wartość nie jest "NIE-LICZBĄ" i jednocześnie jest uprawnioną, skończoną liczbą (a nie np.: +infinity, -infinity, NaN)
isNumber(4.55); //zwraca: true
isNumber('4'); //zwraca: true
isNumber('&'); // zwraca: false


// [7] Jak sprawdzić czy posiadana wartość jest obiektem
// przez porównanie posiadanej wartości z obiektem utworzonym z tą wartością:
const isObject = obj => obj === Object(obj);
isObject(1); // zwraca: false
isObject('abc'); // zwraca: false
isObject({}); // zwraca: true
isObject({key1: 3, key2: 'a'}); // zwraca: true
isObject([]); // zwraca: true
isObject(['a', 'ab', 'ac']); // zwraca: true
isObject(true); // zwraca: false

// [8] Jak sprawdzić czy posiadana wartość jest stringiem
const isString = val => typeof val === 'string';
isString('sdfghj'); // zwraca: true
isString(["ww"]); // zwraca: false
isString('33'); // zwraca: true
isString(33); // zwraca: false

// [9] Jak sprawdzić czy posiadana wartość jest niezdefiniowana
const isUndefined = val => val === undefined;
isUndefined(22); // zwraca: false
isUndefined(null); // zwraca: false
isUndefined(undefined); // zwraca: true
isUndefined('undefined'); // zwraca: false











