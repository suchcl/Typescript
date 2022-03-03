// // function identity(value:number):number{
// //     return value;
// // }
// type t2 = keyof Person;
// function getProperty<T,K extends keyof T>(obj:T,key:K):T[K]{
//     return obj[key];
// }
var Difficulty;
(function (Difficulty) {
    Difficulty[Difficulty["Easy"] = 0] = "Easy";
    Difficulty[Difficulty["Intermediate"] = 1] = "Intermediate";
    Difficulty[Difficulty["Hard"] = 2] = "Hard";
})(Difficulty || (Difficulty = {}));
function getProperty(obj, key) {
    return obj[key];
}
var tsInfo = {
    name: "Typescript",
    supersetOf: "Javascript",
    difficulty: Difficulty.Hard
};
var asdasfaf = getProperty(tsInfo, "difficulty");
console.log(asdasfaf);
