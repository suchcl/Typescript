// 原始类型
let bool:boolean = true;
let num:number = 12;
let str:string = "Hello String";

// 数组
let arr:number[] = [1,2,3];
let arr2:Array<number> = [4,5,6]; // 泛型

// 元祖
let tuple:[number,string] = [12,"Nicholas Zakas"];

// 函数
let add = (x:number,y:number):number => {
    return x + y;
}

// 对象
let obj:object = {
    x:1,
    y:2
};

// symbol
let s1:symbol = Symbol();
let s2 = Symbol();

// 多种数据类型，可以为变量dt声明了多种数据类型，可以为string类型值也可以为number类型值
let dt:string | number = 2;
dt = "hello";

export {add,dt};