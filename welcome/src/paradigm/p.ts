// function identity(value:number):number{
//     return value;
// }

// function identity<Y>(value:Y):Y{
//     return value;
// }
// // 范型使用案例
// console.log(identity(16));



// function identity<T,U>(value:T,message:U):[T,U]{
//     return [value,message];
// }
// console.log(identity(1,"获取成功")); // 1
// // console.log(identity<number,string>(16,"Nicholas Zakas"));
// identity(12,"Nicholas Zakas");

// function identity<T,U>(value:T,message:U):[T,U]{
//     return [value,message];
// }
// console.log(identity(12,"Nicholas Zakas"));
// console.log(identity<string,number>("hello",16));

// 定义范型对象类型接口
interface IDentities<V,M>{
    value: V,
    message: M
}

function identity<T,U>(key:T,msg:U):IDentities<T,U>{
    // 声明一个已定义的接口类型的字面量对象，属性名要和接口定义的属性名相同
    let identities:IDentities<T,U> = {
        value: key, // 字面量属性名value和message要和接口IDentities定义的属性名相同
        message: msg
    };
    return identities;
}

console.log(identity(18,"Nicholas Zakas")); // { value: 18, message: 'Nicholas Zakas' }