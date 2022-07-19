function identity(value) {
    return value;
}
console.log(identity(1));
function identity2(value, message) {
    return value;
}
console.log(identity2(10, "hello"));
console.log(identity2(100, "message"));
function identity3(value, message) {
    return [value, message];
}
console.log(identity3(11, "hello"));
function identity4(value, message) {
    var identities = {
        value: value,
        message: message
    };
    return identities;
}
console.log(identity4(20, "Nicholas Zakas"));
function identity5(value, message) {
    var identities = {
        value: value,
        message: message
    };
    return identities;
}
console.log(identity5(68, "Semlinker"));
var IdentityClass = /** @class */ (function () {
    function IdentityClass(value, name) {
        this.value = value;
        this.name = name;
    }
    IdentityClass.prototype.getIdentity = function () {
        return this.value;
    };
    IdentityClass.prototype.getUserName = function () {
        return this.name;
    };
    return IdentityClass;
}());
var id = new IdentityClass(10, "Nicholas Zakas");
console.log("getIdentity():", id.getIdentity());
console.log("id.getUserName():", id.getUserName());
function identity6(arg) {
    console.log(arg.length);
    return arg;
}
function identity7(arg) {
    console.log(arg);
    return arg;
}
console.log(identity7([3, 4]));
var a = 1;
(function a() {
    a = 2;
    console.log(a);
})();
