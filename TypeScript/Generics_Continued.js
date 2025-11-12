"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function create(element, children) {
    const el = (element ?? document.createElement('div'));
    const ch = (children ?? []);
    return { element: el, children: ch };
}
const div = create();
const p = create(document.createElement('p'));
const section = create(document.createElement('section'), [document.createElement('p'), document.createElement('span')]);
//# sourceMappingURL=Generics_Continued.js.map