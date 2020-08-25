"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.changeShape = exports.changeColour = void 0;

var changeColour = function changeColour(colour) {
  return {
    type: colour
  };
};

exports.changeColour = changeColour;

var changeShape = function changeShape(shape) {
  return {
    type: shape
  };
};

exports.changeShape = changeShape;