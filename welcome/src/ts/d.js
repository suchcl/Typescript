var isHandsome = "hello";
var age = 12;
var firstName = "Nicholas";
var lastName = "Zakas";
var realName = "".concat(firstName, " ").concat(lastName);
// console.log(lastName);
// console.log(realName);
// strictNullChecks为true会报错
// let mail:string = null;
// let height:number = undefined;
// console.log(mail); // null
// console.log(height); // undefined
// let re:void = undefined;
// let res:void = null; // 报错，类型异常
function splice(param) {
    return param / 2;
}
// console.log(splice("hello"));
// console.log(splice(10));
var arr = [1, 2, 3];
console.log(typeof arr); // object
console.log(Array.isArray(arr)); // true
console.log(arr instanceof (Array));
var t = [12, "hello"];
console.log(typeof t); // object
console.log(Array.isArray(t)); // true,tuple在语言层面，也被认为是数组
// console.log(t instanceof Tuple);  // tuple标红了，难道tuple不是ts中的关键字或者保留字？
function add(a, b) {
    return a + b;
}
var sum2 = add(2, 3);
console.log(sum2);
var c3 = 10;
var inc = function (a, b) { return a + b + c3; };
console.log(inc(3, 4));
var z = 5;
function add2(x, y) {
    return (x + y + z).toString();
}
console.log(add2(2, 4)); // 11
console.log(typeof add2(2, 4)); // string
var adss = function (x, y) {
    return x + y;
};
var add5 = function (a, b) {
    return a + b;
};
var add6;
add6 = function (x, y) { return x + y; };
console.log(add6(3, 4));
var userInfo = function (id, name, age) {
    return {
        id: id,
        name: name,
        age: age
    };
};
console.log(userInfo(12, "Nicholas Zakas", 16));
var icr = function (x, y) { return x * y; };
console.log(icr(2, 5));
function incc(x, y) {
    return x + y;
}
var add11 = function (x, y) { return x + y; };
console.log(add11(1, 2)); // 3
var add12 = function (x, y) { return x + y; };
console.log(add12(2, 3));
var add13 = function (x, y) { return x + y; };
console.log(add13(4, 5));
var add14 = function (a, b) { return a + b; };
// console.log(add14(4,6));
var add15 = function (x, y) { return x + y; };
var add17 = function (x, y, z) {
    if (z) {
        return x + y + z;
    }
    else {
        return x + y;
    }
};
console.log(add17(1, 2));
function add18(a, b, c) {
    console.log(a + b + c);
}
add18(1, 2);
