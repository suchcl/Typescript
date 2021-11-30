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

        // 修改X时，是在修改水平坐标，是在控制蛇的左右移动，当蛇向左移动时，不能向右掉头，反之亦然
        // 当只有蛇头时，不算是掉头的
        if(this.bodies[1] && (this.bodies[1] as HTMLElement).offsetLeft === value){
            // 如果发生了掉头，让蛇向反方向继续移动
            if(value > this.X){
                // 如果新值大于旧值X，则说明蛇在向右移动，如果此时发生掉头，则应该让蛇继续向左移动
                value = this.X - 10;
            }else {
                value = this.X + 10;
            }
        }

        // 移动身体
        this.moveBody();

        this.head.style.left = value + "px";
        // 检查有没有撞击到自己
        this.checkHeadBody();
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

        // 修改y时，是在修改垂直坐标，是在控制蛇的上下移动，当蛇向上移动时，不能向下掉头，反之亦然
        // 当只有蛇头时，不算是掉头的
        if(this.bodies[1] && (this.bodies[1] as HTMLElement).offsetTop === value){
            // 如果发生了掉头，让蛇向反方向继续移动
            if(value > this.Y){
                // 如果新值大于旧值Y，则说明蛇在向下移动，如果此时发生掉头，则应该让蛇继续向上移动
                value = this.Y - 10;
            }else {
                value = this.Y + 10;
            }
        }

        // 移动身体
        this.moveBody();

        this.head.style.top = value + "px";

        // 检查有没有撞击到自己
        this.checkHeadBody();
    }

    // 给蛇增加身体
    addBody() {
        this.snakeElement.insertAdjacentHTML("beforeend", "<div></div>");
    }

    // 给蛇添加移动身体的方法
    // 只移动了什么，没有移动蛇头
    moveBody(){
        /**
         * 将后面一节身体的位置移动到前面一节身体的位置
         *  - 第4节身体位置移动到第3节身体的位置
         *  - 第3节身体位置移动到第2节身体位置
         *  - 第2节身体位置移动到第1节身体位置，即蛇头的位置
         *  - 第1节身体位置（蛇头）向前移动一位
         */
        // 遍历获取所有的身体
        for(let i = this.bodies.length - 1; i > 0; i--){
            // 获取前面一个身体的位置
            // 做一个类型断言，明确Element也是HTMLELement
            let X = (this.bodies[i-1] as HTMLElement).offsetLeft;
            let Y = (this.bodies[i-1] as HTMLElement).offsetTop;

            // 将值设置到当前身体上
            (this.bodies[i] as HTMLElement).style.left = X + "px";
            (this.bodies[i] as HTMLElement).style.top = Y + "px";
        }
    }

    /**
     * 检查蛇头是否和身体碰撞了
     */
    checkHeadBody(){
        // 获取所有身体，检查其是否和蛇头的坐标是否发生重叠，重叠了说明发生了碰撞
        for(let i = 1; i < this.bodies.length; i++){
            let bd = this.bodies[i] as HTMLElement;
            if(this.X === bd.offsetLeft && this.Y === bd.offsetTop){
                // 进入判断，说明蛇头撞击到了身体
                throw new Error("撞击到自己了~~~");
            }
        }
    }
}

export default Snake;