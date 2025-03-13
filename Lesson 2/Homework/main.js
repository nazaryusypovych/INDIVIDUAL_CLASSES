// Попрактикуватися з FOR IN, FOR OF.
// Створити дві функції: переша - створює і повертає масив, друга - приймає результат першої функції і виводить її в консоль.


// Спосіб 1:

// створює новий масив
function craftArray(array){
    let newArray = [];
    for (let element of array) {
        newArray.push(element);
    }
    return newArray;
}

// виводить масив в консоль
function getArray(array) {
    console.log(array);

}

// Спосіб 2:

function CraftObject (name, age, status){ // Створює обєкти не масив
    this.name = name;
    this.age = age;
    this.status = status;

}

let user1 = new CraftObject(`okpk`, 8, true);
console.log(user1);


//----------------------------------------

let array = [`frege`, 3, 7, true, `njvnnk`];

console.log(array[0]); // перший елемент масиву
console.log(array[1]); // другий елемент масиву


console.log(array.length); // кількість елемнтів в масиві


array[array.length] = `gjtrbbmb`; // додати елемент в кынець масиву (змінюємо існуючий елемент масиву)
console.log(array);

console.log(array.length);



for (let element of array){
    console.log(element);
}

for (let i = 0; i < array.length; i++) {
    let element = array[i];
    console.log(element)

}

let array2 = [`dnvfvn`, 2, `dnvjevn`, 8, 9];

console.log(array2);

console.log(array2[0]);
console.log(array2[2]);


console.log(array2.length);

array2[5] = 55555;
console.log(array2);

array2[array2.length] = 666666;
console.log(array2);


for (const array2Element of array2) {
    console.log(array2Element);
}


for (let i = 0; i < array2.length; i++) {
    console.log(array2[i]);
}











let user = { // обєкт
    name: 'nazar',
    age: 45,
    status: true
}

console.log(user); //вивів усесь обэкт

console.log(user.age); // вивів значення ключа age

user.id = 6 // додав ключ id до обєкту user
console.log(user);




for (const key in user) {
    console.log(key); // ключі обєкта user

}

for (const key in user) {
    console.log(user[key]); //значення ключів обєкта user

}

for (const key in user) {
    console.log(`${key} - ${user[key]}`);

}




let user2 = { // обєкт
    name: 'vova',
    age: 98,
    status: false
}


console.log(user2);

console.log(user2.name);

user2.id = 7;
console.log(user2);


for (const user2Key in user2) {
    console.log(user2Key); // вивести ключі

}


for (const user2Key in user2) {
    console.log(user2[user2Key]); // вивести значення
}


for (const user2Key in user2) {
    console.log(`${user2Key} - ${user2[user2Key]}`); // вивести значення
}




