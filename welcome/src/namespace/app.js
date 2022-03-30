var string2s = ["Hello", "98063", "102"];
var validator = {};
validator["Zip Code"] = new Validation.ZipCodeValidator();
validator["Letters Only"] = new Validation.LettersOnlyValidator();
for (var _i = 0, string2s_1 = string2s; _i < string2s_1.length; _i++) {
    var s = string2s_1[_i];
    for (var name_1 in validator) {
        console.log("\"".concat(s, "\" - ").concat(validator[name_1].isAcceptable(s) ? "matches" : "does not match", " ").concat(name_1));
    }
}
