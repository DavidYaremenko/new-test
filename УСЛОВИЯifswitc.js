if (4 == 9){ // условно можно сказать ЕСЛИ (4 РАВНО 9){вывести в консоль окей, а если не равно то вывести ерор}
	console.log("okey");
} else {
	console.log("error");
}
//////////////РАЗВЕТВЛЕНИЕ IF////////////////////////
const num = 50;

if (num < 49){
	console.log("erro");
}else if(num > 100) {
	console.log(erro2);
}else{
	console.log("ok");
}

////////////ТЕРНАРНЫЙ ОПЕРАТОР////////////////////////// 
//условие....выполнить если верно...выполнить если ошибка
(num === 50) ? console.log("ok") : console.log(erro2);

///SWITCH - модификация IF для короткой записи. ОН ПРОВЕРЯЕТ ТОЛЬКО СТРОГОЕ СООТВЕТСВИТИЕ

const num2 = 50;
switch(num2) {
case 49:
	console.log("NO");
	break; // тормозит если все верно

case 100:
	console.log("NO");
	break;

case 52:
	console.log("YES");
	break;

default: // дефолт нужен в случае, если не будет подходить не один из вариантов
	console.log("FUCK");
	break;

}