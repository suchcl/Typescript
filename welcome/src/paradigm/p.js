// function identity(value:number):number{
//     return value;
// }
function identity(key, msg) {
    var identities = {
        value: key,
        message: msg
    };
    return identities;
}
console.log(identity(18, "Nicholas Zakas")); // { value: 18, message: 'Nicholas Zakas' }
