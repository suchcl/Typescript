// // function log(value: any): any {
// //     console.log(value);
// //     return value;
// // }

// // log(12);
// // log("hello world!");

// function log<T>(value: T): T {
//     console.log(value);
//     return value;
// }

// // 明确指定函数参数类型的方式调用泛型函数
// log<string[]>(['a', 'b']);
// log(['1', '2', '3']); // 以类型推导的方式调用泛型函数，建议使用这种方式

// // 声明一个泛型类型函数类型
// type Log = <T>(value: T) => T;
// // 定义一个泛型类型函数的实现
// // let myLog:Log = log;
// let myLog: Log = <T>(value: T): T => {
//     console.log(value);
//     return value;
// }
// myLog(12); // 12

interface Log<T = number> {
    // <T>(value: T): T
    (value: T): T
}

let myLog: Log = <T>(value: T): T => {
    console.log(value);
    return value;
}
myLog(15);
myLog("Hello");