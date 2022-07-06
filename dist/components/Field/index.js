"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Field = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Field = _ref => {
  var {
    label,
    children
  } = _ref;
  var fieldContainerStyles = {
    display: 'flex',
    flex: '1 0 0',
    flexDirection: 'row',
    justifyContent: label ? 'space-around' : 'flex-start',
    alignItems: 'center',
    borderBottom: '1px solid #ddd',
    padding: '12px'
  };
  var labelStyles = {
    fontWeight: '600',
    flex: '0.3 0 0',
    minWidth: '60px',
    fontSize: '14px'
  };
  var fieldItemStyles = {
    display: 'flex',
    flex: '0.7 0 0',
    fontSize: '14px',
    wordBreak: 'break-all'
  };
  return /*#__PURE__*/_react.default.createElement("div", {
    style: fieldContainerStyles
  }, label && /*#__PURE__*/_react.default.createElement("div", {
    style: labelStyles
  }, label), /*#__PURE__*/_react.default.createElement("div", {
    className: "storybook-addon-mock-fieldItem",
    style: fieldItemStyles
  }, children));
};

exports.Field = Field;
Field.propTypes = {
  label: _propTypes.default.string,
  children: _propTypes.default.node
};
Field.defaultProps = {
  label: '',
  children: null
};