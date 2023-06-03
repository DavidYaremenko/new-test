// Динамическая типизация - возможность типов данных превращаться в другой тип данных. Строка в число и тп.

// В строку \ To string

// Первый вариант

console.log(typeof(String(null)));
console.log(typeof(String(4)));

// Вариант два

console.log(typeof(5 + "")); //это конкатенация = сложение строки с чем то. Со сложением со строкой будет всегда олучатся строка

const num = 5;

console.log("https://vk.com/catalog/" + num);

const fontSize = 26 + "px"; // так же можно обращатьт в строку и работать потом со стилями

// В число \ To Number

// Пкрвый способ

console.log(typeof(Number("4")));

// Второй способ

console.log(typeof(+"5")); // Унарный плюс

// ТРетий способ

console.log(typeof(parseInt("15px", 10)));

let answer = +prompt("Chtoto"); // Унарный плюс перед промпт будет переводить строку в число

// Третий вид = в булиновое значение \ To BOOLEAN

// 0, "", null, undefined, NaN; - это false, а все соталньое будет - true;

// Первый способ
let switcher = null;

if(switcher){
	console.log("working"); // код не сработает потому что switcher - false из за null
}

switcher = 1;

if(switcher){
	console.log("working"); // код сработает потому что switcher - true из за 1
}

// Второй способ 

console.log(typeof(Boolean("4")));

// Третий способ
console.log(typeof(!!"4444"));





