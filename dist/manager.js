"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _addons = require("@storybook/addons");

var _api = require("@storybook/api");

var _components = require("@storybook/components");

var _events = require("./utils/events");

var _RequestItem = require("./components/RequestItem");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var ADDON_ID = 'mockAddon';
var PARAM_KEY = 'mockAddon';
var PANEL_ID = "".concat(ADDON_ID, "/panel");

var MockPanel = () => {
  var [mockData, setMockData] = (0, _react.useState)([]);
  var emit = (0, _api.useChannel)({
    ADDONS_MOCK_SEND_DATA: parameters => {
      setMockData(parameters);
    }
  });

  var onSkip = item => {
    emit(_events.ADDONS_MOCK_UPDATE_DATA, {
      item,
      key: 'skip',
      value: !item.skip
    });
  };

  var onRequestChange = (item, key, value) => {
    emit(_events.ADDONS_MOCK_UPDATE_DATA, {
      item,
      key,
      value
    });
  };

  return /*#__PURE__*/_react.default.createElement(_components.ScrollArea, null, mockData.map((item, index) => /*#__PURE__*/_react.default.createElement(_RequestItem.RequestItem, {
    key: index,
    url: item.url,
    skip: item.skip,
    method: item.method,
    status: item.status,
    response: item.response,
    delay: item.delay,
    onToggle: () => onSkip(item),
    onFieldChange: (value, name) => onRequestChange(item, name, value)
  })));
};

function register() {
  _addons.addons.register(ADDON_ID, () => {
    // eslint-disable-next-line react/prop-types
    var render = _ref => {
      var {
        active,
        key
      } = _ref;
      return /*#__PURE__*/_react.default.createElement(_components.AddonPanel, {
        active: active,
        key: key
      }, /*#__PURE__*/_react.default.createElement(MockPanel, null));
    };

    var title = 'Mock Request';

    _addons.addons.add(PANEL_ID, {
      type: _addons.types.PANEL,
      title,
      render,
      paramKey: PARAM_KEY
    });
  });
}

var _default = register();

exports.default = _default;