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

