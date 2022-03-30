let string2s = ["Hello", "98063", "102"];

let validator: { [s: string]: Validation.StringValidator } = {};
validator["Zip Code"] = new Validation.ZipCodeValidator();
validator["Letters Only"] = new Validation.LettersOnlyValidator();

for (let s of string2s) {
    for (let name in validator) {
        console.log(`"${s}" - ${validator[name].isAcceptable(s) ? "matches" : "does not match"} ${name}`);
    }
}