class Frutes {
    private _name: string;
    private _price: number;

    constructor(name: string, price: number) {
        this._name = name;
        this._price = price;
    }

    // ts中读取属性的另一种方式
    get name() {
        return this._name;
    }

    // ts中设置属性的另一种方式
    set name(name: string) {
        this._name = name;
    }
}

console.log("水果类开始");
const f = new Frutes("国光", 3.99);
// 通过get、set方式的存取器，在读取、设置属性的时候，就不需要通过方法的调用了，可以直接通过点语法读取属性
// 直接通过点语法读取属性: f.name,直接通过点语法，代码不是去找的属性name，而是方法get
console.log(`修改品牌前：${f.name}`); // 修改品牌前：国光
// 直接通过点语法设置属性:f.name
f.name = "富士";
console.log(`修改品牌后：${f.name}`); // 修改品牌后：富士
console.log("水果类结束");

class A {
    // 属性定义、属性初始化值，一步做完了
    // 构造函数中通过访问修饰符定义属性，函数体中可以省略显示的属性赋值
    constructor(public a:string,private b:number){}
}

class B{
    public a:string
    private b:number;

    constructor(a:string,b:number){
        this.a = a;
        this.b = b;
    }
}
const a = new A("a参数",100);
console.log(a.a);
