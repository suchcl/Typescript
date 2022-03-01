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

// console.log(func(2, 34));

function add3(a, b) {
    console.log(a + b);
}
add3(1, 2) // 3
add3(3); // NaN
add3(4, 5, "hello"); // 9,多余的参数被忽略

var count = 0;
function counter(step) {
    step = step || 0;
    count += step;
    return count;
}
counter(3);
// console.log(counter(3));

var count2 = 3;
function counter2(step = 2) {
    count2 += step;
    return count2;
}
console.log(counter2(2));

const handleData = (arg1, ...args) => {
    console.log(args);
}
handleData(1, 2, 3, 4, 5); // [2, 3, 4, 5]

