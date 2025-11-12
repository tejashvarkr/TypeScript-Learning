"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Partial<Type>
function updateUser(id, updates) {
    console.log(`Updating user ${id} with`, updates);
}
updateUser(1, { isActive: false });
const fullUser = {
    id: 1,
    name: "A",
    email: "a@mail.com",
    isActive: true,
    role: "admin",
};
//Readonly<Type>
const frozenUser = {
    id: 2,
    name: "B",
    email: "b@mail.com",
    isActive: true,
    role: "viewer",
};
const preview = { id: 3, name: "C" };
const userData = { id: 4, name: "D", isActive: true, role: "editor" };
const userDirectory = {
    1: fullUser,
    2: frozenUser,
};
const mail = "contact@mail.com";
function createUser(name, role) {
    return { id: Date.now(), name, email: `${name}@mail.com`, isActive: true, role };
}
class Admin {
    name;
    level;
    constructor(name, level) {
        this.name = name;
        this.level = level;
    }
    promote() {
        return `${this.name} promoted to level ${this.level + 1}`;
    }
}
const newAdminArgs = ["E", 5];
const eve = new Admin(...newAdminArgs);
console.log(eve.promote());
function logStatus() {
    console.log(`${this.name} is ${this.isActive ? "active" : "inactive"}`);
}
function chooseRole(role, allowed) {
    return allowed.includes(role) ? role : allowed[0];
}
const chosen = chooseRole("editor", ["admin", "editor", "viewer"]);
//# sourceMappingURL=UtilityTypes.js.map