let a; // 只声明不赋值，推断为了一个any类型

let num = 12; // 根据变量值推断为了一个number类型

let arr = [1, 2, 3]; // 根据变量值推断为了number类型的数组

// let fun = (x, y = 2) => x + y; // 函数参数x没有默认值，就被推断为了any类型，参数为默认值为2，被推断为了number类型

window.onclick = event => {
    console.log(event.button);
}

window.onkeydown = e => {
    console.log(e.altKey);
}

interface Foo {
    bar: number
}

// let foo = {} as Foo;
// foo.bar = 1;

let foo: Foo = {
    bar: 2
};