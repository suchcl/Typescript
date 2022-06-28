// 为string类型起个别名：Name
type Name = string;

// 为函数类型类型() => string起个别名NameResolve，定义一个返回string类型值的函数
type NameResolve = () => string;

// 定义个string或者返回string类型值的函数类型的联合类型
type NameOrResolver = Name | NameResolve;

// 定义1个返回Name类型值、形参为Name或者返回string类型值的函数
function getName(n: NameOrResolver): Name {
    if (typeof n === "string") {
        return n;
    } else {
        return n();
    }
}

getName("Nicholas");
console.log(getName(() => {
    const msg = "world!";
    return "Hello " + msg;
}));



// getName(12);

type Names = string;
type arrItem = number | string;
const arr: arrItem[] = [1, "2", 3];
type Person = {
    name: string
};

type Student = Person & { grade: number };