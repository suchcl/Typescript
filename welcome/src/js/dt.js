let s = Symbol();
let s2 = Symbol();
if (s == s2) {
    console.log("棒棒的");
} else {
    console.log("不太开心了"); // 会输出，s和s2永远不会相等
}

// let sm = new Symbol("testSymbol");
// console.log(sm);
