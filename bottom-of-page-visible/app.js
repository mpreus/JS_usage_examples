document.addEventListener("DOMContentLoaded", init);
function init() {
	console.log("Łączy!");
	const bottomVisible = () => {
  	return document.documentElement.clientHeight + window.scrollY >= (document.documentElement.scrollHeight || document.documentElement.clientHeight);
	}
	console.log( bottomVisible() ); // wypisze w konsoli przeglądarki 'true' lub 'false'
	
	// aby sprawdzać widoczność dołu strony również na bieżąco:
	document.addEventListener("scroll", checkVisibility);
	function checkVisibility() {
		if (document.documentElement.scrollTop > 100) {
			console.log( bottomVisible() );
			return bottomVisible();
		}
	}
	
	
	

}