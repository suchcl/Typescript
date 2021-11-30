import Snake from "./Snake";
import Food from "./Food";
import ScorePanel from "./ScorePanel";

// 游戏控制器，控制所有的类
class GameControl {
    // 定义游戏属性
    snake: Snake;
    food: Food;
    scorePanel: ScorePanel;
    direction: string = "Right";

    /**
     * 记录游戏是否结束
     * true: 表示游戏可以正常进行
     * false：表示游戏已结束
     */
    isLeave = true;

    constructor() {
        this.snake = new Snake();
        this.food = new Food();
        this.scorePanel = new ScorePanel();
        this.init();
    }

    init() {
        // 初始化的时候让蛇动起来
        document.addEventListener("keydown", this.keydownHandler.bind(this));

        // 调用run方法，让蛇移动起来
        this.run();
    }


    // 键盘按下事件
    keydownHandler(event: KeyboardEvent) {
        // 修改direction的属性
        // 不能直接给direction修改值，需要检查event.key的合法性：是否按了正确的方向按键，只能按4个方向键
        this.direction = event.key;
    }

    // 蛇移动的方法
    run() {
        /**
         * 根据方向(this.direction)来使蛇的位置变化
         *  向上 top 减小
         *  向下 top 变大
         *  向右 left 值变大
         *  向左 left 减小
         */

        // 获取蛇现在的坐标
        let x = this.snake.X;
        let y = this.snake.Y;
        

        // 根据按键方向，修改x和y值，但是并没有生效
        switch (this.direction) {
            case "ArrowUp":
            case "Up":
                // 向上移动，Y减小
                y -= 10;
                break;
            case "ArrowDown":
            case "Down":
                // 向下移动，y增加
                y += 10;
                break;
            case "ArrowLeft":
            case "Left":
                // 向左移动，x减小
                x -= 10;
                break;
            case "ArrowRight":
            case "Right":
                // 向右移动，x增大
                x += 10;
                break;
        }

        // 检查蛇是否吃到了食物
        this.checkEat(x, y);

        // 修改蛇头的位置
        // 因为在snake中，是在修改x和y的时候抛出了异常，所以在这里捕获一下就可以了
        try {
            this.snake.X = x;
            this.snake.Y = y;
        } catch (e) {
            // 捕获到游戏异常，游戏结束
            alert(e);
            this.isLeave = false;
        }


        // 定时调用run，让蛇动起来
        this.isLeave && setTimeout(this.run.bind(this), 300 - (this.scorePanel.level - 1) * 30);
    }

    // 定义方法，检查蛇是否吃到了食物
    // 传入蛇的坐标
    checkEat(X: number, Y: number) {
        // return this.food.X === X && this.food.Y === Y;
        if (X === this.food.X && Y === this.food.Y) {
            // 表示吃到了食物

            // 迟到食物后，食物改变位置
            this.food.change();

            // 分数增加
            this.scorePanel.addScore();

            // 蛇要加长
            this.snake.addBody();
        }
    }

}

export default GameControl;