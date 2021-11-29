import { Person } from "./Person/Person";
import { Dog } from "./Dog/Dog";
import { Cat } from "./extends/Cat";
const p = new Person();
console.log(p.name);
console.log(Person.name);
console.log(Person.age);
console.log(p.gender);

p.printBaseInfo();
Person.isStudent();

// 构造函数
const luma = new Dog("路马", 4);
luma.play(); // 我是路马,今年4岁了！

const tiantian = new Dog("天天", 6);
tiantian.play(); // 我是天天,今年6岁了！

Dog.bark();

// 继承
const cat = new Cat("阿伟", 4, "male");
cat.sayHello(); // 我们一起学猫叫，我们一起喵喵喵
cat.catchMice();  //捉了一只大老鼠！

// 接口 interface
import "./interface/User";

// 属性封装
import "./property/Teacher";

import "./property/Frutes";

import "./fanxing/Fn";