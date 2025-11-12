"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Enums
var Enum;
(function (Enum) {
    Enum[Enum["Up"] = 0] = "Up";
    Enum[Enum["Down"] = 1] = "Down";
    Enum[Enum["Left"] = 2] = "Left";
    Enum[Enum["Right"] = 3] = "Right";
})(Enum || (Enum = {}));
;
console.log(Enum.Up);
let a = Enum.Down;
console.log(a);
let b = Enum[a];
console.log(b);
const colorpencil = {
    red: [1, 2, 3], blue: [1, 2, 2], green: "rgba(23, 231, 33, 0)",
};
const greens = colorpencil.green.toUpperCase();
console.log(greens);
const key = 'name';
const s = { 0: true, 1: false
};
console.log(s[0], s[1]);
for (let i in s) {
    console.log(s[i]);
}
const person = {
    name: "Tejashvar K.R",
    age: 2,
    phno: 123456789,
    tel: 123456789
};
console.log(person.name);
for (let i in person) {
    console.log(i + ": " + person[i]);
}
function padLeft(padding, input) {
    if (typeof padding === "number") {
        return " ".repeat(padding) + input;
    }
    return padding + input;
}
console.log(padLeft(2, "string with left padding of two spaces"));
function padRight(padding, input) {
    if (typeof padding === "number") {
        return input + " ".repeat(padding) + padding + " " + "spaces";
    }
    return input + padding;
}
console.log(padRight(2, "string with right padding of two spaces"));
//# sourceMappingURL=Enums%20and%20others.js.map