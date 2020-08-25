import colourReducer from './colour';
import shapeReducer from './shape';
import { combineReducers } from 'redux';

const combinedReducer = combineReducers({
    colourReducer,
    shapeReducer
});

export default combinedReducer;