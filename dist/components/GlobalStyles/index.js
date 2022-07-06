"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GlobalStyles = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var GlobalStyles = () => /*#__PURE__*/_react.default.createElement("style", null, "\n        .storybook-addon-mock-fieldItem > div > div > svg > path {\n            opacity: 0;\n        }\n        .storybook-addon-mock-fieldItem > div > div > div > span > div > div > svg > path {\n            opacity: 0;\n        }\n    ");

exports.GlobalStyles = GlobalStyles;