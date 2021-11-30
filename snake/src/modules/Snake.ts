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
        // 如果新位置和原位置相等，说明位置没有变化
        if (this.X === value) {
            return;
        }

        // X值的合法范围：0-290
        if (value < 0 || value > 290) {
            // 说明蛇撞墙了
            throw new Error("蛇撞墙了");
        }
        this.head.style.left = value + "px";
    }

    // 修改蛇头的纵坐标
    set Y(value: number) {
        if (this.Y === value) {
            return;
        }

        // 超出范围之后，抛出异常
        if (value < 0 || value > 290) {
            throw new Error("蛇撞墙了");
        }
        this.head.style.top = value + "px";
    }

    // 给蛇增加身体
    addBody() {
        this.snakeElement.insertAdjacentHTML("beforeend", "<div></div>");
    }
}

export default Snake;