// let map = new Map<number, string>();
// map.set(1, "hello");
// map.set("name", "Nicholas Zakas");
// console.log(map.get(1));


let map:Map<string, number> = new Map();
map.set("world", 12334);
console.log(map.get("world"));
map?.delete("world");
console.log(map.get("world"));
