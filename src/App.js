import React, { Component } from 'react';
import './App.css';
import Nav from "./components/Nav";
import Modal from 'react-responsive-modal';
import Characters from "./components/Characters";
import characterList from "./characterList.json";
import dead from "./images/dead.png"

class App extends Component {

  state = {
    characterList,
    currentScore: 0,
    bestScore: 0,
    message: "Only click a character once!",
    open: false
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };

  choose = id => {
    const currentChoice =this.state.characterList.filter(chosen=> chosen.id === id)
      if (currentChoice[0].chosen === true){
        if (this.state.currentScore > this.state.bestScore) {
          this.setState({ bestScore: this.state.currentScore});
        }
        const reset = this.state.characterList.map(chosen=>{
          chosen.chosen = "false";
        });
        const winMessage= "Try again vaquero, "+currentChoice[0].image.charAt(0).toUpperCase() + currentChoice[0].image.slice(1)+" just killed you!";
        this.setState({ open: true });
        this.setState({ message: winMessage });
        this.setState({ currentScore: 0});
        this.setState({ reset });
      }else{
        const newInfo= this.state.characterList.map(chosen=>{
          if(chosen.id === id ){
            chosen.chosen = true;
          }
        });
        const winMessage= "Sharpshooter! you just got "+currentChoice[0].image.charAt(0).toUpperCase() + currentChoice[0].image.slice(1)+"!";
        this.setState({ currentScore: this.state.currentScore + 1 });
        this.setState({ characterList, newInfo });
        this.setState({ message: winMessage });

      };
      console.log(this.state.characterList)
};

  render() {
    const { open } = this.state;
    return (
      <div>
        <Nav currentScore={this.state.currentScore} bestScore={this.state.bestScore} message={this.state.message} />
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
        <Modal open={open} onClose={this.onCloseModal} little>
          <h2 id = "gameover">GAME OVER</h2>
          <img src= {dead} alt= "game over" id="dead" />
        </Modal>
      </div>
    );
  }
}

export default App;
