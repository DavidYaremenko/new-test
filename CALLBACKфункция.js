function first(){
	setTimeout(function() { // создаем задержку в 500милисекунд
		console.log(1);
	}, 500); // указываем время задержки
}

function second(){
	console.log(2);
}

first();
second();

//Callback функция - функция, которая должна выполняться только, когда выполнилась предыдущая

function lernJS(lang, Callback){ // добавляем два аргумента
	console.log(`Я учу: ${lang} `); // первой сработает эта функция и выведет в консоль "JavaScript"
	Callback(); // тут мы вызываем уже callback функцию второй по очереди

}

lernJS("JavaScript", function(){ // первый аргумент для первой функцию, второй аргумент - анонимная функция которая является callback function и выполняется второй
	console.log("Я прошел этот урок");
});

function done(){
	console.log("Я прошел этот урок");
};

lernJS("JavaScript", done); // а так мы можем передать функцию с названием 