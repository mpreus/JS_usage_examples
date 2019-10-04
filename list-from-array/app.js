document.addEventListener("DOMContentLoaded", init);
function init() {
	console.log("I'm in!");

/* Weźmy dwuargumentowe wyrażenie funkcyjne: (1) tablica z elementami do 'wylistowania' 
i (2) identyfikator listy;
niech to wyrażenie zwraca element do którego wstawimy listę (najlepiej 'ul' o określonym 'id'), 
a następnie jako treść tego elementu niech w pętli wstawia każdy z elementów tablicy jako 'li',
gdzie join('') usuwa przecinki rozdzielające elementy w tablicy */

	const arrayToHtmlList = (arr, listID) => 
	    (el => (
	    	(el = document.querySelector('#' + listID)),
	    	(el.innerHTML += arr.map(item => `<li>${item}</li>`).join(''))
		))();

	arrayToHtmlList(['komputer', 'krzesło', 'biurko', 'kubek'], 'myListID');
}
