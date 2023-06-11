/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

const adv = document.querySelectorAll(".promo__adv img");

adv.forEach(item => { // удаляем баннеры
    item.remove();
});

const poster = document.querySelector(".promo__bg"); //сначала находим класс, в котором находится другой класс жанр
const genre = poster.querySelector(".promo__genre"); // а в переменную genre уже обращаемся к переменной poster чтобы достать класс который находится в классе promo__bg
genre.textContent = "драма"; // так мы поменяли текст в классе. textContent использовали так как нужно поменять только текст
poster.style.backgroundImage = "url('img/bg.jpg')"; // пример замены картинки

const movieList = document.querySelector(".promo__interactive-list");

movieList.innerHTML = ""; // так можно очистить элемент

movieDB.movies.sort(); // сортируем названия филмьов в массиве по алфавиту

movieDB.movies.forEach((film, i) => { // перебираем массив чтобы записать его в элемент
    movieList.innerHTML += ` 
    <li class="promo__interactive-item">${1 + i}.${film}
        <div class="delete"></div>
    </li>
    `; // указываем сначала movieList - элемент который очистили.Потом innerHTML будет записывать в класс(указываем название) и через интерполяцию ${1 + i}.${film} добавляем номер и название фильма
})