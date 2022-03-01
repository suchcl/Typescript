// function identity(value:number):number{
//     return value;
// }

// function identity<Y>(value:Y):Y{
//     return value;
// }
// // 范型使用案例
// console.log(identity(16));



function identity<T,U>(value:T,message:U):[T,U]{
    return [value,message];
}
console.log(identity(1,"获取成功")); // 1
// console.log(identity<number,string>(16,"Nicholas Zakas"));
identity(12,"Nicholas Zakas");