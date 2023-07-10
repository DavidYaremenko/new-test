//  Set - тип колекций по типу массива, в которой значение может повторяться лишь один раз


const arr = ['Alex', 'Anna', 'Oleg', 'Alex'];

const set = new Set(arr);

set.add('Ivan'); // добавляет значения

console.log(set);

// set.delete(value); // удаляет
// set.has(value); // првоеряет налтичие
// set.clear(); // очищает
// set.size; // показывает количество данных

for (let value of set) console.log(value); // перебираем и получаем все эелементы по строчно

set.forEach((value, valueAgaing, set) => { // Еще один метода перебора. второй аргумент пишется для совместимсоти чтобы проверить
    console.log(value, valueAgaing)
})

console.log(set.values()); // выводит значение и ключ

function unique(arr){
     return Array.from(new Set (arr)); // содаем новый массив из коллекции
}

console.log(unique(arr));

