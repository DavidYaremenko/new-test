// // // function showFirstMessage(){
// // // 	console.log("Hello hell");
// // // }

// // // showFirstMessage();

// // function showFirstMessage(text){ // text - это аргумент фукции
// // 	console.log(text); // это этот же аргумент
// //     let num = 29;
// // }

// // showFirstMessage("Hello text"); // а при вызове функции мы пишем первый аргумент "hello text", который она потом передает вверх в аргумент text и помещает ее в консоль.
// //                                 // условно, аргумент в названии функции это просто название инфы которая передается уже из вызова

// // // Замыкание функции - это сама функция со всеми доступными для нее переменными.То есть если идет вызов переменной внутри функции, которой нет - функция будет искать эту переменную за ее пределами на увроень выше

// // function calc(a, b){
// // 	return (a+b); // return - значит, что вернет уже РЕЗУЛЬТАТ этих двух аргументолв. ТО есть функция сложит 4+3(a+b) и выдаст в консоль результат
// // 	console.log("asd"); // этот код недоступен, потому что return закрывает функцию и после него ничего не сработает
// // }
// // console.log(calc(4, 3));
// // console.log(calc(6, 3));
// // console.log(calc(10, 3));

// function ret(){
// 	let num = 50;

// 	// какой то код

// 	return num; // в таком случае return возвращает результат использования переменной во внешний мир(за функцию)
// }
// const anotherNum = ret(); // за пределами функции создаем переменную и помещаем в нее саму функцию
// console.log(anotherNum); // тут мы ее уже вызываем

// // Function Declaration - функция существует до момента, как код запустится. То есть работает до того как она была вызвана. Пример все функции выше
// // Function Expression - создается только когда поток кода доходит до нее и вызвать моожно только после обьявления
// // Стрелочная функция - не имеет своего контекста вызова(this). Чаще используеся в категрии обработки событий

// const logger = function(){ // Function Expression. Создается функция и в нее помещается функция
// 	console.log("Hello");
// };

// logger();

// // Стрелочная
//           //функция выполнение кода
// const calc = (a, b) => a + b; // аналогично const calc = (a, b) => { return a + b}; 
// const calc = a => a + b; // можно даже не писать скобки, если есть только один аргумент

// const calc = (a, b) => { // если функция разростается

//     console.log("1");
    
//     return a+b;
// }

// const usdCurr = 28;
// const eurCurr = 32;

// function convert(amount, curr){
// 	console.log(curr * amount); // Функция должна быть независимой. Всегда лучше не привязывать функцию к какой то переменной. ЛУчше переменную помещать в аргумент. 
// }
// convert(500, usdCurr);
// convert(500, eurCurr);

const usdCurr = 28;
const discount = 0.9;

function convert(amount, curr){
	return curr * amount; //
}
function promotion(result){
	console.log(result * dicount);
}

const res = convert(500, usdCurr);// но чаще используют код так, записывая промежуточный резлуьтат в переменную.
promotion(res);

promotion(convert(500, usdCurr)); //Второй способ записи. Тут сначала работает первая функция и потом результат вернет в аргумент функции promotion в result

///////////////////////////////////////////////

function test(){
	for(let i = 0; i < 5; i++){
		console.log(i);
		if(i === 3){
			return; // пример использование return для завершения функции внутри цикла
		}
	}
	console.log("done");
}

test();

function doNothing(){}
console.log(doNothing === undefined); //ФУНКЦИЯ ВСЕГДА ВОЗВРАЩАЕТ UNDEFINED, ЕСЛИ НЕ ИСПОЬЗУЕТСЯ return. ТО ЕСТЬ ОНА ВСЕГДА ЧТО ТО ВОЗВОРАЩАЕТ НЕ ЗАВИСИМО ОТ return