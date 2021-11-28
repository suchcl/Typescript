import { Animal } from "./Animal";

/**
 * Cat extends Animal
 * Animal被称为父类，Cat被称为子类
 * 使用继承后，子类将拥有父类的所有的属性和方法
 * 通过继承，可以将多个子类共同拥有的一些属性和方法都写到一个父类中
 *  - 这样就就可以让多个子类同时拥有了父类中的属性和方法了
 *  - 如果子类和父类有差异化，子类需要父类中不存在的一些属性和方法怎么办？直接在子类中添加就可以了
 * 父类中的有些方法，有时候不能满足实际场景的需求，怎么办呢？直接在子类中重新实现一下父类中已经存在的方法就可以了
 *  - 如果子类中添加了和父类中同名的方法，那么子类中的方法就会覆盖父类中的方法
 *  - 这种子类覆盖父类方法的形式，称为方法的重写
 */
class Cat extends Animal {
    /**
     * 在子类中重新定义一个性别的属性
     */
    gender: string;

    /**
     * 子类中重新实现构造函数
     * @param name string 从父类中继承的属性
     * @param age number 从父类继承的属性
     * @param gender string 子类新增的属性
     * 构造函数的参数，父类中定义的参数，子类中的构造函数也需要重新传一遍，只是不需要单独的实现了，只需要调用super即可
     */
    constructor(name:string,age:number,gender: string){
        // 调用父类的构造函数，且传入父类中构造函数已经实现的参数
        super(name,age);
        // 仅仅给子类中新增的属性赋值
        this.gender = gender;
    }

    /**
     * 重写sayHello方法
     */
    sayHello() {
        console.log("我们一起学猫叫，我们一起喵喵喵");
    }

    /**
     * 新增定义父类中不存在的方法
     * 捉老鼠
     */
    catchMice(){
        console.log("捉了一只大老鼠！");
    }
}

export { Cat };