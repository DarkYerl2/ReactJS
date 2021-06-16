import React from "react";
import "./App.css";

/* function Helloworld(props) {
  
  return (
  <div id="hello">
    <h3>{props.subtitle}</h3>
    {props.mytext}
  </div>); 
} */

class Helloworld extends React.Component {
  state = {
    show: true,
  };

  toggleShow = () => {
    this.setState({show: !this.state.show})
  }
  render() {
    if (this.state.show) {
      return (
        <div id="hello">
          <h3>{this.props.subtitle}</h3>
          {this.props.mytext}
          <button onClick={this.toggleShow  } > Presiona El button</button>
        </div>
      );
    } else{
      return <h1> 
        There are not a Element
        <button onClick={this.toggleShow}>Volver como estaba</button>
        </h1>
    }
  }
}

function App() {
  return (
    <div>
      This is my component:
      <Helloworld mytext="Hello Daniel" subtitle="Proyecto" />
      <Helloworld mytext="Hola Mundo" subtitle="Proyecto 2" />
      <Helloworld mytext="Hello" subtitle="Proyecto 3" />
    </div>
  );
}

export default App;
