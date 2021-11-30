class Snake {
    // 蛇头
    head: HTMLElement;

    // 蛇的身体:包括蛇头
    bodies: HTMLCollection;

    // 蛇的容器
    snakeElement: HTMLElement;
    constructor() {
        this.snakeElement = document.getElementById("snake")!;
        this.head = document.querySelector("#snake > div")!;
        // this.bodies = document.getElementById("snake")?.getElementsByTagName("div")!;
        this.bodies = this.snakeElement.getElementsByTagName("div");
    }

    // 获取蛇头的横坐标
    get X() {
        return this.head.offsetLeft;
    }

    // 获取蛇头的纵坐标
    get Y() {
        return this.head.offsetTop;
    }

    // 修改蛇头的横坐标
    set X(value: number) {
        this.head.style.left = value + "px";
    }

    // 修改蛇头的纵坐标
    set Y(value: number) {
        this.head.style.top = value + "px";
    }

    // 给蛇增加身体
    addBody() {
        this.snakeElement.insertAdjacentHTML("beforeend", "<div></div>");
    }
}

export default Snake;