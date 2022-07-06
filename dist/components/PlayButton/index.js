"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PlayButton = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PlayButton = _ref => {
  var {
    play,
    small,
    onClick
  } = _ref;
  var buttonStyles = {
    boxSizing: 'border-box',
    height: small ? '12px' : '24px',
    borderColor: 'transparent transparent transparent #202020',
    transition: '100ms all ease',
    willChange: 'border-width',
    cursor: 'pointer',
    background: 'transparent',
    borderStyle: play ? 'double' : 'solid',
    borderWidth: play ? small ? '0px 0 0px 12px' : '0px 0 0px 24px' : '11px 0 11px 22px',
    padding: 0
  };
  return /*#__PURE__*/_react.default.createElement("button", {
    style: buttonStyles,
    onClick: onClick
  });
};

exports.PlayButton = PlayButton;
PlayButton.propTypes = {
  play: _propTypes.default.bool,
  small: _propTypes.default.bool,
  onClick: _propTypes.default.func
};
PlayButton.defaultProps = {
  play: false,
  small: false,
  onClick: null
};