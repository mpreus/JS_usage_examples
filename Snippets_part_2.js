/*
W tej części: Part 2:
[1] Jak sprawdzić czy dół strony internetowej jest widoczny na ekranie
[2] Jak rozponać wielkość stringu w baitach (bytes)
[3] Jak zmienić pierwszą literę stringu na wielką 
[4] Jak zmienić każdą pierwszą literę w stringu wielowyrazowym na wielką
[5] Jak zmienić pierwszą literę stringu na małą
[6] Jak zmienić dowolny element w tablicę
[7] Jak usunąć javascriptowe wartości fałszywe z tablicy
[8] Jak automatycznie zliczyć wszystkie elementy danej wartości w tablicy 
*/


// [1] Jak sprawdzić, czy dół strony internetowej jest widoczny na ekranie
// bezargumentowe wyrażenie funkcyjne zwracające wynik Boolean sprawdzenia prostego porównania
const bottomVisible = () => {
  return document.documentElement.clientHeight + window.scrollY >= (document.documentElement.scrollHeight || document.documentElement.clientHeight);
}
bottomVisible();
// tak skonstruowana funkcja działa wyłącznie raz, w czasie uruchomienia

// aby dynamicznie sprawdzać (na bieżąco), czy dół strony jest widoczny w danym momencie:
function checkVisibility() {
		let scrollSize = document.documentElement.scrollTop;
		if (scrollSize > 100) {
			console.log( bottomVisible() );
			return bottomVisible();
		}
	}
document.addEventListener("scroll", checkVisibility); 
/*
Powyższy przykład jako działający w przeglądarce w folderze 'bottom-of-page-visible'
*/


// [2] Jak rozponać wielkość stringu w baitach (bytes)
const byteSize = myString => new Blob([myString]).size;
/* Blob (Binary Large Object) jest pliko-podobnym obiektem reprezentującym jakiś fragment danych (bajtów). 
Powyżej użyliśmy konstruktora obiektu, którego pierwszą wartością musi być tablica. W niej można użyć dowolnych danych, np. stringu/stringów, liczb itp. (również w zagnieżdżonych tablicach). 
Jedną z dostępnych metod obiektu jest 'size', zwracająca długość blobu w bajtach.*/
byteSize(":-)"); // zwraca: 3
byteSize("Helo, World"); // zwraca: 11


// [3] Jak zmienić pierwszą literę stringu na wielką 
const capitalize = ([first, ...rest]) => first.toUpperCase() + rest.join('');
// użyjmy wyrażenia funkcyjnego dwuargumentowego, wydzielając jako pierwszy argument pierwszą literę; Tę pierwszą kapitalizujemy i dodajemy resztę jak było, bez spacji
capitalize('main Square'); // zwraca: 'Main Square'
// Pamiętać należy, że można to zrobić przez dodanie do konkretnego akapitu odpowiedniej klasy w CSS, gdzie damy 'text-transform: capitalize'


// [4] Jak zmienić każdą pierwszą literę w stringu wielowyrazowym na wielką
const capitalizeEveryWord = myImportantString => {
  return myImportantString.replace(/\b[a-z]/g, char => char.toUpperCase());
}
capitalizeEveryWord("pragmatyczny programista"); // zwaca: "Pragmatyczny Programista"


// [5] Jak zmienić pierwszą literę stringu na małą
const decapitalize = ([first, ...rest]) => first.toLowerCase() + rest.join('');
// Ten sam mechanizm jak powyżej, jedynie metoda 'toLowerCase()'
decapitalize('Mój świat'); // zwraca: 'mój świat'


// [6] Jak zmienić dowolny element w tablicę
const castArray = anyValue => (Array.isArray(anyValue) ? anyValue : [anyValue]);
// jednoargumentowe wyrażenie funkcyjne sprawdzające, czy rozpatrywany element jest tablicą, czy nie; jeśli tak, to zostawia go jak jest, jeśli nie - zamienia go w tablicę
castArray("jakiś string"); // zwraca: [ 'jakiś string' ]
castArray(1); // zwraca: [1]
castArray([1]); // zwraca również: [1]


// [7] Jak usunąć javascriptowe wartości fałszywe z tablicy
// należą do nich vartości, które w kontekście Boolean stają się fałszem:
// (1) false, (2) 0, (3) null, (4) undefined, (5) NaN, (6) pusty string dowolnego rodzaju: '', "", ``
const falsiesRemoved = arr6 => arr6.filter(Boolean);
// takie jednoargumentowe wyrażenie funkcyjne domyślnie zatrzymuje tylko wartości 'true'
falsiesRemoved([1, 2, 0, 3, false, 4, '', 5, "number", NaN, 88, 'data', ``, 13]); // zwraca: [ 1, 2, 3, 4, 5, 'number', 88, 'data', 13 ]
// ponieważ 0, false, '', NaN, `` przyjmują wartość 'false'


// [8] Jak automatycznie zliczyć wszystkie elementy danej wartości w tablicy
const countOccurrences = (arr7, countedValue) => arr7.reduce( (a, c) => (c === countedValue ? a + 1 : a), 0);
// w dwuargumentowym wyrażeniu, pierwsza jest rozpatrywana tablica, drugim - element zliczany;
// za pomocą metody 'reduce()' sprawdzamy czy bieżąca wartość jest identyczna z poszukiwaną, czy nie; jeśli tak - do akumulatora 'a' dodajemy 1, jeśli nie - acumulator 'a' pozostaje ze swą poprzednią wartością (wartość początkowa akumulatora 'a' jest ustalona na 0)
countOccurrences([1, 2, 3, 4, 2, 5, 6, 7, 2, 1, 9], 2); 












