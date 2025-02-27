// false повертає JS (пуста строка, 0, андефаєнд, null, false)

let ss = null;

if(null == 0){
    console.log(`hvnjfdv`)
}else {
    console.log(`111111`)
}


let user3 = { // обєкт
    name: 'nazar',
    age: 45,
    "statys": true
}

for (const item in user3){
    console.log(user3[item])
}

// Попрактикуватися з FOR IN, FOR OF.
// Створити дві функції: переша - створює і повертає масив, друга - приймає результат першої функції і виводить її в консоль.