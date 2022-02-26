// 数字枚举
var Role;
(function (Role) {
    Role[Role["Reporter"] = 200] = "Reporter";
    Role[Role["developer"] = 206] = "developer";
    Role[Role["Maintainer"] = 300] = "Maintainer";
    Role[Role["Owner"] = 1207] = "Owner";
    Role[Role["Guest"] = 1216] = "Guest";
})(Role || (Role = {}));
function initByRole(role) {
    if (role === Role.Reporter) {
        // do sth
    }
    else if (role === Role.developer || role === Role.Maintainer) {
        // do sth
    }
    else {
        // do sth
    }
}
console.log("\u606D\u559C\u60A8,\u60A8\u4E2D\u5927\u5956\u4E86!" /* Success */);
// 异构枚举
var Answer;
(function (Answer) {
    Answer[Answer["N"] = 0] = "N";
    Answer["Y"] = "yes";
})(Answer || (Answer = {}));
// 枚举成员
var Char;
(function (Char) {
})(Char || (Char = {}));
