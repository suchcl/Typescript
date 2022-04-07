function inc1(x, y) {
    return x + y;
}
console.log(inc1(10, 4));
function inc2(x, y, z, q) {
    if (y === void 0) { y = 2; }
    if (q === void 0) { q = 1; }
    return x + y + z + q;
}
console.log(inc2(3, undefined, 4)); // 10
function inc3(x) {
    var rest = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        rest[_i - 1] = arguments[_i];
    }
    return x + rest.reduce(function (prev, cur) { return prev + cur; });
}
console.log(inc3(2, 3, 4, 5));
function inc4() {
    var rest = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        rest[_i] = arguments[_i];
    }
    var first = rest[0];
    if (typeof first === "string") {
        return rest.join(" ");
    }
    if (typeof first === "number") {
        return rest.reduce(function (prev, cur) { return prev + cur; });
    }
}
console.log(inc4(3, 4, 5));
console.log(inc4("x", "y", "z"));
