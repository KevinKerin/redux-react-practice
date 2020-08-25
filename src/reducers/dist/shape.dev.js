"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var defaultShape = {
  borderRadius: '0',
  width: '150px',
  height: '150px'
};

var shapeReducer = function shapeReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultShape;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case "CIRCLE":
      {
        return {
          width: '150px',
          height: '150px',
          borderRadius: '50%'
        };
      }

    case "OVAL":
      {
        return {
          width: '300px',
          height: '150px',
          borderRadius: '50%'
        };
      }

    case "SQUARE":
      {
        return {
          borderRadius: '0',
          width: '150px',
          height: '150px'
        };
      }

    case "RECTANGLE":
      {
        return {
          borderRadius: '0',
          width: '300px',
          height: '150px'
        };
      }

    default:
      {
        return defaultShape;
      }
  }
};

var _default = shapeReducer;
exports["default"] = _default;