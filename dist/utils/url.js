"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getNormalizedUrl = exports.getBaseUrl = void 0;

var getBaseUrl = function getBaseUrl() {
  var rawUrl = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var baseUrl = rawUrl.indexOf('http') == 0 ? undefined : 'http://localhost';
  var url = new URL(rawUrl, baseUrl);
  return url;
};

exports.getBaseUrl = getBaseUrl;

var getNormalizedUrl = function getNormalizedUrl() {
  var rawUrl = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var url = getBaseUrl(rawUrl);
  var searchParamKeys = [];

  if (url.search) {
    for (var key of url.searchParams.keys()) {
      searchParamKeys.push(key);
    }
  }

  var searchEscaped = url.search ? '\\' + url.search : '';
  return {
    path: url.host + url.pathname,
    searchParamKeys,
    fullUrl: url.host + url.pathname + url.search,
    fullUrlEscaped: url.host + url.pathname + searchEscaped
  };
};

exports.getNormalizedUrl = getNormalizedUrl;