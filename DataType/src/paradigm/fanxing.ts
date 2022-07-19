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
function getProperty<T, K extends keyof T>(obj:T,key:K):T[K]{
    return obj[key];
}

let tsInfo = {
    name: "Typescript",
    superSetof: "javascript",
    difficulty: Difficulty.Hard
};