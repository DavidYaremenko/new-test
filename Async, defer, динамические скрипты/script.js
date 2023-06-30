// defer говорит браузеру продолжать загружать фоново скрипт, пока грузится html код, а затем запустить скрипь когда он загрузится
// async - страница не ждет 

const p = document.querySelectorAll("p");

console.log(p);

function loadScript(src){

    const script = document.createElement('script'); // вариант добавления скриптов в дж и будет загружен после его добавления 
script.src = src;
script.async = false; // так как асинхронность выкобчена все скрипты будут загружаться друг за другомы
document.body.append(script);

}

loadScript("js/test.js");
loadScript("some.js")