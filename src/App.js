import React from 'react';
import logo from './logo.svg';
import { useSelector, useDispatch } from 'react-redux';
import './App.css';
import { changeColour, changeShape } from './actions';

function App() {

  const colour = useSelector(state => state.colourReducer);
  const shape = useSelector(state => state.shapeReducer);
  const style = {
    backgroundColor: colour.backgroundColor,
    width: shape.width,
    height: shape.height,
    borderRadius: shape.borderRadius
  }
  console.log(style)
  const dispatch = useDispatch();

  return (
    <div className="App">
      <header className="App-header">
        <h1>Shape Shifter</h1>
        <div style={style}></div>
        <table>
          <tbody>
          <tr>
            <td><button onClick={() => dispatch(changeColour("GREEN"))}>Green</button></td>
            <td><button onClick={() => dispatch(changeColour("YELLOW"))}>Yellow</button></td>
            <td><button onClick={() => dispatch(changeColour("BLACK"))}>Black</button></td>
            <td><button onClick={() => dispatch(changeColour("BLUE"))}>Blue</button></td>
            <td><button onClick={() => dispatch(changeColour("BROWN"))}>Brown</button></td>
          </tr>
          <tr>
            <td><button onClick={() => dispatch(changeShape("SQUARE"))}>Square</button></td>
            <td><button onClick={() => dispatch(changeShape("OVAL"))}>Oval</button></td>
            <td><button onClick={() => dispatch(changeShape("CIRCLE"))}>Circle</button></td>
            <td><button onClick={() => dispatch(changeShape("RECTANGLE"))}>Rectangle</button></td>
          </tr>
          </tbody>
        </table>
      </header>
    </div>
  );
}

export default App;
