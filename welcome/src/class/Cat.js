var Cat = /** @class */ (function () {
    function Cat(name, age) {
        this.name = name;
        this.age = age;
    }
    Cat.prototype.run = function () { };
    return Cat;
}());
console.log(Cat.prototype);
var cat = new Cat("Miaoxingren", 12);
console.log(cat);
