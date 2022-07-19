// 实现ReturnType<T>泛型

const fn = (v:boolean) => {
    if(v){
        return 1;
    }else{
        return 2;
    }
}

type a = MyReturnType<typeof fn>;