/**
 * 类型保护：常用的有4种类型：in关键字、typeof关键字、instanceof关键字、自定义类型保护的类型谓词
 */

// in关键字
interface Admin {
    name: string;
    privileges: string[]
}

interface Employee {
    name: string;
    startDate: Date
}

type UnknownEmployee = Employee | Admin;

function getEmployeeInformation(emp: UnknownEmployee) {
    // in关键字的核心思想，就是某个变量可能会有多个类型，需要对每种类型都做针对性处理
    if ("privileges" in emp) {
        console.log("福利:" + emp.privileges);
    }
    if ("startDate" in emp) {
        console.log("startDate:" + emp.startDate);
    }
}
const emp: Admin = {
    name: "Nicholas Zakas",
    privileges: ["远程办公", "可以非现场办公", "提供住房", "商务舱"]
};
getEmployeeInformation(emp);

// typeof关键字做类型保护
function offsetLeft(value: string, padding: string | number) {
    if (typeof padding === "string") {
        return padding + value;
    }
    if (typeof padding === "number") {
        return padding;
    }
    throw new Error("期望是一个string或者number类型值，但是得到的是" + padding);
}
console.log(offsetLeft("hello", "world")); // worldhello
console.log(offsetLeft("hello", 3));  // 3

// instanceof类型保护
interface Padder {
    getPaddingString(): string;
}

class SpaceRepeatingPadder implements Padder {
    numSpaces: number;
    constructor(numSpaces: number) {
        this.numSpaces = numSpaces;
    }
    getPaddingString() {
        return this.numSpaces.toString();
    }
}

class StringPadder implements Padder {
    value: string;
    constructor(value: string) {
        this.value = value;
    }
    getPaddingString() {
        return this.value;
    }
}

const padder: Padder = new SpaceRepeatingPadder(100);
if (padder instanceof SpaceRepeatingPadder) {
    console.log("数字类型值");
}

// 自定义类型保护的类型谓词
interface Bird {
    fly();
    layEggs();
}

interface Fish {
    swim();
    layEggs();
}

function isFish(pet: Fish | Bird): pet is Fish {
    return (pet as Fish).swim !== undefined; // 判断pet是否具有swim属性
}

function isBird(pet: Fish | Bird): pet is Bird {
    return (pet as Bird).fly !== undefined;
}

function getPet(pet: Fish | Bird) {
    if (isFish(pet)) {
        pet.swim();
    }
    if (isBird(pet)) {
        pet.fly();
    }
}

let fish: Fish = {
    swim() {
        console.log("游泳了");
    },
    layEggs() {
        console.log("小鱼生蛋了");
    }
}
let pig: Bird = {
    fly() {
        console.log("猪会飞了");
    },
    layEggs() {
        console.log("猪会生蛋了");
    }
};
console.log(getPet(fish));
console.log(getPet(pig));

let v: string | number;
v = "hello";
v = 12;

const sayHello = (name: string | undefined) => {
    console.log(name);
}

// 可辨识联合
enum Cartransmission {
    Automatic = 200,
    Manual = 300
}

interface Motorcycle {
    vType: 'motorcycle',
    make: number // 生产年份
}

interface Car {
    vType: 'car',
    transmission: Cartransmission // 动力传输方式：手动、自动
}

interface Truck {
    vType: 'truck',
    capacity: number // 容量
}

type Vehicle = Motorcycle | Car | Truck;

const EVALUATION_FACTOR = Math.PI;
// function evaluatePrice(vehicle:Vehicle){
//     return vehicle.capacity * EVALUATION_FACTOR;
// }

function evaluatePrice(vehicle: Vehicle) {
    switch (vehicle.vType) {
        case "car":
            return vehicle.transmission * EVALUATION_FACTOR;
        case "truck":
            return vehicle.capacity * EVALUATION_FACTOR;
        case "motorcycle":
            return vehicle.make * EVALUATION_FACTOR;
    }
}

const truck: Truck = {
    vType: 'truck',
    capacity: 10
};

const car: Car = {
    vType: 'car',
    transmission: Cartransmission.Manual
}
console.log(evaluatePrice(car));

type Message = string | string[];
function sayHaha(info: Message) {
    console.log(info);
}

console.log(sayHaha(["hello", "world", "!"])); // [ 'hello', 'world', '!' ]
console.log(sayHaha("Hello")); // Hello


interface IPerson {
    id: number;
    age: number;
}
interface IWorker {
    companyId: string
}
type Staff = IPerson & IWorker;

const staff: Staff = {
    id: 12,
    age: 16,
    companyId: "9823"
}
console.log(staff.age);
