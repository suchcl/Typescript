
// 实现Food类
class Food {
    // 定义一个表示页面中食物元素的element
    element: HTMLElement;

    constructor() {
        // 获取页面元素并赋值给element
        this.element = document.getElementById("food")!;
    }

    // 获取食物坐标x轴坐标方法
    get X() {
        return this.element.offsetLeft;
    }

    // 获取食物Y轴坐标
    get Y() {
        return this.element.offsetTop;
    }

    /**
     * 食物变更位置
     * 食物位置范围：0-290，位置需要随机生成
     * 食物每次移动的位移量为10
     */
    change() {
        let top = Math.round(Math.random() * 29) * 10;
        let left = Math.round(Math.random() * 29) * 10;

        this.element.style.top = top + "px";
        this.element.style.left = left + "px";
    }
}


export default Food;