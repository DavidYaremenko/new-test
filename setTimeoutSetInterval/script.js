const timerId = setTimeout(function(){ // первым аргументом передается функция, а вторым время, через которое она выполнится
    console.log('Hello')
}, 2000);

const timerId1 = setTimeout(function(text){ // первым аргументом передается функция, а вторым время, через которое она выполнится
    console.log(text) // либо можно добавить третий аргумент в саму функцию
}, 2000, 'Fuck off');

// ВАРИАНТ С ПЕРЕДАЧЕЙ ФУНКЦИИ

let timer = setTimeout(logger, 2000)// елси оставвить КОНСТ то событие ниже не увидит переменную

//clearInterval(timer); // отключение таймера. Именно чтобы можно было в будущем его отсанавливать и нужно помещать в переменную

function logger(){

    if(i > 3){
        clearInterval(timer);
    }

    console.log('Textuem')
    i++;
}
////////////////////////////////////////////////
const btn = document.querySelector('.btn');
let i = 0; // счетчик

btn.addEventListener('click', () => {
    timer = setInterval(logger, 2000) // setInterval задает через какое время повторить то или иное действие

});

/////////////////////////////////////

let id = setTimeout(function log(){ // Рекрусионный интервал - вызов в себе самом
    console.log('Hello');
    id = setTimeout(log, 500);
}, 500);

/////////////////////////ПРОСТАЯ БАЗОВАЯ АНИМАЦИЯ ЭЛЕМЕНТА

function myAnimation(){
    const elem = document.querySelector('.box'); // помещаем элемент
    let pos = 0; // начальная позиция элемента

    const Id = setInterval(frame, 10); // вызов фугнкции через каждые 10 милисекунд
    function frame(){
        if(pos == 300){ // когда позиция равна 300 пикселей
            clearInterval(id);// очистить интервал
        }else {
            pos++; //с каждым интервалом увеличиваем
            elem.style.top = pos + "px"; // меняем позицию элемента через стили
            elem.style.left = pos + "px"; // с каждой итерацией добавляем 1 пиксель
        }
    }
}

btn.addEventListener('click', myAnimation);