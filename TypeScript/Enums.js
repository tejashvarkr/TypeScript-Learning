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
var a = Enum.Down;
console.log(a);
var b = Enum[a];
console.log(b);
var colorpencil = {
    red: [1, 2, 3], blue: [1, 2, 2], green: "rgba(23, 231, 33, 0)",
};
var greens = colorpencil.green.toUpperCase();
console.log(greens);
var key = 'name';
var s = { 0: true, 1: false
};
console.log(s[0], s[1]);
for (var i in s) {
    console.log(s[i]);
}
var person = {
    name: "Tejashvar K.R",
    age: 2,
    phno: 123456789,
    tel: 123456789
};
console.log(person.name);
for (var i in person) {
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
