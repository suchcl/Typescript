/**
 * fn<T> 定义泛型，T可以自定义，可以是任意的
 * @param a 类型为泛型T
 * @returns 返回泛型类型T类型
 */
function fn<T>(a: T): T {
    return a;
}

console.log("泛型开始");

// 调用
console.log(fn(10));
// 指定string类型的泛型
console.log(fn<string>("Hello，泛型"));
console.log("泛型结束");

// 定义了2个泛型：T和K
function fn2<T, K>(a: T, b: K): number {
    return 0;
}
fn2(12, "hello");

interface AA {
    name: string;
    length: number;
}

// 无论是实现的接口还是继承的抽象类，统统使用extends关键字
function fn3<T extends AA>(a: T): number {
    return A.length;
}
fn3({ name: "Nicholas", length: 90 });

class BB<T>{
    name: T;
    constructor(name: T) {
        this.name = name;
    }
}