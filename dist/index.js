'use strict';

var React = require('react');

var styles$3 = {"btn":"Button-module_btn__daEdK","btn-small":"Button-module_btn-small__ytFVU","btn-normal":"Button-module_btn-normal__-hsp2","btn-default-primary":"Button-module_btn-default-primary__QUc47","btn-default-secondary":"Button-module_btn-default-secondary__Z27TM","btn-default-on-danger":"Button-module_btn-default-on-danger__GfYz1","btn-default-on-default":"Button-module_btn-default-on-default__bW71d","btn-danger-primary":"Button-module_btn-danger-primary__fO5wr","btn-danger-secondary":"Button-module_btn-danger-secondary__wo4RZ"};

function Button(_a) {
    var children = _a.children, variant = _a.variant, _b = _a.style, style = _b === void 0 ? 'primary' : _b, _c = _a.size, size = _c === void 0 ? 'normal' : _c, onClick = _a.onClick;
    var getButtonClasses = function () {
        var baseClass = styles$3.btn;
        var variantStyleClass = variant && style ? styles$3["btn-".concat(variant, "-").concat(style)] : '';
        var sizeClass = styles$3["btn-".concat(size)];
        return [baseClass, variantStyleClass, sizeClass].filter(Boolean).join(' ');
    };
    return (React.createElement("button", { className: getButtonClasses(), onClick: onClick }, children));
}

var styles$2 = {"heading":"Heading-module_heading__TBsJz","heading-1":"Heading-module_heading-1__pB-QF","heading-2":"Heading-module_heading-2__56hyZ","heading-3":"Heading-module_heading-3__1ETGM"};

var textStyles = {"text":"Typography-module_text__Ksf4j","text-white":"Typography-module_text-white__amVHe","text-grey":"Typography-module_text-grey__jsxB6","text-danger":"Typography-module_text-danger__ifMom"};

function Heading(_a) {
    var children = _a.children, _b = _a.level, level = _b === void 0 ? 1 : _b, _c = _a.color, color = _c === void 0 ? 'grey' : _c;
    return (React.createElement("p", { className: "".concat(textStyles.text, " ").concat(textStyles["text-".concat(color)], " ").concat(styles$2.heading, " ").concat(styles$2["heading-".concat(level)]) }, children));
}

var styles$1 = {"bdy":"Body-module_bdy__4uSKP","bdy-1":"Body-module_bdy-1__5q9Os","bdy-2":"Body-module_bdy-2__n6ish","bdy-3":"Body-module_bdy-3__tS9L6"};

function Body(_a) {
    var children = _a.children, _b = _a.level, level = _b === void 0 ? 1 : _b, _c = _a.color, color = _c === void 0 ? 'grey' : _c;
    return (React.createElement("p", { className: "".concat(textStyles.text, " ").concat(textStyles["text-".concat(color)], " ").concat(styles$1.bdy, " ").concat(styles$1["bdy-".concat(level)]) }, children));
}

var styles = {"lbl":"Label-module_lbl__dFKRN","lbl-1":"Label-module_lbl-1__jHimM","lbl-2":"Label-module_lbl-2__7X-pl","lbl-3":"Label-module_lbl-3__unhbp"};

function Label(_a) {
    var children = _a.children, _b = _a.level, level = _b === void 0 ? 1 : _b, _c = _a.color, color = _c === void 0 ? 'grey' : _c;
    return (React.createElement("p", { className: "".concat(textStyles.text, " ").concat(textStyles["text-".concat(color)], " ").concat(styles.lbl, " ").concat(styles["lbl-".concat(level)]) }, children));
}

function Badge(_a) {
    var text = _a.text, _b = _a.style, style = _b === void 0 ? 'default' : _b, _c = _a.type, type = _c === void 0 ? 'span' : _c;
    return React.createElement("span", { className: "badge badge-".concat(style, " badge-").concat(type) }, text);
}

exports.Badge = Badge;
exports.Body = Body;
exports.Button = Button;
exports.Heading = Heading;
exports.Label = Label;
//# sourceMappingURL=index.js.map
