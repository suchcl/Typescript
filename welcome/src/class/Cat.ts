class Cat {
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
    name: string;
    age: number;
    run() { }
    private play() {
        console.log("playing");
    }
    protected eat() {
        console.log("hava supper!");

    }
}

const cat = new Cat("Miaoxingren", 12);
// cat.play();

console.log(Cat.prototype); // {run: ƒ, constructor: ƒ} Cat类的原型上只有方法，定义的构造函数和成员函数
console.log(cat); // Cat {name: 'Miaoxingren', age: 12} 只有Cat类的成员属性name和age


class MiaoMiao extends Cat {
    constructor(name: string, age: number, color: string) {
        super(name, age);
        // 派生类中成员属性初始化的时候，一定要在super之后，如this.color在super之后
        this.color = color;
        this.eat();
    }
    // 为派生类添加自己的属性color，在
    color: string;
}

const miao = new MiaoMiao("Miaomiao", 12, "yellow");
console.log(miao);


class People {
    constructor(public name: string, public age: number) {
        this.name = name;
        this.age = age;
    }
    static color: string = "yello";
}

const pl = new People("Nicholas Zakas", 16);
console.log(People.color); // yello

console.log(pl); // People {name: 'Nicholas Zakas', age: 16}

class WhitePeople extends People {
    constructor(name: string, age: number) {
        super(name, age);
    }
}
console.log(WhitePeople.color); // 派生类访问了父类中定义的static成员变量