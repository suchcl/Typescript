function add(num:number):number{
    console.log(num);
    return num;
}

// res结果是什么？
type Test<T> = T extends number ? 1 : 2;
type res = Test<1 | 'a'>

// type Test<T> = T extends true ? 1 : 2;

function print0(arg:string):string{
    return arg;
}

function print2(arg:number):number{
    return arg;
}

function print3(arg: string | number){
    console.log(arg);   
}

function print4(arg:any):any{
    console.log(arg);
}

const res:string = print4(123);

function print5<T>(arg:T):T{
    console.log(arg);
    return arg;
}

interface Print2{
    (x:string):string
}
let p:Print2 = (x:string) => x;
console.log(p("34"));

type Print = <T>(arg:T) => T;
const print6:Print = (arg) => {
    return arg;
}
const print7:Print = (arg) => arg;
console.log(print6(3));

// interface IPrint<T>{
//     (arg:T):T|string;
// }

// function printi<T>(arg:T):T{
//     return arg;
// }
// const myPrint:IPrint<number> = printi;
// const myPrint2:IPrint<string> = (arg:string) => arg;
// console.log(myPrint2("Hello Nicholas Zakas"));

interface IPrint<T=string>{
    (arg:T):T;
}
const ip:IPrint<number> = (x:number) => x;
console.log(ip(12));

let ttt:[string,number]=["hello",12];
function swap(tt:[string,number]):[number,string]{
    return [tt[1],tt[0]];
}
console.log(swap(ttt));

function swap2<T,U>(tuple:[T,U]):[U,T]{
    return [tuple[1], tuple[0]]
}
const res2 = swap2([23,false]);
console.log(typeof res2[0]);