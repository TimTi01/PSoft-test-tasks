// Task №1

let variable = '';

function getType(variable) {
    return (typeof variable);
}

console.log(getType(variable));
// ------------------------------------------

// Пример работы функции
let testArr = [1, '1', 1n, {'key':'value'}]

for (const iterator of testArr) {
    console.log(getType(iterator));
}