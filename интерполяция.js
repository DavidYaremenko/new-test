const category = "toys";

//console.log("https://someurl.com/" + category + "/" + "4"); чтобы не использовать + "" и конкатинация(склеивание строк) была придумана интерполяция(см ниже)

console.log(`https://someurl.com/${category}/5`); //нужно использовать косые кавычки(слева вверху на клавиатуре)

const user = "Ivan";

alert(`Привет, ${user}`);