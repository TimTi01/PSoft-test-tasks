// Task №2

let arr = [11, 5, 19, 0, 7, 88, 1, 3, 6, 8, 6, 0];
let max = true;
let notDubleEl = true;

//  Функции сортировки массива по возрастанию и убыванию + удаление повторяющихся элементов в массиве
function getSortArr(arr, max, notDubleEl) {
    let newArr = [];

    if (max) {
        for (let i = 0; i < arr.length; i++) {
            for (let k = i; k < arr.length; k++) {
                if (arr[i] < arr[k]) {
                    let swap = arr[i];
                    arr[i] = arr[k];
                    arr[k] = swap;
                } 
            }
        }
    } else if (!max) { //min
        for (let i = arr.length - 1; i >= 0; i--) {
            for (let k = i; k >= 0; k--) {
                if (arr[i] < arr[k]) {
                    let swap = arr[i];
                    arr[i] = arr[k];
                    arr[k] = swap;
                }
            }
        }

    }

    if (notDubleEl) {
        for (let key of arr) {
            if (!newArr.includes(key)) {
                newArr.push(key);
            }
        }
        return newArr;
    }

    return arr;
}

//  Функции поиска наибольшего и наименьшего элементов в массиве arr
function getMaxElem(arr) {
    let maxElem = -Infinity;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= maxElem) {
            maxElem = arr[i];
        }
    }
    return maxElem;
}

function getMinElem(arr) {
    let minElem = Infinity;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] <= minElem) {
            minElem = arr[i];
        }
    }
    return minElem;
}

console.log(getSortArr(arr, max, notDubleEl));
console.log(getMaxElem(arr));
console.log(getMinElem(arr));