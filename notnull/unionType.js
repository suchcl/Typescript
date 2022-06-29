var sayHello = function (name) {
    console.log(name);
};
var num = 1;
num = 2;
var CarTransmission;
(function (CarTransmission) {
    CarTransmission[CarTransmission["Automatic"] = 200] = "Automatic";
    CarTransmission[CarTransmission["Manual"] = 300] = "Manual";
})(CarTransmission || (CarTransmission = {}));
var EVALUATION_FACTOR = Math.PI;
function evaluatePrice(vehicle) {
    // return vehicle.capacity * EVALUATION_FACTOR;
    switch (vehicle.vType) {
        case "car":
            return vehicle.transmission * EVALUATION_FACTOR;
        case "motorcycle":
            return vehicle.make * EVALUATION_FACTOR;
        case "trunk":
            return vehicle.capacity * EVALUATION_FACTOR;
    }
}
var myTrunk = {
    vType: 'trunk',
    capacity: 9.5
};
evaluatePrice(myTrunk);
var point = {
    x: 10,
    y: 12
};
var p = {
    c: "hello",
    d: "world",
    e: "!"
};
var list = [
    {
        name: "Nicholas Zakas",
        grade: 2
    },
    {
        name: "谭浩强",
        major: "Computer Science"
    }
];
console.log(list[0].name, list[1].major);
