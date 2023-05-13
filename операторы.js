console.log("arr " + "- object");
console.log(4 + "- object");
console.log(4 + +"- object");
console.log(4 + +"5"); //унарный плюс - ставится + перед аргументом

//Инкримент(увеличение на 1) и дикримент(уменьшение на 1)

let incr = 10,
	decr = 10;

incr++;
decr--;

console.log(incr,decr);

// Остаток

console.log(5%2);

// сравнение\ === строгое равенство для строгого сравнения данных

console.log(2*4 == 8);

// && - и,возвращает true только если два подопечных будут правдивы, || - или, вернет true если хотя бы один будет правдивым

const isChecked = false;
const isClose = false;

console.log(isChecked && isClose);

console.log(isChecked || isClose);

// ! - отрицание. Если была true - он превращает в false, и наоборот

console.log(isChecked || !isClose);

// != - не равно
