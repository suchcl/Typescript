// function initByRole(role:any){
//     if(role === 1){
//         // do sth
//     }else if(role === 2 || role === 3){
//         // do sth
//     }else {
//         // do sth
//     }
// }

/**
 * 角色   枚举
 */
enum Role{
    developers = 200,
    reporter = 204,
    maintainer = 206,
    owner = 208,
    guester = 210
};

function initByRoles(role:number){
    if(role === Role.developers){
        // do
    }else if(role === Role.owner){
        // do
    }else {
        // do
    }
}

enum Color{
    green,
    red,
    blue
}
let c:Color = Color.blue;
console.log(c);


// const enum Message{
//     success = "恭喜成功发财",
//     failed = "不要气馁"
// }

// enum Results{
//     success = "success",
//     failed = "failed"
// }

// function getTips(r:string){
//     if(r === Results.success){
//         console.log(Results.success);
//     }else {
//         console.log(Results.failed);
//     }
// }