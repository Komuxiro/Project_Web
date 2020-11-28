/* Глобальные области видимости 
function someFunction(){
    var x = 1;
    var y = 10;
    console.log(x);
    console.log(y);
    y++;
    console.log(y);
}
var y = 2;
someFunction();
console.log(y); */ 

/* Массивы 
var color1 = 'red';
var color2 = 'blue';
var color3 = 'orange';

var rainbowColors = ['red','blue','orange'];  /* Массив выглядит таким образом
console.log('Небо цвета ' + rainbowColors[1]);

rainbowColors[0] = 'indigo';
console.log(rainbowColors);

rainbowColors[rainbowColors.length] = 'green'; /* Добавимне несуществующий ранее цвет 
console.log(rainbowColors);

var emptyArray = []; /* пустой массив 
var emptyArrayNew = new Array(); /* еще одна запись для создания пустого массива - аналог предыдущего 

var numbers = [1,2,3,4,5];
console.log(numbers);

var anyItems = [1,'text', null]; /* массивы могут содержать любые типы данных  
console.log(anyItems); */

/* Методы массива 
push/pop
shift/unshift
indexOf
slice

var names = ['джони', 'мари', 'джэк'];
console.log(names);
names[names.length] = 'arriva';
console.log(names);
names[4] = 'мигуэль';
console.log(names);

names.push('tom');
console.log(names);
var x = names.push('any'); /* Добавит новый элемент массиву и при присвоении какой-либо переменной выведет длину массива
console.log(x);
console.log(names);

var y = names.pop(); /* Удаляет последний элемент массива + выводит его значение *
console.log(y);
console.log(names);

names.unshift('irina'); /* Добавит элемент в начало массива  
console.log(names);

names.shift(); /* Удалит первый элемент массива 
console.log(names);

var z = names.indexOf('arriva'); /* Возврашщает индекс указанного элемента, если будет несколько одинаковы элементов - то вернет первого встречного  
console.log(z);

var toyota = ['camry', 2010, 'black', true];
var isSedan = toyota.indexOf('hatchback') === -1 ?
console.log('тип не седан.') :
console.log('тип седан');

var cars=['honda','kia', 'bmv', 'mers', 'opel']; /* Позволяет скопировать часть массива и передать другой переменной 
var germanyCar = cars.slice(2,4);
console.log(germanyCar);
*/

/* Объекты 
var carToyota = ['camry', 2010, 'sedan', 'black', true];
console.log(carToyota[2]);
var carMazda = ['cx-7', 2015, 'crossover', 'white', true];

var carToyota = {
    model:'camry',
    year: 2010,
    carBody: 'sedan',
    color: 'black',
    hasAirbag: true
};
var carMazda = {
    model:'cx-7',
    year: 2015,
    carBody: 'crossover',
    color: 'white',
    hasAirbag: true
};
console.log(carToyota['color']);
console.log(carMazda.model);

carToyota.color = 'red'; /*присвоили другой цвет  
console.log(carToyota.color);

var carVolvo = {}            /* Создаем пустой объект и присвом значения позже 
carVolvo.year = 2018;
carVolvo.model = 'хз';
carVolvo.color = 'green'
carVolvo.carBody = 'sedan';

console.log(carVolvo);

var carOpel = new Object(); /* Создаем пустой объект и присвом значения через функцию 
carOpel.year = 2020;
carOpel.model = 'хз';
carOpel.color = 'blue'
carOpel.carBody = 'sedan';

console.log(carOpel); */

/* Объекты и массивы 
var color = ['red', 'balue', 'orange'];  Массивы содержат данные одного типа 
var persons = {            Объекты содержат данные разного типа 
    firstName:'ivan',
    lastName: 'gruvi',
    age: 30,
    pets: ['cat', 'dog', 'snake']
}

var numbers = [[1,2,3], [4,5,6], [7,8,9]];
console.log(numbers[1][2]);

console.log(persons.pets[2]);

var sellers = [
    {
        firstName:'ivan',
        lastName: 'gruvi',
        age: 30,
        cars: ['opel', 'bmv', 'mazda']
    },
    {
        firstName:'olga',
        lastName: 'ivanova',
        age: 38,
        cars:[
            {   
                
                carModel:'toyota'
            },
            {   
                
                carModel:'ferrari'
            },
            {
                
                carModel:'bugati'
            },
        ]
    }
]

console.log(sellers[1].lastName); Получим фамилию второго продавца 

console.log(sellers[0].cars[2]);  Получим даные по автомобиля первого продавца

console.log(sellers[1].cars[2].carModel);  Получим даные по автомобилю второго продавца */

