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
var Cat = /** @class */ (function () {
    function Cat(name, age) {
        this.name = name;
        this.age = age;
    }
    Cat.prototype.run = function () { };
    Cat.prototype.play = function () {
        console.log("playing");
    };
    Cat.prototype.eat = function () {
        console.log("hava supper!");
    };
    return Cat;
}());
var cat = new Cat("Miaoxingren", 12);
// cat.play();
console.log(Cat.prototype); // {run: ƒ, constructor: ƒ} Cat类的原型上只有方法，定义的构造函数和成员函数
console.log(cat); // Cat {name: 'Miaoxingren', age: 12} 只有Cat类的成员属性name和age
var MiaoMiao = /** @class */ (function (_super) {
    __extends(MiaoMiao, _super);
    function MiaoMiao(name, age, color) {
        var _this = _super.call(this, name, age) || this;
        // 派生类中成员属性初始化的时候，一定要在super之后，如this.color在super之后
        _this.color = color;
        _this.eat();
        return _this;
    }
    return MiaoMiao;
}(Cat));
var miao = new MiaoMiao("Miaomiao", 12, "yellow");
console.log(miao);
var People = /** @class */ (function () {
    function People(name, age) {
        this.name = name;
        this.age = age;
        this.name = name;
        this.age = age;
    }
    People.color = "yello";
    return People;
}());
var pl = new People("Nicholas Zakas", 16);
console.log(People.color); // yello
console.log(pl); // People {name: 'Nicholas Zakas', age: 16}
var WhitePeople = /** @class */ (function (_super) {
    __extends(WhitePeople, _super);
    function WhitePeople(name, age) {
        return _super.call(this, name, age) || this;
    }
    return WhitePeople;
}(People));
console.log(WhitePeople.color);
