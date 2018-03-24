import React, { Component } from 'react';
import './App.css';
import Nav from "./components/Nav";
// import Wrapper from "./components/Wrapper"
import Characters from "./components/Characters";
import characterList from "./characterList.json";


class App extends Component {

  state = {
    characterList
  };


  choose = id => {
    const newInfo= this.state.characterList.map(chosen=>{
      if(chosen.id === id ){
        chosen.chosen = true;
      }
  });

  this.setState({ newInfo });
  console.log(this.state.characterList)
};

  render() {
    return (
      <div>
        <Nav />
        <div className="container text-center">
          {this.state.characterList.sort(function(a, b){return 0.5 - Math.random()}).map(current => (
            <Characters
              choose={this.choose}
              id={current.id}
              image={current.image}
              test={current.chosen}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