/* Вывести все не проданные авто
var cars = [{
        carProduct: 'vag',
        carName: 'shoda',
        carAge:'1999',
        carColor: 'blue',
        carSales: true
    },
    {
        carProduct: 'vag',
        carName: 'opel',
        carAge:'2010',
        carColor: 'green',
        carSales: false
    },
    {
        carProduct: 'vf',
        carName: 'bmv',
        carAge:'2015',
        carColor: 'black',
        carSales: true
    },
    {
        carProduct: 'vf',
        carName: 'audi',
        carAge:'2000',
        carColor: 'white',
        carSales: true
    }
]
for (var i = 0; i < cars.length; i++){
    if(cars[i].carSales === false){
        console.log(cars[i]);
    }
}

cars.forEach(function(car) {   Выведем все проданные авто, используя другой способ 
    if(car.carSales === true){
        console.log(car);
    }
}) */

/* Методы объектов 
var carSeller1 = {  Посчитаем дисконт при продаже авто в зависимости от ее года выпуска
    firstName:'jack',
    lastName: 'white',
    regYear: 2010,
    hasDiscount: true,
    discountCalculation: function(year){
        var discount;
        var numberOfYears = 2020 - year;
        if(numberOfYears <= 2) {
            discount =0;
        }
        else if ((numberOfYears > 2) && 
        (numberOfYears <= 5)){
            discount = 5 ;
        }
        else if (numberOfYears >5) {
            discount = 15;
        }
        return discount;
    }
}

console.log(carSeller1.discountCalculation(2014)); */

/*  Метод this
var carSeller1 = {  
    firstName:'jack',
    lastName: 'white',
    regYear: 2017,
    hasDiscount: true,
    discount:0,
    discountCalculation: function(){
        var discount;
        var numberOfYears = 2020 - this.regYear;
        if(numberOfYears <= 2) {
            discount =0;
        }
        else if ((numberOfYears > 2) && 
        (numberOfYears <= 5)){
            discount = 5 ;
        }
        else if (numberOfYears >5) {
            discount = 15;
        }
        this.discount = discount;
    }
}
carSeller1.discountCalculation();

console.log(carSeller1); */

/* dom selectors

document.getElementById('header').innerHTML='New Vasuki';

var x = document.getElementsByClassName('first');
console.log(x[1].innerHTML);

console.log(document.getElementsByTagName('li')[3].innerHTML);
console.log(document.getElementsByTagName('head')[0]);

console.log(document.querySelector('#header').innerHTML);
console.log(document.querySelector('.twoo').innerHTML);

console.log(document.querySelectorAll('li')[2].innerHTML);
console.log(document.querySelectorAll('.first').innerHTML); */

/* Изменение стилей 
var li3 = document.getElementById('thirdElement');
li3.style.color = 'red';
li3.style.fontSize = '20px';
li3.style.background = 'blue'; */

/*  Изменение атрибутов
var image = document.getElementsByTagName('img');
image[0].getAttribute('src');
image[0].setAttribute('src', 'images/Cinnabom.jpg');

var link = document.getElementsByTagName('a');
link[0].getAttribute('href');
console.log(link);
link[0].setAttribute('href', 'http://mail.ru');  */

/* События DOM
var h2 = document.getElementById('header');
console.log(h2.innerHTML);

h2.addEventListener('click', function() {
    this.style.background = 'red';
});
h2.addEventListener('click', function() {
    this.style.color = 'green';
});

var liElements = document.querySelectorAll('li');
console.log(liElements);
for(var i = 0; i < liElements.length; i++){
    liElements[i].addEventListener('click', function(){
        this.style.color = 'red';
    })
}

// либо такая запись
var changeLoColor = function(){
    this.style.color = 'blue';
}
for(var i = 0; i < liElements.length; i++){
    liElements[i].addEventListener('click', changeLoColor) */