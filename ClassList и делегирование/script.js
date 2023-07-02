// classList позволяет добавлять свойства к псевдомассивам, у которых изначально их нет и корректиррвоать классы
// ДАЕТ ВОЗМОЖНОСТИ ДЛЯ РАБОТЫ С ДИНАМИКОЙ НА СТРАНИЦЕ

const btns = document.querySelectorAll("button");

// console.log(btns[0].classList.length); // узнаем длину класса
// console.log(btns[0].classList.item(0)); // узнаем первый элемент класса
// console.log(btns[1].classList.add("red")); // добавляем новый класс
// console.log(btns[0].classList.remove('blue')); // удаляем класс
// console.log(btns[0].classList.toggle('blue')); // добавляем новый класс в конец

// if(btns[1].classList.contains('red')){ // contains проверяет наличие класса и выдает фолс или тру
//     console.log('Red');
// }

btns[0].addEventListener('click', () => { // МОЖНО БРАТЬ КАК ШАБЛОН
    if(!btns[1].classList.contains("red")){ // проверяем есть ли класс ред на кнопке и если нет, то добавляем
        btns[1].classList.add("red");
    } else {
        btns[1].classList.remove("red") // если есть то удаляем
    };
})

//////ДЕЛЕГИРОВАНИЕ СОБЫТИЙ//////


const wrapper = document.querySelector(".btn-block"); // тут мы получаем класс родитель всех кнопок

wrapper.addEventListener("click", (event) => { // вешаем на него событие клика
      if (event.target && event.target.tagName == "BUTTON"){ // обращаемся через событие к конкертному элементу по тег нейму, чтобы при нажатии на любую кнопку событие срабатывало
        console.log("Hello"); // это позволяет повесить событие на все кнопки родителя, чтобы было удобно и не назначать на каждую кнопку 
      } // а их можно будет потом в родитель добавлять сколько угодно
})

wrapper.addEventListener("click", (event) => { 
    if (event.target && event.target.matches("button.red")){ // matches проверяет совпадение по тегу и классу и только тогда сработает событие конкернто на том теге или классе который указан
      console.log("Hello"); 
    } 
})

const btn = document.createElement("button"); // пример добавления новой кнопки и событие работает. В слуае обычного перебора массива назначение события работать не будет

btn.classList.add('red');

wrapper.append(btn);





















