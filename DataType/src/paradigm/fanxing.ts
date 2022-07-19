function identity<T>(value: T): T {
    return value;
}

console.log(identity<number>(1));


function identity2<T, U>(value: T, message: U): T {
    return value;
}

console.log(identity2<number, string>(10, "hello"));
console.log(identity2(100, "message"));

function identity3<T, U>(value: T, message: U): [T, U] {
    return [value, message];
}

console.log(identity3(11, "hello"));

// 泛型接口
interface Identities<V, M> {
    value: V,
    message: M
}

function identity4<T, U>(value: T, message: U): Identities<T, U> {
    let identities: Identities<T, U> = {
        value,
        message
    };
    return identities;
}
console.log(identity4(20, "Nicholas Zakas"));

function identity5<T, U>(value: T, message: U): Identities<T, U> {
    let identities: Identities<T, U> = {
        value,
        message
    };
    return identities;
}

console.log(identity5(68, "Semlinker"));

// 泛型类
interface GenericInterface<U, T> {
    value: U,
    name: T,
    getIdentity: () => U,
    getUserName: () => T
}

class IdentityClass<U, T> implements GenericInterface<U, T>{
    value: U;
    name: T;

    constructor(value: U, name: T) {
        this.value = value;
        this.name = name;
    }

    getIdentity(): U {
        return this.value;
    }

    getUserName(): T {
        return this.name;
    }
}

const id = new IdentityClass<number, string>(10, "Nicholas Zakas");
console.log("getIdentity():", id.getIdentity());
console.log("id.getUserName():", id.getUserName());


interface Length {
    length: number;
}
function identity6<T extends Length>(arg: T): T {
    console.log(arg.length);
    return arg;
}

function identity7<T>(arg: T[]): T[] {
    console.log(arg);
    return arg;
}
console.log(identity7([3, 4]));

interface Todo {
    title: string;
    description: string;
    completed: boolean;
}

interface Person {
    name: string;
    age: number;
    location: string;
}
// let ks2 = keyof Person;
// console.log(keyof Person);
// console.log(Person);

type ks3 = keyof Person;


enum Difficulty {
    Easy,
    Intermediate,
    Hard
}
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
}

let tsInfo = {
    name: "Typescript",
    superSetof: "javascript",
    difficulty: Difficulty.Hard
};

// 定义数组的两种方式：1.类型后添加[];2.使用泛型数组
let arr: string[] = []; // 类型后添加[]的方式创建数组

let arrNew: Array<string> = []; // 通过泛型数组的方式创建数组
let tuple: [string, number] = ["hello", 12];

// enum Direction {
//     NORTH,
//     SOURTH,
//     EAST = 10,
//     WEST
// };

// let dir:Direction = Direction.EAST;
// console.log(dir); // 2
// console.log(Direction.EAST); // 10
// console.log(Direction.WEST); // 11

enum Locations {
    WEST = "WEST"
}

enum Direction {
    NORTH = "NORTH",
    SOURTH = "SOURTH",
    EAST = "EAST",
    WEST = 6
}
console.log(Direction.EAST);
console.log(Direction.WEST);

let value: any = "hello";
let nums: number = value;
console.log(nums);
let str: string = value;
let isFlag: boolean = value;

let uk: unknown = "world";
let nuk: any = uk;
let uk2: unknown = uk;
// let uk3:string = uk; // 这里将unknown类型值赋值给了string类型变量，会报错

let tp: [name: string, age: number] = ["Nicholas Zakas", 16];
console.log(tp);


let num2:number = undefined;
let str2:string = null;