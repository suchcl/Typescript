function prints(arg: string): void {
    console.log(arg);
}

prints("12");

function id<T>(arg: T): T {
    return arg;
}

console.log(id(12));
console.log(id("12"));
console.log(id(false));
console.log(id(["12", 12]));