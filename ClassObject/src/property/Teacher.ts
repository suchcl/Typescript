class Teacher {
    /**
     * 属性前可以添加访问修饰符：public、private
     *  - public：在任意位置都可以访问和修改属性值
     *  - private：私有属性，私有属性只能在类的内部访问和修改
     */
    private _name: string;
    private _age: number;

    constructor(name: string, age: number) {
        this._name = name;
        this._age = age;
    }

    // 定义getter方法来获取属性值
    getName() {
        return this._name;
    }

    // 定义setter方法，来修改属性值
    setName(name: string) {
        this._name = name;
    }

    // 读取age
    getAge() {
        return this._age;
    }

    // 设置age，但是需要age >= 0
    setAge(age: number) {
        if (age >= 0) {
            this._age = age;
        }
    }

    lecture() {
        console.log(`我正在讲课！`);
    }
}

// 属性封装
console.log("属性封装开始");
const t = new Teacher("Nicholas Zakas", 26);
console.log(t.getName());
t.setName("猪八戒"); // 通过setter修改属性值
t.setAge(-10); 
console.log(`新年龄${t.getAge()}`); // 26,因为-10不符合条件，对age的修改失败
console.log(t);
console.log("属性封装结束");