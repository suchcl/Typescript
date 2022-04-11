// // // function log(value: any): any {
// // //     console.log(value);
// // //     return value;
// // // }

// // // log(12);
// // // log("hello world!");

// // function log<T>(value: T): T {
// //     console.log(value);
// //     return value;
// // }

// // // 明确指定函数参数类型的方式调用泛型函数
// // log<string[]>(['a', 'b']);
// // log(['1', '2', '3']); // 以类型推导的方式调用泛型函数，建议使用这种方式

// // // 声明一个泛型类型函数类型
// // type Log = <T>(value: T) => T;
// // // 定义一个泛型类型函数的实现
// // // let myLog:Log = log;
// // let myLog: Log = <T>(value: T): T => {
// //     console.log(value);
// //     return value;
// // }
// // myLog(12); // 12

// interface Log<T = number> {
//     // <T>(value: T): T
//     (value: T): T
// }

// let myLog: Log = <T>(value: T): T => {
//     console.log(value);
//     return value;
// }
// myLog(15);
// // myLog("Hello");


// class Log<T>{
//     run(value: T) {
//         console.log(value);
//     }
// }

// let log = new Log<string>();
// log.run("hello world!");

// let log2 = new Log<number>();
// log2.run(2);


interface Length {
    length: number;
}

function log<T extends Length>(value: T): T {
    console.log(value, value.length);
    return value;
}
log("12"); // 12 2