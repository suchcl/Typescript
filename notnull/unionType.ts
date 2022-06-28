const sayHello = (name: string | number | undefined) => {
    console.log(name);
}

let num: 1 | 2 = 1;
num = 2;
type EventNames = "click" | "scroll" | "mouseover";

enum CarTransmission {
    Automatic = 200,
    Manual = 300
}

interface Motorcycle {
    vType: 'motorcycle';
    make: number;
}

interface Car {
    vType: 'car';
    transmission: CarTransmission;
}

interface Trunk {
    vType: 'trunk';
    capacity: number
}

type Vehicle = Motorcycle | Car | Trunk;

const EVALUATION_FACTOR = Math.PI;

function evaluatePrice(vehicle: Vehicle) {
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

const myTrunk: Trunk = {
    vType: 'trunk',
    capacity: 9.5
};
evaluatePrice(myTrunk);


type PartialPointX = { x: number };
type Point = PartialPointX & { y: number };
let point: Point = {
    x: 10,
    y: 12
};

interface X {
    c: string;
    d: string;
}

interface Y {
    // c: number;
    e: string;
}

type XY = X & Y;
type YX = Y & X;
let p: XY = {
    c: "hello",
    d: "world",
    e: "!"
};

interface D {
    d: boolean;
}
interface E {
    e: string;
}
interface F {
    f: number
}