function add(num) {
    console.log(num);
    return num;
}
// type Test<T> = T extends true ? 1 : 2;
function print0(arg) {
    return arg;
}
function print2(arg) {
    return arg;
}
function print3(arg) {
    console.log(arg);
}
function print4(arg) {
    console.log(arg);
}
var res = print4(123);
function print5(arg) {
    console.log(arg);
    return arg;
}
var p = function (x) { return x; };
console.log(p("34"));
var print6 = function (arg) {
    return arg;
};
var print7 = function (arg) { return arg; };
console.log(print6(3));
var ip = function (x) { return x; };
console.log(ip(12));
var ttt = ["hello", 12];
function swap(tt) {
    return [tt[1], tt[0]];
}
console.log(swap(ttt));
function swap2(tuple) {
    return [tuple[1], tuple[0]];
}
var res2 = swap2([23, false]);
console.log(typeof res2[0]);
