let s: string = "hello";
// 可以将null类型值赋值给string类型，我们就可以说字符串行兼容null类型
s = null;

interface X {
    a: number;
    b: number;
}

interface Y {
    a: number;
    b: number;
    c: number;
}

let x: X = {
    a: 1,
    b: 2
};

let y: Y = {
    a: 1,
    b: 2,
    c: 3
};
// 可以被正常赋值
x = y;
// 不可以被赋值，X类型的变量x中缺少了Y类型变量y的属性c
y = x;