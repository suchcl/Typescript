// 计分面板
class ScorePanel {
    private score = 0;
    private level = 1;

    // 最大的等级限制
    private maxLevel:number;

    // 设置每个变量等级对应的分数
    upScore:number;
    scoreElement: HTMLElement;
    levelElement: HTMLElement;
    constructor(maxLevel:number = 5,upScore:number = 10) {
        this.scoreElement = document.getElementById("score")!;
        this.levelElement = document.getElementById("level")!;
        this.maxLevel = maxLevel;
        this.upScore = upScore;
    }

    /**
     * 修改分值
     * 实际场景分值只会增加，不会减小，所以也可以实现为加分
     */
    addScore() {
        this.score++;
        this.scoreElement.innerText = this.score + "";
        // this.scoreElement.innerText = ++this.score+"";

        // 每提升10分升1级
        if(this.score % this.upScore === 0){
            this.upLevel();
        }
    }

    /**
     * 等级提升
     * 实际场景中，我们在设计用户等级时，都会设计用户的最高等级
     */
    upLevel() {
        if (this.level < this.maxLevel) {
            this.levelElement.innerText = ++this.level + "";
        }
    }
}

export default ScorePanel;