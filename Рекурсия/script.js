// РЕКУРСИЯ - запуск функции и ее вызов внутри себя же

function pow(x, n){
    let result = 1;


    for(let i = 0; i < n; i++){
        result *= x; // аналогия записи result = x * result;
    }

    return result;
}

function pow(x, n){ // фкнция выше, но реализована с помощью РЕКУРСИИ

    if(n === 1){
        return x;
    }else {
        return x * pow(x, n - 1);
    }

}

console.log(pow(2, 1)) // 2
pow(2, 2) // 4 // 2 - это базовый аргумент, 2 - второй аргумент в какой степени нужно возвести
pow(2, 3) // 8
pow(2, 4)// 16


let students = {
    js: [{
        name: "John",
        progress: 100
    }, {
        name: "Ivan",
        progress: 60
    }],

    html: {
        basic: [{
            name: "Peter",
            progress: 20,
        }, {
            name: "Ann",
            progress: 18
        }],

        pro: [{
            name: "Sam",
            progress: 10
        }],

        semi: {
            students: [{
                name: "test",
                progress: 100
            }]
        }
    }
};// нужно посчиатьь средний процент прогресса

function getTotalProgressByIteration(data){
    let total = 0;
    let students = 0;


    for (let course of Object.values(data)){
        if (Array.isArray(course)){ // метод Array.isArray проверяет данные на наличие массива
            students += course.length;

            for (let i = 0; i < course.length; i++){
                total += course[i].progress;
            }
        }else {
            for (let subCourse of Object.values(course)){
                students += subCourse.length;

                for (let i = 0; i < subCourse.length; i++){
                    total += subCourse[i].progress;
                }
            }
        }
    }


    return total / students;
}
console.log(getTotalProgressByIteration(students));

// теперь вариант с РЕКУРСИЕЙ

function getTotalProgressByRecursion(data){
        if (Array.isArray(data)){ // метод Array.isArray проверяет данные на наличие массива
            let total = 0;

            for (let i = 0; i < data.length; i++){ // тут мы складываем все прогрессы студентов в переменную total
                total += data[i].progress;
            }

            return [total, data.length]; // с помощью одного массива мы возвращаем значение которое попало в тотал(общий прогресс) и общее количевто студентов
        }else { // если же данные не в массиве то запускается цикл ниже
            let total = [0, 0]; // создаем массив чтобы в него поместить данные

            for (let subData of Object.values(data)){ // тут мы хотим перебрать массив и получить ТОЛЬКО значения свойств, а не свойства. В этом помогает метод Object.values
                const subDataArr = getTotalProgressByRecursion(subData); // запускается снова функция для поиска массива или значения. Если массив - запускается первое условие, а если функция видит значения то сразу переходит к else
                total[0] += subDataArr[0];
                total[1] += subDataArr[1];
            }
            return total;
        }
    
}

const result = getTotalProgressByRecursion(students);

console.log(result[0] / result[1]); 


















