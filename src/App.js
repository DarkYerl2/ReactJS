import React from "react";
import "./App.css";

function Helloworld(props) {
  console.log(props)
  return (
  <div id="hello">
    <h3>{props.subtitle}</h3>
    {props.mytext}
  </div>); 
}

function App() {
  return (
    <div>
      This is my component:
      <Helloworld mytext="Hello Daniel" subtitle="Proyecto" /> 
      <Helloworld mytext="Hola Mundo" subtitle="Proyecto 2"/> 
      <Helloworld mytext="Hello" subtitle="Proyecto 3"/>
    </div>
  );
}

export default App;
