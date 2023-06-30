/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

/* Задания на урок:
1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.
2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки
3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)
4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"
5) Фильмы должны быть отсортированы по алфавиту */

'use strict';

document.addEventListener("DOMContentLoaded", () => { // document.addEventListener("DOMContentLoaded", () =>  позволяет сначала загрузить дом дерево єлементов а потом все остальное.Чтобі человек не жадл долгую загрузку всего

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
    const movieList = document.querySelector(".promo__interactive-list");
    const poster = document.querySelector(".promo__bg"); //сначала находим класс, в котором находится другой класс жанр
    const genre = poster.querySelector(".promo__genre"); // а в переменную genre уже обращаемся к переменной poster чтобы достать класс который находится в классе promo__bg
    const addForm = document.querySelector("form.add"); // получаем саму форму
    const addInput = addForm.querySelector(".adding__input"); // получаем то что пришло в форму(что ввел человек)
    const checkBox = addForm.querySelector("[type='checkbox']") // получаем галочку с формы для работы с ней

    addForm.addEventListener("submit", (event) => { // обработчик событий submit отслеживает отправку формы человеком
        event.preventDefault(); // отменяет обновление страницы после отправки формы

        let newFilm = addInput.value; // addInput.value проверяет то что ввел пользователь в поле и помещает это в переменную newFilm
        const favorite = checkBox.checked; // checkBox.cheked проверяет отмечена ли галочка и возвращает true или false

        if(newFilm){ // улсовие проверяет не пустая ли строка. И если нет( true) будет запись, а если фолс то не будет

            if(favorite){ // при постановке галочке выводит в консоль
                console.log("Добавляем любимый фильм");
            };

            if(newFilm.length > 21){
                newFilm = `${newFilm.substring(0, 22)}...`; // проверяем название на длину и в случае длиннее добавляем троеточие  
            }

            movieDB.movies.push(newFilm); // метод пользоваялет добавлять новые данные полученные от пользователя сразу в массив
            sortArr(movieDB.movies);
    
            createMovieList(movieDB.movies, movieList);
        }

        addForm.reset(); // после отправки метод будет сбрасывать форму 

    })
    
    const deleteAdv = (arr) => {

        arr.forEach(item => { // удаляем баннеры
            item.remove();
        });

    };

    deleteAdv(adv);
    
    const makeChanges = () => {

        genre.textContent = "драма"; // так мы поменяли текст в классе. textContent использовали так как нужно поменять только текст
        poster.style.backgroundImage = "url('img/bg.jpg')"; // пример замены картинки
    };

    makeChanges();

    const sortArr = (arr) => {
        arr.sort(); // сортируем названия филмьов в массиве по алфавиту. Вызываем в внутри функции
    };

    function createMovieList(films, parent){

        sortArr(films);
        parent.innerHTML = ""; // так можно очистить элемент

        films.forEach((film, i) => { // перебираем массив чтобы записать его в элемент

            parent.innerHTML += ` 
            <li class="promo__interactive-item">${1 + i}.${film}
                <div class="delete"></div>
            </li>
            `; // указываем сначала movieList - элемент который очистили.Потом innerHTML будет записывать в класс(указываем название) и через интерполяцию ${1 + i}.${film} добавляем номер и название фильма
        })

        document.querySelectorAll(".delete").forEach((btn, i) => { // получаем эелемнт корзины, сразу перебираем и помещаем в коолбэк функцию btn - корзины, i - номер по порядку
            btn.addEventListener("click", () => { // вешаем событие по клику
                btn.parentElement.remove(); // обращемся к родительскому элементу и удаляем название фильма
                movieDB.movies.splice(i, 1); // удаляем фильм из базы данных

                createMovieList(films, parent); // вызываем функцию внутри себя же чтобы нумерация фильма перестаривалась
            })

        });
    }
    createMovieList(movieDB.movies, movieList);

});