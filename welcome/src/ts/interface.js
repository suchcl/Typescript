function render(result) {
    result.data.forEach(function (value) {
        console.log(value.id, value.name);
    });
}
var result = {
    data: [
        {
            id: 1,
            name: "A",
            gender: "female"
        },
        {
            id: 2,
            name: "B"
        }
    ]
};
// render(result);
// render({
//     data: [
//         {
//             id: 1,
//             name: "a",
//             gender: "male"
//         },
//         {
//             id: 2,
//             name: "b"
//         }
//     ]
// } as IResult);
// 不要使用这种方式，在react中有歧义
render({
    data: [
        {
            id: 1,
            name: "c"
        },
        {
            id: 2,
            name: "d",
            gender: "不详"
        }
    ]
});
render({
    data: [
        {
            id: 1,
            name: "e"
        },
        {
            id: 2,
            name: "f",
            email: "baideng@123.com"
        }
    ]
});
