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
    const currentChoice =this.state.characterList.filter(chosen=> chosen.id === id)
      if (currentChoice[0].chosen === true){
        console.log("you lose")
        const reset = this.state.characterList.map(chosen=>{
          chosen.chosen = "false";
        });
        this.setState({ reset });
      }else{
        const newInfo= this.state.characterList.map(chosen=>{
          if(chosen.id === id ){
            chosen.chosen = true;
          }
        });
        this.setState({ newInfo });
      };
      console.log(this.state.characterList)
};

change = id =>{

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
