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
var tuple = [12, "hello"];
console.log(typeof tuple); // object
console.log(Array.isArray(tuple)); // true,tuple在语言层面，也被认为是数组
