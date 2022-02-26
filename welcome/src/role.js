function initByRole(role) {
    if (role === 1) {
        // do sth
    }
    else if (role === 2 || role === 3) {
        // do sth
    }
    else {
        // do sth
    }
}
/**
 * 角色   枚举
 */
var Role;
(function (Role) {
    Role[Role["developers"] = 200] = "developers";
    Role[Role["reporter"] = 204] = "reporter";
    Role[Role["maintainer"] = 206] = "maintainer";
    Role[Role["owner"] = 208] = "owner";
    Role[Role["guester"] = 210] = "guester";
})(Role || (Role = {}));
;
function initByRoles(role) {
    if (role === Role.developers) {
        // do
    }
    else if (role === Role.owner) {
        // do
    }
    else {
        // do
    }
}
var Color;
(function (Color) {
    Color[Color["green"] = 0] = "green";
    Color[Color["red"] = 1] = "red";
    Color[Color["blue"] = 2] = "blue";
})(Color || (Color = {}));
var c = Color.blue;
console.log(c);
