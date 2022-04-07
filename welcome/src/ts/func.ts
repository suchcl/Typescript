function inc1(x: number, y: number): number {
    return x + y;
}
interface increment {
    (x: number, y: number): number
}


console.log(inc1(10, 4));


function inc2(x: number, y = 2, z: number, q = 1) {
    return x + y + z + q;
}

console.log(inc2(3, undefined, 4)); // 10

function inc3(x: number, ...rest: number[]) {
    return x + rest.reduce((prev, cur) => prev + cur);
}
console.log(inc3(2, 3, 4, 5));

function inc4(...rest: number[]): number;
function inc4(...rest: string[]): string;
function inc4(...rest: any[]): any {
    let first = rest[0];
    if (typeof first === "string") {
        return rest.join(" ");
    }
    if (typeof first === "number") {
        return rest.reduce((prev, cur) => prev + cur);
    }
}
console.log(inc4(3, 4, 5)); // 12
console.log(inc4("x", "y", "z")); // x y z

