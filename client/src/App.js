import React, {Component} from 'react';
import './style.css';
import Grid from "./components/Grid";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Header from "./components/Header";
import lorList from "./lor.json";

class App extends Component {
  state = {
    lorList,
    currentScore: 0,
    record: 0
  };

  componentDidMount() {
    this.setState({
      lorList: this.shuffleCards(this.state.lorList)
    });
  }

  shuffleCards = lorList => {
    let i = lorList.length - 1;
    while (i > 0) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = lorList[i];
      lorList[i] = lorList[j];
      lorList[j] = temp;
      i--;
    }

    return lorList;
  };

  handleClick = id => {
    let goodGuess = false;
    const newLayout = lorList.map(item => {
      const thisChar = {...item};
      if (id === thisChar.id) {
        if(!thisChar.clicked) {
          thisChar.clicked = true;
          goodGuess = true;
        } 
      } 
      return thisChar;
    });

    goodGuess
      ? this.clickRight(newLayout)
      : this.clickWrong(newLayout);
  };

  resetGame = () => {
    const newGame = lorList.map(item => ({
      ...item,
      clicked: false
    }));
    return this.shuffleCards(newGame);
  }

  clickRight = updateGame => {
    const {currentScore, record} = this.state;
    const newScore = currentScore + 1;
    const newRecord = newScore > record
      ? newScore
      : record;
    this.setState({
      lorList: this.shuffleCards(updateGame),
      currentScore: newScore,
      record: newRecord
    });
  }

  clickWrong = () => {
    this.setState({
      currentScore: 0,
      lorList: this.resetGame(lorList)
    });
  }

  render() {
    return (
      <Wrapper>
        <Header currentScore={this.state.currentScore} record={this.state.record}></Header>
        <Title></Title>
        {this
          .state
          .lorList
          .map(lorChar => (<Grid
            id={lorChar.id}
            key={lorChar.id}
            name={lorChar.name}
            image={lorChar.image}
            handleClick={this.handleClick}/>))
}
      </Wrapper>
    );
  }
}

export default App;
