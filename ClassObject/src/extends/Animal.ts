class Animal {
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
}

export { Animal };