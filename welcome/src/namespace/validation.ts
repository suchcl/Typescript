interface StringValidator {
    isAcceptable(s: string): boolean
}

let lettersRegexp = /^[A-Za-z]+$/;
let numberRegexp = /'^[0-9]+$'/;

class LettersOnlyValidator implements StringValidator {
    isAcceptable(s: string): boolean {
        return lettersRegexp.test(s);
    }
}

class ZipCodeValidator implements StringValidator {
    isAcceptable(s: string): boolean {
        return s.length === 5 && numberRegexp.test(s);
    }
}

let strings = ["hello", "98052", "101"];


let Validators: { [s: string]: StringValidator } = {};
Validators["Zip Code"] = new ZipCodeValidator();
Validators["Letters Only"] = new LettersOnlyValidator();

// for (let s of strings) {
//     for (let name in Validators) {
//         let isMatch = Validators[name].isAcceptable(s);
//         console.log(`'${s}' ${isMatch ? "matches" : "does not match"} '${name}'.`);
//     }
// }

const str = "23" + false;
const strValidator = new LettersOnlyValidator();
const isM = strValidator.isAcceptable(str)
console.log(isM);
