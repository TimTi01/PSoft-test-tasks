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