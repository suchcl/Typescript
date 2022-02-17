// 数字枚举
enum Role{
    Reporter = 200,
    developer = 206,
    Maintainer = 300,
    Owner,
    Guest
}
console.log(Role.Reporter);
console.log(Role.developer);
console.log(Role.Maintainer);



// 字符串、常量枚举
const enum Message{
    Success = "恭喜您,您中大奖了!",
    Fail = "很遗憾,本次没哟中奖"
}
console.log(Message.Success);

// 异构枚举
enum Answer {
    N,
    Y = "yes"
}

// 枚举成员
enum Char{

}