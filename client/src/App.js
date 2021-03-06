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
    record: 0,
    clickArr: [],
    alert
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
    var testClick = this.state.clickArr.includes(id);
    if (testClick === true) {
      this.clickWrong(this.state.lorList);
      this.setState({
        alert: "You already guessed that one!"
      })
    } else {
      this.state.clickArr.push(id);
      this.clickRight(this.state.lorList);
    }
  };

  resetGame = () => {
    const newGame = lorList.map(item => ({
      ...item,
      clicked: false
    }));
    return this.shuffleCards(newGame);
  }

  clickRight = updateGame => {
    console.log("right guess");
    const {currentScore, record} = this.state;
    const newScore = currentScore + 1;
    const newRecord = newScore > record
      ? newScore
      : record;
    this.setState({
      lorList: this.shuffleCards(updateGame),
      currentScore: newScore,
      record: newRecord,
      alert: ""
    });
  }

  clickWrong = () => {
    console.log("wrong guess");
    this.setState({
      currentScore: 0,
      clickArr: [],
      lorList: this.resetGame(lorList)
    });
  }

  render() {
    return (
      <Wrapper>
        <Header currentScore={this.state.currentScore} record={this.state.record} alert={this.state.alert} ></Header>
        <Title></Title>
        {this
          .state
          .lorList
          .map(lorChar => (<Grid
            id={lorChar.id}
            key={lorChar.id}
            name={lorChar.name}
            image={lorChar.image}
            className={this.state.cShake}
            handleClick={this.handleClick}/>))
}
      </Wrapper>
    );
  }
}

export default App;
