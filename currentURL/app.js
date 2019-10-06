document.addEventListener("DOMContentLoaded", init);
function init() {
	const currentURL = () => window.location.href;
	// powyżej - pobiera adres lokalizacji bieżącej strony
	// poniżej - pobiera element do wstawienia adresu
	let paraToUppendUrl = document.querySelector("#currentPageUrl");
	// nowy element do wstawienia na stronie:
	let newElement = document.createElement("p");
	// z treścią w postaci adresu
	newElement.innerHTML = currentURL();
	// wstawiamy na stronę
	document.body.insertBefore(newElement, paraToUppendUrl);

	// drugi nowy element - z aktywnym linkiem do wskazanego adresu:
	let newLink = document.createElement("a");
	// utworzonemu elementowi 'a' przypisujemy adres:
	newLink.setAttribute("href", currentURL());
	// nadajemy mu widoczną na stronie nazwę:
	newLink.innerHTML = "Nowy link";
	// wstawiemy na stronę:
	document.body.insertBefore(newLink, paraToUppendUrl);

}