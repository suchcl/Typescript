function hello(name: string | undefined) {
    let sname: string;
    if (name) {
        sname = name;
    }
}
hello("hello world!");

function doSth(p: string | undefined | null) {
    let t1: string = p!;
    let t2: string = p!;
}

type NumberGenerator = () => number;

function numberTypeConvert(numberGenertor: NumberGenerator | undefined) {
    const num1 = numberGenertor();
    const num2 = numberGenertor!();
}