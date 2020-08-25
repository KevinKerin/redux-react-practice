"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var defaultColour = {
  backgroundColor: 'black'
};

var colourReducer = function colourReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultColour;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case "BLUE":
      {
        return {
          backgroundColor: 'blue'
        };
      }

    case "GREEN":
      {
        return {
          backgroundColor: 'green'
        };
      }

    case "YELLOW":
      {
        return {
          backgroundColor: 'yellow'
        };
      }

    case "BROWN":
      {
        return {
          backgroundColor: 'brown'
        };
      }

    case "BLACK":
      {
        return {
          backgroundColor: 'black'
        };
      }

    default:
      {
        return state;
      }
  }
};

var _default = colourReducer;
exports["default"] = _default;