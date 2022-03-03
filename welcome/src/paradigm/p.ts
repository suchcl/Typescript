// // function identity(value:number):number{
// //     return value;
// // }

// // function identity<Y>(value:Y):Y{
// //     return value;
// // }
// // // 范型使用案例
// // console.log(identity(16));



// // function identity<T,U>(value:T,message:U):[T,U]{
// //     return [value,message];
// // }
// // console.log(identity(1,"获取成功")); // 1
// // // console.log(identity<number,string>(16,"Nicholas Zakas"));
// // identity(12,"Nicholas Zakas");

// // function identity<T,U>(value:T,message:U):[T,U]{
// //     return [value,message];
// // }
// // console.log(identity(12,"Nicholas Zakas"));
// // console.log(identity<string,number>("hello",16));

// // 定义范型对象类型接口
// interface IDentities<V,M>{
//     value: V,
//     message: M
// }

// function identity<T,U>(key:T,msg:U):IDentities<T,U>{
//     // 声明一个已定义的接口类型的字面量对象，属性名要和接口定义的属性名相同
//     let identities:IDentities<T,U> = {
//         value: key, // 字面量属性名value和message要和接口IDentities定义的属性名相同
//         message: msg
//     };
//     return identities;
// }

// console.log(identity(18,"Nicholas Zakas")); // { value: 18, message: 'Nicholas Zakas' }


// interface People<U>{
//     value:U,
//     getIdentity:() => U // 定义了一个变量，为函数类型，其实就是定义了一个函数，只是没有实现
// }

// class Student<T> implements People<T>{
//     value: T;
//     constructor(value:T){
//         this.value = value;
//     }

//     getIdentity():T{
//         return this.value;
//     }
// }

// const stu = new Student("Hanmeimei");
// console.log(stu); // Student { value: 'Hanmeimei' }
// console.log(stu.getIdentity()); // Hanmeimei

// class Police<T>{
//     key:T;
//     constructor(key:T){
//         this.key = key;
//     }
//     getKey():T{
//         return this.key;
//     }
// }
// const police = new Police("最可爱的人");
// console.log(police.getKey()); // 最可爱的人


// interface ILength{
//     length: number
// }

// function identity<T extends ILength>(arg:T):T{
//     console.log(arg.length);
//     return arg;
// }

// console.log(identity("hello"));


interface Person{
    name:string;
    age:number;
    location: string
}
// type t2 = keyof Person;

// function getProperty<T,K extends keyof T>(obj:T,key:K):T[K]{
//     return obj[key];
// }

enum Difficulty{
    Easy,
    Intermediate,
    Hard
}
function getProperty<T, K extends keyof T>(obj:T,key: K):T[K]{
    return obj[key];
}

let tsInfo = {
    name: "Typescript",
    supersetOf: "Javascript",
    difficulty: Difficulty.Hard
};

let asdasfaf:Difficulty = getProperty(tsInfo,"difficulty");
console.log(asdasfaf);


type Testrr<T> = T extends number ? 1 : 2;
type resss = Testrr<1 | 'a'>;