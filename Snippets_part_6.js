// [1] Jak dodać jedną tablicę (np. 'arr2') do innej (np. 'arr1') na jej końcu
const arr1 = [1, 2, 3, 4];
const arr2 = [5, 6, 7, 8];

// na końcu 'arr1' dostawiamy 'arr2':
const bigArray1 = [1, 2, 3, 4, ...arr2];
console.log(bigArray1); // zwraca: [ 1, 2, 3, 4, 5, 6, 7, 8]
// lub:
const bigArray2 = [...arr1, ...arr2]; // zwraca to samo
bigArray2; // zwraca: [ 1, 2, 3, 4, 5, 6, 7, 8]
// podobnie, zmieniając kolejność, można wstawić 'arr1' na końcu 'arr2':
const bigArray3 = [...arr2, ...arr1];
bigArray3; // zwraca: [ 5, 6, 7, 8, 1, 2, 3, 4]


// [2] Jak wyczyścić tablicę przypisaną do 'const'
// zmiennych (stałych) przypisanych do 'const' nie można zmienić przypisując co innego, ale takie zmienne (stałe) można modyfikować
const arr3 = ['Alina', 'Olek', 'Aleksandra', 'Arkadiusz'];

arr3.length = 0;
console.log(arr3); // teraz zwraca pustą tablicę: []
// można też dopisać coś do takiej tablicy:
arr3.push(2); arr3.push(3);
arr3 // zwraca: [ 2, 3 ]


