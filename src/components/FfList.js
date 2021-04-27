import React, { Component } from "react";
import axios from "axios";
import Characters from "./Characters";

class FfList extends Component {
  constructor() {
    super();
    this.state = {
      FfCharacter: []
    };
  }

  componentDidMount() {
    axios
      .get("https://www.moogleapi.com/api/v1/characters")
      .then((res) => this.setState({ FfCharacter: res.data }));
  }

  render() {
    const mappedChars = this.state.FfCharacter.map((element, index) => {
      return (
        <div key={element.id}>
          {" "}
          <Characters characters={element} />{" "}
        </div>
      );
    });
    return (
      <div>
        {" "}
        <h1> FF HERE </h1> {mappedChars}
      </div>
    );
  }
}

export default FfList;
