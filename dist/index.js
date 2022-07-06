"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _addons = _interopRequireWildcard(require("@storybook/addons"));

var _faker = _interopRequireDefault(require("./utils/faker"));

var _events = require("./utils/events");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var _default = (0, _addons.makeDecorator)({
  name: 'withMock',
  parameterName: 'mockData',
  // This means don't run this decorator if the notes decorator is not set
  skipIfNoParametersOrOptions: true,
  wrapper: (getStory, context, _ref) => {
    var {
      options = [],
      parameters = []
    } = _ref;

    var channel = _addons.default.getChannel();

    _faker.default.makeInitialRequestMap(options.concat(parameters)); // Our simple API above simply sets the notes parameter to a string,
    // which we send to the channel


    channel.emit(_events.ADDONS_MOCK_SEND_DATA, _faker.default.getRequests()); // we can also add subscriptions here using channel.on('eventName', callback);

    channel.on(_events.ADDONS_MOCK_UPDATE_DATA, _ref2 => {
      var {
        item,
        key,
        value
      } = _ref2;

      _faker.default.update(item, key, value);

      channel.emit(_events.ADDONS_MOCK_SEND_DATA, _faker.default.getRequests());
    });
    return getStory(context);
  }
});

exports.default = _default;