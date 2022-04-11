function prints(arg) {
    console.log(arg);
}
prints("12");
function id(arg) {
    return arg;
}
console.log(id(12));
console.log(id("12"));
console.log(id(false));
console.log(id(["12", 12]));
