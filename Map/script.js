//Map - специфический тип данных. Только вместо свойств может использоваться обьект, массив, функция и др. А у обьекта только строки
// Внутри всся карта это массив массивов
// Порядок свойтсв четко как добавили, в обьектах все хаотично
// при создании пустой карты в ней пустата, а в обьекте есть свйоства



// const user = {
//     4: 'Alex',
//     surname: 'Smith',
//     birthday: '20/10/1995',
//     showMyPublicData: function(){
//         console.log(`${this.name} ${this.surname}`);
//     }
// }
// console.log(typeof(Object.keys(user)[0]));


const shops = [
    {rice: 500},
    {oil: 200},
    {bread: 50}
]

const map = new Map([
    [{paper: 400}, 8000] // так можно передавать начальные значения
]);

//map.set(shops[0], 5000) // метод set устаналивает первым аргументом КЛЮЧ, а вторым ЗНАЧЕНИЕ. Но в map КЛЮЧ тоже будет обьектом, а не типом данных стринг
//map.set(shops[1], 5000)
//map.set(shops[2], 5000)

const budget = [5000, 15000, 20000];

shops.forEach((shop, i) => { // этот вариант записи лучше, чем выше
    map.set(shop, budget[i]);
})

console.log(map);

console.log(map.get(shops[0])); // метод get помогает получить отдеьные данные из карт

console.log(map.has(shops[0])); // has проверяет на наличие д=даннных и показывает тру или фолс

// map.delete(key); // удаляет элементы
// map.clear(); // полностью очищает карту
// map.size; // показывает ращмер карты

///////ЕСЛИ НУЖНО ПЕРЕБРАТЬ КАРТУ//////

//map.keys(); // он возвроащает итерируемый обьект по ключам

const goods = [];
for(let shop of map.keys()){ // пишем и получаем список всех товаров в магазине
    goods.push(Object.keys(shop)[0]); // чтобы получить только ключи, нужно обьект преобразовать в массив и тогда вытянуть только ключи с помощью этой конструкции
}
console.log(goods);

// map.values - возвроащает итерируемый обьект по значениям

for (let price of map.values()){
    console.log(price);
}

// map.entries - показывает ключи и занчения

for (let [shop, price] of map.entries()){
    console.log(price, shop);
}

// map.forEach - простой четвертый перебор как с массивами

map.forEach((value, key, map) => {
    console.log(key, value);
})

/////ЧТОБЫ СОЗДАТЬ КАРТУ ИЗ ОБЬЕКТА

const user = {
 name: 'Alex',
 surname: 'Smith',
 birthday: '20/10/1995',
 showMyPublicData: function(){
   console.log(`${this.name} ${this.surname}`);
 }
}

const userMap = new Map(Object.entries(user)); // переводим обьект в карту
console.log(userMap)

const newUserObj = Object.fromEntries(userMap); // переводим массиво подобный обьект в полноценгный обьект(наоборот что было ввреху)
console.log(newUserObj);