// Попрактикуватися з FOR IN, FOR OF.
// Створити дві функції: переша - створює і повертає масив, друга - приймає результат першої функції і виводить її в консоль.



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


