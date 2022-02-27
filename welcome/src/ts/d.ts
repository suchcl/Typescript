let isHandsome:string = "hello";

let age:number = 12;

let firstName:string = "Nicholas";
let lastName:string | number = "Zakas";
let realName:string = `${firstName} ${lastName}`;
// console.log(lastName);
// console.log(realName);

// strictNullChecks为true会报错
// let mail:string = null;
// let height:number = undefined;
// console.log(mail); // null
// console.log(height); // undefined

// let re:void = undefined;
// let res:void = null; // 报错，类型异常

function splice(param:unknown){
    return param as number / 2;
}
// console.log(splice("hello"));
// console.log(splice(10));




let arr:number[] = [1,2,3];
console.log(typeof arr); // object
console.log(Array.isArray(arr)); // true
console.log(arr instanceof(Array));


let t:[number,string] = [12,"hello"];
console.log(typeof t); // object
console.log(Array.isArray(t)); // true,tuple在语言层面，也被认为是数组
// console.log(t instanceof Tuple);  // tuple标红了，难道tuple不是ts中的关键字或者保留字？

