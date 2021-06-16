let arr = [{name: "overflow", value: "hidden"}, 
            {name: "cursor", value: "pointer"}];

function getObject(arr) {
    let newObj = {};
    for (const iter of arr) {
        newObj[iter.name] = iter.value;
    }
    return newObj;
}

console.log(getObject(arr));