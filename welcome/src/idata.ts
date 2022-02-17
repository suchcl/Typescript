interface List {
    // 定义一个只读属性id
    readonly id:number;
    name:string;
    // [x:string]:any
}

interface Result{
    data:List[]
}
// 渲染函数
function render(result:Result){
    result.data.forEach((item) => {
        console.log(`id: ${item.id}, name: ${item.name}`);
        // if(item.gender){
        //     console.log(item.gender);
        // }
    });
}

// 假如从api获取到的数据
const result = {
    data: [
        {
            id:1,
            name: "Nicholas Zakas",
            gender: "male"
        },
        {
            id: 2,
            name: "Hameimei"
        }
    ]
};

// render(result);


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


render(<Result>{
    data: [
        {
            id:1,
            name: "Nicholas Zakas",
            gender: "female"
        },
        {
            id: 2,
            name: "Hameimei"
        }
    ]
})