// В событиях на моб бразуерах нет кликов и тд, есть только ТАПЫ - touch

// touchstart - при касанием пальцем

// touchmove - при смещении пальца

// touchend - как только палец убран

// touchenter - когда пальцем нажимаем, попадаем, проводим на это событие. Как только палец на пределах элемента

// touchleave - когда палец продолжил двтгаться за пределами элемента

// touchcancel - когда точка соприкосновения не регистрируется

// В сенсорных событиях есть дополнительные свойства:

// touches - показывает сколько касаний сейчас происходит

// targetTouches

// changedTouches - список пальцев участвующих в данном союытии

document.addEventListener("DOMContentLoaded", () => {

const box = document.querySelector('.box');

box.addEventListener('touchstart', (e) => { // callback функция выполняется сразу же как произошло событие
    e.preventDefault();

    console.log('Start');
    console.log(e.touches);

})

box.addEventListener('touchmove', (e) => { // callback функция выполняется сразу же как произошло событие
    e.preventDefault();

    console.log('Start move');
    console.log(e.targetTouches[0].pageX);

})

box.addEventListener('touchend', (e) => { // callback функция выполняется сразу же как произошло событие
    e.preventDefault();

    console.log('Start stop');

})

});