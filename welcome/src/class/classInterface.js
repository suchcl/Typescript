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
var Asian = /** @class */ (function () {
    function Asian(name, age) {
        this.age = age;
        this.name = name;
    }
    Asian.prototype.eat = function () {
        console.log("我喜欢吃大米饭!");
    };
    Asian.prototype.play = function () {
        console.log("play football!");
    };
    return Asian;
}());
var boy = {
    name: "Nicholas Zakas",
    age: 12,
    run: function () {
        console.log("百米跑步第一名!");
    },
    cry: function () {
        console.log("从来不哭鼻子!");
    },
    eat: function () {
        console.log("男孩喜欢吃冰激凌!");
    }
};
boy.eat();
var Auto = /** @class */ (function () {
    function Auto() {
        this.state = 1;
    }
    return Auto;
}());
var C = /** @class */ (function () {
    function C() {
        this.state = 2;
        this.color = "yello";
    }
    return C;
}());
var car = new C();
console.log(car.state); // 2
var Bus = /** @class */ (function (_super) {
    __extends(Bus, _super);
    function Bus() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.color = "green";
        return _this;
    }
    return Bus;
}(Auto));
var bus = new Bus();
console.log(bus.color);
console.log(bus.state);
