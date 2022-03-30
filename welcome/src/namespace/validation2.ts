namespace Validation {
    export interface StringValidator {
        isAcceptable(s: string): boolean
    }

    const lettersRegexp = /^[A-Za-z]+$/;
    const numberRegexp = /^[0-9]+$/;

    export class LettersOnlyValidator implements StringValidator {
        isAcceptable(s: string): boolean {
            return lettersRegexp.test(s);
        }
    }

    export class ZipCodeValidator implements StringValidator {
        isAcceptable(s: string): boolean {
            return s.length == 5 && lettersRegexp.test(s);
        }
    }
}

// let string2s = ["Hello", "98063", "102"];

// let validator: { [s: string]: Validation.StringValidator } = {};
// validator["Zip Code"] = new Validation.ZipCodeValidator();
// validator["Letters Only"] = new Validation.LettersOnlyValidator();

// for (let s of string2s) {
//     for (let name in validator) {
//         console.log(`"${s}" - ${validator[name].isAcceptable(s) ? "matches" : "does not match"} ${name}`);
//     }
// }