// ТИПИ ЗМНІННИХ

let str = `gjibnjbn`; // стрінговий тип
let num = 5; // числовий тип
let bool = true; // булевий тип


let n = undefined; // дані змінній не присвоїні
let m = null; // пустота (????????????)

let a // оголосив змінну
a = undefined; // дані зміній а не присвохїні
console.log(a);

a = `jnutrnuirt`; // присвїв дані зміній a
console.log(a);

a = 5; // переприсвоъв дані змінній а
console.log(a);


//------------------------------------------

let user = { // обєкт
    name: 'nazar',
    age: 45
}

let user2 = user; // обєкт, силочний тип даних

console.log(user2);

user2.status = true; // додав новий ключ до обєкту

console.log(user);

//--------------------------------------


let person = { // обєкт
    name: 'vova',
    age: 78
}

person.status = false; // додав новий ключ до обєкту

console.log(person);

delete person.age; // видалив ключ з обєкту

console.log(person);

console.log(person.hasOwnProperty(`name`)); // true - перевірка наявності ключа в обєкті


//------------------------------------------------------

let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];


for (let item of users){ // вивів кожен елемент масиву
    console.log(item);
}

for (let item of users){ // вивів кожне імя елемента масиву
    console.log(item.name);
}

for (let i= 0; i < users.length; i++){ // вивів кожен елемент масиву (можна корегувати діапазон виводу)
    console.log(`${users[i]}`); /// (???????????)
}

