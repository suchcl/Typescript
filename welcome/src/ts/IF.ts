// 用接口定义函数类型
interface Add {
    (x: number, y: number): number
}

// 用变量定义函数类型
let subtraction: (x: number, y: number) => number;

// 用类型别名定义函数类型
type addition = (x: number, y: number) => number;


// 定一个一个混合类型接口
interface Lib {
    (): void;
    version: string;
    play(): void;
}

// 下的代码定义好了一个混合类型，但是有个弊端,这是一个单例，lib对象的属性和方法只能调用一次，调用次数多了没有意义
let lib: Lib = (() => { }) as Lib;
lib.version = "1.1.0";
lib.play = () => {
    console.log("Let's go playing football!");
}

console.log(lib.version);// 1.1.0

// 我们可以对上述案例进行优化，封装到一个方法中，然后返回实例
function getLib(version: string) {
    let lib: Lib = (() => { }) as Lib;
    lib.version = version;
    lib.play = () => {
        console.log("Let's go playing football!");
    }
    return lib;
}

let lib1 = getLib("1.2.0");
console.log(lib1.version);

let lib2 = getLib("1.4.0");
console.log(lib2.version);

