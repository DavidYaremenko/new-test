"use strict";

const box = document.getElementById("box"); // в переменную мы помещаем тот елемент со страницы к которому потом хотим обращаться. 
//Обращаемся и находим по id, который вписываем в html. Айди элемента уникален и на странице ткой должен быть только один

const buttons = document.getElementsByTagName("button"); // при обращении к тегу этот метод вернет псевдомассив со всеми тегами со страницы по его названию
//второй вариант обращения     //чтобы обратиться к конкертному эелементу из коллекции нужно указать его индекс в массиве
//ЭТОТ МЕТОД ВСЕГДА ВЕРНЕТ МАССИВ, ДАЖЕ ЕСЛИ ТАМ ОДНА КНОПКА И ПОЭТОМУ СТИЛИЗОВАТЬ МЫ НЕ МОЖЕМ, ПОТОМУ ЧТО МАССИВ.ЧТОБЫ ЭТО СДЕЛАТЬ НУЖНО ОБРАТИТЬСЯ К ИНДЕКУ ЭЛЕМЕНТА

const circles = document.getElementsByClassName("circle"); // изем элементы по названию класса. Тоже вернет массив

const hearts = document.querySelectorAll(".heart"); //Вернет тоже псевдомассив, но у него есть метод forEach. Этот метод популярнее потому что работает с любым селектором(#id, .class, div, * - любые элементы, [name="value"] - атрибут, )

hearts.forEach(item => { // метод forEach перебирает и возвращает элементы массива с помощью стрелочной функции. Все элементы будут выведены отдельно, а не в массиве.
	//console.log(item);
});

const oneHeart = document.querySelector(".heart");// метод просто querySelector возвращает всегда только первый элемент

const wrapper = document.querySelector(".wrapper");

// box.style.backgroundColor = "blue";
// box.style.width = "500px";

box.style.cssText = "background-color: blue; width:300px"; // этот метод позволяет сократить код и писать все стили в строку а не как выше

buttons[3].style.borderRadius = "100%"; // записывать все значения в ковычках

circles[1].style.backgroundColor = "red";

for(let i = 0; i < hearts.length; i++){ // чтобы изменить все эелемнты в массиве можно использовать цикл.
	hearts[i].style.backgroundColor = "blue"; //hearts[i] обращается к каждому элементу после каждой итерации
}

hearts.forEach(item => { // еще один вариант как изменить все элементы без цикла. Только если использоват метод querySelectorAll
	item.style.backgroundColor = "green";
});

//////////////////////ОСНОВНЫЕ НОВЫЕ МЕТОДЫ РАБОТЫ СО СТРАНИЦЕЙ\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

const div = document.createElement("div"); // создает элементы на странице, НО только внутри JS, а не в html

div.classList.add("black"); // так мы добавили класс в див

document.body.append(div);// так добавляеи див в конец тега боди
document.querySelector(".wrapper").append(div); // если элемент будет использован лишь один раз в коде - можем не создавать для него переменную а обратиться так и поместить внутрь него див

wrapper.prepend(div); // помещает элемент в начало тега wrapper

// before - втсавляет эелемнт ПЕРЕД, а after - вставляет элемент после

hearts[1].before(div); // вставит див перед вторым heaart
hearts[2].after(div);

circles[0].remove(); // удаляет элементы

hearts[0].replaceWith(circles[1]); // заменяет элемент на другой. сначала указываем элемент какрй хотим заменить

///////СТАРЫЕ МЕТОДЫ\\\\\\\\\\
// wrapped.appendChild(); // метод добавления как и append

// wrapped.insertBefore(div, hearts[0]); // метод как и before вставляет перед. В ковычках сначаала указываем что вставить, а после запятой вместо чего

// wrapper.removeChild(hearts[1]);// удаляет как и remove

// wrapper.replaceChild(circles[0], hearts[0]);// меняет элементы 

div.innerHTML = "<h1>Hello world</h1>"; // метод добавляет на страницу новые элементы. ВСЕ ПИШИ В КОВЫЧКАХ

// div.textContent = "hello"; // этот метод добавляет только текст, даже если указать теги. 
//можновыбрать
div.insertAdjacentHTML("beforebegin", "<h2>Helou</h2>"); //метод вставляет элемент хтмл на страницу. Первый аргмуент ГДЕ вставить, а второй - что вставить

//const hearts = wrapped.querySelectorAll(".heart"); // аналогия записи в переменную. В переменную hearts в таком случае пойдут все селекторы 
// .heart, которые могли бы содержаться в wrapped