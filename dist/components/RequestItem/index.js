"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RequestItem = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactJsonEditorAjrm = _interopRequireDefault(require("react-json-editor-ajrm"));

var _en = _interopRequireDefault(require("react-json-editor-ajrm/locale/en"));

var _Field = require("../Field");

var _GlobalStyles = require("../GlobalStyles");

var _PlayButton = require("../PlayButton");

var _statusMap = _interopRequireDefault(require("../../utils/statusMap"));

var _styles = require("./styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var statusCodes = Object.keys(_statusMap.default);

var RequestItem = _ref => {
  var {
    url,
    skip,
    method,
    status,
    response,
    delay,
    onToggle,
    onFieldChange
  } = _ref;

  var onChangeHandler = _ref2 => {
    var {
      target
    } = _ref2;
    var {
      name,
      value,
      type
    } = target;

    if (type === 'number') {
      onFieldChange(+value, name);
    } else {
      onFieldChange(value, name);
    }
  };

  return /*#__PURE__*/_react.default.createElement("div", {
    style: _styles.containerStyles
  }, /*#__PURE__*/_react.default.createElement(_GlobalStyles.GlobalStyles, null), /*#__PURE__*/_react.default.createElement("div", {
    style: _styles.rowStyles
  }, /*#__PURE__*/_react.default.createElement(_Field.Field, null, /*#__PURE__*/_react.default.createElement(_PlayButton.PlayButton, {
    play: !skip,
    onClick: onToggle
  })), /*#__PURE__*/_react.default.createElement(_Field.Field, null)), /*#__PURE__*/_react.default.createElement("div", {
    style: _styles.rowStyles
  }, /*#__PURE__*/_react.default.createElement(_Field.Field, {
    label: "URL"
  }, " ", url, " "), /*#__PURE__*/_react.default.createElement(_Field.Field, {
    label: "Status"
  }, /*#__PURE__*/_react.default.createElement("select", {
    style: _styles.selectStyles,
    name: "status",
    onChange: onChangeHandler,
    value: status.toString()
  }, statusCodes.map(option => /*#__PURE__*/_react.default.createElement("option", {
    key: option
  }, option))))), /*#__PURE__*/_react.default.createElement("div", {
    style: _styles.rowStyles
  }, /*#__PURE__*/_react.default.createElement(_Field.Field, {
    label: "Method"
  }, " ", method, " "), /*#__PURE__*/_react.default.createElement(_Field.Field, {
    label: "Delay (ms)"
  }, /*#__PURE__*/_react.default.createElement("input", {
    min: 0,
    name: "delay",
    value: delay,
    type: "number",
    onChange: onChangeHandler,
    style: _styles.inputStyles
  }))), /*#__PURE__*/_react.default.createElement("div", {
    style: _styles.rowStyles
  }, /*#__PURE__*/_react.default.createElement(_Field.Field, {
    label: "Response"
  }, typeof response === 'function' ? /*#__PURE__*/_react.default.createElement("div", {
    style: _styles.noteStyles
  }, "This is a custom function. You can only change it from the declaration.") : /*#__PURE__*/_react.default.createElement(_reactJsonEditorAjrm.default, {
    name: "response",
    locale: _en.default,
    onBlur: value => onFieldChange(value.jsObject, 'response'),
    placeholder: response,
    colors: {
      default: 'black',
      background: 'white',
      string: 'black',
      number: 'black',
      colon: 'black',
      keys: 'black',
      error: 'black'
    },
    style: {
      warningBox: {
        background: '#ddd'
      },
      body: {
        fontFamily: 'inherit',
        fontSize: '12px'
      }
    },
    waitAfterKeyPress: 1000,
    height: "120px"
  })), /*#__PURE__*/_react.default.createElement(_Field.Field, null)));
};

exports.RequestItem = RequestItem;
RequestItem.propTypes = {
  url: _propTypes.default.string,
  skip: _propTypes.default.bool,
  method: _propTypes.default.string,
  delay: _propTypes.default.number,
  status: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]),
  response: _propTypes.default.oneOfType([_propTypes.default.object, _propTypes.default.array, _propTypes.default.func]),
  onToggle: _propTypes.default.func,
  onFieldChange: _propTypes.default.func
};