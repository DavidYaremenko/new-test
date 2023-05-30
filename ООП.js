// ООП - это наука про правильную архитектуру кода


let str = "some";
let strObj = new String(str);

console.log(typeof(str));
console.log(typeof(strObj));
///////НАСЛЕДОВАНИЕ\\\\\
const soldier = {
	health: 400,
	armor: 100,
	sayHello: function(){
		console.log("Hello");
	}
};

const john = {
	health: 100
};

//john.__proto__ = soldier; // устаревший метод. Джон наследует свойство армор от обьекта солдат

//console.log(john.armor); // так мы можем вызвать у него это свойство
//john.sayHello();

////СОВРЕМЕННЫЙ МЕТОД\\\\\

Object.setPrototypeOf(john, soldier);//Этот метод работает в динамике. ТО есть если уже создан обьект. Первый аргумент - тот, кто должен наследовать, второй - родитель
john.sayHello();

const jon = Object.create(soldier);// Этот метод создает обьект jon, который наследуется от soldier