/**
 * 以abstract定义的类是抽象类
 *  - 抽象类和其他类区别不大，只是不能被用来创建实例，即不能通过new关键字实例化对象
 *  - 抽象类，就是专门用来被继承的类
 * 抽象类中可以添加抽象方法
 *  - 
 */
abstract class Animal {
    name: string;
    age: number;

    /**
     * 构造函数
     * @param name string
     * @param age number
     */
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    /**
     * 打招呼
     * @param 无
     */
    sayHello() {
        console.log("我是动物，Hello！");
    }

    /**
     * 定义抽象方法：只定义方法体，不做方法实现，可以有方法的返回值类型
     */
    abstract introBySelf():void;
}

export { Animal };