function create(element, children) {
    var el = (element !== null && element !== void 0 ? element : document.createElement('div'));
    var ch = (children !== null && children !== void 0 ? children : []);
    return { element: el, children: ch };
}
var div = create();
var p = create(document.createElement('p'));
var section = create(document.createElement('section'), [document.createElement('p'), document.createElement('span')]);
