import React, { Component } from 'react';
import './App.css';
import Nav from "./components/Nav";
// import Wrapper from "./components/Wrapper"
import Characters from "./components/Characters";
import characterList from "./characterList.json";


class App extends Component {

  state = {
    characterList,
    currentScore: 0,
    bestScore: 0
  };


  choose = id => {
    const currentChoice =this.state.characterList.filter(chosen=> chosen.id === id)
      if (currentChoice[0].chosen === true){
        if (this.state.currentScore > this.state.bestScore) {
          this.setState({ bestScore: this.state.currentScore});
        }
        console.log("you lose")
        const reset = this.state.characterList.map(chosen=>{
          chosen.chosen = "false";
        });
        this.setState({ currentScore: 0});
        this.setState({ reset });
      }else{
        const newInfo= this.state.characterList.map(chosen=>{
          if(chosen.id === id ){
            chosen.chosen = true;
          }
        });
        this.setState({ currentScore: this.state.currentScore + 1 });
        this.setState({ characterList, newInfo });
        
      };
      console.log(this.state.characterList)
};

  render() {
    return (
      <div>
        <Nav currentScore={this.state.currentScore} bestScore={this.state.bestScore}/>
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
