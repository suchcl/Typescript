function identity<T>(value:T):T{
    return value;
}

console.log(identity<number>(1));


function identity2<T,U>(value:T,message:U):T{
    return value;
}

console.log(identity2<number,string>(10,"hello"));
console.log(identity2(100,"message"));

function identity3<T,U>(value:T,message:U):[T,U]{
    return [value,message];
}

console.log(identity3(11,"hello"));