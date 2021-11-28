class Person {
    // 实例属性，需要通过类的实例化对象去访问
    name:string = "Nicholas Zakas";
    // 通过readonly定义只读属性，不能被修改（重新赋值）
    readonly gender:string = "male";
    // 类属性，通过static关键词声明定义，只能通过类访问
    static age: number = 18;

    // 实例方法，打印基本信息
    printBaseInfo(){
        console.log(`我是${this.name},性别${this.gender}`);
        
    }

    // 通过static定义类方法
    static isStudent(){
        console.log(`我今年${this.age}岁，还是一个学生！`);
    }
}

export { Person };
