// 实现ReturnType<T>泛型

const fns = (v:boolean) => {
    if(v){
        return 1;
    }else{
        return 2;
    }
}

type a = ReturnType<typeof fns>;