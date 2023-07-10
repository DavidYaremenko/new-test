document.addEventListener("DOMContentLoaded", () => {

    const tabs = document.querySelectorAll('.tabheader__item');
    const tabsContent = document.querySelectorAll('.tabcontent');
    const tabsParent = document.querySelector('.tabheader__items');

    function hideTabContent(){
        tabsContent.forEach(item => {
            item.classList.add('hide'); // скрываем все табы
            item.classList.remove('show', 'fade'); // убираем включение класса показа
        })

        tabs.forEach(tab => {
            tab.classList.remove('tabheader__item_active'); // убираем основной таб страницы
        })
    };

    function showTabContent(i = 0){ // i = 0 - новый вариант записи. Если писать так то аругмент в вызове передавать не надо, это будет выполнять как дефолт
        tabsContent[i].classList.add('show', 'fade'); // делаем видимыми табы
        tabsContent[i].classList.remove('hide'); // убираем класс скрытия
        tabs[i].classList.add('tabheader__item_active'); // добавляем основной таб статницы
    };

    hideTabContent();
    showTabContent(); // 0 - это первый элемент массива(основной таб) чтобы он был при загрузке страницы

    tabsParent.addEventListener("click", (event) => { // вешаем событие на родителя табов

        const target = event.target; // помещаем таргет(точка нажатия ИМЕННО на элемент) в переменную для удобства

        if (target && target.classList.contains('tabheader__item')){ // проверяем чтобы нажатие было на элемент а не пустую страницу
            tabs.forEach((item, i) => { // в forEach 2 аругмент - всегда номер по порядку
                if (target == item){ // если элемент то вызвать две функции
                    hideTabContent();
                    showTabContent(i); // i - таб по номеру. с помощью forEach мы перебераем массив с табами и потом выбирается именно тот на которй нажали
                };

            });
        };

    });






















})