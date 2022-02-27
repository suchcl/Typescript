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
    console.log(a + b);
}
var sum2 = add(2, 3);
console.log(sum2);
var inc = function (a, b) { return a + b; };
console.log(inc(3, 4));
var multi = function (a, b, c) {
    if (b === void 0) { b = 2; }
    return a + b + c;
};
console.log(multi(1, 3));
