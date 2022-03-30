var lettersRegexp = /^[A-Za-z]+$/;
var numberRegexp = /'^[0-9]+$'/;
var LettersOnlyValidator = /** @class */ (function () {
    function LettersOnlyValidator() {
    }
    LettersOnlyValidator.prototype.isAcceptable = function (s) {
        return lettersRegexp.test(s);
    };
    return LettersOnlyValidator;
}());
var ZipCodeValidator = /** @class */ (function () {
    function ZipCodeValidator() {
    }
    ZipCodeValidator.prototype.isAcceptable = function (s) {
        return s.length === 5 && numberRegexp.test(s);
    };
    return ZipCodeValidator;
}());
var strings = ["hello", "98052", "101"];
var Validators = {};
Validators["Zip Code"] = new ZipCodeValidator();
Validators["Letters Only"] = new LettersOnlyValidator();
// for (let s of strings) {
//     for (let name in Validators) {
//         let isMatch = Validators[name].isAcceptable(s);
//         console.log(`'${s}' ${isMatch ? "matches" : "does not match"} '${name}'.`);
//     }
// }
var str = "23" + false;
var strValidator = new LettersOnlyValidator();
var isM = strValidator.isAcceptable(str);
console.log(isM);
