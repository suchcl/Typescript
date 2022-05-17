/**
 * 点:定义点信息
 * @param x number
 * @param y number
 */
interface Point {
    x: number,
    y: number
}

interface ISetPoint {
    (x: number, y: number): void
}

// 这种定义函数类型的方式是错误的，函数function本身是不具备类型属性的，只有变量才有类型
// 通过function定义的函数，class定义的类，都不能使用Interface来约束类型
// function setPoint2: ISetPoint(x: number, y: number){
//     console.log(x, y);
// }
let setPoint: ISetPoint = function (x: number, y: number) {
    console.log(x, y);
}

setPoint(3, 4);

let point: Point = {
    x: 12,
    y: 10
}

type Point2 = {
    x: number,
    y: number
}