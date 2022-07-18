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
