// 直接通过字面量为变量声明类型
let a: 10; // a值就只能是10了

// a = 20; // 给a重新赋值，报异常了

let sex: "male" | "female";
sex = "male";
sex = "female";

let flag: number | string;
flag = 12; // 赋值number类型没有问题
flag = "Nicholas Zakas"; // 赋值string类型没有问题
// flag = false; // 赋值boolean类型有问题了


// 下面两种方式都不建议使用
let d: any;
let e;

// // unknown类型的变量可以被赋值任何类型的值
// let n:unknown;
// n = 12;
// n = "Hello";
// n = false;

// let ay:any;
// ay = "Hello";

// let s:string;
// s = ay; // any类型的变量可以赋值给string类型的变量
// s = n; // unknown类型的变量不能赋值给其他类型的变量
// n = 26; // unknown类型的变量，值可以是其他类型的值，如别赋了一个number类型的值

let un:unknown;
un = "hello";

let str:string;
str = un as string;

let num:number;
num = <number>un;



// if(typeof un === "string"){
//     s = un; // 先进行un变量的类型判断，当un的值是string类型时，再将un赋值给一个string类型的变量，就没问题了
// }

function fn():void{
    // 这3种返回都是可以的
    // return;
    // return null;
    return undefined;
}



function f():never{
    throw new Error();
}

// 声明一个结构为{name:string,age:number}的对象
let obj:{name:string,age:number};
obj = {
    name: "Nicholas Zakas",
    age: 18
};


let obj2:{name:string,age?:number};
obj2 = {
    name: "Nicholas Zakas" // 结束了，不加age属性了，也是正常
};

// 我想添加任意类型的属性
// propName自定义，可以是任何其他的变量名，表示对象中的属性名是一个string类型的，如age、job；后面的any表示属性的值是任意类型的，如age：18，job:"Programmer"
let obj3:{name:string,[propName:string]:any};
obj3 = {
    name: "Nicholas Zakas",
    age: 18,
    job: "Programmer"
};


// 表示定义一个函数类型结构，函数有2个参数，都是number类型的，且函数的返回值是number类型
let ff:(n1:number,n2:number) => number;

// 这里实例化上面定义的结构的函数
// 实例化的这个函数中的参数的类型，可以写也可以不写，不是必须的，以及函数的返回值类型，都是可选的
ff = function(p1:number,p2:number){
    return p1 + p2;
}
console.log(ff(2,3)); // 5

/**
 * 两种声明数组的方式
 * let 变量:类型[]
 * let 变量：Array<类型>
 */

// 表示声明一个string类型的数组
let arr:string[];

// 表示声明一个number类型的数组
let ar:Array<number>

/**
 * 元祖：表示长度固定的数组
 * 当元素个数固定的时候，就可以使用元祖，比数组的性能会好一些
 * 元祖中元素，可以是不同的数据类型
 */
let tp:[string,number];
tp = ["hello",789];

/**
 * enum  枚举
 * 语法：enum 变量{值，值}
 */

enum Gender{
    男,
    女
}
let person:{name:string,age:number,gender:Gender};
person = {
    name: "Nicholas",
    age: 18,
    gender: Gender.男
};

console.log(person.gender);

let p:string & number;
let p2:string | number;

let p3: {name: string} & {age: number};
p3={
    name: "Nicholas Zakas",
    age: 18
}

/**
 * 类型别名
 * type type类型名 = 值
 */
type K = 1 | 2 | 3 | 4;
let k:K;
let m:K;
k = 3;
m = 4;