/*
W tej części: Part 2:
[1] Jak sprawdzić czy dół strony internetowej jest widoczny na ekranie
[2] Jak rozponać wielkość stringu w baitach (bytes)
[3] 
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

















