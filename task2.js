// Task №2

let arr = [11, 5, 19, 0, 7, 88, 1, 3, 6, 8, 6, 0];

//  Функции сортировки массива по возрастанию и убыванию
function getArrMax(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let k = i; k < arr.length; k++) {
            if (arr[i] < arr[k]) {
                let swap = arr[i];
                arr[i] = arr[k];
                arr[k] = swap;
            }
        }
    }
    return arr;
}

function getArrMin(arr) {
    for (let i = arr.length - 1; i >= 0; i--) {
        for (let k = i; k >= 0; k--) {
            if (arr[i] < arr[k]) {
                let swap = arr[i];
                arr[i] = arr[k];
                arr[k] = swap;
            }
        }
    }
    return arr;
}



//  Функции сортировки массива по возрастанию и убыванию с удалением повторяющихся элементов

function getArrMaxNotDublElem(arr) {
    let arrMax = getArrMax(arr);

    let newArr = [];
    
    for (let key of arrMax) {
        if (!newArr.includes(key)) {
            newArr.push(key);
        }
    }
    return newArr;
}

function getArrMinNotDublElem(arr) {
    let arrMin = getArrMin(arr);
    let newArr = [];
    
    for (let key of arrMin) {
        if (!newArr.includes(key)) {
            newArr.push(key);
        }
    }
    return newArr;
}



//  Функции поиска наибольшего и наименьшего элементов в массиве arr

function getMaxElem(arr) {
    let maxElem = 0;
    let minElem = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= maxElem) {
            maxElem = arr[i];
        } else if (arr[i] <= maxElem) {
            minElem = arr[i];
        }
    }
    return `Max: ${maxElem},\nMin: ${minElem}`;
}


console.log(getArrMax(arr));
console.log(getArrMin(arr));
console.log('-----');
console.log(getArrMaxNotDublElem(arr));
console.log(getArrMinNotDublElem(arr));
console.log('-----');
console.log(getMaxElem(arr));