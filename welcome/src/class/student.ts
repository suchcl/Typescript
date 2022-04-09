abstract class Student {
    constructor(public stage: string) {
        this.stage = stage;
    }
    abstract study(): void;
    abstract play(): void;
}

class Pupil extends Student {
    constructor(stage: string, course: string, public sports: string) {
        super(stage);
        this.course = course;
    }
    course: string;
    study(): void {
        console.log(`${this.stage}学习${this.course}.`);
    }
    play(): void {
        console.log(`${this.stage}喜欢玩${this.sports}.`);
    }
}

const pupil = new Pupil("小学生", "语文和数学", "沙包");
pupil.study(); // 小学生学习语文和数学.
pupil.play(); // 小学生喜欢玩沙包.

class MiddleSchoolStudent extends Student {
    constructor(stage: string, public reading: string, public sports: string) {
        super(stage);
        this.reading = reading;
        this.sports = sports;
    }
    study(): void {
        console.log(`${this.stage}喜欢${this.reading}.`);
    }

    play(): void {
        console.log(`${this.stage}喜欢玩${this.sports}`);

    }
}
const middle = new MiddleSchoolStudent("中学生", "阅读", "足球");
middle.study(); // 中学生喜欢阅读.
middle.play(); // 中学生喜欢玩足球

const student: Student[] = [pupil, middle];
student.forEach(item => {
    item.study();
});