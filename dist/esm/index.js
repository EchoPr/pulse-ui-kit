import React from 'react';

var styles$3 = {};

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

var styles$2 = {};

var textStyles = {};

function Heading(_a) {
    var children = _a.children, _b = _a.level, level = _b === void 0 ? 1 : _b, _c = _a.color, color = _c === void 0 ? 'grey' : _c;
    return (React.createElement("p", { className: "".concat(textStyles.text, " ").concat(textStyles["text-".concat(color)], " ").concat(styles$2.heading, " ").concat(styles$2["heading-".concat(level)]) }, children));
}

var styles$1 = {};

function Body(_a) {
    var children = _a.children, _b = _a.level, level = _b === void 0 ? 1 : _b, _c = _a.color, color = _c === void 0 ? 'grey' : _c;
    return (React.createElement("p", { className: "".concat(textStyles.text, " ").concat(textStyles["text-".concat(color)], " ").concat(styles$1.bdy, " ").concat(styles$1["bdy-".concat(level)]) }, children));
}

var styles = {};

function Label(_a) {
    var children = _a.children, _b = _a.level, level = _b === void 0 ? 1 : _b, _c = _a.color, color = _c === void 0 ? 'grey' : _c;
    return (React.createElement("p", { className: "".concat(textStyles.text, " ").concat(textStyles["text-".concat(color)], " ").concat(styles.lbl, " ").concat(styles["lbl-".concat(level)]) }, children));
}

function Badge(_a) {
    var text = _a.text, _b = _a.style, style = _b === void 0 ? 'default' : _b, _c = _a.type, type = _c === void 0 ? 'span' : _c;
    return React.createElement("span", { className: "badge badge-".concat(style, " badge-").concat(type) }, text);
}

export { Badge, Body, Button, Heading, Label };
//# sourceMappingURL=index.js.map
