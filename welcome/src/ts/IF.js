// 用变量定义函数类型
var subtraction;
// 下的代码定义好了一个混合类型，但是有个弊端,这是一个单例，lib对象的属性和方法只能调用一次，调用次数多了没有意义
var lib = (function () { });
lib.version = "1.1.0";
lib.play = function () {
    console.log("Let's go playing football!");
};
console.log(lib.version); // 1.1.0
// 我们可以对上述案例进行优化，封装到一个方法中，然后返回实例
function getLib(version) {
    var lib = (function () { });
    lib.version = version;
    lib.play = function () {
        console.log("Let's go playing football!");
    };
    return lib;
}
var lib1 = getLib("1.2.0");
console.log(lib1.version);
var lib2 = getLib("1.4.0");
console.log(lib2.version);
