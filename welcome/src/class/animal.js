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
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    Animal.prototype.play = function () {
        console.log("".concat(this.name, "\u5728\u73A9\u76AE\u7403\uFF01"));
    };
    return Animal;
}());
// const animal = new Animal(); // 无法创建抽象类的实例
var Tiger = /** @class */ (function (_super) {
    __extends(Tiger, _super);
    function Tiger(name, color, age) {
        var _this = _super.call(this, name) || this;
        _this.color = color;
        _this.age = age;
        return _this;
    }
    Tiger.prototype.introduce = function () {
        console.log("\u5927\u5BB6\u597D\uFF0C\u6211\u662F".concat(this.name, ",\u4ECA\u5E74").concat(this.age, "\u5C81\u4E86\uFF0C\u6211\u662F").concat(this.color, "\u989C\u8272\u7684\uFF01"));
    };
    Tiger.prototype.studying = function () {
        console.log("".concat(this.name, "\u975E\u5E38\u7231\u5B66\u4E60\uFF01"));
    };
    return Tiger;
}(Animal));
var tiger = new Tiger("小虎牙", "yello", 3);
tiger.introduce(); // 大家好，我是小虎牙,今年3岁了，我是yello颜色的！
// 调用从父类继承的play方法
tiger.play(); // 小虎牙在玩皮球！
tiger.studying();
