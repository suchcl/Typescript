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
var t = ["Nicholas", 18, [4, 5]];
var t2 = ["Hanmeimei", 16, ["apple", "banana"]];
var t3 = ["LiLei", 12, [3, 4]];
// t.forEach((item) => {
//     console.log(item);
// });
t.push(99);
console.log(t);
console.log(t[2]);
console.log(t[3]);
// 函数
var add = function (x, y) {
    return x + y;
};
// 对象
var obj = {
    x: 1,
    y: 2
};
// symbol
var s1 = Symbol();
var s2 = Symbol();
// 多种数据类型，可以为变量dt声明了多种数据类型，可以为string类型值也可以为number类型值
var dt = 2;
dt = "hello";
var username = "";
username = 625;
