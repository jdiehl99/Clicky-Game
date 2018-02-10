import React, { Component } from 'react';
import './style.css';
import Grid from "./components/Grid";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import lorList from "./lor.json";

class App extends Component {
state = {
    lorList,
    currentScore: 0,
    record: 0,
    message: "",
    classShake: "",
};

  render() {
    return (
      <Wrapper>
        <Title>Choose Your Character</Title>
        {this.state.lorList.map(lorChar => (
          <Grid
            id={lorChar.id}
            key={lorChar.id}
            name={lorChar.name}
            image={lorChar.image}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
