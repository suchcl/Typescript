

abstract class Animal {
    constructor(name: string) {
        this.name = name;
    }
    name: string;
    play() {
        console.log(`${this.name}在玩皮球！`);
    }
    // 定义的抽象类，在它的字类中必须要实现这个抽象方法，否则报错
    abstract studying(): void;
}
// const animal = new Animal(); // 无法创建抽象类的实例

class Tiger extends Animal {
    constructor(name: string, public color: string, public age: number) {
        super(name); // 如果这里不调用super，会提示异常：派生类的构造函数必须包含 "super" 调用，哪怕父类没有参数
    }
    introduce() {
        console.log(`大家好，我是${this.name},今年${this.age}岁了，我是${this.color}颜色的！`);
    }
    // 实现父类中定义的抽象方法
    studying(): void {
        console.log(`${this.name}非常爱学习！`);
    }
}

const tiger = new Tiger("小虎牙", "yello", 3);
tiger.introduce(); // 大家好，我是小虎牙,今年3岁了，我是yello颜色的！
// 调用从父类继承的play方法
tiger.play(); // 小虎牙在玩皮球！
tiger.studying(); // 小虎牙非常爱学习！