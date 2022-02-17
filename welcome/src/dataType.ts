// 原始类型
let bool:boolean = true;
let num:number = 12;
let str:string = "Hello String";

// 数组
let arr:number[] = [1,2,3];
let arr2:Array<number> = [4,5,6]; // 泛型
let arr3:string[] = [];
let arr4:Array<number> = [3,3];
// console.log(arr4);


// 元祖
let tuple:[number,string] = [12,"Nicholas Zakas"];

let t2:[string,number,string[]]=["Hanmeimei",16,["apple","banana"]];
let t3:[string,number,number[]] = ["LiLei",12,[3,4]];

let t:[string,number,Array<number>] = ["Nicholas",18,[4,5]];
t.push(99);
console.log(t);
console.log(t[2]);
console.log(t[3]);




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

let username: string | number = "";
username = 625;