// Task №1

let str = '';
let num = 1;
let arr = 1n;
let obj = {};
let bool = true;
let undef;
let nl = null;
let sym = Symbol('s');

function getType(str, num, arr, obj, bool, undef, nl, sym) {
    let arrayValues = [str, num, arr, obj, bool, undef, nl, sym];
    let arrType = [];

    for (let v of arrayValues) {
        arrType.push(typeof v);
    } 
    return arrType;
}

console.log(getType(str, num, arr, obj, bool, undef, nl, sym));

// ============================================================

// Task №2

let arr = [11, 5, 19, 0, 7, 88, 1, 3, 6, 8, 6, 0];

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

console.log(getArrMax(arr));
console.log(getArrMin(arr));