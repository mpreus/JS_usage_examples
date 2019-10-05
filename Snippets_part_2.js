/*
W tej części: Part 2:
[1] Jak sprawdzić czy dół strony internetowej jest widoczny na ekranie
[2] 
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

// [2] Jak 



