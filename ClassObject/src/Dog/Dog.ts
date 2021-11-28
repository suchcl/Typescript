class Dog {
    // 类中声明该类会用到的属性
    name: string;
    age: number;

    /**
     * 构造函数
     * 通过constructor声明构造函数，不需要函数名
     * 构造函数会在实例对象创建时被调用：即通过new操作符实例化对象的时候，就都会调用构造函数来生成实例对象
     */
    constructor(name: string, age: number) {
        /**
         * 构造函数中，this表示当前的实例
         * 如通过const dog = new Dog()，那么this就指向当前的实例dog；
         * 构造函数中的当前对象，就是当前创建的那个对象，如const dog2 = new Dog();那么当前对象以及this都指向dog2
         */
        this.name = name;
        this.age = age;
    }

    play(){
        console.log(`我是${this.name},今年${this.age}岁了！`);
    }

    static bark(){
        console.log(this);        
    }
}

export { Dog };