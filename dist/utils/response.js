"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Response = Response;

var _statusMap = _interopRequireDefault(require("./statusMap"));

var _headers = require("./headers");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function Response(url, status, responseText) {
  var _keys = [];
  var all = [];

  var headers = _objectSpread({}, _headers.defaultResponseHeaders); // eslint-disable-next-line no-bitwise


  this.ok = (status / 100 | 0) === 2; // 200-299

  this.statusText = _statusMap.default[status.toString()];
  this.status = status;
  this.url = url;

  this.text = () => Promise.resolve(typeof responseText === 'string' ? responseText : JSON.stringify(responseText));

  this.json = () => Promise.resolve(responseText);

  this.clone = () => new Response(url, status, responseText), this.headers = {
    keys: () => _keys,
    entries: () => all,
    get: n => headers[n.toLowerCase()],
    has: n => n.toLowerCase() in headers
  };
}