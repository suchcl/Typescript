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