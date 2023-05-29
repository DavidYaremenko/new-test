// ЕСТЬ ПОВЕРХНОСТНЫЕ И ГЛУБОКИИ КОПИИ ОБЬЕКТОВ И МАССИВОВ.
// ПОВЕРХНОСТНЫЕ - те копии, которые не делают копию вложенных обьектов или массивов.
// ТУТ РАССМАТРИВАЕМ 4 способа ПОВЕРХНСОТНЫХ КОПИЙ


let a = 5;
let b = a;

b = b + 5;

console.log(b);

const obj = {
	a: 5,
	b: 1,
};

const copy = obj; //в переменную copy мы передаем ссылку на obj. В обьектах мы передаем значение по ссылке и даже в копии изменяя значение свойств мы меняем это же значение и в оригинале

copy.a = 10;

console.log(copy);
console.log(obj);
///////////СОЗДАНИЕ КОПИИ ОБЬЕКТА\\\\\\\\\\\\\
function copy1(mainObj){ // функция для создания копии обьекта
	let objCopy = {}; // пустой обьект который будет копией

	let key; // переменная для копии клбчей
	for(key in mainObj){ // цикл проходится по обьекту и будет копировать свойства в objCopy
		objCopy[key] = mainObj[key]; // это производит запись с оригинала в копию
	}

	return objCopy; // вернет во внешний мир для использования
}

const numbers = { // обьект с которого будет сделана копия в переменную newNumbers
	a: 2,
	b: 5,
	c: {
		x:7,
		y:4,
	}
};

const newNumbers = copy1(numbers);

newNumbers.a = 15;
console.log(newNumbers);
console.log(numbers);

/////Вариант 2\\\\\\\

const add = {
	d: 17,
	e: 20,
};

console.log(Object.assign(numbers, add)); // этот метод соединяет два обьекта и делает из них копию

const clone2 = Object.assign({}, add); // так же метод создает и просто поверхностную копию обьекта
clone2.d = 15;

console.log(add);
console.log(clone2);

/////////СОЗДАНИЕ КОПИИ МАССИВА//////////

const oldArray = ["a", "b", "c"];
const newArray = oldArray.slice(); // метод делает копию массива. ЗАПОМНИ: если просто поместить переменную массива в новую переменную - создается ССЫЛКА, а не копия

newArray[1] = "fuck";

console.log(oldArray);
console.log(newArray);

////ЧЕТВЕРТНЫЙ МЕТОД\\\\\\

// ОПЕРАТОР РАЗВОРОТА SPREAD

const video = ["youtube", "vimeo", "rutube"];
const blogs = ["worpress", "blogger", "livejournal"];
const internet = [...video, ...blogs, "vk", "facebook"]; // ... троеточие перед переменной візівает оператор спреад для разворота и копии

console.log(internet);

function log(a, b, c){
	console.log(a);
	console.log(b);
	console.log(c);
}

const num = [2, 5, 7];

log(...num); // оператор spread разварачивает массив и передает данные из массива в виде аргументов в функцию

const array = ["a", "b"];
const newArrayy = [...array]; // так же копируем и массив

const q = {
	one: 1,
	two: 2,
};

const newObjj = {...q}; // так же с помощью spread мы можем и копировать обьекты









