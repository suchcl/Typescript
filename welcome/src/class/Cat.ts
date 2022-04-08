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
}


const cat = new Cat("Miaoxingren", 12);
cat.play();

console.log(Cat.prototype); // {run: ƒ, constructor: ƒ} Cat类的原型上只有方法，定义的构造函数和成员函数
console.log(cat); // Cat {name: 'Miaoxingren', age: 12} 只有Cat类的成员属性name和age


class MiaoMiao extends Cat {
    constructor(name: string, age: number, color: string) {
        super(name, age);
        // 派生类中成员属性初始化的时候，一定要在super之后，如this.color在super之后
        this.color = color;
    }
    // 为派生类添加自己的属性color，在
    color: string;
}