//Скачати реакт
//Діаграма коду - метод фільтер
//Повторити обєкти


// Методи масивів

function CreateUser (id, name, surname){
    this.id = id;
    this.name = name;
    this.surname = surname;
}



let users = [

    user1 = new CreateUser(1, `nazar`, `red`),
    user2 = new CreateUser(2, `vova`, `yellow`),
    user3 = new CreateUser(3, `tom`, `green`),
    user4 = new CreateUser(4, `jak`, `pink`),
];


console.log(users);
console.log(users[0]);


// ------------------------------

// Метод FILTER
// Лише id більше 2


// Створив масив userIdMore2 у який буду вкладати відфільтровані елементи
// value - це кожен елемент масиву users
let userIdMore2 = users.filter(value =>{
    if(value.id > 2){ // якщо елемент масиву users буде більше 2
        return true // то повертаємо "правда" - елемент потрапляє в масив userIdMore2
    } else { // якщо елемент масиву users буде менше 2
        return false // то повертаємо "не правда" - елемент не потрапляє в масив userIdMore2
    }
});

console.log(userIdMore2); // масив відфільтрованих елементів
console.log(users); // первиний масив залишається без змін


// Метод FILTER
// Лише id кратні 2



let userIdСouples = users.filter(value => {
    if (value.id % 2){
        return false
    } else {
        return true
    }
});

console.log(userIdСouples);


//---------------------------------------


// випадок 1
let userIdOne = users.filter(value => {
    if (value.id === 1){
        return true
    } else {
        return false
    }
});

console.log(userIdOne);




// випадок 2
let userIdOne2 = users.filter(value => {
    if (value.id !== 1){
        return false
    } else {
        return true
    }
});

// перша ітерація
console.log(user1.id);
console.log(user1.id !== 1); // 1 не дорівню 1 --> не правда --> true


// друга ітерація
console.log(user2.id);
console.log(user2.id !== 1); // 2 не дорівню 1 --> правда --> false




console.log(userIdOne2);



//=======================================================================

// FOREACH

users.forEach(value => console.log(value)); // ітерація масиву


// MAP

let mapUsers = users.map(value =>{ //формування новаго масиву з выдыбраними даними
    return {name: value.name, surname: value.surname}
});
console.log(mapUsers);

// FIND

let findTom = users.find(value => value.name === `tom`); // знайти елемент масиву з значенням
console.log(findTom);

//SORT

user1.age = 25;
user2.age = 23;
user3.age = 30;
user4.age = 32;

console.log(users);

let sortUsersAge = users.sort((a,b) => a.age - b.age); // сортувати - зростання
console.log(sortUsersAge);

