function identity(value) {
    return value;
}
console.log(identity(1));
function identity2(value, message) {
    return value;
}
console.log(identity2(10, "hello"));
console.log(identity2(100, "message"));
function identity3(value, message) {
    return [value, message];
}
console.log(identity3(11, "hello"));
function identity4(value, message) {
    var identities = {
        value: value,
        message: message
    };
    return identities;
}
console.log(identity4(20, "Nicholas Zakas"));
function identity5(value, message) {
    var identities = {
        value: value,
        message: message
    };
    return identities;
}
console.log(identity5(68, "Semlinker"));
var IdentityClass = /** @class */ (function () {
    function IdentityClass(value, name) {
        this.value = value;
        this.name = name;
    }
    IdentityClass.prototype.getIdentity = function () {
        return this.value;
    };
    IdentityClass.prototype.getUserName = function () {
        return this.name;
    };
    return IdentityClass;
}());
var id = new IdentityClass(10, "Nicholas Zakas");
console.log("getIdentity():", id.getIdentity());
console.log("id.getUserName():", id.getUserName());
function identity6(arg) {
    console.log(arg.length);
    return arg;
}
function identity7(arg) {
    console.log(arg);
    return arg;
}
console.log(identity7([3, 4]));
var Difficulty;
(function (Difficulty) {
    Difficulty[Difficulty["Easy"] = 0] = "Easy";
    Difficulty[Difficulty["Intermediate"] = 1] = "Intermediate";
    Difficulty[Difficulty["Hard"] = 2] = "Hard";
})(Difficulty || (Difficulty = {}));
function getProperty(obj, key) {
    return obj[key];
}
var tsInfo = {
    name: "Typescript",
    superSetof: "javascript",
    difficulty: Difficulty.Hard
};
// 定义数组的两种方式：1.类型后添加[];2.使用泛型数组
var arr = []; // 类型后添加[]的方式创建数组
var arrNew = []; // 通过泛型数组的方式创建数组
var tuple = ["hello", 12];
// enum Direction {
//     NORTH,
//     SOURTH,
//     EAST = 10,
//     WEST
// };
// let dir:Direction = Direction.EAST;
// console.log(dir); // 2
// console.log(Direction.EAST); // 10
// console.log(Direction.WEST); // 11
var Locations;
(function (Locations) {
    Locations["WEST"] = "WEST";
})(Locations || (Locations = {}));
var Direction;
(function (Direction) {
    Direction["NORTH"] = "NORTH";
    Direction["SOURTH"] = "SOURTH";
    Direction["EAST"] = "EAST";
    Direction[Direction["WEST"] = 6] = "WEST";
})(Direction || (Direction = {}));
console.log(Direction.EAST);
console.log(Direction.WEST);
var value = "hello";
var nums = value;
console.log(nums);
var str = value;
var isFlag = value;
var uk = "world";
var nuk = uk;
var uk2 = uk;
// let uk3:string = uk; // 这里将unknown类型值赋值给了string类型变量，会报错
var tp = ["Nicholas Zakas", 16];
console.log(tp);
var user = {
    name: "Nicholas Zakas",
    age: 18
};
function getUser(user) {
    return user;
}
console.log(getUser(user));
