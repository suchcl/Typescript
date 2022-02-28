let s = Symbol();
let s2 = Symbol();
if (s == s2) {
    console.log("棒棒的");
} else {
    console.log("不太开心了"); // 会输出，s和s2永远不会相等
}

// let sm = new Symbol("testSymbol");
// console.log(sm);


var c = 12;
function ad(a, b) {
    return a + b + c;
}
console.log(ad(2, 3));

var z = 10;
const add2 = (x, y) => x + y + z;
console.log(add2(1, 3));

(x, y) => {
    return x + y;
}

var a1 = function (x, y) {
    return x + y;
};

// (a, b) => sum = function () {
//     return a + b;
// };
// console.log(sum(1, 2));

// let func = value => value;

// function func(value) {
//     return value;
// }

// let func = (value, num) => value * num;

// function func(value, num) {
//     return value * num;
// }


let func = (value, num) => ({
    value: 12,
    num: 8,
    total: value * num
});

console.log(func(2, 34));