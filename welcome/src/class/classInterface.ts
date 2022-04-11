interface Human {
    // 接口中不能约束类的构造函数，下面一行代码即是一个构造函数
    // new(name: string): void;
    name: string;
    // age: number;
    eat(): void;
}

class Asian implements Human {
    constructor(name: string, private age: number) {
        this.name = name;
    }
    name: string;
    eat(): void {
        console.log("我喜欢吃大米饭!");
    }

    play() {
        console.log("play football!");
    }
}

interface Man extends Human {
    run(): void;
}

interface Child extends Man {
    cry(): void;
}

interface Boy extends Child {
    age: number;
}

let boy: Boy = {
    name: "Nicholas Zakas",
    age: 12,
    run() {
        console.log("百米跑步第一名!");
    },
    cry() {
        console.log("从来不哭鼻子!");
    },
    eat() {
        console.log("男孩喜欢吃冰激凌!");

    }
};

boy.eat();

class Auto {
    state = 1;
}

interface AutoInterface extends Auto {
    color: string;
}

class C implements AutoInterface {
    state: number = 2;
    color: string = "yello";
}

let car = new C();
console.log(car.state); // 2



class Bus extends Auto implements AutoInterface {
    color: string = "green";
}

let bus = new Bus();
console.log(bus.color); // green
console.log(bus.state); // 1
