/*
W części 3:

[1] Jak sprawdzić dokładny adres url bieżącej strony 
[2] Jak automatycznie sprawdzić, który kolejny dzień roku mamy dzisiaj (i ile dni do końca roku)
[3] Jak sprawdzić jaki dzisiaj jest dzień tygodnia
[4] Jak sprawdzić która jest w danym momencie godzina
[5] Jak sprawdzić ile jest dni międzydwoma datami
[6] Jak automatycznie sprawdzić, czy konkretna data wypada po innej, wskazanej jako referencyjna
[7] Jak automatycznie sprawdzić, czy konkretna data wypada przed inną, wskazaną jako referencyjna
[8] Jak automatycznie sprawdzić czy podane daty są takie same 
[9] Jak sprawdzić która data z przeszłości jest nam najbliższa
[10] Jak sprawdzić która data z posiadanego zbioru jest najwcześniejsza
*/

// [1] Jak sprawdzić dokładny adres url bieżącej strony 
const currentURL = () => window.location.href;
currentURL();
/* Ponieważ bieżącemu oknu brak kontekstu przeglądarki, wynikiem jest url do pliku, z tego względu ten przykład sprawdzić można jako odrębny projekt w katalogu currentURL, albo po prostu skopiować kod i wkleić do konsoli przeglądarki mając otwartą dowolną stronę internetową - pokaże zdres do tej strony */


// [2] Jak automatycznie sprawdzić, który kolejny dzień roku mamy dzisiaj (np. by umieścić na stronie tę niezwykle istotną informację ;-)
const dayOfTheYear = date => {
  return Math.floor((date - new Date(date.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24);
}
// UWAGA: 1000 - milisekundy, 60 - sekundy do pełnych minut, 60 - minuty do pełnych godzin, 24 - godzin do pełnych dób
dayOfTheYear( new Date() );
// ponieważ konieczne jest odniesienie się do konkretnego (dzisiejszego) dnia w roku, w wywołaniu funkcji wstawiamy nową instancję obiektu 'Date()'

// stąd już prosto do konstatacji, ile dni zostało do końca roku:
const daysToTheEndOfYear = date => {
  return 365 - Math.floor((date - new Date(date.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24);
}
daysToTheEndOfYear( new Date() );

// [3] Jak sprawdzić jaki dzisiaj jest dzień tygodnia
const dayOfTheWeek = () => {
  let theDay = new Date();
  let theWeekDay = theDay.getDay();
// ponieważ metoda ta zwraca tylko numer dnia tygodnia (0 - niedziela, 1 - poniedziałek, 2 - wtorek itd.), przypiszmy każdemu z dni konkretną nazwę
  if (theWeekDay === 1) {
    return "poniedziałek"
  }
  else if (theWeekDay === 2) {
    return "wtorek"
  }
  else if (theWeekDay === 3) {
    return "środa"
  }
  else if (theWeekDay === 4) {
    return "czwartek"
  }
  else if (theWeekDay === 5) {
    return "piątek"
  }
  else if (theWeekDay === 6) {
    return "sobota"
  }
  else if (theWeekDay === 0) {
    return "niedziela"
  }
}
dayOfTheWeek();
// cały ten kod można nieco skrócić poczynając od linii:
// let theWeekDay = theDay.getDay();

// całość od nowa (krócej i szybsze działanie):
const newDayOfTheWeek = () => {
  let days = ['niedziela', 'poniedziałek', 'wtorek', 'środa', 'czwartek', 'piątek', 'sobota']; // dni w kolejności ich indeksowania w JS
  let theWeekDayIndex = ( new Date() ).getDay(); 
// powyższe zwraca dzień w postaci liczby, którą traktujemy jako indeks do tablicy 'days'
  return days[theWeekDayIndex]; // poda dzień z odpowiednim indeksem
}
newDayOfTheWeek();
// ...i mamy komunikat w 'ludzkim języku', np. poniedziałek
// Warto zajrzeć: https://css-tricks.com/everything-you-need-to-know-about-date-in-javascript/


// [4] Jak sprawdzić, która jest w danym momencie godzina
const getCurrentTime = date => date.toTimeString().slice(0, 8);
/* 
możliwe rozwiązanie bardziej opisowe:
const getCurrentTime = date => date.toTimeString();
co zwraca string: 12:27:50 GMT+0200 (czas środkowoeuropejski letni)
lub dostosowane lokalnie:
const getCurrentTime = date => date.toLocaleTimeString();
co zwraca string, np.: 12:29:37
*/
getCurrentTime(new Date); // pokaże bieżącą godzinę w formacie HH:MM:SS i za każdym odświeżeniem strony, zaktualizuje ją


// [5] Jak sprawdzić ile jest dni międzydwoma datami
const getDaysNumberBtwDates = (dateInitial, dateFinal) => (dateFinal - dateInitial) / (1000 * 60 * 60 * 24);
// pobiera daty jako milisekundy, stąd konieczne jest przeliczenie
getDaysNumberBtwDates(new Date('2019-01-01'), new Date('2019-10-07'));
// wskazuje: 279 (jeśli doliczymy pierwszy dzień roku, liczba ta zrówna się z numerem dnia bieżącego roku)


// [6] Jak automatycznie sprawdzić, czy konkretna data wypada po innej, wskazanej jako referencyjna
const isAfterDate = (dateChecked, dateRef) => dateChecked > dateRef;
// kolejność dat: data sprawdzana - data referencyjna
isAfterDate(new Date('2019-10-07'), new Date('2019-10-03'));
// wskaże, że data sprawdzana wypada po dacie referencyjnej: true


// [7] Jak automatycznie sprawdzić, czy konkretna data wypada przed inną, wskazaną jako referencyjna
const isBeforeDate = (dateChecked1, dateRef1) => dateChecked1 < dateRef1;
// kolejność dat: data sprawdzana - data referencyjna
isBeforeDate(new Date('2019-10-03'), new Date('2019-05-14'));
// wskaże, że data sprawdzana nie wypadła przed datą referencyjną: false


// [8] Jak automatycznie sprawdzić czy podane daty są takie same 
const isSameDate = (date1, date2) => date1.toISOString() === date2.toISOString();
// metoda 'toISOString()' zwraca datę jako znormalizowany string, np.: 2019-10-07T10:54:13.181Z
isSameDate(new Date('2018-02-02'), new Date('2018-02-02'));
// wskaże, że podane daty są jednakowe: true


// [9] Jak sprawdzić która data z przeszłości jest nam najbliższa
const latestDate = (...dates) => new Date(Math.max.apply(null, ...dates));
// wyszukujemy więc daty największej z posiadanych
const array = [
  new Date('2019-10-02'),
  new Date('2019-05-14'),
  new Date('2017-09-02'), 
  new Date('2011-11-29')
];
latestDate(array); // zwraca: 2019-10-02T00:00:00.000Z


// [10] Jak sprawdzić która data z posiadanego zbioru jest najwcześniejsza
const minDate = (...dates) => new Date(Math.min.apply(null, ...dates));
// wyszukujemy więc daty najmniejszej z posiadanych
const array1 = [
  new Date('2019-10-02'),
  new Date('2019-05-14'),
  new Date('2017-09-02'), 
  new Date('2011-11-29')
];
minDate(array1); // zwraca: 2011-11-29T00:00:00.000Z



// opis całości w 'readme' uzupełnić o uwagę, że każdy ze snipetów został sprawdzony




