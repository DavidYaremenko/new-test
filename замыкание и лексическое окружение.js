// Лексическое окружение - скрытый технический обьект. Есть внутреннее и внешнее.
// Замыкание - функция сначала обращается к тому, что есть внутри себя, а если не находит - обращается за свои пределы
// Функция всегда запоминает последнее значение переменной

// let number = 5; debugger;

// function logNumber(){
// 	let number = 3; debugger;
// 	console.log(number);
// }

// number = 6;

// logNumber(); debugger;

function creatCounter(){
	let counter = 0;

	const myFunction = function(){
		counter = counter +1;
		return counter;
	};
	return myFunction;
};

const icrement = creatCounter();
const c1 = icrement();
const c2 = icrement();
const c3 = icrement();

console.log(c1, c2, c3);