const array3 = [1, 6, `gjdna`, `jfndgrtnb`];



function craftArray(array){
    const newArray = [];
    for (let element of array) {
        newArray.push(element);
    }
    return newArray;
}

// виводить масив в консоль
function getArray() {
    const arrayR = craftArray([[1, 5, `gjdna`, `jfndgrtnb`]]);
    console.log(arrayR)
}


getArray();



//Скачати реакт
//Діаграма коду - метод фільтер
//Повторити обєкти