"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _colour = _interopRequireDefault(require("./colour"));

var _shape = _interopRequireDefault(require("./shape"));

var _redux = require("redux");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var combinedReducer = (0, _redux.combineReducers)({
  colourReducer: _colour["default"],
  shapeReducer: _shape["default"]
});
var _default = combinedReducer;
exports["default"] = _default;