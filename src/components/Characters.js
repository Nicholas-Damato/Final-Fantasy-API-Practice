import React, { Component } from "react";

class Characters extends Component {
  constructor(props) {
    super(props);
    this.state = {
      characters: null
    };
  }

  render() {
    const { characters } = this.props;
    return (
      <div>
        <h4> {characters.name}</h4>
        {characters && (
          <div>
            <img alt={characters.name} src={characters.pictures.url} />
            <p> AGE:{characters.age} </p>
            <p> GENDER:{characters.gender} </p>
            <p> RACE:{characters.race} </p>
            <p> JOB:{characters.job} </p>
            <p> JOB:{characters.origin} </p>
            <p>{characters.description}</p>
          </div>
        )}
      </div>
    );
  }
}

export default Characters;
