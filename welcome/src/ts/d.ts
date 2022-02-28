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

function add(a:number,b:number){
    return a + b;
}

let sum2 = add(2,3);
console.log(sum2);

let c3:number = 10;
let inc = (a:number,b:number) => a + b + c3;

console.log(inc(3,4));

let z:number = 5;
function add2(x:number,y:number){
    return (x + y + z).toString();
}
console.log(add2(2,4)); // 11
console.log(typeof add2(2,4)); // string


var adss:((x:number,y:number) => number) = function(x:number,y:number):number{
    return x+y;
}

const add5 = (a:number,b:number):number => {
    return a+b;
}

let add6:(a:number,b:number) => number;
add6 = (x:number,y:number) => x + y;
console.log(add6(3,4));


interface User{
    id:number,
    name: string,
    age: number
}

const userInfo:(id:number,name:string,age:number) => User = (id:number,name:string,age:number):User => {
    return {
        id,
        name,
        age
    }
}

console.log(userInfo(12,"Nicholas Zakas", 16));

// let increment:(x:number,y:number) => number;
// increment = (x:number,y:number):number => x + y;
// console.log(increment(2,3));

// let increment:(x:number,y:number) => number = (x:number,y:number) => x + y;
// console.log(increment(5,6));

interface Increment {
    (x:number,y:number):number
}
let icr:Increment = (x:number,y:number) => x + y;
console.log(icr(3,4)); // 7