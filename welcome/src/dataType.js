// 原始类型
var bool = true;
var num = 12;
var str = "Hello String";
// 数组
var arr = [1, 2, 3];
var arr2 = [4, 5, 6]; // 泛型
var arr3 = [];
var arr4 = [3, 3];
// console.log(arr4);
// 元祖
var tuple = [12, "Nicholas Zakas"];
var t2 = ["Hanmeimei", 16, ["apple", "banana"]];
var t3 = ["LiLei", 12, [3, 4]];
var t = ["Nicholas", 18, [4, 5]];
t.push(99);
console.log(t);
console.log(t[2]);
// console.log(t[3]);
// 函数
var add = function (x, y) { return x + y; };
var increment = function (x, y) { return x + y; };
function decrement(x, y) {
    return x - y;
}
// 声明了一个函数类型的变量，返回值为string，没有做实现
var compute;
// 做变量的函数的实现,做函数类型的实现的时候，形参可以不加类型注解，如a、b都没有加类型注解
compute = function (a, b) {
    return (a + b).toString();
};
console.log(compute(2, 3)); // 5
// 对象
// let obj:object = {
//     x:1,
//     y:2
// };
// obj.x;
var obj = {
    x: 12,
    y: 10
};
console.log(obj.x);
// symbol
var s1 = Symbol();
var s2 = Symbol();
// 多种数据类型，可以为变量dt声明了多种数据类型，可以为string类型值也可以为number类型值
var dt = 2;
dt = "hello";
var username = "";
username = 625;
