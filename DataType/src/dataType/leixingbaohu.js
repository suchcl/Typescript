/**
 * 类型保护：常用的有4种类型：in关键字、typeof关键字、instanceof关键字、自定义类型保护的类型谓词
 */
function getEmployeeInformation(emp) {
    // in关键字的核心思想，就是某个变量可能会有多个类型，需要对每种类型都做针对性处理
    if ("privileges" in emp) {
        console.log("福利:" + emp.privileges);
    }
    if ("startDate" in emp) {
        console.log("startDate:" + emp.startDate);
    }
}
var emp = {
    name: "Nicholas Zakas",
    privileges: ["远程办公", "可以非现场办公", "提供住房", "商务舱"]
};
getEmployeeInformation(emp);
// typeof关键字做类型保护
function offsetLeft(value, padding) {
    if (typeof padding === "string") {
        return padding + value;
    }
    if (typeof padding === "number") {
        return padding;
    }
    throw new Error("期望是一个string或者number类型值，但是得到的是" + padding);
}
console.log(offsetLeft("hello", "world")); // worldhello
console.log(offsetLeft("hello", 3)); // 3
var SpaceRepeatingPadder = /** @class */ (function () {
    function SpaceRepeatingPadder(numSpaces) {
        this.numSpaces = numSpaces;
    }
    SpaceRepeatingPadder.prototype.getPaddingString = function () {
        return this.numSpaces.toString();
    };
    return SpaceRepeatingPadder;
}());
var StringPadder = /** @class */ (function () {
    function StringPadder(value) {
        this.value = value;
    }
    StringPadder.prototype.getPaddingString = function () {
        return this.value;
    };
    return StringPadder;
}());
var padder = new SpaceRepeatingPadder(100);
if (padder instanceof SpaceRepeatingPadder) {
    console.log("数字类型值");
}
function isFish(pet) {
    return pet.swim !== undefined; // 判断pet是否具有swim属性
}
function isBird(pet) {
    return pet.fly !== undefined;
}
function getPet(pet) {
    if (isFish(pet)) {
        pet.swim();
    }
    if (isBird(pet)) {
        pet.fly();
    }
}
var fish = {
    swim: function () {
        console.log("游泳了");
    },
    layEggs: function () {
        console.log("小鱼生蛋了");
    }
};
var pig = {
    fly: function () {
        console.log("猪会飞了");
    },
    layEggs: function () {
        console.log("猪会生蛋了");
    }
};
console.log(getPet(fish));
console.log(getPet(pig));
