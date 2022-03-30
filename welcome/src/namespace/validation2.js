var Validation;
(function (Validation) {
    var lettersRegexp = /^[A-Za-z]+$/;
    var numberRegexp = /^[0-9]+$/;
    var LettersOnlyValidator = /** @class */ (function () {
        function LettersOnlyValidator() {
        }
        LettersOnlyValidator.prototype.isAcceptable = function (s) {
            return lettersRegexp.test(s);
        };
        return LettersOnlyValidator;
    }());
    Validation.LettersOnlyValidator = LettersOnlyValidator;
    var ZipCodeValidator = /** @class */ (function () {
        function ZipCodeValidator() {
        }
        ZipCodeValidator.prototype.isAcceptable = function (s) {
            return s.length == 5 && lettersRegexp.test(s);
        };
        return ZipCodeValidator;
    }());
    Validation.ZipCodeValidator = ZipCodeValidator;
})(Validation || (Validation = {}));
// let string2s = ["Hello", "98063", "102"];
// let validator: { [s: string]: Validation.StringValidator } = {};
// validator["Zip Code"] = new Validation.ZipCodeValidator();
// validator["Letters Only"] = new Validation.LettersOnlyValidator();
// for (let s of string2s) {
//     for (let name in validator) {
//         console.log(`"${s}" - ${validator[name].isAcceptable(s) ? "matches" : "does not match"} ${name}`);
//     }
// }
