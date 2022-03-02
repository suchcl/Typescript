// function identity(value:number):number{
//     return value;
// }
function identity(key, msg) {
    // 声明一个已定义的接口类型的字面量对象，属性名要和接口定义的属性名相同
    var identities = {
        value: key,
        message: msg
    };
    return identities;
}
console.log(identity(18, "Nicholas Zakas")); // { value: 18, message: 'Nicholas Zakas' }
var Student = /** @class */ (function () {
    function Student(value) {
        this.value = value;
    }
    Student.prototype.getIdentity = function () {
        return this.value;
    };
    return Student;
}());
var stu = new Student("Hanmeimei");
console.log(stu); // Student { value: 'Hanmeimei' }
console.log(stu.getIdentity());
var Police = /** @class */ (function () {
    function Police(key) {
        this.key = key;
    }
    Police.prototype.getKey = function () {
        return this.key;
    };
    return Police;
}());
var police = new Police("最可爱的人");
console.log(police.getKey());
