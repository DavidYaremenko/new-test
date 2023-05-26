// Обьекты могут содержать любые типы данных

const options = {
	name: "tests",
	width: 1024,
	height: 1024,
	colors: {
		border: "black",
		background: "red"
	},
	makeTest: function(){ // создаем собственный метод
		console.log("Test"); 
	}
};

console.log(options.name);

delete options.name; // удаляет свойство из обьекта

for(let key in options){ // цикл перебирает обьект. Key принято нащывать так ключи. Цикл выполняет пока есть ключи
	console.log(`Свойство ${key} имеет значение ${options[key]}`); // ${options[key]} перебирает само значение ключа
}

///// Как войти во вложенный обьект и перебрать его

for(let key in options){ // цикл перебирает обьект. Key принято нащывать так ключи. Цикл выполняет пока есть ключи
	if(typeof(options[key]) === "object"){ // внутренний цикл проверяет тип данных на тип object и если да то она заходит в обьект внутри обьекта и проходится по нему 
		for(let i in options[key]){ // тут зашел во вложенный обьект
			console.log(`Свойство ${i} имеет значение ${options[key][i]}`); 
		}
	}else {
		console.log(`Свойство ${key} имеет значение ${options[key]}`); // ${options[key]} перебирает само значение ключа
	}

}

///////Как узнать количество свойств в обьекте

let counter = 0;
for(let key in options){
	counter++;
};
console.log(counter);

/////////////Методы обьекта\\\\\\\\\\\\\\\\

console.log(Object.keys(options).length); //метод создает массив и помещает в него все ключи. а если добавить length то посчитает еще и количество ключей чтобы не писать цикл

options.makeTest();


/////Деструкторизация обьекта\\\\\

const {border, background} = options.colors; // таким образом мы создаем две переменные в которые вытягиваем из обьекта значение свойств вложенного обьекта
console.log(border);