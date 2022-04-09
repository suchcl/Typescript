var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Student = /** @class */ (function () {
    function Student(stage) {
        this.stage = stage;
        this.stage = stage;
    }
    return Student;
}());
var Pupil = /** @class */ (function (_super) {
    __extends(Pupil, _super);
    function Pupil(stage, course, sports) {
        var _this = _super.call(this, stage) || this;
        _this.sports = sports;
        _this.course = course;
        return _this;
    }
    Pupil.prototype.study = function () {
        console.log("".concat(this.stage, "\u5B66\u4E60").concat(this.course, "."));
    };
    Pupil.prototype.play = function () {
        console.log("".concat(this.stage, "\u559C\u6B22\u73A9").concat(this.sports, "."));
    };
    return Pupil;
}(Student));
var pupil = new Pupil("小学生", "语文和数学", "沙包");
pupil.study(); // 小学生学习语文和数学.
pupil.play(); // 小学生喜欢玩沙包.
var MiddleSchoolStudent = /** @class */ (function (_super) {
    __extends(MiddleSchoolStudent, _super);
    function MiddleSchoolStudent(stage, reading, sports) {
        var _this = _super.call(this, stage) || this;
        _this.reading = reading;
        _this.sports = sports;
        _this.reading = reading;
        _this.sports = sports;
        return _this;
    }
    MiddleSchoolStudent.prototype.study = function () {
        console.log("".concat(this.stage, "\u559C\u6B22").concat(this.reading, "."));
    };
    MiddleSchoolStudent.prototype.play = function () {
        console.log("".concat(this.stage, "\u559C\u6B22\u73A9").concat(this.sports));
    };
    return MiddleSchoolStudent;
}(Student));
var middle = new MiddleSchoolStudent("中学生", "阅读", "足球");
middle.study(); // 中学生喜欢阅读.
middle.play(); // 中学生喜欢玩足球
var student = [pupil, middle];
student.forEach(function (item) {
    item.study();
});
