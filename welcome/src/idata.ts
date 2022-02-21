interface List {
    // 定义一个只读属性id
    readonly id:number;
    name:string;
    [x:string]:any, // 字符串类型索引签名
    email?:string // 可选属性
}

interface Result{
    data:List[]
}
// 渲染函数
function render(result:Result){
    result.data.forEach((item) => {
        console.log(`id: ${item.id}, name: ${item.name}`);
        // item.id++; // 修改只读属性的值，报错了
        // if(item.gender){
        //     console.log(item.gender);
        // }
        if(item.age){
            console.log(`age: ${item.age}`);
        }
        if(item.email){
            console.log(item.email);
        }
    });
}

// 假如从api获取到的数据
const result = {
    data: [
        {
            id:1,
            name: "Nicholas Zakas",
            gender: "male",
            age: 16
        },
        {
            id: 2,
            name: "Hameimei",
            email: "xxx@xxx.com"
        }
    ]
};

render(result);


// render({
//     data:[
//         {
//             id:1,
//             name: "Nicholas Zakas ddd",
//             age: 16 // 下发了冗余的age字段
//         },
//         {
//             id: 2,
//             name: "Hameimei"
//         }
//     ]
// } as Result);


// render(<Result>{
//     data: [
//         {
//             id:1,
//             name: "Nicholas Zakas",
//             gender: "female"
//         },
//         {
//             id: 2,
//             name: "Hameimei"
//         }
//     ]
// })


interface StringArray{
    // 数字索引签名
    [index:number]:string //相当于声明了一个字符串类型数组的类型定义
}
let stringArray: StringArray;
stringArray = ["a","b"];

interface CustomObject{
    // 字符串索引签名
    [x:string]:string,
    [index:number]: string
}
let obj2:CustomObject = {
    username: "Nicholas Zakas",
    age: "18",
    mobile: "13265984568",
    2:"数字"
}
console.log(obj2.age);
console.log(obj2[2]);


// 这一行没有搞懂，怎么使用这个类型呢？
let sum:(x:number,y:number) => number;


// 用接口定义一个函数类型,
interface Adds{
    (x:number,y:number):number
}
let ads:Adds = (a,b) => a + b;

// 使用类型别名定义函数
type Add = (x:number,y:number) => number;
let ad:Add = (a,b) => a - b;
console.log("add：",ad(5,2)); // 3

// 定义混合类型接口
interface Lib {
    // void返回值
    ():void;
    // string类型版本号
    version: string;
    // 定义一个方法
    doSth():void;
}
// 实现这个混合类型接口
let lib:Lib = (() => {}) as Lib;
lib.version = "1.0.0";
lib.doSth = () => {};

// 可以尝试封装这个单例模式的获取库版本号的方法
function getLib(){
    let lib:Lib = (() => {}) as Lib;
    lib.version = '1.2.0';
    lib.doSth = () => {
        console.log('来干活了');
    };
    return lib;
}

let l1 = getLib(); // 实例化一个对象
console.log(l1.version); // 1.2.0
l1.doSth(); // 来干活了

// 可选参数y
function add2(x:number,y?:number){
    // 如果y存在，则返回x + y，否则返回x
    return y? x + y : x;
}

console.log(add2(3,4)); // 7
console.log(add2(9)); // 9

function add3(x:number, y = 2, z:number,q = 3){
    return x + y + z + q;
}
console.log(add3(1,2,3,4)); // 10

console.log(add3(3,undefined,2,9)); // 16

function add4(x:number,...rest:number[]){
    return x + rest.reduce((pre,cur) => pre + cur);
}
console.log(add4(2,3,4)); // 9
